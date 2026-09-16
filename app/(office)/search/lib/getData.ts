export async function getData(prevState: any, formData: FormData) {
  const cnpj = formData.get("cnpj") as string;
  const req = await fetch(`${process.env.NEXT_PUBLIC_GET_DATA}`.replace("[CNPJ]", cnpj), {
    method: 'GET',
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_CNPJA_API_KEY}`
    }
  });
  console.log(req)
  const res = await req.json();
  return res;
}