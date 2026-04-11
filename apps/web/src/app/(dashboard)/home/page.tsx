'use client';
import Link from 'next/link';
import { useAuthStore } from '@/hooks/useAuth';

export default function HomePage() {
  const { user } = useAuthStore();
  // Solo tomamos el primer nombre para un saludo más casual
  const primerNombre = user?.nombre?.split(' ')[0] || 'Estudiante'; 

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-primary text-white p-8 md:p-12 shadow-xl">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[300px] -rotate-12 translate-x-12 translate-y-12">school</span>
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              ¡Bienvenido de nuevo, {primerNombre}!
            </h2>
            <p className="text-indigo-200 text-lg mb-8 max-w-md">
              Has completado el 72% de tu meta mensual. ¡Mantén el ritmo y alcanza tus objetivos!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg active:scale-95">
                Continuar Última Clase
              </button>
              <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold border border-white/30 hover:bg-white/20 transition-all active:scale-95">
                Ver Calendario
              </button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-xs uppercase font-bold text-indigo-200 tracking-widest">Progreso del Mes</p>
                <p className="text-3xl font-black">72%</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-indigo-200">18/25 Lecciones</p>
              </div>
            </div>
            {/* OJO AQUÍ: Usamos style={{ width: '72%' }} porque JSX requiere objetos para la propiedad style */}
            <div className="w-full bg-indigo-900 rounded-full h-3 mb-2">
              <div className="bg-blue-400 h-3 rounded-full" style={{ width: '72%' }}></div>
            </div>
            <p className="text-xs text-indigo-200 italic text-center mt-4">
              “La educación es el arma más poderosa para cambiar el mundo.”
            </p>
          </div>
        </div>
      </section>

      {/* Grid Layout for Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Column: My Courses */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-white">Mis Cursos</h3>
            <button className="text-primary dark:text-indigo-400 font-semibold text-sm hover:underline flex items-center gap-1">
              Ver todos <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Card 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="h-32 bg-slate-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Desarrollo Web" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-primary uppercase">Intermedio</div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg text-indigo-900 dark:text-white mb-2">Desarrollo Web Fullstack Moderno</h4>
                <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">person</span> Prof. Elena Rossi
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500">
                    <span>PROGRESO</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                    <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="h-32 bg-slate-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Análisis de Datos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-primary uppercase">Avanzado</div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg text-indigo-900 dark:text-white mb-2">Análisis de Datos con Python</h4>
                <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">person</span> Prof. Marcos Silva
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500">
                    <span>PROGRESO</span>
                    <span>82%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                    <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Column: Quick Actions & Recomm */}
        <div className="space-y-8">
          
          {/* Quick Action: Simulacro */}
          <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-20">
              <span className="material-symbols-outlined text-8xl">timer</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Ponte a prueba</h4>
            <p className="text-slate-400 text-sm mb-6">Realiza un simulacro de examen y mide tus conocimientos actuales.</p>
            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20 active:scale-95">
              <span className="material-symbols-outlined">quiz</span>
              Realizar Simulacro
            </button>
          </div>

          {/* Recommended Content */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm">
            <h3 className="font-bold text-indigo-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary dark:text-indigo-400">auto_awesome</span>
              Recomendado
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 group cursor-pointer">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <span className="material-symbols-outlined text-3xl text-slate-400 w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform">play_circle</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary dark:text-indigo-400 uppercase">Video Tip</p>
                  <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-200 line-clamp-2">Cómo gestionar tu tiempo de estudio eficazmente</h5>
                </div>
              </div>
              <div className="flex gap-3 group cursor-pointer">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <span className="material-symbols-outlined text-3xl text-slate-400 w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform">article</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary dark:text-indigo-400 uppercase">Lectura</p>
                  <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-200 line-clamp-2">Fundamentos de Comprensión Lectora Rápida</h5>
                </div>
              </div>
            </div>
            <button className="w-full py-2 text-primary dark:text-indigo-400 font-bold text-sm border-t border-slate-100 dark:border-slate-800 mt-2 pt-4 hover:underline">
              Explorar Contenidos
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}