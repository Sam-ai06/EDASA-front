import type { CurrentUser } from "@/types/admin";
//mensaje de bienvenida
function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Buenos días';
  if (h < 19) return 'Buenas tardes';
  return 'Buenas noches';
}

export default function WelcomeBanner({ userName}: CurrentUser) {
  return (
    <div className="bg-purple_dark text-white rounded-3xl p-8 relative overflow-hidden shadow-sm mb-8">
      <div className="max-w-xl z-10 relative">
        <span className="bg-purple_hover text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-purple_light">
          Panel Administrativo • EDA
        </span>
        {/* Aquí inyectamos el nombre del prop y hacemos el saludo*/}
        <h2 className="text-3xl font-bold mt-4 mb-2 text-panel_white">
          {greeting()}, {userName}
        </h2>
        <p className="text-purple_pale/90 text-sm leading-relaxed">
          Aquí tienes acceso directo a cada módulo del sitio. Elige uno para revisar contenido, gestionar personas o generar reportes.
        </p>
      </div>
      
      {/* Fecha */}
      <div className="absolute right-8 bottom-8 text-right hidden md:block">
        <p className="text-xs text-purple_pale/70">Sábado, 11 de julio</p>
        <p className="text-4xl font-black tracking-tight text-panel_white">2026</p>
      </div>
    </div>
  );
}