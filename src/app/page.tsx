import FeedPage from "@/components/feed/feed-page";
import { defaultMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Feed | Feed Demo",
  description:
    "Find the latest and trending news here. You read it here first.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Feed | Feed Demo",
    description:
      "Find the latest and trending news here. You read it here first.",
  },
};

export default function Feed() {
  return <FeedPage />;
}
