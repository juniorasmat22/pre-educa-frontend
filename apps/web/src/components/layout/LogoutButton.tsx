'use client';
import { useState } from 'react';
import { useAuthStore } from '@/hooks/useAuth';

export const LogoutButton = () => {
  const { logout } = useAuthStore();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    // Bloqueamos el botón para evitar múltiples clics
    setIsLoggingOut(true);
    
    // Llamamos a la función de Zustand (que limpia cookies, localStorage y redirige a /login)
    await logout(); 
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoggingOut}
      className="w-full group flex items-center gap-3 p-3 rounded-xl font-sans text-sm font-semibold transition-all text-slate-600 dark:text-slate-400 hover:text-error dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Cerrar sesión"
    >
      {isLoggingOut ? (
        // Ícono girando mientras procesa la salida
        <span className="material-symbols-outlined animate-spin text-error dark:text-red-400">
          autorenew
        </span>
      ) : (
        // Ícono normal de logout con un sutil efecto de movimiento al hacer hover
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
          logout
        </span>
      )}
      
      <span>{isLoggingOut ? 'Saliendo...' : 'Cerrar Sesión'}</span>
    </button>
  );
};