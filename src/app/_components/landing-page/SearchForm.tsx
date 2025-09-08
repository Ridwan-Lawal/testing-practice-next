"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentQuery = searchParams.get("q") ?? "";
  const handleCountrySearchDebounced = useDebouncedCallback(
    handleCountrySearch,
    300,
  );

  function handleCountrySearch(formValue: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (!formValue) {
      params.delete("q");
    } else {
      params.set("q", formValue);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <form
      action=""
      autoComplete="on"
      className="flex items-center gap-6 rounded-md bg-white px-6 py-3 shadow-md shadow-gray-200 sm:w-[300px] md:w-[350px] lg:w-[400px]"
    >
      <Search className="size-5 text-gray-400" />
      <input
        type="text"
        name="search"
        id="search"
        defaultValue={currentQuery}
        onChange={(e) => handleCountrySearchDebounced(e.target.value)}
        autoComplete="country"
        placeholder="Search for a country by name or capital..."
        className="text-sm font-medium text-gray-700 placeholder:text-gray-200 focus:outline-none"
      />
    </form>
  );
}
