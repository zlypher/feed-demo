import { BackButton } from "@/components/back-button";
import { Categories } from "@/components/categories";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { Article, getAllArticles, getArticleById } from "@/data/articles";
import { formatDatetime } from "@/utils/format-datetime";
import { defaultMetadata } from "@/utils/metadata";
import { notFound } from "next/navigation";

interface IArticleProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: IArticleProps) {
  const article = getArticleById((await params).id);
  if (!article) {
    return null;
  }

  const title = `${article.headline} | Feed Demo`;
  const domain = process.env.DOMAIN ?? "http://localhost:300/";

  return {
    ...defaultMetadata,
    title,
    description: article.headline, // Ideally, we would use a short summary here
    openGraph: {
      ...defaultMetadata.openGraph,
      url: `${domain}article/${article.id}`,
      title,
      description: article.headline, // Ideally, we would use a short summary here
      images: article.headerImageUrl,
    },
  };
}

// Revalidation time in seconds. Static content is potentially regenerated after this time.
export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const articles: Article[] = getAllArticles();

  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function ArticlePage({ params }: IArticleProps) {
  const article = getArticleById((await params).id);

  if (!article) {
    notFound();
  }

  return (
    <div className="overflow-y-auto flex-1 bg-white">
      <header className="w-full bg-white p-4 flex items-center">
        <BackButton />
      </header>
      <main className="p-4 flex-1 ">
        <header>
          <h1 className="mb-2 text-2xl font-bold text-gray-800">
            {article.headline}
          </h1>
          <Categories className="mb-2" categories={article.categories} />
          <time
            dateTime={article.publicationDate}
            className="block text-gray-500 text-sm mb-8"
          >
            {formatDatetime(new Date(article.publicationDate))}
          </time>
          <div className="w-full aspect-video relative mb-8">
            <ImageWithFallback
              src={article.headerImageUrl}
              alt="Normally, we would add a description of the image content here for Screen Reader, so that visually impaired users can also profit from the content."
              fill
              fallbackSrc="/fallback-image.svg"
            />
          </div>
        </header>
        <p className="text-gray-700">{article.text}</p>
      </main>
    </div>
  );
}
