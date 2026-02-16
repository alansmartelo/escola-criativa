FROM node:20-alpine

WORKDIR /app

# Copia os arquivos de dependências primeiro (otimiza o cache)
COPY package*.json ./

RUN npm install

# Copia o restante dos arquivos do Next.js
COPY . .

# Expõe a porta do Frontend
EXPOSE 3001

# Comando para rodar o Next.js na porta 3001
CMD ["npm", "run", "dev", "--", "-p", "3001"]
