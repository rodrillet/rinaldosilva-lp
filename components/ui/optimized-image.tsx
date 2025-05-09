"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

// Props estendidas do componente Image do Next.js
interface OptimizedImageProps extends ImageProps {
  lowQualitySrc?: string;
}

// Este é um componente simplificado para resolver erros de importação
export function OptimizedImage(props: OptimizedImageProps) {
  // Simplesmente renderizamos o componente Image padrão do Next.js
  // Removendo a prop adicional que não é suportada pelo componente Image
  const { lowQualitySrc, ...imageProps } = props;
  
  return <Image {...imageProps} />;
} 