"use client"

import { useState, useCallback, useMemo, memo, lazy, Suspense } from "react"
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
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Star,
  Users,
  X,
  Zap,
  Instagram, 
  Youtube, 
  Facebook,
  LucideIcon
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Definindo interfaces para props dos componentes
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

// Componente de menu reutilizável memoizado
const MobileMenu = memo(({ isOpen, links, onLinkClick }: MobileMenuProps) => {
  if (!isOpen) return null

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200 shadow-lg">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              link.active ? "text-[#d4fb00]" : "text-gray-700 hover:text-[#d4fb00]"
            } hover:bg-gray-50`}
            onClick={onLinkClick}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
})

MobileMenu.displayName = "MobileMenu"

// Componente de card de benefício memoizado
const BenefitCard = memo(({ icon: Icon, title, description }: CardProps) => (
  <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <CardContent className="p-8 space-y-4">
      <div className="w-12 h-12 rounded-full bg-[#d4fb00]/20 flex items-center justify-center">
        <Icon className="h-6 w-6 text-[#d4fb00]" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
))

BenefitCard.displayName = "BenefitCard"

// Componente de card de transformação memoizado
const TransformationCard = memo(({ icon: Icon, title, description }: CardProps) => (
  <div className="bg-white rounded-xl shadow-md p-8 flex gap-6 items-start">
    <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center shrink-0">
      <Icon className="h-6 w-6 text-black" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
))

TransformationCard.displayName = "TransformationCard"

// Componente de checklist item memoizado
const ChecklistItem = memo(({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="h-5 w-5 text-[#d4fb00] shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
))

ChecklistItem.displayName = "ChecklistItem"

// Importação dinâmica de componentes secundários
const LazyFooter = lazy(() => import('@/components/escola-ministerial/Footer'))

export default function EscolaMinisterial() {
  // Definindo os estados iniciais
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle para abrir/fechar menu mobile
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  // Memoizando os links para evitar re-renderizações
  const navigationLinks = useMemo(() => [
    { href: "#inicio", label: "Início", active: true },
    { href: "#sobre", label: "Sobre", active: false },
    { href: "#modulos", label: "Módulos", active: false },
    { href: "#inscricao", label: "Inscrição", active: false },
    { href: "#faq", label: "FAQ", active: false },
  ], [])

  // Memoizando os dados para evitar recriar objetos a cada renderização
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

  // Dados memoizados para transformações
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

  // Dados memoizados para etapas do curso
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

  // Dados memoizados para depoimentos
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

  // Dados memoizados para público-alvo
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

  // Dados memoizados para FAQs
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

  // Componente footer com lazy loading
  const renderFooter = () => (
    <Suspense fallback={<div className="w-full py-12 bg-black text-white text-center">Carregando...</div>}>
      <LazyFooter navigationLinks={navigationLinks} />
    </Suspense>
  )

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navigation - Otimizado para performance */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black">RS</div>
            <span>Bispo Rinaldo Silva</span>
          </div>
          
          {/* Menu desktop - Memoizado para evitar re-renderizações */}
          <nav className="hidden md:flex items-center gap-6">
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
              <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500]">
                Inscreva-se
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="block md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <MobileMenu isOpen={isMenuOpen} links={navigationLinks} onLinkClick={() => setIsMenuOpen(false)} />
      </header>

      <main className="flex-1">
        {/* Hero Section - Otimizada para performance e acessibilidade */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#d4fb00]/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d4fb00]/10 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                  Escola Ministerial 2024
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Cresça em sua caminhada rumo ao chamado de todo cristão:{" "}
                  <span className="text-[#d4fb00]">Ser igual a Jesus e fazer os milagres que Ele fez!</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Encontre o seu propósito ministerial com aulas 100% online e ao vivo, conduzidas por um líder
                  experiente e ungido.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="https://pay.kiwify.com.br/Xgs9lmk" target="_blank" rel="noopener noreferrer" aria-label="Inscrever-se agora">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-8 py-6 text-lg font-bold w-full">
                      QUERO ME INSCREVER AGORA
                      <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </a>
                  <a href="#sobre" aria-label="Saiba mais sobre o curso">
                    <Button
                      variant="outline"
                      className="border-white text-black bg-white hover:bg-white/90 px-8 py-6 text-lg w-full"
                    >
                      Saiba Mais
                      <ChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0 max-w-md w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4fb00]/40 to-[#d4fb00]/20 rounded-2xl -rotate-3 shadow-xl"></div>
                <Card className="relative border-none rounded-2xl overflow-hidden shadow-2xl bg-white text-black">
                  <div className="bg-[#d4fb00] text-black p-4 text-center font-bold text-xl">Matrículas Abertas</div>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" aria-hidden="true" />
                        <p>Aulas 100% online — assista quando e onde quiser</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" aria-hidden="true" />
                        <p>Encontros semanais ao vivo com o Bispo Rinaldo Silva</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" aria-hidden="true" />
                        <p>Mais de 50 aulas durante 1 ano</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" aria-hidden="true" />
                        <p>Suporte gratuito + material de estudo</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" aria-hidden="true" />
                        <p>Certificado de conclusão</p>
                      </div>
                    </div>
                    <div className="pt-4 space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold">12x de R$ 24,80</div>
                        <div className="text-sm text-gray-500">ou R$ 247,00 à vista</div>
                      </div>
                      <a href="https://pay.kiwify.com.br/Xgs9lmk" target="_blank" rel="noopener noreferrer" aria-label="Fazer inscrição no curso">
                        <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full py-6 text-lg font-bold">
                          FAZER MINHA INSCRIÇÃO
                          <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                        </Button>
                      </a>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Shield className="h-4 w-4" aria-hidden="true" />
                        <span>Pagamento 100% seguro</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Section - Otimizada com componentes memoizados */}
        <section id="sobre" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Benefícios
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Uma Formação Completa Para <span className="text-[#d4fb00]">Seu Crescimento Ministerial</span>
              </h2>
              <p className="text-gray-600">
                Desenvolvemos um programa completo para te ajudar a crescer em todas as áreas do ministério
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitItems.map((item, index) => (
                <BenefitCard 
                  key={index}
                  icon={item.icon} 
                  title={item.title} 
                  description={item.description} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Transformações Section - Otimizada com componentes memoizados */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Transformações
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                O Que Você Será <span className="text-[#d4fb00]">Capaz de Fazer</span>
              </h2>
              <p className="text-gray-600">
                Ao final da Escola Ministerial, você estará preparado para exercer seu ministério com excelência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformationItems.map((item, index) => (
                <TransformationCard 
                  key={index}
                  icon={item.icon} 
                  title={item.title} 
                  description={item.description} 
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#inscricao" aria-label="Inscrever-se no curso">
                <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-8 py-6 text-lg font-bold">
                  QUERO DESENVOLVER MEU MINISTÉRIO
                  <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Sobre o Mentor Section - Otimizada para carregamento de imagem */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/rinaldo-silva-profile.jpeg"
                  alt="Bispo Rinaldo Silva"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 2%" }}
                  sizes="(max-width: 768px) 100vw, 600px"
                  loading="eager"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">Bispo Rinaldo Silva</h3>
                  <p className="text-gray-300">Fundador da Escola Ministerial</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                  Seu Mentor
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Aprenda com um <span className="text-[#d4fb00]">Líder Experiente</span>
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Rinaldo Silva é Bispo Sênior da Igreja Impactados. Professor, graduado em Teologia e Filosofia. Conferencista, tendo ministrado em todos os estados brasileiros e em mais de 45 países.
                  </p>
                  <p>
                    Como conferencista, já ministrou em todos os estados brasileiros e em mais de 40 países, impactando
                    milhares de vidas ao redor do mundo.
                  </p>
                  <p>
                    Desde os 7 anos, tem exercido o ministério da palavra. Durante esses anos, milhares de pessoas foram
                    salvas por Jesus e puderam testemunhar o agir de Deus. Sinais e maravilhas se manifestaram, como
                    assim é descrito na palavra de Deus, e que ainda acontecem hoje, através do seu ministério.
                  </p>
                  <p>Telefone de contato: +55 62 9999-3858</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#d4fb00]">45+</div>
                    <p className="text-sm text-gray-300">Países</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#d4fb00]">20+</div>
                    <p className="text-sm text-gray-300">Anos de Ministério</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#d4fb00]">1000+</div>
                    <p className="text-sm text-gray-300">Conferências</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#d4fb00]">5000+</div>
                    <p className="text-sm text-gray-300">Alunos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estrutura do Curso Section - Otimizada com componentes memoizados */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Estrutura do Curso
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Como Funciona a <span className="text-[#d4fb00]">Escola Ministerial</span>
              </h2>
              <p className="text-gray-600">
                Um programa estruturado para te levar do conhecimento básico à aplicação avançada
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courseSteps.map((step, index) => (
                <Card key={index} className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center text-black font-bold text-xl">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    <ul className="space-y-2 text-gray-600">
                      {step.items.map((item, i) => (
                        <ChecklistItem key={i}>{item}</ChecklistItem>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos Section - Otimizada para performance */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Depoimentos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                O Que Nossos <span className="text-[#d4fb00]">Alunos Dizem</span>
              </h2>
              <p className="text-gray-600">
                Veja como a Escola Ministerial tem transformado a vida e o ministério de nossos alunos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, index) => (
                <Card
                  key={index}
                  className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="flex">
                      {Array(item.stars)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-[#d4fb00] fill-[#d4fb00]" aria-hidden="true" />
                        ))}
                      <span className="sr-only">{item.stars} de 5 estrelas</span>
                    </div>
                    <p className="text-gray-600 italic">"{item.testimony}"</p>
                    <div className="pt-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Para Quem é Section - Otimizada com dados memoizados */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Público-Alvo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Para Quem é a <span className="text-[#d4fb00]">Escola Ministerial?</span>
              </h2>
              <p className="text-gray-600">
                Se você se identifica com pelo menos um dos perfis abaixo, a Escola Ministerial é para você
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {targetAudience.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="https://pay.kiwify.com.br/Xgs9lmk" target="_blank" rel="noopener noreferrer" aria-label="Fazer parte da escola">
                <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-8 py-6 text-lg font-bold">
                  QUERO FAZER PARTE DESTA ESCOLA
                  <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section - Otimizada com dados memoizados */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Dúvidas Frequentes
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Perguntas <span className="text-[#d4fb00]">Frequentes</span>
              </h2>
              <p className="text-gray-600">
                Respondemos às perguntas mais comuns para que você possa tomar a melhor decisão
              </p>
            </div>

            <div className="max-w-[800px] mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final Section - Otimizada para performance */}
        <section id="inscricao" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="container">
            <div className="max-w-[900px] mx-auto text-center space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Matrículas Abertas
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Faça Sua <span className="text-[#d4fb00]">Inscrição Agora</span>
              </h2>
              <p className="text-xl text-gray-300">
                Garanta sua vaga na Escola Ministerial e transforme sua vida e ministério
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Aulas 100% Online",
                    description: "Assista quando e onde quiser, no seu próprio ritmo"
                  },
                  {
                    icon: Users,
                    title: "Encontros Ao Vivo",
                    description: "Interação direta com o Bispo Rinaldo Silva"
                  },
                  {
                    icon: GraduationCap,
                    title: "Certificado Oficial",
                    description: "Receba seu certificado ao concluir o curso"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-black" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm max-w-[600px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                  <div className="text-left">
                    <p className="text-gray-400 text-sm">Investimento:</p>
                    <div className="text-3xl font-bold text-white">12x de R$ 24,80</div>
                    <p className="text-sm text-gray-400">ou R$ 247,00 à vista</p>
                  </div>
                  <div className="h-16 w-px bg-white/20 hidden md:block"></div>
                  <div className="text-left">
                    <div className="flex items-start gap-2 mb-2">
                      <Clock className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-bold text-white">ACESSO POR 18 MESES</p>
                        <p className="text-sm text-gray-300">Tempo suficiente para absorver todo o conteúdo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Shield className="h-4 w-4 text-[#d4fb00]" aria-hidden="true" />
                      <span>Pagamento 100% seguro</span>
                    </div>
                  </div>
                </div>
                <a href="https://pay.kiwify.com.br/Xgs9lmk" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-8 py-6 text-xl font-bold w-full">
                    FAÇA SUA INSCRIÇÃO AGORA
                    <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </a>
                <p className="mt-4 text-center text-gray-400 text-sm">
                  Garanta sua vaga em um ambiente seguro e espiritual
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer com lazy loading */}
      {renderFooter()}
    </div>
  )
}
