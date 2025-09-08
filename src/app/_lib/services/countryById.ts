import { logFullErrorDetailsInDevMode } from "@/src/app/_utils/funcs";
import { Country } from "@/src/app/_utils/types/country-list";
import { throwErrorMessage } from "@/src/app/_utils/types/networkError";
import axios, { AxiosError } from "axios";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const getCountryByName = cache(
  unstable_cache(
    async function (name: string): Promise<Country> {
      const url = `${process.env.COUNTRES_API_URL}/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`;

      try {
        const res = await axios.get<Country>(url);

        console.log(res.data);
        return res.data;
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
      revalidate: 2592000,
      tags: ["getCountryById"],
    },
  ),
);
