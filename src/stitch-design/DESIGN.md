---
name: Kinetic SmartRuler Design System
version: 2.0.0
frameworks: [Astro JS, Node JS, Tailwind CSS v4, React]
standards: [W3C, Semantic HTML5, WCAG 2.1]
aesthetic: Hard-tech, Tactical HUD, Industrial Precision
---

# Design System: Kinetic SmartRuler v2

Este documento estabelece as diretrizes técnicas e estéticas para o manual do **SmartRuler v2**. O sistema foi projetado para transpor uma estética "Hard-tech" e "Gaming HUD" para uma interface de documentação industrial mission-critical, priorizando clareza tática e precisão técnica.

## 1. Arquitetura Técnica

O projeto segue padrões modernos de desenvolvimento web:
- **Astro JS**: Framework principal para geração de sites estáticos e ilhas de interatividade.
- **Node JS**: Ambiente de execução para tooling e scripts de build.
- **Tailwind CSS v4**: Motor de estilização principal, utilizando a nova abordagem **CSS-first**.
- **W3C Standards**: Uso rigoroso de HTML5 semântico e práticas de acessibilidade.

---

## 2. Design Tokens (CSS Variables)

A base do sistema reside em propriedades customizadas CSS, permitindo troca dinâmica de temas (Dark/Light).

### Temas (Modes)
- **Kinetic Command (Dark - Padrão):** Focado em redução de fadiga ocular e estética de cockpit.
- **Kinetic Technical (Light):** Focado em alta legibilidade para ambientes laboratoriais.

```css
:root {
  /* Colors - Kinetic Command (Primary) */
  --color-primary: #ED712E;
  --color-primary-rgb: 237, 113, 46;
  --color-surface: #111318;
  --color-surface-container: #1e2025;
  --color-on-surface: #e2e2e9;
  --color-on-surface-variant: #dfc0b3;
  --color-outline: #a68b7f;
  
  /* Typography */
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Hanken Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Spacing & Geometry */
  --unit: 4px;
  --radius-none: 0px;
  --chamfer-size: 12px;
}
```

---

## 3. Tailwind CSS v4 Integration

Utilizamos o **Tailwind CSS v4** integrado via Vite. A configuração é feita diretamente no arquivo CSS global (`src/styles/global.css`), importando o Tailwind e mapeando as variáveis.

### Configuração CSS-first
```css
@import "tailwindcss";

@theme {
  --color-primary: var(--color-primary);
  --color-surface: var(--color-surface);
  --font-display: var(--font-display);
  --font-mono: var(--font-mono);
  
  /* Custom Utilities */
  --breakpoint-3xl: 1920px;
}
```

---

## 4. Tipografia (Typography)

A estratégia foca em clareza técnica e estrutura geométrica:
- **Headlines (Space Grotesk):** Arquitetura geométrica para títulos de impacto.
- **Body (Hanken Grotesk):** Alta legibilidade para textos explicativos e instruções.
- **Metadata/Labels (JetBrains Mono):** Reforça a estética "developer" e técnica para especificações e IDs.

---

## 5. Geometria e Estilo Visual

### Hard-Tech Aesthetic
- **Cantos (Corners):** 90° (zero radius) para todos os containers.
- **Chanfros (Chamfers):** Cortes de 45° no canto superior direito ou inferior esquerdo para indicar interatividade.
- **HUD Brackets:** Uso de cantoneiras em "L" para emoldurar imagens e seções críticas.
- **Scanning Lines:** Micro-animações de linhas de varredura para elementos de status "ativo".

### Profundidade (Depth)
Não utilizamos sombras suaves (Gaussian blurs). A profundidade é alcançada por:
1. **Tonal Stepping:** Mudança sutil entre cores de superfície.
2. **Hard Borders:** Bordas sólidas de 1px ou 2px.
3. **Glassmorphism:** Uso moderado de `backdrop-filter: blur()` com bordas semi-transparentes para elementos flutuantes.

---

## 6. Padrões W3C e Acessibilidade

Para garantir conformidade com os padrões W3C:
- **HTML Semântico:** Uso obrigatório de `<main>`, `<article>`, `<nav>`, `<aside>` e `<header>`.
- **Contrast Ratio:** Manter contraste mínimo de 4.5:1 para texto de corpo.
- **Aria Labels:** Elementos puramente decorativos (como brackets HUD) devem ser marcados com `aria-hidden="true"`.
- **Responsive Design:** Mobile-first, garantindo funcionalidade total em dispositivos touch.

---

## 7. Astro JS & Node JS Implementation

### Estrutura de Componentes
Componentes devem ser atômicos e encapsulados.
- **Layouts:** `BaseLayout.astro` gerencia o `<head>` e metadados SEO.
- **Components:** Devem aceitar slots para flexibilidade de conteúdo.

### Scripts de Build (Node)
O ambiente Node garante a otimização de imagens via `sharp` (já integrado no `package.json`) e o processamento de MDX para documentação dinâmica.

---

*Assinado: Design System Team - SmartRuler v2*
