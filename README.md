# 🚀 Escola Criativa - Salvador

Sistema de gestão pedagógica e financeira focado na realidade dos bairros de Salvador (Brotas, Amaralina e Cajazeiras), construído com uma arquitetura moderna, segura e escalável.

## 📍 O Projeto
O objetivo é gerenciar matrículas, frequências e a logística da **Bolsa Transporte** para cursos de artes, garantindo regras de negócio rígidas (como a trava de 75% de frequência) e transparência na fila de espera.

## 🛠️ Stack Tecnológica
* **Backend (O Motor):** Node.js, TypeScript e Express.
* **Frontend (A Vitrine):** Next.js 14+ (App Router), TypeScript e Tailwind CSS.
* **Banco de Dados:** PostgreSQL (Persistência de dados reais).
* **Infraestrutura:** Docker & Docker Compose 🐳 para isolamento completo de ambiente.

## 🏗️ Arquitetura Monorepo
O projeto é organizado para que o Frontend e o Backend trabalhem em harmonia, mas de forma independente:
* `server/`: API REST onde residem as regras de negócio e o motor do sistema. (Porta 3000)
* `web/`: Interface Next.js otimizada para o usuário final. (Porta 3001)

## 🚀 Como Executar o Ambiente
O projeto já está totalmente "dockerizado", o que significa que você não precisa instalar Node ou Postgres na sua máquina, apenas o Docker.

1. **Clone o repositório:**
   ```bash
   git clone [URL_DO_TEU_REPOSITORIO]
   cd escola-criativa

```

2. **Suba os containers:**
```bash
docker compose up -d --build

```


3. **Acesse as portas:**
* Frontend: `http://localhost:3001`
* Backend: `http://localhost:3000`



## 📑 Logs de Desenvolvimento (Work Log)

* [x] Configuração de ambiente multi-container com Docker Compose.
* [x] Inicialização do Framework Next.js na pasta `/web`.
* [x] Resolução de conflitos de portas entre serviços.
* [x] Documentação da arquitetura de API e fluxo de dados.

---

Mantenha a organização da Escola Criativa! Para contribuir, faça um Fork e utilize as branches: `feature/nome-da-feature`.

