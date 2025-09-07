import { ChevronDown } from "lucide-react";

export default function ContinentFilter() {
  return (
    <div className="relative flex w-[220px] flex-col gap-3">
      {/* dropdown */}
      <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-md shadow-gray-100">
        <p className="text-sm">Filter by Region</p>
        <ChevronDown className="size-4" />
      </div>

      <ul className="absolute top-12 z-20 hidden w-full space-y-2 rounded-md bg-white px-5 py-4 shadow-md shadow-gray-200">
        {["africa", "america"].map((country) => (
          <li
            key={country}
            className="cursor-pointer text-sm capitalize transition-colors hover:text-gray-400"
          >
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}
