import Link from "next/link";

export default function Goals() {
  return (
    <div>
      <Link href="/dashboard/goals/create-goal">Criar nova meta</Link>
      <Link href="/dashboard/goals/check-goal">Acompanhar meta</Link>
    </div>
  );
}
