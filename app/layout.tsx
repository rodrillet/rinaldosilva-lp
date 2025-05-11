import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleTagManager from "@/components/GoogleTagManager"

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
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        {/* Google Tag Manager Component */}
        <GoogleTagManager gtmId="GTM-N5TKRD6W" />
        
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
