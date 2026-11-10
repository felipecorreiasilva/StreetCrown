import { pool } from '../config/database'; // Ajuste o caminho para a sua conexão com o PostgreSQL

export interface Product {
  id?: number;
  name: string;
  category: string;
  description?: string;
  price: number;
  image_url?: string;
  is_available?: boolean;
  weight: number;
  width: number;
  height: number;
  length: number;
  created_at?: Date;
}

export class ProductModel {
  // 1. Buscar todos os produtos
  static async findAll() {
    const query = 'SELECT * FROM products ORDER BY id ASC';
    const { rows } = await pool.query(query);
    return rows;
  }

  // 2. Buscar produto por ID
  static async findById(id: number) {
    const query = 'SELECT * FROM products WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  // 3. Criar novo produto
  static async create(product: Product) {
    const {
      name,
      category,
      description,
      price,
      image_url,
      is_available = true,
      weight,
      width,
      height,
      length,
    } = product;

    const query = `
      INSERT INTO products (name, category, description, price, image_url, is_available, weight, width, height, length)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;
    `;

    const values = [
      name,
      category,
      description,
      price,
      image_url,
      is_available,
      weight,
      width,
      height,
      length,
    ];

    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  // 4. Atualizar produto
  static async update(id: number, product: Partial<Product>) {
    const fields = [];
    const values = [];
    let index = 1;

    for (const [key, value] of Object.entries(product)) {
      fields.push(`${key} = $${index}`);
      values.push(value);
      index++;
    }

    if (fields.length === 0) return null;

    values.push(id);
    const query = `
      UPDATE products
      SET ${fields.join(', ')}
      WHERE id = $${index}
      RETURNING *;
    `;

    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  // 5. Deletar produto
  static async delete(id: number) {
    const query = 'DELETE FROM products WHERE id = $1 RETURNING *;';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }
}