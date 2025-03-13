import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./database";
import { useSelector } from "react-redux";

export function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const isFaculty = currentUser.role == "FACULTY";

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse((prevState: any) => ({
      ...prevState,
      name: event.target.value,
    }));
  };
  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse((prevState: any) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const enrolled_courses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id &&
        enrollment.course === course._id
    ))


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <div>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <input placeholder="Course Name" className="form-control mb-2" onChange={handleNameChange} />
          <input placeholder="Course Description" className="form-control" onChange={handleDescChange} />
          <hr />
        </div>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({enrolled_courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {enrolled_courses
            .map((course) => (

              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img variant="top" src="/images/reactjs.jpg" width={200} />
                    <Card.Body>
                      <Card.Title className="wd-dashboard-course-title">{course.name}</Card.Title>
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
                                setCourse(course);
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

