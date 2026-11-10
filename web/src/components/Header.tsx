'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const { totalItems, setIsCartOpen } = useCart();
    const { user, isAuthenticated, isLoading, logout } = useAuth() as any;

    // Normaliza a propriedade da imagem do usuário para evitar falhas de nomenclatura
    const userImage = user?.image_url || user?.avatar || user?.avatar_url || user?.photo;
    const fullImageUrl = userImage 
        ? (userImage.startsWith('http') ? userImage : `${process.env.NEXT_PUBLIC_API_URL}${userImage}`)
        : null;

    return (
        <header className="fixed z-50 w-full bg-zinc-950 text-white p-4 flex items-center justify-between border-b border-zinc-800">
            {/* Logo */}
            <Link href="/">
                <img className="h-12 md:h-16 w-auto object-contain" src="/logo.png" alt="StreetCrown Logo" />
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden md:flex space-x-6 mr-8 items-center justify-center">
                <Link href="/" className="hover:text-purple-500 transition-colors">
                    Início
                </Link>
                <Link href="/products" className="hover:text-purple-500 transition-colors">
                    Produtos
                </Link>
                <Link href="/about" className="hover:text-purple-500 transition-colors">
                    Sobre
                </Link>
                <Link href="/contact" className="hover:text-purple-500 transition-colors">
                    Contato
                </Link>

                {/* Botão do Carrinho Desktop */}
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative hover:text-purple-500 transition-colors flex items-center cursor-pointer"
                    title="Abrir carrinho"
                >
                    <BsCart className="h-6 w-6" />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2.5 bg-purple-500 text-zinc-950 font-bold text-[10px] h-4 w-4 rounded-full flex items-center justify-center shadow-md">
                            {totalItems > 99 ? '99+' : totalItems}
                        </span>
                    )}
                </button>

                {/* Bloco de Autenticação / Perfil Desktop */}
                <div className="flex items-center gap-2">
                    {isLoading ? (
                        <div className="h-8 w-28 bg-zinc-800 animate-pulse rounded-lg" />
                    ) : isAuthenticated && user ? (
                        <div className="flex items-center gap-3">
                            <Link 
                                href="/profile" 
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                                title="Ver perfil"
                            >
                                {fullImageUrl ? (
                                    <img
                                        src={fullImageUrl}
                                        alt={user.name || "Perfil"}
                                        className="h-9 w-9 rounded-full object-cover border border-zinc-700 shadow-inner"
                                    />
                                ) : (
                                    <CgProfile className="h-7 w-7 text-zinc-300" />
                                )}
                                <div className="flex flex-col text-xs leading-tight">
                                    <span className="text-zinc-400">Olá,</span>
                                    <span className="font-semibold text-purple-400 max-w-[100px] truncate" title={user.name}>
                                        {user.name?.split(' ')[0]}
                                    </span>
                                </div>
                            </Link>

                            <button
                                onClick={logout}
                                className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 bg-zinc-900 border border-zinc-800 hover:border-red-900/50 py-1.5 px-3 rounded-lg transition-colors cursor-pointer ml-1"
                                title="Terminar sessão"
                            >
                                <FiLogOut className="h-3.5 w-3.5" />
                                <span>Sair</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <CgProfile className="h-6 w-6 text-zinc-300" />
                            <div className="flex flex-col text-xs leading-tight">
                                <span className="text-zinc-400">Bem-vindo(a)</span>
                                <div className="flex">
                                    <Link href="/login" className="hover:text-purple-500 font-semibold">
                                        Entrar 
                                    </Link>
                                    <span className="mx-1 text-zinc-600"> | </span>
                                    <Link href="/register" className="hover:text-purple-500 font-semibold">
                                        Criar Conta
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Botão e Ícones do Menu Mobile */}
            <div className="flex md:hidden items-center gap-4">
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative hover:text-purple-500 transition-colors flex items-center cursor-pointer"
                    title="Abrir carrinho"
                >
                    <BsCart className="h-6 w-6" />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2.5 bg-purple-500 text-zinc-950 font-bold text-[10px] h-4 w-4 rounded-full flex items-center justify-center shadow-md">
                            {totalItems > 99 ? '99+' : totalItems}
                        </span>
                    )}
                </button>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-zinc-200 hover:text-white focus:outline-none cursor-pointer"
                    aria-label="Abrir Menu"
                >
                    {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
                </button>
            </div>

            {/* Menu Dropdown Mobile */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 py-6 px-8 flex flex-col gap-4 shadow-2xl md:hidden transition-all">
                    <Link 
                        href="/" 
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium hover:text-purple-500 transition"
                    >
                        Início
                    </Link>
                    <Link 
                        href="/products" 
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium hover:text-purple-500 transition"
                    >
                        Produtos
                    </Link>
                    <Link 
                        href="/about" 
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium hover:text-purple-500 transition"
                    >
                        Sobre
                    </Link>
                    <Link 
                        href="/contact" 
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium hover:text-purple-500 transition"
                    >
                        Contato
                    </Link>
                    
                    <hr className="border-zinc-800 my-2" />

                    {isLoading ? (
                        <div className="h-10 w-full bg-zinc-800 animate-pulse rounded-xl" />
                    ) : isAuthenticated && user ? (
                        <div className="flex flex-col gap-4 pt-2">
                            <Link 
                                href="/profile" 
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                            >
                                {fullImageUrl ? (
                                    <img
                                        src={fullImageUrl}
                                        alt={user.name || "Perfil"}
                                        className="h-10 w-10 rounded-full object-cover border border-zinc-700"
                                    />
                                ) : (
                                    <CgProfile className="h-8 w-8 text-zinc-300" />
                                )}
                                <div className="flex flex-col text-xs leading-tight">
                                    <span className="text-zinc-400">Conectado como</span>
                                    <span className="font-semibold text-purple-400">{user.name}</span>
                                </div>
                            </Link>

                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    logout();
                                }}
                                className="w-full flex items-center justify-center gap-2 bg-red-500/10 border border-red-900/50 text-red-400 hover:bg-red-500/20 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer"
                            >
                                <FiLogOut className="h-4 w-4" />
                                <span>Terminar Sessão</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 pt-2">
                            <CgProfile className="h-8 w-8 text-zinc-300" />
                            <div className="flex flex-col text-xs">
                                <span className="text-zinc-400">Bem-vindo(a)</span>
                                <div>
                                    <Link href="/login" onClick={() => setIsOpen(false)} className="font-semibold hover:text-purple-500">Entrar</Link>
                                    <span className="mx-1 text-zinc-600">|</span>
                                    <Link href="/register" onClick={() => setIsOpen(false)} className="font-semibold hover:text-purple-500">Criar Conta</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}