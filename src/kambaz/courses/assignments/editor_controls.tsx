import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function EditorControls() {
  const { cid } = useParams();

  return (
    <div id="wd-assignment-editor-controls" className="text-nowrap">
      <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
        <Button variant="danger" size="sm" className="me-1 float-end" id="wd-add-module-btn">
          Save
        </Button>
      </Link>
      <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
        <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-view-progress">
          Cancel
        </Button>
      </Link>
    </div >
  );
}
