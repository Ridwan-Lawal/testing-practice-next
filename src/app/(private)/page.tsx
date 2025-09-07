import ContinentFilter from "@/src/app/_components/landing-page/ContinentFilter";
import CountriesList from "@/src/app/_components/landing-page/CountriesList";
import SearchForm from "@/src/app/_components/landing-page/SearchForm";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="mt-6 flex flex-col gap-8 px-4 sm:flex-row sm:justify-between sm:px-6">
        <SearchForm />
        <ContinentFilter />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <CountriesList />
      </Suspense>
    </div>
  );
}
