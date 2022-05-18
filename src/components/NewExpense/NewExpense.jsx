import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setEditing] = useState(false);

  /*Getting data from children */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(expenseData, "this is from NewExpenses");
    props.onAddExpense(expenseData);
    setEditing(false)
  };

  /* hiding content on pressing button */
  const startEditingHandler = () => setEditing(true);

  /*working for the cancel button situated in child component */
  function stopEditingHandler() {
    setEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add new Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
