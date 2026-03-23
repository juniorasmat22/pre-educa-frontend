import { ApiResponse } from "../interfaces/common/response";
import { UniversidadResponse } from "../interfaces/universidad/UniversidadResponse";
import { api } from "../lib/axios";

export const catalogoService ={
getCatalogoAcademico: async () => {
    // Hace un GET al endpoint para traer las universidades y carreras
    const { data } = await api.get<ApiResponse<UniversidadResponse[]>>('/catalogo/universidades');
    return data.data;
  },
}