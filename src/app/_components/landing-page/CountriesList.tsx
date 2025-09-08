import CountryCard from "@/src/app/_components/landing-page/CountryCard";
import { getAllCountries } from "@/src/app/_lib/services/countries";

interface CountriesListType {
  continent: string | undefined;
}

export default async function CountriesList({ continent }: CountriesListType) {
  const countries = await getAllCountries(continent);

  return (
    <div
      role="contentinfo"
      className="mt-10 grid grid-cols-1 justify-items-center gap-10 px-4 sm:grid-cols-2 sm:px-6 md:grid-cols-3 xl:grid-cols-4"
    >
      {/* country */}
      {countries?.map((country, idx) => (
        <CountryCard
          key={idx}
          country={country}
          priority={idx < 3 ? true : false}
        />
      ))}
    </div>
  );
}
