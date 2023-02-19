import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = props => {
    const [titleChange, setTitleChange] = useState('');
    const [amountChange, setAmountChange] = useState('');
    const [dateChange, setDateChange] = useState('');
    // Contoh penggunaan multi state :
    /* const [userInput, setUserInput] = useState({
        titleChange: '',
        amountChange: '',
        dateChange: ''
    }) */

    const titleChangeHandler = (event) => {
        setTitleChange(event.target.value);
        // Contoh penggunaan multi state :
        /* setUserInput({
            ...userInput,
            titleChange: event.target.value
        }); */
        // Contoh penggunaan multi-state yang benar :
        /*  setUserInput((prevState) => {
            return {
                ...prevState,
                titleChange: event.target.value
            };
        }); */
    }
    const amountChangeHandler = (event) => {
        setAmountChange(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amountChange: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amountChange: event.target.value
        //     };
        // });
    }
    const dateChangeHandler = (event) => {
        setDateChange(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     dateChange: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         dateChange: event.target.value
        //     };
        // });
    }
    const submitHandler = event => {
        event.preventDefault();   // mencegah page reload saat di submit
        const expense = {
            title: titleChange,
            amount: amountChange,
            date: new Date(dateChange)
        };
        
        props.onSaveNewExpenseHandler(expense);

        // me reset (mengosongkan isi form) ketika form di submit
        setTitleChange('');
        setAmountChange('');
        setDateChange('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__constrols">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={titleChange} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={amountChange} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-01-01" max="2023-12-31" value={dateChange} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onQuitEditing}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;