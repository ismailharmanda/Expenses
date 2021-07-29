import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      date: new Date(2021, 7, 27),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      date: new Date(2021, 7, 28),
      title: "House Insurance",
      amount: 710.2,
    },
  ];
  const addExpenseHandler = (enteredExpense) => {
    console.log(enteredExpense);
  };
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <DisplayExpenses expenses={expenses} />
    </div>
  );
}

export default App;
