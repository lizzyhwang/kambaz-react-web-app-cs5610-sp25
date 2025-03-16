import { Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todos_reducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className="list-group-item">
      <input value={todo.title}
        onChange={(e) =>
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
      />
      <Button onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click">
        Update </Button>
      <Button onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click">Add</Button>
    </ListGroup.Item>
  );
}
