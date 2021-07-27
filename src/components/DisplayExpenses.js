import ExpenseItem from "./ExpenseItem";
const DisplayExpenses = (props) => {
  return (
    <div>
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
    </div>
  );
};
export default DisplayExpenses;
