import { LoginForm } from '@/components/auth/LoginForm';
import Link from 'next/link';

export const metadata = {
  title: 'Iniciar Sesión | Pre-Educa',
  description: 'Accede a tu cuenta de preparación académica',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md">
        {/* Renderizamos el componente cliente que contiene la lógica */}
        <LoginForm />
        
        {/* Enlace para ir al registro */}
        <p className="text-center mt-6 text-slate-600">
          ¿Aún no tienes una cuenta?{' '}
          <Link 
            href="/register" 
            className="text-blue-600 font-semibold hover:underline"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}