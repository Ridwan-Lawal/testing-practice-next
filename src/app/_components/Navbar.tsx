import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex h-[70px] items-center bg-white px-6 shadow-md shadow-gray-200">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <h1 className="text-[18px] font-bold">Where in the world?</h1>

        <div className="flex items-center gap-3">
          <Moon className="size-4 text-gray-950" />
          <p className="text-[15px] font-medium capitalize">Dark mode</p>
        </div>
      </div>
    </nav>
  );
}
