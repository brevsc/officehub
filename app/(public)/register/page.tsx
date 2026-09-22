import { register } from "./actions/register";

export default function Register() {
  return (
    <div>
      <form
        action={register}
        className="flex flex-col gap-6 items-center text-left"
      >
        <label htmlFor="name">NAME</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">EMAIL</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password_confirmation">confirm password</label>
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
        />
        <button type="submit">create account</button>
      </form>
    </div>
  );
}
