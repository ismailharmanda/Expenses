import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState(new Date());
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const { title, amount, date } = userInput;

  const onTitleChange = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const onAmountChange = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  const onDateChange = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amont: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };
  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={title}
              type="text"
              onChange={(e) => onTitleChange(e)}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              value={amount}
              type="number"
              min="0.01"
              step="0.01"
              onChange={(e) => onAmountChange(e)}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={date}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={(e) => onDateChange(e)}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
