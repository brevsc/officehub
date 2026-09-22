import { redirect } from "next/navigation";
import { verifySession } from "../auth/verifySession";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await verifySession().then((user) => {
    if (!user) {
      redirect("/login");
    }
  });

  return children;
}