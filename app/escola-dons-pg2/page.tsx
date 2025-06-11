"use client"

import { useMemo, memo } from "react"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  CheckCircle2,
  MessageCircle,
  Users,
  Zap,
  ChevronRight,
  Star,
  Clock,
  Shield,
  Award,
  Target,
  Sparkles,
  TrendingUp,
  Crown,
  Lightbulb,
  ArrowRight,
  Check,
  Timer,
  LucideIcon
} from "lucide-react"

// Interfaces
interface ModuleProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  description: string;
}

interface BenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
  result: string;
}

interface TestimonialProps {
  name: string;
  role: string;
  testimony: string;
  result: string;
  stars: number;
}

// Module Card Component
const ModuleCard = memo(({ title, icon: Icon, items, description, index }: ModuleProps & { index: number }) => (
  <Card className="border-none rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
    <CardContent className="p-4 space-y-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d4fb00] to-[#b8e600] flex items-center justify-center">
        <Icon className="h-5 w-5 text-black" />
      </div>
      <div>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Módulo {index + 1}</span>
        <h3 className="text-base font-bold leading-tight mt-1">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider">Você vai aprender:</h4>
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-3 w-3 text-green-600 mt-1 shrink-0" />
            <span className="text-gray-700 text-xs">{item}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
))

ModuleCard.displayName = "ModuleCard"

