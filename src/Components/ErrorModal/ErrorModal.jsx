import React from 'react'
import Card from '../UI/Card'
import classes from './ErrorModal.module.css'
import Button from '../UI/Button'

function ErrorModal(props) {
    return (
        <div className={classes.backdrop} onClick={props.onHandleBackDrop}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <p className={classes.content}>{props.message}</p>
                <footer className={classes.actions}>
                    <Button onClick={props.onHandleBackDrop}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal