'use client';
import Link from 'next/link';

export default function GestionAreasPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <span>Panel</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary">Áreas Académicas</span>
          </div>
          <h2 className="text-4xl font-black text-indigo-900 dark:text-white tracking-tight italic">Gestión de Áreas</h2>
          <p className="text-slate-500 text-sm font-medium">Administra las facultades y divisiones curriculares de la institución.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          Nueva Área
        </button>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-primary dark:text-indigo-400">
            <span className="material-symbols-outlined text-3xl">domain</span>
          </div>
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Total Áreas</p>
            <p className="text-4xl font-black text-slate-900 dark:text-white">12</p>
          </div>
        </div>
        
        <div className="bg-indigo-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex items-center gap-6 col-span-1 md:col-span-2">
           <div className="relative z-10">
              <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-1">Impacto Académico</p>
              <p className="text-3xl font-black">45 Carreras Vinculadas</p>
           </div>
           <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10">
              <span className="material-symbols-outlined text-[100px]">hub</span>
           </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50">
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">Nombre del Área</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">Código</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">Carreras</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">Estado</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-indigo-50/20 dark:hover:bg-indigo-900/10 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary dark:text-indigo-400">
                      <span className="material-symbols-outlined">engineering</span>
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Ingeniería</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-sm font-mono font-bold text-slate-500">ING-001</td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-900 dark:text-white">12</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Programas</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                    Activo
                  </span>
                </td>
                <td className="px-8 py-6 text-right space-x-1">
                  <button className="p-2.5 text-slate-400 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-2.5 text-slate-400 hover:text-error transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}