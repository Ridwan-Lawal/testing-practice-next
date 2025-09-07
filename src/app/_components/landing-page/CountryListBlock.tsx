import CountryCard from "@/src/app/_components/landing-page/CountryCard";
import { Country } from "@/src/app/_utils/types/country-list";

interface CountryListBlockTypes {
  countries: Country[];
}

export default function CountryListBlock({ countries }: CountryListBlockTypes) {
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
