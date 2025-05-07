"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header simplificado */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-[#a8ff00] flex items-center justify-center text-black">RS</div>
            <span>Bispo Rinaldo Silva</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container py-16 md:py-24 flex flex-col items-center text-center space-y-8">
          <div className="w-24 h-24 rounded-full bg-[#a8ff00]/20 flex items-center justify-center">
            <span className="text-4xl font-bold text-[#a8ff00]">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Página não encontrada</h1>
          <p className="text-lg text-gray-600 max-w-[600px]">
            Desculpe, a página que você está procurando não existe ou foi movida para outro endereço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => window.history.back()} variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </Button>
            <Link href="/">
              <Button className="bg-[#a8ff00] text-black hover:bg-[#c0e500] flex items-center gap-2 w-full sm:w-auto">
                <Home className="h-4 w-4" />
                Ir para a Home
              </Button>
            </Link>
          </div>
          <div className="mt-12 border-t border-gray-100 pt-8">
            <h2 className="text-xl font-semibold mb-4">Talvez você esteja procurando por:</h2>
            <ul className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
              <li>
                <Link href="/escola-dons" className="text-[#a8ff00] hover:underline">
                  Escola de Dons
                </Link>
              </li>
              <li>
                <Link href="/#eventos" className="text-[#a8ff00] hover:underline">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/#mensagens" className="text-[#a8ff00] hover:underline">
                  Mensagens
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-[#a8ff00] hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer simplificado */}
      <footer className="w-full py-8 bg-black text-white">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Bispo Rinaldo Silva. Todos os direitos reservados.</p>
          <div className="mt-4">
            <Link href="/" className="text-sm text-gray-400 hover:text-[#a8ff00]">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
