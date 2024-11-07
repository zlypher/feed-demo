import { useArticles } from "@/data/articles";
import { ArticleListItem } from "../article-list/article-list-item";
import { PropsWithChildren } from "react";
import { ArticleListItemPlaceholder } from "./article-list-item-placeholder";
import { ArticleListError } from "./article-list-error";

export const ArticleList = () => {
  const { data: articles, isLoading, isError } = useArticles();

  if (isLoading) {
    return (
      <ArticleListWrapper>
        <ArticleListItemPlaceholder />
        <ArticleListItemPlaceholder />
      </ArticleListWrapper>
    );
  }

  if (isError || !articles) {
    return <ArticleListError />;
  }

  return (
    <ArticleListWrapper>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ArticleListWrapper>
  );
};

const ArticleListWrapper = ({ children }: PropsWithChildren) => {
  return (
    <section className="bg-gray-200 flex flex-col space-y-4 p-4">
      {children}
    </section>
  );
};
