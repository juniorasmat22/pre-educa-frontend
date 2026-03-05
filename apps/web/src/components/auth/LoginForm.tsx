'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authService } from '@pre-educa/api-client';
import { useAuthStore } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres")
});

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // Estado para el ojito
  const { setUser } = useAuthStore();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setError(null);
    try {
      // 1. Llamamos al backend con tu lógica exacta
      const usuario = await authService.login({
        ...data,
        plataforma: "WEB"
      });
      
      // 2. Guardamos solo la info del usuario en Zustand
      setUser(usuario);
      
      // 3. Redirigimos
      router.push('/home');
    } catch (err: any) {
      setError(err.response?.data?.message || "Credenciales incorrectas");
    }
  };

  return (
    <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-slate-100 dark:border-slate-800">
      {/* Hero image (subtle top border) */}
      <div className="h-3 w-full bg-primary"></div>
      
      <div className="p-8 md:p-10">
        {/* Branding & Title */}
        <div className="mb-10 text-center">
          <h1 className="text-[#0f101a] dark:text-white text-3xl font-black leading-tight tracking-tight mb-2">
            Bienvenido de nuevo
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal">
            Ingresa tus credenciales para acceder a Pre-Educa
          </p>
        </div>

        {/* Alerta de Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[#0f101a] dark:text-slate-200 text-sm font-semibold leading-normal" htmlFor="email">
              Correo electrónico
            </label>
            <div className="relative group">
              <input 
                {...register('email')}
                id="email" 
                type="email" 
                disabled={isSubmitting}
                className={`w-full px-4 py-4 rounded-lg border bg-slate-50 dark:bg-slate-800 text-[#0f101a] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 ${errors.email ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'}`}
                placeholder="ejemplo@correo.com" 
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-primary pointer-events-none">
                alternate_email
              </span>
            </div>
            {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message as string}</p>}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[#0f101a] dark:text-slate-200 text-sm font-semibold leading-normal" htmlFor="password">
                Contraseña
              </label>
              <Link className="text-primary text-xs font-bold hover:underline" href="#">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <div className="relative group">
              <input 
                {...register('password')}
                id="password" 
                type={showPassword ? "text" : "password"} 
                disabled={isSubmitting}
                className={`w-full px-4 py-4 rounded-lg border bg-slate-50 dark:bg-slate-800 text-[#0f101a] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 pr-12 ${errors.password ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'}`}
                placeholder="••••••••" 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <span className="material-symbols-outlined text-xl">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs font-medium">{errors.password.message as string}</p>}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input 
              id="remember" 
              type="checkbox" 
              className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary cursor-pointer"
            />
            <label className="text-sm text-slate-600 dark:text-slate-400 font-medium cursor-pointer" htmlFor="remember">
              Recordar sesión
            </label>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-[#151b66] text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            <span>{isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}</span>
            {!isSubmitting && (
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                login
              </span>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-slate-900 px-4 text-slate-400 font-semibold tracking-widest">
              O continúa con
            </span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Microsoft</span>
          </button>
        </div>

        {/* Secure Badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
          <span className="material-symbols-outlined text-sm">lock</span>
          <span>Conexión cifrada de punto a punto</span>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
          ¿No tienes una cuenta?{' '}
          <Link className="text-primary font-bold hover:underline" href="/register">
            Regístrate gratis
          </Link>
        </p>
      </div>
    </div>
  );
};