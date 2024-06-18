import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/foo') {
        const destination = request.nextUrl.clone();
        destination.hash = '#baz';
        destination.pathname = '/bar'
        return NextResponse.redirect(destination)
    }
    if (request.nextUrl.pathname === '/baz') {
        const destination = request.nextUrl.clone();
        destination.searchParams.set('baz', 'qux');
        destination.pathname = '/bar'
        return NextResponse.redirect(destination)
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }