"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Youtube, Facebook, Twitter, Menu, X } from "lucide-react"
import { useState } from "react"

export default function LinksPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-gray-800 flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white mr-2 shadow-sm">
              RS
            </div>
            <span>Rinaldo Silva</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Início
            </Link>
            <Link href="/links" className="text-blue-600 font-medium border-b-2 border-blue-600">
              Links
            </Link>
            <Link href="/escola-dons" className="text-gray-600 hover:text-blue-600 transition-colors">
              Escola de Dons
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-md z-50">
            <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link href="/links" className="text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Links
              </Link>
              <Link
                href="/escola-dons"
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Escola de Dons
              </Link>
              <Link
                href="/sobre"
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contato"
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Perfil */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/rinaldo-silva-profile.jpeg"
                alt="Rinaldo Silva"
                fill
                className="object-cover object-position-y-top"
                style={{ objectPosition: "center 2%" }}
                priority
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Rinaldo Silva</h1>
            <p className="text-gray-600 max-w-md mb-4">
              Ministro, professor e especialista em Dons Espirituais. Transformando vidas através do propósito divino.
            </p>

            {/* Ícones de redes sociais */}
            <div className="flex gap-5 mb-6">
              <a
                href="https://instagram.com/rinaldosilvaoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/@rinaldosilva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://facebook.com/rinaldosilvaoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com/rinaldosilva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>

            <div className="flex gap-3 mb-2">
              <Badge className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1">Ministro</Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-green-700 text-white px-3 py-1">Professor</Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-3 py-1">Autor</Badge>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-4 max-w-md mx-auto">
            {/* Escola de Dons */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Link href="/escola-dons" className="block">
                  <div className="relative w-full h-[160px]">
                    <Image
                      src="/escola-dons-espirituais.png"
                      alt="Escola de Dons"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h3 className="text-white font-bold text-lg">Escola de Dons</h3>
                      <p className="text-gray-200 text-sm">Desenvolva seus dons espirituais</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Livros */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <a href="#livros" className="block">
                  <div className="relative w-full h-[160px]">
                    <Image
                      src="/livros-dons-espirituais.png"
                      alt="Livros"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h3 className="text-white font-bold text-lg">Livros</h3>
                      <p className="text-gray-200 text-sm">Conheça minhas publicações</p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Agenda de Eventos */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <a href="#agenda" className="block">
                  <div className="relative w-full h-[160px]">
                    <Image
                      src="/events-conferences-agenda.png"
                      alt="Agenda"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h3 className="text-white font-bold text-lg">Agenda de Eventos</h3>
                      <p className="text-gray-200 text-sm">Confira próximas conferências</p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Contato para Palestras */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative w-full h-[160px]">
                    <Image
                      src="/contato-palestras-conferencias.png"
                      alt="Contato para Palestras"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h3 className="text-white font-bold text-lg">Contato para Palestras</h3>
                      <p className="text-gray-200 text-sm">Convide para sua igreja ou evento</p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Rinaldo Silva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
