import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function Dashboard({
  courses,
  addCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  addCourse: (course: any) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: any) => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

  const dispatch = useDispatch();

  const [courseData, setCourseData] = useState<any>({
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "D000",
    credits: 3,
    description: "New Course Description",
  });

  const handleSaveCourse = async () => {
    if (courseData._id) {
      updateCourse(courseData);
    } else {
      const newCourse = await addCourse(courseData);
      console.log(newCourse);
    }
    setCourseData({
      _id: "",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      department: "D000",
      credits: 3,
      description: "New Course Description",
    });;
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1> <hr />
      {isFaculty && (
        <div>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleSaveCourse} > Add </button>
            <button className="btn btn-warning float-end me-2" id="wd-update-course-click"
              onClick={() => {
                handleSaveCourse();
                const name_input = document.getElementById("enter-course-name") as HTMLInputElement;
                name_input.value = "";
                const desc_input = document.getElementById("enter-course-desc") as HTMLInputElement;
                desc_input.value = "";
              }} >
              Update
            </button>
          </h5>
          <br />
          <input id="enter-course-name" placeholder="Course Name" className="form-control mb-2" onChange={(e) => { courseData["name"] = e.target.value; }} />
          <input id="enter-course-desc" placeholder="Course Description" className="form-control" onChange={(e) => { courseData["description"] = e.target.value; }} />
          <hr />
        </div>
      )}

      <div className="d-flex justify-content-between">
        <h2 id="wd-dashboard-published">{enrolling ? "Published Courses" : "My Courses"} ({courses.length})</h2>
      </div>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .map((course: any) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img variant="top" src="/images/reactjs.jpg" width={200} />
                    <Card.Body>
                      <Card.Title className="wd-dashboard-course-title">
                        {enrolling && (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}
                            className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                        {course.name}
                      </Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button variant="primary"> Go </Button>
                        {isFaculty && (
                          <div>
                            <button onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }} className="btn btn-danger float-end"
                              id="wd-delete-course-click">
                              Delete
                            </button>
                            <button id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                const name_input = document.getElementById("enter-course-name") as HTMLInputElement;
                                name_input.value = course.name;
                                const desc_input = document.getElementById("enter-course-desc") as HTMLInputElement;
                                desc_input.value = course.description;
                                setCourseData({ _id: course._id, name: course.name, description: course.description });
                              }}
                              className="btn btn-warning me-2 float-end" >
                              Edit
                            </button>
                          </div>
                        )}
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row >
      </div >
    </div >
  );
}

