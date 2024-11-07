"use client";

import { ArticleList } from "../article-list/article-list";

export default function FeedPage() {
  return (
    <main className="overflow-y-auto flex-1">
      <ArticleList />
    </main>
  );
}
