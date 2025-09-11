import { getAllCountries } from "@/src/app/_lib/services/countries";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const countries = await getAllCountries();

  //   url for dynameic routes for eachRouter

  const countriesUrl = countries?.map((country) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/country/${country?.name?.common}`,
    lastModified: new Date(Date.now()),
    priority: 0.8,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...countriesUrl,
  ];
}
