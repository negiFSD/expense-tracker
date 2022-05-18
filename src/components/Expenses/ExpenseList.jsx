import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

function ExpenseList(props) {


  /* toggle between code if date matches */
//   let expensesContent = <p className="no_text">NO Data for selected Date</p>;


    if (props.items.length ===0 ){
        return <h2 className='expenses-list__fallback'> Found no expense</h2>
    }
    else{

  return (
    <div>
        <ul className='expenses-list'>
            {props.items.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) }
        </ul>
    </div>
  )
}}

export default ExpenseList