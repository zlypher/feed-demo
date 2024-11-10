import ArticlePage from "@/components/article/article-page";
import { TArticle, getAllArticles, getArticleBySlug } from "@/data/articles";
import { defaultMetadata } from "@/utils/metadata";
import { notFound } from "next/navigation";

interface IArticleProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: IArticleProps) {
  const article = getArticleBySlug((await params).slug);
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
      url: `${domain}article/${article.slug}`,
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
    slug: article.slug,
  }));
}

export default async function Article({ params }: IArticleProps) {
  const slug = (await params).slug;
  if (slug.includes("error")) {
    throw new Error("A totally unexpected error happened!");
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
    return;
  }

  return <ArticlePage article={article} />;
}
