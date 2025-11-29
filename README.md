# 🦖 Dinolícia - Buffet Infantil e Delivery Jurássico

Site moderno e responsivo para o Buffet Infantil e Delivery de Salgados **Dinolícia**, localizado em Barueri e região.

## 🚀 Tecnologias

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Deploy:** Vercel (pronto para deploy)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd dinolicia
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Estrutura do Projeto

```
dinolicia/
├── app/
│   ├── api/
│   │   └── instagram/
│   │       └── route.ts      # API route para buscar fotos do Instagram
│   ├── galeria/
│   │   └── page.tsx          # Página de galeria
│   ├── layout.tsx            # Layout principal com fontes
│   ├── page.tsx              # Página inicial
│   └── globals.css           # Estilos globais
├── components/
│   ├── Navbar.tsx            # Navegação responsiva
│   ├── Footer.tsx            # Rodapé com contatos
│   ├── WhatsAppButton.tsx    # Botão flutuante WhatsApp
│   ├── Button.tsx            # Componente de botão reutilizável
│   ├── SectionTitle.tsx      # Título de seção
│   ├── PackageCard.tsx        # Card de pacote
│   └── sections/
│       ├── Hero.tsx           # Seção hero
│       ├── About.tsx          # Seção sobre
│       ├── Packages.tsx       # Seção de pacotes
│       └── Gallery.tsx        # Galeria de fotos (com integração Instagram)
├── public/
│   └── images/               # Imagens estáticas (fotos de exemplo)
│       ├── dinolicia1.png
│       ├── dinolicia2.png
│       └── dinolicia3.png
└── fotos_examplo/           # Fotos originais (não commitadas)
```

## 🎨 Identidade Visual

- **Cores Primárias:**
  - Laranja: `#F97316`
  - Verde Dino: `#84CC16`
  - Amarelo: `#FACC15`
  - Fundo Creme: `#FEFBF3`

- **Fontes:**
  - Títulos: Fredoka (Google Fonts)
  - Textos: Nunito (Google Fonts)

- **Mascote:** T-Rex 🦖

## 📱 Funcionalidades

- ✅ Design responsivo (Mobile-First)
- ✅ Navbar fixa e responsiva
- ✅ Hero section com CTA animado
- ✅ Seção sobre a empresa
- ✅ Cards de pacotes de festa (4 pacotes diferentes)
- ✅ **Galeria com integração automática do Instagram**
- ✅ **Fotos locais como fallback**
- ✅ Botão flutuante do WhatsApp com tooltip
- ✅ Footer com informações de contato
- ✅ Animações suaves com Framer Motion
- ✅ SEO otimizado
- ✅ Cache de fotos do Instagram (1 hora)

## 🔧 Configuração

### Integração com Instagram

O sistema tenta buscar automaticamente as fotos do perfil `@dino_licia` do Instagram. Se não conseguir, usa as fotos locais em `public/images/` como fallback.

**Para configurar a API oficial do Instagram (recomendado para produção):**
- Consulte o arquivo `INSTAGRAM_API_SETUP.md` para instruções detalhadas
- Configure a Instagram Basic Display API ou Graph API
- Atualize o arquivo `app/api/instagram/route.ts` com o token de acesso

### Atualizar Fotos Locais

Para adicionar ou substituir as fotos de exemplo:
1. Adicione as imagens na pasta `public/images/`
2. Atualize o array de fallback em `components/sections/Gallery.tsx`

### Links de Contato

Os links de contato estão configurados em:
- **WhatsApp:** `components/WhatsAppButton.tsx` e `components/Footer.tsx`
- **Instagram:** `components/Footer.tsx` e `components/sections/Gallery.tsx`
- **iFood:** `components/Footer.tsx` (atualize com o link real quando disponível)

## 🚢 Deploy na Vercel

1. Faça push do código para um repositório Git (GitHub, GitLab, etc)
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "Add New Project"
4. Conecte o repositório
5. A Vercel detectará automaticamente o Next.js e fará o deploy

Ou use a CLI da Vercel:
```bash
npm i -g vercel
vercel
```

## 📸 Galeria

A galeria possui duas fontes de imagens:

1. **Instagram (automático):** Tenta buscar as últimas fotos do perfil `@dino_licia`
2. **Fotos locais (fallback):** Se não conseguir buscar do Instagram, exibe as fotos em `public/images/`

As fotos são armazenadas em cache por 1 hora para melhor performance.

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linter
npm run lint
```

## 📞 Contato

- **WhatsApp:** (11) 98624-8864
- **Instagram:** [@dino_licia](https://www.instagram.com/dino_licia)
- **Localização:** Barueri e região

## 📝 Licença

Este projeto foi desenvolvido para a Dinolícia Buffet Infantil.

## 🎯 Próximos Passos

- [ ] Configurar Instagram Basic Display API para produção
- [ ] Adicionar link real do iFood quando disponível
- [ ] Implementar formulário de contato
- [ ] Adicionar mais fotos à galeria local
