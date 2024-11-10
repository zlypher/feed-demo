"use client";

import { logger } from "@/utils/logger";
import { ArrowLeftIcon } from "lucide-react";
import { useCallback } from "react";

export const BackButton = () => {
  const onBack = useCallback(() => {
    logger.warn("This is a frontend log");
    window.history.back();
  }, []);

  return (
    <button
      onClick={onBack}
      aria-label="Zurück zur vorherigen Seite"
      className="p-2"
      data-testid="back-button"
    >
      <ArrowLeftIcon className="w-5 h-5" />
    </button>
  );
};
