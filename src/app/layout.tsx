import { PropsWithChildren } from "react";

import "@/_styles/globals.css";
import { nunitoSans } from "@/src/app/_styles/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Rest Countries",
    default: "Home - Rest Countries",
  },

  description:
    "Discover detailed information about every country in the world. Browse flags, population, regions, capitals, and border countries with our interactive country explorer.",

  twitter: {
    description:
      "Discover detailed information about every country in the world. Browse flags, population, regions, capitals, and border countries with our interactive country explorer.",
    title: "Rest Countries",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${nunitoSans?.className} antialiased`}>{children}</body>
    </html>
  );
}
