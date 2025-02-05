import { FormControl, FormSelect, InputGroup } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username"
        placeholder="Username"
        className="mb-2"
        value="lizzy" />
      <FormControl id="wd-password"
        placeholder="Password"
        type="password"
        className="mb-2"
        value="password" />
      <FormControl id="wd-fname"
        placeholder="First Name"
        className="mb-2"
        value="Alice" />
      <FormControl id="wd-lname"
        placeholder="Last Name"
        className="mb-2"
        value="Wonderland" />
      <FormControl id="wd-email"
        placeholder="email@example.com"
        value="alice@wonderland.com"
        className="mb-2" />

      <InputGroup className="mb-2">
        <FormControl
          value="May 13, 2002"
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
        className="btn btn-danger w-100 mb-2">
        Sign Out </Link>
    </div>
  );
}
