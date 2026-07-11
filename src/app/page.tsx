export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Bienvenidos a EDASA</h1>
      <p className="text-muted-foreground mt-2">
        Plataforma corporativa en desarrollo.
      </p>

      <a
        className="px-4 py-3 mt-2.5 rounded-xl border border-violet-300 bg-violet-200 text-gray-950 placeholder-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all text-base"
        href="/login"
      >
        Login
      </a>
    </main>
  );
}
