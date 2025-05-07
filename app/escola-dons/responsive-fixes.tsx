// Este arquivo contém classes utilitárias para melhorar a responsividade
// Especialmente para botões e elementos que podem ultrapassar a largura da tela

export const responsiveButtonClasses = {
  primary: "w-full sm:w-auto px-4 py-2 text-sm sm:text-base whitespace-normal sm:whitespace-nowrap",
  cta: "w-full sm:w-auto px-4 py-2 text-sm sm:text-base font-bold whitespace-normal sm:whitespace-nowrap",
  large: "w-full sm:w-auto px-4 py-3 text-base sm:text-lg font-bold whitespace-normal sm:whitespace-nowrap",
}

export const responsiveContainerClasses = {
  card: "p-4 sm:p-6 md:p-8",
  section: "px-4 sm:px-6 py-12 sm:py-16 md:py-24",
  grid: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8",
}
