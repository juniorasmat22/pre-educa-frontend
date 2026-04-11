'use client';
import Link from 'next/link';

export default function GestionCarrerasPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            <Link href="/admin" className="hover:text-primary transition-colors">Académico</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary">Gestión de Carreras</span>
          </nav>
          <h2 className="text-4xl font-black text-indigo-900 dark:text-white tracking-tight">Carreras Universitarias</h2>
          <p className="text-slate-500 font-medium">Administra la oferta académica y los programas de estudio.</p>
        </div>
        <button className="bg-primary text-white px-8 py-3.5 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          Registrar Carrera
        </button>
      </div>

      {/* Dashboard Style Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Filtrar por Área Académica</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">category</span>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3.5 pl-12 pr-6 text-sm focus:ring-4 focus:ring-primary/10 appearance-none font-bold text-slate-700 dark:text-slate-200 outline-none transition-all cursor-pointer">
                <option>Todas las Áreas</option>
                <option>Ingeniería y Tecnología</option>
                <option>Ciencias de la Salud</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-6">
            <button className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">filter_alt</span>
              Más Filtros
            </button>
          </div>
        </div>

        <div className="bg-primary p-8 rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden relative group">
          <div className="relative z-10">
            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">Total Carreras</p>
            <h3 className="text-5xl font-black text-white mt-2">24</h3>
          </div>
          <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-[120px] text-white/10 group-hover:scale-110 transition-transform">school</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50">
                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Nombre de la Carrera</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Área</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Duración</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Estado</th>
                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-10 py-7">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/40 flex items-center justify-center text-primary dark:text-indigo-400">
                      <span className="material-symbols-outlined text-2xl">terminal</span>
                    </div>
                    <div>
                      <p className="font-black text-slate-900 dark:text-white text-lg leading-tight">Ingeniería de Software</p>
                      <p className="text-[11px] text-slate-400 font-bold tracking-tight mt-1">COD: ING-SOFT-2024</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-7">
                  <span className="px-4 py-1.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[10px] font-black uppercase tracking-wider">Tecnología</span>
                </td>
                <td className="px-8 py-7 font-bold text-slate-500 text-sm">10 Semestres</td>
                <td className="px-8 py-7">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Activa
                  </span>
                </td>
                <td className="px-10 py-7 text-right space-x-2">
                  <button className="p-3 text-slate-400 hover:text-primary transition-all hover:bg-white dark:hover:bg-slate-800 rounded-2xl shadow-sm border border-transparent hover:border-slate-100 opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-3 text-slate-400 hover:text-error transition-all hover:bg-white dark:hover:bg-slate-800 rounded-2xl shadow-sm border border-transparent hover:border-slate-100 opacity-0 group-hover:opacity-100">
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