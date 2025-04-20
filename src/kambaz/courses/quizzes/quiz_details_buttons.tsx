import { Button } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";

export default function QuizDetailsButtons() {
  return (
    <div className="d-flex justify-content-center">
      <Button className="btn-secondary m-1">
        Preview
      </Button>
      <Button className="btn-secondary m-1">
        <FaPencil className="me-2 fs-6" />
        Edit
      </Button>
    </div>
  );
}