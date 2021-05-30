import './ExpenseItem.css';
import ExpDate from './ExpDate';


const ExpenseItem=props=>{
    return (
        <li className='expense-item'>
            <ExpDate date={props.date}></ExpDate>
            <div className='expense-item__description'>
                <h2 className='expense-item__h2'>{props.name}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </li>
    )
}

export default ExpenseItem;