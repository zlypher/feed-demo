import { Article } from "@/data/articles";
import { FeedItem } from "./feed-item";

interface IFeedProps {
  articles: Article[];
}

export const Feed = ({ articles }: IFeedProps) => {
  return (
    <section className="bg-gray-200 flex flex-col space-y-4 p-4">
      {articles.map((article) => (
        <FeedItem key={article.id} article={article} />
      ))}
    </section>
  );
};
