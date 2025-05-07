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
  type LucideIcon,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Star,
  Users,
  Zap,
  XCircle,
  Clock,
  Menu,
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
  getProductStructuredData 
} from "@/app/components/structured-data"

// Definindo os metadados para a página
export const metadata = {
  title: "Escola de Dons | Bispo Rinaldo Silva | Desenvolva Seus Dons Espirituais",
  description: "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva. A Escola de Dons é um curso completo com 5 módulos para transformar sua vida ministerial através do poder do Espírito Santo.",
  keywords: "Escola de Dons, Bispo Rinaldo Silva, Rinaldo Silva, dons espirituais, ministério, cura, profecia, discernimento, línguas, fé sobrenatural, milagres, curso dons espirituais, desenvolvimento espiritual, Escola de Dons online, Rinaldo Silva cursos",
  openGraph: {
    title: "Escola de Dons | Bispo Rinaldo Silva",
    description: "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva. Transforme sua vida ministerial com a Escola de Dons.",
    type: "website",
    url: "https://rinaldosilva.com/escola-dons",
    locale: "pt_BR",
    siteName: "Ministério Bispo Rinaldo Silva",
    images: [
      {
        url: "/placeholder.svg?key=escola-dons-og",
        width: 1200,
        height: 630,
        alt: "Escola de Dons | Bispo Rinaldo Silva"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Escola de Dons | Bispo Rinaldo Silva",
    description: "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva",
    images: ["/placeholder.svg?key=escola-dons-twitter"]
  },
  alternates: {
    canonical: "https://rinaldosilva.com/escola-dons",
  },
  category: "Cursos, Educação Religiosa",
  creator: "Bispo Rinaldo Silva",
  publisher: "Ministério Bispo Rinaldo Silva",
};

// Componente para o card de problema
function ProblemCard({ icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <Card className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover-scale">
      <CardContent className="p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4fb00] to-[#c0e500] flex items-center justify-center shrink-0 shadow-md animate-glow">
          {React.createElement(icon, { className: "h-6 w-6 text-black" })}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
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
      videoThumbnail: "/placeholder.svg?key=video-mariana&height=200&width=350",
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
      whatsappImage: "/placeholder.svg?key=whatsapp-roberto&height=400&width=250",
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
    description: "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva. A Escola de Dons é um curso completo com 5 módulos para transformar sua vida ministerial através do poder do Espírito Santo.",
    url: "https://rinaldosilva.com/escola-dons",
    image: "https://rinaldosilva.com/placeholder.svg?key=escola-dons-og",
    price: "97.00",
    priceCurrency: "BRL",
    sku: "ESCDON-001"
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
      
      {/* CTA Flutuante - com animação de pulso mais visível */}
      <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md py-4 border-t border-white/10 transform transition-transform duration-300 bg-gradient-to-r from-black via-black to-black shadow-lg">
        <div className="container px-4 sm:px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white text-sm sm:text-base">
            <span className="text-[#ff6b00] font-bold animate-pulse">Oferta especial:</span> Acesso vitalício por apenas R$ 97,00
          </div>
          <a href="#matricula">
            <Button className="btn-shimmer bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] hover:from-[#ff9d00] hover:to-[#ff6b00] text-white font-bold text-sm px-6 py-3 w-full sm:w-auto whitespace-nowrap shadow-xl border-none animate-pulse">
              GARANTIR MINHA VAGA AGORA
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* Header/Navigation */}
      <header
        id="top"
        className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/70 border-b border-white/10 supports-[backdrop-filter]:bg-black/40"
      >
        <div className="container px-4 sm:px-6 mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#d4fb00] to-[#c0e500] flex items-center justify-center text-black animate-pulse">RS</div>
            <span className="text-white">Escola de Dons</span>
          </div>

          {/* Menu para desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors">
              Sobre
            </a>
            <a href="#modulos" className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors">
              Módulos
            </a>
            <a href="#beneficios" className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="text-sm font-medium text-white hover:text-[#d4fb00] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Botão de menu para mobile */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </div>

          <a href="#matricula" className="hidden md:block">
            <Button className="btn-shimmer bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] text-white hover:from-[#ff9d00] hover:to-[#ff6b00] font-medium shadow-lg text-sm px-4 py-2 border-none">
              Inscrever-se
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-black text-white">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/placeholder.svg?key=qiio6"
              alt="Fundo Escola de Dons"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#c0e500] hover:from-[#c0e500] hover:to-[#d4fb00] text-black px-4 py-1 text-sm rounded-full shadow-sm animate-pulse">
                  Matrículas Abertas
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                  Descubra e Desenvolva Seus <span className="text-gradient-primary">Dons Espirituais</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-[600px] mx-auto lg:mx-0">
                  Seja uma ferramenta de transformação através do propósito dos Dons Espirituais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#matricula">
                    <Button
                      size="lg"
                      className="btn-shimmer bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] hover:from-[#ff9d00] hover:to-[#ff6b00] text-white px-4 py-3 text-base sm:text-lg font-bold shadow-xl w-full sm:w-auto max-w-full truncate border-none"
                    >
                      <span className="hidden sm:inline">Quero Desenvolver Meus Dons</span>
                      <span className="inline sm:hidden">Desenvolver Meus Dons</span>
                      <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0 animate-bounce-light" />
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 hover:text-[#d4fb00] transition-colors h-14 w-full sm:w-auto"
                  >
                    <PlayCircle className="mr-2 h-5 w-5 flex-shrink-0 animate-pulse" />
                    <span className="hidden sm:inline">Ver Apresentação</span>
                    <span className="inline sm:hidden">Ver Vídeo</span>
                  </Button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                        <Image
                          src={`/placeholder.svg?key=gzgga&key=pzfv8&key=qr1en&key=kr1bf&key=alnm0&key=o2wkx&key=q7pvk&key=msw84&key=0nh49&key=t0jbm&key=0sn00&key=sgdw4&height=100&width=100&query=pessoa ${i} cristã perfil`}
                          alt={`Aluno ${i}`}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="text-gradient-primary font-bold">+1.500 alunos</span> já transformaram suas vidas
                  </div>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0 max-w-md w-full" id="matricula">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4fb00]/30 to-[#ff6b00]/30 rounded-2xl -rotate-3 blur-sm animate-pulse"></div>
                <Card className="relative border-none rounded-2xl overflow-hidden shadow-xl bg-white/90 backdrop-blur-md text-black">
                  <CardContent className="p-6 space-y-6">
                    <div className="bg-gradient-to-r from-black/90 to-black/80 text-white p-4 -mx-6 -mt-6 mb-6 text-center">
                      <h3 className="font-bold text-xl">Oferta Especial - Encerra em:</h3>
                      <CountdownTimer />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0 animate-pulse" />
                        <p>Acesso imediato a todo conteúdo</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0 animate-pulse" style={{ animationDelay: "0.1s" }} />
                        <p>Certificado de conclusão</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0 animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <p>Suporte direto com a equipe</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0 animate-pulse" style={{ animationDelay: "0.3s" }} />
                        <p>Acesso vitalício</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#ff6b00] mt-0.5 shrink-0 animate-ripple" />
                        <p className="font-bold">
                          BÔNUS: Grupo exclusivo com o Bispo Rinaldo
                          <span className="text-red-600 text-sm block">Apenas para as próximas 48h</span>
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 space-y-3">
                      <div className="text-center">
                        <span className="text-gray-500 line-through text-lg">De R$ 197,00</span>
                        <div className="text-3xl font-bold text-gradient-orange">Por apenas R$ 97,00</div>
                        <div className="text-sm text-gray-500">ou 3x de R$ 34,29</div>
                      </div>
                      <Button className="btn-shimmer bg-gradient-to-r from-[#d4fb00] to-[#c0e500] text-black hover:from-[#c0e500] hover:to-[#d4fb00] w-full h-12 text-sm sm:text-base font-bold shadow-xl animate-scale">
                        <span className="hidden sm:inline">QUERO ME INSCREVER AGORA</span>
                        <span className="inline sm:hidden">INSCREVER AGORA</span>
                        <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0" />
                      </Button>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
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
        <section className="py-8 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">1500+</div>
                <p className="text-gray-600">Alunos</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">5</div>
                <p className="text-gray-600">Módulos</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">40+</div>
                <p className="text-gray-600">Horas de Conteúdo</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">4.9/5</div>
                <div className="flex text-[#ff9d00]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current animate-soft-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#c0e500] hover:from-[#c0e500] hover:to-[#d4fb00] text-black px-4 py-1 text-sm rounded-full shadow-sm">
                Depoimentos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">O Que Nossos Alunos Estão Dizendo</h2>
              <p className="text-gray-600">
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

        {/* About Section */}
        <section id="sobre" className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                O que é a Escola de Dons?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Uma Jornada Espiritual Transformadora</h2>
              <p className="text-gray-600">
                Descubra como manifestar a graça de Deus através de uma fé inabalável e obediência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  A Escola de Dons é uma jornada espiritual para vivenciar as mesmas experiências que Jesus,
                  manifestando a graça de Deus através de uma fé inabalável e obediência.
                </p>
                <p className="text-lg text-gray-700">
                  Com <span className="font-semibold">ênfase em um ministério prático</span>, ensinamos que a mesma
                  autoridade que houve no ministério de Jesus nos é concedida por meio do Espírito Santo para edificação
                  do corpo de Cristo.
                </p>
                <p className="text-lg text-gray-700">
                  Nosso objetivo é{" "}
                  <span className="font-semibold">
                    equipar você com ferramentas práticas para realizar a obra de Deus
                  </span>
                  . Cremos que este é o tempo de um grande exército se levantar em um movimento sobrenatural do
                  Espírito, para curar enfermos, expulsar demônios e manifestar o Reino.
                </p>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] text-base px-4 py-2 shadow-lg w-full sm:w-auto">
                      Quero Fazer Parte
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?key=mxed9"
                  alt="Jornada Espiritual"
                  width={600}
                  height={800}
                  className="object-cover rounded-2xl"
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
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                Para quem é este curso?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Este Curso Foi Feito Para Você Que...</h2>
              <p className="text-gray-600">
                Se você se identifica com pelo menos um dos perfis abaixo, a Escola de Dons irá transformar sua vida
                ministerial
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
              {studentProfiles.map((profile, index) => (
                <Card
                  key={index}
                  className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white/90"
                >
                  <div className="h-2 bg-[#d4fb00]"></div>
                  <CardContent className="p-4 sm:p-6 md:p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4fb00]/20 flex items-center justify-center">
                      {React.createElement(profile.icon, { className: "h-6 w-6 text-black" })}
                    </div>
                    <h3 className="text-xl font-bold">{profile.title}</h3>
                    <p className="text-gray-600">{profile.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Para quem NÃO é este curso */}
            <div className="mt-20 max-w-[800px] mx-auto">
              <div className="text-center mb-12 space-y-4">
                <Badge className="bg-black hover:bg-black text-white px-4 py-1 text-sm rounded-full">
                  Este curso NÃO é para você se...
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">
                  Seja honesto consigo mesmo antes de investir
                </h3>
                <p className="text-gray-600">
                  Queremos que você tenha a melhor experiência possível, por isso é importante que saiba:
                </p>
              </div>

              <div className="space-y-4">
                {notForYouItems.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-200">
                    <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#matricula">
                <Button
                  size="lg"
                  className="bg-[#d4fb00] text-black hover:bg-[#c0e500] font-bold px-4 py-3 text-sm sm:text-base shadow-lg w-full sm:w-auto"
                >
                  <span className="hidden sm:inline">QUERO DESENVOLVER MEUS DONS AGORA!</span>
                  <span className="inline sm:hidden">DESENVOLVER MEUS DONS!</span>
                  <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
              </a>
              <p className="mt-4 text-gray-500 text-sm">
                Restam apenas <span className="text-red-600 font-bold">12 vagas</span> para esta turma!
              </p>
            </div>
          </div>
        </section>

        {/* Bônus Limitado Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#d4fb00] to-[#c0e500]">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-black hover:bg-black text-white px-4 py-1 text-sm rounded-full animate-pulse">
                  Oferta por Tempo Limitado
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
                  BÔNUS EXCLUSIVO: Grupo VIP com o Bispo Rinaldo
                </h2>
                <p className="text-lg text-gray-800">
                  Inscreva-se <span className="font-bold underline">até sexta-feira</span> e ganhe acesso ao grupo
                  exclusivo onde o Bispo Rinaldo responde perguntas e compartilha revelações que não são divulgadas em
                  nenhum outro lugar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Acesso direto ao Bispo Rinaldo para tirar dúvidas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Conteúdos exclusivos compartilhados apenas no grupo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Encontros online mensais para ministração e ensino</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">
                      Valor deste bônus: <span className="font-bold">R$ 497,00</span>
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-8 py-6 shadow-lg w-full sm:w-auto">
                      GARANTIR MINHA VAGA + BÔNUS
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <p className="mt-4 text-sm text-gray-700">
                    <Clock className="inline-block mr-1 h-4 w-4" /> Oferta válida por tempo limitado
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=wyno2"
                    alt="Grupo VIP com o Bispo Rinaldo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-[#d4fb00] text-black font-bold px-4 py-2 rounded-xl inline-block mb-2">
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
        <section id="modulos" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                O que você vai aprender
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Um Programa Completo Para Desenvolver Seus Dons
              </h2>
              <p className="text-gray-600">
                5 módulos estrategicamente desenvolvidos para te levar do conhecimento básico à aplicação avançada
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {courseModules.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="py-4 text-left font-bold hover:text-[#d4fb00] hover:no-underline">
                        <div className="flex items-center gap-3">
                          {React.createElement(module.icon, { className: "h-5 w-5 text-[#d4fb00]" })}
                          <span>{module.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2 space-y-4">
                        <p className="text-gray-600">{module.description}</p>
                        <div className="space-y-2">
                          <p className="font-semibold">Conteúdo do módulo:</p>
                          <ul className="space-y-2">
                            {module.lessons.map((lesson, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                                <span>{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4 bg-[#d4fb00]/10 p-4 rounded-lg">
                          <p className="font-semibold">O que você será capaz de fazer:</p>
                          <p className="text-gray-700">{module.capabilities}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="space-y-8">
                <Card className="border-none rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                      <div className="w-16 h-16 rounded-full bg-[#d4fb00] flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <Image
                      src="/placeholder.svg?key=s2fzv"
                      alt="Apresentação do Curso"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Apresentação do Curso</h3>
                    <p className="text-gray-600">
                      Assista a este vídeo para conhecer mais sobre a metodologia e o conteúdo da Escola de Dons.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none rounded-2xl shadow-lg">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-xl font-bold">O Que Está Incluído:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">5 Módulos Completos</p>
                          <p className="text-sm text-gray-600">Mais de 40 horas de conteúdo em vídeo</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Material de Apoio</p>
                          <p className="text-sm text-gray-600">Apostilas, e-books e recursos para download</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Testes Práticos</p>
                          <p className="text-sm text-gray-600">Avaliações para identificar seus dons</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Comunidade Exclusiva</p>
                          <p className="text-sm text-gray-600">Grupo de alunos para troca de experiências</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Certificado de Conclusão</p>
                          <p className="text-sm text-gray-600">Documento oficial ao finalizar o curso</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <a href="#matricula">
                        <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full py-2 text-base">
                          Quero Acessar o Conteúdo
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
        <section id="beneficios" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                Por que escolher a Escola?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                O Que Você Vai Conquistar Com a Escola de Dons
              </h2>
              <p className="text-gray-600">
                Transforme sua vida ministerial e descubra como impactar o Reino de Deus através dos seus dons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courseBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center">
                      {React.createElement(benefit.icon, { className: "h-6 w-6 text-black" })}
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                    <div className="pt-4 mt-2">
                      <div className="bg-[#d4fb00]/20 p-3 rounded-lg">
                        <p className="font-medium text-sm">Transformação:</p>
                        <p className="text-gray-800 font-semibold">{benefit.transformation}</p>
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
                  className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-4 h-12 text-base font-bold shadow-xl animate-pulse w-full sm:w-auto"
                >
                  Quero Desenvolver Meus Dons
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="mt-4 text-gray-500 text-sm">
                Restam apenas <span className="text-red-600 font-bold">12 vagas</span> para esta turma!
              </p>
            </div>
          </div>
        </section>

        {/* Video Presentation Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 text-white">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                  Mensagem do Bispo Rinaldo
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Uma Palavra Direta Para Você</h2>
                <p className="text-lg text-gray-200">
                  Ouça o coração do Bispo Rinaldo Silva sobre a visão por trás da Escola de Dons e como ela pode
                  transformar sua vida e ministério.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-gray-300">Descubra a importância de operar nos dons para este tempo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-gray-300">Entenda como a Escola de Dons pode te capacitar de forma prática</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p className="text-gray-300">Conheça os princípios que transformaram milhares de vidas</p>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button
                      size="lg"
                      className="bg-[#d4fb00] text-black hover:bg-[#c0e500] font-bold shadow-xl px-4 py-2 text-base w-full sm:w-auto"
                    >
                      QUERO ME INSCREVER
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-[#d4fb00] flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-black border-b-[15px] border-b-transparent ml-2"></div>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?key=bishop-video"
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
        <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-gradient-to-r from-[#d4fb00] to-[#c0e500] hover:from-[#c0e500] hover:to-[#d4fb00] text-black px-4 py-1 text-sm rounded-full shadow-sm">
                Depoimentos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">O Que Nossos Alunos Estão Dizendo</h2>
              <p className="text-gray-600">
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
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#d4fb00]/20 rounded-2xl rotate-3"></div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=q0q3c"
                    alt="Bispo Rinaldo Silva"
                    width={600}
                    height={800}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                  Seu Mentor
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Bispo Rinaldo Silva</h2>
                <p className="text-gray-700">
                  Nascido em 05 de fevereiro de 1994, Rinaldo Silva é casado com Cecília Silva e pai de Manuela e
                  Enrico. É Bispo Sênior da Igreja Impactados.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p>Graduado em Teologia e Filosofia</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p>Conferencista com atuação em todos os estados do Brasil e mais de 40 países</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p>Iniciou seu ministério aos 7 anos de idade</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p>Bispo Sênior da Igreja Impactados</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                    <p>Milhares de vidas transformadas através de sinais e maravilhas que continuam até hoje</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-black text-white hover:bg-gray-800">Conheça Mais Sobre o Bispo Rinaldo</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#d4fb00] to-[#c0e500]">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
                  7 DIAS DE GARANTIA INCONDICIONAL
                </h2>
                <p className="text-lg text-gray-800">
                  <span className="bg-black text-white px-3 py-1 font-bold">SEU RISCO É ZERO!</span> Tenha acesso a todo
                  o conteúdo da Escola de Dons e, se por qualquer motivo não ficar satisfeito, basta solicitar o
                  reembolso em até 7 dias e devolveremos 100% do seu investimento.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Sem perguntas ou questionamentos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Sem burocracia ou formulários complicados</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Devolução integral de 100% do valor investido</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Processamento em até 48 horas úteis</p>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button className="bg-black text-white hover:bg-gray-800 font-bold text-sm sm:text-base px-4 py-3 shadow-lg w-full sm:w-auto">
                      <span className="hidden sm:inline">Quero Garantir Minha Vaga Com Risco Zero</span>
                      <span className="inline sm:hidden">Garantir Minha Vaga</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-black flex items-center justify-center text-white p-8 text-center relative animate-pulse">
                  <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#d4fb00] animate-spin-slow"></div>
                  <div>
                    <ShieldCheck className="h-16 w-16 mx-auto mb-2" />
                    <div className="text-2xl font-bold">7 DIAS</div>
                    <div className="text-sm">GARANTIA TOTAL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                Perguntas Frequentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Tire Suas Dúvidas Sobre a Escola de Dons
              </h2>
              <p className="text-gray-600">
                Respondemos às perguntas mais comuns para que você possa tomar a melhor decisão
              </p>
            </div>

            <div className="max-w-[800px] mx-auto p-8 rounded-2xl backdrop-blur-md bg-white/80 shadow-lg">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="py-4 text-left font-bold hover:text-[#d4fb00] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2 text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-black via-black to-gray-900 text-white relative overflow-hidden">
          {/* Elementos decorativos de fundo */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#d4fb00]/20 blur-3xl"></div>
            <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#d4fb00]/20 blur-3xl"></div>
            <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-[#d4fb00]/30 blur-3xl"></div>
          </div>

          <div className="container px-4 sm:px-6 mx-auto relative z-10">
            <div className="max-w-[900px] mx-auto text-center space-y-8">
              <div className="inline-block animate-pulse">
                <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-6 py-2 text-base rounded-full font-bold">
                  Última Oportunidade
                </Badge>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                Transforme Sua Vida Ministerial <span className="text-[#d4fb00]">Hoje Mesmo</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 max-w-[700px] mx-auto">
                Mais de <span className="font-bold text-white">1.500 líderes</span> já descobriram seus dons e estão
                impactando suas igrejas. Chegou a sua vez!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-left space-y-4 border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3 text-[#d4fb00] font-bold text-lg">
                    <Clock className="h-6 w-6" />
                    <span>Oferta por tempo limitado</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <p className="text-gray-200">Acesso vitalício a todo o conteúdo</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <p className="text-gray-200">Certificado de conclusão reconhecido</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <p className="text-gray-200">Suporte direto com a equipe do Bispo</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0 animate-pulse" />
                      <div>
                        <p className="text-white font-bold">BÔNUS EXCLUSIVO: Grupo VIP com o Bispo Rinaldo</p>
                        <p className="text-red-400 text-sm">Apenas para as próximas 48h - Valor: R$ 497,00</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <p className="text-sm text-gray-300">Restam apenas:</p>
                      <div className="flex justify-center gap-3 mt-1">
                        <div className="bg-black/60 text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center">
                          12
                        </div>
                        <div className="bg-black/60 text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center">
                          :
                        </div>
                        <div className="bg-black/60 text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center">
                          08
                        </div>
                        <div className="bg-black/60 text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center">
                          :
                        </div>
                        <div className="bg-black/60 text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center">
                          45
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-none rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/90 text-black">
                  <CardContent className="p-6 space-y-6">
                    <div className="bg-black text-white p-4 -mx-6 -mt-6 mb-6 text-center">
                      <h3 className="font-bold text-xl">Oferta Especial - Encerra em:</h3>
                      <CountdownTimer />
                    </div>

                    <div className="text-center space-y-2">
                      <p className="text-gray-500 line-through text-lg">De R$ 197,00</p>
                      <div className="text-4xl font-bold">Por apenas R$ 97,00</div>
                      <div className="text-sm text-gray-500">ou 3x de R$ 34,29 sem juros</div>
                    </div>

                    <div className="bg-[#d4fb00]/20 p-4 rounded-lg text-center">
                      <p className="font-bold">Economize R$ 100,00 (50% OFF)</p>
                      <p className="text-sm text-gray-700">+ Bônus exclusivo no valor de R$ 497,00</p>
                    </div>

                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full h-14 text-lg font-bold shadow-xl animate-pulse">
                      QUERO GARANTIR MINHA VAGA AGORA
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Pagamento 100% seguro</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs">Visa</span>
                      </div>
                      <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs">MC</span>
                      </div>
                      <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs">Pix</span>
                      </div>
                      <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs">Boleto</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-10 text-gray-400 text-sm max-w-[600px] mx-auto">
                <p>
                  Ao se inscrever, você concorda com nossos termos de uso e política de privacidade. Lembre-se que você
                  tem 7 dias de garantia incondicional para solicitar reembolso caso não esteja satisfeito.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black">RS</div>
                <span>Bispo Rinaldo Silva</span>
              </div>
              <p className="text-gray-400">Transformando vidas através da palavra de Deus.</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-[#d4fb00] transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#modulos" className="text-gray-400 hover:text-[#d4fb00] transition-colors">
                    Módulos
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="text-gray-400 hover:text-[#d4fb00] transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-gray-400 hover:text-[#d4fb00] transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-[#d4fb00] transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@escoladedons.com.br</li>
                <li>+55 (11) 99999-9999</li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Formas de Pagamento</h3>
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

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Escola de Dons - Bispo Rinaldo Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
