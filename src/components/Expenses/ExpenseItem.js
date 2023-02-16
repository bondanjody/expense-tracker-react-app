import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';

import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <h2 className="expense-item__description ">{title}</h2>
            <div className=" expense-item__price">${props.amount}</div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;