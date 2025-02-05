import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/reactjs.jpg" width={200} />
                <Card.Body>
                  <Card.Title>CS1234</Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    React JS </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/typescript.png" width={200} />
                <Card.Body>
                  <Card.Title>CS1235</Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Typescript  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/python.png" width={200} />
                <Card.Body>
                  <Card.Title>CS1236</Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Python </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/java.png" width={200} />
                <Card.Body>
                  <Card.Title>CS1237</Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Java </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cpp.png" width={200} />
                <Card.Body>
                  <Card.Title>CS1238</Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    C++ </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/github.png" width={200} />
                <Card.Body>
                  <Card.Title>CS1239</Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Github </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/aws.png" width={200} />
                <Card.Body>
                  <Card.Title>CS1240</Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Github </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
