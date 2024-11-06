import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Feed Demo",
  description:
    "This is a simple feed demo project. It include a feed of different articles and detail pages for individual articles.",
  robots: { index: false, follow: false },
  openGraph: {
    url: process.env.DOMAIN ?? "http://localhost:300/",
    title: "Feed Demo",
    description:
      "This is a simple feed demo project. It include a feed of different articles and detail pages for individual articles.",
    type: "website",
    images: "/feed-demo.png",
  },
};
