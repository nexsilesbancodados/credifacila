# Credifácil

Site institucional da Credifácil — crédito pessoal, consignado e securitizadora.

Stack: **Vite + React 18 + TypeScript + Tailwind CSS**.
Tipografia: Manrope (texto) e Plus Jakarta Sans (display).

## Comandos

```bash
npm install            # instalar dependências
npm run dev            # ambiente local (http://localhost:8080)
npm run build          # build de produção em dist/
npm run preview        # servir build localmente
npm run lint           # rodar eslint
npm run images:webp    # regerar variantes WebP de src/assets
```

## Estrutura

```
src/
  components/        seções e componentes (Header, FaqSection, etc.)
  components/ui/     primitives leves (button, field, sonner, toast, tooltip)
  components/layout/ helpers (Container, Section, SectionTitle, Eyebrow)
  config/site.ts     ⚠️ dados de contato, WhatsApp, CNPJ — editar antes do deploy
  hooks/             useSeo, useScrollAnimations
  lib/utils.ts       cn() (clsx + tailwind-merge)
  pages/             rotas (Index, Simular, Consignado, Securitizadora, ...)
public/              favicon, robots.txt, sitemap.xml
scripts/             utilidades de build (convert-images.mjs)
```

## Antes do deploy

Edite `src/config/site.ts` com os dados reais:

- `contact.whatsapp` (formato internacional, sem `+`, ex: `5511900001234`)
- `contact.phone`, `phone0800`, `email`, `address`, `hours`
- `legal.cnpj`, `razaoSocial`
- `social.*` (URLs reais)

Atualize também:
- `index.html` → `og:image`, `canonical`
- `public/sitemap.xml` → URLs canônicas

## Performance

- Code-splitting por rota (`React.lazy`)
- Imagens em WebP (variantes regeráveis via `npm run images:webp`)
- Animações via IntersectionObserver + CSS (sem GSAP)
- `manualChunks` no Vite (router, query, radix, icons, react, vendor)
- LCP da home: hero principal carrega com `fetchPriority="high"`

## Funcionalidades-chave

- **Simulador funcional** ([SimulatorCard](src/components/SimulatorCard.tsx)) — slider valor, parcelas, formulário inline → abre WhatsApp pré-preenchido
- **WhatsApp flutuante** global ([FloatingWhatsApp](src/components/FloatingWhatsApp.tsx))
- **Cookie banner LGPD** ([CookieBanner](src/components/CookieBanner.tsx))
- **SEO por rota** via [useSeo](src/hooks/useSeo.ts)
