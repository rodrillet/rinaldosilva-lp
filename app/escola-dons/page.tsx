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
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CountdownTimer from "./countdown-timer"

export default function EscolaDons() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black">RS</div>
            <span>Bispo Rinaldo Silva</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Sobre
            </a>
            <a href="#modulos" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Módulos
            </a>
            <a href="#beneficios" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              FAQ
            </a>
          </nav>
          <a href="#matricula">
            <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] font-medium">Inscrever-se Agora</Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-black text-white">
          <div className="absolute inset-0 opacity-30">
            <Image src="/placeholder.svg?key=qiio6" alt="Fundo Escola de Dons" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                  Matrículas Abertas
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                  Descubra e Desenvolva Seus Dons Espirituais
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-[600px] mx-auto lg:mx-0">
                  Seja uma ferramenta de transformação através do propósito dos Dons Espirituais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#matricula">
                    <Button size="lg" className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-8 h-14 text-lg">
                      Quero Desenvolver Meus Dons
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Ver Apresentação
                  </Button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                        <Image
                          src={`/placeholder.svg?key=sgdw4&height=100&width=100&query=pessoa ${i} cristã perfil`}
                          alt={`Aluno ${i}`}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="text-[#d4fb00] font-bold">+1.500 alunos</span> já transformaram suas vidas
                  </div>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0 max-w-md w-full" id="matricula">
                <div className="absolute inset-0 bg-[#d4fb00]/20 rounded-2xl -rotate-3"></div>
                <Card className="relative border-none rounded-2xl overflow-hidden shadow-xl bg-white text-black">
                  <CardContent className="p-6 space-y-6">
                    <div className="bg-black text-white p-4 -mx-6 -mt-6 mb-6 text-center">
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
                    </div>
                    <div className="pt-4 space-y-3">
                      <div className="text-center">
                        <span className="text-gray-500 line-through text-lg">De R$ 197,00</span>
                        <div className="text-3xl font-bold">Por apenas R$ 97,00</div>
                        <div className="text-sm text-gray-500">ou 3x de R$ 34,29</div>
                      </div>
                      <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full h-14 text-lg font-bold">
                        QUERO ME INSCREVER AGORA
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
        <section className="py-8 bg-gray-50">
          <div className="container">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl font-bold">1500+</div>
                <p className="text-gray-600">Alunos</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold">5</div>
                <p className="text-gray-600">Módulos</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold">40+</div>
                <p className="text-gray-600">Horas de Conteúdo</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="flex text-[#d4fb00]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 md:py-24">
          <div className="container">
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
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500]">
                      Quero Fazer Parte Dessa Jornada
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

        {/* Course Content Section */}
        <section id="modulos" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
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
                  {[
                    {
                      title: "Módulo 1: Introdução",
                      description: "Fundamentos essenciais para iniciar sua jornada nos dons espirituais.",
                      lessons: [
                        "Iniciando nos Dons Espirituais",
                        "A importância da sabedoria na prática dos Dons",
                        "A simplicidade dos Dons",
                      ],
                      icon: BookOpen,
                    },
                    {
                      title: "Módulo 2: Dons de Revelação",
                      description: "Compreenda como Deus revela conhecimento sobrenatural através destes dons.",
                      lessons: ["Palavra de Sabedoria", "Palavra do Conhecimento", "Discernimento de Espíritos"],
                      icon: Brain,
                    },
                    {
                      title: "Módulo 3: Dons Vocais",
                      description: "Aprenda como Deus fala através de manifestações vocais sobrenaturais.",
                      lessons: ["Dom de Profecia", "Variedade de Línguas", "Interpretação de Línguas"],
                      icon: MessageCircle,
                    },
                    {
                      title: "Módulo 4: Dons de Poder",
                      description: "Descubra como manifestar o poder sobrenatural de Deus em situações impossíveis.",
                      lessons: ["Dom da Fé", "Operação de Milagres", "Dons de Cura"],
                      icon: Zap,
                    },
                    {
                      title: "Módulo 5: Fundamentos e Prática",
                      description: "Aplique os princípios aprendidos e desenvolva uma prática consistente dos dons.",
                      lessons: [
                        "Fundamentos da Cura Divina",
                        "Por que devemos buscar os Dons",
                        "Aplicação prática no ministério",
                      ],
                      icon: Flame,
                    },
                  ].map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="py-4 text-left font-bold hover:text-[#d4fb00] hover:no-underline">
                        <div className="flex items-center gap-3">
                          {React.createElement(module.icon, { className: "h-5 w-5 text-[#d4fb00]" })}
                          <span>{module.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2 space-y-4">
                        <p className="text-gray-600">{module.description}</p>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
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
                    <Image src="/placeholder.svg?key=s2fzv" alt="Apresentação do Curso" fill className="object-cover" />
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
                        <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full">
                          Quero Acessar Todo o Conteúdo
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
        <section id="beneficios" className="py-16 md:py-24">
          <div className="container">
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
              {[
                {
                  title: "Descubra seus dons espirituais",
                  description:
                    "Através de um método claro e bíblico, você irá identificar e desenvolver os dons que Deus reservou para você.",
                  icon: GraduationCap,
                },
                {
                  title: "Aprofunde sua intimidade com Deus",
                  description:
                    "Aprenda a ouvir e obedecer a voz do Espírito Santo para uma vida espiritual mais profunda.",
                  icon: Heart,
                },
                {
                  title: "Impacte vidas ao seu redor",
                  description:
                    "Torne-se uma ferramenta poderosa nas mãos de Deus, expressando o amor de Cristo de forma prática.",
                  icon: Users,
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center">
                      {React.createElement(benefit.icon, { className: "h-6 w-6 text-black" })}
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#matricula">
                <Button size="lg" className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-8 h-14 text-lg">
                  Quero Desenvolver Meus Dons
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                Depoimentos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">O Que Nossos Alunos Estão Dizendo</h2>
              <p className="text-gray-600">
                Histórias reais de pessoas que transformaram seus ministérios através da Escola de Dons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Carlos Oliveira",
                  role: "Pastor Auxiliar",
                  location: "São Paulo, SP",
                  testimony:
                    "A Escola de Dons mudou completamente minha visão ministerial. Descobri dons que nem sabia que tinha e hoje lidero um ministério de intercessão na minha igreja com mais de 50 pessoas.",
                },
                {
                  name: "Mariana Santos",
                  role: "Líder de Jovens",
                  location: "Rio de Janeiro, RJ",
                  testimony:
                    "Sempre soube que tinha um chamado para trabalhar com jovens, mas não sabia como desenvolver isso. A Escola de Dons me deu as ferramentas práticas para identificar e aperfeiçoar meus dons de ensino e pastoreio.",
                },
                {
                  name: "Roberto Almeida",
                  role: "Empresário e Líder",
                  location: "Belo Horizonte, MG",
                  testimony:
                    "Como empresário, não imaginava como poderia usar meus dons na igreja. Através da Escola de Dons, descobri que meu dom de administração poderia impactar significativamente o Reino de Deus.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?key=zrj26&height=100&width=100&query=pessoa ${index + 1} cristã retrato`}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-[#d4fb00] opacity-30">"</div>
                      <p className="text-gray-700 italic relative z-10 pl-4">{testimonial.testimony}</p>
                      <div className="absolute -bottom-4 -right-2 text-4xl text-[#d4fb00] opacity-30">"</div>
                    </div>
                    <div className="flex text-[#d4fb00]">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section className="py-16 md:py-24">
          <div className="container">
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
        <section className="py-16 md:py-24 bg-[#d4fb00]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
                  Garantia Incondicional de 7 Dias
                </h2>
                <p className="text-lg text-gray-800">
                  Tenha acesso a todo o conteúdo da Escola de Dons e, se por qualquer motivo não ficar satisfeito, basta
                  solicitar o reembolso em até 7 dias e devolveremos 100% do seu investimento.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Sem perguntas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Sem burocracia</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <p className="text-gray-800">Devolução integral do valor</p>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="#matricula">
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Quero Garantir Minha Vaga Com Risco Zero
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-black flex items-center justify-center text-white p-8 text-center">
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
          <div className="container">
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

            <div className="max-w-[800px] mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Quanto tempo terei acesso ao curso?",
                    answer:
                      "Você terá acesso vitalício a todo o conteúdo da Escola de Dons, incluindo atualizações futuras.",
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
                ].map((faq, index) => (
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
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container">
            <div className="max-w-[800px] mx-auto text-center space-y-8">
              <Badge className="bg-[#d4fb00] hover:bg-[#d4fb00] text-black px-4 py-1 text-sm rounded-full">
                Última Chance
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Está na Hora de Descobrir e Desenvolver Seus Dons
              </h2>
              <p className="text-xl text-gray-300">Não deixe para depois o que pode transformar seu ministério hoje.</p>

              <Card className="border-none rounded-2xl overflow-hidden shadow-xl bg-white text-black mx-auto max-w-md">
                <CardContent className="p-6 space-y-6">
                  <div className="bg-black text-white p-4 -mx-6 -mt-6 mb-6 text-center">
                    <h3 className="font-bold text-xl">Oferta Especial - Encerra em:</h3>
                    <CountdownTimer />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <p>Curso completo com 5 módulos</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <p>Material de apoio exclusivo</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <p>Garantia incondicional de 7 dias</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <p>Acesso vitalício ao conteúdo</p>
                    </div>
                  </div>
                  <div className="pt-4 space-y-3">
                    <div className="text-center">
                      <span className="text-gray-500 line-through text-lg">De R$ 197,00</span>
                      <div className="text-3xl font-bold">Por apenas R$ 97,00</div>
                      <div className="text-sm text-gray-500">ou 3x de R$ 34,29</div>
                    </div>
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full h-14 text-lg font-bold">
                      QUERO ME INSCREVER AGORA
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
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container">
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

function ProblemCard({ icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <Card className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
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
