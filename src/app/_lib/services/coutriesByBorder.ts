import { logFullErrorDetailsInDevMode } from "@/src/app/_utils/funcs";
import {
  CountryByBorder,
  countryByBorderSchema,
} from "@/src/app/_utils/schemas/country-border-schema";
import { throwErrorMessage } from "@/src/app/_utils/types/networkError";
import axios, { AxiosError } from "axios";
import { unstable_cache } from "next/cache";
import z from "zod";

export const getCountryNameByBorder = unstable_cache(
  async function (code: string): Promise<CountryByBorder | undefined> {
    const url = `${process.env.COUNTRES_API_URL}/alpha/${code}?fields=name`;

    try {
      const res = await axios.get<CountryByBorder>(url);

      //   Runtime validation
      const resValidation = countryByBorderSchema.safeParse(res.data);

      if (!resValidation?.success) {
        if (process.env.NODE_ENV === "development") {
          console.log(
            "Invalid data structure, type is diff from res:",
            z.treeifyError(resValidation?.error)?.errors,
          );
        }
      }

      return resValidation.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        logFullErrorDetailsInDevMode(error);
        if (error?.response?.status) {
          throwErrorMessage(error.response.status);
        } else if (error?.request) {
          throw new Error(
            "Network Error: Please check your internet connection and try again.",
          );
        }
      }

      throw new Error("Something went wrong.");
    }
  },
  ["country-name-data"],
  {
    revalidate: 2592000,
    tags: ["getCountryByName"],
  },
);
