'use client'

import { productService } from "@/service/productService";
import { Product } from "@/types/product";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // função para buscar produtos da API
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await productService.getAllProducts();
        setProducts(response);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Principal (Main) contendo as seções do site */}
      <main className="w-full">

        {/* Primeira Seção: Hero com o vídeo de background */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

          {/* Vídeo em Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover scale-y-130"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>

          {/* Camada de escurecimento suave (Overlay) para destacar o texto */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Conteúdo da primeira seção (Fica por cima do vídeo) */}
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">

            <img
              src="logo.png"
              alt="Logo"
              className="mx-auto h-40 md:h-56 w-auto object-contain drop-shadow-2xl"
            />

            <p className="text-gray-200 text-lg md:text-2xl font-light tracking-wide max-w-xl text-shadow">
              A revolução do streetwear <span className="text-purple-400 font-medium">Vista a sua essência.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/products"
                className="bg-purple-500 hover:bg-purple-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition shadow-lg tracking-wide uppercase text-sm"
              >
                Explorar Coleção
              </Link>
            </div>

          </div>

        </section>

        {/* Segunda Seção: Fundo branco e altura de tela cheia */}
<section className="min-h-screen bg-white text-zinc-900 flex flex-col items-center justify-center px-4">
  <div className="my-16 max-w-4xl mx-auto text-center w-full">
    <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide mb-6 text-zinc-900">
      Coleção Exclusiva StreetCrown
    </h2>
    <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
      Conectando atitude urbana, conforto e autenticidade em cada peça. Prepare-se para elevar o seu estilo ao próximo nível.
    </p>

    {loading ? (
      <p className="text-zinc-500">Carregando produtos...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="relative bg-zinc-100 border border-slate-300 p-4 rounded-lg shadow-md flex flex-col justify-between"
          >
            {/* Bloco Superior (Imagem, Categoria, Título e Descrição) */}
            <div>
              <div className="relative w-full">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${product.image_url}`}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                {product.category && (
                  <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {product.category}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-zinc-600 mb-4 text-sm">{product.description}</p>
            </div>

            {/* Bloco Inferior (Preço e Botão fixados na base) */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-auto">
              <p className="text-xl md:text-2xl font-extrabold text-zinc-800">
                R$ {Number(product.price).toFixed(2)}
              </p>

              <Link
                href={`/products/${product.id}`}
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-semibold px-4 py-2 rounded-lg text-sm transition shadow-sm"
              >
                Ver Peça
              </Link>
            </div>

          </div>
        ))}
      </div>
    )}
  </div>
</section>

      </main>

    </div>
  );
}