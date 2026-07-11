import type { CurrentUser } from "@/types/admin";

export default function NavBar({ userName, userRole }: CurrentUser) {
  // Obtenemos las iniciales del nombre de forma dinámica (ej: "Andrea Salas" -> "AS"), para el icon
  const obtenerIniciales = (nombre: string) => {
    return nombre
      .split(' ')
      .map((palabra) => palabra[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-text_main">Inicio</h2>
      </div>
      
      {/* Buscador y Perfil */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Buscar en cualquier módulo..." 
            className="bg-panel_bg text-text_main text-sm rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-purple_light"
          />
          <span className="absolute left-3.5 top-2.5 text-text_light text-sm">🔍</span>
        </div>
        
        <button className="p-2 text-text_muted hover:bg-panel_bg rounded-full transition">🔔</button>
        
        <div className="flex items-center gap-2 border-l border-border_light pl-4">
          {/* Iniciales dinámicas */}
          <div className="bg-purple_dark text-panel_white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">
            {obtenerIniciales(userName)}
          </div>
          
          <div className="text-left hidden sm:block">
            {/* Datos dinámicos desde las props */}
            <p className="text-xs font-bold text-text_main">{userName}</p>
            <p className="text-[10px] text-text_light">{userRole}</p>
          </div>
        </div>
      </div>
    </header>
  );
}