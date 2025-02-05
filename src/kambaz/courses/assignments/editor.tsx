import { Col, Form, FormControl, FormSelect, InputGroup, Row } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import EditorControls from "./editor_controls";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form.Label >
        Assignment Name
      </Form.Label>
      <Form.Group as={Row} className="mb-3" controlId="assignmentName">
        <Col sm={10}>
          <Form.Control type="text" value="A1 - ENV + HTML" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={10}>
          <Form.Control as="textarea" style={{ height: "400px" }}
            value="Submit a link to the landing page of your Web application running on Netlify.

The landing page should be the Kambaz application with a link to the Lab exercises.

Lab 1 should be the landing page of the Lab exercises and should include the following:

Your full name and section
Links to each of the lab assignments
Link to the Kambaz application
Links to all relevant source code repositories
The Kambaz application should include a link to navigate back to the landing page."/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="points">
        <Form.Label column sm={4} align="right">
          Points
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="email" value="100" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="group">
        <Form.Label column sm={4} align="right">
          Assignment Group
        </Form.Label>
        <Col sm={6}>
          <FormSelect>
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
            <Form.Control className="mb-3" type="email" value="100" />

            <div className="mb-3">
              <Form.Label className="wd-text-bold">
                Due
              </Form.Label>
              <InputGroup>
                <FormControl value="May 13, 2024, 12:00 am" />
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
                  <FormControl value="May 6, 2024, 12:00 am" />
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
                  <FormControl />
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

      <EditorControls />

    </div >
  );
}
