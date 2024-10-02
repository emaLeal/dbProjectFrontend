"use server";

import { cookies } from "next/headers";
import { endpoints } from "./urls";

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
    }
    throw res;
  } catch (error) {
    console.log(error);
  }
}
