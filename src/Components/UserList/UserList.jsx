import React from 'react'
import Card from '../UI/Card'
import classes from './UserList.module.css'

function UserList(props) {
  return (
    <Card className={classes.users}>
        <ul>{props.users.map((item, id)=>(
            <li key={id}>{item.enteredName} is ({item.enteredAge} years Old)</li>
        ))}</ul>
    </Card>
  )
}

export default UserList