import { logFullErrorDetailsInDevMode } from "@/src/app/_utils/funcs";
import { CountryByNameSchema } from "@/src/app/_utils/schemas/country-details-schema";
import { throwErrorMessage } from "@/src/app/_utils/types/networkError";
import axios, { AxiosError } from "axios";
import { unstable_cache } from "next/cache";
import { cache } from "react";
import z from "zod";

export type CountryDetails = z.infer<typeof CountryByNameSchema>;

export const getCountryByName = cache(
  unstable_cache(
    async function (name: string): Promise<CountryDetails | undefined> {
      const url = `${process.env.COUNTRES_API_URL}/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`;

      try {
        const res = await axios.get<CountryDetails[]>(url);

        // I Implemented this for runtime typechecking to keep track of changes in data responses
        const resValidation = CountryByNameSchema.safeParse(res.data[0]);
        if (!resValidation.success) {
          if (process.env.NODE_ENV === "development") {
            console.log(
              "Invalid data structure:",
              z.treeifyError(resValidation.error),
            );
          }
        }

        return resValidation.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          logFullErrorDetailsInDevMode(error);

          if (error.response?.status) {
            throwErrorMessage(error.response?.status);
          } else if (error.request) {
            throw new Error(
              "Network Error: Please check your internet connection and try again.",
            );
          }
        }

        throw new Error("Something went wrong");
      }
    },
    ["countryById"],
    {
      // one month
      revalidate: 2592000,
      tags: ["getCountryById"],
    },
  ),
);
