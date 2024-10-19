"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useCallback } from "react";

export const BackButton = () => {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <button onClick={onBack}>
      <ArrowLeftIcon />
    </button>
  );
};
