import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = !currentUser ?
    [{ label: "Signin", path: `/Kambaz/Account/Signin` }, { label: "Signup", path: `/Kambaz/Account/Signup` }]
    :
    [{ label: "Profile", path: `/Kambaz/Account/Profile` }];

  return (
    <ListGroup id="wd-account-navigation" className="wd list-group fs-7 rounded-0">
      {links.map((link) => (
        <ListGroup.Item key={link.path} as={Link} to={link.path} className={`list-group-item text-danger border border-0
          ${pathname.includes(link.label) ? "text-black active" : "text-danger"}`}>
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
