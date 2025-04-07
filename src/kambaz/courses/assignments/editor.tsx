import { Col, Form, FormControl, FormSelect, InputGroup, Row } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import EditorControls from "./editor_controls";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, updateAssignment, addAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.filter((assignment: any) => assignment._id === aid)[0];
  const dispatch = useDispatch();
  let progress = {
    _id: assignment._id,
    title: assignment.title,
    description: assignment.description,
    points: assignment.points,
    group: assignment.group,
    due_date: assignment.due_date,
    available_date: assignment.available_date,
    until_date: assignment.until_date,
  };

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };


  return (
    <div id="wd-assignments-editor">
      <Form.Label >
        Assignment Name
      </Form.Label>
      <Form.Group as={Row} className="mb-3" controlId="assignmentName">
        <Col sm={10}>
          <Form.Control type="text" defaultValue={assignment.title}
            onChange={(e) => { progress["title"] = e.target.value; }} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={10}>
          <Form.Control as="textarea" style={{ height: "400px" }}
            defaultValue={assignment.description}
            onChange={(e) => { progress["description"] = e.target.value; }} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="points">
        <Form.Label column sm={4} align="right">
          Points
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="email" defaultValue={assignment.points}
            onChange={(e) => { progress["points"] = e.target.value; }} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="group">
        <Form.Label column sm={4} align="right">
          Assignment Group
        </Form.Label>
        <Col sm={6}>
          <FormSelect defaultValue={assignment.group} onChange={(e) => { progress["group"] = e.target.value; }}>
            <option value="1">Assignments</option>
            <option value="2">Quizzes</option>
            <option value="3">Exams</option>
          </FormSelect>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="group">
        <Form.Label column sm={4} align="right">
          Display Grade As
        </Form.Label>
        <Col sm={6}>
          <FormSelect>
            <option value="1">Percentage</option>
            <option value="2">Letter Grade</option>
          </FormSelect>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="submit-type">
        <Form.Label column sm={4} align="right">
          Submission Type
        </Form.Label>
        <Col sm={6}>
          <div className="wd-border-light-gray wd-rounded-corners-all-around-5px wd-border-very-thin wd-border-gray wd-border-solid wd-padding-cushy">
            <FormSelect className="mb-3">
              <option value="1">Online</option>
            </FormSelect>
            <Form.Label className="wd-text-bold">
              Online Entry Options
            </Form.Label>
            <Form.Check
              type="checkbox"
              label="Text Entry"
            />
            <Form.Check
              type="checkbox"
              label="Website URL"
            />
            <Form.Check
              type="checkbox"
              label="Media Recordings"
            />
            <Form.Check
              type="checkbox"
              label="Student Annotation"
            />
            <Form.Check
              type="checkbox"
              label="File Upload"
            />
          </div>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="assign-to">
        <Form.Label column sm={4} align="right">
          Assign
        </Form.Label>
        <Col sm={6}>
          <div className="wd-border-light-gray wd-rounded-corners-all-around-5px wd-border-very-thin wd-border-gray wd-border-solid wd-padding-cushy">
            <Form.Label className="wd-text-bold">
              Assign To
            </Form.Label>
            <Form.Control className="mb-3" type="email" defaultValue="100" />

            <div className="mb-3">
              <Form.Label className="wd-text-bold">
                Due
              </Form.Label>
              <InputGroup>
                <FormControl defaultValue={assignment.due_date}
                  onChange={(e) => { progress["due_date"] = e.target.value; }} />
                <InputGroup.Text>
                  <IoCalendarOutline />
                </InputGroup.Text>
              </InputGroup>
            </div>

            <div className="d-flex gap-1">
              <div>
                <Form.Label className="wd-text-bold">
                  Available From
                </Form.Label>
                <InputGroup>
                  <FormControl defaultValue={assignment.available_date}
                    onChange={(e) => { progress["available_date"] = e.target.value; }} />
                  <InputGroup.Text>
                    <IoCalendarOutline />
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <div>
                <Form.Label className="wd-text-bold">
                  Until
                </Form.Label>
                <InputGroup>
                  <FormControl defaultValue={assignment.due_date}
                    onChange={(e) => { progress["until_date"] = e.target.value; }} />
                  <InputGroup.Text>
                    <IoCalendarOutline />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </div>
        </Col>
      </Form.Group>

      <hr />

      <EditorControls
        aid={aid}
        deleteAssignment={(aid) => {
          removeAssignment(aid);
        }}
        updates={progress}
        updateAssignment={(progress) => {
          saveAssignment({ ...progress, editing: false });
        }} />

    </div >
  );
}
