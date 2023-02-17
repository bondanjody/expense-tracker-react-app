import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [titleChange, setTitleChange] = useState('');
    // const [amountChange, setAmountChange] = useState('');
    // const [dateChange, setDateChange] = useState('');
    const [userInput, setUserInput] = useState({
        titleChange: '',
        amountChange: '',
        dateChange: ''
    })

    const titleChangeHandler = (event) => {
        // setTitleChange(event.target.value);
        setUserInput({
            ...userInput,
            titleChange: event.target.value
        });
    }
    const amountChangeHandler = (event) => {
        // setAmountChange(event.target.value);
        setUserInput({
            ...userInput,
            amountChange: event.target.value
        });
    }
    const dateChangeHandler = (event) => {
        // setDateChange(event.target.value);
        setUserInput({
            ...userInput,
            dateChange: event.target.value
        });
    }

    return <form>
        <div className="new-expense__constrols">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2023-01-01" max="2024-01-01" onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;