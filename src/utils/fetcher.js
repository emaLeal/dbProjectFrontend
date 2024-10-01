"use server";
import { cookies } from "next/headers";

export async function get() {}

export async function post(url, body) {
  const cookieManager = cookies();
  const token = cookieManager.get("access");
  try {
    const res = await fetch(url, {
      body,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return res;
    }
    throw res;
  } catch (error) {
    return error;
  }
}
