"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Info } from "lucide-react"
import { trackEvent } from "@/lib/tracking"

export default function CruzadaACuraPage() {
  // Rastrear visualização da página quando ela for carregada
  useEffect(() => {
    trackEvent('view_event_page', {
      event_name: 'Cruzada A Cura',
      event_date: '2025-05-24',
      event_location: 'Goiânia Arena',
      event_category: 'cruzada',
    });
  }, []);

  // Manipulador de clique de registro
  const handleRegisterClick = () => {
    trackEvent('register_interest', {
      event_name: 'Cruzada A Cura',
      event_date: '2025-05-24',
      event_location: 'Goiânia Arena',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white text-blue-600 px-3 py-1">24 de Maio, 2025</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">CRUZADA A CURA</h1>
              <p className="text-xl">
                Um evento poderoso de cura e libertação. Venha experimentar o poder transformador de Deus em sua vida!
              </p>
              <div className="pt-4">
                <a 
                  href="https://acuraoficial.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleRegisterClick}
                >
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                    QUERO PARTICIPAR
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/links/acura.png"
                alt="Cruzada A Cura"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre a Cruzada A Cura</h2>
            <p className="text-gray-700 text-lg mb-6">
              A Cruzada A Cura é um evento poderoso focado na manifestação dos dons de cura e libertação. 
              Neste encontro especial, você terá a oportunidade de experimentar o poder transformador de Deus, 
              receber ministração pessoal e testemunhar milagres acontecendo diante dos seus olhos.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Venha participar deste momento único de renovo espiritual, restauração física e emocional, 
              onde vidas são transformadas e testemunhos poderosos são compartilhados.
            </p>
          </div>

          {/* Detalhes do evento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Detalhes do Evento</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Data</p>
                      <p className="text-gray-600">24 de Maio, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Horário</p>
                      <p className="text-gray-600">15:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Local</p>
                      <p className="text-gray-600">Goiânia Arena</p>
                      <p className="text-gray-500 text-sm">Av. Fued José Sebba, 1170 - Jardim Goiás, Goiânia - GO</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Público</p>
                      <p className="text-gray-600">Evento aberto para todos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">O que esperar</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Poderosas ministrações</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Momentos de adoração e louvor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Ministração de cura e libertação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Testemunhos de vidas transformadas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Venha participar desta experiência!</h3>
            <p className="mb-6 max-w-lg mx-auto">
              A entrada é gratuita. Convide amigos e familiares para vivenciar este momento especial de cura e libertação.
            </p>
            <a 
              href="https://acuraoficial.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleRegisterClick}
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                SAIBA MAIS
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Localização</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.658345961611!2d-49.24123322413125!3d-16.704984049687886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef10af2c5c201%3A0x2076236243af6f1c!2sGoi%C3%A2nia%20Arena!5e0!3m2!1spt-BR!2sbr!4v1681935276204!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
            <Link href="/" className="text-blue-600 hover:underline text-sm">
              Voltar para o início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 