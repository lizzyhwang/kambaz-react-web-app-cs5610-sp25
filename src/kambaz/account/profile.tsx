import { FormControl, FormSelect, InputGroup } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
export default function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  console.log(currentUser)
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username"
        placeholder="Username"
        className="mb-2"
        value={currentUser.username} />
      <FormControl id="wd-password"
        placeholder="Password"
        type="password"
        className="mb-2"
        value={currentUser.password} />
      <FormControl id="wd-fname"
        placeholder="First Name"
        className="mb-2"
        value={currentUser.firstName} />
      <FormControl id="wd-lname"
        placeholder="Last Name"
        className="mb-2"
        value={currentUser.lastName} />
      <FormControl id="wd-email"
        placeholder="email@example.com"
        value={currentUser.email}
        className="mb-2" />

      <InputGroup className="mb-2">
        <FormControl
          value={currentUser.dob}
          placeholder="DOB" />
        <InputGroup.Text>
          <IoCalendarOutline />
        </InputGroup.Text>
      </InputGroup>

      <FormSelect id="wd-role" className="mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="Student">Student</option>
      </FormSelect>

      <Link id="wd-signin-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100 mb-2"
        onClick={() => dispatch(setCurrentUser(null))}>
        Sign Out </Link>
    </div>
  );
}
