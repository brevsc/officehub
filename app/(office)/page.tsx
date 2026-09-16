import Link from "next/link"
import Search from "./search/page"

export default function Office(){
  return(
    <ul>
      <li>
        <a href="/office/search">Consulta Dados</a>
      </li>
      <li>
        <a href="/office/meta">Acompanhar Meta</a>
      </li>
      <li>
        <a href="/office/check-absense">Verifica Falta</a>
      </li>
    </ul>
  )
}