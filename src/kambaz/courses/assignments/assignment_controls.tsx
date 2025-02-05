import { FaPlus } from "react-icons/fa6";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-view-progress">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Col sm={10}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaSearch style={{ bottom: "1px" }} />
              </InputGroup.Text>
              <Form.Control type="email" placeholder="Search..." />
            </InputGroup>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
