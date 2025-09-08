import { Country } from "@/src/app/_utils/types/country-list";
import { throwErrorMessage } from "@/src/app/_utils/types/networkError";
import axios, { AxiosError } from "axios";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const getAllCountries = cache(
  unstable_cache(
    async function (continent?: string | undefined): Promise<Country[]> {
      const fields = "fields=name,population,region,capital,flags,continents";

      const url =
        continent === "All" || !continent
          ? `${process.env.COUNTRES_API_URL}/all?${fields}`
          : `${process.env.COUNTRES_API_URL}/region/${continent}?${fields}`;

      console.log(url);

      try {
        console.log("🚀 CACHE MISS - Fetching from API");
        const res = await axios.get<Country[]>(url);

        console.log(res.data.at(0));

        return res.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status) {
            if (process.env.NODE_ENV === "development") {
              console.error(error.message, error.status);
            }
            throwErrorMessage(error.response.status);
          } else if (error.request) {
            throw new Error(
              "Network Error: Please check your internet connection and try again.",
            );
          }
        }
      }

      throw new Error("An unexpected error occured.");
    },
    ["all-countries"],
    {
      tags: ["countries"],
      revalidate: false,
    },
  ),
);
