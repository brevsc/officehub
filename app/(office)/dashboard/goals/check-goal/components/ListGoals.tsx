import { getGoals } from "../lib/getGoals";
import { EditGoal } from "./EditGoal";

type Props = {
  goal: {
    id: number;
    name: string;
    entry: string;
    target: string;
    sales: string;
    remaining: string;
    companyId: number | null;
    bonus: string;
    consume: string;
    stock_transfer: string;
    revenue: string;
    cards: string;
  };
};

export default async function ListGoals({ goal }: Props) {
  return (
    <div>
      <p>nome: {goal.name}</p>
      <p>meta: {goal.target}</p>
      <p>saídas: {goal.sales}</p>
      <p>faltam: {goal.remaining}</p>
      <EditGoal goal={goal} />
    </div>
  );
}
