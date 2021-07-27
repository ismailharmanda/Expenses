import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div
        className="expense-item__descr
      ption"
      >
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
