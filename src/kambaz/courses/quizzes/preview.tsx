import { useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as quizClient from "./client";
import QuestionFooter from "./questions/question_footer";
import SwitchQuestionButtons from "./questions/switch_question_buttons";
import { Button } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import Question from "./questions/question";

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [quiz, setQuiz] = useState(quizzes.filter((q: any) => q._id === qid)[0]);
  const [questions, setQuestions] = useState<any>();
  const [curQuestion, setCurQuestion] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      if (qid) {
        const data = await quizClient.findQuizById(qid);
        setQuiz(data);
      }
    };
    const fetchQuestions = async () => {
      if (qid) {
        const data = await quizClient.findQuestionsForQuiz(qid);
        setQuestions(data);
        console.log(questions);
      }
    }
    fetchQuiz();
    fetchQuestions();
  }, [qid]);

  const quizDescription = {
    __html: quiz?.description
  };

  return (
    <div id="wd-quiz-preview">
      <div className="d-flex justify-content-between">
        <h2>
          {quiz?.title}
        </h2>
        <Button className="btn btn-secondary" style={{ width: '80px', height: '40px', fontSize: '16px' }}
          onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}/edit`)}>
          <FaPencil className="me-2 fs-8" />
          Edit
        </Button>
      </div>

      <div className="alert alert-warning d-flex align-items-center small-margin">
        <BsExclamationCircle className="me-2" />
        This is a preview of the published version of the quiz
      </div>

      <h3>
        Quiz Instructions
      </h3>
      <div dangerouslySetInnerHTML={quizDescription} />

      <hr></hr>

      {questions && <Question question={questions[curQuestion]} index={curQuestion + 1} setQuestions={setQuestions} />}

      <SwitchQuestionButtons curQuestion={curQuestion} setCurQuestion={setCurQuestion} numQuestions={questions?.length} />
      <QuestionFooter />

    </div >
  );
}