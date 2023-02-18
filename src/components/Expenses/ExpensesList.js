import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {

    // Melakukan percabangan apabila di tahun tersebut tidak ada expenses
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    // jika di tahun tersebut ada expenses
    return <ul className="expenses__list">{
        props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
    }
    </ul>
}

export default ExpensesList;