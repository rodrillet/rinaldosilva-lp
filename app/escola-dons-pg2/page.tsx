"use client"

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
  LucideIcon
} from "lucide-react"

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
          fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID || '549718907556036'}');
          
          // Configurar dados avançados de matching
          fbq('dataProcessingOptions', []);
          
          // Configurar parâmetros de conversão
          fbq('set', 'autoConfig', false, '${process.env.NEXT_PUBLIC_META_PIXEL_ID || '549718907556036'}');
          
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
        {/* Seção 1: Headline e Imediato Benefício com CTA */}
        <section id="inicio" className="relative py-8 md:py-12 lg:py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/banner-hero.jpeg"
              alt="Liberte Seu Potencial Divino"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
          </div>
          
          <div className="relative z-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-[700px] mx-auto space-y-6 text-white text-center">
                {/* Headline Principal */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                  Liberte Seu <span className="text-[#d4fb00]">Potencial Divino</span>: Descubra e Ative Seus Dons Espirituais e Transforme Sua Vida e Ministério <span className="text-[#d4fb00]">AGORA!</span>
                </h1>

                {/* Problema Direto */}
                <div className="space-y-3">
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    Sente-se estagnado, sem saber como utilizar o poder do Espírito Santo em sua vida?
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Muitos cristãos anseiam por manifestar os dons, mas não encontram o caminho claro. Chega de incertezas!
                  </p>
                </div>

                {/* CTA Principal */}
                <div className="pt-6 flex justify-center">
                  <a href="#investimento">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-8 py-4 text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
                      SIM! QUERO ATIVAR MEUS DONS E GARANTIR MINHA VAGA!
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2: Credibilidade e Prova Social */}
        <section className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-4xl mx-auto mb-8 space-y-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-gray-900 leading-tight">
                  Junte-se a Mais de <span className="text-[#d4fb00] bg-gray-900 px-2 rounded">5.000 Alunos Transformados</span> – Resultados Comprovados!
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Com mais de 20 anos de experiência e impacto em mais de 45 países, o Bispo Rinaldo Silva já capacitou milhares de pessoas a viverem uma vida sobrenatural.
                </p>
                <div className="flex justify-center items-center gap-2 text-sm">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-2 text-lg text-gray-700 font-bold">4.9/5</span>
                  <span className="text-gray-500 text-xs">• 1.247 avaliações</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-[#d4fb00]">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base italic">
                      "Minha vida mudou completamente! Pude ver curas e milagres após aplicar os ensinamentos. Meu ministério nunca mais foi o mesmo."
                    </p>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-green-700 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full">Ministério Transformado</span>
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t">
                      <div className="w-10 h-10 rounded-full bg-[#d4fb00] flex items-center justify-center text-black font-bold text-sm">
                        CO
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base">Pastor Carlos Oliveira</h4>
                        <p className="text-gray-600 text-sm">Pastor há 15 anos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-l-[#d4fb00]">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base italic">
                      "Descobri meus dons em 30 dias e hoje impacto minha comunidade. Os ensinamentos são claros e poderosos!"
                    </p>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-green-700 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full">50 jovens impactados</span>
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t">
                      <div className="w-10 h-10 rounded-full bg-[#d4fb00] flex items-center justify-center text-black font-bold text-sm">
                        MS
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base">Mariana Santos</h4>
                        <p className="text-gray-600 text-sm">Líder de Jovens</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: O Problema e a Solução Única */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* O Problema */}
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-red-600 text-white font-semibold text-sm">
                    ⚠️ O DESAFIO
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    Por que Seus <span className="text-red-400">Dons Estão Adormecidos?</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Talvez você sinta um chamado, mas não sabe como manifestar o poder de Deus. A falta de conhecimento e direcionamento pode impedir que você viva o extraordinário.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-300">Incerteza sobre seus dons espirituais</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-300">Falta de direcionamento prático</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-300">Ministério sem manifestações sobrenaturais</span>
                    </div>
                  </div>
              </div>

                {/* A Solução */}
                <div className="space-y-6 bg-gradient-to-br from-[#d4fb00]/10 to-green-500/10 p-6 md:p-8 rounded-2xl border border-[#d4fb00]/30">
                  <div className="inline-block px-4 py-2 rounded-full bg-[#d4fb00] text-black font-semibold text-sm">
                    ✅ A SOLUÇÃO DEFINITIVA
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    A <span className="text-[#d4fb00]">Escola de Dons Espirituais</span>
                  </h2>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    O único curso completo no Brasil que te capacita a descobrir, desenvolver e operar nos 9 Dons do Espírito Santo de forma prática, bíblica e com resultados reais.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <span className="text-white font-medium">Metodologia comprovada há 20+ anos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <span className="text-white font-medium">Resultados em 30 dias ou menos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#d4fb00] mt-0.5 shrink-0" />
                      <span className="text-white font-medium">Suporte direto do especialista</span>
                    </div>
                  </div>
                  <div className="pt-4">
                  <a href="#investimento">
                      <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-base font-bold rounded-xl w-full">
                        QUERO A SOLUÇÃO AGORA!
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: O Que Você Vai Dominar – Módulos e Benefícios */}
        <section id="conteudo" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-4xl mx-auto mb-8 space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-900 leading-tight">
                  Domine os <span className="text-[#d4fb00] bg-gray-900 px-2 rounded">9 Dons Espirituais Completos</span>: Seu Caminho para o Sobrenatural
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Um programa estruturado e prático para você descobrir, desenvolver e operar em todos os dons do Espírito Santo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {courseModules.map((module, index) => (
                  <ModuleCard key={index} {...module} index={index} />
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#d4fb00]">20+</div>
                  <div className="text-gray-600 text-xs">Horas de Conteúdo</div>
                </div>
                <div className="text-center bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#d4fb00]">50+</div>
                  <div className="text-gray-600 text-xs">Aulas Práticas</div>
                </div>
                <div className="text-center bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#d4fb00]">9</div>
                  <div className="text-gray-600 text-xs">Dons Completos</div>
                </div>
                <div className="text-center bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#d4fb00]">∞</div>
                  <div className="text-gray-600 text-xs">Acesso Vitalício</div>
                </div>
              </div>

              <div className="text-center bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Pronto para descobrir e desenvolver seus dons espirituais?
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Não deixe seus dons adormecidos. Comece sua transformação hoje mesmo!
                </p>
                <div className="flex justify-center">
                  <a href="#investimento">
                    <Button className="bg-[#d4fb00] text-black hover:bg-[#c0e500] px-6 py-3 text-sm font-bold rounded-xl">
                    QUERO SER ALUNO!
                      <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Transformações Garantidas – Benefícios Pessoais e Ministeriais */}
        <section className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-4xl mx-auto mb-8 space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-900 leading-tight">
                  O Que Você <span className="text-[#d4fb00] bg-gray-900 px-2 rounded">Conquistará</span> na Escola de Dons Espirituais:
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Benefício 1 */}
                <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg font-bold leading-tight text-gray-900">
                          ✅ Descubra Seus Dons em Apenas 30 Dias
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Identifique quais dos 9 dons você possui e como operá-los com confiança e precisão.
                        </p>
                        <div className="bg-green-100 border border-green-200 rounded-lg p-3">
                          <span className="text-green-800 font-semibold text-sm">
                            Resultado: Clareza total sobre seu chamado espiritual
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefício 2 */}
                <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg font-bold leading-tight text-gray-900">
                          ✅ Transforme Sua Vida Espiritual
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Experimente uma intimidade mais profunda e palpável com Deus e o Espírito Santo.
                        </p>
                        <div className="bg-blue-100 border border-blue-200 rounded-lg p-3">
                          <span className="text-blue-800 font-semibold text-sm">
                            Resultado: Relacionamento com Deus nunca mais será o mesmo
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefício 3 */}
                <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg font-bold leading-tight text-gray-900">
                          ✅ Impacte Vidas ao Seu Redor
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Torne-se um instrumento de transformação em sua comunidade e igreja, vendo milagres e libertações acontecerem através do seu ministério.
                        </p>
                        <div className="bg-purple-100 border border-purple-200 rounded-lg p-3">
                          <span className="text-purple-800 font-semibold text-sm">
                            Resultado: Veja milagres acontecendo através do seu ministério
                          </span>
                        </div>
                      </div>
              </div>
                  </CardContent>
                </Card>

                {/* Benefício 4 */}
                <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                        <Crown className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg font-bold leading-tight text-gray-900">
                          ✅ Lidere com Autoridade Sobrenatural
                </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Conduza seu ministério com sabedoria divina e confiança sobrenatural.
                        </p>
                        <div className="bg-orange-100 border border-orange-200 rounded-lg p-3">
                          <span className="text-orange-800 font-semibold text-sm">
                            Resultado: Torne-se referência espiritual na sua comunidade
                          </span>
                        </div>
                      </div>
                </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>



        {/* Seção 6: A Oferta Imperdível com Urgência e Escassez – Com Preço Visível */}
        <section id="investimento" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="px-4">
            <div className="max-w-3xl mx-auto">
              {/* Badge de Urgência */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white font-bold text-sm animate-pulse">
                  <Clock className="h-4 w-4" />
                  <span>OFERTA ESPECIAL DE LANÇAMENTO – ÚLTIMA TURMA DE 2024!</span>
                </div>
              </div>

              {/* Card Principal */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-center border-4 border-[#d4fb00]">
                {/* Preço */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">De R$ 997,00 por apenas:</div>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-gray-500 line-through">R$ 997,00</span>
                    <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full font-bold">51% OFF</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-[#d4fb00] bg-clip-text text-transparent mb-2">
                    R$ 497,00
                  </div>
                  <div className="text-lg text-gray-600 font-semibold">Pagamento único • Sem mensalidades</div>
                  </div>

                {/* Urgência */}
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Timer className="h-6 w-6 text-red-600 mt-0.5 shrink-0" />
                    <div className="text-left">
                      <span className="font-bold text-red-700 text-lg block mb-1">ATENÇÃO:</span>
                      <span className="text-red-600 text-base block">
                        Esta oferta exclusiva e o preço especial são válidos SOMENTE ATÉ <strong>14/06/2025</strong>.
                        Restam apenas <strong>12 VAGAS</strong> para esta turma. Não perca esta oportunidade única!
                    </span>
                  </div>
                  </div>
                  </div>

                {/* O que inclui */}
                <div className="bg-gray-50 p-6 rounded-xl mb-6 text-left">
                  <h4 className="font-bold text-gray-900 text-lg mb-4 text-center">Ao Inscrever-se AGORA, você terá:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-medium">Acesso Vitalício a todo o conteúdo completo do curso</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-medium">3 Módulos Completos e Estruturados para seu aprendizado</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-medium">Certificado de Conclusão para validar sua capacitação</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-medium">Suporte Exclusivo direto com o Bispo Rinaldo para tirar suas dúvidas</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-medium">Bônus Exclusivos (Grupo VIP, aulas extras, e-books)</span>
                    </div>
                  </div>
                </div>

                {/* CTA Principal */}
                <div className="mb-6">
                  <a href="https://pay.hotmart.com/X99708135T" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-green-600 to-[#d4fb00] hover:from-green-700 hover:to-[#c0e500] text-black font-bold text-lg px-8 py-4 w-full rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                      GARANTIR MINHA VAGA AGORA E COMEÇAR A TRANSFORMAÇÃO!
                      <ChevronRight className="ml-2 h-6 w-6" />
                    </Button>
                  </a>
                </div>

                {/* Formas de pagamento */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-sm text-gray-500">Pagamento seguro via:</div>
                  <div className="flex gap-3">
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

              {/* Seção 7: Seu Investimento é Sem Riscos – Garantia */}
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8 md:p-10 mt-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Experimente Sem Preocupações: <span className="text-[#d4fb00]">Sua Satisfação é Garantida!</span>
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 text-base leading-relaxed text-center">
                  Estamos tão confiantes na qualidade e no poder transformador da Escola de Dons Espirituais que oferecemos uma garantia incondicional de 7 dias.
                </p>

                <p className="text-gray-300 mb-6 text-base leading-relaxed text-center">
                  Se por qualquer motivo você não estiver 100% satisfeito, basta enviar um e-mail dentro de 7 dias após a compra, e reembolsaremos 100% do valor investido, sem perguntas. <span className="text-[#d4fb00] font-bold">Seu risco é ZERO!</span>
                </p>

                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-green-600 to-[#d4fb00] rounded-full p-4">
                    <Shield className="h-12 w-12 text-black" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-green-600 to-[#d4fb00] text-black px-6 py-3 rounded-full font-bold text-lg">
                    🛡️ GARANTIA INCONDICIONAL DE 7 DIAS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 8: Conheça Seu Mentor – Autoridade e Conexão */}
        <section id="mentor" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-4xl mx-auto mb-8 space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-900 leading-tight">
                  Aprenda com Quem <span className="text-[#d4fb00] bg-gray-900 px-2 rounded">Realmente Sabe</span>: Bispo Rinaldo Silva
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#d4fb00]/30 to-transparent rounded-2xl"></div>
                  <Image
                    src="/rinaldo-silva-profile.jpeg"
                      alt="Bispo Rinaldo Silva - Especialista em Dons Espirituais"
                    fill
                      className="object-cover"
                    style={{ objectPosition: "center 2%" }}
                      sizes="(max-width: 1024px) 320px, 400px"
                  />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#d4fb00] text-black px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                    20+ Anos de Experiência
                  </div>
                </div>

                <div className="space-y-6 text-center lg:text-left">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Bispo Rinaldo Silva</h3>
                    <p className="text-lg text-gray-600 font-medium">Especialista em Dons Espirituais • Mais de 20 Anos de Experiência</p>
                  </div>

                  <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                    <p>
                      <strong>Ministro internacionalmente reconhecido</strong>, com mais de duas décadas de experiência, tendo ministrado em mais de 45 países ao redor do mundo. O Bispo Rinaldo Silva é um especialista em dons espirituais e manifestações sobrenaturais, com milhares de testemunhos de pessoas que foram <strong>transformadas, curadas e libertas</strong> através de seu ministério.
                    </p>
                    <p className="text-[#d4fb00] bg-gray-900 px-4 py-3 rounded-xl font-semibold text-center">
                      Esta é sua oportunidade única de ter acesso a 20+ anos de experiência e capacitação de um dos maiores especialistas em dons espirituais.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[
                      { number: "45+", label: "Países Impactados", icon: Users },
                      { number: "20+", label: "Anos de Ministério", icon: Award },
                      { number: "1000+", label: "Conferências", icon: Lightbulb },
                      { number: "5000+", label: "Líderes Capacitados", icon: TrendingUp },
                    ].map((stat, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl text-center border-2 border-gray-200 shadow-lg hover:border-[#d4fb00] transition-all duration-300">
                        <stat.icon className="h-6 w-6 mx-auto mb-2 text-[#d4fb00]" />
                        <div className="text-xl font-bold text-gray-900">{stat.number}</div>
                        <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 9: Última Chamada para Ação e Perguntas Frequentes (FAQ) */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              {/* Última Chamada */}
              <div className="text-center mb-12 space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-red-400">Não Deixe Seus Dons Adormecidos!</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Esta é a última chance em 2024 de se capacitar e transformar vidas. Oportunidades como esta são raras e as vagas são limitadas.
                </p>
                <p className="text-base text-gray-400 leading-relaxed">
                  Clique no botão abaixo e comece sua jornada sobrenatural hoje mesmo!
                </p>
                <div className="pt-4">
                  <a href="#investimento">
                    <Button className="bg-gradient-to-r from-[#d4fb00] to-green-500 hover:from-green-500 hover:to-[#d4fb00] text-black font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                      SIM! QUERO ME INSCREVER NA ESCOLA DE DONS AGORA!
                      <Zap className="ml-2 h-6 w-6" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#d4fb00]">
                  Perguntas Frequentes (FAQ)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* FAQ 1 */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h4 className="font-bold text-[#d4fb00] text-lg mb-3">
                      Quando as aulas começam?
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Você terá acesso imediato a todo o conteúdo assim que sua inscrição for confirmada!
                    </p>
                  </div>

                  {/* FAQ 2 */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h4 className="font-bold text-[#d4fb00] text-lg mb-3">
                      Como recebo o certificado?
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Após a conclusão dos módulos, seu certificado será disponibilizado em sua área de aluno para download.
                    </p>
                  </div>

                  {/* FAQ 3 */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h4 className="font-bold text-[#d4fb00] text-lg mb-3">
                      Preciso ter experiência prévia com dons espirituais?
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Não! O curso é completo e guiado, ideal tanto para iniciantes quanto para quem deseja aprofundar seu conhecimento.
                    </p>
                  </div>

                  {/* FAQ 4 */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h4 className="font-bold text-[#d4fb00] text-lg mb-3">
                      Quais são as formas de pagamento?
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Aceitamos cartão de crédito, boleto bancário e PIX através da plataforma Hotmart com total segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Simples */}
      <footer className="bg-black text-white py-6">
        <div className="px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#d4fb00] flex items-center justify-center text-black text-xs font-bold">
                RS
              </div>
              <span className="font-bold text-sm">Escola de Dons Espirituais</span>
            </div>
            <p className="text-gray-400 text-xs">
              © 2024 Escola de Dons Espirituais. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
} 