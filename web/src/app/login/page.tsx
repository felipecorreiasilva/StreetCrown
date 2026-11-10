'use client';

import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Consumindo a função login do AuthContext
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login({ email, password });
            // O redirecionamento para '/' já é tratado automaticamente dentro da função login do contexto
        } catch (err: any) {
            console.error("Erro ao fazer login:", err);
            setError(
                err.response?.data?.error || 
                err.response?.data?.message || 
                "E-mail ou senha incorretos. Verifique seus dados."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center px-4 pt-40 pb-20">
            <div className="w-full max-w-sm p-8 md:p-10 rounded-2xl border border-slate-400 bg-white shadow-xl">
                {/* Cabeçalho do Formulario */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-900">Entrar</h1>
                    <p className="text-slate-500 text-sm mt-1">
                        Junte-se à StreetCrown e tenha acesso a peças exclusivas
                    </p>
                </div>

                {/* Mensagem de Erro */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl text-center">
                        {error}
                    </div>
                )}

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                            <FaEnvelope className="text-slate-400 text-xs" /> E-mail
                        </label>
                        <input
                            className="border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0F172A] p-3 rounded-xl text-sm outline-none transition-all text-slate-800"
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
                            className="border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0F172A] p-3 rounded-xl text-sm outline-none transition-all text-slate-800"
                            type="password"
                            placeholder="Sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {/* Link Esqueceu a senha posicionado logo abaixo do input */}
                        <div className="flex justify-end mt-1">
                            <Link 
                                href="/forgot-password" 
                                className="text-xs text-slate-500 hover:text-[#0F172A] hover:underline transition-colors"
                            >
                                Esqueceu a senha?
                            </Link>
                        </div>
                    </div>

                    {/* Botão de Envio */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 w-full bg-[#0F172A] hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-xl shadow-lg transition duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                    >
                        {loading ? "Entrando..." : (
                            <>
                                Entrar <FaArrowRight className="text-xs" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}