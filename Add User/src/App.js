import React, { useState } from 'react';
import UsersList from './components/Users/UsersList'
import AddUser from './components/Users/AddUser';
import Wrapper from './components/Helpers/Wrapper'


function App() {
  const [usersList, setUsersList] = useState([])

  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <Wrapper>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList}/>
    </Wrapper>
  );
}

export default App;
