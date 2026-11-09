import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            Seu navegador não suporta vídeos em background.
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide mb-6 text-zinc-900">
              Coleção Exclusiva StreetCrown
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Conectando atitude urbana, conforto e autenticidade em cada peça. Prepare-se para elevar o seu estilo ao próximo nível.
            </p>
            {/* Aqui você pode adicionar os cards de produtos da sua loja */}
          </div>
        </section>

      </main>

    </div>
  );
}