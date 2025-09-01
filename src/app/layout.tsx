import React, { PropsWithChildren } from "react";

import "@/_styles/global.css";
import { Metadata } from "next";
import { nunitoSans } from "@/src/app/_styles/font";

export const metadata: Metadata = {
  title: {
    template: "%s - Countries",
    default: "Home - Countries",
  },

  description: "This is a basic description of the countries",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${nunitoSans?.className} antialiased`}>{children}</body>
    </html>
  );
}
