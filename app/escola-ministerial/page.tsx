"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Award, Users, Heart, BookOpen, Zap, MessageCircle, ShieldCheck, GraduationCap, CheckCircle2, Menu, Gift } from "lucide-react"

// Efeito de brilho para elementos de destaque
function ShineEffect({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-shine"></div>
    </div>
  )
}

export default function EscolaMinisterialPage() {
  const beneficios = [
    {
      icon: GraduationCap,
      title: "Aulas 100% online",
      description: "Assista quando e onde quiser, com total flexibilidade."
    },
    {
      icon: MessageCircle,
      title: "Encontros semanais ao vivo",
      description: "Participe de aulas ao vivo com o Bispo Rinaldo Silva e tire dúvidas em tempo real."
    },
    {
      icon: BookOpen,
      title: "Mais de 50 aulas em 1 ano",
      description: "Conteúdo profundo, prático e transformador para seu ministério."
    },
    {
      icon: ShieldCheck,
      title: "Suporte gratuito + material de estudo",
      description: "Conte com acompanhamento e materiais exclusivos para potencializar seu aprendizado."
    },
    {
      icon: Award,
      title: "Certificado de conclusão",
      description: "Receba seu certificado ao final do curso e comprove sua capacitação."
    },
    {
      icon: Zap,
      title: "Acesso por 1 ano",
      description: "Estude no seu ritmo, com acesso garantido por 12 meses."
    },
    {
      icon: Heart,
      title: "Investimento acessível",
      description: "12x de R$ 24,80 ou R$ 247,00 à vista."
    },
  ]

  const transformacoes = [
    "Exercer seu ministério com sabedoria e confiança",
    "Evangelizar e discipular de forma prática e eficaz",
    "Ministrar cura e libertação com fundamentos bíblicos",
    "Compartilhar o evangelho de forma impactante",
    "Liderar grupos e motivar pessoas dentro da igreja"
  ]

  const faqs = [
    {
      question: "Como funcionam as aulas?",
      answer: "As aulas são 100% online, gravadas e ao vivo, para você assistir quando e onde quiser. Toda semana temos encontros ao vivo para aprofundar o conteúdo e tirar dúvidas."
    },
    {
      question: "Preciso ter conhecimento teológico prévio?",
      answer: "Não! O curso é para todos que desejam crescer no ministério, independentemente do nível de conhecimento."
    },
    {
      question: "Existe suporte para dúvidas?",
      answer: "Sim, você terá suporte gratuito durante todo o curso, além de acesso a materiais de apoio."
    },
    {
      question: "Recebo certificado?",
      answer: "Sim, ao concluir o curso você recebe um certificado reconhecido pelo Ministério do Bispo Rinaldo Silva."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Você terá acesso ao conteúdo por 1 ano a partir da matrícula."
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-x-hidden max-w-[100vw] relative text-white">
      {/* Banner de urgência */}
      <div className="bg-gradient-to-r from-[#efc100] to-[#d4a500] text-black py-1.5 text-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-xs sm:text-sm font-bold">
            ⏰ Últimas vagas disponíveis! Oferta especial por tempo limitado
            <a href="#inscricao" className="underline font-bold ml-1 sm:ml-2 hover:text-white transition-colors">
              Garantir minha vaga
            </a>
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-shine"></div>
      </div>
      
      {/* CTA Flutuante */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-black/90 to-black/95 backdrop-blur-md py-2 sm:py-3 border-t border-gray-800 transform transition-transform duration-300 shadow-lg shadow-black/30">
        <div className="container px-2 sm:px-6 mx-auto flex flex-row items-center justify-between gap-2 sm:gap-3">
          <div className="flex flex-col">
            <div className="text-white text-[10px] sm:text-xs md:text-sm font-medium">
              <span className="text-[#efc100] font-bold">Oferta exclusiva:</span>
            </div>
            <div className="text-white text-xs sm:text-sm font-bold">
              R$ <span className="text-[#efc100]">247,00</span> <span className="text-gray-400 line-through text-[10px]">R$ 397,00</span>
            </div>
          </div>
          <a href="#inscricao">
            <Button className="relative overflow-hidden bg-[#efc100] text-black hover:bg-[#d4a500] font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap shadow-md shadow-black/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:scale-105">
              GARANTIR VAGA AGORA
              <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
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
        <div className="container px-4 sm:px-6 mx-auto flex h-14 sm:h-16 items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-base sm:text-xl">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#efc100] to-[#d4a500] flex items-center justify-center text-black shadow-md shadow-[#efc100]/20 text-xs sm:text-base">
              RS
            </div>
            <span className="text-white">Escola Ministerial</span>
          </div>

          {/* Menu para desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#sobre"
              className="text-sm font-medium text-white hover:text-[#efc100] transition-colors hover:scale-105 transform duration-200"
            >
              Sobre
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-white hover:text-[#efc100] transition-colors hover:scale-105 transform duration-200"
            >
              Benefícios
            </a>
            <a
              href="#transformacoes"
              className="text-sm font-medium text-white hover:text-[#efc100] transition-colors hover:scale-105 transform duration-200"
            >
              Transformações
            </a>
            <a
              href="#mentor"
              className="text-sm font-medium text-white hover:text-[#efc100] transition-colors hover:scale-105 transform duration-200"
            >
              Mentor
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-white hover:text-[#efc100] transition-colors hover:scale-105 transform duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* Botão de menu para mobile e botão de CTA */}
          <div className="flex items-center gap-2">
            <a href="#inscricao" className="md:hidden">
              <Button className="relative overflow-hidden bg-[#efc100] text-black hover:bg-[#d4a500] font-medium shadow-md text-xs px-2.5 py-1 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Inscrever
                <ChevronRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </a>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-[#efc100] transition-all duration-200 h-8 w-8"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </div>

            <a href="#inscricao" className="hidden md:block">
              <Button className="relative overflow-hidden bg-[#efc100] text-black hover:bg-[#d4a500] font-medium shadow-md text-sm px-4 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Inscrever-se
                <ChevronRight className="ml-1 h-4 w-4" />
                <ShineEffect />
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="sobre" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-70">
          <Image
            src="/rinaldo-silva-profile.jpeg"
            alt="Ministério Rinaldo Silva"
            fill
            className="object-cover"
            priority={true}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

        {/* Elemento decorativo de iluminação */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#efc100]/20 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#efc100]/20 rounded-full blur-[100px] opacity-30"></div>

        <div className="container px-4 sm:px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="bg-gradient-to-r from-[#efc100] to-[#d4a500] hover:from-[#efc100] hover:to-[#e5b800] text-black px-4 py-1 text-sm rounded-full shadow-lg shadow-[#efc100]/20">
                Matrículas Abertas
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                Cresça em sua caminhada rumo ao chamado de todo cristão: <span className="text-[#efc100]">Ser igual a Jesus</span>
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-[600px] mx-auto lg:mx-0">
                Encontre o seu propósito ministerial com aulas 100% online e ao vivo, conduzidas por um líder experiente e ungido.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a href="#inscricao" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="relative overflow-hidden bg-gradient-to-r from-[#efc100] to-[#d4a500] hover:from-[#e5b800] hover:to-[#c99900] text-black px-6 py-3 text-base sm:text-lg font-bold shadow-xl w-full sm:w-auto max-w-full transition-all duration-300 hover:shadow-lg hover:shadow-[#efc100]/30 hover:scale-105 scale-100"
                  >
                    <span className="hidden sm:inline">Quero Desenvolver Meu Ministério</span>
                    <span className="inline sm:hidden">Desenvolver Meu Ministério</span>
                    <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0" />
                    <ShineEffect />
                  </Button>
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start pt-4">
                <div className="text-sm">
                  <span className="text-[#efc100] font-bold">+1.000 alunos</span> já transformaram seus ministérios
                </div>
              </div>
            </div>
            <div className="relative mx-auto lg:mx-0 max-w-md w-full" id="inscricao">
              <div className="absolute inset-0 bg-gradient-to-br from-[#efc100]/40 to-[#d4a500]/20 rounded-2xl -rotate-3 shadow-xl shadow-black/30"></div>
              <Card className="relative border-none rounded-2xl overflow-hidden shadow-2xl bg-gray-800/95 backdrop-blur-md text-white border border-gray-700">
                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-r from-black to-gray-800 text-white p-3 sm:p-4 -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-4 sm:mb-6 text-center shadow-md border-b border-gray-700">
                    <h3 className="font-bold text-base sm:text-xl">Matrícula - Vagas Limitadas</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#efc100] mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base">Aulas 100% online — assista quando e onde quiser</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#efc100] mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base">Encontros semanais ao vivo com o Bispo Rinaldo Silva</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#efc100] mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base">Mais de 50 aulas durante 1 ano</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#efc100] mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base">Suporte gratuito + material de estudo</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#efc100] mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base">Certificado de conclusão</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mt-0.5 shrink-0 animate-pulse" />
                      <div>
                        <p className="font-bold text-sm sm:text-base">BÔNUS: Grupo exclusivo com o Bispo Rinaldo</p>
                        <span className="text-red-400 text-xs sm:text-sm block">Apenas para as próximas 48h</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 sm:pt-4 space-y-2 sm:space-y-3">
                    <div className="text-center">
                      <span className="text-gray-400 line-through text-base sm:text-lg">De R$ 397,00</span>
                      <div className="text-2xl sm:text-3xl font-bold text-white">Por apenas R$ 247,00</div>
                      <div className="text-xs sm:text-sm text-gray-400">ou 12x de R$ 24,80</div>
                    </div>
                    <Button className="relative overflow-hidden bg-gradient-to-r from-[#efc100] to-[#d4a500] hover:from-[#e5b800] hover:to-[#c99900] text-black w-full h-10 sm:h-12 text-sm font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 scale-100">
                      <span className="hidden sm:inline">FAÇA SUA INSCRIÇÃO AGORA</span>
                      <span className="inline sm:hidden">INSCREVER AGORA</span>
                      <ChevronRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <ShineEffect />
                    </Button>
                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                      <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 text-[#d4a500]" />
                      <span>Pagamento 100% seguro</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="container mx-auto py-12 px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#efc100]">O que você recebe ao se inscrever:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {beneficios.map((b, i) => (
            <Card key={i} className="bg-gray-800 border-none shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#efc100] to-[#d4a500] flex items-center justify-center mb-2">
                  {React.createElement(b.icon, { className: "h-6 w-6 text-black" })}
                </div>
                <h3 className="text-lg font-bold text-[#efc100]">{b.title}</h3>
                <p className="text-gray-200 text-sm">{b.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Transformações Prometidas */}
      <section id="transformacoes" className="bg-gray-950 py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#efc100]">Ao final da Escola Ministerial, você será capaz de:</h2>
          <ul className="grid gap-4 text-lg text-gray-100 mb-8">
            {transformacoes.map((t, i) => (
              <li key={i} className="flex items-center gap-3 justify-center">
                <CheckCircle2 className="text-[#efc100] w-6 h-6 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <a href="#inscricao">
            <Button className="relative overflow-hidden bg-gradient-to-r from-[#efc100] to-[#d4a500] hover:from-[#e5b800] hover:to-[#c99900] text-black font-bold text-lg px-8 py-4 shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#efc100]/30 hover:scale-105">
              QUERO VIVER ESSA TRANSFORMAÇÃO
              <ChevronRight className="ml-2 h-5 w-5" />
              <ShineEffect />
            </Button>
          </a>
        </div>
      </section>

      {/* Sobre o Mentor */}
      <section id="mentor" className="container mx-auto py-12 px-4 max-w-4xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#efc100]/40 to-[#d4a500]/20 rounded-full -rotate-3 shadow-xl shadow-black/30"></div>
            <Image src="/rinaldo-silva-profile.jpeg" alt="Bispo Rinaldo Silva" width={220} height={220} className="relative rounded-full border-4 border-[#efc100] shadow-lg object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#efc100]">Seu Mentor: Bispo Rinaldo Silva</h2>
          <ul className="text-gray-100 text-lg mb-4 space-y-1">
            <li><b>Nascido em:</b> 05/02/1994</li>
            <li><b>Família:</b> Casado com Cecília Silva, pai da Manuela e do Enrico</li>
            <li><b>Bispo Sênior:</b> Igreja Impactados</li>
            <li><b>Empreendedor:</b> Graduado em Teologia e Filosofia</li>
            <li><b>Conferencista internacional:</b> Mais de 40 países</li>
            <li><b>Ministro da palavra:</b> Desde os 7 anos</li>
            <li><b>Sinais, milagres e salvação:</b> Testemunhados ao longo de seu ministério</li>
          </ul>
          <p className="text-gray-300 text-base">O Bispo Rinaldo Silva é reconhecido por sua paixão em formar líderes e equipar cristãos para viverem o sobrenatural de Deus de forma prática e transformadora.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-950 py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#efc100] text-center">Dúvidas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem value={faq.question} key={i} className="border-b border-gray-800">
                <AccordionTrigger className="text-lg text-[#efc100]">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-200 text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full py-16 px-4 bg-gradient-to-br from-[#efc100] via-[#e5b800] to-[#d4a500] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-shine"></div>
        <div className="container mx-auto max-w-2xl flex flex-col items-center justify-center relative">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Garanta sua vaga em um ambiente seguro e espiritual</h2>
          <p className="text-lg text-gray-800 mb-8 font-medium">Clique no botão abaixo e faça sua inscrição agora mesmo para transformar sua vida ministerial!</p>
          <Button className="relative overflow-hidden bg-gray-900 hover:bg-gray-800 text-[#efc100] font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
            FAÇA SUA INSCRIÇÃO AGORA
            <ChevronRight className="ml-2 h-5 w-5" />
            <ShineEffect />
          </Button>
        </div>
      </section>
    </div>
  )
} 