import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todos_reducer";

export default function TodoItem({ todo, }: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item key={todo.id} className="list-group-ite d-flex align-items-center justify-content-between">
      {todo.title}
      <div>
        <Button onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click">
          Edit </Button>
        <Button onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click">
          Delete </Button>
      </div>
    </ListGroup.Item>
  );
}

