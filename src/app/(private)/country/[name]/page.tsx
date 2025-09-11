import BackButton from "@/src/app/_components/details-page/BackButton";
import CountryDetails from "@/src/app/_components/details-page/CountryDetails";
import { CountryDetailSkeleton } from "@/src/app/_components/skeleton/CountryDetailsSkeleton";
import { getAllCountries } from "@/src/app/_lib/services/countries";
import { getCountryByName } from "@/src/app/_lib/services/countryById";
import { Metadata } from "next";
import { Suspense } from "react";

interface ParamsType {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({
  params,
}: ParamsType): Promise<Metadata> {
  const { name } = await params;
  const country = await getCountryByName(name);

  return {
    title: country?.name?.common,
    description: country?.flags?.alt,
    openGraph: {
      images: [
        {
          url: country?.flags.png || "",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// Using this to convert the route to static.
export async function generateStaticParams() {
  const allCountries = await getAllCountries();

  const countriesNames = allCountries.map((country) => ({
    name: country.name.common,
  }));

  return countriesNames;
}

export default async function Page({ params }: ParamsType) {
  const { name } = await params;

  return (
    <div className="mt-10 px-4 pb-20 sm:px-6 md:mt-16 md:px-12">
      <BackButton />

      <Suspense fallback={<CountryDetailSkeleton />}>
        <CountryDetails countryName={name} />
      </Suspense>
    </div>
  );
}
