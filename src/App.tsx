import React, { useState } from 'react';
import Todotable from './components/Todotable';
import { Todo } from './Interfaces';
import './App.css';

const App = () => {

  const [todo, setTodo] = useState<Todo>({} as Todo);
  const [todos, setTodos] = useState<Todo[]>([]);

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (): void => {
    setTodos([...todos, todo]);
  }

  const deleteTask = (todoToDelete: Todo): void => {
    setTodos(
      todos.filter((todo: Todo) => {
        return todo != todoToDelete;
      })
      )
  }

  return (
    <div>
      <div className="App">
        <input type="date" placeholder='Date' name="date" value={todo.date} onChange={inputChanged}/>
        <input type="text" placeholder='Description' name="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="text" placeholder='Priority' name="priority" value={todo.priority} onChange={inputChanged}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <div className='Todolist'>
        {
          todos.map((todo: Todo, index: number) => {
            return <Todotable todo={todo} deleteTask={deleteTask} />;
        })}
          
          
        
      </div>
    </div>
  );
}

export default App;
