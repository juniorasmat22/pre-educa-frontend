'use client';
import Link from 'next/link';

export default function GestionCursosPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Page Header & Action */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-xs text-on-surface-variant mb-2">
            <Link href="/admin" className="hover:text-primary transition-colors">Panel</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-semibold">Cursos</span>
          </nav>
          <h2 className="text-3xl font-black text-indigo-900 dark:text-white tracking-tight">Gestión de Cursos</h2>
          <p className="text-slate-500">Panel de control de la oferta académica e inscripciones.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none hover:translate-y-[-2px] transition-all active:scale-95">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          Nuevo Curso
        </button>
      </div>

      {/* Dashboard Overview (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center mb-4">
            <span className="material-symbols-outlined">school</span>
          </div>
          <p className="text-2xl font-bold text-indigo-900 dark:text-white">42</p>
          <p className="text-xs text-slate-500 font-medium">Cursos Activos</p>
        </div>
        
        <div className="md:col-span-1 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4">
            <span className="material-symbols-outlined">group</span>
          </div>
          <p className="text-2xl font-bold text-indigo-900 dark:text-white">1,280</p>
          <p className="text-xs text-slate-500 font-medium">Estudiantes Totales</p>
        </div>
        
        <div className="md:col-span-2 bg-indigo-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-1">Estado de Matrícula</p>
            <p className="text-xl font-semibold mb-4">Periodo 2026-I Abierto</p>
            <div className="w-full bg-indigo-800/50 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-400 h-full w-[75%]"></div>
            </div>
            <p className="text-[10px] mt-2 opacity-80">75% de los cupos totales han sido asignados.</p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400">filter_list</span>
          <span className="text-sm font-bold text-indigo-900 dark:text-white">Filtros:</span>
        </div>
        <div className="flex-1 flex flex-wrap gap-4">
          <select className="text-sm border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary bg-slate-50 dark:bg-slate-800 min-w-[180px]">
            <option>Carrera: Todas</option>
            <option>Ingeniería de Sistemas</option>
            <option>Arquitectura</option>
            <option>Medicina</option>
          </select>
          <select className="text-sm border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary bg-slate-50 dark:bg-slate-800 min-w-[150px]">
            <option>Nivel: Todos</option>
            <option>Básico</option>
            <option>Intermedio</option>
            <option>Avanzado</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider">Título del Curso</th>
                <th className="px-6 py-4 text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider">Carrera</th>
                <th className="px-6 py-4 text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider">Dificultad</th>
                <th className="px-6 py-4 text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-primary dark:text-indigo-400">
                      <span className="material-symbols-outlined">terminal</span>
                    </div>
                    <div>
                      <p className="font-bold text-indigo-950 dark:text-white">Introducción a Algoritmos</p>
                      <p className="text-[10px] text-slate-500 font-medium">COD: INF-101</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">Ingeniería de Sistemas</td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-[11px] uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Básico
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="p-2 text-error hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}