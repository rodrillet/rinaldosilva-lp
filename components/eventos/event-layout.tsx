import Link from "next/link"
import { EventLayoutProps } from "@/types/eventos"

export function EventLayout({ children }: EventLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {children}
      
      {/* Footer comum para todas as páginas de eventos */}
      <footer className="py-6 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Bispo Rinaldo Silva. Todos os direitos reservados.
          </p>
          <div className="mt-4">
            <Link href="/" className="text-blue-600 hover:underline text-sm">
              Voltar para o início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 