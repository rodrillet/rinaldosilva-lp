"use client"

import React from 'react';
import { useMemo, memo, useEffect } from "react"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { facebookCAPI, FacebookCookieUtils } from "@/lib/facebook-capi-frontend"
import {
  Brain,
  CheckCircle2,
  MessageCircle,
  Users,
  Zap,
  ChevronRight,
  Star,
  Clock,
  Shield,
  Award,
  Target,
  Sparkles,
  TrendingUp,
  Crown,
  Lightbulb,
  ArrowRight,
  Check,
  Timer,
  LucideIcon,
  PlayCircle,
  ChevronDown,
  BookOpen,
  Video
} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CountdownTimer } from "@/components/countdown-timer"

// Interfaces
interface ModuleProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  description: string;
}

// Module Card Component
const ModuleCard = memo(({ title, icon: Icon, items, description, index }: ModuleProps & { index: number }) => (
  <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
    <CardContent className="p-6 space-y-4 h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#d4fb00] to-[#b8e600] flex items-center justify-center">
        <Icon className="h-6 w-6 text-black" />
      </div>
      <div>
        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Módulo {index + 1}</span>
        <h3 className="text-lg font-bold leading-tight mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
      <div className="space-y-3 flex-1">
        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Você vai dominar:</h4>
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
))

ModuleCard.displayName = "ModuleCard"



