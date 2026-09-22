"use client"
import { useActionState } from "react";
import { login } from "./actions/login";

const initialState = {
  success: false,
  error: "",
}

export default function Login(){
  const [state, formAction] = useActionState(login, initialState)
  return(
    <div>
      <form action={formAction} className="flex flex-col gap-6 items-center">
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />
        {state.error && (
          <p className="text-red-500" role="alert">
            {state.error}
          </p>
        )}
        
        <button type="submit">login</button>
      </form>
    </div>
  )
}