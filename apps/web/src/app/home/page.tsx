'use client';
import { useAuthStore } from '@/hooks/useAuth';

export default function HomePage() {
  const { user } = useAuthStore();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-slate-800">
        Bienvenido, {user?.nombre || 'Estudiante'}
      </h1>
      <p className="text-slate-600">Este es tu panel de estudio de Pre-Educa.</p>
      
      {/* Aquí conectarás con SimulacroController para ver historial */}
    </div>
  );
}