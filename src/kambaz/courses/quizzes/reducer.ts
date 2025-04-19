import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../database";

const initialState = {
  quizzes: quizzes,
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (q: any) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id == quiz._id ? quiz : q
      ) as any;
    },
  }
});
export const { setQuizzes } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;