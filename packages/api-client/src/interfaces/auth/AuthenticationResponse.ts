import { UsuarioResponse } from "../usuario/UsuarioResponse";

export interface AuthenticationResponse {
  token: string;
  refreshToken: string;
  usuario: UsuarioResponse;
}