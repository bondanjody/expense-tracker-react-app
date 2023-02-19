import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = props => {
    const [isEditing, setIsEditing] = useState(false);

    const editingHandler = () => {
        setIsEditing(true);
    }

    // untuk tombol cancel
    const quitEditingHandler = () => {
        setIsEditing(false);
    }

    const saveNewExpenseHandler = newExpense => {

        const expenseData = {
            ...newExpense,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);

        setIsEditing(false);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={editingHandler}>Add New Expenses</button>}
        {isEditing && <ExpenseForm onSaveNewExpenseHandler={saveNewExpenseHandler} onQuitEditing={quitEditingHandler} />}
    </div>
}

export default NewExpense;