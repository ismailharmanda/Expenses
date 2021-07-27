const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("tr-TR", { month: "long" });
  const year = props.date.toLocaleString("tr-TR", { year: "numeric" });
  const day = props.date.toLocaleString("tr-TR", { day: "numeric" });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
