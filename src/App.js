import Expenses from "./components/Expenses";

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
    <Expenses items={expenses} />
    
  );
}

export default App;
