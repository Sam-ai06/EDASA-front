import { CurrentUser } from '@/types/admin';
import { Modulo } from '@/types/modulo';

interface SideBarProps extends CurrentUser {
  modulos: Modulo[];
}
const obtenerIniciales = (nombre: string) => {
    return nombre
      .split(' ')
      .map((palabra) => palabra[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
export default function SideBar({ modulos,userName, userRole }: SideBarProps) {
  return (
    <aside className="w-64 bg-purple_dark text-white flex flex-col h-screen fixed left-0 top-0 p-4">
      {/* Logo / Header */}
      <div className="mb-8 border-b border-purple_hover pb-4">
        <div className="flex items-center gap-2">
          {/*ACA DEBE IR EL LOGO QUE NO HE HECHO TODAVIA PIPIPI */}
          <div className="bg-panel_white text-purple_dark font-bold p-2 rounded-lg text-sm">EDA</div>
          <div>
            <h1 className="font-bold text-sm tracking-wide">Panel Administrativo</h1>
            <p className="text-xs text-purple_pale/80">ESCUELA DE LAS AMÉRICAS</p>
          </div>
        </div>
        
        {/* Usuario */}
        <div className="mt-6 flex items-center gap-3">
          <div className="bg-purple_light w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">{obtenerIniciales(userName)}</div>
          <div>
            <p className="text-sm font-semibold">{userName}</p>
            <p className="text-xs text-purple_pale/70">{userRole}</p>
          </div>
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex-1 space-y-6">
        <div>
          <button className="w-full flex items-center gap-3 bg-purple_light text-white px-4 py-2.5 rounded-xl text-sm font-medium transition hover:bg-purple_hover">
            <span>🏠</span> Inicio
          </button>
        </div>

        {/* Sección: Contenido */}
        <div>
          <p className="text-xs font-semibold text-purple_pale/60 uppercase tracking-wider mb-2 px-2">Módulos</p>
          <ul className="space-y-1">
            {modulos.map((mod) => (
              <li key={mod.id}>
                <a 
                  href={mod.ruta} 
                  className="flex items-center justify-between px-3 py-2 text-sm rounded-lg text-purple_pale hover:bg-purple_hover transition"
                >
                  <div className="flex items-center gap-3">
                    <span>📁</span> {mod.titulo}
                  </div>
        
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Footer / Cerrar Sesión */}
      <div className="border-t border-purple_hover pt-4">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-purple_pale/80 hover:text-white transition">
          <span>🚪</span> Cerrar sesión
        </button>
      </div>
    </aside>
  );
}