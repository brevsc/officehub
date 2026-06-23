import Link from "next/link"
import Search from "./search/page"

export default function Office(){
  return(
    <ul>
      <li>
        <a href="/office/search">Consulta Dados</a>
      </li>
      <li>
        <p>Acompanhar Meta</p>
        <a href="/meta"></a>
      </li>
      <li>
        <p>Verifica Falta</p>
        <a href="/check-absense"></a>
      </li>
    </ul>
  )
}