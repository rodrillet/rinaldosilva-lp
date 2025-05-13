import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleTagManager, usePageView } from "@/lib/tracking"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "Bispo Rinaldo Silva | Igreja Impactados",
  description: "Site oficial do Bispo Rinaldo Silva, Bispo Sênior na Igreja Impactados.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Este hook irá monitorar visualizações de página
  usePageView("Bispo Rinaldo Silva | Site Oficial");

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Script do GTM no head para garantir carregamento prioritário */}
        <Script
          id="gtm-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];`
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {/* Google Tag Manager Component */}
        <GoogleTagManager />
        
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
