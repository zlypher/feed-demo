import { DstArticle } from "@/data/articles";
import { Categories } from "./categories";
import { formatDatetime } from "@/utils/format-datetime";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

interface IFeedItemProps {
  article: DstArticle;
}

export const FeedItem = ({ article }: IFeedItemProps) => {
  return (
    <article className="p-4">
      <header className="mb-2">
        <img src="https://placehold.co/600x400/EEE/31343C" />
      </header>
      <Link href={`/article/${slugify(article.headline)}`}>
        <h2 className="text-xl mb-2">{article.headline}</h2>
      </Link>
      <time dateTime={article.publicationDate}>
        {formatDatetime(new Date(article.publicationDate))}
      </time>
      <Categories categories={article.categories} />
      <p>{article.text}</p>
    </article>
  );
};
