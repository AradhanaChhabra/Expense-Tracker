 import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    
    const dropDown = (event) => {
        props.changeFilter(event.target.value);
    };

    return <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>
                    Filter by year
            </label>
                <select value={props.selected} onChange={dropDown}>
                    <option vlaue="2022">2022</option>
                    <option vlaue="2022">2021</option>
                    <option vlaue="2020">2020</option>
                    <option vlaue="2019">2019</option>
                </select>
            </div>
        </div>

}

export default ExpenseFilter;