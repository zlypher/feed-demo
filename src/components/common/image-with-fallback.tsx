"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface IImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

export const ImageWithFallback = (props: IImageWithFallbackProps) => {
  const { fallbackSrc, src, ...rest } = props;
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imageSrc}
      onError={() => {
        setImageSrc(fallbackSrc);
      }}
    />
  );
};
