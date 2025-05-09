"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  Calendar,
  MapPin,
  BookOpen,
  Youtube,
  Instagram,
  Facebook,
  ArrowRight,
  Mic,
  Users,
  GraduationCap,
  Mail,
  Phone,
  Globe,
  PlayIcon,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black">RS</div>
            <span>Bispo Rinaldo Silva</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#sobre" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Sobre
            </Link>
            <Link href="#ministerio" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Ministério
            </Link>
            <Link href="#eventos" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Eventos
            </Link>
            <Link href="#mensagens" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Mensagens
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Contato
            </Link>
          </nav>

          {/* Botão de menu mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#d4fb00] hover:bg-gray-100 focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200 shadow-lg">
              <Link
                href="#sobre"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#d4fb00] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#ministerio"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#d4fb00] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Ministério
              </Link>
              <Link
                href="#eventos"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#d4fb00] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </Link>
              <Link
                href="#mensagens"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#d4fb00] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Mensagens
              </Link>
              <Link
                href="#contato"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#d4fb00] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1410.JPG-hVPKSNnmGgEdWFKloXlTqOjm1nmnHa.jpeg"
              alt="Bispo Rinaldo Silva ministrando"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>
          <div className="container relative z-20">
            <div className="max-w-[650px] space-y-6 text-white">
              <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Bispo Sênior • Igreja Impactados
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Transformando Vidas Através do Poder de Deus
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-[600px]">
                Há mais de 20 anos ministrando cura, libertação e restauração para milhares de pessoas em todo o Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-8">
                  Conhecer Ministério
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="w-full py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-[#d4fb00]/20 rounded-2xl -rotate-3"></div>
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <Image
                    src="/rinaldo-silva-profile.jpeg"
                    alt="Bispo Rinaldo Silva"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 2%" }}
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                  Sobre o Bispo
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Conheça Rinaldo Silva</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Nascido em 5 de fevereiro de 1994, Rinaldo Silva é casado com Cecília Silva e pai de Manuela e
                    Enrico. Além de Bispo Sênior da Igreja Impactados, é empreendedor, graduado em Teologia e Filosofia.
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
                </div>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Biografia Completa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Hero */}
        <section className="w-full relative overflow-hidden">
          <div className="relative w-full h-[420px]">
            <Image
              src="/banner-hero.jpeg"
              alt="Bispo Rinaldo Silva ministrando"
              fill
              className="object-cover object-[center_25%]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </div>
        </section>

        {/* Ministério Section */}
        <section id="ministerio" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Ministério
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Um Ministério de Impacto e Transformação
              </h2>
              <p className="text-gray-600">
                Conheça as diferentes áreas de atuação do ministério do Bispo Rinaldo Silva
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold">Ensino Bíblico</h3>
                  <p className="text-gray-600">
                    Mensagens profundas e transformadoras baseadas nas escrituras, aplicadas à vida contemporânea.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-black hover:text-[#d4fb00]"
                  >
                    Acessar Estudos
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center">
                    <Mic className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold">Conferências</h3>
                  <p className="text-gray-600">
                    Eventos nacionais e internacionais que reúnem milhares de pessoas em busca de renovação espiritual.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-black hover:text-[#d4fb00]"
                  >
                    Ver Agenda
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold">Mentoria</h3>
                  <p className="text-gray-600">
                    Formação de líderes através de programas de mentoria e capacitação ministerial.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-black hover:text-[#d4fb00]"
                  >
                    Participar
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Eventos Section */}
        <section id="eventos" className="w-full py-16 md:py-24 bg-black text-white">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Agenda
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Próximos Eventos</h2>
              <p className="text-gray-400">Participe dos eventos com o Bispo Rinaldo Silva</p>
            </div>

            <div className="text-center py-16">
              <p className="text-xl text-gray-300">Cronograma de eventos ainda não definido</p>
              <div className="mt-8">
                <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500]">
                  Verificar Novamente em Breve
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mensagens Section */}
        <section id="mensagens" className="w-full py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Mensagens
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Palavras que Transformam</h2>
              <p className="text-gray-600">Assista às mais recentes mensagens do Bispo Rinaldo Silva</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="https://www.youtube.com/watch?v=rXdi6GFamKE"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="border-none rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-[#d4fb00] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PlayIcon className="h-8 w-8 text-black ml-1" />
                      </div>
                    </div>
                    <Image src="/video-por-meio-da-fe.jpeg" alt="POR MEIO DA FÉ" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold group-hover:text-[#d4fb00] transition-colors">POR MEIO DA FÉ</h3>
                    <p className="text-gray-600 text-sm flex items-center justify-between mt-2">
                      <span>Série: Fundamentos da Fé</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        42 min
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </a>

              <a
                href="https://www.youtube.com/watch?v=54j7EUE4Jgo"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="border-none rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-[#d4fb00] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PlayIcon className="h-8 w-8 text-black ml-1" />
                      </div>
                    </div>
                    <Image
                      src="/video-5-marcas-avivamento.jpeg"
                      alt="5 MARCAS DE UM AVIVAMENTO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold group-hover:text-[#d4fb00] transition-colors">
                      5 MARCAS DE UM AVIVAMENTO
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center justify-between mt-2">
                      <span>Pregação Completa</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        58 min
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </a>

              <a
                href="https://www.youtube.com/watch?v=pP3B7E8z-kk"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="border-none rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-[#d4fb00] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PlayIcon className="h-8 w-8 text-black ml-1" />
                      </div>
                    </div>
                    <Image
                      src="/video-vida-no-espirito.jpeg"
                      alt="UMA VIDA NO ESPÍRITO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold group-hover:text-[#d4fb00] transition-colors">
                      UMA VIDA NO ESPÍRITO
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center justify-between mt-2">
                      <span>Podcast com Judá Bertelli</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        65 min
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div className="mt-12 text-center">
              <a href="https://www.youtube.com/@RinaldoSilvaOficial" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Ver Todas as Mensagens
                  <Youtube className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Testemunhos Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Testemunhos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Vidas Transformadas</h2>
              <p className="text-gray-600">Conheça histórias de pessoas impactadas pelo ministério</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Silva",
                  location: "São Paulo, SP",
                  testimony:
                    "A mensagem do Bispo Rinaldo transformou completamente minha vida e minha família. Encontrei direção e propósito através de seus ensinamentos.",
                },
                {
                  name: "João Oliveira",
                  location: "Rio de Janeiro, RJ",
                  testimony:
                    "Participar das conferências do Bispo Rinaldo mudou minha perspectiva sobre liderança e ministério. Hoje sou um líder mais eficaz e compassivo.",
                },
                {
                  name: "Ana Costa",
                  location: "Belo Horizonte, MG",
                  testimony:
                    "Depois de anos lutando contra a depressão, encontrei esperança e cura através das mensagens do Bispo Rinaldo. Sou eternamente grata por seu ministério.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-none rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src="/placeholder.svg"
                          alt={item.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-[#d4fb00] opacity-30">"</div>
                      <p className="text-gray-700 italic relative z-10 pl-4">{item.testimony}</p>
                      <div className="absolute -bottom-4 -right-2 text-4xl text-[#d4fb00] opacity-30">"</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-16 md:py-24 bg-[#d4fb00]">
          <div className="container">
            <div className="max-w-[800px] mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
                Receba Conteúdos Exclusivos
              </h2>
              <p className="text-gray-800">
                Inscreva-se para receber mensagens, estudos bíblicos e notícias sobre eventos
              </p>
              <Card className="border-none rounded-2xl shadow-lg bg-white p-2">
                <CardContent className="p-4">
                  <form className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        className="flex h-12 w-full rounded-xl border border-input bg-white pl-10 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <Button className="bg-black text-white hover:bg-gray-800 h-12 rounded-xl px-6">Inscrever-se</Button>
                  </form>
                </CardContent>
              </Card>
              <p className="text-xs text-gray-700">
                Ao se inscrever, você concorda com nossa política de privacidade. Não enviamos spam.
              </p>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="w-full py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                  Contato
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Entre em Contato</h2>
                <p className="text-gray-600">
                  Para convites, agendamentos ou mais informações sobre o ministério do Bispo Rinaldo Silva
                </p>

                <Card className="border-none rounded-2xl shadow-md">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Nome
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                              id="name"
                              type="text"
                              className="flex h-10 w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Seu nome completo"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            E-mail
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                              id="email"
                              type="email"
                              className="flex h-10 w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="seu@email.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Assunto
                        </label>
                        <div className="relative">
                          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <input
                            id="subject"
                            type="text"
                            className="flex h-10 w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Assunto da mensagem"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Mensagem
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="flex w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Sua mensagem detalhada"
                        ></textarea>
                      </div>
                      <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full">Enviar Mensagem</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="border-none rounded-2xl shadow-md overflow-hidden">
                  <div className="relative h-[300px]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_MG_9268.jpg-mBQDBdiDkmMBhs2JJ8YN3lmefgIvqL.jpeg"
                      alt="Igreja Impactados"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">Igreja Impactados</h3>
                      <div className="space-y-3 text-white">
                        <p className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-[#d4fb00]" />
                          R. Dona Isoleta, 560 - Qd. 46 Lt. 31/32 - Vila Rosa, Goiânia - GO, 74345-150
                        </p>
                        <p className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-[#d4fb00]" />
                          Cultos: Domingos às 10h e 18h
                        </p>
                        <a
                          href="https://igrejaimpactados.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 bg-[#d4fb00] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#c0e500] transition-colors"
                        >
                          Visitar Site da Igreja
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="border-none rounded-2xl shadow-md">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-xl font-bold">Informações de Contato</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                          <Mail className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h4 className="font-medium">E-mail</h4>
                          <p className="text-gray-600">assessoria@rinaldosilva.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                          <Phone className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h4 className="font-medium">Telefone</h4>
                          <p className="text-gray-600">+55 62 9999-3858</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#d4fb00]/20 flex items-center justify-center shrink-0">
                          <Globe className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h4 className="font-medium">Redes Sociais</h4>
                          <div className="flex gap-4 mt-2">
                            <Link
                              href="https://instagram.com/rinaldosilva"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#d4fb00] hover:text-black transition-colors"
                            >
                              <Instagram className="h-4 w-4" />
                            </Link>
                            <Link
                              href="https://www.youtube.com/@RinaldoSilvaOficial"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#d4fb00] hover:text-black transition-colors"
                            >
                              <Youtube className="h-4 w-4" />
                            </Link>
                            <Link
                              href="#"
                              className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#d4fb00] hover:text-black transition-colors"
                            >
                              <Facebook className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-black text-white">
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
                  <Link
                    href="#sobre"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#ministerio"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Ministério
                  </Link>
                </li>
                <li>
                  <Link
                    href="#eventos"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#mensagens"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Mensagens
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#d4fb00]" />
                  assessoria@rinaldosilva.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#d4fb00]" />
                  +55 62 9999-3858
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#d4fb00]" />
                  Goiânia, GO - Brasil
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com/rinaldosilva"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4fb00] hover:text-black transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@RinaldoSilvaOficial"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4fb00] hover:text-black transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4fb00] hover:text-black transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                  Inscrever-se na Newsletter
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Bispo Rinaldo Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Clock(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
