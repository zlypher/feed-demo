import { BackButton } from "@/components/common/back-button";
import { PropsWithChildren } from "react";

interface IErrorPageProps extends PropsWithChildren {
  testId?: string;
}

export const ErrorPage = ({ testId, children }: IErrorPageProps) => {
  return (
    <div className="overflow-y-auto flex-1" data-testid={testId}>
      <div className="mt-2 ml-2 rounded-full bg-white inline-flex">
        <BackButton />
      </div>
      <main className="p-4 flex-1 flex flex-col items-center">{children}</main>
    </div>
  );
};
