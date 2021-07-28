import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./DisplayExpenses.css";
const DisplayExpenses = (props) => {
  return (
    <Card className="display-expenses">
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      />
    </Card>
  );
};
export default DisplayExpenses;
