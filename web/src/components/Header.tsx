'use client'

import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <header className="fixed z-50 w-full bg-zinc-950 text-white p-4 flex items-center justify-between">
            <Link className="" href="/">
                <img className="h-16 w-auto" src="logo.png" alt="" />
            </Link>
            <nav className="space-x-4 mr-8 flex items-center justify-center">
                <Link href="/" className="hover:text-purple-500">
                    Início
                </Link>
                <Link href="/products" className="hover:text-purple-500">
                    Produtos
                </Link>
                <Link href="/about" className="hover:text-purple-500">
                    Sobre
                </Link>
                <Link href="/contact" className="hover:text-purple-500">
                    Contato
                </Link>
                <button className="cursor-pointer hover:text-purple-500">
                    <IoCart className="h-6 w-6" />
                </button>
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={() => router.push("/profile")}
                        className="cursor-pointer hover:text-purple-500">
                        <CgProfile className="h-6 w-6" />
                    </button>
                    <div className="flex flex-col text-xs">
                        <span className="">Bem-vindo(a)</span>
                        <div className="flex">
                            <Link href="/login" className="hover:text-purple-500">
                                Entrar 
                            </Link>
                            <span className="mx-1"> | </span>
                            <Link href="/register" className="hover:text-purple-500">
                                Cria Conta
                            </Link>
                        </div>

                    </div>
                </div>

            </nav>
        </header>
    )
}