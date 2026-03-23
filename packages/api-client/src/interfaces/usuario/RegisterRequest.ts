export interface RegisterRequest {
  nombre: string;
  email: string;
  password: string;
  idCarrera: number;
  idProcesoAdmision: number | null;
}