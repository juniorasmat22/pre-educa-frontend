'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authService, tokenStorage } from '@pre-educa/api-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuthStore } from '@/hooks/useAuth';

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useAuthStore();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setError(null);
    try {
      // Conecta con /api/v1/auth/login
      const response = await authService.login(data);
      
      // Guardar tokens en cookies
      tokenStorage.setTokens(response.accessToken, response.refreshToken);
      
      // Guardar usuario en estado global
      setUser(response.usuario);
      
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || "Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-slate-800 text-center">Pre-Educa</h2>
      
      {error && <div className="p-3 bg-red-100 text-red-600 rounded-lg text-sm">{error}</div>}

      <div>
        <label className="text-sm font-medium text-slate-600">Email</label>
        <input 
          {...register('email')} 
          disabled={isSubmitting}
          className="w-full p-3 mt-1 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition" 
          placeholder="ejemplo@correo.com" 
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-slate-600">Contraseña</label>
        <input 
          {...register('password')} 
          type="password"
          disabled={isSubmitting}
          className="w-full p-3 mt-1 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition" 
          placeholder="••••••" 
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message as string}</p>}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
};