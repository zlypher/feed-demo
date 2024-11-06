import { Feed } from "@/components/feed";
import { getAllArticles } from "@/data/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Feed Demo",
  description:
    "Find the latest and trending news here. You read it here first.",
  openGraph: {
    url: process.env.DOMAIN ?? "http://localhost:300",
    title: "Home | Feed Demo",
    description:
      "Find the latest and trending news here. You read it here first.",
    type: "website",
    images: "/feed-demo.png",
  },
};

export default function Home() {
  const articles = getAllArticles();

  return (
    <main className="overflow-y-auto flex-1">
      <Feed articles={articles} />
    </main>
  );
}
