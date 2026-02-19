export interface UsuarioRegistroRequest {
  nombre: string;
  email: string;
  password: string;
  carreraId: number; // ID de la carrera a la que postula
}