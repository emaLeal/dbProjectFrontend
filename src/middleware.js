import { NextResponse } from "next/server";
import { endpoints } from "./modules/auth/actions/urls";
import { cookies } from "next/headers";

/**
 *
 * @param {string} cookies authentication cookies that the server will store if
 *  is logged in
 * @returns true or false depending if the request is true
 */
export async function verify(cookies) {
  const url = endpoints.verify;
  const res = await fetch(url, {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ token: cookies }),
  });
  console.log(res);
  if (res.ok) {
    return true;
  }
  return false;
}

/**
 *
 * @param {string} refreshToken tries to refresh the session if the verify function fails
 *
 * @returns true or false depending if the request is successful
 */
export async function refresh(refreshToken) {
  const url = endpoints.refresh;
  const body = { refresh: refreshToken };
  try {
    const res = await fetch(url, {
      body: "POST",
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const json = await res.json();
      cookies().set("access", json.access);
      return true;
    }
  } catch (error) {
    return false;
  }
}

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const cookieManager = cookies();
  const access = cookieManager.get("access");
  const verifySession = access && await verify(access.value);
  if (!verifySession) {
    const refreshToken = cookieManager.get("refresh");
    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const refreshSession = await refresh(refreshToken);
    if (refreshSession) return NextResponse.next();
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard"],

};
