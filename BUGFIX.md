# 🔧 Correções de Deploy - Dokploy

## Problemas Identificados e Soluções

### 1. ❌ Erro: pnpm-lock.yaml desatualizado
**Problema:** O arquivo `pnpm-lock.yaml` não estava sincronizado com `package.json`

**Erro original:**
```
ERR_PNPM_OUTDATED_LOCKFILE Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with package.json
specifiers in the lockfile don't match specifiers in package.json:
* 1 dependencies were added: axios@^1.10.0
```

**Solução aplicada:**
- ✅ Migração para npm em vez de pnpm
- ✅ Geração de `package-lock.json` atualizado
- ✅ Remoção da dependência do `pnpm-lock.yaml` no Dockerfile
- ✅ Adição do `pnpm-lock.yaml` ao `.dockerignore`

### 2. ❌ Erro: Conflito de dependências
**Problema:** Conflito entre `date-fns@4.1.0` e `react-day-picker@8.10.1`

**Erro original:**
```
peer date-fns@"^2.28.0 || ^3.0.0" from react-day-picker@8.10.1
Conflicting peer dependency: date-fns@3.6.0
```

**Solução aplicada:**
- ✅ Downgrade do `date-fns` de `4.1.0` para `3.6.0`
- ✅ Uso da flag `--legacy-peer-deps` no npm

### 3. ⚠️ Warnings: Formato ENV deprecated no Dockerfile
**Problema:** Formato antigo de variáveis de ambiente

**Warnings originais:**
```
LegacyKeyValueFormat: "ENV key=value" should be used instead of legacy "ENV key value" format
```

**Solução aplicada:**
- ✅ `ENV NODE_ENV production` → `ENV NODE_ENV=production`
- ✅ `ENV NEXT_TELEMETRY_DISABLED 1` → `ENV NEXT_TELEMETRY_DISABLED=1`
- ✅ `ENV PORT 3000` → `ENV PORT=3000`
- ✅ `ENV HOSTNAME "0.0.0.0"` → `ENV HOSTNAME="0.0.0.0"`

## 📝 Dockerfile Atualizado

### Antes:
```dockerfile
# Instalar dependências baseado no gerenciador de pacotes disponível
RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm i --frozen-lockfile; \
  else \
    npm ci; \
  fi
```

### Depois:
```dockerfile
# Instalar dependências com npm
RUN npm ci --legacy-peer-deps
```

## 🚀 Próximos Passos para Deploy

1. **Commit das correções:**
```bash
git add .
git commit -m "fix: corrigir dependências e Dockerfile para produção"
git push origin main
```

2. **Trigger novo deploy no Dokploy**

3. **Verificar logs do build** - agora deve passar sem erros

## ✅ Status das Correções

- [x] Problemas de dependências resolvidos
- [x] Dockerfile otimizado e sem warnings  
- [x] Build local testado e funcionando
- [x] Arquivos de lock atualizados
- [x] Documentação atualizada

## 🔄 Teste Local Recomendado

Para testar antes do deploy:
```bash
npm run docker:build
npm run docker:run
```

Ou execute o script automatizado:
```bash
./scripts/deploy.sh
``` 