import { createGoal } from "./actions/createGoal";

export default function CreateGoal() {
  return (
    <div>
      <form action={createGoal} className="flex flex-col gap-6 items-center">
        <label htmlFor="name">Título</label>
        <input type="text" name="name" />

        <label>ENTRADAS</label>
        <label htmlFor="entry">Valor de entradas bruto</label>
        <input type="number" name="entry" />
        <label htmlFor="bonus">Bonificação</label>
        <input type="number" name="bonus" />
        <label htmlFor="consume">Uso e Consumo</label>
        <input type="number" name="consume" />

        <label htmlFor="stock_transfer">Transferências</label>
        <input type="number" name="stock_transfer" />

        <label htmlFor="cards">Cartões</label>
        <input type="number" name="cards" />

        <label>SAÍDAS</label>
        <label htmlFor="sales">Notas e Cupons</label>
        <input type="number" name="sales" />

        <button type="submit">CRIAR</button>
      </form>
    </div>
  );
}
