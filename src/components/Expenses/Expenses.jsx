import React, { useState } from "react";
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter.jsx";
import "./Expenses.css";
import ExpenseList from "./ExpenseList.jsx";

function Expenses(props) {   
  /*Default Year for selection*/
  const [filterDate, setFilterDate] = useState("2022"); 

  /* To get data from Child component (ExpenseFilter) */
  function setDateHandler(date) {
    setFilterDate(date);  
  }
 
  /* filtering data with date */
  const filteredExpenses = props.items.filter (expense => {
    return expense.date.getFullYear().toString() === filterDate;
  });






  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filterDate} onSetDate={setDateHandler} />
        <ExpenseList items = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
