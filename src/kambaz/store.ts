import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./courses/modules/reducer";
import accountReducer from "./account/reducer";
import assignmentsReducer from "./courses/assignments/reducer";
import coursesReducer from "./courses/reducer";
import quizzesReducer from "./courses/quizzes/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    coursesReducer,
    quizzesReducer,
  },
});
export default store;