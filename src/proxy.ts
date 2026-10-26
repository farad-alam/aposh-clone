import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country');

  if (country === 'BD') {
    return new NextResponse(
      '<!DOCTYPE html><html><head><title>403 Forbidden</title></head><body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;background:#1a4a6b;color:#fff;"><div style="text-align:center;"><h1 style="font-size:3rem;margin:0;">403</h1><p>Access to this website is not available from your region.</p></div></body></html>',
      {
        status: 403,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
};
