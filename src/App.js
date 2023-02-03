import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
        id: 'e1', title: 'New Phone', amount: 34, date: new Date(2023, 2, 1)
    },
    {
        id: 'e2', title: 'New TV', amount: 1000, date: new Date(2023, 2, 1)
    },
    {
        id: 'e3', title: 'New Cigarette', amount: 2, date: new Date(2023, 2, 1)
    },
    {
        id: 'e4', title: 'Apartment', amount: 100, date: new Date(2023, 2, 1)
    }
    ];

  return (
    <>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </>
    
  );
}

export default App;
