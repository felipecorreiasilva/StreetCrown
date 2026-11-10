import { Request, Response } from "express";
import { ProductModel } from "../models/Product";

export class ProductController {
    // 1. Buscar todos os produtos
    static async getAllProducts(req:Request, res:Response) {
        try {
            const products = await ProductModel.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar produtos." });
        }
    }

    // 2. Buscar produto por ID
    static async getProductById(req:Request, res:Response) {
        try {
            const { id } = req.params;
            const product = await ProductModel.findById(Number(id));

            if (!product) {
                return res.status(404).json({error: "Produto não encontrado."});
            }
        } catch (error) {
            console.error("Erro ao buscar produto por ID: ", error);
            return res.status(500).json({error: "Erro ao buscar produto."});
        }
    }

    // 3. Criar novo produto
    static async createProduct(req: Request, res: Response){
        try {
            const productData = req.body

            // Validação simples dos campos obrigatórios de logística e preço
            if (!productData.name || !productData.price || productData.weight === undefined) {
                return res.status(400).json({ error: "Nome, preço e peso são obrigatórios." });
            }

            const newProduct = await ProductModel.create(productData);
            return res.status(201).json(newProduct);
        } catch (error) {
            console.error("Error ao criar produto: ", error);
            return res.status(500).json({error: "Erro ao criar produto"});
        }
    }

    // 4. Atualizar produto
    static async updateProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const productData = req.body;

            const updateProduct = await ProductModel.update(Number(id), productData);
            
            if (!updateProduct) {
                return res.status(404).json({error: "Produto não encontrado ou nenhum campo enviado para atualização."});   
            }

            return res.status(200).json(updateProduct);
        } catch (error) {
            console.error("Erro ao atualizar produto: ", error);
            return res.status(500).json({error: "Erro ao atualizar produto."});
        }
    }

    //5. Deletar produto
    static async deleteProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedProduct = await ProductModel.delete(Number(id));

            if (!deletedProduct) {
                return res.status(404).json({ error: "Produto não encontrado."});
            }

            return res.status(200).json({ message: "Produto deletado com sucesso."});
        } catch (error) {
            console.error ("Erro ao deletar produto: ", error);
            res.status(500).json({error: "Erro ao deletar produto."});
        }
    }
}