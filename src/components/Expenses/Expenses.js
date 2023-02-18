import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;