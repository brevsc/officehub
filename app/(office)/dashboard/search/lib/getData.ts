export async function getData(cnpj: string) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_GET_DATA}`.replace("[CNPJ]", cnpj),
    {
      method: "GET",
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_CNPJA_API_KEY}`,
      },
    },
  );
  const res = await req.json();
  return res;
}
