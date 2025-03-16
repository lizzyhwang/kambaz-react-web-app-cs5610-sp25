import { ListGroup } from "react-bootstrap";
import "../index.css"
import TodoItem from "./todo_item";
import TodoForm from "./todo_form";
import { useSelector } from "react-redux";


export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup className="list-group">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}

