import ArticlePage from "@/components/article/article-page";
import { TArticle, getAllArticles, getArticleById } from "@/data/articles";
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
  const articles: TArticle[] = getAllArticles();

  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function Article({ params }: IArticleProps) {
  const article = getArticleById((await params).id);

  if (!article) {
    notFound();
    return;
  }

  return <ArticlePage article={article} />;
}
