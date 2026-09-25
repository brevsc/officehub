import ListGoals from "./components/ListGoals";
import { getGoals } from "./lib/getGoals";

export default async function CheckGoal() {
  const goals = await getGoals();
  return (
    <div>
      {goals.map((goal) => (
        <ListGoals key={goal.id} goal={goal} />
      ))}
    </div>
  );
}
