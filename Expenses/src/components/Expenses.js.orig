import React, { useState } from 'react'

import './Expenses.css';
import Card from './Card'
import ExpensesFilter from './ExpenseFilter/ExpensesFilter'
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart'


const Expenses = (props) => {

  //state that is holding the value of the selected year on the app.
  const [filteredYear, setFilteredYear] = useState('2020')

  /* function that is made to be called in the child, so that this parent
  may use it's  data */
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  /* filters given data into a new array so that only the year that is
  saved in our state will be showed on our app  */
  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  //everything after this is displayed on the app as our component.
  return (
    <div>
      <Card className='expenses'>

        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

      <ExpensesChart expenses={filteredExpense} />

        <ExpenseList items={filteredExpense} />

      </Card>
    </div>
  )
}
export default Expenses
