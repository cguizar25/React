import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const [ ButtonCheck, setButtonCheck ] = useState(false);

  const ExpenseExpand = () => {
    setButtonCheck(true);
  };
  const ExpenseCompress = () => {
    setButtonCheck(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  return (<div className='new-expense'>
    {ButtonCheck === false && <button onClick={ExpenseExpand}>Add New Expense</button>}
    {ButtonCheck === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} revertingButton={ExpenseCompress}/>}
  </div>)
};

export default NewExpense;
