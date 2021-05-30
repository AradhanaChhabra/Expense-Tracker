import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [currentTitle, setTitle] = useState('');
    const [currentDate, setDate] = useState('');
    const [currentAmount, setAmount] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const dateHandler = (event) => {
        setDate(event.target.value);
    }
    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const addExpense = {
            title: currentTitle,
            amount: currentAmount,
            date: new Date(currentDate)
        }
        
        props.addExpenseUp(addExpense);

        setTitle('');
        setDate('');
        setAmount('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={currentTitle } onChange={titleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={currentAmount }  onChange={amountHandler }/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-02-02' value={currentDate } onChange={dateHandler }/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;