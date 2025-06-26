# 🚀 Guia de Deploy - Rinaldo Silva LP

Este guia detalha como fazer deploy da aplicação em produção usando Dokploy e Docker.

## 📋 Pré-requisitos

- Docker instalado
- Acesso ao servidor com Dokploy configurado
- Repositório Git configurado

## 🏗️ Arquivos de Configuração

### Docker
- `Dockerfile` - Configuração multi-stage otimizada para produção
- `.dockerignore` - Arquivos excluídos do contexto Docker
- `docker-compose.yml` - Orquestração de containers

### Dokploy
- `dokploy.yml` - Configuração específica do Dokploy
- `.env.production` - Variáveis de ambiente para produção

## 🛠️ Processo de Deploy

### 1. Preparação Local
```bash
# Dar permissão ao script de deploy
chmod +x scripts/deploy.sh

# Executar testes locais
./scripts/deploy.sh
```

### 2. Deploy no Dokploy

1. **Configurar Projeto no Dokploy:**
   - Acesse a interface do Dokploy
   - Crie um novo projeto
   - Configure o repositório Git

2. **Configurar Variáveis de Ambiente:**
   - Configure as variáveis necessárias baseadas no `.env.production`
   - Adicione secrets como tokens do Facebook, etc.

3. **Configurar Domínio:**
   - Configure o domínio `rinaldosilva.com`
   - Habilite SSL/TLS automático

4. **Deploy:**
   - Execute o deploy através da interface
   - Monitore os logs durante o processo

## 🔧 Configurações Importantes

### Next.js
- `output: 'standalone'` habilitado para Docker
- Build otimizado para produção
- Telemetria desabilitada

### Segurança
- Container executa com usuário não-root
- Headers de segurança configurados
- CSP (Content Security Policy) definido

### Performance
- Build multi-stage para imagem menor
- Cache otimizado para assets estáticos
- Compressão habilitada

## 📊 Monitoramento

### Health Check
- Endpoint: `/api/health`
- Verificações automáticas de saúde do container
- Restart automático em caso de falha

### Recursos
- Limite de memória: 512MB
- Limite de CPU: 0.5 cores
- Reserva mínima: 256MB RAM, 0.25 cores

## 🔍 Troubleshooting

### Container não inicia
1. Verificar logs: `docker logs container_name`
2. Verificar variáveis de ambiente
3. Verificar health check endpoint

### Build falha
1. Verificar dependências no `package.json`
2. Verificar sintaxe do Dockerfile
3. Limpar cache: `docker builder prune`

### SSL/TLS
1. Verificar configuração DNS
2. Verificar configuração do Traefik
3. Verificar certificados Let's Encrypt

## 📝 Comandos Úteis

```bash
# Build local
docker build -t rinaldosilva-lp .

# Executar localmente
docker run -p 3000:3000 rinaldosilva-lp

# Ver logs
docker logs -f container_name

# Verificar health
curl http://localhost:3000/api/health

# Limpar sistema Docker
docker system prune -a
```

## 🌍 URLs de Produção

- **Principal:** https://rinaldosilva.com
- **Health Check:** https://rinaldosilva.com/api/health
- **API:** https://rinaldosilva.com/api/*

## 🔄 Atualizações

Para fazer atualizações:
1. Commit e push das alterações
2. Trigger rebuild no Dokploy
3. Monitorar deploy nos logs
4. Verificar funcionamento pós-deploy 