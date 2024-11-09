import { PropsWithChildren } from "react";

export const ErrorHeadline = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="mt-8 mb-8 text-2xl font-bold text-center">{children}</h1>
  );
};
