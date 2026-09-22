import { redirect } from "next/navigation";
import { verifySession } from "./auth/verifySession";

export default async function OfficeLayout({children}:Readonly<{children: React.ReactNode}>){
  
  const user = await verifySession();
  if (!user) {
    redirect("/login");
  }

  return children
}

