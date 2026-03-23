import { RegisterForm } from '@/components/auth/RegisterForm';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import Link from 'next/link';

export const metadata = {
  title: 'Crear Cuenta | Pre-Educa',
};

export default function RegisterPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="flex min-h-screen">
        
        {/* Lado Izquierdo: Ilustración/Hero */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden items-center justify-center p-12">
          {/* Elementos Decorativos */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-white/20 blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/10 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-lg">
            <div className="mb-8 flex justify-center">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md inline-block text-white">
                <span className="material-symbols-outlined text-6xl">school</span>
              </div>
            </div>
            <h1 className="text-white text-5xl font-black mb-6 leading-tight tracking-tight">Únete a AcademiaPrep</h1>
            <p className="text-white/80 text-xl font-normal leading-relaxed">
              Inicia tu preparación con los mejores simulacros y asegura tu ingreso a la universidad.
            </p>
          </div>
        </div>

        {/* Lado Derecho: Formulario de Registro */}
        <div className="w-full lg:w-1/2 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto custom-scrollbar">
          
          {/* Header Mobile y Navegación */}
          <header className="flex items-center justify-between p-6 lg:px-12 lg:pt-10">
            <div className="flex items-center gap-2 lg:hidden">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
              <span className="text-xl font-bold tracking-tight text-primary">AcademiaPrep</span>
            </div>
            <div className="ml-auto flex items-center gap-4 text-sm">
              <ThemeToggle />
              <div className="hidden sm:block text-slate-500 dark:text-slate-400">
                ¿Ya tienes una cuenta? <Link className="font-bold text-primary hover:underline ml-1" href="/login">Inicia sesión</Link>
              </div>
            </div>
          </header>

          <main className="flex-grow flex items-center justify-center p-6 lg:p-12">
            <RegisterForm />
          </main>
          
        </div>
      </div>
    </div>
  );
}