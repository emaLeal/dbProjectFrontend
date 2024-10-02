import { endpoints } from "@/modules/auth/actions/urls";
import PageHome from "@/modules/dashboard/components/home";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";




export default async function Home() {
 

  return <PageHome />;
}
