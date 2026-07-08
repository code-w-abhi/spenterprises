import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  SESSION_TTL_MS,
  createSessionToken,
  verifySessionToken,
} from "@/lib/session";

export {
  ADMIN_COOKIE,
  verifySessionToken,
  createSessionToken,
  verifyAdminPassword,
} from "@/lib/session";

export async function isAdminAuthenticated() {
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}

export async function setAdminSession() {
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, await createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  });
}

export async function clearAdminSession() {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE);
}
