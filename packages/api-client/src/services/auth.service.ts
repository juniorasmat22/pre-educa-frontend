import { AuthenticationResponse } from '../interfaces/auth/AuthenticationResponse';
import { LoginRequest } from '../interfaces/auth/LoginRequest';
import { ApiResponse } from '../interfaces/common/response';
import { RefreshTokenRequest } from '../interfaces/token/RefreshTokenRequest';
import { UsuarioRegistroRequest } from '../interfaces/usuario/UsuarioRegistroRequest';
import { api } from '../lib/axios';


export const authService = {
  // Conecta con UsuarioController.java -> /api/v1/auth/login
  login: async (credentials: LoginRequest) => {
    // Definimos que la respuesta es un ApiResponse que contiene un AuthenticationResponse
    const { data } = await api.post<ApiResponse<AuthenticationResponse>>(
      '/auth/login', 
      credentials
    );
    return data.data; // Retornamos directamente el DTO de autenticación
  },

  // Conecta con UsuarioController.java -> /api/v1/auth/registrar
register: async (userData: UsuarioRegistroRequest) => {
    const { data } = await api.post<ApiResponse<any>>(
      '/auth/registrar', 
      userData
    );
    return data;
  },

 // POST /api/v1/auth/refresh-token
  refreshToken: async (request: RefreshTokenRequest) => {
    const { data } = await api.post<ApiResponse<AuthenticationResponse>>(
      '/auth/refresh-token', 
      request
    );
    return data.data;
  },

  // POST /api/v1/auth/logout
  logout: async () => {
    // El interceptor de axios adjuntará automáticamente el Header Authorization
    const { data } = await api.post<ApiResponse<string>>('/auth/logout');
    return data;
  }
};
