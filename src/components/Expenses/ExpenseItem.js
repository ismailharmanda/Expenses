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
          <span onClick={() => props.remove(ref.current.id)}>
            <a href="/#">
              <i
                style={{ color: "#8b0000" }}
                className="fas fa-times-circle"
              ></i>
            </a>
          </span>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
