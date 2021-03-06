import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = (
    <p className="expenses-list__fallback">No expenses found.</p>
  );
  const onRemove = (id) => {
    props.deletedData(id);
  };
  if (props.items.length > 0) {
    expensesContent = props.items.map((expense, index) => (
      <ExpenseItem
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
        key={index}
        remove={onRemove}
      />
    ));
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
