# Frontend - Lista de Filmes

Interface de usuário desenvolvida em React com TypeScript para o sistema de lista de filmes, permitindo busca, visualização e gerenciamento de filmes favoritos.

## Tecnologias

- **Framework**: React 19
- **Linguagem**: TypeScript
- **Build Tool**: Vite
- **Roteamento**: React Router DOM
- **UI Library**: Material-UI (MUI)
- **Styling**: Styled Components
- **Gerenciamento de Estado**: Zustand
- **Formulários**: React Hook Form + Zod
- **HTTP Client**: Axios
- **Ícones**: Material-UI Icons
- **Toasts**: React-Toastify
- **Theme Management**: Context API

## Funcionalidades

- Interface responsiva e moderna
- Autenticação de usuários (login/registro)
- Busca de filmes via API do TMDB
- Lista de filmes favoritos
- Compartilhamento de listas com link público
- Gerenciamento de estado global
- Validação de formulários
- Roteamento protegido
- **Tema Dark/Light** com toggle no header
- **Paginação** em todas as listas (Home, Favoritos, Compartilhadas)
- **Notificações Toast** para feedback do usuário
- **Busca avançada** com limpeza de resultados

## Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn
- Backend da API rodando (porta 3001)

## Instalação

```bash
# Instalar dependências
npm install

# Ou usando yarn
yarn install
```

## Como Executar

### Modo Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Modo Produção

```bash
# Compilar para produção
npm run build

# Visualizar build de produção
npm run preview
```

## Scripts Disponíveis

- `npm run dev` - Executar em modo desenvolvimento
- `npm run build` - Compilar para produção
- `npm run preview` - Visualizar build de produção
- `npm run lint` - Executar linter


## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Lista de Filmes
```

### Integração com Backend

A aplicação se conecta com o backend através da variável `VITE_API_URL`. Certifique-se de que o backend esteja rodando na porta configurada.

## Principais Páginas

- **Home** - Página inicial com filmes populares e busca (paginada)
- **Login** - Autenticação de usuário
- **Registro** - Cadastro de novo usuário
- **Movie Details** - Detalhes do filme (página pública)
- **Favoritos** - Lista de filmes favoritos (paginada) com link de compartilhamento
- **Shared List** - Visualização de listas compartilhadas (paginada)

## Componentes Principais

- **Header** - Cabeçalho com navegação, busca e toggle de tema
- **MovieCard** - Card de filme
- **Pagination** - Componente de paginação
- **ThemeToggle** - Toggle para alternar tema dark/light
- **AuthForm** - Formulário de autenticação
- **UI Components** - Button, Card, Input (componentes base)




## Docker

Docker para deploy:

```bash
# Construir imagem
docker build -t movie-list-frontend .

# Executar container
docker run -p 8080:8080 movie-list-frontend
```

### Dockerfile

- **Multi-stage build** para reduzir tamanho da imagem
- **Nginx** para servir arquivos estáticos
- **Porta 8080** (padrão Railway)
- **Health check** em `/health`