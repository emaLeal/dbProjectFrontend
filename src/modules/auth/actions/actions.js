"use server";

import { cookies } from "next/headers";
import { endpoints } from "./urls";
import { redirect } from "next/navigation";

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
    console.log(error);
    return false;
  }
}

/**
 *
 * @param {{code: string, password: string}} formData The data the user will input for trying to log in
 */
export async function login(formData) {
  const url = endpoints.login;
  const body = {
    code: formData.get("code"),
    password: formData.get("password"),
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (res.ok) {
      console.log(res);
      const cookieManager = cookies();
      const json = await res.json();
      cookieManager.set("access", json.access);
      cookieManager.set("refresh", json.refresh);
      redirect("/");
    }
    throw res;
  } catch (error) {
    console.log(error);
  }
}
