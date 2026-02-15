import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Rota de teste inicial
app.get('/', (req: Request, res: Response) => {
  res.send('Escola Criativa API - Salvador 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
