export interface Product {
  id: number;          // O id no banco é SERIAL (número), não string
  name: string;
  category: string;    // Adicionado pois é obrigatório na tabela (`NOT NULL`)
  description?: string;
  price: number;
  image_url?: string;
  is_available?: boolean; // Adicionado para refletir o status de disponibilidade
  
  // Dimensões e peso no nível raiz (igual ao banco e ao Model do backend)
  weight: number;
  width: number;
  height: number;
  length: number;
  
  created_at?: string | Date;
}