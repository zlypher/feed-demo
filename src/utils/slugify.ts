export const slugify = (input: string): string => {
  return input.replaceAll(" ", "-").toLowerCase();
};
