import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

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
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
