"use client";

import { ArticleList } from "../article-list/article-list";

export default function FeedPage() {
  return (
    <main className="overflow-y-auto flex-1 flex flex-col">
      <h1 className="sr-only">Aktuelle News</h1>
      <ArticleList />
    </main>
  );
}
