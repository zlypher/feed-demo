import { cn } from "@/utils/cn";

interface ICategoriesProps {
  categories: string[];
  className?: string;
}

export const Categories = ({ categories, className }: ICategoriesProps) => {
  return (
    <ul
      className={cn(
        `flex flex-row gap-4 font-semibold text-sky-500`,
        className
      )}
    >
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};
