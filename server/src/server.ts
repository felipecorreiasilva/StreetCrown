import express from 'express';
import cors from 'cors';
import path from 'path';
import productRoutes from './routes/productRoutes';

const app = express();

// Middlewares essenciais
app.use(cors());
app.use(express.json());

// 2. Servir arquivos estáticos da pasta de uploads
// Isso mapeia a URL '/upload' para a pasta física local './upload'
app.use('/upload', express.static(path.join(__dirname, '../upload')));

// Registro das rotas da API
app.use(productRoutes);

// Rota de teste básica
app.get('/', (req, res) => {
  res.json({ message: '👑 StreetCrown API is running!' });
});

// Porta onde o servidor vai rodar (lê do .env ou usa 3333 como padrão)
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

export default app;