import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from '../AddUser/AddUser.module.css'
import ErrorModal from '../ErrorModal/ErrorModal'


function AddUser(props) {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError]=useState()


    const submitHandler = (event) => {
        event.preventDefault()

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:'Please Enter Name And Age',
                message: 'Error'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title:"Invalid Age",
                message:`Age is ${enteredAge} Your Age must be > 0`
            })
            return;
        }
        let newUser = {
            enteredName,
            enteredAge
        }
        props.onGetAddUser(newUser)
        console.log(enteredName, enteredAge,)
        setEnteredName('')
        setEnteredAge('')
    }
    const changedNameHandler = (event) => {
        setEnteredName(event.target.value)
    }
    const changedAgeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const errorHandler=()=>{
        setError(null)
    }
    return (
        <div>
         {error ? <ErrorModal title={error.title} message={error.message}  onHandleBackDrop={errorHandler}/> : ''}   
        
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor='name' >Name</label>
                <input id='name' type='name' value={enteredName} onChange={changedNameHandler}></input>
                <label htmlFor='age' >Age</label>
                <input id='age' type='number' value={enteredAge} onChange={changedAgeHandler}></input>
                <Button type='submit' >Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser