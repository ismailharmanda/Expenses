import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("tr-TR", { month: "long" });
  const year = props.date.toLocaleString("tr-TR", { year: "numeric" });
  const day = props.date.toLocaleString("tr-TR", { day: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
