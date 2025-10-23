# ⏰ Chronos Pomodoro

![Badge](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![Badge](https://img.shields.io/badge/tech-React%20%7C%20TypeScript-informational)

Um timer inteligente baseado na Técnica Pomodoro, projetado para aumentar sua produtividade e foco. Crie tarefas, inicie o cronômetro e acompanhe seu progresso através de um histórico detalhado.

**🔗 Acesse a aplicação em produção:** [Chronos Pomodoro App](https://chronos-pomodoro-wheat.vercel.app/)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)

---

## 📖 Sobre o Projeto

**Chronos Pomodoro** é uma aplicação web que implementa a Técnica Pomodoro para ajudar usuários a gerenciar seu tempo de forma eficaz. O usuário pode definir uma tarefa, iniciar um ciclo de trabalho focado (geralmente 25 minutos) e, ao final, a tarefa é registrada no histórico. Isso permite não só manter o foco, mas também visualizar o trabalho realizado ao longo do tempo.

O projeto foi desenvolvido como parte de um estudo aprofundado em **React com TypeScript**, utilizando conceitos modernos como hooks, contextos e componentização.

---

## ✨ Funcionalidades

-   ▶️ **Timer Inteligente:** Inicie um novo ciclo de Pomodoro para qualquer tarefa.
-   📝 **Criação de Tarefas:** Dê um nome e defina a duração do seu ciclo de foco.
-   🛑 **Controle Total:** Interrompa o timer a qualquer momento, se necessário.
-   📊 **Histórico Detalhado:** Acesse uma página com o registro de todas as tarefas, incluindo:
    -   Nome da tarefa
    -   Duração programada
    -   Data e hora de início
    -   Status (Concluído ✅, Interrompido ❌ ou Em progresso ⏳)

---


## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

-   **[React](https://reactjs.org/)** (com **[Vite](https://vitejs.dev/)**)
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[React Router DOM](https://reactrouter.com/)** para gerenciamento de rotas
-   **[Date-fns](https://date-fns.org/)** para formatação de datas
-   **[Lucide Dev](https://lucide.dev/)** para ícones
-   **[React Toastify](https://fkhadra.github.io/react-toastify/introduction/)** para toasts

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente.

**Pré-requisitos:**
* **Node.js** (versão 16 ou superior)
* **npm** ou **yarn**

```bash
# 1. Clone o repositório
git clone [https://github.com/xOmilk/chronos-pomodoro.git](https://github.com/xOmilk/chronos-pomodoro.git)

# 2. Navegue até o diretório do projeto
cd chronos-pomodoro

# 3. Instale as dependências
npm install

# 4. Execute a aplicação em modo de desenvolvimento
npm run dev
