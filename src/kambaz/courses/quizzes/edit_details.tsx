import { useState } from "react";
import { Col, Form, FormControl, FormSelect, InputGroup, Row } from "react-bootstrap";
import EditorComponent from "./wysiwyg_editor";

export default function QuizDetailsEditor({ quiz }: { quiz: any }) {

  const [updates, setUpdates] = useState<any>({
    _id: quiz._id,
    title: quiz.title,
    description: quiz.description,
    course: quiz.course,
    type: quiz.type,
    points: quiz.points,
    assignment_group: quiz.assignment_group,
    shuffle_answers: quiz.shuffle_answers,
    time_limit: quiz.time_limit,
    multiple_attempts: quiz.multiple_attempts,
    how_many_attempts: quiz.how_many_attempts,
    show_correct_answers: quiz.show_correct_answers,
    access_code: quiz.access_code,
    one_question_at_a_time: quiz.one_question_at_a_time,
    webcam_required: quiz.webcam_required,
    lock_after_answering: quiz.lock_after_answering,
    due_date: quiz.due_date,
    available_date: quiz.available_date,
    until_date: quiz.until_date,
    published: quiz.published,
  })

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setUpdates({ ...quiz, [name]: val });
  };

  const setInstructions = (body: string) => {
    setUpdates({ ...quiz, description: body });
  }

  return (
    <div id="wd-quiz-details-editor">
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
          <EditorComponent setInstructions={setInstructions} />
        </Form.Group>
      </Form>
    </div>
  );
}