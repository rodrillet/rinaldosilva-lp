export const getBispoStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rinaldo Silva",
    "alternateName": "Bispo Rinaldo Silva",
    "url": "https://rinaldosilva.com",
    "image": "https://rinaldosilva.com/placeholder.svg?key=rinaldo-profile",
    "jobTitle": "Bispo Sênior",
    "birthDate": "1994-02-05",
    "nationality": "Brazilian",
    "gender": "Male",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Igreja Impactados",
      "url": "https://impactados.com.br",
      "logo": "https://rinaldosilva.com/placeholder.svg?key=igreja-logo"
    },
    "description": "Rinaldo Silva é Bispo Sênior na Igreja Impactados, com mais de duas décadas de experiência ministerial. Conferencista internacional, já ministrou em mais de 40 países, impactando milhares de vidas através do poder do Espírito Santo.",
    "sameAs": [
      "https://www.facebook.com/bisporinaldosilva",
      "https://www.instagram.com/bisporinaldosilva",
      "https://www.youtube.com/bisporinaldosilva",
      "https://twitter.com/bisporinaldosilva"
    ],
    "knowsAbout": [
      "Teologia",
      "Dons Espirituais",
      "Liderança Cristã",
      "Ministério Pastoral",
      "Conferências"
    ],
    "affiliation": [
      {
        "@type": "Organization",
        "name": "Conferência Impactados",
        "url": "https://conferenciaimpactados.com.br"
      },
      {
        "@type": "Organization",
        "name": "Escola de Dons",
        "url": "https://rinaldosilva.com/escola-dons"
      }
    ]
  }
}

export const getEscolaDonsStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Escola de Dons",
    "description": "Descubra e desenvolva seus dons espirituais com o Bispo Rinaldo Silva. Curso completo com 5 módulos para transformar sua vida ministerial através do poder do Espírito Santo.",
    "courseCode": "ED-001",
    "provider": {
      "@type": "Person",
      "name": "Bispo Rinaldo Silva",
      "sameAs": "https://rinaldosilva.com"
    },
    "url": "https://rinaldosilva.com/escola-dons",
    "keywords": "dons espirituais, ministério, cura, profecia, discernimento, línguas, fé sobrenatural, milagres",
    "teaches": [
      "Dons de Revelação",
      "Dons Vocais",
      "Dons de Poder",
      "Ministério de Cura",
      "Liderança Espiritual"
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["online", "OnlineOnly"],
      "courseWorkload": "40 horas",
      "inLanguage": "pt-BR",
      "startDate": "2023-01-01",
      "endDate": "2025-12-31",
      "offers": {
        "@type": "Offer",
        "category": "Curso Online",
        "price": "97.00",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "validFrom": "2023-01-01",
        "url": "https://rinaldosilva.com/escola-dons#matricula",
        "seller": {
          "@type": "Person",
          "name": "Bispo Rinaldo Silva"
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Carlos Oliveira"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2023-10-15",
        "reviewBody": "A Escola de Dons mudou completamente minha visão ministerial. Descobri dons que nem sabia que tinha e hoje lidero um ministério de intercessão na minha igreja com mais de 50 pessoas."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mariana Santos"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2023-09-22",
        "reviewBody": "Sempre soube que tinha um chamado para trabalhar com jovens, mas não sabia como desenvolver isso. A Escola de Dons me deu as ferramentas práticas para identificar e aperfeiçoar meus dons de ensino e pastoreio."
      }
    ]
  }
}

export const getBreadcrumbStructuredData = (items: {name: string, item: string}[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.item
    }))
  }
}

export const getWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://rinaldosilva.com",
    "name": "Ministério Bispo Rinaldo Silva",
    "description": "Site oficial do Bispo Rinaldo Silva, líder da Igreja Impactados e Escola de Dons",
    "publisher": {
      "@type": "Organization",
      "name": "Ministério Bispo Rinaldo Silva",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rinaldosilva.com/placeholder.svg?key=logo",
        "width": "600",
        "height": "60"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rinaldosilva.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "pt-BR"
  }
}

export const getEventStructuredData = (event: {
  name: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  url: string;
  image?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "startDate": event.startDate,
    "endDate": event.endDate || event.startDate,
    "location": {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": event.location.split(",")[0],
        "addressRegion": event.location.split(",")[1]?.trim(),
        "addressCountry": "BR"
      }
    },
    "description": event.description,
    "url": event.url,
    "image": event.image || "https://rinaldosilva.com/placeholder.svg?key=event-default",
    "performer": {
      "@type": "Person",
      "name": "Bispo Rinaldo Silva"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Ministério Bispo Rinaldo Silva",
      "url": "https://rinaldosilva.com"
    }
  }
} 