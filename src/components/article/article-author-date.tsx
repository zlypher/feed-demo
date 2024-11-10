import { formatDatetime } from "@/utils/format-datetime";

interface IArticleAuthorDateProps {
  author: string;
  publicationDate: string;
}

export const ArticleAuthorDate = ({
  author,
  publicationDate,
}: IArticleAuthorDateProps) => {
  return (
    <div className="text-gray-500 text-sm mt-2 mb-4 flex flex-row flex-wrap gap-1">
      <span>{author}</span>
      <span>&bull;</span>
      <time dateTime={publicationDate} className="">
        {formatDatetime(new Date(publicationDate))}
      </time>
    </div>
  );
};
