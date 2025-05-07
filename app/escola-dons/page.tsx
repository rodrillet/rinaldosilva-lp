"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Flame,
  GraduationCap,
  Heart,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Star,
  Users,
  Zap,
  XCircle,
  Clock,
  Menu,
  ArrowRight,
  Gift,
  Lock,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CountdownTimer from "./countdown-timer"
import { TestimonialCard } from "./testimonial-card"
import JsonLd from "@/app/components/json-ld"
import {
  getEscolaDonsStructuredData,
  getBreadcrumbStructuredData,
  getWebsiteStructuredData,
  getFAQStructuredData,
  getProductStructuredData,
} from "@/app/components/structured-data"

// Definindo os metadados para a página
export const metadata = {
  title: "Escola de Dons | Bispo Rinaldo Silva | Desenvolva Seus Dons Espirituais",
  description:
    "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva. A Escola de Dons é um curso completo com 5 módulos para transformar sua vida ministerial através do poder do Espírito Santo.",
  keywords:
    "Escola de Dons, Bispo Rinaldo Silva, Rinaldo Silva, dons espirituais, ministério, cura, profecia, discernimento, línguas, fé sobrenatural, milagres, curso dons espirituais, desenvolvimento espiritual, Escola de Dons online, Rinaldo Silva cursos",
  openGraph: {
    title: "Escola de Dons | Bispo Rinaldo Silva",
    description:
      "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva. Transforme sua vida ministerial com a Escola de Dons.",
    type: "website",
    url: "https://rinaldosilva.com/escola-dons",
    locale: "pt_BR",
    siteName: "Ministério Bispo Rinaldo Silva",
    images: [
      {
        url: "/placeholder.svg?key=escola-dons-og",
        width: 1200,
        height: 630,
        alt: "Escola de Dons | Bispo Rinaldo Silva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escola de Dons | Bispo Rinaldo Silva",
    description: "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva",
    images: ["/placeholder.svg?key=escola-dons-twitter"],
  },
  alternates: {
    canonical: "https://rinaldosilva.com/escola-dons",
  },
  category: "Cursos, Educação Religiosa",
  creator: "Bispo Rinaldo Silva",
  publisher: "Ministério Bispo Rinaldo Silva",
}

// Componente principal
export default function EscolaDons() {
  // Dados para os módulos do curso
  const courseModules = [
    {
      title: "Módulo 1: Introdução",
      description: "Fundamentos essenciais para iniciar sua jornada nos dons espirituais.",
      lessons: [
        "Iniciando nos Dons Espirituais",
        "A importância da sabedoria na prática dos Dons",
        "A simplicidade dos Dons",
        "Desenvolvendo um coração receptivo ao Espírito",
        "Como identificar qual dom você possui",
      ],
      icon: BookOpen,
      capabilities:
        "Após este módulo você será capaz de entender o propósito dos dons espirituais na igreja atual, identificar seus dons primários e secundários, e criar um ambiente propício para o mover do Espírito.",
    },
    {
      title: "Módulo 2: Dons de Revelação",
      description: "Compreenda como Deus revela conhecimento sobrenatural através destes dons.",
      lessons: [
        "Palavra de Sabedoria - princípios e aplicações",
        "Palavra do Conhecimento - como receber revelações divinas",
        "Discernimento de Espíritos - identificando o espiritual",
        "Exercícios práticos de desenvolvimento",
        "Testemunhos e estudos de caso reais",
      ],
      icon: Brain,
      capabilities:
        "Você será capaz de reconhecer e operar nos dons de revelação, receber palavras de conhecimento para situações específicas, e discernir influências espirituais em diferentes contextos.",
    },
    {
      title: "Módulo 3: Dons Vocais",
      description: "Aprenda como Deus fala através de manifestações vocais sobrenaturais.",
      lessons: [
        "Dom de Profecia - falando a vontade de Deus",
        "Variedade de Línguas - operando no sobrenatural",
        "Interpretação de Línguas - revelando mensagens",
        "Como profetizar com precisão e amor",
        "Diferença entre profecia do AT e NT",
      ],
      icon: MessageCircle,
      capabilities:
        "Após este módulo você saberá como entregar profecias de edificação com precisão, desenvolver o dom de línguas para edificação pessoal e comunitária, e interpretar mensagens proféticas com sabedoria.",
    },
    {
      title: "Módulo 4: Dons de Poder",
      description: "Descubra como manifestar o poder sobrenatural de Deus em situações impossíveis.",
      lessons: [
        "Dom da Fé - ativando a fé sobrenatural",
        "Operação de Milagres - manifestando o impossível",
        "Dons de Cura - restauração física e emocional",
        "Como ministrar cura passo a passo",
        "Lidando com aparentes fracassos na ministração",
      ],
      icon: Zap,
      capabilities:
        "Você será capaz de ministrar cura aos enfermos com confiança, operar na fé sobrenatural em circunstâncias desafiadoras, e ver o poder de Deus manifestado em situações impossíveis através do seu ministério.",
    },
    {
      title: "Módulo 5: Fundamentos e Prática",
      description: "Aplique os princípios aprendidos e desenvolva uma prática consistente dos dons.",
      lessons: [
        "Fundamentos da Cura Divina - princípios bíblicos",
        "Por que devemos buscar os Dons - propósito eterno",
        "Aplicação prática no ministério cotidiano",
        "Como formar equipes de ministração",
        "Avivamento através dos dons - estudos de caso",
      ],
      icon: Flame,
      capabilities:
        "Ao finalizar este módulo você estará preparado para levantar e treinar equipes de ministração na sua igreja, operar consistentemente nos dons em um contexto ministerial estruturado, e ver transformação espiritual na sua comunidade.",
    },
  ]

  // Dados para os perfis de alunos
  const studentProfiles = [
    {
      icon: Users,
      title: "Líderes e Pastores",
      description:
        "Deseja capacitar sua equipe e elevar o nível espiritual do seu ministério através da operação dos dons.",
    },
    {
      icon: Heart,
      title: "Servos Dedicados",
      description: "Serve na igreja mas sente que poderia ter um impacto muito maior através dos dons espirituais.",
    },
    {
      icon: Flame,
      title: "Buscadores de Avivamento",
      description: "Tem fome por manifestações sobrenaturais e deseja ser usado(a) poderosamente por Deus.",
    },
    {
      icon: BookOpen,
      title: "Estudantes da Palavra",
      description: "Quer entender profundamente o fundamento bíblico dos dons e como operá-los com sabedoria.",
    },
    {
      icon: Zap,
      title: "Ministradores de Cura",
      description: "Sente o chamado para o ministério de cura e libertação, mas precisa de direcionamento prático.",
    },
    {
      icon: MessageCircle,
      title: "Adoradores e Intercessores",
      description: "Busca levar sua adoração e intercessão a um novo nível através do mover do Espírito Santo.",
    },
  ]

  // Dados para os benefícios do curso
  const courseBenefits = [
    {
      title: "Descubra e opere em seus dons espirituais",
      description:
        "Você será capaz de identificar seus dons com precisão e operá-los com confiança nas situações cotidianas e ministeriais, impactando vidas ao seu redor.",
      icon: GraduationCap,
      transformation: "De confuso sobre seu chamado para ministro seguro e eficaz",
    },
    {
      title: "Transforme sua intimidade com Deus",
      description:
        "Desenvolva uma sensibilidade única à voz do Espírito Santo, reconhecendo Sua direção instantaneamente e experimentando uma comunhão sobrenatural diária.",
      icon: Heart,
      transformation: "De uma vida cristã morna para uma experiência poderosa com Deus",
    },
    {
      title: "Torne-se um agente de transformação",
      description:
        "Você se tornará um instrumento que Deus usará para curar enfermos, libertar cativos e restaurar vidas quebradas através do poder dos dons espirituais.",
      icon: Users,
      transformation: "De espectador para protagonista no Reino de Deus",
    },
    {
      title: "Lidere com autoridade espiritual",
      description:
        "Conduza seu ministério, família ou empresa com a sabedoria sobrenatural que vem do alto, tomando decisões divinas que produzem frutos extraordinários.",
      icon: Brain,
      transformation: "De líder natural para líder sobrenatural",
    },
    {
      title: "Experimente o poder da cura divina",
      description:
        "Ministre cura aos enfermos com eficácia, vendo enfermidades físicas, emocionais e espirituais serem curadas pelo poder de Deus através de suas mãos.",
      icon: Flame,
      transformation: "De temeroso para confiante na autoridade espiritual",
    },
    {
      title: "Desenvolva um legado ministerial",
      description:
        "Capacite outros crentes a operarem nos dons, multiplicando o impacto do Reino e criando um legado espiritual que ultrapassará gerações.",
      icon: Zap,
      transformation: "De ministro solitário para multiplicador de discípulos",
    },
  ]

  // Dados para os depoimentos
  const testimonials = [
    {
      name: "Carlos Oliveira",
      role: "Pastor Auxiliar",
      location: "São Paulo, SP",
      testimony:
        "A Escola de Dons mudou completamente minha visão ministerial. Descobri dons que nem sabia que tinha e hoje lidero um ministério de intercessão na minha igreja com mais de 50 pessoas.",
      result: "Crescimento de 200% no ministério de intercessão em 3 meses",
      isVideo: false,
    },
    {
      name: "Mariana Santos",
      role: "Líder de Jovens",
      location: "Rio de Janeiro, RJ",
      testimony:
        "Sempre soube que tinha um chamado para trabalhar com jovens, mas não sabia como desenvolver isso. A Escola de Dons me deu as ferramentas práticas para identificar e aperfeiçoar meus dons de ensino e pastoreio.",
      result: "50 jovens batizados após aplicar os princípios do curso",
      isVideo: true,
      videoThumbnail: "/images/rinaldo-silva-3.jpeg",
    },
    {
      name: "Roberto Almeida",
      role: "Empresário e Líder",
      location: "Belo Horizonte, MG",
      testimony:
        "Como empresário, não imaginava como poderia usar meus dons na igreja. Através da Escola de Dons, descobri que meu dom de administração poderia impactar significativamente o Reino de Deus.",
      result: "Reestruturou toda administração da igreja local com excelência",
      isVideo: false,
      isWhatsApp: true,
      whatsappImage: "/images/rinaldo-silva-2.jpeg",
    },
  ]

  // Dados para as perguntas frequentes
  const faqs = [
    {
      question: "Quanto tempo terei acesso ao curso?",
      answer: "Você terá acesso vitalício a todo o conteúdo da Escola de Dons, incluindo atualizações futuras.",
    },
    {
      question: "Preciso ter conhecimento prévio sobre dons espirituais?",
      answer:
        "Não, o curso foi desenvolvido para atender desde iniciantes até pessoas com conhecimento avançado sobre o tema.",
    },
    {
      question: "Como funciona o acesso ao conteúdo?",
      answer:
        "Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à plataforma onde todo o conteúdo estará disponível.",
    },
    {
      question: "Posso assistir as aulas pelo celular?",
      answer:
        "Sim, nossa plataforma é responsiva e você pode acessar todo o conteúdo pelo computador, tablet ou smartphone.",
    },
    {
      question: "O certificado é reconhecido?",
      answer:
        "Sim, você receberá um certificado de conclusão emitido pelo Ministério do Bispo Rinaldo Silva, reconhecido por diversas denominações.",
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer:
        "Se você não ficar satisfeito com o curso por qualquer motivo, basta enviar um e-mail para suporte@escoladedons.com.br em até 7 dias após a compra e faremos o reembolso integral.",
    },
    {
      question: "Existe algum suporte durante o curso?",
      answer:
        "Sim, você terá acesso a um grupo exclusivo onde poderá tirar dúvidas diretamente com a equipe do Bispo Rinaldo Silva.",
    },
  ]

  // Dados para produto estruturado
  const courseProductData = {
    name: "Escola de Dons - Curso Completo",
    description:
      "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva. A Escola de Dons é um curso completo com 5 módulos para transformar sua vida ministerial através do poder do Espírito Santo.",
    url: "https://rinaldosilva.com/escola-dons",
    image: "https://rinaldosilva.com/images/rinaldo-silva-1.jpeg",
    price: "97.00",
    priceCurrency: "BRL",
    sku: "ESCDON-001",
  }

  // Dados para os itens não adequados
  const notForYouItems = [
    {
      title: "Busca resultados sem comprometimento",
      description:
        "Este curso exige dedicação e prática. Se você não está disposto a aplicar o que vai aprender, não terá os resultados esperados.",
    },
    {
      title: "Não acredita na operação dos dons hoje",
      description:
        "Se você não crê que os dons espirituais são para a igreja atual, este conteúdo não será relevante para você.",
    },
    {
      title: "Busca apenas teoria sem aplicação prática",
      description:
        "Nossa metodologia é focada na prática e aplicação dos dons. Se você busca apenas conhecimento teórico, pode não ser o que espera.",
    },
    {
      title: "Não está aberto a novas experiências espirituais",
      description:
        "O desenvolvimento dos dons requer abertura para experimentar o sobrenatural de Deus de formas que talvez você nunca tenha vivenciado antes.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden max-w-[100vw] relative">
      <JsonLd data={getEscolaDonsStructuredData()} />
      <JsonLd
        data={getBreadcrumbStructuredData([
          { name: "Home", item: "https://rinaldosilva.com/" },
          { name: "Escola de Dons", item: "https://rinaldosilva.com/escola-dons" },
        ])}
      />
      <JsonLd data={getWebsiteStructuredData()} />
      <JsonLd data={getFAQStructuredData(faqs)} />
      <JsonLd data={getProductStructuredData(courseProductData)} />

      {/* CTA Flutuante */}
      <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl py-4 border-t border-neutral-200 transform transition-transform duration-300 bg-white/90 shadow-lg">
        <div className="container px-4 sm:px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-neutral-800 text-sm sm:text-base">
            <span className="text-[#d4fb00] font-medium">Oferta especial:</span> Acesso vitalício por apenas R$ 97,00
          </div>
          <a href="#matricula">
            <Button className="bg-[#d4fb00] hover:bg-[#c0e500] text-black font-medium text-sm px-6 py-3 w-full sm:w-auto whitespace-nowrap shadow-sm rounded-full transition-all duration-300 ease-in-out">
              GARANTIR MINHA VAGA
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* Header/Navigation */}
      <header
        id="top"
        className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 border-b border-neutral-200 supports-[backdrop-filter]:bg-white/80"
      >
        <div className="container px-4 sm:px-6 mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-medium text-xl">
            <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black">RS</div>
            <span className="text-neutral-900">Escola de Dons</span>
          </div>

          {/* Menu para desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium text-neutral-700 hover:text-[#d4fb00] transition-colors">
              Sobre
            </a>
            <a href="#modulos" className="text-sm font-medium text-neutral-700 hover:text-[#d4fb00] transition-colors">
              Módulos
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-neutral-700 hover:text-[#d4fb00] transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-medium text-neutral-700 hover:text-[#d4fb00] transition-colors"
            >
              Depoimentos
            </a>
            <a href="#faq" className="text-sm font-medium text-neutral-700 hover:text-[#d4fb00] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Botão de menu para mobile */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-neutral-700 hover:bg-neutral-100">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </div>

          <a href="#matricula" className="hidden md:block">
            <Button className="bg-[#d4fb00] hover:bg-[#c0e500] text-black font-medium shadow-sm text-sm px-4 py-2 rounded-full transition-all duration-300 ease-in-out">
              Inscrever-se
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#d4fb00]/10 via-white to-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#d4fb00]/10 blur-3xl"></div>
            <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#d4fb00]/10 blur-3xl"></div>
          </div>
          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <Badge className="bg-[#d4fb00]/20 text-black px-4 py-1 text-sm rounded-full shadow-sm">
                  Matrículas Abertas
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-neutral-900">
                  Descubra e Desenvolva Seus <span className="text-[#d4fb00]">Dons Espirituais</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 max-w-[600px] mx-auto lg:mx-0">
                  Seja uma ferramenta de transformação através do propósito dos Dons Espirituais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#matricula">
                    <Button
                      size="lg"
                      className="bg-[#d4fb00] hover:bg-[#c0e500] text-black px-6 py-3 text-base sm:text-lg font-medium shadow-sm w-full sm:w-auto max-w-full truncate rounded-full transition-all duration-300 ease-in-out"
                    >
                      <span className="hidden sm:inline">Quero Desenvolver Meus Dons</span>
                      <span className="inline sm:hidden">Desenvolver Meus Dons</span>
                      <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#d4fb00] text-black hover:bg-[#d4fb00]/10 hover:border-[#d4fb00] transition-colors h-14 w-full sm:w-auto rounded-full"
                  >
                    <PlayCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="hidden sm:inline">Ver Apresentação</span>
                    <span className="inline sm:hidden">Ver Vídeo</span>
                  </Button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                        <Image
                          src="/images/rinaldo-silva-1.jpeg"
                          alt={`Aluno ${i}`}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="text-[#d4fb00] font-medium">+1.500 alunos</span> já transformaram suas vidas
                  </div>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0 max-w-md w-full" id="matricula">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4fb00]/20 to-[#d4fb00]/10 rounded-3xl -rotate-1 blur-sm"></div>
                <Card className="relative border border-neutral-200 rounded-3xl overflow-hidden shadow-lg bg-white backdrop-blur-md text-neutral-900">
                  <CardContent className="p-6 space-y-6">
                    <div className="bg-gradient-to-r from-black to-neutral-800 text-white p-4 -mx-6 -mt-6 mb-6 text-center">
                      <h3 className="font-medium text-xl">Oferta Especial - Encerra em:</h3>
                      <CountdownTimer />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <p className="text-neutral-700">Acesso imediato a todo conteúdo</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <p className="text-neutral-700">Certificado de conclusão</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <p className="text-neutral-700">Suporte direto com a equipe</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <p className="text-neutral-700">Acesso vitalício</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 shrink-0" />
                        <p className="font-medium text-neutral-800">
                          BÔNUS: Grupo exclusivo com o Bispo Rinaldo
                          <span className="text-rose-500 text-sm block">Apenas para as próximas 48h</span>
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 space-y-3">
                      <div className="text-center">
                        <span className="text-neutral-500 line-through text-lg">De R$ 197,00</span>
                        <div className="text-3xl font-bold text-[#d4fb00]">Por apenas R$ 97,00</div>
                        <div className="text-sm text-neutral-500">ou 3x de R$ 34,29</div>
                      </div>
                      <Button className="bg-[#d4fb00] hover:bg-[#c0e500] text-black w-full h-12 text-sm sm:text-base font-medium shadow-sm rounded-full transition-all duration-300 ease-in-out">
                        <span className="hidden sm:inline">QUERO ME INSCREVER AGORA</span>
                        <span className="inline sm:hidden">INSCREVER AGORA</span>
                        <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                      </Button>
                      <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
                        <ShieldCheck className="h-4 w-4" />
                        <span>Pagamento 100% seguro</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-8 bg-white">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4fb00]">1500+</div>
                <p className="text-neutral-600">Alunos</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4fb00]">5</div>
                <p className="text-neutral-600">Módulos</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4fb00]">40+</div>
                <p className="text-neutral-600">Horas de Conteúdo</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4fb00]">4.9/5</div>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 md:py-24 bg-white">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00]/20 text-black px-4 py-1 text-sm rounded-full">
                O que é a Escola de Dons?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                Uma Jornada Espiritual Transformadora
              </h2>
              <p className="text-neutral-600">
                Descubra como manifestar a graça de Deus através de uma fé inabalável e obediência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-neutral-700">
                  A Escola de Dons é uma jornada espiritual para vivenciar as mesmas experiências que Jesus,
                  manifestando a graça de Deus através de uma fé inabalável e obediência.
                </p>
                <p className="text-lg text-neutral-700">
                  Com <span className="font-medium">ênfase em um ministério prático</span>, ensinamos que a mesma
                  autoridade que houve no ministério de Jesus nos é concedida por meio do Espírito Santo para edificação
                  do corpo de Cristo.
                </p>
                <p className="text-lg text-neutral-700">
                  Nosso objetivo é{" "}
                  <span className="font-medium">
                    equipar você com ferramentas práticas para realizar a obra de Deus
                  </span>
                  . Cremos que este é o tempo de um grande exército se levantar em um movimento sobrenatural do
                  Espírito, para curar enfermos, expulsar demônios e manifestar o Reino.
                </p>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button className="bg-[#d4fb00] hover:bg-[#c0e500] text-black text-base px-6 py-3 shadow-sm rounded-full transition-all duration-300 ease-in-out">
                      Quero Fazer Parte
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/rinaldo-silva-2.jpeg"
                  alt="Bispo Rinaldo Silva pregando"
                  width={600}
                  height={800}
                  className="object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">100% Online</h3>
                  <p className="text-white">Assista quando e quantas vezes quiser, no seu próprio ritmo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é este curso Section */}
        <section className="py-16 md:py-24 bg-[#d4fb00]/10">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00]/20 text-black px-4 py-1 text-sm rounded-full">
                Para quem é este curso?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                Este Curso Foi Feito Para Você Que...
              </h2>
              <p className="text-neutral-600">
                Se você se identifica com pelo menos um dos perfis abaixo, a Escola de Dons irá transformar sua vida
                ministerial
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
              {studentProfiles.map((profile, index) => (
                <Card
                  key={index}
                  className="border border-neutral-200 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white"
                >
                  <CardContent className="p-6 sm:p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4fb00]/20 flex items-center justify-center">
                      {React.createElement(profile.icon, { className: "h-6 w-6 text-black" })}
                    </div>
                    <h3 className="text-xl font-medium text-neutral-900">{profile.title}</h3>
                    <p className="text-neutral-600">{profile.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Para quem NÃO é este curso */}
            <div className="mt-20 max-w-[800px] mx-auto">
              <div className="text-center mb-12 space-y-4">
                <Badge className="bg-neutral-900 text-white px-4 py-1 text-sm rounded-full">
                  Este curso NÃO é para você se...
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
                  Seja honesto consigo mesmo antes de investir
                </h3>
                <p className="text-neutral-600">
                  Queremos que você tenha a melhor experiência possível, por isso é importante que saiba:
                </p>
              </div>

              <div className="space-y-4">
                {notForYouItems.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-2xl bg-neutral-100">
                    <XCircle className="h-6 w-6 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-lg text-neutral-900">{item.title}</h4>
                      <p className="text-neutral-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#matricula">
                <Button
                  size="lg"
                  className="bg-[#d4fb00] hover:bg-[#c0e500] text-black font-medium px-6 py-3 text-sm sm:text-base shadow-sm w-full sm:w-auto rounded-full transition-all duration-300 ease-in-out"
                >
                  <span className="hidden sm:inline">QUERO DESENVOLVER MEUS DONS AGORA!</span>
                  <span className="inline sm:hidden">DESENVOLVER MEUS DONS!</span>
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
              </a>
              <p className="mt-4 text-neutral-500 text-sm">
                Restam apenas <span className="text-rose-500 font-medium">12 vagas</span> para esta turma!
              </p>
            </div>
          </div>
        </section>

        {/* Bônus Limitado Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black to-neutral-900 text-white">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                  Oferta por Tempo Limitado
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  BÔNUS EXCLUSIVO: Grupo VIP com o Bispo Rinaldo
                </h2>
                <p className="text-lg text-neutral-300">
                  Inscreva-se <span className="font-medium underline">até sexta-feira</span> e ganhe acesso ao grupo
                  exclusivo onde o Bispo Rinaldo responde perguntas e compartilha revelações que não são divulgadas em
                  nenhum outro lugar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-300">Acesso direto ao Bispo Rinaldo para tirar dúvidas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-300">Conteúdos exclusivos compartilhados apenas no grupo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-300">Encontros online mensais para ministração e ensino</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-300">
                      Valor deste bônus: <span className="font-medium">R$ 497,00</span>
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] font-medium text-lg px-8 py-6 shadow-md w-full sm:w-auto rounded-full transition-all duration-300 ease-in-out">
                      GARANTIR MINHA VAGA + BÔNUS
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <p className="mt-4 text-sm text-neutral-300">
                    <Clock className="inline-block mr-1 h-4 w-4" /> Oferta válida por tempo limitado
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/rinaldo-silva-1.jpeg"
                    alt="Bispo Rinaldo Silva"
                    fill
                    className="object-cover"
                    objectPosition="center 30%"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-[#d4fb00] text-black font-medium px-4 py-2 rounded-full inline-block mb-2">
                      BÔNUS EXCLUSIVO
                    </div>
                    <h3 className="text-2xl font-bold">Grupo VIP</h3>
                    <p>Acesso direto ao Bispo Rinaldo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content Section */}
        <section id="modulos" className="py-16 md:py-24 bg-white">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00]/20 text-black px-4 py-1 text-sm rounded-full">
                O que você vai aprender
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                Um Programa Completo Para Desenvolver Seus Dons
              </h2>
              <p className="text-neutral-600">
                5 módulos estrategicamente desenvolvidos para te levar do conhecimento básico à aplicação avançada
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {courseModules.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`} className="border-b border-neutral-200 mb-2">
                      <AccordionTrigger className="py-4 text-left font-medium hover:text-[#d4fb00] hover:no-underline">
                        <div className="flex items-center gap-3">
                          {React.createElement(module.icon, { className: "h-5 w-5 text-[#d4fb00]" })}
                          <span>{module.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2 space-y-4">
                        <p className="text-neutral-600">{module.description}</p>
                        <div className="space-y-2">
                          <p className="font-medium text-neutral-800">Conteúdo do módulo:</p>
                          <ul className="space-y-2">
                            {module.lessons.map((lesson, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                                <span className="text-neutral-700">{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4 bg-[#d4fb00]/10 p-4 rounded-2xl">
                          <p className="font-medium text-neutral-800">O que você será capaz de fazer:</p>
                          <p className="text-neutral-700">{module.capabilities}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="space-y-8">
                <Card className="border border-neutral-200 rounded-3xl shadow-md overflow-hidden">
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#d4fb00] border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <Image
                      src="/images/rinaldo-silva-3.jpeg"
                      alt="Bispo Rinaldo Silva"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">Apresentação do Curso</h3>
                    <p className="text-neutral-600">
                      Assista a este vídeo para conhecer mais sobre a metodologia e o conteúdo da Escola de Dons.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-neutral-200 rounded-3xl shadow-md">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-xl font-medium text-neutral-900">O Que Está Incluído:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-neutral-800">5 Módulos Completos</p>
                          <p className="text-sm text-neutral-600">Mais de 40 horas de conteúdo em vídeo</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-neutral-800">Material de Apoio</p>
                          <p className="text-sm text-neutral-600">Apostilas, e-books e recursos para download</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-neutral-800">Testes Práticos</p>
                          <p className="text-sm text-neutral-600">Avaliações para identificar seus dons</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-neutral-800">Comunidade Exclusiva</p>
                          <p className="text-sm text-neutral-600">Grupo de alunos para troca de experiências</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-neutral-800">Certificado de Conclusão</p>
                          <p className="text-sm text-neutral-600">Documento oficial ao finalizar o curso</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <a href="#matricula">
                        <Button className="bg-[#d4fb00] hover:bg-[#c0e500] text-black w-full py-3 text-base rounded-full transition-all duration-300 ease-in-out">
                          Quero Acessar o Conteúdo
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-16 md:py-24 bg-[#d4fb00]/10">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00]/20 text-black px-4 py-1 text-sm rounded-full">
                Por que escolher a Escola?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                O Que Você Vai Conquistar Com a Escola de Dons
              </h2>
              <p className="text-neutral-600">
                Transforme sua vida ministerial e descubra como impactar o Reino de Deus através dos seus dons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courseBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border border-neutral-200 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-white"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4fb00]/20 flex items-center justify-center">
                      {React.createElement(benefit.icon, { className: "h-6 w-6 text-black" })}
                    </div>
                    <h3 className="text-xl font-medium text-neutral-900">{benefit.title}</h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                    <div className="pt-4 mt-2">
                      <div className="bg-[#d4fb00]/20 p-3 rounded-2xl">
                        <p className="font-medium text-sm text-neutral-700">Transformação:</p>
                        <p className="text-neutral-800 font-medium">{benefit.transformation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#matricula">
                <Button
                  size="lg"
                  className="bg-[#d4fb00] hover:bg-[#c0e500] text-black px-6 py-3 text-base font-medium shadow-sm w-full sm:w-auto rounded-full transition-all duration-300 ease-in-out"
                >
                  Quero Desenvolver Meus Dons
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="mt-4 text-neutral-500 text-sm">
                Restam apenas <span className="text-rose-500 font-medium">12 vagas</span> para esta turma!
              </p>
            </div>
          </div>
        </section>

        {/* Video Presentation Section */}
        <section className="py-16 md:py-24 bg-neutral-900 text-white">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                  Mensagem do Bispo Rinaldo
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Uma Palavra Direta Para Você</h2>
                <p className="text-lg text-neutral-300">
                  Ouça o coração do Bispo Rinaldo Silva sobre a visão por trás da Escola de Dons e como ela pode
                  transformar sua vida e ministério.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-300">Descubra a importância de operar nos dons para este tempo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-300">Entenda como a Escola de Dons pode te capacitar de forma prática</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-300">Conheça os princípios que transformaram milhares de vidas</p>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button
                      size="lg"
                      className="bg-[#d4fb00] hover:bg-[#c0e500] text-black font-medium shadow-md px-6 py-3 text-base w-full sm:w-auto rounded-full transition-all duration-300 ease-in-out"
                    >
                      QUERO ME INSCREVER
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#d4fb00] border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <Image
                  src="/images/rinaldo-silva-3.jpeg"
                  alt="Mensagem do Bispo Rinaldo Silva"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-16 md:py-24 bg-white">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00]/20 text-black px-4 py-1 text-sm rounded-full">Depoimentos</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                O Que Nossos Alunos Estão Dizendo
              </h2>
              <p className="text-neutral-600">
                Histórias reais de pessoas que transformaram seus ministérios através da Escola de Dons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section className="py-16 md:py-24 bg-[#d4fb00]/10">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#d4fb00]/20 rounded-3xl rotate-2"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-md">
                  <Image
                    src="/images/rinaldo-silva-1.jpeg"
                    alt="Bispo Rinaldo Silva"
                    width={600}
                    height={800}
                    className="object-cover shadow-lg rounded-3xl"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <Badge className="bg-[#d4fb00]/20 text-black px-4 py-1 text-sm rounded-full">Seu Mentor</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Bispo Rinaldo Silva</h2>
                <p className="text-neutral-700">
                  Nascido em 05 de fevereiro de 1994, Rinaldo Silva é casado com Cecília Silva e pai de Manuela e
                  Enrico. É Bispo Sênior da Igreja Impactados.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-700">Graduado em Teologia e Filosofia</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-700">
                      Conferencista com atuação em todos os estados do Brasil e mais de 40 países
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-700">Iniciou seu ministério aos 7 anos de idade</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-700">Bispo Sênior da Igreja Impactados</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-neutral-700">
                      Milhares de vidas transformadas através de sinais e maravilhas que continuam até hoje
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-[#d4fb00] hover:bg-[#c0e500] text-black rounded-full transition-all duration-300 ease-in-out">
                    Conheça Mais Sobre o Bispo Rinaldo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#d4fb00]/5 relative overflow-hidden">
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#d4fb00]/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#d4fb00]/10 blur-3xl"></div>
          </div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="inline-block bg-[#d4fb00] text-black px-4 py-1 rounded-full text-sm font-medium shadow-md">
                  Sem riscos para você
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                  7 DIAS DE <span className="text-[#d4fb00]">GARANTIA INCONDICIONAL</span>
                </h2>
                <p className="text-lg text-neutral-700">
                  Tenha acesso a todo o conteúdo da Escola de Dons e experimente o curso completo. Se por qualquer
                  motivo você não ficar satisfeito, basta solicitar o reembolso em até 7 dias e devolveremos 100% do seu
                  investimento.
                </p>
                <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00]" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Sem perguntas ou questionamentos</p>
                      <p className="text-sm text-neutral-600">Não pedimos justificativas para o reembolso</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00]" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Processo simples e rápido</p>
                      <p className="text-sm text-neutral-600">Sem burocracia ou formulários complicados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00]" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Devolução integral do valor</p>
                      <p className="text-sm text-neutral-600">Reembolso de 100% do valor investido</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00]" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Processamento em até 48 horas</p>
                      <p className="text-sm text-neutral-600">Seu dinheiro de volta rapidamente</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button className="bg-[#d4fb00] hover:bg-[#c0e500] text-black font-medium text-sm sm:text-base px-6 py-3 shadow-md w-full sm:w-auto rounded-full transition-all duration-300 ease-in-out">
                      <span className="hidden sm:inline">Quero Garantir Minha Vaga Com Risco Zero</span>
                      <span className="inline sm:hidden">Garantir Minha Vaga</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="relative">
                  {/* Camada externa - pulso */}
                  <div className="absolute inset-0 rounded-full bg-[#d4fb00]/30 animate-pulse"></div>

                  {/* Camada de brilho rotativa */}
                  <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-[#d4fb00]/40 animate-spin-slow"></div>

                  {/* Camada de estrelas */}
                  <div className="absolute inset-[-5px] rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-[#d4fb00]/10 flex items-center justify-center">
                      <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <div
                        className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-ping"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Selo principal */}
                  <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#d4fb00] to-[#c0e500] flex items-center justify-center text-black p-8 text-center shadow-lg border-8 border-white transform hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-black/5"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <ShieldCheck className="h-16 w-16 mb-2" />
                      <div className="text-3xl font-bold">7 DIAS</div>
                      <div className="text-lg font-medium">GARANTIA</div>
                      <div className="text-sm mt-1">SATISFAÇÃO OU</div>
                      <div className="text-lg font-bold">SEU DINHEIRO DE VOLTA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-[#d4fb00]/10">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00]/20 text-black px-4 py-1 text-sm rounded-full">Perguntas Frequentes</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                Tire Suas Dúvidas Sobre a Escola de Dons
              </h2>
              <p className="text-neutral-600">
                Respondemos às perguntas mais comuns para que você possa tomar a melhor decisão
              </p>
            </div>

            <div className="max-w-[800px] mx-auto p-8 rounded-3xl backdrop-blur-md bg-white/90 shadow-sm border border-neutral-200">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-b border-neutral-200">
                    <AccordionTrigger className="py-4 text-left font-medium hover:text-[#d4fb00] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2 text-neutral-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-black to-neutral-900 text-white relative overflow-hidden">
          {/* Elementos decorativos de fundo */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#d4fb00]/20 blur-3xl"></div>
            <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#d4fb00]/20 blur-3xl"></div>
            <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-[#d4fb00]/30 blur-3xl"></div>
            <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-[#d4fb00]/25 blur-3xl"></div>
          </div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            {/* Cabeçalho separado para hierarquia clara */}
            <div className="max-w-[900px] mx-auto text-center space-y-8 mb-12">
              <div className="inline-block transform hover:scale-105 transition-transform duration-300">
                <Badge className="bg-[#d4fb00] text-black px-6 py-2 text-base rounded-full font-medium shadow-md">
                  Última Oportunidade
                </Badge>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Transforme Sua Vida Ministerial <span className="text-[#d4fb00] animate-pulse">Hoje Mesmo</span>
              </h2>

              <p className="text-xl md:text-2xl text-white max-w-[700px] mx-auto">
                Mais de <span className="font-medium text-[#d4fb00]">1.500 líderes</span> já descobriram seus dons e
                estão impactando suas igrejas. Chegou a sua vez!
              </p>
            </div>

            {/* Layout em grid com proporção 5:7 para melhor equilíbrio visual */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-12">
              {/* Coluna 5/12 */}
              <div className="md:col-span-5 bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-left space-y-5 border border-white/20 shadow-lg transform hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex items-center gap-3 text-[#d4fb00] font-medium text-lg">
                  <Clock className="h-6 w-6 animate-pulse" />
                  <span>Oferta por tempo limitado</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00]" />
                    </div>
                    <p className="text-white">Acesso vitalício a todo o conteúdo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00]" />
                    </div>
                    <p className="text-white">Certificado de conclusão reconhecido</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00]" />
                    </div>
                    <p className="text-white">Suporte direto com a equipe do Bispo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center shrink-0 animate-pulse">
                      <Gift className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-bold">BÔNUS EXCLUSIVO: Grupo VIP com o Bispo Rinaldo</p>
                      <p className="text-rose-300 text-sm">Apenas para as próximas 48h - Valor: R$ 497,00</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-4 bg-black/40 rounded-lg border border-white/10">
                    <p className="text-sm text-white font-medium">Oferta por tempo limitado</p>
                  </div>
                </div>
              </div>

              {/* Coluna 7/12 */}
              <Card className="md:col-span-7 border-none rounded-3xl overflow-hidden shadow-xl backdrop-blur-md bg-white/95 text-neutral-900 transform hover:translate-y-[-5px] transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="bg-gradient-to-r from-[#d4fb00] to-[#c0e500] text-black p-5 -mx-8 -mt-8 mb-6 text-center shadow-md">
                    <h3 className="font-bold text-2xl mb-2">Oferta Especial - Encerra em:</h3>
                    <CountdownTimer />
                  </div>

                  <div className="text-center space-y-3 py-2">
                    <p className="text-neutral-500 line-through text-lg">De R$ 197,00</p>
                    <div className="text-5xl font-bold text-[#d4fb00]">Por apenas R$ 97,00</div>
                    <div className="text-base text-neutral-600 font-medium">ou 3x de R$ 34,29 sem juros</div>
                  </div>

                  <div className="bg-[#d4fb00]/10 p-5 rounded-2xl text-center border border-[#d4fb00]/30">
                    <p className="font-bold text-lg text-neutral-800">Economize R$ 100,00 (50% OFF)</p>
                    <p className="text-neutral-600">+ Bônus exclusivo no valor de R$ 497,00</p>
                  </div>

                  <Button className="bg-[#d4fb00] hover:bg-[#c0e500] text-black w-full h-16 text-xl font-bold shadow-md rounded-full transition-all duration-300 ease-in-out border-b-4 border-[#a8c800] hover:border-[#d4fb00] transform hover:scale-[1.02]">
                    <span className="hidden sm:inline">QUERO GARANTIR MINHA VAGA AGORA</span>
                    <span className="inline sm:hidden">GARANTIR VAGA</span>
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-base text-neutral-600 bg-neutral-100 p-3 rounded-lg">
                    <Lock className="h-5 w-5 text-[#d4fb00]" />
                    <span className="font-medium">Pagamento 100% seguro</span>
                  </div>

                  <div className="pt-2">
                    <p className="text-center text-neutral-600 font-medium mb-3">Formas de pagamento aceitas:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <div className="w-16 h-10 bg-neutral-100 rounded-lg flex items-center justify-center shadow-sm border border-neutral-200">
                        <span className="text-sm font-medium">Visa</span>
                      </div>
                      <div className="w-16 h-10 bg-neutral-100 rounded-lg flex items-center justify-center shadow-sm border border-neutral-200">
                        <span className="text-sm font-medium">Master</span>
                      </div>
                      <div className="w-16 h-10 bg-neutral-100 rounded-lg flex items-center justify-center shadow-sm border border-neutral-200">
                        <span className="text-sm font-medium">Pix</span>
                      </div>
                      <div className="w-16 h-10 bg-neutral-100 rounded-lg flex items-center justify-center shadow-sm border border-neutral-200">
                        <span className="text-sm font-medium">Boleto</span>
                      </div>
                      <div className="w-16 h-10 bg-neutral-100 rounded-lg flex items-center justify-center shadow-sm border border-neutral-200">
                        <span className="text-sm font-medium">PayPal</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-neutral-300 text-sm max-w-[700px] mx-auto text-center bg-black/30 p-4 rounded-xl backdrop-blur-sm">
              <p>
                Ao se inscrever, você concorda com nossos termos de uso e política de privacidade. Lembre-se que você
                tem 7 dias de garantia incondicional para solicitar reembolso caso não esteja satisfeito.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-neutral-900 text-white">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-medium text-xl">
                <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black">RS</div>
                <span>Bispo Rinaldo Silva</span>
              </div>
              <p className="text-neutral-400">Transformando vidas através da palavra de Deus.</p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-neutral-400 hover:text-[#d4fb00] transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#modulos" className="text-neutral-400 hover:text-[#d4fb00] transition-colors">
                    Módulos
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="text-neutral-400 hover:text-[#d4fb00] transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-neutral-400 hover:text-[#d4fb00] transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-neutral-400 hover:text-[#d4fb00] transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Contato</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>contato@escoladedons.com.br</li>
                <li>+55 (11) 99999-9999</li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Formas de Pagamento</h3>
              <div className="flex flex-wrap gap-2">
                <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs">Visa</span>
                </div>
                <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs">Master</span>
                </div>
                <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs">Pix</span>
                </div>
                <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs">Boleto</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Escola de Dons - Bispo Rinaldo Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
