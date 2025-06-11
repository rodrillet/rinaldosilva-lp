"use client"

import { useState, useCallback, useMemo, memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  Menu,
  Shield,
  Star,
  Users,
  X,
  Zap,
  LucideIcon
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Interfaces
interface NavLink {
  href: string;
  label: string;
  active: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  onLinkClick: () => void;
}

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Menu Mobile Component
const MobileMenu = memo(({ isOpen, links, onLinkClick }: MobileMenuProps) => {
  if (!isOpen) return null

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={onLinkClick}>
      <div className="bg-white w-64 h-full shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={onLinkClick} className="p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-3 rounded-lg text-base font-medium ${
                link.active ? "text-[#d4fb00] bg-[#d4fb00]/10" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <a href="#inscricao" onClick={onLinkClick}>
              <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full py-3 font-bold">
                Inscreva-se
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})

MobileMenu.displayName = "MobileMenu"

// Benefit Card Component
const BenefitCard = memo(({ icon: Icon, title, description }: CardProps) => (
  <Card className="border-none rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
    <CardContent className="p-4 space-y-3">
      <div className="w-10 h-10 rounded-full bg-[#d4fb00]/20 flex items-center justify-center">
        <Icon className="h-5 w-5 text-[#d4fb00]" />
      </div>
      <h3 className="text-base font-bold leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
))

BenefitCard.displayName = "BenefitCard"

// Transformation Card Component
const TransformationCard = memo(({ icon: Icon, title, description }: CardProps) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex gap-3 items-start">
    <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center shrink-0">
      <Icon className="h-4 w-4 text-black" />
    </div>
    <div className="min-w-0 flex-1">
      <h3 className="text-base font-bold mb-1 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
))

TransformationCard.displayName = "TransformationCard"

// Checklist Item Component
const ChecklistItem = memo(({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="h-3 w-3 text-[#d4fb00] shrink-0 mt-1" />
    <span className="text-xs leading-relaxed">{children}</span>
  </li>
))

ChecklistItem.displayName = "ChecklistItem"

export default function EscolaMinisterial() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const navigationLinks = useMemo(() => [
    { href: "#inicio", label: "Início", active: true },
    { href: "#sobre", label: "Sobre", active: false },
    { href: "#modulos", label: "Módulos", active: false },
    { href: "#inscricao", label: "Inscrição", active: false },
    { href: "#faq", label: "FAQ", active: false },
  ], [])

  const benefitItems = useMemo(() => [
    {
      icon: GraduationCap,
      title: "Conteúdo Ministerial Completo",
      description: "Estudo profundo da Palavra de Deus, princípios ministeriais e práticas eficazes de liderança."
    },
    {
      icon: Lightbulb,
      title: "Crescimento Espiritual",
      description: "Desenvolvimento da sua vida espiritual e fortalecimento da sua relação com Deus."
    },
    {
      icon: Users,
      title: "Comunidade e Networking",
      description: "Conexão com outros líderes e ministros com propósitos similares."
    },
    {
      icon: Globe,
      title: "Aplicação Prática",
      description: "Ferramentas e estratégias para aplicar o conhecimento adquirido no seu contexto ministerial."
    },
    {
      icon: Heart,
      title: "Mentoria Espiritual",
      description: "Orientação direta do Bispo Rinaldo Silva em encontros ao vivo exclusivos."
    },
    {
      icon: Zap,
      title: "Ativação Ministerial",
      description: "Despertar e desenvolver os dons espirituais para o serviço no Reino de Deus."
    }
  ], [])

  const transformationItems = useMemo(() => [
    {
      icon: GraduationCap,
      title: "Ensinar com Autoridade",
      description: "Você aprenderá a ministrar a Palavra de Deus com clareza, profundidade e autoridade espiritual."
    },
    {
      icon: Users,
      title: "Liderar com Excelência",
      description: "Desenvolverá habilidades de liderança para conduzir equipes e ministérios com eficácia."
    },
    {
      icon: Heart,
      title: "Ministrar com Unção",
      description: "Será capacitado para ministrar cura, libertação e restauração na vida das pessoas."
    },
    {
      icon: Zap,
      title: "Impactar com Propósito",
      description: "Descobrirá como fazer diferença na sociedade através do ministério que Deus colocou em suas mãos."
    }
  ], [])

  const courseSteps = useMemo(() => [
    {
      number: "1",
      title: "Fundamentos Ministeriais",
      description: "Os pilares essenciais para todo ministério bem-sucedido",
      items: [
        "Cosmovisão bíblica e teologia",
        "Caráter e integridade ministerial",
        "Conhecendo seu chamado"
      ]
    },
    {
      number: "2",
      title: "Desenvolvimento Prático",
      description: "Ferramentas e habilidades para o ministério eficaz",
      items: [
        "Homilética e hermenêutica",
        "Liderança e gestão ministerial",
        "Aconselhamento pastoral"
      ]
    },
    {
      number: "3",
      title: "Aplicação e Multiplicação",
      description: "Colocando em prática e multiplicando o conhecimento",
      items: [
        "Ministração prática",
        "Discipulado e mentoria",
        "Plantação e crescimento de igrejas"
      ]
    }
  ], [])

  const testimonials = useMemo(() => [
    {
      stars: 5,
      testimony: "A Escola Ministerial transformou minha vida e ministério. Hoje sirvo a Deus com muito mais clareza e propósito.",
      name: "Paulo Oliveira",
      role: "Pastor"
    },
    {
      stars: 5,
      testimony: "Os ensinamentos do Bispo Rinaldo Silva me ajudaram a descobrir meu chamado e a exercê-lo com excelência.",
      name: "Maria Santos",
      role: "Líder de Ministério"
    },
    {
      stars: 5,
      testimony: "Nunca imaginei que poderia crescer tanto em tão pouco tempo. A escola superou todas as minhas expectativas!",
      name: "Carlos Mendes",
      role: "Missionário"
    }
  ], [])

  const targetAudience = useMemo(() => [
    {
      icon: Users,
      title: "Líderes Emergentes",
      description: "Cristãos que sentem o chamado para a liderança e desejam desenvolver suas habilidades ministeriais."
    },
    {
      icon: Heart,
      title: "Pastores e Ministros",
      description: "Líderes que buscam aprimoramento contínuo e novas ferramentas para o ministério."
    },
    {
      icon: Zap,
      title: "Missionários",
      description: "Pessoas chamadas para levar a mensagem do evangelho a diferentes contextos e culturas."
    },
    {
      icon: GraduationCap,
      title: "Estudantes de Teologia",
      description: "Alunos que desejam complementar sua formação acadêmica com um treinamento prático e espiritual."
    }
  ], [])

  const faqs = useMemo(() => [
    {
      question: "Quanto tempo dura o curso da Escola Ministerial?",
      answer: "O curso tem duração de 12 meses, com aulas semanais online. O acesso às aulas permanece por 18 meses após a inscrição."
    },
    {
      question: "É necessário ter formação prévia em teologia?",
      answer: "Não. O curso foi desenvolvido para ser acessível a todos os níveis de conhecimento teológico, desde iniciantes até estudantes avançados."
    },
    {
      question: "Como funcionam os encontros ao vivo?",
      answer: "Os encontros acontecem mensalmente através de videoconferência. Caso não possa participar ao vivo, as gravações ficam disponíveis na plataforma."
    },
    {
      question: "Receberei um certificado ao final do curso?",
      answer: "Sim. Após concluir todos os módulos e atividades, você receberá um certificado oficial da Escola Ministerial."
    },
    {
      question: "Posso cancelar minha inscrição?",
      answer: "Sim. Oferecemos garantia de 7 dias. Se não estiver satisfeito, você pode solicitar o cancelamento e reembolso integral neste período."
    }
  ], [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Mobile-First */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-base">
            <div className="w-7 h-7 rounded-full bg-[#d4fb00] flex items-center justify-center text-black text-xs">
              RS
            </div>
            <span className="hidden sm:block">Bispo Rinaldo Silva</span>
            <span className="sm:hidden text-sm">B. Rinaldo</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#d4fb00] ${
                  link.active ? "text-[#d4fb00]" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="#inscricao">
              <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-4 py-2 text-sm font-bold">
                Inscreva-se
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} links={navigationLinks} onLinkClick={() => setIsMenuOpen(false)} />

      <main>
        {/* Hero Section - Mobile First */}
        <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#d4fb00]/10 rounded-full blur-[60px] transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d4fb00]/10 rounded-full blur-[60px] transform -translate-x-1/4 translate-y-1/4"></div>
          </div>

          <div className="relative z-10 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                <div className="space-y-4 text-center lg:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-xs">
                    Escola Ministerial 2024
                  </div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    Cresça em sua caminhada rumo ao chamado de todo cristão:{" "}
                    <span className="text-[#d4fb00]">Ser igual a Jesus e fazer os milagres que Ele fez!</span>
                  </h1>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Encontre o seu propósito ministerial com aulas 100% online e ao vivo, conduzidas por um líder
                    experiente e ungido.
                  </p>
                  <div className="flex flex-col gap-2 items-center lg:items-start pt-2">
                    <a href="https://pay.hotmart.com/K99707801K" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                      <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-4 py-3 text-sm font-bold w-full">
                        INSCREVER-SE
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="#sobre" className="w-full max-w-xs">
                      <Button
                        variant="outline"
                        className="border-white text-white bg-transparent hover:bg-white hover:text-black px-4 py-3 text-sm w-full"
                      >
                        Saiba Mais
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-sm mt-6 lg:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4fb00]/40 to-[#d4fb00]/20 rounded-xl -rotate-2 shadow-xl"></div>
                  <Card className="relative border-none rounded-xl overflow-hidden shadow-2xl bg-white text-black">
                    <div className="bg-[#d4fb00] text-black p-3 text-center font-bold text-sm">
                      Matrículas Abertas
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-[#d4fb00] mt-1 shrink-0" />
                          <p className="text-xs">Aulas 100% online — assista quando e onde quiser</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-[#d4fb00] mt-1 shrink-0" />
                          <p className="text-xs">Encontros semanais ao vivo</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-[#d4fb00] mt-1 shrink-0" />
                          <p className="text-xs">Mais de 50 aulas durante 1 ano</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-[#d4fb00] mt-1 shrink-0" />
                          <p className="text-xs">Suporte + material de estudo</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-[#d4fb00] mt-1 shrink-0" />
                          <p className="text-xs">Certificado de conclusão</p>
                        </div>
                      </div>
                      <div className="pt-2 space-y-3">
                        <div className="text-center">
                          <div className="text-lg font-bold">12x de R$ 24,80</div>
                          <div className="text-xs text-gray-500">ou R$ 247,00 à vista</div>
                        </div>
                        <a href="https://pay.hotmart.com/K99707801K" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full py-3 text-sm font-bold">
                            FAZER INSCRIÇÃO
                            <ChevronRight className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                        <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                          <Shield className="h-3 w-3" />
                          <span>Pagamento 100% seguro</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Section - Mobile First */}
        <section id="sobre" className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-xs">
                  Benefícios
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  Uma Formação Completa Para <span className="text-[#d4fb00]">Seu Crescimento Ministerial</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Desenvolvemos um programa completo para te ajudar a crescer em todas as áreas do ministério
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefitItems.map((item, index) => (
                  <BenefitCard key={index} icon={item.icon} title={item.title} description={item.description} />
                ))}
              </div>

              <div className="mt-8 text-center">
                <a href="#inscricao">
                  <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold">
                    QUERO BENEFÍCIOS
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Transformações Section - Mobile First */}
        <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-xs">
                  Transformações
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  O Que Você Será <span className="text-[#d4fb00]">Capaz de Fazer</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Ao final da Escola Ministerial, você estará preparado para exercer seu ministério com excelência
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {transformationItems.map((item, index) => (
                  <TransformationCard key={index} icon={item.icon} title={item.title} description={item.description} />
                ))}
              </div>

              <div className="mt-8 text-center">
                <a href="#inscricao">
                  <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold">
                    COMEÇAR AGORA
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Mentor Section - Mobile First */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="relative aspect-square max-w-sm mx-auto lg:max-w-none lg:h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/rinaldo-silva-profile.jpeg"
                    alt="Bispo Rinaldo Silva"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 2%" }}
                    sizes="(max-width: 1024px) 320px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base font-bold mb-1">Bispo Rinaldo Silva</h3>
                    <p className="text-gray-300 text-xs">Fundador da Escola Ministerial</p>
                  </div>
                </div>

                <div className="space-y-4 text-center lg:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-xs">
                    Seu Mentor
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                    Aprenda com um <span className="text-[#d4fb00]">Líder Experiente</span>
                  </h2>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p>
                      Rinaldo Silva é Bispo Sênior da Igreja Impactados. Professor, graduado em Teologia e Filosofia. Conferencista, tendo ministrado em todos os estados brasileiros e em mais de 45 países.
                    </p>
                    <p>
                      Durante esses anos, milhares de pessoas foram salvas por Jesus e puderam testemunhar o agir de Deus. Sinais e maravilhas se manifestaram através do seu ministério.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-[#d4fb00]">45+</div>
                      <p className="text-xs text-gray-300">Países</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-[#d4fb00]">20+</div>
                      <p className="text-xs text-gray-300">Anos</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-[#d4fb00]">1000+</div>
                      <p className="text-xs text-gray-300">Conferências</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-[#d4fb00]">5000+</div>
                      <p className="text-xs text-gray-300">Alunos</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a href="#inscricao">
                      <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold">
                        APRENDER COM ELE
                        <Users className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estrutura do Curso Section - Mobile First */}
        <section id="modulos" className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-xs">
                  Estrutura do Curso
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  Como Funciona a <span className="text-[#d4fb00]">Escola Ministerial</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Um programa estruturado para te levar do conhecimento básico à aplicação avançada
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courseSteps.map((step, index) => (
                  <Card key={index} className="border-none rounded-xl shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-4 space-y-3">
                      <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black font-bold text-sm">
                        {step.number}
                      </div>
                      <h3 className="text-base font-bold leading-tight">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                      <ul className="space-y-1 text-gray-600">
                        {step.items.map((item, i) => (
                          <ChecklistItem key={i}>{item}</ChecklistItem>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Section - Mobile First */}
        <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-xs">
                  Depoimentos
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  O Que Nossos <span className="text-[#d4fb00]">Alunos Dizem</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Veja como a Escola Ministerial tem transformado a vida e o ministério de nossos alunos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.map((item, index) => (
                  <Card key={index} className="border-none rounded-xl shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex">
                        {Array(item.stars)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-[#d4fb00] fill-[#d4fb00]" />
                          ))}
                      </div>
                      <p className="text-gray-600 italic text-sm leading-relaxed">"{item.testimony}"</p>
                      <div className="pt-2 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a href="#inscricao">
                  <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold">
                    QUERO RESULTADOS
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Para Quem é Section - Mobile First */}
        <section className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-xs">
                  Público-Alvo
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  Para Quem é a <span className="text-[#d4fb00]">Escola Ministerial?</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Se você se identifica com pelo menos um dos perfis abaixo, a Escola Ministerial é para você
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {targetAudience.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-black" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold mb-1 leading-tight">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a href="https://pay.hotmart.com/K99707801K" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold">
                    FAZER PARTE
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Mobile First */}
        <section id="faq" className="py-8 md:py-12 lg:py-16 bg-gray-50">
          <div className="px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-xs">
                  Dúvidas Frequentes
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  Perguntas <span className="text-[#d4fb00]">Frequentes</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Respondemos às perguntas mais comuns para que você possa tomar a melhor decisão
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm md:text-base font-medium py-4 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 text-sm leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final Section - Mobile First */}
        <section id="inscricao" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-xs">
                Matrículas Abertas
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                Faça Sua <span className="text-[#d4fb00]">Inscrição Agora</span>
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                Garanta sua vaga na Escola Ministerial e transforme sua vida e ministério
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Aulas 100% Online",
                    description: "Assista quando e onde quiser"
                  },
                  {
                    icon: Users,
                    title: "Encontros Ao Vivo",
                    description: "Interação direta com o Bispo"
                  },
                  {
                    icon: GraduationCap,
                    title: "Certificado Oficial",
                    description: "Receba seu certificado"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-4 w-4 text-black" />
                    </div>
                    <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/10 p-4 md:p-6 rounded-xl border border-white/20 backdrop-blur-sm max-w-lg mx-auto">
                <div className="flex flex-col gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-gray-400 text-xs">Investimento:</p>
                    <div className="text-xl font-bold text-white">12x de R$ 24,80</div>
                    <p className="text-xs text-gray-400">ou R$ 247,00 à vista</p>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="h-3 w-3 text-[#d4fb00]" />
                      <p className="font-bold text-white text-xs">ACESSO POR 18 MESES</p>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                      <Shield className="h-3 w-3 text-[#d4fb00]" />
                      <span>Pagamento 100% seguro</span>
                    </div>
                  </div>
                </div>
                <a href="https://pay.hotmart.com/K99707801K" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-4 text-sm font-bold w-full">
                    INSCREVER-SE AGORA
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <p className="mt-3 text-center text-gray-400 text-xs">
                  Garanta sua vaga em um ambiente seguro e espiritual
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Simples */}
      <footer className="bg-black text-white py-6">
        <div className="px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#d4fb00] flex items-center justify-center text-black text-xs font-bold">
                RS
              </div>
              <span className="font-bold text-sm">Bispo Rinaldo Silva</span>
            </div>
            <p className="text-gray-400 text-xs">
              © 2024 Escola Ministerial. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
