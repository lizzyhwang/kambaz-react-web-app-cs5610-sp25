import { Col, Form, FormControl, FormSelect, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router";
import * as quizClient from "./client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QuizDetailsButtons from "./quiz_details_buttons";

export default function QuizDetails() {
  const { qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [quiz, setQuiz] = useState(quizzes.filter((q: any) => q._id === qid)[0]);
  const fetchQuiz = async () => {
    if (!qid) {
      return;
    }
    const quiz = await quizClient.findQuizById(qid);
    setQuiz(quiz);
  }

  useEffect(() => {
    fetchQuiz();
  }, [qid]);

  // let progress = {
  //   _id: quiz._id,
  //   title: quiz.title,
  //   description: quiz.description,
  //   course: quiz.course,
  //   type: quiz.type,
  //   points: quiz.points,
  //   assignment_group: quiz.assignment_group,
  //   shuffle_answers: quiz.shuffle_answers,
  //   time_limit: quiz.time_limit,
  //   multiple_attempts: quiz.multiple_attempts,
  //   how_many_attempts: quiz.how_many_attempts,
  //   show_correct_answers: quiz.show_correct_answers,
  //   access_code: quiz.access_code,
  //   one_question_at_a_time: quiz.one_question_at_a_time,
  //   webcam_required: quiz.webcam_required,
  //   lock_after_answering: quiz.lock_after_answering,
  //   due_date: quiz.due_date,
  //   available_date: quiz.available_date,
  //   until_date: quiz.until_date,
  //   published: quiz.published,
  // }

  return (
    <div>
      <QuizDetailsButtons />

      <div id="wd-quiz-details" className="border-1">
        <h2>
          {quiz.title}
        </h2>

        <table id="wd-quiz-details-table">
          <tbody>
            <tr>
              <td className="wd-table" align="right"><b>Quiz Type</b></td>
              <td>{quiz.type}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>Points</b></td>
              <td>{quiz.points}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>Assignment Group</b></td>
              <td>{quiz.assignment_group}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>Shuffle Answers</b></td>
              <td>{quiz.shuffle_answers ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>Time Limit</b></td>
              <td>{quiz.time_limit}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>Multiple Attempts</b></td>
              <td>{quiz.multiple_attempts ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>View Responses</b></td>
              <td>{quiz.view_responses ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>Show Correct Answers</b></td>
              <td>{quiz.show_correct_answers ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>One Question At A Time</b></td>
              <td>{quiz.one_question_at_a_time ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>Webcam Required</b></td>
              <td>{quiz.webcame_required ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="wd-table" align="right"><b>Lock Questions After Answering</b></td>
              <td>{quiz.lock_questions_after_answering ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
        <br></br>

        <div className="mt-8">
          <table width="100%">
            <thead>
              <tr className="border-b">
                <th className="text-left pb-2">Due</th>
                <th className="text-left pb-2">For</th>
                <th className="text-left pb-2">Available from</th>
                <th className="text-left pb-2">Until</th>
              </tr>
            </thead>
            <tbody>
              <tr className="wd-quiz-summary-table">
                <td className="wd-quiz-summary-table-cell">{new Date(quiz.due_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                <td className="wd-quiz-summary-table-cell">Everyone</td>
                <td className="wd-quiz-summary-table-cell">{new Date(quiz.available_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                <td className="wd-quiz-summary-table-cell">{new Date(quiz.until_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}