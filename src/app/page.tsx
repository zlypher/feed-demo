import { Feed } from "@/components/feed";
import { getAllArticles } from "@/data/articles";
import { defaultMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Home | Feed Demo",
  description:
    "Find the latest and trending news here. You read it here first.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Home | Feed Demo",
    description:
      "Find the latest and trending news here. You read it here first.",
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
