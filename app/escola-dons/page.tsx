"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Brain,
  CheckCircle2,
  Flame,
  GraduationCap,
  Heart,
  type LucideIcon,
  MessageCircle,
  ShieldCheck,
  Star,
  Users,
  Zap,
  XCircle,
  Clock,
  Menu,
  ArrowRight,
  Award,
  Gift,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CountdownTimer from "./countdown-timer"
import { useEffect, useState } from "react"

// Componente para o card de problema
function ProblemCard({ icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <Card className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-800 border border-gray-700">
      <CardContent className="p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4fb00] to-[#a5c600] flex items-center justify-center shrink-0">
          {React.createElement(icon, { className: "h-6 w-6 text-black" })}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Efeito de brilho para elementos de destaque
function ShineEffect({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-shine"></div>
    </div>
  )
}

// Componente principal
export default function EscolaDonsDark() {
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
      imageQuery: "pastor brasileiro homem 40 anos",
    },
    {
      name: "Mariana Santos",
      role: "Líder de Jovens",
      location: "Rio de Janeiro, RJ",
      testimony:
        "Sempre soube que tinha um chamado para trabalhar com jovens, mas não sabia como desenvolver isso. A Escola de Dons me deu as ferramentas práticas para identificar e aperfeiçoar meus dons de ensino e pastoreio.",
      result: "50 jovens batizados após aplicar os princípios do curso",
      isVideo: true,
      videoThumbnail: "/placeholder.svg?key=z6663",
      imageQuery: "jovem lider igreja brasileira mulher 30 anos",
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
      whatsappImage: "/placeholder.svg?key=lvq8i",
      imageQuery: "empresário brasileiro cristão 45 anos",
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

  // Função para controle do carrossel com autoplay
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.getElementById("carousel-container")
      if (container) {
        setCurrentSlide((prev) => {
          const next = (prev + 1) % 3
          container.style.transform = `translateX(${-next * 100}%)`
          return next
        })
      }
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 overflow-x-hidden max-w-[100vw] relative text-white">
      {/* CTA Flutuante */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-black/90 to-black/95 backdrop-blur-md py-3 border-t border-gray-800 transform transition-transform duration-300 shadow-lg shadow-black/30">
        <div className="container px-4 sm:px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white text-sm sm:text-base">
            <span className="text-[#d4fb00] font-bold">Oferta especial:</span> Acesso vitalício por apenas R$ 97,00
          </div>
          <a href="#matricula">
            <Button className="relative overflow-hidden bg-[#d4fb00] text-black hover:bg-[#c0e500] font-bold text-sm sm:text-base px-4 py-2 w-full sm:w-auto whitespace-nowrap shadow-md shadow-black/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:scale-105">
              GARANTIR MINHA VAGA
              <ChevronRight className="ml-1 h-4 w-4" />
              <ShineEffect />
            </Button>
          </a>
        </div>
      </div>

      {/* Header/Navigation */}
      <header
        id="top"
        className="sticky top-0 z-50 w-full backdrop-blur-md bg-gradient-to-r from-black/80 to-black/70 border-b border-gray-800 supports-[backdrop-filter]:bg-black/40 shadow-md shadow-black/10"
      >
        <div className="container px-4 sm:px-6 mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4fb00] to-[#a5c600] flex items-center justify-center text-black shadow-md shadow-[#d4fb00]/20">
              RS
            </div>
            <span className="text-white">Escola de Dons</span>
          </div>

          {/* Menu para desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#sobre"
              className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors hover:scale-105 transform duration-200"
            >
              Sobre
            </a>
            <a
              href="#modulos"
              className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors hover:scale-105 transform duration-200"
            >
              Módulos
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors hover:scale-105 transform duration-200"
            >
              Benefícios
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors hover:scale-105 transform duration-200"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors hover:scale-105 transform duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* Botão de menu para mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-[#d4fb00] transition-all duration-200"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </div>

          <a href="#matricula" className="hidden md:block">
            <Button className="relative overflow-hidden bg-[#d4fb00] text-black hover:bg-[#c0e500] font-medium shadow-md text-sm px-4 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Inscrever-se
              <ChevronRight className="ml-1 h-4 w-4" />
              <ShineEffect />
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-black text-white">
          <div className="absolute inset-0 opacity-70">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1368.JPG-QIgAJrLgnH6dH16YMLIHJ78cb5E0Zb.jpeg"
              alt="Culto Igreja Impactados"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

          {/* Elemento decorativo de iluminação */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4fb00]/20 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#d4fb00]/20 rounded-full blur-[100px] opacity-30"></div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#d4fb00] hover:to-[#b8db00] text-black px-4 py-1 text-sm rounded-full shadow-lg shadow-[#d4fb00]/20">
                  Matrículas Abertas
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-shadow-lg">
                  Descubra e Desenvolva Seus <span className="text-[#d4fb00]">Dons Espirituais</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-[600px] mx-auto lg:mx-0">
                  Seja uma ferramenta de transformação através do propósito dos Dons Espirituais.
                </p>
                <div className="flex justify-center w-full">
                  <a href="#matricula">
                    <Button
                      size="lg"
                      className="relative overflow-hidden bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#c0e500] hover:to-[#98c000] text-black px-6 py-3 text-base sm:text-lg font-bold shadow-xl w-full sm:w-auto max-w-full transition-all duration-300 hover:shadow-lg hover:shadow-[#d4fb00]/30 hover:scale-105 scale-100"
                    >
                      <span className="hidden sm:inline">Quero Desenvolver Meus Dons</span>
                      <span className="inline sm:hidden">Desenvolver Meus Dons</span>
                      <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0" />
                      <ShineEffect />
                    </Button>
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start pt-4">
                  <div className="text-sm">
                    <span className="text-[#d4fb00] font-bold">+1.500 alunos</span> já transformaram suas vidas
                  </div>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0 max-w-md w-full" id="matricula">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4fb00]/40 to-[#a5c600]/20 rounded-2xl -rotate-3 shadow-xl shadow-black/30"></div>
                <Card className="relative border-none rounded-2xl overflow-hidden shadow-2xl bg-gray-800/95 backdrop-blur-md text-white border border-gray-700">
                  <CardContent className="p-6 space-y-6">
                    <div className="bg-gradient-to-r from-black to-gray-800 text-white p-4 -mx-6 -mt-6 mb-6 text-center shadow-md border-b border-gray-700">
                      <h3 className="font-bold text-xl">Oferta Especial - Encerra em:</h3>
                      <CountdownTimer />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <p>Acesso imediato a todo conteúdo</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <p>Certificado de conclusão</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <p>Suporte direto com a equipe</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <p>Acesso vitalício</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Gift className="h-5 w-5 text-red-500 mt-0.5 shrink-0 animate-pulse" />
                        <p className="font-bold">
                          BÔNUS: Grupo exclusivo com o Bispo Rinaldo
                          <span className="text-red-400 text-sm block">Apenas para as próximas 48h</span>
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 space-y-3">
                      <div className="text-center">
                        <span className="text-gray-400 line-through text-lg">De R$ 197,00</span>
                        <div className="text-3xl font-bold text-white">Por apenas R$ 97,00</div>
                        <div className="text-sm text-gray-400">ou 3x de R$ 34,29</div>
                      </div>
                      <Button className="relative overflow-hidden bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#c0e500] hover:to-[#98c000] text-black w-full h-12 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 scale-100">
                        <span className="hidden sm:inline">QUERO ME INSCREVER AGORA</span>
                        <span className="inline sm:hidden">INSCREVER AGORA</span>
                        <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0" />
                        <ShineEffect />
                      </Button>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <ShieldCheck className="h-4 w-4 text-[#a5c600]" />
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
        <section className="py-8 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#d4fb00] to-[#a5c600] bg-clip-text text-transparent">
                  1500+
                </div>
                <p className="text-gray-400">Alunos</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block bg-[#d4fb00]/40" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#d4fb00] to-[#a5c600] bg-clip-text text-transparent">
                  5
                </div>
                <p className="text-gray-400">Módulos</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block bg-[#d4fb00]/40" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#d4fb00] to-[#a5c600] bg-clip-text text-transparent">
                  40+
                </div>
                <p className="text-gray-400">Horas de Conteúdo</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block bg-[#d4fb00]/40" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#d4fb00] to-[#a5c600] bg-clip-text text-transparent">
                  4.9/5
                </div>
                <div className="flex text-[#d4fb00]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prova de Autoridade */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#d4fb00]/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#d4fb00]/10 rounded-full blur-[100px]"></div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#d4fb00] hover:to-[#b8db00] text-black px-4 py-1 text-sm rounded-full shadow-lg">
                Reconhecimento
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Ministério Reconhecido <span className="text-[#d4fb00]">Internacionalmente</span>
              </h2>
              <p className="text-gray-300">
                O Bispo Rinaldo Silva tem impactado vidas em mais de 40 países através de seu ministério
              </p>
            </div>

            {/* Carrossel de Reconhecimento */}
            <div className="relative mb-12 max-w-[900px] mx-auto">
              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  id="carousel-container"
                  style={{ transform: "translateX(0%)" }}
                >
                  <div className="min-w-full px-2">
                    <div className="relative aspect-[9/16] md:aspect-[16/9] rounded-xl overflow-hidden group shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-105 transform">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-16 h-16 bg-[#d4fb00]/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                          <PlayCircle className="h-10 w-10 text-black" />
                        </div>
                      </div>
                      <Image
                        src="/placeholder.svg?key=kmgxg"
                        alt="Bispo Rinaldo pregando"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <span className="bg-[#d4fb00] text-black text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">
                          VÍDEO
                        </span>
                        <h3 className="text-xl font-bold">Conferência Aviva Nations</h3>
                        <p className="text-sm text-gray-300">Mais de 5.000 participantes</p>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-full px-2">
                    <div className="relative aspect-[9/16] md:aspect-[16/9] rounded-xl overflow-hidden group shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-105 transform">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-16 h-16 bg-[#d4fb00]/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                          <PlayCircle className="h-10 w-10 text-black" />
                        </div>
                      </div>
                      <Image
                        src="/healing-ministration-video-still.png"
                        alt="Vídeos de curas realizadas"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <span className="bg-[#d4fb00] text-black text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">
                          VÍDEO
                        </span>
                        <h3 className="text-xl font-bold">Vídeos de Curas</h3>
                        <p className="text-sm text-gray-300">Testemunhos reais de milagres e curas</p>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-full px-2">
                    <div className="relative aspect-[9/16] md:aspect-[16/9] rounded-xl overflow-hidden group shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-105 transform">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-16 h-16 bg-[#d4fb00]/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                          <PlayCircle className="h-10 w-10 text-black" />
                        </div>
                      </div>
                      <Image
                        src="/placeholder.svg?key=kjv5j"
                        alt="Bispo Rinaldo em entrevista"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <span className="bg-[#d4fb00] text-black text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">
                          VÍDEO
                        </span>
                        <h3 className="text-xl font-bold">Mídia & Entrevistas</h3>
                        <p className="text-sm text-gray-300">Presença em canais nacionais</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controles do carrossel */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-20"
                onClick={() => {
                  const container = document.getElementById("carousel-container")
                  const currentTransform = container.style.transform
                  const currentPosition =
                    Number.parseInt(currentTransform.replace("translateX(", "").replace("%)", "")) || 0
                  const newPosition = Math.min(currentPosition + 100, 0)
                  container.style.transform = `translateX(${newPosition}%)`
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-20"
                onClick={() => {
                  const container = document.getElementById("carousel-container")
                  const currentTransform = container.style.transform
                  const currentPosition =
                    Number.parseInt(currentTransform.replace("translateX(", "").replace("%)", "")) || 0
                  const newPosition = Math.max(currentPosition - 100, -200)
                  container.style.transform = `translateX(${newPosition}%)`
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Indicadores do carrossel */}
              <div className="flex justify-center mt-4 gap-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className="w-3 h-3 rounded-full bg-gray-600 hover:bg-[#d4fb00] focus:bg-[#d4fb00]"
                    onClick={() => {
                      const container = document.getElementById("carousel-container")
                      container.style.transform = `translateX(${-index * 100}%)`
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#d4fb00]/30 transition-all duration-300 hover:shadow-[#d4fb00]/10 hover:shadow-xl">
                  <div className="text-3xl font-bold text-[#d4fb00]">40+</div>
                  <p className="text-gray-300">Países</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#d4fb00]/30 transition-all duration-300 hover:shadow-[#d4fb00]/10 hover:shadow-xl">
                  <div className="text-3xl font-bold text-[#d4fb00]">27</div>
                  <p className="text-gray-300">Estados</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#d4fb00]/30 transition-all duration-300 hover:shadow-[#d4fb00]/10 hover:shadow-xl">
                  <div className="text-3xl font-bold text-[#d4fb00]">1000+</div>
                  <p className="text-gray-300">Conferências</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#d4fb00]/30 transition-all duration-300 hover:shadow-[#d4fb00]/10 hover:shadow-xl">
                  <div className="text-3xl font-bold text-[#d4fb00]">20+</div>
                  <p className="text-gray-300">Anos</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#matricula">
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#c0e500] hover:to-[#98c000] text-black px-4 py-3 text-base font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4fb00]/20 hover:scale-105 scale-100"
                >
                  Quero Aprender com o Bispo Rinaldo
                  <ChevronRight className="ml-2 h-5 w-5" />
                  <ShineEffect />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="sobre"
          className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
        >
          {/* Decoração de fundo */}
          <div className="absolute -right-32 top-1/4 w-64 h-64 bg-[#d4fb00]/10 rounded-full blur-[80px] z-0"></div>
          <div className="absolute -left-32 bottom-1/4 w-80 h-80 bg-[#d4fb00]/10 rounded-full blur-[100px] z-0"></div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#d4fb00] hover:to-[#b8db00] text-black px-4 py-1 text-sm rounded-full shadow-md">
                O que é a Escola de Dons?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Uma <span className="text-[#a5c600]">Jornada Espiritual</span> Transformadora
              </h2>
              <p className="text-gray-300">
                Descubra como manifestar a graça de Deus através de uma fé inabalável e obediência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300">
                  A Escola de Dons é uma jornada espiritual para vivenciar as mesmas experiências que Jesus,
                  manifestando a graça de Deus através de uma fé inabalável e obediência.
                </p>
                <p className="text-lg text-gray-300">
                  Com <span className="font-semibold text-white">ênfase em um ministério prático</span>, ensinamos que a
                  mesma autoridade que houve no ministério de Jesus nos é concedida por meio do Espírito Santo para
                  edificação do corpo de Cristo.
                </p>
                <p className="text-lg text-gray-300">
                  Nosso objetivo é{" "}
                  <span className="font-semibold text-white">
                    equipar você com ferramentas práticas para realizar a obra de Deus
                  </span>
                  . Cremos que este é o tempo de um grande exército se levantar em um movimento sobrenatural do
                  Espírito, para curar enfermos, expulsar demônios e manifestar o Reino.
                </p>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button className="relative overflow-hidden bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#c0e500] hover:to-[#98c000] text-black text-base px-4 py-2 shadow-lg w-full sm:w-auto transition-all duration-300 hover:shadow-xl hover:shadow-[#d4fb00]/20 hover:scale-105 scale-100">
                      Quero Fazer Parte
                      <ChevronRight className="ml-2 h-5 w-5" />
                      <ShineEffect />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9900.JPG-smCkQZtviuLHPYYgLQRRL1xexqnBgr.jpeg"
                  alt="Bispo Rinaldo Silva ministrando"
                  width={600}
                  height={800}
                  className="object-cover rounded-2xl group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">100% Online</h3>
                  <p className="text-white">Assista quando e quantas vezes quiser, no seu próprio ritmo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é este curso Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
          {/* Decoração de fundo */}
          <div className="absolute -left-32 top-1/3 w-64 h-64 bg-[#d4fb00]/10 rounded-full blur-[80px] z-0"></div>
          <div className="absolute -right-32 bottom-1/3 w-80 h-80 bg-[#d4fb00]/10 rounded-full blur-[100px] z-0"></div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#d4fb00] hover:to-[#b8db00] text-black px-4 py-1 text-sm rounded-full shadow-md">
                Para quem é este curso?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Este Curso Foi Feito Para <span className="text-[#a5c600]">Você Que...</span>
              </h2>
              <p className="text-gray-300">
                Se você se identifica com pelo menos um dos perfis abaixo, a Escola de Dons irá transformar sua vida
                ministerial
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
              {studentProfiles.map((profile, index) => (
                <Card
                  key={index}
                  className="relative border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm bg-gray-800/95 border border-gray-700 transform hover:scale-105 scale-100"
                >
                  <div className="h-2 bg-gradient-to-r from-[#d4fb00] to-[#a5c600]"></div>
                  <ShineEffect className="group-hover:opacity-100 opacity-0" />
                  <CardContent className="p-4 sm:p-6 md:p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center shadow-md">
                      {React.createElement(profile.icon, { className: "h-6 w-6 text-[#a5c600]" })}
                    </div>
                    <h3 className="text-xl font-bold text-white">{profile.title}</h3>
                    <p className="text-gray-300">{profile.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Para quem NÃO é este curso */}
            <div className="mt-20 max-w-[800px] mx-auto">
              <div className="text-center mb-12 space-y-4">
                <Badge className="bg-gradient-to-r from-gray-300 to-gray-100 hover:from-gray-100 hover:to-gray-300 text-black px-4 py-1 text-sm rounded-full shadow-md">
                  Este curso NÃO é para você se...
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">
                  Seja honesto consigo mesmo antes de investir
                </h3>
                <p className="text-gray-300">
                  Queremos que você tenha a melhor experiência possível, por isso é importante que saiba:
                </p>
              </div>

              <div className="space-y-4">
                {notForYouItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102 scale-100 border border-gray-700"
                  >
                    <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-lg text-white">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#matricula">
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#c0e500] hover:to-[#98c000] text-black font-bold px-4 py-3 text-sm sm:text-base shadow-lg w-full sm:w-auto transition-all duration-300 hover:shadow-xl hover:shadow-[#d4fb00]/20 hover:scale-105 scale-100"
                >
                  <span className="hidden sm:inline">QUERO DESENVOLVER MEUS DONS AGORA!</span>
                  <span className="inline sm:hidden">DESENVOLVER MEUS DONS!</span>
                  <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0" />
                  <ShineEffect />
                </Button>
              </a>
              <p className="mt-4 text-gray-400 text-sm">
                Restam apenas <span className="text-red-400 font-bold animate-pulse">12 vagas</span> para esta turma!
              </p>
            </div>
          </div>
        </section>

        {/* Bônus Limitado Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden border-t border-b border-gray-800">
          {/* Efeito de luz */}
          <div className="absolute inset-0 bg-[url('/abstract-light-pattern.png')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4fb00]/10 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#d4fb00]/10 rounded-full blur-[100px] opacity-20"></div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#d4fb00] hover:to-[#b8db00] text-black px-4 py-1 text-sm rounded-full animate-pulse shadow-lg">
                  Oferta por Tempo Limitado
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white drop-shadow-sm">
                  BÔNUS EXCLUSIVO: <span className="underline decoration-2 decoration-[#d4fb00]/70">Grupo VIP</span> com
                  o Bispo Rinaldo
                </h2>
                <p className="text-lg text-gray-300">
                  Inscreva-se <span className="font-bold underline decoration-2 text-white">até sexta-feira</span> e
                  ganhe acesso ao grupo exclusivo onde o Bispo Rinaldo responde perguntas e compartilha revelações que
                  não são divulgadas em nenhum outro lugar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-gray-300">Acesso direto ao Bispo Rinaldo para tirar dúvidas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-gray-300">Conteúdos exclusivos compartilhados apenas no grupo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-gray-300">Encontros online mensais para ministração e ensino</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-gray-300">
                      Valor deste bônus: <span className="font-bold text-white">R$ 497,00</span>
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button className="relative overflow-hidden bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#c0e500] hover:to-[#98c000] text-black font-bold text-lg px-8 py-6 shadow-lg w-full sm:w-auto transition-all duration-300 hover:shadow-xl hover:shadow-[#d4fb00]/30 hover:scale-105 scale-100">
                      GARANTIR MINHA VAGA + BÔNUS
                      <ChevronRight className="ml-2 h-5 w-5" />
                      <ShineEffect />
                    </Button>
                  </a>
                  <p className="mt-4 text-sm text-gray-400">
                    <Clock className="inline-block mr-1 h-4 w-4" /> Oferta válida por tempo limitado
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/20 transform hover:scale-102 scale-100 transition-all duration-300">
                  <Image
                    src="/placeholder.svg?key=wyno2"
                    alt="Grupo VIP com o Bispo Rinaldo"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] text-black font-bold px-4 py-2 rounded-xl inline-block mb-2 shadow-lg">
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
        <section
          id="modulos"
          className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
        >
          {/* Decoração de fundo */}
          <div className="absolute -left-32 top-1/3 w-64 h-64 bg-[#d4fb00]/10 rounded-full blur-[80px] z-0"></div>
          <div className="absolute -right-32 bottom-1/3 w-80 h-80 bg-[#d4fb00]/10 rounded-full blur-[100px] z-0"></div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#d4fb00] hover:to-[#b8db00] text-black px-4 py-1 text-sm rounded-full shadow-md">
                O que você vai aprender
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Um Programa Completo Para <span className="text-[#a5c600]">Desenvolver Seus Dons</span>
              </h2>
              <p className="text-gray-300">
                5 módulos estrategicamente desenvolvidos para te levar do conhecimento básico à aplicação avançada
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {courseModules.map((module, index) => (
                    <AccordionItem
                      key={index}
                      value={`module-${index}`}
                      className="border-b border-gray-700 hover:border-[#d4fb00]/50 transition-colors duration-300"
                    >
                      <AccordionTrigger className="py-4 text-left font-bold hover:text-[#a5c600] hover:no-underline text-white">
                        <div className="flex items-center gap-3">
                          {React.createElement(module.icon, { className: "h-5 w-5 text-[#d4fb00]" })}
                          <span>{module.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2 space-y-4 text-gray-300">
                        <p>{module.description}</p>
                        <div className="space-y-2">
                          <p className="font-semibold text-white">Conteúdo do módulo:</p>
                          <ul className="space-y-2">
                            {module.lessons.map((lesson, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                                <span>{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4 bg-gradient-to-r from-[#d4fb00]/10 to-[#a5c600]/10 p-4 rounded-lg shadow-inner border border-gray-700">
                          <p className="font-semibold text-white">O que você será capaz de fazer:</p>
                          <p className="text-gray-300">{module.capabilities}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="space-y-8">
                <Card className="border-none rounded-2xl shadow-xl overflow-hidden transform hover:scale-102 scale-100 transition-all duration-300 bg-gray-800 border border-gray-700">
                  <div className="relative aspect-video group">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#d4fb00] to-[#a5c600] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <Image
                      src="/placeholder.svg?key=dsfaj"
                      alt="Apresentação do Curso"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="p-6 bg-gradient-to-r from-gray-800 to-gray-900">
                    <h3 className="text-xl font-bold mb-2 text-white">Apresentação do Curso</h3>
                    <p className="text-gray-300">
                      Assista a este vídeo para conhecer mais sobre a metodologia e o conteúdo da Escola de Dons.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                      <Award className="h-5 w-5 text-[#d4fb00]" />O Que Está Incluído:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center shrink-0 shadow-md">
                          <CheckCircle2 className="h-5 w-5 text-[#a5c600]" />
                        </div>
                        <div>
                          <p className="font-medium text-white">5 Módulos Completos</p>
                          <p className="text-sm text-gray-400">Mais de 40 horas de conteúdo em vídeo</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center shrink-0 shadow-md">
                          <CheckCircle2 className="h-5 w-5 text-[#a5c600]" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Material de Apoio</p>
                          <p className="text-sm text-gray-400">Apostilas, e-books e recursos para download</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center shrink-0 shadow-md">
                          <CheckCircle2 className="h-5 w-5 text-[#a5c600]" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Testes Práticos</p>
                          <p className="text-sm text-gray-400">Avaliações para identificar seus dons</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center shrink-0 shadow-md">
                          <CheckCircle2 className="h-5 w-5 text-[#a5c600]" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Comunidade Exclusiva</p>
                          <p className="text-sm text-gray-400">Grupo de alunos para troca de experiências</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center shrink-0 shadow-md">
                          <CheckCircle2 className="h-5 w-5 text-[#a5c600]" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Certificado de Conclusão</p>
                          <p className="text-sm text-gray-400">Documento oficial ao finalizar o curso</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <a href="#matricula">
                        <Button className="relative overflow-hidden bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#c0e500] hover:to-[#98c000] text-black w-full py-2 text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#d4fb00]/20 hover:scale-105 scale-100">
                          Quero Acessar o Conteúdo
                          <ArrowRight className="ml-2 h-5 w-5" />
                          <ShineEffect />
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
        <section
          id="beneficios"
          className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
        >
          {/* Decoração de fundo */}
          <div className="absolute -right-32 top-1/4 w-64 h-64 bg-[#d4fb00]/10 rounded-full blur-[80px] z-0"></div>
          <div className="absolute -left-32 bottom-1/4 w-80 h-80 bg-[#d4fb00]/10 rounded-full blur-[100px] z-0"></div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#d4fb00] hover:to-[#b8db00] text-black px-4 py-1 text-sm rounded-full shadow-md">
                Por que escolher a Escola?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                O Que Você Vai <span className="text-[#a5c600]">Conquistar</span> Com a Escola de Dons
              </h2>
              <p className="text-gray-300">
                Transforme sua vida ministerial e descubra como impactar o Reino de Deus através dos seus dons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courseBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 transform hover:scale-105 scale-100"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center shadow-lg">
                      {React.createElement(benefit.icon, { className: "h-6 w-6 text-[#a5c600]" })}
                    </div>
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                    <div className="pt-4 mt-2">
                      <div className="bg-gradient-to-r from-[#d4fb00]/20 to-[#a5c600]/10 p-3 rounded-lg shadow-inner border border-gray-700">
                        <p className="font-medium text-sm text-white">Transformação:</p>
                        <p className="text-gray-200 font-semibold">{benefit.transformation}</p>
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
                  className="relative overflow-hidden bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#c0e500] hover:to-[#98c000] text-black px-4 h-12 text-base font-bold shadow-xl w-full sm:w-auto transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4fb00]/20 hover:scale-105 scale-100"
                >
                  Quero Desenvolver Meus Dons
                  <ChevronRight className="ml-2 h-5 w-5" />
                  <ShineEffect />
                </Button>
              </a>
              <p className="mt-4 text-gray-400 text-sm">
                Restam apenas <span className="text-red-400 font-bold animate-pulse">12 vagas</span> para esta turma!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          {/* Decoração de fundo */}
          <div className="absolute -left-32 top-1/3 w-64 h-64 bg-[#d4fb00]/10 rounded-full blur-[80px] z-0"></div>
          <div className="absolute -right-32 bottom-1/3 w-80 h-80 bg-[#d4fb00]/10 rounded-full blur-[100px] z-0"></div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#d4fb00] hover:to-[#b8db00] text-black px-4 py-1 text-sm rounded-full shadow-md">
                Perguntas Frequentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Tire Suas <span className="text-[#a5c600]">Dúvidas</span> Sobre a Escola de Dons
              </h2>
              <p className="text-gray-300">
                Respondemos às perguntas mais comuns para que você possa tomar a melhor decisão
              </p>
            </div>

            <div className="max-w-[800px] mx-auto p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl border border-gray-700">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-b border-gray-700 hover:border-[#d4fb00]/50 transition-colors duration-300"
                  >
                    <AccordionTrigger className="py-4 text-left font-bold hover:text-[#a5c600] hover:no-underline text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2 text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          id="checkout"
          className="py-20 md:py-28 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
        >
          {/* Elementos decorativos de fundo */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#d4fb00]/30 blur-3xl"></div>
            <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#d4fb00]/30 blur-3xl"></div>
            <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-[#d4fb00]/40 blur-3xl"></div>
          </div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="max-w-[900px] mx-auto text-center space-y-8">
              <div className="inline-block animate-pulse">
                <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#d4fb00] hover:to-[#b8db00] text-black px-6 py-2 text-base rounded-full font-bold shadow-lg shadow-[#d4fb00]/30">
                  Última Oportunidade
                </Badge>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-shadow">
                Transforme Sua Vida Ministerial <span className="text-[#d4fb00] drop-shadow-lg">Hoje Mesmo</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 max-w-[700px] mx-auto">
                Mais de <span className="font-bold text-white">1.500 líderes</span> já descobriram seus dons e estão
                impactando suas igrejas. Chegou a sua vez!
              </p>

              {/* Benefícios principais */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#d4fb00]/30 transition-all duration-300 hover:shadow-[#d4fb00]/10 hover:shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-[#a5c600]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Acesso Vitalício</h3>
                  <p className="text-gray-300">
                    Estude no seu ritmo com acesso ilimitado a todo o conteúdo para sempre
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#d4fb00]/30 transition-all duration-300 hover:shadow-[#d4fb00]/10 hover:shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-[#a5c600]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Comunidade VIP</h3>
                  <p className="text-gray-300">
                    Grupo exclusivo para tirar dúvidas e compartilhar experiências com outros alunos
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#d4fb00]/30 transition-all duration-300 hover:shadow-[#d4fb00]/10 hover:shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4fb00]/30 to-[#a5c600]/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-[#a5c600]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Certificado Oficial</h3>
                  <p className="text-gray-300">Receba seu certificado reconhecido após a conclusão do curso</p>
                </div>
              </div>

              {/* Preço e CTA */}
              <div className="mt-12 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm max-w-[600px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                  <div className="text-left">
                    <p className="text-gray-400 text-sm">Investimento único:</p>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 line-through text-lg">R$ 197,00</span>
                      <span className="bg-[#d4fb00]/20 text-[#d4fb00] px-2 py-1 rounded text-sm font-bold">
                        50% OFF
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-white">R$ 97,00</div>
                    <p className="text-sm text-gray-400">ou 3x de R$ 34,29 sem juros</p>
                  </div>
                  <div className="h-16 w-px bg-gray-700 hidden md:block"></div>
                  <div className="text-left">
                    <div className="flex items-start gap-2 mb-2">
                      <Gift className="h-5 w-5 text-red-500 mt-0.5 shrink-0 animate-pulse" />
                      <div>
                        <p className="font-bold text-white">BÔNUS EXCLUSIVO:</p>
                        <p className="text-sm text-gray-300">Grupo VIP com o Bispo Rinaldo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <ShieldCheck className="h-4 w-4 text-[#a5c600]" />
                      <span>Pagamento 100% seguro</span>
                    </div>
                  </div>
                </div>
                <a href="https://checkout.escoladedons.com.br" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="relative overflow-hidden bg-gradient-to-r from-[#d4fb00] to-[#a5c600] hover:from-[#c0e500] hover:to-[#98c000] text-black px-8 py-6 text-xl font-bold shadow-xl w-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4fb00]/20 hover:scale-105 scale-100"
                  >
                    QUERO GARANTIR MINHA VAGA AGORA
                    <ChevronRight className="ml-2 h-6 w-6" />
                    <ShineEffect />
                  </Button>
                </a>
                <p className="mt-4 text-gray-400 text-sm">
                  Restam apenas <span className="text-red-400 font-bold animate-pulse">12 vagas</span> para esta turma!
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Clock className="h-4 w-4 text-[#d4fb00]" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 text-[#d4fb00]" />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Heart className="h-4 w-4 text-[#d4fb00]" />
                    <span>Suporte exclusivo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?key=jsh3t')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>

        <div className="container px-4 sm:px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4fb00] to-[#a5c600] flex items-center justify-center text-black shadow-md shadow-[#d4fb00]/10">
                  RS
                </div>
                <span>Bispo Rinaldo Silva</span>
              </div>
              <p className="text-gray-400">Transformando vidas através da palavra de Deus.</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#sobre"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-1 hover:gap-2 duration-300"
                  >
                    <ArrowRight className="h-4 w-4 text-[#d4fb00]" />
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#modulos"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-1 hover:gap-2 duration-300"
                  >
                    <ArrowRight className="h-4 w-4 text-[#d4fb00]" />
                    Módulos
                  </a>
                </li>
                <li>
                  <a
                    href="#beneficios"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-1 hover:gap-2 duration-300"
                  >
                    <ArrowRight className="h-4 w-4 text-[#d4fb00]" />
                    Benefícios
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-1 hover:gap-2 duration-300"
                  >
                    <ArrowRight className="h-4 w-4 text-[#d4fb00]" />
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-1 hover:gap-2 duration-300"
                  >
                    <ArrowRight className="h-4 w-4 text-[#d4fb00]" />
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#d4fb00]" />
                  contato@escoladedons.com.br
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#d4fb00]" />
                  +55 (11) 99999-9999
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#d4fb00]" />
                  São Paulo, SP - Brasil
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Formas de Pagamento</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center shadow-inner border border-gray-700">
                  <span className="text-sm">Visa</span>
                </div>
                <div className="w-full h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center shadow-inner border border-gray-700">
                  <span className="text-sm">Master</span>
                </div>
                <div className="w-full h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center shadow-inner border border-gray-700">
                  <span className="text-sm">Pix</span>
                </div>
                <div className="w-full h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center shadow-inner border border-gray-700">
                  <span className="text-sm">Boleto</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Escola de Dons - Bispo Rinaldo Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
