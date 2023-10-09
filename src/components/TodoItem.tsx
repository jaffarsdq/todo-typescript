import { useState, ChangeEvent } from "react";

interface TodoItemProps {
  item: string;
  id: number;
  filterTodo: (id: number) => void;
  editTodo: (id: number, data: string) => void;
}

function TodoItem({ item, id, filterTodo, editTodo }: TodoItemProps) {
  const [isEditted, setIsEditted] = useState<boolean>(false);
  const [TodoData, setTodoData] = useState<string>(item);

  function handleEdit(id: number, editedData: string) {
    if (isEditted) {
      editTodo(id, editedData);
      setIsEditted(false);
    } else {
      setIsEditted(true);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoData(e.target.value);
  };

  return (
    <div>
      <div>
        {isEditted ? (
          <input
            placeholder={item}
            value={TodoData}
            onChange={handleChange}
          />
        ) : (
          <span>{item}</span>
        )}

        <span>
          <button onClick={() => filterTodo(id)}>Delete</button>
        </span>

        <span>
          <button onClick={() => handleEdit(id, TodoData)}>
            {isEditted ? "Save" : "Edit"}
          </button>
        </span>
      </div>
    </div>
  );
}

export default TodoItem;
