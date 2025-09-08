import ContinentFilter from "@/src/app/_components/landing-page/ContinentFilter";
import SearchForm from "@/src/app/_components/landing-page/SearchForm";
import { getAllCountries } from "@/src/app/_lib/services/countries";

export default async function Filters() {
  const countries = await getAllCountries();

  return (
    <>
      <SearchForm />
      <ContinentFilter countries={countries} />
    </>
  );
}
