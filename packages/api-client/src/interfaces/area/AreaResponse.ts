import { CarreraResponse } from "../carrera/CarreraResponse";

export interface AreaResponse {
  idArea: number;
  nombreArea: string;
  carreras: CarreraResponse[];
}