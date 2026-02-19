import { RegisterForm } from '@/components/auth/RegisterForm';
import Link from 'next/link';

export const metadata = {
  title: 'Registro | Pre-Educa',
  description: 'Crea tu cuenta en Pre-Educa y comienza a prepararte',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md">
        {/* Renderizamos el componente cliente */}
        <RegisterForm />
        
        {/* Enlace para regresar al login */}
        <p className="text-center mt-6 text-slate-600">
          ¿Ya tienes una cuenta?{' '}
          <Link 
            href="/login" 
            className="text-blue-600 font-semibold hover:underline"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}