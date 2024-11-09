interface IJsonLdNewsArticleProps {
  headline: string;
  datePublished: string;
  author: {
    name: string;
  };
}

export const JsonLdNewsArticle = (props: IJsonLdNewsArticleProps) => {
  const newsArticleData = {
    "@context": "https://schema.org/",
    "@type": "NewsArticle",
    ...props,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleData) }}
    />
  );
};
