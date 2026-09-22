import { redirect } from "next/navigation";
import { verifySession } from "../(office)/auth/verifySession";

export default async function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await verifySession();
  user ? redirect("/dashboard") : null;
  return children;
}
