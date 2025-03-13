import { Button, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign In</h1>
      <FormControl defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        id="wd-username"
        placeholder="username"
        className="mb-2" />
      <FormControl defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        id="wd-password"
        placeholder="password" type="password"
        className="mb-2" />
      <Button onClick={signin} id="wd-signin-btn" className="w-100 mb-2" > Sign in </Button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign Up</Link>
    </div>);
}