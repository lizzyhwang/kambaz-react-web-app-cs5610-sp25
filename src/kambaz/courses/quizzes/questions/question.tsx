import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaPencil } from 'react-icons/fa6';
import { useLocation } from 'react-router';
import EditorComponent from '../wysiwyg_editor';
import SaveQuestionFooter from './save_question_footer';
import * as questionsClient from "./client";
import { PiPlus } from 'react-icons/pi';
import React from 'react';

export default function Question({ question, index, setQuestions }:
  { question: any; index: number; setQuestions: (questions: any) => void }) {
  const { pathname } = useLocation();
  const isPreview = pathname.includes("preview");
  const [isEditing, setIsEditing] = useState<boolean>(isPreview ? false : true);
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

  const handleEditChoice = (newChoice: string, index: any) => {
    setNewQuestion((prevNewQuestion: { choices: any; }) => {
      const updatedChoices = [...prevNewQuestion.choices];
      if (index < newQuestion.choices.length) {
        updatedChoices[index] = newChoice;
      } else {
        updatedChoices.push(newChoice);
      }
      return {
        ...prevNewQuestion,
        choices: updatedChoices
      };
    });
  }

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
            {question.type != 2 && question.choices && question.choices.map((choice: any) => (
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
        )
      }
      {
        isEditing &&
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
                    onChange={(e) => {
                      setNewQuestion({
                        ...newQuestion,
                        type: parseInt(e.target.value),
                        choices: parseInt(e.target.value) == 1 ? ["True", "False"] : [""]
                      });
                    }}
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
              }}
              defaultBody={newQuestion.question} />
          </div>
          <div className="small-margin">
            <h5>Answers:</h5>
            <div className="question-choices-box">
              {newQuestion.choices && newQuestion.choices.map((choice: any, index: number) => {
                return (
                  <React.Fragment key={index}>
                    {
                      newQuestion.type == 0 &&
                      (<div className="d-flex align-items-center">
                        <Form.Check
                          type="radio"
                          name="solution"
                          className="tiny-margin"
                          checked={newQuestion.answer === choice}
                          onChange={() => setNewQuestion({ ...newQuestion, answer: choice })}
                        />
                        <Form.Control
                          type="text"
                          value={choice}
                          className="tiny-margin"
                          placeholder="Enter Option"
                          onChange={(e) => { handleEditChoice(e.target.value, index) }}
                        />
                      </div>)

                    }
                    {
                      newQuestion.type == 1 &&
                      (<div>
                        <Form.Check
                          type="radio"
                          name="solution"
                          label={choice}
                          checked={newQuestion.isTrue === (choice === "True")}
                          onChange={() => setNewQuestion({ ...newQuestion, isTrue: choice === "True" })}
                        />
                      </div>)
                    }
                    {
                      newQuestion.type == 2 &&
                      (<div>
                        <Form.Control className="small-margin" type="email" value={choice} placeholder="Enter Option"
                          onChange={(e) => { handleEditChoice(e.target.value, index) }} />
                      </div>)
                    }
                  </React.Fragment>
                );
              }
              )}
            </div>
            {(newQuestion.type == 0 || newQuestion.type == 2) &&
              (<button className="float-end transparent-add-option-button"
                onClick={() => { handleEditChoice("", newQuestion.choices.length) }}>
                <PiPlus />
                Add Another Answer
              </button>)
            }
          </div>
          <SaveQuestionFooter updateQuestion={updateQuestion} handleCancel={handleCancel} />

        </div>

      }
    </div >
  )
}