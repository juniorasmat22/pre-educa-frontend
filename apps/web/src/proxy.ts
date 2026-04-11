import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas que no requieren autenticación
const publicRoutes = ['/auth/login', '/auth/register'];


export function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value; 
  const currentPath = request.nextUrl.pathname;

  const isPublicRoute = publicRoutes.some(route => currentPath.startsWith(route));

  if (!token && !isPublicRoute) {
    const loginUrl = new URL('/auth/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (currentPath === '/') {
    return NextResponse.redirect(new URL(token ? '/home' : '/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};