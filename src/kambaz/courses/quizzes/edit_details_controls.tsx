import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function DetailsEditorControls({ updates, updateQuiz }:
  { updates: any; updateQuiz: () => void; }) {
  const { cid, qid } = useParams();

  return (
    <div id="wd-quiz-editor-controls" className="text-nowrap">
      <Link to={`/Kambaz/Courses/${cid}/Quizzes/${qid}`}>
        <Button variant="danger" size="sm" className="me-1 float-end" id="wd-add-module-btn"
          onClick={() => {
            updateQuiz();
            console.log(updates);
          }}
        >
          Save
        </Button>
      </Link>
      <Link to={`/Kambaz/Courses/${cid}/Quizzes/${qid}`}>
        <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-view-progress">
          Cancel
        </Button>
      </Link>
    </div >
  );
}
