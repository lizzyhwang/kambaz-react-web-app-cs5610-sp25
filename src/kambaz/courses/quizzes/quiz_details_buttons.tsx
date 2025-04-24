import { Button } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";

export default function QuizDetailsButtons() {
  const { cid, qid } = useParams();
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center">
      <Button className="btn-secondary m-1"
        onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}/preview`)}>
        Preview
      </Button>
      <Button className="btn-secondary m-1"
        onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}/edit`)}>
        <FaPencil className="me-2 fs-6" />
        Edit
      </Button>
    </div>
  );
}