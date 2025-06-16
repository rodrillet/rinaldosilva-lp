/**
 * Script de Teste para Facebook Conversions API
 * 
 * Este script testa a configuração e funcionamento da CAPI
 * Execute com: node scripts/test-facebook-capi.js
 */

const axios = require('axios');
require('dotenv').config({ path: '.env.local' });

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const API_ENDPOINT = `${BASE_URL}/api/facebook-events`;

// Cores para console
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

// Teste 1: Conectividade e Configuração
async function testConnectivity() {
  log(colors.blue, '\n🔧 Teste 1: Conectividade e Configuração');
  
  try {
    const response = await axios.get(API_ENDPOINT);
    const data = response.data;
    
    if (data.status === 'ok') {
      log(colors.green, '✅ Conectividade: OK');
      log(colors.green, `✅ Configuração: ${data.config_valid ? 'Válida' : 'Inválida'}`);
      log(colors.green, `✅ Teste de Conexão: ${data.connection_test?.success ? 'Sucesso' : 'Falhou'}`);
      return true;
    } else {
      log(colors.red, '❌ Falha na conectividade');
      console.log('Detalhes:', data);
      return false;
    }
  } catch (error) {
    log(colors.red, '❌ Erro de conectividade:', error.message);
    return false;
  }
}

// Teste 2: Envio de Evento PageView
async function testPageView() {
  log(colors.blue, '\n📄 Teste 2: Evento PageView');
  
  const testData = {
    event_name: 'PageView',
    event_id: `test_pageview_${Date.now()}`,
    event_source_url: 'https://example.com/test',
    user_data: {
      external_id: 'test_user_123',
      email: 'test@example.com',
      phone: '+5511999999999',
      first_name: 'João',
      last_name: 'Silva',
      city: 'São Paulo',
      state: 'SP',
      zip_code: '01234567',
      country: 'BR'
    },
    custom_data: {
      content_name: 'Página de Teste',
      content_category: 'Teste',
      value: 0,
      currency: 'BRL'
    },
    timestamp: Date.now()
  };

  try {
    const response = await axios.post(API_ENDPOINT, testData, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Test-Script/1.0 (Node.js)'
      }
    });

    if (response.data.success) {
      log(colors.green, '✅ PageView enviado com sucesso');
      if (response.data.facebook_response) {
        log(colors.green, `📊 Eventos recebidos: ${response.data.facebook_response.events_received}`);
        log(colors.green, `🔍 Trace ID: ${response.data.facebook_response.fbtrace_id}`);
      }
      return true;
    } else {
      log(colors.red, '❌ Falha no envio do PageView');
      console.log('Erro:', response.data.error);
      return false;
    }
  } catch (error) {
    log(colors.red, '❌ Erro no PageView:', error.response?.data || error.message);
    return false;
  }
}

// Teste 3: Envio de Evento InitiateCheckout
async function testInitiateCheckout() {
  log(colors.blue, '\n🛒 Teste 3: Evento InitiateCheckout');
  
  const testData = {
    event_name: 'InitiateCheckout',
    event_id: `test_checkout_${Date.now()}`,
    event_source_url: 'https://example.com/checkout',
    user_data: {
      external_id: 'test_user_456',
      email: 'comprador@example.com',
      phone: '+5511888888888',
      fbc: 'fb.1.1234567890.test_fbc',
      fbp: 'fb.1.1234567890.test_fbp'
    },
    custom_data: {
      content_name: 'Escola de Dons Espirituais',
      content_category: 'Curso Online',
      value: 497.00,
      currency: 'BRL',
      content_type: 'product'
    },
    timestamp: Date.now()
  };

  try {
    const response = await axios.post(API_ENDPOINT, testData, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Test-Script/1.0 (Node.js)',
        'X-Forwarded-For': '192.168.1.100',
        'X-Real-IP': '203.0.113.195'
      }
    });

    if (response.data.success) {
      log(colors.green, '✅ InitiateCheckout enviado com sucesso');
      if (response.data.facebook_response) {
        log(colors.green, `📊 Eventos recebidos: ${response.data.facebook_response.events_received}`);
        log(colors.green, `🔍 Trace ID: ${response.data.facebook_response.fbtrace_id}`);
      }
      return true;
    } else {
      log(colors.red, '❌ Falha no envio do InitiateCheckout');
      console.log('Erro:', response.data.error);
      return false;
    }
  } catch (error) {
    log(colors.red, '❌ Erro no InitiateCheckout:', error.response?.data || error.message);
    return false;
  }
}

