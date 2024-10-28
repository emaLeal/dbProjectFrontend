import { verify, refresh } from "@/modules/auth/actions/actions";
import PageHome from "@/modules/home/home";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieManager = cookies();
  const access = cookieManager.get("access");
  const verifySession = await verify(access);
  console.log(verifySession);
  if (!verifySession) {
    const refreshToken = cookieManager.get("refresh");
    if (!refreshToken) {
      redirect("/login");
    }
    const refreshSession = await refresh(refreshToken);
    if (!refreshSession) redirect("/login");
  }

  return <PageHome />;
}
