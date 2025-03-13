import { FaPlus } from "react-icons/fa6";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addAssignment } from "./reducer";


export default function AssignmentControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";
  const { cid } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const handleNew = () => {
    const dummy = {
      _id: uuidv4(),
      title: "",
      course: cid,
      description: "",
      points: "0",
      group: "1",
      due_date: "",
      available_date: "",
      until_date: "",
    };
    dispatch(addAssignment(dummy));
    navigate(`/Kambaz/Courses/${cid}/Assignments/${dummy._id}/new`)
  }

  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      {isFaculty &&
        <div>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn"
            onClick={() => {
              handleNew();
            }}>
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Button>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-view-progress">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
        </div>
      }
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
    </div >
  );
}
