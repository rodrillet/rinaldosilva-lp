import { redirect } from "next/navigation"

// Metadados para SEO
export const metadata = {
  title: "Pregações do Bispo Rinaldo Silva | Mensagens e Estudos Bíblicos",
  description:
    "Acesse as pregações e mensagens do Bispo Rinaldo Silva. Estudos bíblicos, sermões, conferências e ensinamentos sobre dons espirituais, cura e libertação.",
  keywords:
    "pregações Rinaldo Silva, mensagens Rinaldo Silva, Bispo Rinaldo Silva, sermões, estudos bíblicos, palavra de fé, avivamento, Espírito Santo",
  alternates: {
    canonical: "https://rinaldosilva.com/#mensagens",
  },
}

// Esta página existe principalmente para otimização de SEO
// Mas redireciona para a seção de mensagens da página principal
export default function PregacoesRinaldoSilvaPage() {
  redirect("/#mensagens")
}
