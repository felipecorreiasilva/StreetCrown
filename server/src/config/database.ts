import { Pool } from 'pg';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('ERRO CRÍTICO: A variável de ambiente DATABASE_URL não está definida no arquivo .env');
  process.exit(1);
}

export const pool = new Pool({
  connectionString,
});

// Logs de status da conexão com o banco de dados
pool.on('connect', () => {
  console.log('📦 Conectado ao banco de dados PostgreSQL com sucesso!');
});

pool.on('error', (err) => {
  console.error('❌ Erro inesperado no cliente do banco de dados:', err);
  process.exit(-1);
});