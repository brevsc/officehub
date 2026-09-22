import { getData } from "../lib/getData";
import { searchSchema } from "../validation/searchSchema";

export async function search(
  _previousState: SearchState,
  formdata: FormData,
): Promise<SearchState> {
  const result = searchSchema.safeParse({
    cnpj: formdata.get("cnpj"),
  });

  if(!result.success){
    return {success: false, error:"Invalid input"}
  }

  const {cnpj} = result.data

  const data = await getData(cnpj)

  if (!data){
    return {success: false}
  }

  return{
    success: true, data
  }
}
