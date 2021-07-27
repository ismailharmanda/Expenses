import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";
const DisplayExpenses = (props) => {
  return (
    <div className="display-expenses">
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
    </div>
  );
};
export default DisplayExpenses;