// Teste 4: Envio de Evento Lead
async function testLead() {
  log(colors.blue, '\n📝 Teste 4: Evento Lead');
  
  const testData = {
    event_name: 'Lead',
    event_id: `test_lead_${Date.now()}`,
    event_source_url: 'https://example.com/lead-form',
    user_data: {
      external_id: 'test_lead_789',
      email: 'lead@example.com',
      phone: '+5511777777777',
      first_name: 'Maria',
      last_name: 'Santos'
    },
    custom_data: {
      content_name: 'Lead Escola de Dons',
      content_category: 'Lead Form',
      content_type: 'form'
    },
    timestamp: Date.now()
  };

  try {
    const response = await axios.post(API_ENDPOINT, testData, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Test Browser)'
      }
    });

    if (response.data.success) {
      log(colors.green, '✅ Lead enviado com sucesso');
      if (response.data.facebook_response) {
        log(colors.green, `📊 Eventos recebidos: ${response.data.facebook_response.events_received}`);
        log(colors.green, `🔍 Trace ID: ${response.data.facebook_response.fbtrace_id}`);
      }
      return true;
    } else {
      log(colors.red, '❌ Falha no envio do Lead');
      console.log('Erro:', response.data.error);
      return false;
    }
  } catch (error) {
    log(colors.red, '❌ Erro no Lead:', error.response?.data || error.message);
    return false;
  }
}

// Teste 5: Dados Inválidos
async function testInvalidData() {
  log(colors.blue, '\n⚠️  Teste 5: Validação de Dados Inválidos');
  
  const invalidData = {
    // Faltando campos obrigatórios
    event_name: '',
    user_data: 'invalid'
  };

  try {
    const response = await axios.post(API_ENDPOINT, invalidData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.data.success && response.status === 400) {
      log(colors.green, '✅ Validação funcionando corretamente');
      log(colors.green, '✅ Dados inválidos rejeitados como esperado');
      return true;
    } else {
      log(colors.red, '❌ Validação não funcionou corretamente');
      return false;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      log(colors.green, '✅ Validação funcionando corretamente');
      log(colors.green, '✅ Dados inválidos rejeitados como esperado');
      return true;
    } else {
      log(colors.red, '❌ Erro inesperado na validação:', error.message);
      return false;
    }
  }
}

// Função principal de teste
async function runAllTests() {
  log(colors.bold, '🧪 INICIANDO TESTES DA FACEBOOK CONVERSIONS API');
  log(colors.yellow, '='.repeat(60));
  
  const results = {
    connectivity: false,
    pageView: false,
    initiateCheckout: false,
    lead: false,
    validation: false
  };

  // Executar todos os testes
  results.connectivity = await testConnectivity();
  
  if (results.connectivity) {
    results.pageView = await testPageView();
    results.initiateCheckout = await testInitiateCheckout();
    results.lead = await testLead();
  } else {
    log(colors.red, '\n❌ Pulando testes de eventos devido a falha de conectividade');
  }
  
  results.validation = await testInvalidData();

  // Resumo dos resultados
  log(colors.yellow, '\n' + '='.repeat(60));
  log(colors.bold, '📊 RESUMO DOS TESTES');
  
  const totalTests = Object.keys(results).length;
  const passedTests = Object.values(results).filter(Boolean).length;
  
  log(colors.blue, `📈 Total de testes: ${totalTests}`);
  log(colors.green, `✅ Testes aprovados: ${passedTests}`);
  log(colors.red, `❌ Testes falhados: ${totalTests - passedTests}`);
  
  Object.entries(results).forEach(([test, passed]) => {
    const icon = passed ? '✅' : '❌';
    const color = passed ? colors.green : colors.red;
    log(color, `${icon} ${test}: ${passed ? 'PASSOU' : 'FALHOU'}`);
  });

  if (passedTests === totalTests) {
    log(colors.green, '\n🎉 TODOS OS TESTES PASSARAM! A CAPI está funcionando perfeitamente.');
  } else {
    log(colors.yellow, '\n⚠️  Alguns testes falharam. Verifique a configuração.');
  }

  // Instruções adicionais
  log(colors.blue, '\n📝 PRÓXIMOS PASSOS:');
  log(colors.reset, '1. Acesse o Facebook Events Manager');
  log(colors.reset, '2. Vá em "Test Events" para ver os eventos em tempo real');
  log(colors.reset, '3. Verifique o Quality Score dos eventos');
  log(colors.reset, '4. Monitor os logs em produção');
  
  process.exit(passedTests === totalTests ? 0 : 1);
}

// Verificar configuração antes de executar
function checkConfiguration() {
  const requiredVars = [
    'FACEBOOK_PIXEL_ID',
    'FACEBOOK_ACCESS_TOKEN'
  ];

  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    log(colors.red, '❌ Variáveis de ambiente faltando:');
    missing.forEach(varName => {
      log(colors.red, `   - ${varName}`);
    });
    log(colors.yellow, '\n💡 Configure as variáveis no arquivo .env.local');
    process.exit(1);
  }
  
  log(colors.green, '✅ Configuração encontrada');
}

// Executar testes
if (require.main === module) {
  checkConfiguration();
  runAllTests().catch(error => {
    log(colors.red, '❌ Erro crítico:', error.message);
    process.exit(1);
  });
} 