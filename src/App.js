import DisplayExpenses from "./components/DisplayExpenses";
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
      <DisplayExpenses expenses={expenses} />
    </div>
  );
}

export default App;
