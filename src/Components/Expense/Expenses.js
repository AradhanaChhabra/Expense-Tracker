import './Expenses.css';
import Filter from './ExpenseFilter';
import { useState } from "react";
import ListExp from "./ListExp";
import ExpChart from './ExpChart';

const Expenses = prop => {
    const [currentYear, setYear] = useState('2021');

    const changeFilterFunc = (selectedYear) => {
        setYear(selectedYear);
    }

    const filteredExpenses = prop.expenses.filter(exp => exp.date.getFullYear().toString() === currentYear);

    return (
        <div className="expenses">
            <Filter changeFilter={changeFilterFunc} selected={currentYear}></Filter>
            <ExpChart expenseArr={filteredExpenses}></ExpChart>
            <ListExp items={ filteredExpenses}/>
        </div>
    )
}
export default Expenses;