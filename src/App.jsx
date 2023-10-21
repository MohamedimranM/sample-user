import React, { useState } from 'react'
import AddUser from './Components/AddUser/AddUser'
import UserList from './Components/UserList/UserList'

function App() {
  const [data, setData]= useState([])

  const addUserHandler=(newUser)=>{
    setData([newUser, ...data])
  }

  return (
    <div>
      <AddUser onGetAddUser={addUserHandler}/>
      <UserList users={data}/>
    </div>
  )
}

export default App