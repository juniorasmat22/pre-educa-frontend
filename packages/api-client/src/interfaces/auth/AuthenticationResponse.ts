import { UsuarioResponse } from "../usuario/UsuarioResponse";

export interface AuthenticationResponse {
  accessToken: string;
  refreshToken: string;
  usuario: UsuarioResponse;
}