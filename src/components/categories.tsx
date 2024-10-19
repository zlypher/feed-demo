interface ICategoriesProps {
  categories: string[];
}

export const Categories = ({ categories }: ICategoriesProps) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};
