"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { trackEvent, checkGTMStatus, injectTestEvent } from "@/lib/tracking";

export default function DebugPage() {
  const [status, setStatus] = useState<any>(null);
  const [eventSent, setEventSent] = useState(false);

  useEffect(() => {
    // Verificar o status do GTM quando a página carrega
    const checkStatus = () => {
      const gtmStatus = checkGTMStatus();
      setStatus(gtmStatus);
    };

    // Verificar após um pequeno atraso para garantir que o GTM tenha tempo de carregar
    setTimeout(checkStatus, 1000);
  }, []);

  const handleSendTestEvent = () => {
    const result = injectTestEvent();
    setEventSent(result);
    
    // Atualizar o status após enviar o evento
    setTimeout(() => {
      setStatus(checkGTMStatus());
    }, 500);
  };

  const handleTrackButtonClick = () => {
    trackEvent('button_click', {
      button_id: 'test_button',
      button_text: 'Testar Evento Botão'
    });
    
    // Atualizar o status após enviar o evento
    setTimeout(() => {
      setStatus(checkGTMStatus());
    }, 500);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Página de Debug do Google Tag Manager</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Status do GTM</h2>
          
          <div className="mb-4">
            <Button onClick={() => setStatus(checkGTMStatus())}>
              Verificar Status
            </Button>
          </div>
          
          {status && (
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Carregado:</span> 
                <span className={status.loaded ? "text-green-600" : "text-red-600"}>
                  {status.loaded ? " Sim" : " Não"}
                </span>
              </div>
              
              {status.dataLayer && (
                <div>
                  <h3 className="font-semibold">DataLayer:</h3>
                  <ul className="list-disc pl-6">
                    <li>Existe: {status.dataLayer.exists ? "Sim" : "Não"}</li>
                    <li>Eventos: {status.dataLayer.events}</li>
                  </ul>
                </div>
              )}
              
              {status.dom && (
                <div>
                  <h3 className="font-semibold">DOM:</h3>
                  <ul className="list-disc pl-6">
                    <li>Script: {status.dom.scriptExists ? "Encontrado" : "Não encontrado"}</li>
                    <li>Noscript: {status.dom.noscriptExists ? "Encontrado" : "Não encontrado"}</li>
                  </ul>
                </div>
              )}
              
              <div>
                <h3 className="font-semibold">Objetos GTM na Janela:</h3>
                <span>{status.gtmObjectsExist ? "Encontrados" : "Não encontrados"}</span>
              </div>
              
              {status.error && (
                <div className="text-red-600">
                  <h3 className="font-semibold">Erro:</h3>
                  <p>{status.error}</p>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Testes de Evento</h2>
          
          <div className="space-y-4">
            <div>
              <Button onClick={handleSendTestEvent} className="mr-2">
                Enviar Evento de Teste
              </Button>
              
              {eventSent && (
                <span className="text-green-600">Evento enviado!</span>
              )}
            </div>
            
            <div>
              <Button onClick={handleTrackButtonClick}>
                Testar Evento Botão
              </Button>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Conteúdo do DataLayer:</h3>
            <div className="p-4 bg-gray-100 rounded overflow-auto max-h-64">
              <pre className="text-xs">
                {status?.dataLayer?.content ? JSON.stringify(JSON.parse(status.dataLayer.content), null, 2) : "Carregando..."}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 