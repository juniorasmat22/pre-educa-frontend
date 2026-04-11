import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-on-background flex">
      {/* 1. Menú Lateral Fijo */}
      <Sidebar />

      {/* 2. Contenedor de Contenido Principal */}
      <div className="md:pl-64 w-full flex flex-col min-h-screen">
        
        {/* Barra de Navegación Superior */}
        <Navbar />

        {/* Espacio de Trabajo (Las páginas se renderizan aquí) */}
        <main className="flex-1 p-6 lg:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>

        {/* Footer Centralizado */}
        <footer className="p-8 text-center border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto text-xs font-medium text-slate-500 dark:text-slate-400">
            <p>© 2026 Pre-Educa. Plataforma de Preparación Universitaria.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Términos</a>
              <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Centro de Ayuda</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}