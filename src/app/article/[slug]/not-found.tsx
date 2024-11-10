import { ErrorDescription } from "@/components/error/error-description";
import { ErrorHeadline } from "@/components/error/error-headline";
import { ErrorPage } from "@/components/error/error-page";
import { FileX2Icon } from "lucide-react";
import Link from "next/link";

export default function ArticleNotFound() {
  return (
    <ErrorPage testId="article-not-found">
      <ErrorHeadline>
        Wir haben den gewünschten Artikel leider nicht gefunden!
      </ErrorHeadline>
      <FileX2Icon className="w-[100px] h-[100px] mb-8" />
      <ErrorDescription>
        Vielleicht findest du andere interessante Beiträge in unserem
        <Link className="ml-1 font-bold underline" href="/">
          Feed
        </Link>
        !
      </ErrorDescription>
    </ErrorPage>
  );
}
