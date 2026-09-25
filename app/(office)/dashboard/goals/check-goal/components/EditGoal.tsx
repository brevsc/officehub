"use client";
import { useState } from "react";
import { editGoal } from "../actions/editGoal";

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

export function EditGoal({ goal }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(String(goal.name));
  const [entry, setEntry] = useState(Number(goal.entry));
  const [bonus, setBonus] = useState(Number(goal.bonus));
  const [consume, setConsume] = useState(Number(goal.consume));
  const [stockTransfer, setStockTransfer] = useState(
    Number(goal.stock_transfer),
  );
  const [cards, setCards] = useState(Number(goal.cards));
  const [sales, setSales] = useState(Number(goal.sales));
  return (
    <div>
      <button onClick={() => setOpen(true)}>Editar</button>
      {open && (
        <form action={editGoal} className="flex flex-col gap-6 items-center">
          <input type="hidden" name="id" value={goal.id} />
          <label htmlFor="name">Título</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(String(e.target.value))}
          />

          <label>ENTRADAS</label>
          <label htmlFor="entry">Valor de entradas bruto</label>
          <input
            type="number"
            name="entry"
            value={entry}
            onChange={(e) => setEntry(Number(e.target.value))}
          />
          <label htmlFor="bonus">Bonificação</label>
          <input
            type="number"
            name="bonus"
            value={bonus}
            onChange={(e) => setBonus(Number(e.target.value))}
          />
          <label htmlFor="consume">Uso e Consumo</label>
          <input
            type="number"
            name="consume"
            value={consume}
            onChange={(e) => setConsume(Number(e.target.value))}
          />

          <label htmlFor="stock_transfer">Transferências</label>
          <input
            type="number"
            name="stock_transfer"
            value={stockTransfer}
            onChange={(e) => setStockTransfer(Number(e.target.value))}
          />

          <label htmlFor="cards">Cartões</label>
          <input
            type="number"
            name="cards"
            value={cards}
            onChange={(e) => setCards(Number(e.target.value))}
          />

          <label>SAÍDAS</label>
          <label htmlFor="sales">Notas e Cupons</label>
          <input
            type="number"
            name="sales"
            value={sales}
            onChange={(e) => setSales(Number(e.target.value))}
          />
          <button type="submit">SALVAR</button>
          <button type="button" onClick={() => setOpen(false)}>
            SAIR
          </button>
        </form>
      )}
    </div>
  );
}
