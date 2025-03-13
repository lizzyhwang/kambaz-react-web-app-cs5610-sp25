import { Button } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function EditorControls({ aid, deleteAssignment, updates, updateAssignment }:
  { aid: any; deleteAssignment: (aid: any) => void; updates: any; updateAssignment: (updates: any) => void; }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const newAssignment = pathname.includes("new")

  return (
    <div id="wd-assignment-editor-controls" className="text-nowrap">
      <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
        <Button variant="danger" size="sm" className="me-1 float-end" id="wd-add-module-btn"
          onClick={() => {
            console.log(updates)
            if (newAssignment) {
              updateAssignment({ ...updates })
            }
          }}>
          Save
        </Button>
      </Link>
      <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
        <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-view-progress"
          onClick={() => {
            if (newAssignment) {
              deleteAssignment(aid)
            }
          }}>
          Cancel
        </Button>
      </Link>
    </div >
  );
}
