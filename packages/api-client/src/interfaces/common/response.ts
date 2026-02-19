// Basado en ApiResponse.java
export interface ApiResponse<T> {
  timestamp: string; // LocalDateTime se recibe como string ISO
  success: boolean;
  status: number;
  message: string;
  data: T;
}

// Basado en ErrorResponse.java
// Útil para capturar errores de validación o excepciones del negocio
export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
}