import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {

    
    const month = props.date.toLocaleString('default', { month: 'long' });
    const date = props.date.toLocaleString('default', { day: '2-digit' })
    const year = props.date.getFullYear();
console.log(year)
  return (
    <div className={"expense-date"}> 
    <div className={'expense-date__year'}>{year}</div>
    <div className={'expense-date__mont'}>{month}</div>
    <div className={'expense-date__day'}>{date}</div>
    </div>
  )
}
  
export default ExpenseDate