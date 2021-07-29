import React, { useState } from "react";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    date: new Date(2021, 7, 27),
    title: "Car Insurance",
    amount: 294.67,
  },
  {
    date: new Date(2021, 7, 28),
    title: "House Insurance",
    amount: 710.2,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const onAddExpenseHandler = (enteredExpense) => {
    setExpenses((prev) => {
      return [...prev, enteredExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <DisplayExpenses expenses={expenses} />
    </div>
  );
};

export default App;
