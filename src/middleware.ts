import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const url = request.nextUrl.clone()

  // Handle WWW redirect - force www for SEO canonicalization
  if (host === 'smidigflytt365.se' || host === 'smidigflytt.se') {
    url.host = 'www.smidigflytt365.se'
    return NextResponse.redirect(url, { status: 301 })
  }

  // Redirect smidigflytt.se to smidigflytt365.se
  if (host === 'www.smidigflytt.se') {
    url.host = 'www.smidigflytt365.se'
    return NextResponse.redirect(url, { status: 301 })
  }

  return NextResponse.next()
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
