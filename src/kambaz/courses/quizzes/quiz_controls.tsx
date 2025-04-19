import { FaPlus } from "react-icons/fa6";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import * as coursesClient from "../client";

export default function QuizControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";
  const { cid } = useParams();

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { quizzes } = useSelector((state: any) => state.quizzesReducer);

  const handleNew = async () => {
    const dummy = {
      _id: uuidv4(),
      title: "New Quiz",
      description: "",
      course: cid,
      type: "GRADED_QUIZ",
      points: 10,
      assignment_group: "QUIZ",
      shuffle_answers: true,
      time_limit: 20,
      multiple_attempts: false,
      how_many_attempts: 1,
      show_correct_answers: {
        enabled: true,
        when_to_show: null,
      },
      access_code: "",
      one_question_at_a_time: true,
      webcam_required: false,
      lock_after_answering: false,
      due_date: null,
      available_date: null,
      until_date: null,
    };
    if (cid) {
      const quiz = await coursesClient.createQuizForCourse(cid, dummy);
      navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/new`);
    } else {
      return;
    }
  }

  return (
    <div id="wd-quiz-controls" className="text-nowrap">
      {isFaculty &&
        <div>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn"
            onClick={() => {
              handleNew();
            }}>
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Quiz
          </Button>
        </div>
      }
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Col sm={10}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaSearch style={{ bottom: "1px" }} />
              </InputGroup.Text>
              <Form.Control type="email" placeholder="Search..." />
            </InputGroup>
          </Col>
        </Form.Group>
      </Form>
    </div >
  );
}
