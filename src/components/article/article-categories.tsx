import { cn } from "@/utils/cn";

interface IArticleCategoriesProps {
  categories: string[];
  className?: string;
}

export const ArticleCategories = ({
  categories,
  className,
}: IArticleCategoriesProps) => {
  return (
    <ul
      className={cn(
        `flex flex-row flex-wrap gap-x-4 font-semibold text-sky-700`,
        className
      )}
    >
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};
