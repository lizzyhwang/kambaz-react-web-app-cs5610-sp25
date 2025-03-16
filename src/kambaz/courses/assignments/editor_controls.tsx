import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

export default function EditorControls({ aid, deleteAssignment, updates, updateAssignment }:
  { aid: any; deleteAssignment: (aid: any) => void; updates: any; updateAssignment: (updates: any) => void; }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const newAssignment = pathname.includes("new")
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.filter((a: any) => a._id === aid)[0]

  return (
    <div id="wd-assignment-editor-controls" className="text-nowrap">
      <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
        <Button variant="danger" size="sm" className="me-1 float-end" id="wd-add-module-btn"
          onClick={() => {
            updateAssignment({
              ...assignment,
              title: updates.title,
              group: updates.group,
              description: updates.description,
              points: updates.points,
              due_date: updates.due_date,
              available_date: updates.available_date
            });
          }}
        >
          Save
        </Button>
      </Link>
      <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
        <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-view-progress"
          onClick={() => {
            if (newAssignment) {
              deleteAssignment(aid);
            }
          }}>
          Cancel
        </Button>
      </Link>
    </div >
  );
}
