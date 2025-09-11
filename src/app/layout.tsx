import { PropsWithChildren } from "react";

import "@/_styles/globals.css";
import { nunitoSans } from "@/src/app/_styles/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - REST Countries",
    default: "Home - REST Countries",
  },

  description:
    "Explore 250+ countries with flags, population, capitals, and detailed statistics. The ultimate world reference guide.",

  keywords: [
    "countries database",
    "world countries",
    "country information",
    "country flags",
    "world atlas",
    "country statistics",
    "population data",
    "country capitals",
    "world geography",
    "countries API",
    "REST countries",
    "country explorer",
    "world reference",
  ],

  authors: [{ name: "Lawal Ridwan" }],
  creator: "Lawal Ridwan",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "REST Countries",
    title: "Countries Explorer - Complete World Database",
    description:
      "Explore 250+ countries with flags, population, capitals, and detailed statistics. The ultimate world reference guide.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "REST Countries Explorer - World Database",
        type: "image/png",
      },
    ],
  },

  twitter: {
    description:
      "Explore 250+ countries with flags, population, capitals, and detailed statistics. The ultimate world reference guide.",
    title: "Rest Countries",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${nunitoSans?.className} antialiased`}>{children}</body>
    </html>
  );
}
