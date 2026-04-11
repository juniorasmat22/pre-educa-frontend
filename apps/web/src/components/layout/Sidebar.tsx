'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/hooks/useAuth';
import { LogoutButton } from './LogoutButton';

export const Sidebar = () => {
  const pathname = usePathname();
  const { user } = useAuthStore();
  const isAdmin = user?.rol?.nombre === 'ADMIN' || user?.rol?.nombre === 'ROLE_ADMIN';

  const navLinks = isAdmin 
    ? [
        { href: '/admin', label: 'Inicio', icon: 'dashboard' },
        { href: '#', label: 'Gestión de Áreas', icon: 'account_tree' },
        { href: '#', label: 'Cursos', icon: 'school' },
        { href: '#', label: 'Analítica', icon: 'analytics' },
      ]
    : [
        { href: '/home', label: 'Inicio', icon: 'dashboard' },
        { href: '#', label: 'Mis Cursos', icon: 'menu_book' },
        { href: '#', label: 'Simulacros', icon: 'timer' },
        { href: '#', label: 'Ranking', icon: 'leaderboard' },
      ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 px-4 py-6 border-r hidden md:flex flex-col bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 z-50">
      <div className="mb-8 px-3">
        <h2 className="text-xl font-black text-primary dark:text-white mb-1">Pre-Educa</h2>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          {isAdmin ? 'Panel Administrativo' : 'Panel de Estudiante'}
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`group flex items-center gap-3 p-3 rounded-xl text-sm font-semibold transition-all ${
              pathname === link.href
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-auto">
        <LogoutButton />
      </div>
    </aside>
  );
};