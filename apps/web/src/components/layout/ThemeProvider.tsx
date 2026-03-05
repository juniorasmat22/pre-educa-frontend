'use client';
import { useEffect, useState } from 'react';
import { useThemeStore } from '@/hooks/useTheme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // Evita errores de hidratación entre el servidor y el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    }
  }, [theme, mounted]);

  // Si no se ha montado, no forzamos nada para evitar parpadeos extraños
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
};