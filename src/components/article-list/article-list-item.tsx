import { TArticle } from "@/data/articles";
import { Categories } from "../article/categories";
import { formatDatetime } from "@/utils/format-datetime";
import Link from "next/link";
import { ImageWithFallback } from "../common/image-with-fallback";

interface IArticleListItemProps {
  article: TArticle;
  priority?: boolean;
}

export const ArticleListItem = ({
  article,
  priority,
}: IArticleListItemProps) => {
  return (
    <article
      className="bg-white rounded-sm overflow-hidden"
      data-testid="article-list-item"
    >
      <Link href={`/article/${article.id}`}>
        <header className="w-full aspect-video relative">
          <ImageWithFallback
            src={article.headerImageUrl}
            alt="Normally, we would add a description of the image content here for Screen Reader, so that visually impaired users can also profit from the content."
            fill
            fallbackSrc="/fallback-image.svg"
            loading={priority ? "eager" : "lazy"}
            priority={priority}
          />
        </header>
        <div className="p-4 flex flex-col">
          <Categories categories={article.categories} />
          <time
            dateTime={article.publicationDate}
            className="text-gray-500 text-sm mt-2 mb-4"
          >
            {formatDatetime(new Date(article.publicationDate))}
          </time>
          <h2 className="text-lg text-gray-800 font-bold mb-2">
            {article.headline}
          </h2>
        </div>
      </Link>
    </article>
  );
};
