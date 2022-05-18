
import React, {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

const[enteredTitle,  setEnteredTitle]= useState("")
const[enteredAmount, setEnteredAmount] = useState("")
const[enteredDate, setEnteredDate]= useState('')




// const[userInput, setUserInput]= useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate: ''
// })

function titleHandler(e){
//   setUserInput((prevState)=> {
//       return { ...prevState, enteredTitle: e.target.value}
//   })
setEnteredTitle(e.target.value) }

function amountHandler(e){
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState, enteredAmount: e.target.value
    //     }
    // })
setEnteredAmount(e.target.value)
}

function dateHandler(e){
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState, enteredDate: e.target.value
    //     }
    // })
    setEnteredDate(e.target.value)
}

// console.log(userInput.enteredTitle)
// console.log(userInput.enteredAmount)
// console.log(userInput.enteredDate)

// console.log(` Title : ${enteredTitle} | Amount: ${enteredAmount} | Date: ${enteredDate} `)

 function submitHandler(e){
        
    e.preventDefault()

    const expenseData ={
        title: enteredTitle,
        amount: +enteredAmount,
        date :new Date( enteredDate)
    }


    props.onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('')  
}



  return (
      <form onSubmit={submitHandler}> 
    <div className='new-expense__controls'>
     <div className='new-expense__control'>
         <label>Title</label>
         <input type="text" value={enteredTitle} onChange={titleHandler} />
     </div>
     <div className='new-expense__control'>
         <label>Amount</label>
         <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountHandler}/>
     </div>
     <div className='new-expense__control'>
         <label>Date</label>    
         <input type="date" min='2019-01-01' step='2022-12-21' value={enteredDate} onChange={dateHandler}/>
     </div>
    </div>
    <div className='new-expense__actions'>
    <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
    </div>
    </form>
  )
}

export default ExpenseForm
