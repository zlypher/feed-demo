interface ICategoriesProps {
  categories: string[];
}

export const Categories = ({ categories }: ICategoriesProps) => {
  return (
    <ul className="flex flex-row gap-4 font-bold text-slate-800">
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};
