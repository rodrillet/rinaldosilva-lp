"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ChevronRight, 
  Award, 
  Users, 
  Heart, 
  BookOpen, 
  Zap, 
  MessageCircle, 
  ShieldCheck, 
  GraduationCap, 
  CheckCircle2, 
  Menu, 
  Gift,
  Play,
  ArrowRight,
  Clock,
  X,
  Calendar
} from "lucide-react"

// Efeito de brilho para elementos de destaque
function ShineEffect({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-shine"></div>
    </div>
  )
}

export default function EscolaMinisterialPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const openVideoModal = () => setVideoModalOpen(true)
  const closeVideoModal = () => setVideoModalOpen(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

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
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-lg">RS</span>
            </div>
            <span className="font-semibold text-gray-800 text-lg">Escola Ministerial</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#sobre" className="text-gray-600 hover:text-blue-700 transition-colors">
              Sobre
            </Link>
            <Link href="#programa" className="text-gray-600 hover:text-blue-700 transition-colors">
              Programa
            </Link>
            <Link href="#mentor" className="text-gray-600 hover:text-blue-700 transition-colors">
              Mentor
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-blue-700 transition-colors">
              FAQ
            </Link>
            <Link href="#inscricao">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-medium">
                Inscrever-se
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 p-2 focus:outline-none"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <Link 
                href="#sobre" 
                className="text-gray-600 hover:text-blue-700 py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="#programa" 
                className="text-gray-600 hover:text-blue-700 py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Programa
              </Link>
              <Link 
                href="#mentor" 
                className="text-gray-600 hover:text-blue-700 py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Mentor
              </Link>
              <Link 
                href="#faq" 
                className="text-gray-600 hover:text-blue-700 py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="#inscricao" 
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                Inscrever-se
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left content */}
            <div className="lg:w-1/2 max-w-xl">
              <div className="mb-6">
                <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  Matrículas Abertas
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                Cresça em sua caminhada rumo ao chamado de todo cristão
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Encontre o seu propósito ministerial com aulas 100% online e ao vivo, 
                conduzidas por um líder experiente e ungido.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#inscricao" className="w-full sm:w-auto">
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg px-6 py-3 rounded-lg transition-all">
                    Fazer Inscrição
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <button 
                  onClick={openVideoModal}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-blue-700 hover:text-blue-800 font-medium text-lg px-6 py-3 rounded-lg border border-blue-200 hover:border-blue-300 bg-blue-50 hover:bg-blue-100 transition-all"
                >
                  <Play className="h-5 w-5" />
                  Ver Apresentação
                </button>
              </div>
              
              {/* Credibility indicators */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-700" />
                  <span className="text-gray-600">
                    <strong className="text-blue-700">+1.000</strong> alunos formados
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-700" />
                  <span className="text-gray-600">
                    <strong className="text-blue-700">50+</strong> aulas em 1 ano
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-700" />
                  <span className="text-gray-600">
                    <strong className="text-blue-700">Certificado</strong> incluso
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-700" />
                  <span className="text-gray-600">
                    <strong className="text-blue-700">Suporte</strong> via grupo
                  </span>
                </div>
              </div>
            </div>
            
            {/* Right content - Hero image */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-2 md:p-4 shadow-lg">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image 
                    src="/rinaldo-silva-profile.jpeg" 
                    alt="Escola Ministerial" 
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold">Seja igual a Jesus e faça os milagres que Ele fez!</h3>
                    <p className="text-gray-200 mt-2">Bispo Rinaldo Silva</p>
                  </div>
                </div>
                
                {/* Featured info */}
                <div className="flex items-center gap-2 mt-4 bg-white p-3 rounded-lg shadow">
                  <div className="bg-blue-700 p-2 rounded-md text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Promoção por tempo limitado</p>
                    <p className="font-bold text-gray-900">
                      <span className="line-through text-gray-400 mr-2">R$ 397,00</span>
                      R$ 247,00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-xl w-full max-w-3xl">
            <button 
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
              <span className="sr-only">Fechar</span>
            </button>
            <div className="aspect-video w-full bg-gray-100 rounded-t-xl overflow-hidden">
              {/* Aqui viria uma tag de iframe de vídeo real */}
              <div className="flex items-center justify-center h-full text-gray-500">
                Vídeo de apresentação da Escola Ministerial
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900">Conheça a Escola Ministerial</h3>
              <p className="text-gray-600">Com o Bispo Rinaldo Silva</p>
            </div>
          </div>
        </div>
      )}

      {/* Programa Section */}
      <section id="programa" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Programa da Escola Ministerial
            </h2>
            <p className="text-lg text-gray-600">
              Um treinamento completo que vai transformar sua vida ministerial e te preparar 
              para impactar vidas através do poder do Espírito Santo.
            </p>
          </div>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-blue-700 p-6 flex justify-center items-center">
                      {React.createElement(beneficio.icon, { className: "h-12 w-12 text-white" })}
                    </div>
                    <div className="md:w-3/4 p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600">{beneficio.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#inscricao">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg px-8 py-3 rounded-lg transition-all">
                Quero Participar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Transformações Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image 
                src="/rinaldo-silva-profile.jpeg"
                alt="Transformações Ministeriais"
                width={540}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ao final da Escola Ministerial, você será capaz de:
              </h2>
              <div className="space-y-4">
                {transformacoes.map((transformacao, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="bg-blue-100 text-blue-700 p-1 rounded-full mt-0.5">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-lg text-gray-700">{transformacao}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href="#inscricao">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                    Quero Me Transformar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section id="mentor" className="py-16 bg-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Mentor Image */}
                <div className="md:w-2/5 relative">
                  <div className="h-full">
                    <Image 
                      src="/rinaldo-silva-profile.jpeg"
                      alt="Bispo Rinaldo Silva"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6 md:hidden">
                    <h2 className="text-2xl font-bold text-white">Bispo Rinaldo Silva</h2>
                    <p className="text-blue-100">Seu Mentor</p>
                  </div>
                </div>
                
                {/* Mentor Info */}
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="hidden md:block mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">Bispo Rinaldo Silva</h2>
                    <p className="text-blue-700 font-medium">Seu Mentor</p>
                  </div>
                  
                  <div className="prose prose-blue">
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Nascido em:</strong> 05/02/1994</li>
                      <li><strong>Família:</strong> Casado com Cecília Silva, pai da Manuela e do Enrico</li>
                      <li><strong>Bispo Sênior:</strong> Igreja Impactados</li>
                      <li><strong>Empreendedor:</strong> Graduado em Teologia e Filosofia</li>
                      <li><strong>Conferencista internacional:</strong> Mais de 40 países</li>
                      <li><strong>Ministro da palavra:</strong> Desde os 7 anos</li>
                      <li><strong>Sinais, milagres e salvação:</strong> Testemunhados ao longo de seu ministério</li>
                    </ul>
                    
                    <p className="mt-4 text-gray-700">
                      O Bispo Rinaldo Silva é reconhecido por sua paixão em formar líderes e equipar cristãos 
                      para viverem o sobrenatural de Deus de forma prática e transformadora.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-200 rounded-full opacity-50"></div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Dúvidas Frequentes</h2>
              <p className="text-lg text-gray-600">
                Tudo o que você precisa saber sobre a Escola Ministerial
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={faq.question} key={index} className="border-b-0">
                    <AccordionTrigger className="py-4 px-6 text-left text-lg text-gray-900 hover:text-blue-700 font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Ainda tem dúvidas? Entre em contato conosco
              </p>
              <a href="#inscricao">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                  Quero Garantir Minha Vaga
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Inscrição Section */}
      <section id="inscricao" className="py-16 bg-blue-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full">
                Matrículas Abertas
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                Garanta sua vaga em um ambiente seguro e espiritual
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Faça sua inscrição agora e comece sua jornada rumo a um ministério transformador!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Benefits Recap */}
              <div>
                <div className="bg-blue-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">O que você vai receber:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-100 shrink-0 mt-0.5" />
                      <span>Aulas 100% online — assista quando e onde quiser</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-100 shrink-0 mt-0.5" />
                      <span>Encontros semanais ao vivo com o Bispo Rinaldo Silva</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-100 shrink-0 mt-0.5" />
                      <span>Mais de 50 aulas durante 1 ano</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-100 shrink-0 mt-0.5" />
                      <span>Suporte gratuito + material de estudo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-100 shrink-0 mt-0.5" />
                      <span>Certificado de conclusão</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Gift className="h-5 w-5 text-yellow-300 shrink-0 mt-0.5 animate-pulse" />
                      <div>
                        <p className="font-bold">BÔNUS: Grupo exclusivo com o Bispo Rinaldo</p>
                        <span className="text-blue-200 text-sm">Apenas para as próximas 48h</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Signup Card */}
              <div>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6 bg-blue-800 text-center">
                      <h3 className="text-xl font-bold text-white">Inscrição - Escola Ministerial</h3>
                    </div>
                    <div className="p-6 bg-white text-gray-800">
                      <div className="mb-6 text-center">
                        <p className="text-gray-500 text-sm uppercase font-semibold">Investimento único</p>
                        <div className="flex justify-center items-center mt-2">
                          <span className="text-gray-400 line-through mr-2">R$ 397,00</span>
                          <span className="text-3xl font-bold text-gray-900">R$ 247,00</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">ou 12x de R$ 24,80</p>
                      </div>
                      
                      <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-3 rounded-lg transition-all">
                        FAZER MINHA INSCRIÇÃO
                      </Button>
                      
                      <div className="mt-4 flex justify-center items-center gap-2 text-sm text-gray-500">
                        <ShieldCheck className="h-4 w-4 text-blue-700" />
                        <span>Pagamento 100% seguro</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-30 [mask-image:radial-gradient(350px_circle_at_top_right,transparent_20%,#fff)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-blue-600 opacity-30 [mask-image:radial-gradient(350px_circle_at_bottom_left,transparent_20%,#fff)]"></div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-lg">RS</span>
              </div>
              <div>
                <p className="font-semibold">Escola Ministerial</p>
                <p className="text-sm text-gray-400">Bispo Rinaldo Silva</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Rinaldo Silva. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 