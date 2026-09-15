"use client"

import { useActionState } from "react";
import { getData } from "./lib/getData";

export default function SearchData() {
  const [state, formAction] = useActionState(getData, null);
  try{
    return (
      <div>
  
        <form action={formAction}>
          <label>
            CNPJ
            <input type="text" name="cnpj" maxLength={14}/>
          </label>
          <button type="submit">Search</button>
        </form>
    
        {state && (
          <div>
            <ul>
              <li>
                <p>RAZÃO SOCIAL: {state.company.name}</p>
              </li>
              <li>
                <p>CNPJ: {state.taxId}</p>
              </li>
              <li>
                <p>INSCRIÇÃO ESTADUAL: {state.registrations[0].number}</p>
              </li>
              <li>
                <p>DATA DE ABERTURA: {state.founded}</p>
              </li>
              <li>
                <p>LOGRADOURO: {state.address.street}</p>
              </li>
              <li>
                <p>NUMERO: {state.address.number}</p>
              </li>
              <li>
                <p>COMPLEMENTO: {state.address.details}</p>
              </li>
              <li>
                <p>BAIRRO: {state.address.district}</p>
              </li>
              <li>
                <p>CIDADE: {state.address.city}</p>
              </li>
              <li>
                <p>UF: {state.address.state}</p>
              </li>
              <li>
                <p>CEP: {state.address.zip}</p>
                
              </li>
              <li>
                <p>Telefone: {state.phones[0].area}{state.phones[0].number}</p>
                
              </li>
              <li>
                <p>EMAIL: {state.emails[0].address}</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }catch{
    console.error('cnpj invalido')
  }
}
