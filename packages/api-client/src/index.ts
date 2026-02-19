export const version = "1.0.0";
// Exportar el cliente de axios configurado
export * from './lib/axios';
export * from './lib/storage';

// Exportar todos los servicios (Auth, Simulacros, etc.)
export * from './services/auth.service';

// Exportar todos los tipos y DTOs para que Next.js los reconozca
export * from './interfaces/auth/LoginRequest';
export * from './interfaces/usuario/UsuarioRegistroRequest';
export * from './interfaces/usuario/UsuarioResponse';