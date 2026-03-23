'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authService, catalogoService, UniversidadResponse } from '@pre-educa/api-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Esquema de Validación
// Reemplaza tu registerSchema con este:
const registerSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Ingresa un correo válido"),
  password: z.string()
    .min(8, "La contraseña debe tener mínimo 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .regex(/[a-z]/, "Debe contener al menos una letra minúscula")
    .regex(/[0-9]/, "Debe contener al menos un número")
    .regex(/[^A-Za-z0-9]/, "Debe contener al menos un carácter especial"),
  idUniversidad: z.number().min(1, "Selecciona una universidad"),
  idArea: z.number().min(1, "Selecciona un área"),
  idCarrera: z.number().min(1, "Selecciona una carrera"),
  terminos: z.boolean().refine(val => val === true, { message: "Debes aceptar los términos" }),
});
type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [catalogo, setCatalogo] = useState<UniversidadResponse[]>([]);
  const [isLoadingCatalogo, setIsLoadingCatalogo] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { idUniversidad: 0, idArea: 0, idCarrera: 0 }
  });

  // Observamos los cambios en los combos
  const selectedUniversidadId = watch('idUniversidad');
  const selectedAreaId = watch('idArea');
  const passwordValue = watch('password') || ""; // Observamos la contraseña en tiempo real

  // Reglas de validación visuales
  const passwordRules = [
    { label: "Mínimo 8 caracteres", met: passwordValue.length >= 8 },
    { label: "Una letra mayúscula", met: /[A-Z]/.test(passwordValue) },
    { label: "Una letra minúscula", met: /[a-z]/.test(passwordValue) },
    { label: "Un número", met: /[0-9]/.test(passwordValue) },
    { label: "Un carácter especial (!@#$%^&*)", met: /[^A-Za-z0-9]/.test(passwordValue) },
  ];
  // 1. Cargar el Catálogo al iniciar
  useEffect(() => {
    const fetchCatalogo = async () => {
      try {
        const data = await catalogoService.getCatalogoAcademico();
        setCatalogo(data);
      } catch (err) {
        setError("Error al cargar las universidades.");
      } finally {
        setIsLoadingCatalogo(false);
      }
    };
    fetchCatalogo();
  }, []);

  // 2. Lógica en Cascada: Resetear hijos si el padre cambia
  useEffect(() => {
    setValue('idArea', 0);
    setValue('idCarrera', 0);
  }, [selectedUniversidadId, setValue]);

  useEffect(() => {
    setValue('idCarrera', 0);
  }, [selectedAreaId, setValue]);

  // 3. Filtrar las opciones disponibles según lo seleccionado
  const universidadSeleccionada = catalogo.find(u => u.idUniversidad === Number(selectedUniversidadId));
  const areasDisponibles = universidadSeleccionada?.areas || [];

  const areaSeleccionada = areasDisponibles.find(a => a.idArea === Number(selectedAreaId));
  const carrerasDisponibles = areaSeleccionada?.carreras || [];

  // Enviar formulario
  const onSubmit = async (data: RegisterFormData) => {
    setError(null);
    try {
      await authService.register({
        nombre: data.nombre,
        email: data.email,
        password: data.password,
        idCarrera: data.idCarrera,
        idProcesoAdmision: null
      });
      // Redirigir al login con un mensaje de éxito
      router.push('/login?registered=true');
    } catch (err: any) {
      setError(err.response?.data?.message || "Ocurrió un error al registrarte");
    }
  };

  if (isLoadingCatalogo) {
    return <div className="text-center text-slate-500 animate-pulse">Cargando formulario...</div>;
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-2">Crea tu cuenta</h2>
        <p className="text-slate-600 dark:text-slate-400 text-base">Completa tus datos para empezar tu preparación.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-lg text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Datos Personales */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="nombre">Nombre completo</label>
          <input
            {...register('nombre')}
            className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100 ${errors.nombre ? 'border-red-400' : 'border-slate-200 dark:border-slate-800'}`}
            placeholder="Ej. Juan Pérez"
          />
          {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="email">Correo electrónico</label>
          <input
            {...register('email')}
            type="email"
            className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100 ${errors.email ? 'border-red-400' : 'border-slate-200 dark:border-slate-800'}`}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">
            Contraseña
          </label>
          <div className="relative group">
            <input
              {...register('password')}
              type={showPassword ? "text" : "password"}
              className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100 transition-colors pr-12 ${errors.password ? 'border-red-400' : 'border-slate-200 dark:border-slate-800'}`}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>

          {/* Checklist de validación visual */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 border border-slate-100 dark:border-slate-800/50 mt-2">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Tu contraseña debe contener:</p>
            <ul className="space-y-1.5">
              {passwordRules.map((rule, idx) => (
                <li key={idx} className={`flex items-center gap-2 text-xs transition-colors duration-300 ${rule.met ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-slate-400 dark:text-slate-500'}`}>
                  <span className="material-symbols-outlined text-[16px]">
                    {rule.met ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  {rule.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sección Académica Dinámica */}
        <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
          <p className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-4">Tu objetivo académico</p>

          <div className="space-y-4">
            {/* Combo Universidad */}
            <div>
              <select
                {...register('idUniversidad', { valueAsNumber: true })}
                className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 outline-none text-slate-900 dark:text-slate-100 ${errors.idUniversidad ? 'border-red-400' : 'border-slate-200 dark:border-slate-800'}`}
              >
                <option value={0}>Selecciona tu Universidad</option>
                {catalogo.map(uni => (
                  <option key={uni.idUniversidad} value={uni.idUniversidad}>
                    {uni.nombreUniversidad} ({uni.siglas})
                  </option>
                ))}
              </select>
              {errors.idUniversidad && <p className="text-red-500 text-xs mt-1">{errors.idUniversidad.message}</p>}
            </div>

            {/* Combo Área */}
            <div>
              <select
                {...register('idArea', { valueAsNumber: true })}
                disabled={areasDisponibles.length === 0}
                className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 outline-none text-slate-900 dark:text-slate-100 disabled:opacity-50 ${errors.idArea ? 'border-red-400' : 'border-slate-200 dark:border-slate-800'}`}
              >
                <option value={0}>Selecciona tu Área</option>
                {areasDisponibles.map(area => (
                  <option key={area.idArea} value={area.idArea}>
                    Área {area.nombreArea}
                  </option>
                ))}
              </select>
            </div>

            {/* Combo Carrera */}
            <div>
              <select
                {...register('idCarrera', { valueAsNumber: true })}
                disabled={carrerasDisponibles.length === 0}
                className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 outline-none text-slate-900 dark:text-slate-100 disabled:opacity-50 ${errors.idCarrera ? 'border-red-400' : 'border-slate-200 dark:border-slate-800'}`}
              >
                <option value={0}>Selecciona tu Carrera</option>
                {carrerasDisponibles.map(carrera => (
                  <option key={carrera.idCarrera} value={carrera.idCarrera}>
                    {carrera.nombreCarrera}
                  </option>
                ))}
              </select>
              {errors.idCarrera && <p className="text-red-500 text-xs mt-1">{errors.idCarrera.message}</p>}
            </div>
          </div>
        </div>

        {/* Términos y Condiciones */}
        <div className="flex items-start gap-3 pt-2">
          <input
            {...register('terminos')}
            id="terms"
            type="checkbox"
            className="mt-1 w-4 h-4 text-primary focus:ring-primary border-slate-300 rounded cursor-pointer"
          />
          <div className="flex flex-col">
            <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="terms">
              Acepto los <Link className="text-primary font-semibold hover:underline" href="#">Términos de Servicio</Link> y <Link className="text-primary font-semibold hover:underline" href="#">Política de Privacidad</Link>.
            </label>
            {errors.terminos && <p className="text-red-500 text-xs mt-1">{errors.terminos.message}</p>}
          </div>
        </div>

        {/* Botón de Registro */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-[#151b66] text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all disabled:opacity-70 mt-4"
        >
          {isSubmitting ? 'Registrando...' : 'Crear Cuenta'}
        </button>
      </form>

      <div className="mt-8 text-center sm:hidden">
        <p className="text-sm text-slate-500">
          ¿Ya tienes cuenta? <Link className="text-primary font-bold hover:underline" href="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};