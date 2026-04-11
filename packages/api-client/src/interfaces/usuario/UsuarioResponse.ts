import { RolResponse } from "../rol/RolResponse";

export interface UsuarioResponse {
  id: number;
  nombre: string;
  email: string;
  rol: RolResponse;
}