# 📝 Todo App - Next.js + TypeScript

Este projeto é uma aplicação de lista de tarefas (Todo App) criada com **Next.js** e **TypeScript**, utilizando o paradigma de desenvolvimento baseado em componentes com a **arquitetura Atomic Design**.

## 🔧 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) — Framework React full-stack
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) — Framework CSS utilitário
- [ESLint + Prettier] — Padronização de código
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) — Arquitetura de componentes

---

## 🧬 Arquitetura do Projeto - Atomic Design
```bash
/todo-app
├── public/
├── src/
│   ├── components/
│   │   ├── atoms/         # Elementos básicos (botões, inputs, ícones, textos)
│   │   ├── molecules/     # Combinações simples de átomos (ex: campo de busca)
│   │   ├── organisms/     # Componentes mais complexos (ex: formulário de tarefa)
│   │   ├── templates/     # Estrutura das páginas (layout com header/footer)
│   │   └── pages/         # Páginas específicas compostas por templates
│   ├── hooks/             # Custom hooks
│   ├── context/           # Context API (ex: estado global de tarefas)
│   ├── services/          # API clients, serviços de backend
│   ├── types/             # Tipagens globais TypeScript
│   ├── utils/             # Funções utilitárias
│   ├── styles/            # Estilos globais, temas, Tailwind config
│   └── app/               # Arquivos do Next.js App Router (caso use `app/`)
├── .gitignore
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
