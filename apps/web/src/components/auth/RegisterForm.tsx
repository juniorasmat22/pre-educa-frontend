'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authService } from '@pre-educa/api-client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const registerSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  carreraId: z.coerce.number().min(1, "Selecciona una carrera"),
});

export const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      await authService.register(data);
      router.push('/login?success=true');
    } catch (err: any) {
      setError(err.response?.data?.message || "Error al crear la cuenta");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-slate-800">Crea tu cuenta</h2>
      {error && <div className="p-3 bg-red-50 text-red-500 rounded-lg text-sm">{error}</div>}
      
      <input {...register('nombre')} placeholder="Nombre completo" className="w-full p-3 border rounded-lg" />
      <input {...register('email')} placeholder="Correo electrónico" className="w-full p-3 border rounded-lg" />
      <input {...register('password')} type="password" placeholder="Contraseña" className="w-full p-3 border rounded-lg" />
      
      {/* Aquí podrías mapear las carreras obtenidas de CarreraController */}
      <select {...register('carreraId')} className="w-full p-3 border rounded-lg bg-white">
        <option value="">Selecciona tu carrera</option>
        <option value="1">Ingeniería de Sistemas</option> 
      </select>

      <button disabled={isSubmitting} className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition">
        {isSubmitting ? "Registrando..." : "Registrarse"}
      </button>
    </form>
  );
};