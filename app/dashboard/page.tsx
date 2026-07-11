import SideBar from '@/components/admin/SideBar';
import NavBar from '@/components/admin/NavBar';
import WelcomeBanner from '@/components/admin/WelcomeBanner';
import HubModulos from '@/components/admin/HubModulos';
import ActividadReciente from '@/components/admin/ActividadReciente';
import { Modulo } from '@/types/modulo';
// Configuración centralizada de tus módulos (Fácil de cambiar o reordenar)
const ultimasActividades = [
  { 
    id: '1', 
    descripcion: 'Andrea Salas publicó la noticia "Feria de gastronomía 2026: fechas confirmadas".', 
    tiempo: 'Hace 2 horas', 
    modulo: { icon: '📝', titulo: 'Noticias' } // 👈 Pasas el objeto del módulo directamente
  },
  { 
    id: '2', 
    descripcion: 'Testimonio de Génesis Morales quedó pendiente de aprobación.', 
    tiempo: 'Ayer, 11:05', 
    modulo: { icon: '💬', titulo: 'Testimonios' } 
  }
];
const misModulos: Modulo[] = [
  {
    id: 1,
    titulo: 'Noticias',
    descripcion: 'Comunicados, eventos y novedades institucionales.',
    icon: 'noticias',
    ruta: '/dashboard/noticias',
  },
  {
    id: 2,
    titulo: 'Oferta académica',
    descripcion: 'Programas, duración, modalidad y certificaciones.',
    icon: 'oferta',
    ruta: '/dashboard/oferta-academica',
  },
  {
    id: 3,
    titulo: 'Testimonios',
    descripcion: 'Modera testimonios antes de publicarlos en el sitio.',
    icon: 'testimonios',
    ruta: '/dashboard/testimonios',
  },
  {
    id: 4,
    titulo: 'Solicitudes',
    descripcion: 'Gestión de admisiones y peticiones de alumnos.',
    icon: 'solicitudes',
    ruta: '/dashboard/solicitudes',
  }
];
  // Datos del usuario logueado
  const usuarioNombre = "Roy Garcia";
  const usuarioRol = "Administrador";

export default function DashboardPage() {
  const modulosOrdenados = [...misModulos].sort((a, b) => a.id - b.id);
  
  return (
    <div className="min-h-screen bg-panel_bg">
      <SideBar modulos={modulosOrdenados} userName ={usuarioNombre} userRole = {usuarioRol}/>

      <div className="pl-64">
        <main className="p-8 max-w-7xl mx-auto">
          {/* 👈 Le pasamos las propiedades aquí */}
          <NavBar userName={usuarioNombre} userRole={usuarioRol} />
          
          <WelcomeBanner userName={usuarioNombre} userRole={usuarioRol} />
          <HubModulos modulos={modulosOrdenados} />
          <ActividadReciente actividades={ultimasActividades} />
        </main>
      </div>

      <button className="fixed bottom-6 right-6 bg-purple_dark hover:bg-purple_hover text-panel_white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition transform hover:scale-105">
        +
      </button>
    </div>
  );
}