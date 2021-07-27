import "./ExpenseItem.css";
const ExpenseItem = () => {
  const expenseDate = new Date(2021, 7, 27);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div
        className="expense-item__descr
      ption"
      >
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
