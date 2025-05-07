import { redirect } from 'next/navigation';

// Metadados para SEO
export const metadata = {
  title: "Bispo Rinaldo Silva | Biografia, Ministério e Pregações Oficiais",
  description: "Conheça o Bispo Rinaldo Silva, sua biografia, ministério, mensagens e a Escola de Dons. Site oficial com informações sobre conferências, eventos e materiais exclusivos.",
  keywords: "Bispo Rinaldo Silva, Rinaldo Silva, Igreja Impactados, Escola de Dons, ministério Rinaldo Silva, pregações, conferências, eventos, biografia Rinaldo Silva",
  alternates: {
    canonical: "https://rinaldosilva.com/"
  }
};

// Esta página existe principalmente para otimização de SEO
// Mas redireciona para a página principal
export default function BispoRinaldoSilvaPage() {
  redirect('/');
} 