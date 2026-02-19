import axios from 'axios';

import { authService } from '../services/auth.service';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const setupInterceptors = (
  getTokens: () => { access: string | null; refresh: string | null },
  saveTokens: (tokens: { accessToken: string; refreshToken: string }) => void,
  clearTokens: () => void
) => {
  // 1. Inyectar Access Token en cada petición
  api.interceptors.request.use((config) => {
    const { access } = getTokens();
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  });

  // 2. Manejar expiración y Refresh Token
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // Si el error es 401 y no hemos reintentado aún
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const { refresh } = getTokens();

        if (refresh) {
          try {
            // Llamada al backend para refrescar
            const newTokens = await authService.refreshToken({ refreshToken: refresh });
            
            // Guardar nuevos tokens (en Cookies para Web o SecureStore para App)
            saveTokens(newTokens);
            
            // Reintentar la petición original con el nuevo token
            originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
            return api(originalRequest);
          } catch (refreshError) {
            // Si el refresh token también expiró, cerrar sesión
            clearTokens();
            return Promise.reject(refreshError);
          }
        }
      }
      return Promise.reject(error);
    }
  );
};