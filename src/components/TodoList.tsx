import TodoItem from "./TodoItem"

interface Todo {
    id: number;
    text: string;
}
  
  interface TodoListProps {
    list: Todo[]; 
    filterTodo: (idx: number) => void;
    editTodo: (idx: number, newText: string) => void;
  }

function TodoList({list,filterTodo, editTodo}: TodoListProps) {

  return (
    list && list.map((todo, idx) => {
        return <TodoItem 
                  key={idx} 
                  item={todo.text} 
                  id={todo.id} 
                  filterTodo={filterTodo} 
                  editTodo={editTodo}
                />
    })
  )

}

export default TodoList