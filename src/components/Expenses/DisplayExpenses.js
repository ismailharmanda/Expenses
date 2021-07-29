import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./DisplayExpenses.css";
import ExpenseFilter from "./ExpenseFilter";
const DisplayExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const onChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="display-expenses">
        <ExpenseFilter selected={filteredYear} onChange={onChangeHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={Math.random()}
          />
        ))}
      </Card>
    </div>
  );
};
export default DisplayExpenses;
