import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService, UsuarioResponse } from '@pre-educa/api-client';

interface AuthState {
  user: UsuarioResponse | null;
  setUser: (user: UsuarioResponse | null) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      
      setUser: (user) => set({ user }),
      
      logout: async () => {
        try {
          // Llama al backend. El backend debe responder con un Set-Cookie 
          // con maxAge=0 para eliminar las cookies automáticamente.
          await authService.logout(); 
        } catch (error) {
          console.error("Error cerrando sesión en el servidor:", error);
        } finally {
          // 1. Limpiamos el estado global
          set({ user: null });
          
          // 2. Redirigimos usando window.location en lugar de useRouter
          // Esto es una buena práctica en logouts porque fuerza una recarga
          // completa, limpiando cualquier dato residual en memoria.
          if (typeof window !== 'undefined') {
            window.location.href = '/login';
          }
        }
      },
    }),
    {
      name: 'auth-storage', // Clave bajo la cual se guardará en localStorage
    }
  )
);