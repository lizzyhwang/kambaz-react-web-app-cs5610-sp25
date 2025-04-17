import { useState } from "react";
import { FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    console.log(user);
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/kambaz/account/profile");
  };

  return (
    <div id="wd-signup-screen">
      <h1>Sign Up</h1>
      <FormControl id="wd-username"
        placeholder="username"
        className="mb-2"
        onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <FormControl id="wd-password"
        placeholder="password" type="password"
        className="mb-2"
        onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <FormControl id="wd-password"
        placeholder="verify password" type="password"
        className="mb-2" />
      <Link id="wd-signup-btn"
        onClick={signup}
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2">
        Sign Up </Link>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signin">Sign in</Link>
    </div>);
}