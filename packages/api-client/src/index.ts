export const version = "1.0.0";
// Exportar el cliente de axios configurado
export * from './lib/axios';

// Exportar todos los servicios (Auth, Simulacros, etc.)
export * from './services/auth.service';
export * from './services/catalogo.service';

// Exportar todos los tipos y DTOs para que Next.js los reconozca
export * from './interfaces/auth/LoginRequest';
export * from './interfaces/usuario/UsuarioRegistroRequest';
export * from './interfaces/usuario/UsuarioResponse';
export * from './interfaces/universidad/UniversidadResponse';
export * from './interfaces/area/AreaResponse';
export * from './interfaces/carrera/CarreraResponse';
export * from './interfaces/common/response';