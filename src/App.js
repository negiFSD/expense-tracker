import React, {useState} from 'react'
import Expenses from "../src/components/Expenses/Expenses.jsx";
import NewExpense from './components/NewExpense/NewExpense.jsx'

const dummyData=[

  { id: 'e1', title:"Car insurance", amount: 2211, date : new Date  (2020, 5, 6) },
  { id: 'e2', title:"Bike insurance", amount: 1551, date : new Date  (2021, 7, 7) },
  { id: 'e3', title:"Fuel", amount: 3711, date : new Date  (2020, 5, 6) },
  { id: 'e4', title:"Internet", amount: 211, date : new Date  (2021, 4, 7) }

  ]

 
function App() {
  
  const [expenses, setExpenses] = useState(dummyData)
  console.log(expenses)

  const addExpenseHandler = (expenseData)=>{
  
    setExpenses((prevExpenses)=>{
      return [expenseData, ...prevExpenses]
    })

   
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items= {expenses}/>
        </div>
  );
  
}

export default App;
