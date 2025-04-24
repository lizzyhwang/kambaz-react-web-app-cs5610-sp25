import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaPencil } from 'react-icons/fa6';
import { useLocation } from 'react-router';
import EditorComponent from '../wysiwyg_editor';
import SaveQuestionFooter from './save_question_footer';
import * as questionsClient from "./client";

export default function Question({ question, index, setQuestions }:
  { question: any; index: number; setQuestions: (questions: any) => void }) {
  const { pathname } = useLocation();
  const isPreview = pathname.includes("preview");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newQuestion, setNewQuestion] = useState(question);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const val = value === "true" ? true : (value === "false" ? false : value)
    newQuestion({ ...newQuestion, [name]: val });
  };

  const handleCancel = async () => {
    setIsEditing(false);
    const originalQuestion = await questionsClient.findQuestionById(question._id);
    setNewQuestion(originalQuestion);
  }

  const updateQuestion = async () => {
    setQuestions((prevQuestions: any[]) =>
      prevQuestions.map(q =>
        q._id === newQuestion._id
          ? { ...q, ...newQuestion }
          : q
      )
    );
    await questionsClient.updateQuestion(newQuestion);
    setIsEditing(false);
  };

  const questionQuestion = {
    __html: question?.question
  };

  return (
    <div>
      {!isEditing &&
        (<div className="question-box">
          <div className="d-flex justify-content-between align-items-center question-title">
            <div className="d-flex">
              <h5>Question {index} </h5>
              {!isPreview &&
                <button
                  className="transparent-edit-button fa-6"
                  title="Edit Question"
                  onClick={() => {
                    setIsEditing(true);
                  }}>
                  <FaPencil />
                </button>}
            </div>
            <div className="d-flex">
              <h5>{question.points} pts</h5>
            </div>
          </div>
          <div className="question-question" dangerouslySetInnerHTML={questionQuestion} />
          {question.type == 2 && <div className="question-choices-box">
            <Form.Control type="email" />
          </div>
          }
          <div className="question-choices-box">
            {question.choices && question.choices.map((choice: any) => (
              <div>
                <hr />
                <Form.Check
                  type="radio"
                  name="choices"
                  label={choice}
                />
              </div>
            ))}
          </div>
        </div>
        )}
      {isEditing &&
        <div className="question-box border-1">
          <div>
            <Row>
              <Col xs={8} className="d-flex align-items-center">
                <Form.Control className="small-margin" type="email" value={newQuestion.title}
                  onChange={(e) => { setNewQuestion({ ...newQuestion, title: e.target.value }) }} />
                <Form.Group className="w-50">
                  <Form.Select
                    id="wd-select-question-type"
                    value={newQuestion.type}
                    onChange={(e) => { setNewQuestion({ ...newQuestion, type: parseInt(e.target.value) }) }}
                  >
                    <option value="0">Multiple Choice</option>
                    <option value="1">True/False</option>
                    <option value="2">Fill in the Blank</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={4} className="d-flex align-items-center">
                <Form.Control type="number" value={newQuestion.points}
                  onChange={(e) => { setNewQuestion({ ...newQuestion, points: parseInt(e.target.value) }) }} />
                <p className="small-margin">pts</p>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="small-margin">
            <p>Enter your question text then specify the correct answer(s).</p>
            <h5>Question:</h5>
            <EditorComponent
              setInstructions={(newQues: string) => {
                setNewQuestion({ ...newQuestion, question: newQues });
                console.log(newQuestion);
              }}
              defaultBody={newQuestion.question} />
          </div>
          <div className="small-margin">
            <h5>Answers:</h5>
            <div className="question-choices-box">
              {question.choices && question.choices.map((choice: any) => (
                <div>
                  <Form.Check
                    type="radio"
                    name="solution"
                    label={choice}
                    checked={newQuestion.isTrue === (choice === "True")}
                    onClick={() => setNewQuestion({ ...newQuestion, isTrue: choice === "True" })}
                  />
                </div>
              ))}
            </div>
          </div>
          <SaveQuestionFooter updateQuestion={updateQuestion} handleCancel={handleCancel} />

        </div>

      }
    </div >
  )
}