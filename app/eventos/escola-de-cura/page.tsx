"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Calendar, Clock, MapPin, Ticket, Share2 } from "lucide-react"
import { trackEscolaDeCuraView, trackEscolaDeCuraRegisterClick } from "./events"

export default function EscolaDeCuraPage() {
  // Rastrear visualização da página quando ela for carregada
  useEffect(() => {
    trackEscolaDeCuraView();
  }, []);

  // Manipulador de clique de registro
  const handleRegisterClick = () => {
    trackEscolaDeCuraRegisterClick();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white text-teal-600 px-3 py-1">27 e 28 de Maio</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">ESCOLA DE CURA</h1>
              <p className="text-xl">
                Aprenda a ministrar cura e libertação, e a buscar as promessas de Deus de restauração.
              </p>
              <div className="pt-4">
                <a 
                  href="https://www.sympla.com.br/evento/escola-de-cura/2942921" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleRegisterClick}
                >
                  <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6">
                    INSCREVA-SE AGORA
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/links/SYMPLA.jpg"
                alt="Escola de Cura"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre a Escola de Cura</h2>
            <p className="text-gray-700 text-lg mb-6">
              O objetivo da Escola é equipar pessoas para alcançar as cidades através dos dons de cura e levar
              os participantes a buscarem as promessas de Deus de cura e restauração. A Escola tem ênfase em um
              ministério prático, ministrando cura e ensinando estratégias específicas que todo cristão pode usar
              para aqueles que estão doentes, seja no físico ou no emocional.
            </p>
          </div>

          {/* Detalhes do evento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Detalhes do Evento</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Data</p>
                      <p className="text-gray-600">27 e 28 de Maio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Horário</p>
                      <p className="text-gray-600">19h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Local</p>
                      <p className="text-gray-600">Rua Dona Isoleta, 560, Vila Rosa - Goiânia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Ticket className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Investimento</p>
                      <p className="text-gray-600">R$ 97,00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">O que está incluso</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Certificado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Coffee Break</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Material didático</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Ministração prática</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Garanta sua vaga!</h3>
            <p className="mb-6 max-w-lg mx-auto">
              As vagas são limitadas. Faça sua inscrição agora e desenvolva o dom da cura em sua vida.
            </p>
            <a 
              href="https://www.sympla.com.br/evento/escola-de-cura/2942921" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleRegisterClick}
            >
              <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6">
                INSCREVA-SE AGORA
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Bispo Rinaldo Silva. Todos os direitos reservados.
          </p>
          <div className="mt-4">
            <Link href="/" className="text-teal-600 hover:underline text-sm">
              Voltar para o início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 