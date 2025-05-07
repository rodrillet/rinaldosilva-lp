import { redirect } from "next/navigation"

// Metadados para SEO
export const metadata = {
  title: "Ministério Rinaldo Silva | Igreja Impactados | Escola de Dons",
  description:
    "Conheça o Ministério do Bispo Rinaldo Silva. Informações sobre a Igreja Impactados, Escola de Dons, conferências, eventos e projetos sociais. Transformando vidas através da palavra de Deus.",
  keywords:
    "Ministério Rinaldo Silva, Rinaldo Silva, Bispo Rinaldo Silva, Igreja Impactados, Escola de Dons, ministério evangélico, conferências, eventos",
  alternates: {
    canonical: "https://rinaldosilva.com/#ministerio",
  },
}

// Esta página existe principalmente para otimização de SEO
// Mas redireciona para a seção de ministério da página principal
export default function MinisterioRinaldoSilvaPage() {
  redirect("/#ministerio")
}
