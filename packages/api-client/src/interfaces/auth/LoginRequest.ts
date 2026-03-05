// Basado en LoginRequest.java
export interface LoginRequest {
  email: string;
  password: string;
  plataforma: string; // "WEB" o "MOBILE"
}