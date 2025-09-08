"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 rounded-xs bg-white px-6 py-[5px] text-[14.5px] font-medium shadow-sm md:text-[15px]"
    >
      <MoveLeft className="size-4" />
      <span>Back</span>
    </button>
  );
}
