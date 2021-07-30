import React, { useState } from "react";
import Card from "../UI/Card";
import "./DisplayExpenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const DisplayExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const onChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) =>
    expense.date.toString().includes(filteredYear)
  );
  return (
    <div>
      <Card className="display-expenses">
        <ExpenseFilter selected={filteredYear} onChange={onChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default DisplayExpenses;
