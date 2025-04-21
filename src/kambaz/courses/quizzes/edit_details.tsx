import { useEffect, useState } from "react";
import { Col, Form, FormSelect, Row } from "react-bootstrap";
import EditorComponent from "./wysiwyg_editor";
import { useParams } from "react-router";
import * as quizClient from "./client";
import DetailsEditorControls from "./edit_details_controls";
import { useDispatch } from "react-redux";
import { updateQuiz } from "./reducer";

export default function QuizDetailsEditor() {
  const { qid } = useParams();
  const [quiz, setQuiz] = useState<any>(null);
  const dispatch = useDispatch();

  const [updates, setUpdates] = useState<any>({
    _id: quiz?._id,
    title: quiz?.title,
    description: quiz?.description,
    course: quiz?.course,
    type: quiz?.type,
    points: quiz?.points,
    assignment_group: quiz?.assignment_group,
    shuffle_answers: quiz?.shuffle_answers,
    time_limit: quiz?.time_limit,
    multiple_attempts: quiz?.multiple_attempts,
    how_many_attempts: quiz?.how_many_attempts,
    show_correct_answers: quiz?.show_correct_answers,
    when_to_show: quiz?.when_to_show,
    access_code: quiz?.access_code,
    one_question_at_a_time: quiz?.one_question_at_a_time,
    webcam_required: quiz?.webcam_required,
    lock_after_answering: quiz?.lock_after_answering,
    due_date: quiz?.due_date,
    available_date: quiz?.available_date,
    until_date: quiz?.until_date,
    published: quiz?.published,
  })

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


  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const val = value === "true" ? true : (value === "false" ? false : value)
    setUpdates({ ...quiz, [name]: val });
    console.log(updates);
  };

  const setInstructions = (body: string) => {
    setUpdates({ ...quiz, description: body });
  }

  const handleUpdate = async (quiz: any) => {
    await quizClient.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
  }

  return (
    <div id="wd-quiz-details-editor">
      {quiz &&
        <Form id="wd-form-quiz-details-editor">
          <Form.Group id="wd-quiz-title-editor" className="mb-4">
            <Form.Control
              type="text"
              name="title"
              defaultValue={quiz.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group id="wd-quiz-instructions-editor" className="mb-4">
            <span id="wd-quiz-instructions-editor-title">Quiz Instructions:</span>
            <EditorComponent setInstructions={setInstructions} defaultBody={quiz.description} />
          </Form.Group>

          <Form.Group id="wd-quiz-type-editor" as={Row} className="mb-3" controlId="group">
            <Form.Label column sm={4} align="right" for="wd-quiz-group-selector">
              Quiz Type
            </Form.Label>
            <Col sm={6}>
              <FormSelect
                id="wd-quiz-group-selector"
                name="type"
                defaultValue={quiz.type}
                onChange={handleChange}>
                <option value="GRADED_QUIZ">Graded Quiz</option>
                <option value="PRACTICE_QUIZ">Practice Quiz</option>
                <option value="GRADED_SURVEY">Graded Survey</option>
                <option value="UNGRADED_SURVEY">Ungraded Survey</option>
              </FormSelect>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-points-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right">
              Points
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                name="points"
                type="number"
                defaultValue={quiz.points}
                onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-assignment-group-editor" as={Row} className="mb-3" controlId="group">
            <Form.Label column sm={4} align="right" for="wd-quiz-assignment-group-selector">
              Assignment Group
            </Form.Label>
            <Col sm={6}>
              <FormSelect
                id="wd-quiz-assignment-group-selector"
                name="assignment_group"
                defaultValue={quiz.assignment_group}
                onChange={handleChange}>
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZ">Quizzes</option>
                <option value="EXAM">Exams</option>
                <option value="PROJECT">Project</option>
              </FormSelect>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-shuffle-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right">
              Shuffle Answers
            </Form.Label>
            <Col sm={6}>
              <FormSelect
                id="wd-quiz-shuffle-selector"
                name="shuffle_answers"
                defaultValue={quiz.shuffle_answers}
                onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </FormSelect>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-time-limit-editor" as={Row} className="mb-3" controlId="time-limit">
            <Form.Label column sm={4} align="right">
              Time Limit
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                name="time_limit"
                type="number"
                defaultValue={quiz.time_limit}
                onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-multiple-attempts-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right" for="wd-quiz-attempts-selector">
              Multiple Attempts
            </Form.Label>
            <Col sm={6}>
              <FormSelect
                id="wd-quiz-attempts-selector"
                name="multiple_attempts"
                defaultValue={quiz.multiple_attempts}
                onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </FormSelect>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-show-answers-bool-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right" for="wd-quiz-show-answers-bool-selector">
              Show Correct Answers
            </Form.Label>
            <Col sm={6}>
              <FormSelect
                id="wd-quiz-show-answers-bool-selector"
                name="show_correct_answers"
                defaultValue={quiz.show_correct_answers}
                onChange={handleChange} >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </FormSelect>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-show-answers-date-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right"></Form.Label>
            <Col sm={6}>
              <Form.Control
                type="date"
                name="when_to_show"
                defaultValue={new Date(quiz.when_to_show).toLocaleDateString('en-CA')}
                onChange={(e) => { setUpdates({ ...updates, when_to_show: new Date(e.target.value) }); }} >
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-access-code-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right">
              Access Code
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                name="access_code"
                type="text"
                defaultValue={quiz.access_code}
                onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-one-at-a-time-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right" for="wd-quiz-one-at-a-time-selector">
              One Question at a Time
            </Form.Label>
            <Col sm={6}>
              <FormSelect
                id="wd-quiz-one-at-a-time-selector"
                name="one_question_at_a_time"
                defaultValue={quiz.one_question_at_a_time}
                onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </FormSelect>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-webcam-required-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right">
              Webcam Required
            </Form.Label>
            <Col sm={6}>
              <FormSelect
                id="wd-quiz-webcam-required-selector"
                name="webcam_required"
                defaultValue={quiz.webcam_required}
                onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </FormSelect>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-lock-questions-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right">
              Lock Questions After Answering
            </Form.Label>
            <Col sm={6}>
              <FormSelect
                id="wd-quiz-lock-questions-selector"
                name="lock_after_answering"
                defaultValue={quiz.lock_after_answering}
                onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </FormSelect>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-due-date-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right">
              Due Date
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="date"
                name="due_date"
                defaultValue={new Date(quiz.due_date).toLocaleDateString('en-CA')}
                onChange={(e) => { setUpdates({ ...updates, due_date: new Date(e.target.value) }); }} >
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-available-date-editor" as={Row} className="mb-3" >
            <Form.Label column sm={4} align="right">
              Available Date
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="date"
                name="available_date"
                defaultValue={new Date(quiz.available_date).toLocaleDateString('en-CA')}
                onChange={(e) => { setUpdates({ ...updates, available_date: new Date(e.target.value) }); }} >
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group id="wd-quiz-until-date-editor" as={Row} className="mb-3">
            <Form.Label column sm={4} align="right">
              Until Date
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="date"
                name="until_date"
                defaultValue={new Date(quiz.until_date).toLocaleDateString('en-CA')}
                onChange={(e) => { setUpdates({ ...updates, until_date: new Date(e.target.value) }); }} >
              </Form.Control>
            </Col>
          </Form.Group>

          <hr />

          <DetailsEditorControls updates={updates} updateQuiz={handleUpdate} />

        </Form>
      }
    </div >
  );
}