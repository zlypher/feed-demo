import { getArticleBySlug } from "@/data/articles";

interface IArticleProps {
  params: {
    slug: string;
  };
}

export default function Article({ params }: IArticleProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    // TODO: Show 404
    return null;
  }

  return (
    <main className="p-4 flex-1">
      <header className="mb-4">
        <h1 className="mb-2 text-2xl">{article?.headline}</h1>
        <img src="https://placehold.co/600x400/EEE/31343C" />
      </header>
      <p>{article.text}</p>
    </main>
  );
}
