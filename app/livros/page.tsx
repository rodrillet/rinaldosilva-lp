"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  ChevronRight,
  Download,
  Menu,
  X,
  Star,
  CheckCircle,
  ShoppingCart,
  Package,
  BookMarked,
  Heart,
  Zap,
  Flame,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Youtube, Facebook } from "lucide-react"

export default function LivrosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black">RS</div>
            <span>Bispo Rinaldo Silva</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Início
            </Link>
            <Link href="/escola-dons" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Escola de Dons
            </Link>
            <Link href="/escola-ministerial" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
              Escola Ministerial
            </Link>
            <Link href="/livros" className="text-sm font-medium text-[#d4fb00] transition-colors">
              Livros
            </Link>
            <Link href="/contato" className="text-sm font-medium hover:text-[#d4fb00] transition-colors">
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
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#d4fb00] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/escola-dons"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#d4fb00] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Escola de Dons
              </Link>
              <Link
                href="/escola-ministerial"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#d4fb00] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Escola Ministerial
              </Link>
              <Link
                href="/livros"
                className="block px-3 py-2 rounded-md text-base font-medium text-[#d4fb00] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Livros
              </Link>
              <Link
                href="/contato"
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
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#d4fb00]/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d4fb00]/10 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4fb00] text-black font-medium text-sm">
                Biblioteca Digital
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Livros do <span className="text-[#d4fb00]">Bispo Rinaldo Silva</span>
              </h1>
              <p className="text-xl text-gray-300">
                Transforme sua vida espiritual através de ensinamentos profundos e práticos sobre cura, dons espirituais
                e avivamento
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-3 py-1">Cura Divina</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-3 py-1">Dons Espirituais</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-3 py-1">Avivamento</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-3 py-1">Vida no Espírito</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-3 py-1">Ministério</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs de Navegação */}
        <section className="py-8 bg-white border-b">
          <div className="container">
            <Tabs defaultValue="todos" className="w-full">
              <div className="flex justify-center">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="todos" className="text-sm">
                    Todos os Livros
                  </TabsTrigger>
                  <TabsTrigger value="cura" className="text-sm">
                    Cura
                  </TabsTrigger>
                  <TabsTrigger value="dons" className="text-sm">
                    Dons Espirituais
                  </TabsTrigger>
                  <TabsTrigger value="avivamento" className="text-sm">
                    Avivamento
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="todos" className="mt-6">
                <div className="grid grid-cols-1 gap-12">
                  {/* Livro 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center" id="livro-cura">
                    <div className="md:col-span-1">
                      <div className="relative aspect-[3/4] max-w-[300px] mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg -rotate-3 shadow-xl"></div>
                        <div className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600 p-6 flex flex-col">
                            <div className="flex-1 flex flex-col items-center justify-center text-white text-center">
                              <BookMarked className="h-16 w-16 mb-4 opacity-90" />
                              <h3 className="text-2xl font-bold mb-2">Por que Deus quer lhe curar?</h3>
                              <p className="text-sm opacity-90">Bispo Rinaldo Silva</p>
                              <div className="mt-4 px-4 py-1 bg-white/20 rounded-full text-sm">Kelps, 2021</div>
                            </div>
                            <div className="text-center text-white/90 text-sm">98 páginas</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Cura Divina</Badge>
                      <h2 className="text-2xl md:text-3xl font-bold">Por que Deus quer lhe curar?</h2>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">5.0 (27 avaliações)</span>
                      </div>
                      <p className="text-gray-700">
                        Rinaldo Silva parte de uma convicção simples: cura é parte do pacote da salvação. O livro
                        desenvolve essa ideia em sete capítulos que caminham da base bíblica ("A fé que honra Deus") até
                        o envio do leitor para orar por enfermos ("Seja usado por Deus para curar"). É, ao mesmo tempo,
                        devocional e prático: expõe textos-chave (Isaías 53, Marcos 16, Tiago 5), responde a objeções
                        ("por que alguns não são curados?") e termina com breves testemunhos.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Heart className="h-5 w-5 text-red-500" />
                          Leva-pra-casa:
                        </h4>
                        <p className="text-gray-700">
                          Fundamentação bíblica + passos práticos para receber/ministrar cura.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="text-2xl font-bold text-gray-900">R$ 29,90</div>
                        <a
                          href="https://pay.kiwify.com.br/pOmfq9Y"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none"
                        >
                          <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full sm:w-auto">
                            Comprar E-book
                            <ShoppingCart className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-8"></div>

                  {/* Livro 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center" id="livro-dons">
                    <div className="md:col-span-1">
                      <div className="relative aspect-[3/4] max-w-[300px] mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4fb00]/30 to-green-500/20 rounded-lg -rotate-3 shadow-xl"></div>
                        <div className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-[#d4fb00] to-green-600 p-6 flex flex-col">
                            <div className="flex-1 flex flex-col items-center justify-center text-black text-center">
                              <BookMarked className="h-16 w-16 mb-4 opacity-90" />
                              <h3 className="text-2xl font-bold mb-2">Dons Espirituais</h3>
                              <p className="text-sm opacity-90">Bispo Rinaldo Silva</p>
                              <div className="mt-4 px-4 py-1 bg-black/20 rounded-full text-sm">Kelps, 2025</div>
                            </div>
                            <div className="text-center text-black/90 text-sm">140 páginas</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Dons Espirituais</Badge>
                      <h2 className="text-2xl md:text-3xl font-bold">Dons Espirituais</h2>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">5.0 (42 avaliações)</span>
                      </div>
                      <p className="text-gray-700">
                        Esta é a obra mais sistemática do bispo. Ele divide o assunto em nove capítulos que vão da
                        "parceria com o Espírito" à prática dos dons de revelação, vocais e de poder. Destaca-se o
                        equilíbrio entre teologia (cessacionismo × continuísmo, tríplice classificação dos carismas) e
                        orientações de sala de culto ("como discernir excessos", "modelos de culto híbrido"). Cada
                        capítulo fecha com perguntas para reflexão, que funcionam bem em classes de Escola Bíblica ou
                        pequenos grupos.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-[#d4fb00]" />
                          Leva-pra-casa:
                        </h4>
                        <p className="text-gray-700">
                          Manual de ativação — mostra por que, mas principalmente como operar os dons hoje.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="text-2xl font-bold text-gray-900">R$ 39,90</div>
                        <a
                          href="https://pay.kiwify.com.br/V4ygSnO"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none"
                        >
                          <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full sm:w-auto">
                            Comprar E-book
                            <ShoppingCart className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-8"></div>

                  {/* Livro 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center" id="livro-avivamento">
                    <div className="md:col-span-1">
                      <div className="relative aspect-[3/4] max-w-[300px] mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg -rotate-3 shadow-xl"></div>
                        <div className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-red-600 p-6 flex flex-col">
                            <div className="flex-1 flex flex-col items-center justify-center text-white text-center">
                              <BookMarked className="h-16 w-16 mb-4 opacity-90" />
                              <h3 className="text-2xl font-bold mb-2">21 Dias Impactados por um Avivamento</h3>
                              <p className="text-sm opacity-90">Bispo Rinaldo Silva</p>
                              <div className="mt-4 px-4 py-1 bg-white/20 rounded-full text-sm">Kelps, 2021</div>
                            </div>
                            <div className="text-center text-white/90 text-sm">112 páginas</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Avivamento</Badge>
                      <h2 className="text-2xl md:text-3xl font-bold">21 Dias Impactados por um Avivamento</h2>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">5.0 (35 avaliações)</span>
                      </div>
                      <p className="text-gray-700">
                        Um devocional de três semanas pensado para inflamar o coração da igreja. Cada dia traz um
                        tema-chave (oração, arrependimento, fé, sobrenatural, santidade, dons etc.), um texto bíblico,
                        uma meditação curta e um desafio prático. Histórias de avivalistas (Jonathan Edwards, George
                        Müller, Charles Finney) pontuam a leitura e servem como "gatilho de fé". O formato torna o livro
                        útil para vigílias, campanhas de jejum ou séries de mensagens.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Flame className="h-5 w-5 text-orange-500" />
                          Leva-pra-casa:
                        </h4>
                        <p className="text-gray-700">
                          Roteiro de 21 dias para reacender paixão espiritual pessoal ou congregacional.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="text-2xl font-bold text-gray-900">R$ 34,90</div>
                        <a
                          href="https://pay.kiwify.com.br/eZjlh8n"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none"
                        >
                          <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full sm:w-auto">
                            Comprar E-book
                            <ShoppingCart className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cura" className="mt-6">
                <div className="grid grid-cols-1 gap-12">
                  {/* Livro 1 - Cura */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <div className="relative aspect-[3/4] max-w-[300px] mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg -rotate-3 shadow-xl"></div>
                        <div className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600 p-6 flex flex-col">
                            <div className="flex-1 flex flex-col items-center justify-center text-white text-center">
                              <BookMarked className="h-16 w-16 mb-4 opacity-90" />
                              <h3 className="text-2xl font-bold mb-2">Por que Deus quer lhe curar?</h3>
                              <p className="text-sm opacity-90">Bispo Rinaldo Silva</p>
                              <div className="mt-4 px-4 py-1 bg-white/20 rounded-full text-sm">Kelps, 2021</div>
                            </div>
                            <div className="text-center text-white/90 text-sm">98 páginas</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Cura Divina</Badge>
                      <h2 className="text-2xl md:text-3xl font-bold">Por que Deus quer lhe curar?</h2>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">5.0 (27 avaliações)</span>
                      </div>
                      <p className="text-gray-700">
                        Rinaldo Silva parte de uma convicção simples: cura é parte do pacote da salvação. O livro
                        desenvolve essa ideia em sete capítulos que caminham da base bíblica ("A fé que honra Deus") até
                        o envio do leitor para orar por enfermos ("Seja usado por Deus para curar"). É, ao mesmo tempo,
                        devocional e prático: expõe textos-chave (Isaías 53, Marcos 16, Tiago 5), responde a objeções
                        ("por que alguns não são curados?") e termina com breves testemunhos.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Heart className="h-5 w-5 text-red-500" />
                          Leva-pra-casa:
                        </h4>
                        <p className="text-gray-700">
                          Fundamentação bíblica + passos práticos para receber/ministrar cura.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="text-2xl font-bold text-gray-900">R$ 29,90</div>
                        <a
                          href="https://pay.kiwify.com.br/pOmfq9Y"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none"
                        >
                          <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full sm:w-auto">
                            Comprar E-book
                            <ShoppingCart className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="dons" className="mt-6">
                <div className="grid grid-cols-1 gap-12">
                  {/* Livro 2 - Dons */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <div className="relative aspect-[3/4] max-w-[300px] mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4fb00]/30 to-green-500/20 rounded-lg -rotate-3 shadow-xl"></div>
                        <div className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-[#d4fb00] to-green-600 p-6 flex flex-col">
                            <div className="flex-1 flex flex-col items-center justify-center text-black text-center">
                              <BookMarked className="h-16 w-16 mb-4 opacity-90" />
                              <h3 className="text-2xl font-bold mb-2">Dons Espirituais</h3>
                              <p className="text-sm opacity-90">Bispo Rinaldo Silva</p>
                              <div className="mt-4 px-4 py-1 bg-black/20 rounded-full text-sm">Kelps, 2025</div>
                            </div>
                            <div className="text-center text-black/90 text-sm">140 páginas</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Dons Espirituais</Badge>
                      <h2 className="text-2xl md:text-3xl font-bold">Dons Espirituais</h2>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">5.0 (42 avaliações)</span>
                      </div>
                      <p className="text-gray-700">
                        Esta é a obra mais sistemática do bispo. Ele divide o assunto em nove capítulos que vão da
                        "parceria com o Espírito" à prática dos dons de revelação, vocais e de poder. Destaca-se o
                        equilíbrio entre teologia (cessacionismo × continuísmo, tríplice classificação dos carismas) e
                        orientações de sala de culto ("como discernir excessos", "modelos de culto híbrido"). Cada
                        capítulo fecha com perguntas para reflexão, que funcionam bem em classes de Escola Bíblica ou
                        pequenos grupos.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-[#d4fb00]" />
                          Leva-pra-casa:
                        </h4>
                        <p className="text-gray-700">
                          Manual de ativação — mostra por que, mas principalmente como operar os dons hoje.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="text-2xl font-bold text-gray-900">R$ 39,90</div>
                        <a
                          href="https://pay.kiwify.com.br/V4ygSnO"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none"
                        >
                          <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full sm:w-auto">
                            Comprar E-book
                            <ShoppingCart className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="avivamento" className="mt-6">
                <div className="grid grid-cols-1 gap-12">
                  {/* Livro 3 - Avivamento */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <div className="relative aspect-[3/4] max-w-[300px] mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg -rotate-3 shadow-xl"></div>
                        <div className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-red-600 p-6 flex flex-col">
                            <div className="flex-1 flex flex-col items-center justify-center text-white text-center">
                              <BookMarked className="h-16 w-16 mb-4 opacity-90" />
                              <h3 className="text-2xl font-bold mb-2">21 Dias Impactados por um Avivamento</h3>
                              <p className="text-sm opacity-90">Bispo Rinaldo Silva</p>
                              <div className="mt-4 px-4 py-1 bg-white/20 rounded-full text-sm">Kelps, 2021</div>
                            </div>
                            <div className="text-center text-white/90 text-sm">112 páginas</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Avivamento</Badge>
                      <h2 className="text-2xl md:text-3xl font-bold">21 Dias Impactados por um Avivamento</h2>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">5.0 (35 avaliações)</span>
                      </div>
                      <p className="text-gray-700">
                        Um devocional de três semanas pensado para inflamar o coração da igreja. Cada dia traz um
                        tema-chave (oração, arrependimento, fé, sobrenatural, santidade, dons etc.), um texto bíblico,
                        uma meditação curta e um desafio prático. Histórias de avivalistas (Jonathan Edwards, George
                        Müller, Charles Finney) pontuam a leitura e servem como "gatilho de fé". O formato torna o livro
                        útil para vigílias, campanhas de jejum ou séries de mensagens.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Flame className="h-5 w-5 text-orange-500" />
                          Leva-pra-casa:
                        </h4>
                        <p className="text-gray-700">
                          Roteiro de 21 dias para reacender paixão espiritual pessoal ou congregacional.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="text-2xl font-bold text-gray-900">R$ 34,90</div>
                        <a
                          href="https://pay.kiwify.com.br/eZjlh8n"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none"
                        >
                          <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full sm:w-auto">
                            Comprar E-book
                            <ShoppingCart className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Pacote Completo Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#d4fb00] text-black hover:bg-[#c0e500]">Oferta Especial</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Adquira a <span className="text-[#d4fb00]">Coleção Completa</span>
                  </h2>
                  <p className="text-gray-300">
                    Obtenha os três e-books do Bispo Rinaldo Silva com desconto especial e transforme sua vida
                    espiritual de forma completa.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Por que Deus quer lhe curar?</p>
                        <p className="text-sm text-gray-400">Fundamentos bíblicos da cura divina</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Dons Espirituais</p>
                        <p className="text-sm text-gray-400">Manual prático para operar nos dons</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">21 Dias Impactados por um Avivamento</p>
                        <p className="text-sm text-gray-400">Devocional para reacender sua paixão espiritual</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center gap-4">
                      <div className="text-gray-400 line-through">R$ 104,70</div>
                      <div className="text-2xl font-bold">R$ 79,90</div>
                      <Badge className="bg-red-500 text-white">Economize 24%</Badge>
                    </div>
                    <div className="mt-4">
                      <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] w-full py-6 text-lg font-bold">
                        Comprar Coleção Completa
                        <Package className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative aspect-square max-w-[400px] mx-auto">
                    <div className="absolute top-[10%] left-[10%] w-[70%] h-[90%] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg -rotate-6 shadow-xl"></div>
                    <div className="absolute top-[5%] left-[15%] w-[70%] h-[90%] bg-gradient-to-br from-[#d4fb00]/30 to-green-500/20 rounded-lg rotate-3 shadow-xl"></div>
                    <div className="absolute top-[0%] left-[20%] w-[70%] h-[90%] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg -rotate-3 shadow-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                        <h3 className="text-xl font-bold mb-2">Coleção Completa</h3>
                        <p className="text-sm mb-4">Todos os 3 e-books do Bispo Rinaldo Silva</p>
                        <div className="text-3xl font-bold text-[#d4fb00]">R$ 79,90</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Ler em Sequência Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00] text-black hover:bg-[#c0e500]">Guia de Leitura</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Como Ler em <span className="text-[#d4fb00]">Sequência</span>
              </h2>
              <p className="text-gray-600">
                Siga esta ordem de leitura para uma jornada completa de crescimento espiritual
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="relative z-10 mb-12">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl shrink-0">
                      1
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex-1">
                      <h3 className="text-xl font-bold mb-2 text-blue-800">Por que Deus quer lhe curar?</h3>
                      <p className="text-gray-700">Fundamentos de fé e cura.</p>
                      <p className="text-gray-600 mt-2">
                        Comece sua jornada entendendo os fundamentos bíblicos da cura divina e como ela faz parte do
                        pacote da salvação.
                      </p>
                      <div className="mt-4">
                        <a href="#livro-cura">
                          <Button
                            variant="outline"
                            className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                          >
                            Ver Livro
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mb-12">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#d4fb00] flex items-center justify-center text-black font-bold text-xl shrink-0">
                      2
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex-1">
                      <h3 className="text-xl font-bold mb-2 text-green-800">Dons Espirituais</h3>
                      <p className="text-gray-700">Ferramentas do Espírito para servir após a cura.</p>
                      <p className="text-gray-600 mt-2">
                        Após entender a cura, avance para os dons espirituais que Deus concede para edificação da igreja
                        e expansão do Reino.
                      </p>
                      <div className="mt-4">
                        <a href="#livro-dons">
                          <Button
                            variant="outline"
                            className="border-green-300 text-green-700 hover:bg-green-50 hover:text-green-800"
                          >
                            Ver Livro
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl shrink-0">
                      3
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 flex-1">
                      <h3 className="text-xl font-bold mb-2 text-orange-800">21 Dias Impactados por um Avivamento</h3>
                      <p className="text-gray-700">Plano de ação para manter o fogo aceso.</p>
                      <p className="text-gray-600 mt-2">
                        Complete sua jornada com um plano prático de 21 dias para manter o fogo do avivamento aceso em
                        sua vida e ministério.
                      </p>
                      <div className="mt-4">
                        <a href="#livro-avivamento">
                          <Button
                            variant="outline"
                            className="border-orange-300 text-orange-700 hover:bg-orange-50 hover:text-orange-800"
                          >
                            Ver Livro
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
              <Badge className="bg-[#d4fb00] text-black hover:bg-[#c0e500]">Depoimentos</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                O Que Nossos <span className="text-[#d4fb00]">Leitores Dizem</span>
              </h2>
              <p className="text-gray-600">
                Veja como os livros do Bispo Rinaldo Silva têm transformado vidas ao redor do mundo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marcos Oliveira",
                  role: "Pastor",
                  book: "Por que Deus quer lhe curar?",
                  testimony:
                    "Este livro transformou completamente meu ministério de cura. Agora tenho muito mais confiança para orar pelos enfermos e temos visto resultados extraordinários em nossa igreja.",
                },
                {
                  name: "Juliana Santos",
                  role: "Líder de Célula",
                  book: "Dons Espirituais",
                  testimony:
                    "Finalmente um livro que explica os dons espirituais de forma clara e prática! Consegui identificar meus dons e agora estou operando neles com muito mais eficácia.",
                },
                {
                  name: "Ricardo Mendes",
                  role: "Evangelista",
                  book: "21 Dias Impactados por um Avivamento",
                  testimony:
                    "Usei este devocional com minha equipe de evangelismo e o resultado foi incrível. Em apenas 21 dias, vimos um avivamento começar em nossa região. Recomendo a todos!",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <p className="text-gray-600 italic">"{item.testimony}"</p>
                    <div className="pt-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.role}</p>
                        <p className="text-sm text-[#d4fb00] font-medium">Livro: {item.book}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="container">
            <div className="max-w-[900px] mx-auto text-center space-y-8">
              <Badge className="bg-[#d4fb00] text-black hover:bg-[#c0e500]">Transforme Sua Vida Hoje</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Comece Sua <span className="text-[#d4fb00]">Jornada Espiritual</span>
              </h2>
              <p className="text-xl text-gray-300">
                Adquira os livros do Bispo Rinaldo Silva e experimente uma transformação completa em sua vida e
                ministério
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center mx-auto mb-4 text-black">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">E-books Instantâneos</h3>
                  <p className="text-gray-300">Acesso imediato após a compra</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center mx-auto mb-4 text-black">
                    <Download className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Leitura Offline</h3>
                  <p className="text-gray-300">Baixe e leia quando e onde quiser</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[#d4fb00] flex items-center justify-center mx-auto mb-4 text-black">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Transformação Garantida</h3>
                  <p className="text-gray-300">Conteúdo que impacta vidas</p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-8 py-6 text-xl font-bold">
                  Ver Todos os Livros
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
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
                    href="/"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/escola-dons"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Escola de Dons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/escola-ministerial"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Escola Ministerial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/livros"
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Livros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
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
