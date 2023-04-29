import { getAuth, withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

const publicPaths = ['/', '/sign-in*', '/sign-up*']

const isPublic = (path: string) => {
  return publicPaths.find(x =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  )
}


export default withClerkMiddleware(async (request: NextRequest) => {
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  const { userId } = getAuth(request)

  if (!userId) {
    const signInUrl = new URL('/', request.url)
    signInUrl.searchParams.set('redirect_url', request.url)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = { matcher:  '/((?!_next/image|_next/static|favicon.ico).*)'};