// Benefit Card Component
const BenefitCard = memo(({ icon: Icon, title, description, result }: BenefitProps) => (
  <Card className="border-none rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
    <CardContent className="p-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d4fb00] to-[#b8e600] flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-black" />
        </div>
        <div className="space-y-3 flex-1">
          <h3 className="text-base font-bold leading-tight">{title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-green-600" />
              <span className="text-green-800 font-semibold text-xs">{result}</span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
))

BenefitCard.displayName = "BenefitCard"

// Testimonial Card Component
const TestimonialCard = memo(({ name, role, testimony, result, stars }: TestimonialProps) => (
  <Card className="border-none rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
    <CardContent className="p-4 space-y-4">
      <div className="flex">
        {Array(stars).fill(0).map((_, i) => (
          <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed text-sm italic">"{testimony}"</p>
      
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <span className="text-green-700 font-semibold text-xs bg-green-50 px-2 py-1 rounded-full">{result}</span>
      </div>
      
      <div className="flex items-center gap-3 pt-2 border-t">
        <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black font-bold text-xs">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
          <p className="text-gray-600 text-xs">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
))

TestimonialCard.displayName = "TestimonialCard"

export default function EscolaDonsPG2() {

  const courseModules = useMemo(() => [
    {
      title: "Dons de Revelação",
      icon: Brain,
      items: ["Palavra de Sabedoria", "Palavra do Conhecimento", "Discernimento de Espíritos"],
      description: "Receba conhecimento sobrenatural de Deus através dos dons de revelação"
    },
    {
      title: "Dons Vocais", 
      icon: MessageCircle,
      items: ["Dom de Profecia", "Variedade de Línguas", "Interpretação de Línguas"],
      description: "Seja porta-voz do Espírito Santo manifestando os dons vocais"
    },
    {
      title: "Dons de Poder",
      icon: Zap,
      items: ["Dom da Fé", "Operação de Milagres", "Dons de Cura"],
      description: "Manifeste o poder sobrenatural de Deus em situações impossíveis"
    },
  ], [])

  const mainBenefits = useMemo(() => [
    {
      icon: Target,
      title: "Descubra seus dons espirituais",
      description: "Identifique quais dos 9 dons você possui e como operá-los com precisão e confiança",
      result: "Em apenas 30 dias você saberá exatamente quais são seus dons"
    },
    {
      icon: Sparkles,
      title: "Transforme sua vida espiritual", 
      description: "Experimente uma intimidade mais profunda com Deus e o Espírito Santo",
      result: "Relacionamento com Deus nunca mais será o mesmo"
    },
    {
      icon: TrendingUp,
      title: "Impacte vidas ao seu redor",
      description: "Torne-se um instrumento de transformação na sua comunidade e igreja",
      result: "Veja milagres acontecendo através do seu ministério"
    },
    {
      icon: Crown,
      title: "Lidere com autoridade espiritual",
      description: "Conduza seu ministério com sabedoria sobrenatural e confiança divina",
      result: "Torne-se referência espiritual na sua comunidade"
    },
  ], [])

  const testimonials = useMemo(() => [
    {
      name: "Carlos Oliveira",
      role: "Pastor",
      testimony: "Descobri dons que nem sabia que tinha. Hoje lidero um ministério de intercessão com mais de 50 pessoas.",
      result: "Crescimento de 200% no ministério",
      stars: 5
    },
    {
      name: "Mariana Santos", 
      role: "Líder de Jovens",
      testimony: "Através do que aprendi, já vi várias pessoas sendo curadas em nossas reuniões. Transformou completamente meu ministério.",
      result: "50 jovens impactados",
      stars: 5
    }
  ], [])

  return (
    <>
      {/* Microsoft Clarity Script */}
      <Script id="clarity-script" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "rxlgvp94cz");
        `}
      </Script>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <main>
        {/* Hero Section - Mobile First */}
        <section id="inicio" className="relative py-8 md:py-12 lg:py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/banner-hero.jpeg"
              alt="Escola de Dons Espirituais"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
          </div>
          
          <div className="relative z-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-[700px] mx-auto space-y-4 text-white text-center">
                {/* Badge de Urgência */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs animate-pulse">
                  <Timer className="h-3 w-3" />
                  <span>ÚLTIMA TURMA 2024 - 12 VAGAS</span>
                </div>

                {/* Headline Principal */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                  Descubra Seus <span className="text-[#d4fb00]">Dons Espirituais</span> e Transforme Vidas
                </h1>

                {/* Subheadline */}
                <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed">
                  O único curso completo no Brasil que ensina os 9 dons do Espírito Santo de forma prática e bíblica
                </p>

                {/* Proof Points */}
                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-300">
                  <div className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-[#d4fb00]" />
                    <span>5.000+ alunos transformados</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-[#d4fb00]" />
                    <span>20+ anos de experiência</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-[#d4fb00]" />
                    <span>45+ países impactados</span>
                  </div>
                </div>

                {/* CTA Hero */}
                <div className="pt-4 flex justify-center">
                  <a href="#investimento">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      GARANTIR MINHA VAGA AGORA
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>

                {/* Pricing Hero Teaser */}
                <div className="bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-[#d4fb00]/30 max-w-xs mx-auto mt-6">
                  <div className="text-center">
                    <div className="text-gray-400 line-through text-sm">De R$ 197,00</div>
                    <div className="text-2xl font-bold text-[#d4fb00]">R$ 97,00</div>
                    <div className="text-gray-300 text-xs">Por tempo limitado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section - Mobile First */}
        <section className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 font-semibold text-xs">
                  ✅ Resultados Comprovados
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-gray-900 leading-tight">
                  Mais de <span className="text-[#d4fb00] bg-gray-900 px-2 rounded">5.000 cristãos</span> já descobriram seus dons
                </h2>
                <div className="flex justify-center items-center gap-2 text-sm">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-2 text-lg text-gray-700 font-bold">4.9/5</span>
                  <span className="text-gray-500 text-xs">• 1.247 avaliações</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
                {testimonials.map((item, index) => (
                  <TestimonialCard key={index} {...item} />
                ))}
              </div>

              <div className="text-center bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-base text-gray-700 mb-4">
                  <strong>Você também pode ter resultados como estes!</strong> Junte-se aos milhares que já transformaram suas vidas.
                </p>
                <div className="flex justify-center">
                  <a href="#investimento">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold rounded-xl">
                      QUERO MEUS RESULTADOS TAMBÉM
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O Que Você Vai Aprender - Mobile First */}
        <section id="conteudo" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-xs">
                  📚 Conteúdo Exclusivo
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-gray-900 leading-tight">
                  Domine os <span className="text-[#d4fb00] bg-gray-900 px-2 rounded">9 Dons Espirituais</span> Completo
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Um programa estruturado e prático para você descobrir, desenvolver e operar em todos os dons do Espírito Santo
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {courseModules.map((module, index) => (
                  <ModuleCard key={index} {...module} index={index} />
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#d4fb00]">20+</div>
                  <div className="text-gray-600 text-xs">Horas de Conteúdo</div>
                </div>
                <div className="text-center bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#d4fb00]">50+</div>
                  <div className="text-gray-600 text-xs">Aulas Práticas</div>
                </div>
                <div className="text-center bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#d4fb00]">9</div>
                  <div className="text-gray-600 text-xs">Dons Completos</div>
                </div>
                <div className="text-center bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#d4fb00]">∞</div>
                  <div className="text-gray-600 text-xs">Acesso Vitalício</div>
                </div>
              </div>

              <div className="text-center bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Pronto para descobrir e desenvolver seus dons espirituais?
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Não deixe seus dons adormecidos. Comece sua transformação hoje mesmo!
                </p>
                <div className="flex justify-center">
                  <a href="#investimento">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold rounded-xl">
                    QUERO SER ALUNO!
                      <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Section - Mobile First */}
        <section className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-semibold text-xs">
                  🎯 Transformações Garantidas
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-gray-900 leading-tight">
                  O Que Você Vai <span className="text-[#d4fb00] bg-gray-900 px-2 rounded">Conquistar</span>
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Resultados reais que nossos alunos experimentam em suas vidas e ministérios
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {mainBenefits.map((benefit, index) => (
                  <BenefitCard key={index} {...benefit} />
                ))}
              </div>

              <div className="text-center bg-gray-900 text-white rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-bold mb-3">
                  Está pronto para experimentar essas transformações?
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Milhares já conseguiram. Agora é a sua vez de descobrir o poder dos dons espirituais!
                </p>
                <div className="flex justify-center">
                  <a href="#investimento">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold rounded-xl">
                      SIM, QUERO ESSAS TRANSFORMAÇÕES
                      <Crown className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Final Section - Mobile First */}
        <section id="investimento" className="py-8 md:py-12 lg:py-16 bg-gray-100">
          <div className="px-4">
            <div className="max-w-2xl mx-auto">
              {/* Card Principal */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center border-2 border-[#d4fb00]">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs animate-pulse">
                    <Clock className="h-3 w-3" />
                    <span>ÚLTIMA TURMA DE 2024 - APENAS 12 VAGAS</span>
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Descubra Seus Dons Espirituais Hoje
                </h3>

                <p className="text-gray-700 mb-4 text-sm">
                  Acesso imediato a todos os módulos + bônus exclusivos
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-5">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-lg text-gray-500 line-through">De R$ 197,00</span>
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-bold">-51%</span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xl text-gray-700 font-semibold">Por apenas</span>
                  </div>

                  <div className="mb-2">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-[#d4fb00] bg-clip-text text-transparent">
                      R$ 97,00
                    </span>
                  </div>

                  <div className="text-gray-600 mb-3 text-sm">
                    Pagamento único • Sem mensalidades
                  </div>

                  <div className="flex flex-col space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Acesso vitalício ao conteúdo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">4 módulos completos + certificado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Suporte exclusivo do Bispo Rinaldo</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <a href="https://pay.hotmart.com/X99708135T" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-6 py-4 w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      QUERO SER ALUNO!
                    </Button>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="text-sm text-gray-500">Pagamento seguro via:</div>
                  <div className="flex gap-3">
                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center border border-gray-200 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a1f71" className="w-full h-full">
                        <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 0 1 .894.764l.817 4.338l2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972c.006-.269.262-.555.822-.628a3.66 3.66 0 0 1 1.913.336l.34-1.59a5.207 5.207 0 0 0-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479c-.012 1.079.963 1.68 1.698 2.04c.756.367 1.01.603 1.006.931c-.005.504-.602.725-1.16.734c-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398c2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 0 0-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815l.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center border border-gray-200 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 199" className="w-full h-full">
                        <path fill="#FF5F00" d="M93.298 16.903h69.15v124.251h-69.15z"/>
                        <path fill="#EB001B" d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029c0 43.685 35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125Z"/>
                        <path fill="#F79E1B" d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125c0-25.245-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029Z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center border border-gray-200 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4BB8A6" className="w-full h-full">
                        <path d="M5.283 18.36a3.505 3.505 0 0 0 2.493-1.032l3.6-3.6a.684.684 0 0 1 .946 0l3.613 3.613a3.504 3.504 0 0 0 2.493 1.032h.71l-4.56 4.56a3.647 3.647 0 0 1-5.156 0L4.85 18.36ZM18.428 5.627a3.505 3.505 0 0 0-2.493 1.032l-3.613 3.614a.67.67 0 0 1-.946 0l-3.6-3.6A3.505 3.505 0 0 0 5.283 5.64h-.434l4.573-4.572a3.646 3.646 0 0 1 5.156 0l4.559 4.559ZM1.068 9.422L3.79 6.699h1.492a2.483 2.483 0 0 1 1.744.722l3.6 3.6a1.73 1.73 0 0 0 2.443 0l3.614-3.613a2.482 2.482 0 0 1 1.744-.723h1.767l2.737 2.737a3.646 3.646 0 0 1 0 5.156l-2.736 2.736h-1.768a2.482 2.482 0 0 1-1.744-.722l-3.613-3.613a1.77 1.77 0 0 0-2.444 0l-3.6 3.6a2.483 2.483 0 0 1-1.744.722H3.791l-2.723-2.723a3.646 3.646 0 0 1 0-5.156"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Timer className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                    <div className="text-left">
                      <span className="font-bold text-red-700 text-base block mb-1">ATENÇÃO: </span>
                      <span className="text-red-600 text-sm block">
                        Essa oferta especial com 51% de desconto é válida somente até o dia 
                        <strong> {new Date().getDate() + 3}/{new Date().getMonth() + 1}</strong>. 
                        Restam apenas <strong>12 vagas</strong> para esta turma.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção É Risco Zero */}
              <div className="bg-gray-900 text-white rounded-xl p-6 md:p-8 mt-6">
                <h3 className="text-xl font-bold mb-4">É risco zero</h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Como temos certeza que este curso é da mais alta qualidade, 
                  estamos te oferecendo uma garantia.
                </p>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  É muito simples, basta enviar um e-mail dentro do prazo de 7 dias 
                  que realizaremos 100% do reembolso do valor investido.
                </p>

                <p className="text-white font-semibold text-base mb-6">
                  Você não tem risco nenhum.
                </p>

                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-600 rounded-full p-3">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-green-600 text-white px-3 py-2 rounded-full font-bold text-sm">
                    GARANTIA DE 7 DIAS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Mentor - Mobile First */}
        <section id="mentor" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-xs">
                  👨‍🏫 Seu Mentor Especialista
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-gray-900 leading-tight">
                  Aprenda com Quem <span className="text-[#d4fb00] bg-gray-900 px-2 rounded">Realmente Sabe</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-8">
                <div className="relative aspect-square max-w-sm mx-auto lg:max-w-none lg:h-80 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-[#d4fb00]/20 rounded-xl -rotate-2"></div>
                  <Image
                    src="/rinaldo-silva-profile.jpeg"
                    alt="Bispo Rinaldo Silva"
                    fill
                    className="object-cover rounded-xl"
                    style={{ objectPosition: "center 2%" }}
                    sizes="(max-width: 1024px) 320px, 320px"
                  />
                </div>

                <div className="space-y-4 text-center lg:text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Bispo Rinaldo Silva</h3>
                    <p className="text-base text-gray-600">Especialista em Dons Espirituais • 20+ Anos</p>
                  </div>

                  <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <p>
                      <strong>Ministro reconhecido internacionalmente</strong> com mais de 20 anos de experiência, 
                      tendo ministrado em mais de 45 países ao redor do mundo.
                    </p>
                    <p>
                      Especialista em dons espirituais e manifestações sobrenaturais, com milhares de testemunhos 
                      de pessoas que foram <strong>transformadas, curadas e libertas</strong> através do seu ministério.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { number: "45+", label: "Países", icon: Users },
                      { number: "20+", label: "Anos", icon: Award },
                      { number: "1000+", label: "Conferências", icon: Lightbulb },
                      { number: "5000+", label: "Líderes", icon: TrendingUp },
                    ].map((stat, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg text-center border border-gray-200 shadow-md">
                        <stat.icon className="h-4 w-4 mx-auto mb-2 text-[#d4fb00]" />
                        <div className="text-lg font-bold text-gray-900">{stat.number}</div>
                        <p className="text-xs text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Quer aprender com um dos maiores especialistas em dons espirituais?
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Esta é sua oportunidade única de ter acesso aos 20+ anos de experiência do Bispo Rinaldo Silva.
                </p>
                <div className="flex justify-center">
                  <a href="#investimento">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold rounded-xl">
                      QUERO APRENDER COM O ESPECIALISTA
                      <Users className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
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
              <span className="font-bold text-sm">Escola de Dons Espirituais</span>
            </div>
            <p className="text-gray-400 text-xs">
              © 2024 Escola de Dons Espirituais. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
} 