export default function EscolaDonsPG2() {
  
  // Hook para gerenciar dados de conversão avançados
  useEffect(() => {
    // Função para definir cookies de primeira parte
    const setCookie = (name: string, value: string, days: number = 365) => {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
    };

    // Função para obter cookies
    const getCookie = (name: string) => {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    };

    // Gerar ou recuperar ID único do usuário
    let userId = getCookie('fb_user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      setCookie('fb_user_id', userId);
      localStorage.setItem('user_id', userId);
    }

    // Dados de sessão
    const sessionData = {
      session_id: 'session_' + Date.now(),
      landing_page: window.location.href,
      referrer: document.referrer || 'direct',
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'none',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'none',
      utm_content: new URLSearchParams(window.location.search).get('utm_content') || 'none',
      utm_term: new URLSearchParams(window.location.search).get('utm_term') || 'none',
      browser: navigator.userAgent,
      language: navigator.language,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      device_type: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop'
    };

    // Salvar dados da sessão
    sessionStorage.setItem('session_data', JSON.stringify(sessionData));
    setCookie('fb_session_id', sessionData.session_id);

    // Enhanced Data for Conversions API
    const enhancedData = {
      user_data: {
        external_id: userId,
        client_ip_address: '', // Será preenchido pelo servidor
        client_user_agent: navigator.userAgent,
        fbp: getCookie('_fbp'), // Facebook browser ID
        fbc: getCookie('_fbc'), // Facebook click ID
      },
      custom_data: {
        content_name: 'Escola de Dons Espirituais',
        content_category: 'Educação Religiosa',
        content_type: 'product',
        value: 497.00,
        currency: 'BRL',
        predicted_ltv: 1500.00,
        ...sessionData
      },
      event_source_url: window.location.href,
      action_source: 'website'
    };

    // Armazenar dados para uso posterior
    localStorage.setItem('fb_enhanced_data', JSON.stringify(enhancedData));

    // Configurar Facebook Pixel com dados enriquecidos
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const fbq = (window as any).fbq;
      
      // Definir dados avançados do usuário
      fbq('setUserProperties', {
        external_id: userId,
        ...sessionData
      });

      // Track Lead evento personalizado com dados ricos
      fbq('trackCustom', 'EnhancedPageView', {
        ...enhancedData.custom_data,
        timestamp: new Date().toISOString(),
        page_type: 'landing_page',
        funnel_stage: 'awareness'
      });
    }

    // *** NOVA INTEGRAÇÃO: Facebook CAPI ***
    // Garantir que cookies do Facebook estejam definidos
    FacebookCookieUtils.ensureFbp();
    
    // Enviar PageView para CAPI (server-side) + Pixel (client-side)
    facebookCAPI.trackPageView({
      external_id: userId,
      // Adicionar outros dados se disponíveis (email, phone, etc.)
    }).then(response => {
      if (response.success) {
        console.log('✅ PageView enviado com sucesso para Facebook CAPI');
      } else {
        console.error('❌ Erro ao enviar PageView para CAPI:', response.error);
      }
    }).catch(error => {
      console.error('❌ Erro crítico na CAPI:', error);
    });

    // Tracking de eventos específicos da página
    const trackSpecificEvents = () => {
      // Quando o usuário rola até a seção de preço
      const priceSection = document.getElementById('investimento');
      if (priceSection) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && typeof window !== 'undefined' && (window as any).fbq) {
              (window as any).fbq('trackCustom', 'ViewPricing', {
                content_name: 'Escola de Dons Espirituais',
                value: 497.00,
                currency: 'BRL',
                section: 'pricing',
                timestamp: new Date().toISOString()
              });
            }
          });
        }, { threshold: 0.3 });
        
        observer.observe(priceSection);
      }

      // Tracking de tempo na página para diferentes funnels
      setTimeout(() => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('trackCustom', 'EngagedUser_30s', {
            content_name: 'Escola de Dons Espirituais',
            time_spent: 30,
            funnel_stage: 'interest'
          });
        }
      }, 30000);

      setTimeout(() => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('trackCustom', 'EngagedUser_60s', {
            content_name: 'Escola de Dons Espirituais',
            time_spent: 60,
            funnel_stage: 'consideration'
          });
        }
      }, 60000);

      setTimeout(() => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('trackCustom', 'HighEngagement_120s', {
            content_name: 'Escola de Dons Espirituais',
            time_spent: 120,
            funnel_stage: 'decision'
          });
        }
      }, 120000);
    };

    // Inicializar tracking específico
    trackSpecificEvents();

  }, []);

  const courseModules = useMemo(() => [
    {
      title: "Dons de Revelação",
      icon: Brain,
      items: [
        "Palavra de Sabedoria: Receba conhecimento sobrenatural para decisões divinas.",
        "Palavra de Conhecimento: Desvende mistérios e segredos ocultos para ministrar com precisão.",
        "Discernimento de Espíritos: Identifique e neutralize influências espirituais para proteger sua vida e ministério."
      ],
      description: "Receba conhecimento sobrenatural de Deus através dos dons de revelação"
    },
    {
      title: "Dons Vocais", 
      icon: MessageCircle,
      items: [
        "Dom de Profecia: Seja a voz de Deus, edifique, exorte e console com clareza.",
        "Variedade de Línguas: Manifeste o poder de Deus em oração e adoração sobrenatural.",
        "Interpretação de Línguas: Compreenda e revele as mensagens de Deus faladas em línguas."
      ],
      description: "Seja porta-voz do Espírito Santo manifestando os dons vocais"
    },
    {
      title: "Dons de Poder",
      icon: Zap,
      items: [
        "Dom da Fé: Mova montanhas e veja o impossível acontecer em sua vida.",
        "Operação de Milagres: Seja um canal para a intervenção divina em situações extraordinárias.",
        "Dons de Cura: Veja enfermos sendo curados através das suas mãos e orações."
      ],
      description: "Manifeste o poder sobrenatural de Deus em situações impossíveis"
    },
  ], [])



  return (
    <>
      {/* Microsoft Clarity Script */}
      <Script id="clarity-script" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "rxlgvp94cz");
        `}
      </Script>

      {/* Meta Pixel (Facebook Conversions API) */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          
          // Configurar Pixel ID
          fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID || '324585577142752'}');
          
          // Configurar dados avançados de matching
          fbq('dataProcessingOptions', []);
          
          // Configurar parâmetros de conversão
          fbq('set', 'autoConfig', false, '${process.env.NEXT_PUBLIC_META_PIXEL_ID || '324585577142752'}');
          
          // PageView com dados enriquecidos
          fbq('track', 'PageView', {
            content_name: 'Escola de Dons Espirituais - Landing Page',
            content_category: 'Educação Religiosa',
            value: 497.00,
            currency: 'BRL',
            predicted_ltv: 1500.00,
            page_title: document.title,
            page_url: window.location.href,
            referrer: document.referrer,
            user_agent: navigator.userAgent,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          });
        `}
      </Script>

      {/* Meta Pixel - Advanced Tracking Setup */}
      <Script id="meta-pixel-advanced" strategy="afterInteractive">
        {`
          // Função para coletar dados avançados do usuário
          function getAdvancedUserData() {
            const userData = {};
            
            // Tentar obter email de formulários ou localStorage
            const emailInputs = document.querySelectorAll('input[type="email"]');
            if (emailInputs.length > 0 && emailInputs[0].value) {
              userData.em = emailInputs[0].value.toLowerCase().trim();
            }
            
            // Tentar obter telefone
            const phoneInputs = document.querySelectorAll('input[type="tel"], input[name*="phone"], input[name*="telefone"]');
            if (phoneInputs.length > 0 && phoneInputs[0].value) {
              userData.ph = phoneInputs[0].value.replace(/[^0-9]/g, '');
            }
            
            // Dados de geolocalização (se disponível)
            if ('geolocation' in navigator) {
              navigator.geolocation.getCurrentPosition(function(position) {
                fbq('setUserProperties', {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                });
              }, function() {}, { timeout: 5000 });
            }
            
            // Informações do dispositivo
            userData.external_id = localStorage.getItem('user_id') || 
                                 sessionStorage.getItem('user_id') || 
                                 'guest_' + Date.now();
            
            return userData;
          }
          
          // Configurar dados do usuário
          setTimeout(() => {
            const userData = getAdvancedUserData();
            if (Object.keys(userData).length > 0) {
              fbq('setUserProperties', userData);
            }
          }, 1000);
          
          // Função para tracking de eventos de engajamento
          function trackEngagement() {
            let scrollDepth = 0;
            let timeOnPage = 0;
            let startTime = Date.now();
            
            // Tracking de scroll
            window.addEventListener('scroll', function() {
              const currentScroll = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
              if (currentScroll > scrollDepth && currentScroll % 25 === 0) {
                scrollDepth = currentScroll;
                fbq('trackCustom', 'ScrollDepth', {
                  scroll_depth: scrollDepth,
                  time_on_page: Math.round((Date.now() - startTime) / 1000)
                });
              }
            });
            
            // Tracking de tempo na página
            setInterval(() => {
              timeOnPage += 30;
              if (timeOnPage % 60 === 0) {
                fbq('trackCustom', 'TimeOnPage', {
                  time_spent: timeOnPage,
                  page_section: getCurrentSection()
                });
              }
            }, 30000);
          }
          
          function getCurrentSection() {
            const sections = document.querySelectorAll('section[id]');
            for (let section of sections) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                return section.id || 'unknown';
              }
            }
            return 'top';
          }
          
          // Inicializar tracking de engajamento
          trackEngagement();
          
          // Tracking de elementos específicos
          document.addEventListener('DOMContentLoaded', function() {
            // CTAs
            document.querySelectorAll('a[href="#investimento"], a[href*="hotmart.com"]').forEach(button => {
              button.addEventListener('click', function(e) {
                const buttonText = this.textContent.trim();
                const section = this.closest('section')?.id || 'unknown';
                
                // Pixel tracking (client-side)
                fbq('track', 'InitiateCheckout', {
                  content_name: 'Escola de Dons Espirituais',
                  content_category: 'Curso Online',
                  value: 497.00,
                  currency: 'BRL',
                  button_text: buttonText,
                  section: section,
                  timestamp: new Date().toISOString()
                });
                
                fbq('trackCustom', 'CTAClick', {
                  cta_text: buttonText,
                  cta_position: section,
                  value: 497.00,
                  currency: 'BRL'
                });
                
                // *** NOVA INTEGRAÇÃO: CAPI tracking (server-side) ***
                facebookCAPI.trackInitiateCheckout(497.00, 'BRL', {
                  external_id: localStorage.getItem('user_id') || sessionStorage.getItem('user_id')
                }).then(response => {
                  if (response.success) {
                    console.log('✅ InitiateCheckout enviado com sucesso para CAPI');
                  } else {
                    console.error('❌ Erro ao enviar InitiateCheckout para CAPI:', response.error);
                  }
                }).catch(error => {
                  console.error('❌ Erro crítico na CAPI (InitiateCheckout):', error);
                });
              });
            });
            
            // Seções específicas
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const sectionName = entry.target.id || 'unknown';
                  fbq('trackCustom', 'ViewSection', {
                    section_name: sectionName,
                    timestamp: new Date().toISOString()
                  });
                }
              });
            }, { threshold: 0.5 });
            
            document.querySelectorAll('section[id]').forEach(section => {
              observer.observe(section);
            });
          });
        `}
      </Script>

      {/* Meta Pixel Noscript */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID || '549718907556036'}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <main>
        {/* Hero Section - Header Principal */}
        <section id="inicio" className="relative bg-gray-900 text-white py-16 md:py-20">
          <div className="px-4 w-full">
            <div className="max-w-5xl mx-auto">
              <div className="text-center space-y-6">
                <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-2">
                  Curso do Bispo Rinaldo Silva
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Liberte Seu Potencial Divino: <span className="text-blue-400">Escola de Dons Espirituais</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                  Descubra e desenvolva os 9 dons do Espírito Santo de forma prática e bíblica, transformando sua vida e ministério.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a href="#investimento" className="w-full sm:w-auto">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-lg py-6 px-6 w-full sm:w-auto flex items-center justify-center">
                      <span className="whitespace-normal text-center">QUERO ATIVAR MEUS DONS</span>
                      <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                    </Button>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-3 text-sm text-gray-400 pt-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span>Mais de <strong>5.000</strong> alunos transformados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separador visual */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Seção de Benefícios Principais */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Conteúdo Bíblico Sólido</h3>
                  <p className="text-gray-600">Fundamentos teológicos e práticos sobre os 9 dons do Espírito Santo</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Aulas Práticas</h3>
                  <p className="text-gray-600">Aprenda como ativar e operar nos dons com exercícios e demonstrações</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Acesso Vitalício</h3>
                  <p className="text-gray-600">Estude no seu ritmo com acesso permanente a todas as aulas e materiais</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2: Prova Social */}
        <section id="depoimentos" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformações Reais</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Veja como a Escola de Dons Espirituais tem impactado vidas e ministérios ao redor do Brasil
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Depoimento 1 */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="border-2 border-blue-100 w-12 h-12">
                      <AvatarImage src="/assets/testimonial-1.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">João Damasceno</h4>
                      <p className="text-sm text-gray-500">Pastor em São Paulo</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Depois do curso, comecei a operar nos dons de palavra de conhecimento e cura com muito mais confiança. Nossos cultos foram transformados!"
                  </p>
                  <div className="text-sm font-medium text-blue-600">
                    Resultado: Aumento de 40% na frequência dos cultos
                  </div>
                </div>
                
                {/* Depoimento 2 */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="border-2 border-blue-100 w-12 h-12">
                      <AvatarImage src="/assets/testimonial-2.jpg" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Maria Cristina</h4>
                      <p className="text-sm text-gray-500">Líder de Célula em Fortaleza</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Eu tinha medo de profetizar, mas o curso me deu base bíblica e confiança. Hoje, vejo vidas sendo tocadas através do dom da profecia em minha célula."
                  </p>
                  <div className="text-sm font-medium text-blue-600">
                    Resultado: 12 novas conversões em 3 meses
                  </div>
                </div>
                
                {/* Depoimento 3 */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="border-2 border-blue-100 w-12 h-12">
                      <AvatarImage src="/assets/testimonial-3.jpg" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">André Santos</h4>
                      <p className="text-sm text-gray-500">Evangelista em Recife</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "O ensino sobre discernimento de espíritos revolucionou meu ministério de libertação. Agora consigo identificar as raízes espirituais com clareza."
                  </p>
                  <div className="text-sm font-medium text-blue-600">
                    Resultado: Eficácia de 90% nos atendimentos de libertação
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <a href="#investimento" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                  <span>Quero resultados como estes</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: Problema e Solução */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Coluna do Problema */}
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    O Problema
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Por que muitos cristãos não operam nos dons?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Falta de conhecimento bíblico</h3>
                        <p className="text-gray-600">Muitos não entendem o que a Bíblia realmente ensina sobre os dons espirituais</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Medo e insegurança</h3>
                        <p className="text-gray-600">Receio de errar ou ser mal interpretado ao manifestar os dons espirituais</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Falta de orientação prática</h3>
                        <p className="text-gray-600">Ausência de mentores que ensinem como desenvolver e exercitar os dons</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Coluna da Solução */}
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    A Solução
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">A Escola de Dons Espirituais</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Fundamento bíblico sólido</h3>
                        <p className="text-gray-600">Ensino teológico profundo sobre cada um dos 9 dons do Espírito Santo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Exercícios práticos guiados</h3>
                        <p className="text-gray-600">Atividades passo a passo para desenvolver cada dom com confiança</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Mentoria especializada</h3>
                        <p className="text-gray-600">Acompanhamento com o Bispo Rinaldo Silva, especialista em dons espirituais</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Módulos do Curso */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Você Vai Aprender</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Um programa completo com 9 módulos práticos sobre cada dom do Espírito Santo
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Módulo 1 */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Palavra de Sabedoria</h3>
                  <p className="text-gray-600 mb-4">
                    Como receber direção divina sobrenatural para situações específicas e tomar decisões com sabedoria celestial.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Identificar a voz de Deus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Exercícios práticos de escuta</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Casos reais de aplicação</span>
                    </li>
                  </ul>
                </div>
                
                {/* Módulo 2 */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Palavra de Conhecimento</h3>
                  <p className="text-gray-600 mb-4">
                    Como receber revelações sobrenaturais sobre fatos, circunstâncias ou pessoas que não poderiam ser conhecidos naturalmente.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Reconhecer impressões divinas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Interpretação de visões</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Ministração com precisão</span>
                    </li>
                  </ul>
                </div>
                
                {/* Módulo 3 */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Discernimento de Espíritos</h3>
                  <p className="text-gray-600 mb-4">
                    Como identificar a origem espiritual de manifestações, pessoas e situações para ministrar com precisão.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Identificar influências espirituais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Libertação com autoridade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Proteção espiritual</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <a href="#investimento" className="inline-block">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-lg py-6 px-8 flex items-center justify-center">
                    <span>QUERO ACESSAR TODOS OS MÓDULOS</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Investimento */}
        <section id="investimento" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Invista no Seu Desenvolvimento Espiritual</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Acesso vitalício a todo o conteúdo por um valor acessível
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100">
                <div className="bg-blue-600 text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">Escola de Dons Espirituais</h3>
                  <p className="text-lg mt-2">Curso Completo com Acesso Vitalício</p>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-center items-center mb-6">
                    <div className="text-center">
                      <div className="text-gray-400 line-through text-lg">De R$ 497,00 por</div>
                      <div className="text-4xl md:text-5xl font-bold text-blue-600 flex items-center justify-center">
                        R$ 297<span className="text-xl">,00</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">ou 12x de R$ 29,70</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Acesso imediato a todos os 9 módulos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Exercícios práticos e material de apoio</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Certificado de conclusão</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Suporte exclusivo com o Bispo Rinaldo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Bônus: Grupo VIP, aulas extras e e-books</span>
                    </div>
                  </div>
                  
                  <a href="https://pay.hotmart.com/X99708135T" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg w-full py-4 rounded-lg flex items-center justify-center">
                      <span>GARANTIR MINHA VAGA AGORA</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  
                  <div className="mt-6 flex flex-col items-center justify-center gap-3">
                    <div className="text-sm text-gray-500">Pagamento seguro via:</div>
                    <div className="flex gap-4">
                      <div className="w-10 h-6 bg-white rounded flex items-center justify-center border border-gray-200 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a1f71" className="w-full h-full">
                          <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 0 1 .894.764l.817 4.338l2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972c.006-.269.262-.555.822-.628a3.66 3.66 0 0 1 1.913.336l.34-1.59a5.207 5.207 0 0 0-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479c-.012 1.079.963 1.68 1.698 2.04c.756.367 1.01.603 1.006.931c-.005.504-.602.725-1.16.734c-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398c2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 0 0-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815l.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z"/>
                        </svg>
                      </div>
                      <div className="w-10 h-6 bg-white rounded flex items-center justify-center border border-gray-200 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 199" className="w-full h-full">
                          <path fill="#FF5F00" d="M93.298 16.903h69.15v124.251h-69.15z"/>
                          <path fill="#EB001B" d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029c0 43.685 35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125Z"/>
                          <path fill="#F79E1B" d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125c0-25.245-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029Z"/>
                        </svg>
                      </div>
                      <div className="w-10 h-6 bg-white rounded flex items-center justify-center border border-gray-200 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4BB8A6" className="w-full h-full">
                          <path d="M5.283 18.36a3.505 3.505 0 0 0 2.493-1.032l3.6-3.6a.684.684 0 0 1 .946 0l3.613 3.613a3.504 3.504 0 0 0 2.493 1.032h.71l-4.56 4.56a3.647 3.647 0 0 1-5.156 0L4.85 18.36ZM18.428 5.627a3.505 3.505 0 0 0-2.493 1.032l-3.613 3.614a.67.67 0 0 1-.946 0l-3.6-3.6A3.505 3.505 0 0 0 5.283 5.64h-.434l4.573-4.572a3.646 3.646 0 0 1 5.156 0l4.559 4.559ZM1.068 9.422L3.79 6.699h1.492a2.483 2.483 0 0 1 1.744.722l3.6 3.6a1.73 1.73 0 0 0 2.443 0l3.614-3.613a2.482 2.482 0 0 1 1.744-.723h1.767l2.737 2.737a3.646 3.646 0 0 1 0 5.156l-2.736 2.736h-1.768a2.482 2.482 0 0 1-1.744-.722l-3.613-3.613a1.77 1.77 0 0 0-2.444 0l-3.6 3.6a2.483 2.483 0 0 1-1.744.722H3.791l-2.723-2.723a3.646 3.646 0 0 1 0-5.156"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Garantia */}
                <div className="bg-blue-50 p-6 border-t border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Garantia de 7 Dias</h4>
                      <p className="text-gray-600">
                        Seu investimento é sem riscos! Se em até 7 dias você não estiver satisfeito, 
                        devolvemos 100% do seu dinheiro. Sem perguntas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Mentor */}
        <section id="mentor" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/rinaldo-silva-profile.jpeg"
                      alt="Bispo Rinaldo Silva - Especialista em Dons Espirituais"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center 2%" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                    20+ Anos de Experiência
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">Bispo Rinaldo Silva</h2>
                  <p className="text-lg text-gray-600">Especialista em Dons Espirituais • Mais de 20 Anos de Experiência</p>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Ministro internacionalmente reconhecido</strong>, com mais de duas décadas de experiência, tendo ministrado em mais de 45 países ao redor do mundo.
                    </p>
                    <p>
                      O Bispo Rinaldo Silva é um especialista em dons espirituais e manifestações sobrenaturais, com milhares de testemunhos de pessoas que foram <strong>transformadas, curadas e libertas</strong> através de seu ministério.
                    </p>
                    <p className="bg-blue-50 p-4 rounded-lg border border-blue-100 font-medium">
                      Esta é sua oportunidade única de ter acesso a 20+ anos de experiência e capacitação de um dos maiores especialistas em dons espirituais.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-blue-600">45+</div>
                      <p className="text-sm text-gray-600">Países Impactados</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-blue-600">20+</div>
                      <p className="text-sm text-gray-600">Anos de Ministério</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-blue-600">1000+</div>
                      <p className="text-sm text-gray-600">Conferências</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-blue-600">5000+</div>
                      <p className="text-sm text-gray-600">Líderes Capacitados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Tire suas dúvidas sobre a Escola de Dons Espirituais
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-2">Quando as aulas começam?</h3>
                  <p className="text-gray-600">
                    Você terá acesso imediato a todo o conteúdo assim que sua inscrição for confirmada. O curso é 100% online e você pode estudar no seu próprio ritmo.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-2">Como recebo o certificado?</h3>
                  <p className="text-gray-600">
                    Após a conclusão dos módulos, seu certificado será disponibilizado em sua área de aluno para download. Você poderá imprimi-lo ou compartilhá-lo digitalmente.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-2">Preciso ter experiência prévia com dons espirituais?</h3>
                  <p className="text-gray-600">
                    Não! O curso é completo e guiado, ideal tanto para iniciantes quanto para quem deseja aprofundar seu conhecimento. Todos os conceitos são explicados desde o básico.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-2">Quais são as formas de pagamento?</h3>
                  <p className="text-gray-600">
                    Aceitamos cartão de crédito, boleto bancário e PIX através da plataforma Hotmart com total segurança. Você pode parcelar em até 12x no cartão de crédito.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-2">Por quanto tempo terei acesso ao curso?</h3>
                  <p className="text-gray-600">
                    O acesso é vitalício! Uma vez adquirido o curso, você poderá acessar o conteúdo quando e quantas vezes quiser, sem limitação de tempo.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <a href="#investimento" className="inline-block">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-lg py-6 px-8 flex items-center justify-center">
                    <span>QUERO ME INSCREVER AGORA</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    RS
                  </div>
                  <span className="font-bold text-xl">Escola de Dons Espirituais</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a href="#inicio" className="text-gray-300 hover:text-white">Início</a>
                  <a href="#depoimentos" className="text-gray-300 hover:text-white">Depoimentos</a>
                  <a href="#investimento" className="text-gray-300 hover:text-white">Investimento</a>
                  <a href="#mentor" className="text-gray-300 hover:text-white">Sobre o Mentor</a>
                </div>
                
                <div className="text-center text-gray-400 text-sm">
                  <p>© 2024 Escola de Dons Espirituais. Todos os direitos reservados.</p>
                  <p className="mt-1">Um curso do Bispo Rinaldo Silva</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
      </div>
    </>
  )
} 