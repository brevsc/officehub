// initial hero/login page

import Link from "next/link";
import { verifySession } from "./(office)/auth/verifySession";
import { redirect } from "next/navigation";


export default async function Home() {
  const user = await verifySession()
  if (user){
    redirect('/dashboard')
  }
  return (
    <div className="flex flex-col flex-wrap">
      <Link href="/login">login</Link>
      <Link href="/register">register</Link>
    </div>
  );
}
