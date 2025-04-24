import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router';

export default function FillInBlanksQuestion({ question, index }: { question: any; index: number }) {
  const { pathname } = useLocation();
  const isPreview = pathname.includes("preview");
  const choices = ["True", "False"]

  return (
    <div className="question-box">
      <div className="d-flex justify-content-between align-items-center question-title">
        <h5>Question {index} </h5>
        <h5>{question.points} pts</h5>
      </div>
      <p className="question-question">
        {question.question}
      </p>
      <div className="question-choices-box">
        <Form.Control type="email" />
      </div>
    </div>
  )
}