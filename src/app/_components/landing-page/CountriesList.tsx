import CountryCard from "@/src/app/_components/landing-page/CountryCard";
import { getAllCountries } from "@/src/app/_lib/services/countries";
import { StrUnd } from "@/src/app/_utils/types/reusables";
import Link from "next/link";

interface CountriesListType {
  continent: StrUnd;
  searchQuery: StrUnd;
}

export default async function CountriesList({
  continent,
  searchQuery,
}: CountriesListType) {
  const countries = await getAllCountries(continent, searchQuery);

  if (!countries.length) {
    return (
      <p
        role="alert"
        className="mt-20 flex items-center justify-center font-medium text-red-500"
      >
        There&apos;s no Country or Capital with the name
        <span className="font-bold">
          &ldquo;{searchQuery}
          &rdquo;
        </span>
        in this region. Try other regions.
      </p>
    );
  }

  return (
    <div
      role="contentinfo"
      className="mt-10 grid grid-cols-1 justify-items-center gap-10 px-4 sm:grid-cols-2 sm:px-6 md:grid-cols-3 xl:grid-cols-4"
    >
      {/* country */}
      {countries?.map((country, idx) => (
        <Link href={`/country/${country.name.common}`} key={idx}>
          <CountryCard country={country} priority={idx < 3 ? true : false} />
        </Link>
      ))}
    </div>
  );
}
