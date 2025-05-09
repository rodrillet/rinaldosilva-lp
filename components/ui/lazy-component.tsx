"use client"

import React, { ReactNode } from "react"

interface LazyComponentProps {
  children: ReactNode
  className?: string
  rootMargin?: string
}

// Este é um componente simplificado para resolver erros de importação
export function LazyComponent({
  children,
  className = "",
  rootMargin = "0px",
}: LazyComponentProps) {
  // Na implementação real, carregaríamos o componente apenas quando estivesse perto do viewport
  // Aqui, simplesmente renderizamos os children diretamente
  return <div className={className}>{children}</div>
} 