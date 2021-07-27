import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("tr-TR", { month: "long" });
  const year = props.date.toLocaleString("tr-TR", { year: "numeric" });
  const day = props.date.toLocaleString("tr-TR", { day: "numeric" });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
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
