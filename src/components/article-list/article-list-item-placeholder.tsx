export const ArticleListItemPlaceholder = () => {
  return (
    <article
      className="bg-white rounded-sm overflow-hidden animate-pulse"
      data-testid="article-list-item-placeholder"
    >
      <header className="w-full aspect-video relative bg-gray-300 "></header>
      <div className="p-4 flex flex-col">
        <div className="h-6 w-20 bg-gray-300 "></div>
        <div className="h-5 w-1/2 mt-2 mb-4 bg-gray-300 "></div>
        <div className="h-6 w-full mb-2 bg-gray-300 "></div>
        <div className="h-6 w-full mb-2 bg-gray-300 "></div>
      </div>
    </article>
  );
};
