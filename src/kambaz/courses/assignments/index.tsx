import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./assignment_controls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./assignment_controls_buttons";
import AssignmentStatusButtons from "./assignment_status_buttons";
import { LuNotebookPen } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";
  const dispatch = useDispatch();

  return (
    <div id="wd-assignments">
      {isFaculty &&
        <AssignmentControls />
      }
      <br></br>
      <ListGroup className="rounded-0" id="wd-assignments">

        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div id="wd-assignments-title"
            className="p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            {isFaculty && <AssignmentControlButtons />}
          </div>
          <div>
            <ListGroup id="wd-assignment-list" className="rounded-0">
              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <ListGroup.Item action
                    className="wd-assignment-list-item p-3 ps-1 flex align-items-center justify-content-between">
                    {/* <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="text-decoration-none text-dark"> */}
                    <div className="d-flex align-items-center">
                      {isFaculty &&
                        <div>
                          <BsGripVertical className="me-2 fs-3" />
                          <LuNotebookPen className="text-success me-3" />
                        </div>
                      }
                      <div className="wd-assignment-description">
                        <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                          className="text-decoration-none text-dark">
                          <p>
                            <span className="wd-text-bold">{assignment.title}</span>
                            <br></br>
                            <span className="text-danger">Multiple Modules</span>  |  <b>Not Available</b> until May 6 at 12:00 am
                            <br></br>
                            <b>Due</b> {assignment.due_date} | {assignment.points} points </p>
                        </Link>

                      </div>
                      {isFaculty && <AssignmentStatusButtons
                        aid={assignment._id} />}
                    </div>
                    {/* </Link> */}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div >
  );
}
