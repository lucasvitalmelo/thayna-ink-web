import { env } from "@/settings/env";

export function googleLogin() {
  window.location.href = `${env.SERVER_API}auth/google`;
}