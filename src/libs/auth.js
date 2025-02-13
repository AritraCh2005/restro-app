// lib/auth.js
import { getSession } from "next-auth/react";

export async function isAdmin() {
  const session = await getSession();
  
  if (session && session.user && session.user.role === "admin") {
    return true;
  }
  return false;
}
