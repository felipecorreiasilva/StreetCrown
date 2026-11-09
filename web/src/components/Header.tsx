import { IoCart } from "react-icons/io5";

export default function Header() {
    return (
        <header className="fixed z-50 w-full bg-zinc-950 text-white p-4 flex items-center justify-between">
            <div className="">
                <img className="h-16 w-auto" src="logo.png" alt="" />
            </div>
            <nav className="space-x-4 mr-8 flex items-center justify-center">
                <a href="#" className="hover:text-purple-500">Início</a>
                <a href="#" className="hover:text-purple-500">Produtos</a>
                <a href="#" className="hover:text-purple-500">Sobre</a>
                <a href="#" className="hover:text-purple-500">Contato</a>
                <button className="cursor-pointer hover:text-purple-500">
                    <IoCart className="h-5 w-5" />
                </button>
            </nav>
        </header>
    )
}