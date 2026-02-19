import { create } from 'zustand';
import { authService, tokenStorage, UsuarioResponse } from '@pre-educa/api-client';
import { useRouter } from 'next/navigation';

interface AuthState {
  user: UsuarioResponse | null;
  setUser: (user: UsuarioResponse | null) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: async () => {
    try {
      await authService.logout(); // Llama a tu endpoint @PostMapping("/logout")
    } finally {
      tokenStorage.clearTokens();
      set({ user: null });
    }
  },
}));