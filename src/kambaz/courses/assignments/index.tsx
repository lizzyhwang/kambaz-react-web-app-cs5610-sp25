import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./assignment_controls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./assignment_controls_buttons";
import LessonControlButtons from "../modules/lesson_control_buttons";
import { LuNotebookPen } from "react-icons/lu";
import AssignmentLabel from "./assignment_label";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /> <br></br>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div id="wd-assignments-title"
            className="p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <div>
            <ListGroup id="wd-assignment-list" className="rounded-0">
              <ListGroup.Item action
                href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div>
                    <BsGripVertical className="me-2 fs-3" />
                    <LuNotebookPen className="text-success me-3" />
                  </div>
                  <AssignmentLabel />
                </div>
                <LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item action
                href="#/Kambaz/Courses/1234/Assignments/124"
                className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div>
                    <BsGripVertical className="me-2 fs-3" />
                    <LuNotebookPen className="text-success me-3" />
                  </div>
                  <AssignmentLabel />
                </div>
                <LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item action
                href="#/Kambaz/Courses/1234/Assignments/125"
                className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div>
                    <BsGripVertical className="me-2 fs-3" />
                    <LuNotebookPen className="text-success me-3" />
                  </div>
                  <AssignmentLabel />
                </div>
                <LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
