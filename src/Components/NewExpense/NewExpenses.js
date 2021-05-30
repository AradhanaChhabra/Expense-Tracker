import './NewExpenses.css';

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpenses = (props) => {

    const [editing, setEditing] = useState(false);

    const newExpenseUp = (exp) => {
        const expense = { ...exp, id: Math.random().toString()};
        props.expenseUp(expense);
    }

    const startEditing = () => {
        setEditing(true);
    }

    const stopEditing = () => {
        setEditing(false);
    }

    return (
        <div className="new-expense">
            {/* not editing */}
            {!editing && (
                <button onClick={startEditing}>Add New Expense</button>
            )}
            {editing && (
                <ExpenseForm
                    addExpenseUp={newExpenseUp}
                    onCancel={stopEditing}
                />
            )
            }
        </div>   
    );
}

export default NewExpenses;