'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaShieldAlt, 
  FaLock, 
  FaTruck, 
  FaInstagram, 
  FaWhatsapp, 
  FaCreditCard 
} from "react-icons/fa";
import { SiPix } from "react-icons/si";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Banner de Garantia e Compra Segura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-zinc-900">
          <div className="flex items-center gap-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
            <FaShieldAlt className="text-3xl text-purple-400 shrink-0" />
            <div>
              <h4 className="font-semibold text-white text-sm">Compra 100% Segura</h4>
              <p className="text-xs text-zinc-400">Seus dados totalmente protegidos</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
            <FaLock className="text-3xl text-purple-400 shrink-0" />
            <div>
              <h4 className="font-semibold text-white text-sm">Criptografia SSL</h4>
              <p className="text-xs text-zinc-400">Ambiente seguro com certificado</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
            <FaTruck className="text-3xl text-purple-400 shrink-0" />
            <div>
              <h4 className="font-semibold text-white text-sm">Entrega Garantida</h4>
              <p className="text-xs text-zinc-400">Enviamos para todo o Brasil</p>
            </div>
          </div>
        </div>

        {/* Seções Principais do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-zinc-900">
          
          {/* Coluna 1: Marca & Apresentação com logo.png */}
          <div className="space-y-4">
            <img src="/logo.png" alt="StreetCrown Logo" className="h-16 w-auto object-contain" />
            <p className="text-xs text-zinc-400 leading-relaxed">
              A revolução do streetwear multiplataforma. Vista a sua essência com atitude, exclusividade e total segurança.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 p-2.5 rounded-full text-zinc-300 hover:text-white hover:bg-purple-600 transition border border-zinc-800"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a 
                href="https://wa.me/5534999999999" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 p-2.5 rounded-full text-zinc-300 hover:text-white hover:bg-emerald-600 transition border border-zinc-800"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h3 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">Navegação</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-purple-400 transition">Início</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-purple-400 transition">Explorar Coleção</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-purple-400 transition">Sobre a Marca</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento e Suporte */}
          <div>
            <h3 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">Atendimento</h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>Uberlândia - MG</li>
              <li>E-mail: contato@streetcrown.com</li>
              <li className="pt-2 text-zinc-500">Horário: Seg a Sex das 08h às 18h</li>
            </ul>
          </div>

          {/* Coluna 4: Meios de Pagamento e Selo */}
          <div>
            <h3 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">Formas de Pagamento</h3>
            <div className="flex flex-wrap gap-2 text-zinc-400 mb-6">
              <span className="flex items-center gap-1 bg-zinc-900 px-3 py-1.5 rounded-lg text-xs border border-zinc-800 text-purple-400 font-semibold">
                <SiPix className="text-sm" /> Pix
              </span>
              <span className="flex items-center gap-1 bg-zinc-900 px-3 py-1.5 rounded-lg text-xs border border-zinc-800 text-zinc-300">
                <FaCreditCard className="text-sm" /> Cartão de Crédito
              </span>
            </div>

            <h3 className="font-semibold text-white text-xs tracking-wider uppercase mb-2">Segurança</h3>
            <div className="inline-flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-800 text-xs text-zinc-300">
              <FaLock className="text-purple-400" />
              <span>Certificado SSL 256-bit</span>
            </div>
          </div>

        </div>

        {/* Rodapé Final de Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4 text-center md:text-left">
          <p>© {currentYear} StreetCrown. Todos os direitos reservados.</p>
          <p className="text-zinc-600">Desenvolvido com arquitetura multi-plataforma 👑</p>
        </div>

      </div>
    </footer>
  );
}