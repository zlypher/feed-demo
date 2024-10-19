import { Feed } from "@/components/feed";
import { getAllArticles } from "@/data/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <main className="overflow-y-auto flex-1">
      <Feed articles={articles} />
    </main>
  );
}
