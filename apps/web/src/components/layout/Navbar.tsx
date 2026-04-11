'use client';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useAuthStore } from '@/hooks/useAuth';

export const Navbar = () => {
  const { user } = useAuthStore();

  return (
    <header className="flex items-center justify-between px-6 w-full sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md h-16 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-primary dark:text-white md:hidden">Pre-Educa</span>
        <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 gap-2 border border-slate-200 dark:border-slate-700">
          <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="bg-transparent border-none focus:ring-0 text-xs w-64 outline-none text-slate-700 dark:text-slate-200" 
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2" />

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-primary dark:text-white leading-none">{user?.nombre}</p>
            <p className="text-[10px] text-slate-500 mt-1 uppercase font-medium">{user?.rol?.nombre}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary-fixed flex items-center justify-center border-2 border-primary/10">
            <span className="text-primary font-bold text-sm">{user?.nombre?.[0]}</span>
          </div>
        </div>
      </div>
    </header>
  );
};