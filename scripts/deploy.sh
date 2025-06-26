#!/bin/bash

# Script de deploy para produção
set -e

echo "🚀 Iniciando processo de deploy..."

# Verificar se o Docker está rodando
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker não está rodando. Por favor, inicie o Docker primeiro."
    exit 1
fi

# Limpar builds anteriores
echo "🧹 Limpando builds anteriores..."
docker system prune -f

# Build da imagem
echo "🔨 Fazendo build da aplicação..."
docker build -t rinaldosilva-lp:latest .

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build realizado com sucesso!"
else
    echo "❌ Erro no build da aplicação."
    exit 1
fi

# Executar testes básicos do container
echo "🧪 Testando o container..."
docker run --rm -d --name rinaldosilva-test -p 3001:3000 rinaldosilva-lp:latest

# Aguardar container inicializar
echo "⏳ Aguardando container inicializar..."
sleep 30

# Verificar health check
if curl -f http://localhost:3001/api/health > /dev/null 2>&1; then
    echo "✅ Health check passou!"
    docker stop rinaldosilva-test
else
    echo "❌ Health check falhou!"
    docker stop rinaldosilva-test
    exit 1
fi

echo "🎉 Deploy preparado com sucesso!"
echo "💡 Para fazer deploy no Dokploy:"
echo "   1. Faça push do código para o repositório Git"
echo "   2. Configure o projeto no Dokploy apontando para este repositório"
echo "   3. Configure as variáveis de ambiente necessárias"
echo "   4. Execute o deploy através da interface do Dokploy" 