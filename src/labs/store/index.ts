import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../lab4/redux_examples/hello_redux/hello_reducer";
import counterReducer from "../lab4/redux_examples/counter_redux/counter_reducer";
import addReducer from "../lab4/redux_examples/add_redux/add_reducer";
import todosReducer from "../lab4/redux_examples/todos/todos_reducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer
  },
});
export default store;