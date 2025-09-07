import { Country } from "@/src/app/_utils/types/country-list";
import { throwErrorMessage } from "@/src/app/_utils/types/networkError";
import axios, { AxiosError } from "axios";
import { unstable_cache } from "next/cache";

export const getAllCountries = unstable_cache(
  async function (): Promise<Country[]> {
    const url = `${process.env.COUNTRES_API_URL}/all?fields=name,population,region,capital,flags`;
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
);
