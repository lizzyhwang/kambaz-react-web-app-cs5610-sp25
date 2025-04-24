import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const findQuizById = async (qid: string) => {
  const response = await axios.get(`${QUIZZES_API}/${qid}`);
  return response.data;
};

export const deleteQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

export const updateQuiz = async (quiz: any) => {
  const { data } = await axiosWithCredentials.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return data;
};

export const findQuestionsForQuiz = async (qid: string) => {
  const response = await axios.get(`${QUIZZES_API}/${qid}/questions`);
  return response.data;
}

export const createQuestionForQuiz = async (qid: string, question: any) => {
  console.log("howdy");
  const response = await axiosWithCredentials.post(`${QUIZZES_API}/${qid}/questions`, question);
  return response.data;
}
