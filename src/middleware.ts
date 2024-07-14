import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/signin' || path === '/signup' || path === '/'

  const token = request.cookies.get('token')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/problem-setter', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl))
  }
    
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/problem-setter',
    '/signin',
    '/signup',
    `/problem-setter/:path*`
  ]
}