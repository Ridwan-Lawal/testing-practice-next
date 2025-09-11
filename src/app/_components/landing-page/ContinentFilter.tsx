"use client";

import { Country } from "@/src/app/_utils/types/country-list";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ContinentFilterTypes {
  countries: Country[];
}

export default function ContinentFilter({ countries }: ContinentFilterTypes) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentContinent, setCurrentContinent] = useState<string | null>(
    searchParams.get("continent"),
  );

  const handleDropdown = () => setDropdownIsOpen((cur) => !cur);

  const continents = Array.from(
    new Set(countries.map((country) => country.region)),
  );

  function onSelectContinent(continent: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (continent === currentContinent) {
      setCurrentContinent(null);
      params.delete("continent");
    } else {
      setCurrentContinent(continent);
      params.set("continent", continent);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    function handleClickOutsideDropdown(e: MouseEvent) {
      const targetEl = e.target as HTMLElement;

      if (!targetEl.closest(".dropdown-block")) {
        setDropdownIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutsideDropdown);

    return () =>
      window.removeEventListener("click", handleClickOutsideDropdown);
  }, []);

  return (
    <div className="dropdown-block relative flex w-[220px] flex-col gap-3">
      {/* dropdown */}
      <button
        onClick={handleDropdown}
        className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-md shadow-gray-100"
      >
        <span className="text-sm">
          {currentContinent ?? "Filter by Region"}
        </span>
        <ChevronDown
          className={`size-4 ${dropdownIsOpen ? "rotate-180" : "rotate-0"} transition-transform`}
        />
      </button>

      <ul
        className={`absolute top-12 z-20 w-full space-y-2 rounded-md bg-white px-5 py-4 shadow-md shadow-gray-200 ${dropdownIsOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"} transition-all duration-300`}
      >
        {["All", ...continents].map((continent) => (
          <li
            key={continent}
            onClick={() => onSelectContinent(continent)}
            className={`cursor-pointer text-sm capitalize transition-colors hover:text-gray-400 ${continent === currentContinent && "font-bold"}`}
          >
            {continent}
          </li>
        ))}
      </ul>
    </div>
  );
}
