
import React from 'react';
//import './A{pp.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';

const todos = [
  { text: 'Cortar cebolla',completed:false},
  { text: 'Cortar platano',completed:false}, 
  { text: 'Terminar el curso UwU',completed:false}
]

function App() {
  return (
    <React.Fragment>
          <TodoCounter/>   
          <TodoSearch/>
          <TodoList/>
          <TodoList>
              {todos.map(todo=> (
                <TodoItem text={todo.text}/>
              ))}
          </TodoList>
          <CreateTodoButton />
    </React.Fragment>
  )
}

export default App;
