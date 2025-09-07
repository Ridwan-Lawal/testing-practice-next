import { Search } from "lucide-react";

export default function SearchForm() {
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
        defaultValue=""
        autoComplete="country"
        placeholder="Search for a country..."
        className="text-sm font-medium text-gray-400 placeholder:text-gray-200 focus:outline-none"
      />
    </form>
  );
}
