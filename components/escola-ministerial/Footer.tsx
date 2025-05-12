"use client"

import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Facebook
} from "lucide-react"

interface FooterProps {
  navigationLinks: Array<{
    href: string;
    label: string;
    active: boolean;
  }>;
}

// Footer como componente separado para lazy loading
export default function Footer({ navigationLinks }: FooterProps) {
  return (
    <footer className="w-full py-12 bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-full bg-[#d4fb00] flex items-center justify-center text-black">RS</div>
              <span>Bispo Rinaldo Silva</span>
            </div>
            <p className="text-gray-400">Bispo Sênior da Igreja Impactados. Professor, graduado em Teologia e Filosofia.</p>
            <p className="text-gray-400">Contato: +55 62 9999-3858</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#d4fb00] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#d4fb00]" aria-hidden="true" />
                assessoria@rinaldosilva.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#d4fb00]" aria-hidden="true" />
                +55 62 9999-3858
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d4fb00]" aria-hidden="true" />
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
                aria-label="Instagram do Bispo Rinaldo Silva"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.youtube.com/@RinaldoSilvaOficial"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4fb00] hover:text-black transition-colors"
                aria-label="Canal do YouTube do Bispo Rinaldo Silva"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4fb00] hover:text-black transition-colors"
                aria-label="Facebook do Bispo Rinaldo Silva"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
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
  )
} 