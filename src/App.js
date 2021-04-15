import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import ViewExpenses from "./components/Expenses/ViewExpenses";

const DEFAULTEXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpences] = useState(DEFAULTEXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpences((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ViewExpenses data={expenses} />
      <p>this is also visible</p>
    </div>
  );
};

export default App;
