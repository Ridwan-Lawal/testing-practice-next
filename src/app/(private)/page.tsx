import CountriesList from "@/src/app/_components/landing-page/CountriesList";
import Filters from "@/src/app/_components/landing-page/Filters";
import { Suspense } from "react";

interface PageTypes {
  searchParams: Promise<{ continent?: string; q?: string }>;
}

export default async function Page({ searchParams }: PageTypes) {
  const paramsData = await searchParams;

  const suspenseKey = `${paramsData.continent}-${paramsData.q}`;

  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="mt-6 flex flex-col gap-8 px-4 sm:flex-row sm:justify-between sm:px-6">
        <Filters />
      </div>

      <Suspense fallback={<div>Loading...</div>} key={suspenseKey}>
        <CountriesList
          continent={paramsData?.continent}
          searchQuery={paramsData?.q}
        />
      </Suspense>
    </div>
  );
}
