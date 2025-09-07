import CountryListBlock from "@/src/app/_components/landing-page/CountryListBlock";
import { getAllCountries } from "@/src/app/_lib/services/countries";

export default async function CountriesList() {
  const countries = await getAllCountries();

  return <CountryListBlock countries={countries} />;
}
