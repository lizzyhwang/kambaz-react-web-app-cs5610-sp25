import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuizDetailsEditor from './edit_details';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as quizClient from "./client";
import * as questionClient from "./questions/client"
import { Button } from 'react-bootstrap';
import { PiPlus } from 'react-icons/pi';
import QuestionsEditorControls from './edit_questions_controls';
import Question from './questions/question';

export default function QuizEditor() {
  const { qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [quiz, setQuiz] = useState(quizzes.filter((q: any) => q._id === qid)[0]);
  const [questions, setQuestions] = useState<any>();

  const fetchQuiz = async () => {
    if (!qid) {
      return;
    }
    const quiz = await quizClient.findQuizById(qid);
    setQuiz(quiz);
  }

  const fetchQuestions = async () => {
    if (qid) {
      const data = await quizClient.findQuestionsForQuiz(qid);
      setQuestions(data);
    }
  }

  useEffect(() => {
    fetchQuiz();
    fetchQuestions();
  }, [qid]);

  const handleUpdateQuestions = async () => {
    await questions.map(async (question: any) => (
      await questionClient.updateQuestion(question)
    ))
  }

  return (
    <Tabs
      defaultActiveKey="details"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="details" title="Details">
        <QuizDetailsEditor />
      </Tab>
      <Tab eventKey="questions" title="Questions">
        <div className="d-flex justify-content-center align-items-center">
          <Button className="btn btn-secondary">
            <PiPlus className="me-2" />
            New Question
          </Button>
        </div>
        {questions && (
          questions.map((question: any, index: number) => (
            <Question question={question} index={index + 1} setQuestions={setQuestions} />
          ))
        )}
        <QuestionsEditorControls
          updates={questions}
          updateQuestions={handleUpdateQuestions} />
      </Tab>
    </Tabs>
  );
}