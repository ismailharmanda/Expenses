import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      date: new Date(2021, 7, 27),
      title: "Car Insurance",
      amount: 294.67,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
