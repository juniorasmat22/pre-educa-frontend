import { AreaResponse } from "../area/AreaResponse";

export interface UniversidadResponse {
  idUniversidad: number;
  nombreUniversidad: string;
  siglas: string;
  areas: AreaResponse[];
}