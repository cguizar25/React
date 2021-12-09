import React, { useState } from 'react';
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import Button from '../UI/Button'

import classes from './AddUser.module.css'

const AddUser = props => {
  const [ enteredUsername, setEnteredUsername ] = useState('');
  const [ enteredAge, setEnteredAge ] = useState('');
  const [ isError, setIsError ] = useState()

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }


  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: 'Invalid input',
        message: 'Please enter a valid age and username',
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsError({
        title: 'Invalid age',
        message: 'Please enter a valid age',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  }

  const errorHandler = () => {
    setIsError(null);
  }

  return (
    <div>
      {isError && <ErrorModal title={isError.title} message={isError.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input value={enteredUsername} id="username" type="text" onChange={usernameChangeHandler} />
          <label htmlFor="age">Age</label>
          <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
)
}

export default AddUser
