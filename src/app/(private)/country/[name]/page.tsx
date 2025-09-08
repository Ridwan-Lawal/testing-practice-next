import BackButton from "@/src/app/_components/details-page/BackButton";
import CountryDetails from "@/src/app/_components/details-page/CountryDetails";
import { getCountryByName } from "@/src/app/_lib/services/countryById";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const country = await getCountryByName(name);

  return {
    title: country?.name?.common,
  };
}

// Using this to convert the route to static.
// export async function generateStaticParams() {}

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <div className="mt-10 border md:mt-16">
      <BackButton />

      <Suspense fallback={<div>Loading...</div>}>
        <CountryDetails countryName={name} />
      </Suspense>
    </div>
  );
}
