import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${cid}/People` }
  ];

  return (
    <ListGroup id="wd-courses-navigation" style={{ width: 120 }}
      className="wd list-group fs-7 rounded-0">
      {links.map((link) => (
        <ListGroup.Item key={link.path} as={Link} to={link.path} className={`list-group-item text-danger border border-0
          ${pathname.includes(link.label) ? "text-black active" : "text-danger"}`}>
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
