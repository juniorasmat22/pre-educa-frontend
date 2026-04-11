'use client';
import { useAuthStore } from '@/hooks/useAuth';
import Link from 'next/link';

export default function AdminDashboard() {
  const { user } = useAuthStore();
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      
      {/* Welcome & Actions Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-indigo-900 dark:text-white tracking-tight">
            Resumen Académico
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Bienvenido de nuevo, {user?.nombre || 'Administrador'}. Aquí tienes el estado actual.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-white dark:bg-slate-900 text-primary dark:text-indigo-400 border border-primary dark:border-indigo-400 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Añadir Nueva Área
          </button>
          <button className="flex items-center gap-2 bg-primary hover:bg-[#151b66] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">library_add</span>
            Nuevo Curso
          </button>
        </div>
      </div>

      {/* KPI Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-primary dark:text-indigo-400 rounded-lg">
              <span className="material-symbols-outlined">group</span>
            </div>
            <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">+12%</span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">Estudiantes Activos</p>
            <h3 className="text-2xl font-black text-indigo-900 dark:text-white">2,840</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">+8.4%</span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">Ingresos Mensuales</p>
            <h3 className="text-2xl font-black text-indigo-900 dark:text-white">$14,250</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg">
              <span className="material-symbols-outlined">star</span>
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-full">Estable</span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">Promedio General</p>
            <h3 className="text-2xl font-black text-indigo-900 dark:text-white">8.7/10</h3>
          </div>
        </div>

        <div className="bg-indigo-900 p-6 rounded-2xl shadow-lg shadow-indigo-900/20 text-white flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-white/20 text-white rounded-lg">
                <span className="material-symbols-outlined">auto_graph</span>
              </div>
            </div>
            <p className="text-white/70 text-sm font-semibold">Tasa de Finalización</p>
            <h3 className="text-2xl font-black">74%</h3>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Main Section: Management */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Area Management List (2/3 width) */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-indigo-900 dark:text-white">Gestión de Áreas</h2>
              <button className="text-primary dark:text-indigo-400 font-bold text-sm hover:underline">Ver todas</button>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              
              {/* Area Item */}
              <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-primary dark:text-indigo-400">
                    <span className="material-symbols-outlined">engineering</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Ingeniería</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">14 Cursos • 820 Alumnos</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:text-error transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>

              {/* Area Item */}
              <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-700 dark:text-red-400">
                    <span className="material-symbols-outlined">medical_services</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Salud</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">22 Cursos • 1,140 Alumnos</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:text-error transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Side Panel: Stats/Analytics (1/3 width) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-extrabold text-indigo-900 dark:text-white mb-6">Actividad Semanal</h3>
            <div className="flex items-end justify-between h-32 gap-2 mb-4 px-2">
              <div className="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-lg h-[40%]"></div>
              <div className="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-lg h-[60%]"></div>
              <div className="w-full bg-primary rounded-t-lg h-[85%]"></div>
              <div className="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-lg h-[50%]"></div>
              <div className="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-lg h-[75%]"></div>
              <div className="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-lg h-[45%]"></div>
              <div className="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-lg h-[30%]"></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
            </div>
          </div>

          {/* Quick Notification/Alert Card */}
          <div className="bg-primary text-white p-6 rounded-3xl shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-bold text-sm mb-2 opacity-90 uppercase tracking-widest">Alerta de Sistema</h4>
              <p className="text-lg font-bold leading-snug">3 simulacros pendientes de revisión.</p>
              <button className="mt-4 bg-white/10 hover:bg-white/20 transition-colors py-2 px-4 rounded-xl text-sm font-bold border border-white/20 backdrop-blur-sm">
                Revisar ahora
              </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-9xl opacity-10 rotate-12">warning</span>
          </div>
        </div>
      </div>
    </div>
  );
}