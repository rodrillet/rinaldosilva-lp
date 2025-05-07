import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "Bispo Rinaldo Silva | Igreja Impactados | Ministério Oficial",
  description: "Site oficial do Bispo Rinaldo Silva, Bispo Sênior da Igreja Impactados. Conheça seu ministério, mensagens, eventos, conferências, e a renomada Escola de Dons. Transformando vidas há mais de 20 anos através da Palavra de Deus e do poder do Espírito Santo.",
  keywords: "Rinaldo Silva, Bispo Rinaldo Silva, Igreja Impactados, Escola de Dons, ministério, pregações, conferências, eventos, dons espirituais, palavra de fé, cura, libertação, avivamento, Espírito Santo, milagres, transformação espiritual, São Paulo, Brasil",
  author: "Bispo Rinaldo Silva",
  category: "Religião, Cristianismo, Ministério",
  creator: "Ministério Bispo Rinaldo Silva",
  publisher: "Igreja Impactados",
  openGraph: {
    title: "Bispo Rinaldo Silva | Ministério Oficial",
    description: "Conheça o ministério do Bispo Rinaldo Silva e sua Escola de Dons. Transformando vidas há mais de 20 anos através do poder do Espírito Santo.",
    type: "website",
    url: "https://rinaldosilva.com",
    locale: "pt_BR",
    siteName: "Ministério Bispo Rinaldo Silva",
    images: [
      {
        url: "/placeholder.svg?key=og-image",
        width: 1200,
        height: 630,
        alt: "Bispo Rinaldo Silva"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bispo Rinaldo Silva | Ministério Oficial",
    description: "Conheça o ministério do Bispo Rinaldo Silva e sua Escola de Dons.",
    images: ["/placeholder.svg?key=twitter-image"]
  },
  generator: "Next.js",
  metadataBase: new URL("https://rinaldosilva.com"),
  alternates: {
    canonical: "https://rinaldosilva.com",
    languages: {
      'pt-BR': 'https://rinaldosilva.com',
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'google-site-verification=suaverificacao', // Substituir pelo código real de verificação
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          enableColorScheme={false}
          storageKey="rinaldosilva-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
