import { DstArticle } from "@/data/articles";
import { FeedItem } from "./feed-item";

interface IFeedProps {
  articles: DstArticle[];
}

export const Feed = ({ articles }: IFeedProps) => {
  return (
    <section>
      {articles.map((article) => (
        <FeedItem key={article.id} article={article} />
      ))}
    </section>
  );
};
