import { redirect } from "next/navigation"
import { verifySession } from "../auth/verifySession"
import Link from "next/link"

export default async function Dashboard(){
  const user = await verifySession()
  return(
    <div>
      <h3>welcome,{user}</h3>
    <ul>
      <li>
        <Link href='/dashboard/search'>Consulta Dados</Link>
      </li>
      <li>
        <Link href="/dashboard/meta">Acompanhar Meta</Link>
      </li>
      <li>
        <Link href="/dashboard/check-absense">Verifica Falta</Link>
      </li>
    </ul>
    </div>
  )
}