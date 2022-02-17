import React, { useState, useRef } from 'react';
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import Button from '../UI/Button'
import Wrapper from '../Helpers/Wrapper'

import classes from './AddUser.module.css'

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [ isError, setIsError ] = useState()



  const addUserHandler = (event) => {
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setIsError({
        title: 'Invalid input',
        message: 'Please enter a valid age and username',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setIsError({
        title: 'Invalid age',
        message: 'Please enter a valid age',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
  }

  const errorHandler = () => {
    setIsError(null);
  }

  return (
    <Wrapper>
      {isError && <ErrorModal title={isError.title} message={isError.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username" type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age" type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
)
}

export default AddUser
