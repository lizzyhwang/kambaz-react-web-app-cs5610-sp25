import CourseNavigation from "./navigation";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Modules from "./modules";
import Home from "./home";
import Assignments from "./assignments"
import AssignmentEditor from "./assignments/editor";
import Quizzes from "./quizzes";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./people/table";
import { useEffect, useState } from "react";
import * as coursesClient from "./client"
import QuizEditor from "./quizzes/editor";
import QuizDetails from "./quizzes/details";
import QuizPreview from "./quizzes/preview";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    if (!cid) {
      return;
    }
    const users = await coursesClient.findUsersForCourse(cid);
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid, users]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}

      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Assignments/:aid/new" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:qid/edit" element={<QuizEditor />} />
            <Route path="Quizzes/:qid/preview" element={<QuizPreview />} />
            <Route path="Quizzes/:qid" element={<QuizDetails />} />
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div></div>
    </div>
  );
}
