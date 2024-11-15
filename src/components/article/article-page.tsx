import { BackButton } from "@/components/common/back-button";
import { ArticleCategories } from "@/components/article/article-categories";
import { ImageWithFallback } from "@/components/common/image-with-fallback";
import { TArticle } from "@/data/articles";
import { JsonLdNewsArticle } from "../json-ld/news-article";
import { ArticleAuthorDate } from "./article-author-date";

interface IArticlePageProps {
  article: TArticle;
}

export default async function ArticlePage({ article }: IArticlePageProps) {
  return (
    <div className="overflow-y-auto flex-1 bg-white">
      <div className="w-full aspect-video relative h-[300px]">
        <div className="absolute z-10 left-2 top-2 rounded-full bg-white flex">
          <BackButton />
        </div>
        <ImageWithFallback
          src={article.headerImageUrl}
          alt="Normally, we would add a description of the image content here for Screen Reader, so that visually impaired users can also profit from the content."
          fill
          fallbackSrc="/fallback-image.svg"
          className="object-cover"
          loading="eager"
          data-testid="header-image"
          priority
        />
      </div>
      <main className="p-4 flex-1">
        <header>
          <h1 className="mb-2 text-2xl font-bold text-gray-800 break-words">
            {article.headline}
          </h1>
        </header>
        <aside>
          <ArticleCategories className="mb-2" categories={article.categories} />
          <ArticleAuthorDate
            author={article.author}
            publicationDate={article.publicationDate}
          />
        </aside>
        <div data-testid="content" className="break-words">
          <p className="text-gray-700">{article.text}</p>
        </div>
      </main>
      <JsonLdNewsArticle
        headline={article.headline}
        author={{ name: article.author }}
        datePublished={article.publicationDate}
      />
    </div>
  );
}
