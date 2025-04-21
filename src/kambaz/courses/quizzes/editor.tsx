import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuizDetailsEditor from './edit_details';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as quizClient from "./client";

export default function QuizEditor() {
  const { qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [quiz, setQuiz] = useState(quizzes.filter((q: any) => q._id === qid)[0]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

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
        Tab content for Profile
      </Tab>
    </Tabs>
  );
}