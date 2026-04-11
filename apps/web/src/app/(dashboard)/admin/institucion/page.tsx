'use client';
import Link from 'next/link';

export default function InstitucionPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link href="/admin" className="hover:text-primary transition-colors font-medium">Panel</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold">Configuración Institucional</span>
          </nav>
          <h2 className="text-3xl font-black text-indigo-900 dark:text-white tracking-tight">Configuración Estructural</h2>
          <p className="text-slate-500 mt-1">Organiza la jerarquía de Áreas, Carreras y Cursos de la Institución.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold rounded-xl hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm">
            <span className="material-symbols-outlined text-lg">file_upload</span>
            Importar CSV
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-bold rounded-xl hover:opacity-90 shadow-lg shadow-primary/20 transition-all">
            <span className="material-symbols-outlined text-lg">add</span>
            Nueva Área
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Tree View */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                  <span className="material-symbols-outlined text-primary dark:text-indigo-400">account_balance</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-indigo-950 dark:text-white">Universidad Nacional de Trujillo</h3>
                  <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Campus Principal • 4 Facultades activas</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span className="material-symbols-outlined text-sm">info</span>
                Arrastra para reordenar
              </div>
            </div>

            {/* Hierarchical Tree */}
            <div className="space-y-4">
              {/* Facultad Item */}
              <div className="group border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50/30 dark:bg-slate-950/30 overflow-hidden">
                <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontVariationSettings: "'wght' 300" }}>drag_indicator</span>
                    <span className="material-symbols-outlined text-indigo-600">keyboard_arrow_down</span>
                    <span className="material-symbols-outlined text-indigo-700">account_tree</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Facultad de Ingeniería y Tecnología</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">edit</span></button>
                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">add_circle</span></button>
                  </div>
                </div>
                {/* Contenido Expandido */}
                <div className="pl-14 pr-4 pb-4 space-y-3 pt-2">
                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-between hover:border-indigo-200 transition-colors group/row">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-200 text-sm">drag_handle</span>
                      <span className="material-symbols-outlined text-slate-400 text-sm">school</span>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Ingeniería de Sistemas</span>
                    </div>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full font-bold">12 CURSOS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Drop Zone */}
          <div className="bg-indigo-50/30 dark:bg-indigo-900/10 border-2 border-dashed border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center group">
            <div className="h-14 w-14 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-indigo-600 text-2xl">move_to_inbox</span>
            </div>
            <h4 className="font-bold text-indigo-900 dark:text-indigo-300">Asignación Masiva</h4>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mt-2">Arrastra elementos desde la barra de recursos para asignarlos a una nueva categoría.</p>
          </div>
        </div>

        {/* Resources Side Panel */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-indigo-900 rounded-2xl p-6 text-white shadow-xl shadow-indigo-900/10 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">Capacidad Total</p>
              <h4 className="text-4xl font-black mb-6">12,450 <span className="text-sm font-normal opacity-60">Cupos</span></h4>
              <div className="w-full bg-indigo-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-300 h-full w-[72%]"></div>
              </div>
              <p className="text-[10px] mt-3 opacity-60 font-medium">72% de la infraestructura académica asignada</p>
            </div>
            <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-[150px] opacity-10 rotate-12">hub</span>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/50">
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Recursos sin Asignar</h4>
              <span className="bg-red-500 text-[10px] text-white px-2 py-0.5 rounded-full font-black">24</span>
            </div>
            <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar">
               <div className="p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl flex items-center gap-3 hover:shadow-md cursor-grab active:cursor-grabbing transition-all border-l-4 border-l-orange-400">
                  <span className="material-symbols-outlined text-slate-300 text-sm">drag_handle</span>
                  <div>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Introducción a la IA</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Nuevo Curso • 4 Créditos</p>
                  </div>
               </div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-100 dark:border-slate-800">
              <button className="w-full py-2.5 text-xs font-bold text-primary dark:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all shadow-sm">
                Ver todos los recursos
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAB - Botón de Guardar cambios */}
      <button className="fixed bottom-10 right-10 h-16 w-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group z-[100]">
        <span className="material-symbols-outlined text-2xl">save</span>
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs py-2 px-4 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          Guardar Configuración
        </span>
      </button>
    </div>
  );
}