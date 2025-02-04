import CourseNavigation from "./navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./modules";
import Home from "./home";
import Assignments from "./assignments"
import AssignmentEditor from "./assignments/editor";
import { FaAlignJustify } from "react-icons/fa6";


export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234</h2>
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
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div></div>
    </div>
  );
}
