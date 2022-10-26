import React from 'react';
import { Todo } from '../Interfaces';
import '../App.css'

interface Props {
    todo: Todo;
    deleteTask(todoToDelete: Todo): void;
}

const Todotable = ({ todo, deleteTask}: Props) => {

    return(
        <div className='Todos'>
            <span>{todo.date}</span>
            <span>{todo.desc}</span>
            <span>{todo.priority}</span>
            <button onClick={() => {deleteTask(todo)}}>Delete</button>
        </div>
    );
}

export default Todotable;