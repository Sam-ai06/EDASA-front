import type {Actividad} from "@/types/accion";
//por auditoria se deberian guardar las ultimas acciones (eventos exitosos), necesito el icon por ux xd
interface ActividadRecienteProps {
  actividades: Actividad[];
}

export default function ActividadReciente({ actividades }: ActividadRecienteProps) {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold text-text_main mb-4">Actividad reciente</h3>
      
      <div className="bg-panel_white rounded-2xl border border-border_light shadow-sm overflow-hidden">
        <div className="divide-y divide-border_light">
          {actividades.map((act) => (
            <div key={act.id} className="flex items-start gap-4 p-5 hover:bg-panel_bg transition">
              {/* Usamos directamente el icono del módulo */}
              <div className="p-2.5 bg-purple_pale text-purple_dark rounded-full text-base shrink-0">
                {act.modulo.icon}
              </div>
              
              {/* Contenido */}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm text-text_main font-medium">
                  {act.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}