import api from './api';
import { Product } from '@/types/product';

// Tipo auxiliar para dados de criação/atualização (omitindo o ID gerado pelo banco e datas)
export type ProductInput = Omit<Product, 'id' | 'created_at'>;

export const productService = {
  // 1. Buscar todos os produtos (Read - All)
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await api.get<Product[]>('/products');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  },

  // 2. Buscar um produto específico por ID (Read - By ID)
  async getProductById(id: string): Promise<Product> {
    try {
      const response = await api.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar produto com ID ${id}:`, error);
      throw error;
    }
  },

  // 3. Criar um novo produto (Create)
  async createProduct(productData: ProductInput): Promise<Product> {
    try {
      const response = await api.post<Product>('/products', productData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw error;
    }
  },

  // 4. Atualizar um produto existente (Update)
  async updateProduct(id: string, productData: Partial<ProductInput>): Promise<Product> {
    try {
      const response = await api.put<Product>(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar produto com ID ${id}:`, error);
      throw error;
    }
  },

  // 5. Deletar um produto (Delete)
  async deleteProduct(id: string): Promise<void> {
    try {
      await api.delete(`/products/${id}`);
    } catch (error) {
      console.error(`Erro ao deletar produto com ID ${id}:`, error);
      throw error;
    }
  },
};