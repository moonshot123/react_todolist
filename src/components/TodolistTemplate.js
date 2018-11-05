import React from 'react'
import './TodolistTemplate.css'

const TodolistTemplate = ({form, children}) =>{
    return(
        <div className = "Todo-list-Template">
            <div className="title">
                오늘할일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>

        </div>
    )
}




export default TodolistTemplate