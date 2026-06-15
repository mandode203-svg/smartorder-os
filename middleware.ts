import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  
  // Création du client Supabase pour le middleware
  const supabase = createMiddlewareClient({ req, res });

  // Récupération de la session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protection des routes : si non connecté et vers une route protégée
  const isProtectedPath = req.nextUrl.pathname.startsWith('/dashboard') || 
                          req.nextUrl.pathname.startsWith('/stockshop') ||
                          req.nextUrl.pathname.startsWith('/crm');

  if (!session && isProtectedPath) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

// On définit les chemins qui doivent être vérifiés
export const config = {
  matcher: ['/dashboard/:path*', '/stockshop/:path*', '/crm/:path*', '/finance/:path*'],
};
