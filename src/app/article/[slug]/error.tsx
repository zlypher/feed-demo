"use client";

import { ErrorDescription } from "@/components/error/error-description";
import { ErrorHeadline } from "@/components/error/error-headline";
import { ErrorPage } from "@/components/error/error-page";
import { FileX2Icon } from "lucide-react";
import Link from "next/link";

export default function ArticleError() {
  return (
    <ErrorPage testId="article-error">
      <ErrorHeadline>Leider ist ein Problem aufgetreten!</ErrorHeadline>
      <FileX2Icon className="w-[100px] h-[100px] mb-8" />
      <ErrorDescription>
        Wir arbeiten bereits mit Hochdruck an einer Lösung! In der Zwischenzeit
        versuche es bitte mit einem anderen Artikel aus unserem
        <Link className="ml-1 font-bold underline" href="/">
          Feed
        </Link>
        !
      </ErrorDescription>
    </ErrorPage>
  );
}
