"use client";

import { createBrowserClient } from "@supabase/ssr";
import { useState } from "react";

export default function TestAuthPage() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginPrueba = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      console.error("❌ Error en Auth:", error.message);
      alert("Error de autenticación: " + error.message);
      return;
    }

    console.log("Login exitoso en Supabase");
    console.log("UUID del usuario recibido con éxito:");
    console.log("JWT para el Backend recibido con éxito");

    alert("Logueado con éxito.");
  };

  return (
    <main className="min-h-screen bg-purple-400 flex flex-col items-center justify-center p-6 antialiased">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          EDASA <span className="text-violet-900">S.A</span>
        </h1>
      </header>

      <section className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl shadow-violet-100 border border-violet-100">
        {/* <div className="flex justify-center mb-10">
          <Image
            src="/LOGO-EDASA.webp"
            alt="EDA Escuela Logo"
            width={200}
            height={60}
            className="object-contain mix-blend-multiply"
          />
        </div> */}

        <h2 className="text-2xl font-bold text-violet-900 mb-8 text-center">
          Inicia sesión
        </h2>

        <form onSubmit={handleLoginPrueba} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-violet-900"
            >
              Correo Institucional
            </label>
            <input
              id="email"
              type="email"
              placeholder="nombre.apellido@edasa.edu.ec"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-xl border border-violet-200 bg-violet-50 text-gray-950 placeholder-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-violet-900"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-3 rounded-xl border border-violet-200 bg-violet-50 text-gray-950 placeholder-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all text-base"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full px-6 py-4 rounded-xl bg-purple-500 text-white font-bold text-lg hover:bg-purple-600 focus:ring-4 focus:ring-purple-200 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Validando credenciales..." : "Iniciar sesión"}
          </button>
        </form>

        <footer className="mt-8 pt-6 border-t border-violet-100 text-center">
          <p className="text-xs">Todos los derechos reservados © 2026 EDASA.</p>
          <p className="text-xs">Created with ❤️ by the MSR Stack.</p>
        </footer>
      </section>
    </main>
  );
}
