"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useCallback } from "react";

export const BackButton = () => {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <button
      onClick={onBack}
      aria-label="Zurück zur vorherigen Seite"
      className="p-2"
    >
      <ArrowLeftIcon className="w-5 h-5" />
    </button>
  );
};
