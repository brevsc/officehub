export default function SearchResult({input}:SearchResult) {
  return (
    <div>
      <ul>
        <li>
          <p>RAZÃO SOCIAL: {input.data?.company.name}</p>
        </li>
        <li>
          <p>CNPJ: {input.data?.taxId}</p>
        </li>
        <li>
          <p>INSCRIÇÃO ESTADUAL: {input.data?.registrations[0].number}</p>
        </li>
        <li>
          <p>DATA DE ABERTURA: {input.data?.founded}</p>
        </li>
        <li>
          <p>LOGRADOURO: {input.data?.address.street}</p>
        </li>
        <li>
          <p>NUMERO: {input.data?.address.number}</p>
        </li>
        <li>
          <p>COMPLEMENTO: {input.data?.address.details}</p>
        </li>
        <li>
          <p>BAIRRO: {input.data?.address.district}</p>
        </li>
        <li>
          <p>CIDADE: {input.data?.address.city}</p>
        </li>
        <li>
          <p>UF: {input.data?.address.state}</p>
        </li>
        <li>
          <p>CEP: {input.data?.address.zip}</p>
        </li>
        <li>
          <p>
            Telefone: {input.data?.phones[0].area}
            {input.data?.phones[0].number}
          </p>
        </li>
        <li>
          <p>EMAIL: {input.data?.emails[0].address}</p>
        </li>
      </ul>
    </div>
  );
}
