'use client'
import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    return (
        <div className="min-h-screen flex justify-center items-center pt-40 pb-20 px-4 text-slate-800">
            <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-400">
                {/* Cabeçalho do Formulário */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                        Crie sua Conta
                    </h1>
                    <p className="text-slate-500 text-sm mt-1">
                        Junte-se à StreetCrown e tenha acesso a peças exclusivas
                    </p>
                </div>

                <form className="flex flex-col gap-4">
                    {/* Nome Completo */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                            <FaUser className="text-slate-400 text-xs" /> Nome Completo
                        </label>
                        <input
                            className="border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0F172A] p-3 rounded-xl text-sm outline-none transition-all"
                            type="text"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                            <FaEnvelope className="text-slate-400 text-xs" /> E-mail
                        </label>
                        <input
                            className="border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0F172A] p-3 rounded-xl text-sm outline-none transition-all"
                            type="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Senha */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                            <FaLock className="text-slate-400 text-xs" /> Senha
                        </label>
                        <input
                            className="border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0F172A] p-3 rounded-xl text-sm outline-none transition-all"
                            type="password"
                            placeholder="Mínimo de 6 caracteres"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Confirmar Senha */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                            <FaLock className="text-slate-400 text-xs" /> Confirmar Senha
                        </label>
                        <input
                            className="border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0F172A] p-3 rounded-xl text-sm outline-none transition-all"
                            type="password"
                            placeholder="Digite a senha novamente"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Botão de Envio */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 w-full bg-zinc-950 hover:bg-zinc-900 text-white font-medium py-3 px-4 rounded-xl shadow-lg transition duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50"
                    >
                        {loading ? "Cadastrando..." : (
                            <>
                                Criar Conta <FaArrowRight className="text-xs" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}