import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    // Clone the requested URL so we can modify it
    const url = request.nextUrl.clone();

    // Get the actual domain name from the headers.
    // In a Coolify/Docker setup, 'X-Forwarded-Host' is the key,
    // as the app itself sees 'localhost'. We use 'host' as a fallback.
    const hostname =
        request.headers.get('X-Forwarded-Host') ||
        request.headers.get('host');

    // Define your primary domain (the one you want to keep)
    const primaryDomain = 'uklongevityclinic.co.uk';

    // Define the domain you want to redirect FROM
    const redirectFromDomains = [
        'uklongevityclinic.com',
        'www.uklongevityclinic.com',
    ];

    // Check if the requested hostname is in our redirect list
    // AND ensure we don't accidentally redirect the primary domain itself
    if (hostname && redirectFromDomains.includes(hostname)) {
        // Rebuild the URL with the primary domain
        // Preserve the protocol (http/https) and the full path
        url.protocol =
            request.headers.get('X-Forwarded-Proto') || url.protocol;
        url.host = primaryDomain;

        // Perform a permanent redirect (308)
        return NextResponse.redirect(url, 308);
    }

    // If it's not the .com domain, just continue as normal
    return NextResponse.next();
}

// Optional: Configure the matcher to run the middleware on all paths
// This improves performance by not running on static files, etc.
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
};
