import React, { useRef } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const ref = useRef();
  return (
    <li ref={ref} id={props.title}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={() => props.remove(ref.current.id)}></button>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
