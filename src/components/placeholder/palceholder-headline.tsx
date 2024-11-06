import { PropsWithChildren } from "react";

export const PlaceholderHeadline = ({ children }: PropsWithChildren) => {
  return <h1 className="text-2xl font-bold mb-4">{children}</h1>;
};
