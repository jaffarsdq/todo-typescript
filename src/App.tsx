import { ChangeEvent, useState } from 'react';
import './App.css'
import TodoList from './components/TodoList';

function App() {

  
interface Todo {
  id: number;
  text: string;
}

  const [todos,setTodos] = useState<Todo[]>([]);

  const [input, setInput] = useState<string>('');

  function handleOnChange (e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleClick () {
    setTodos(
      [...todos, 
        {
          text: input, 
          id: (todos.length > 0 && todos[todos.length - 1].id) ? todos[todos.length-1].id + 1 : 1
        }
      ]
    );
    setInput('');
  }

  const filterTodo = (idx: number) =>{
    const remainingTodos = todos.filter((todo) => todo.id !== idx)
    setTodos(remainingTodos)
  }

  function editTodo(id: number, newTodo: string) {
    const updatedTodos = todos.map((todo) => {
        if(todo.id === id) todo.text = newTodo;
        return todo;
    });
    setTodos(updatedTodos);
}

  return (
    <>
      <input
       type="text" 
       value={input}
       placeholder="What's on your mind..."
       onChange={handleOnChange}
      />
      <button onClick={handleClick}>Add todo</button>
      <TodoList list={todos} filterTodo={filterTodo} editTodo={editTodo}/>
    </>
  )
}

export default App
