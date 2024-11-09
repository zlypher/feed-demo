import { PropsWithChildren } from "react";

export const ErrorDescription = ({ children }: PropsWithChildren) => {
  return <p className="text-center text-lg max-w-80">{children}</p>;
};
