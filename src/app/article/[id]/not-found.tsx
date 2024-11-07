"use client";

import { BackButton } from "@/components/common/back-button";
import { FileX2Icon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ArticleNotFound({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="overflow-y-auto flex-1" data-testid="not-found">
      <div className="mt-2 ml-2 rounded-full bg-white inline-flex">
        <BackButton />
      </div>
      <main className="p-4 flex-1 flex flex-col items-center">
        <h1 className="mt-8 mb-8 text-2xl font-bold text-center">
          Wir haben den gewünschten Artikel leider nicht gefunden!
        </h1>
        <FileX2Icon className="w-[100px] h-[100px] mb-8" />
        <p className="text-center text-lg max-w-80">
          Vielleicht findest du andere interessante Beiträge in unserem
          <Link className="ml-1 font-bold underline" href="/">
            Feed
          </Link>
          !
        </p>
      </main>
    </div>
  );
}
