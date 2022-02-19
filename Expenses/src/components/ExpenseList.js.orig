import React from 'react';

import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = props => {
  //checks to see if the filtered array has 0 expenses, if it does;
  if(props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No expenses</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
         <ExpenseItem
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
         />
      ))}
    </ul>
  );
};

export default ExpenseList
