import HelloRedux from "./hello_redux";
import CounterRedux from "./counter_redux";
import AddRedux from "./add_redux";
import TodoList from "./todos/todo_list";

export default function ReduxExamples() {
  return (
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
};
