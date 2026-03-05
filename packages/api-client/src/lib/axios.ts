import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1',
  // Le dice al navegador que SIEMPRE envíe las cookies en cada petición
  withCredentials: true, 
});


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Si el error es 401 (token expirado) y no hemos reintentado aún
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Llamamos al endpoint de refresh. 
        // 💡 NOTA: No le pasamos el token, el navegador enviará la cookie 
        // "refreshToken" automáticamente porque la ruta es /auth/refresh-token
        await api.post('/auth/refresh-token');
        
        // Si la petición anterior tuvo éxito, el backend ya respondió con un 
        // nuevo header 'Set-Cookie' actualizando el access token.
        // Simplemente reintentamos la petición original que falló.
        return api(originalRequest);
      } catch (refreshError) {
        // Si el refresh token también expiró o es inválido, cerramos sesión
        // Redirigimos al usuario al login
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);