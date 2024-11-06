import { PropsWithChildren } from "react";

export const PlaceholderPage = ({ children }: PropsWithChildren) => {
  return (
    <main className="overflow-y-auto flex-1 flex flex-col justify-center text-center p-6">
      {children}
    </main>
  );
};
