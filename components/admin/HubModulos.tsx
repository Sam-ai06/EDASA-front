import { Modulo } from '../../types/modulo';

interface HubModulosProps {
  modulos: Modulo[];
}

export default function HubModulos({ modulos }: HubModulosProps) {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">Módulos</h3>
      <p className="text-sm text-gray-500 mb-6">Selecciona un módulo para gestionar su contenido</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modulos.map((mod) => (
          <div key={mod.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              {/* Header Card */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-50 text-purple_dark rounded-xl text-xl">
                  📝
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base">{mod.titulo}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{mod.descripcion}</p>
                </div>
              </div>

              {/* Acciones Rápidas */}
              <div className="flex gap-2 mb-4">
                <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 py-1.5 rounded-lg transition">
                  + Nuevo
                </button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 py-1.5 rounded-lg transition">
                  Ver todos
                </button>
              </div>
            </div>

            {/* Footer Card */}
            <div className="border-t border-gray-50 pt-3 flex items-center justify-between text-xs">
              <a href={mod.ruta} className="text-purple_dark font-bold hover:underline inline-flex items-center gap-1">
                Abrir módulo ➔
              </a>
              <span className="text-gray-400">
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}