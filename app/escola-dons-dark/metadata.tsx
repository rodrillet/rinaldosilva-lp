import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Escola de Dons | Versão Dark | Bispo Rinaldo Silva",
  description: "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva. Curso completo 100% online com 5 módulos e mais de 40 horas de conteúdo. Versão com tema escuro.",
  keywords:
    "Bispo Rinaldo Silva, Rinaldo Silva, Escola de Dons, dons espirituais, ministério, cura, profecia, discernimento, línguas, fé sobrenatural, milagres, versão dark, tema escuro",
  authors: [{ name: "Bispo Rinaldo Silva" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Escola de Dons | Versão Dark | Bispo Rinaldo Silva",
    description: "Aprenda a operar nos dons espirituais com o Bispo Rinaldo Silva - Tema Escuro.",
    url: "https://rinaldosilva.com/escola-dons-dark",
    images: [
      {
        url: "/images/rinaldo-silva-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Escola de Dons Dark - Bispo Rinaldo Silva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escola de Dons | Versão Dark | Bispo Rinaldo Silva",
    description: "Aprenda a operar nos dons espirituais com o Bispo Rinaldo Silva - Tema Escuro.",
    images: ["/images/rinaldo-silva-1.jpeg"],
  },
  alternates: {
    canonical: "https://rinaldosilva.com/escola-dons",
  },
}
