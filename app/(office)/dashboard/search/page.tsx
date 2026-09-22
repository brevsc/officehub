"use client";

import { useActionState } from "react";
import { search } from "./actions/search";
import SearchResult from "./components/SearchResult";

const initialState = {
  success: false,
  error: "",
};

export default function SearchData() {
  const [state, formAction] = useActionState(search, initialState);
  try {
    return (
      <div>
        <form action={formAction}>
          <label>
            CNPJ
            <input type="text" name="cnpj" maxLength={14} />
          </label>
          <button type="submit">Search</button>
        </form>

        {state.data && <SearchResult input={state} />}
      </div>
    );
  } catch {
    console.error("cnpj invalido");
  }
}
