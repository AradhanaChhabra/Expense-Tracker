import './ListExp.css'
import ExpenseItem from "./ExpenseItem";

export default function ListExp(prop) {
    if (prop.items.length === 0)
        return <h1 className="expenses-list__fallback">No Expense Found!</h1>
    
    return <ul className="expenses-list">
        {
        prop.items.map((exp, index) => {
        return (
            <ExpenseItem
                key={exp.id}
                name={exp.title}
                amount={exp.amount}
                date={exp.date}
            />
            );
        })
        }
    </ul>
}