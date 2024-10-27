import { DstArticle } from "@/data/articles";
import { FeedItem } from "./feed-item";

interface IFeedProps {
  articles: DstArticle[];
}

export const Feed = ({ articles }: IFeedProps) => {
  return (
    <section className="bg-white flex flex-col space-y-4">
      {articles.map((article) => (
        <FeedItem key={article.id} article={article} />
      ))}
    </section>
  );
};
