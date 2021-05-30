import { useState } from 'react';
import Expenses from './Components/Expense/Expenses';
import NewExpenses from './Components/NewExpense/NewExpenses';
import styled from 'styled-components';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 11, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, newExpenses] = useState(dummy_expenses);
    
  const newExpFunc=(exp)=>{
    newExpenses((prevState => [exp,...prevState]));
  }

  const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  `;

  return (
    <div>
      <Heading>Expense Tracker</Heading>
      <NewExpenses expenseUp={newExpFunc}></NewExpenses>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
