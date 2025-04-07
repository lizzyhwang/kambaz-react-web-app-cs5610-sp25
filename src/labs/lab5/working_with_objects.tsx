import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

  const [module, setModule] = useState({
    id: 1,
    name: "Next Module",
    description: "A bunchof really interesing stuff",
    course: "BS101",
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr />

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr />

      <h4>Modifying Properties</h4>
      <div className="mb-2">
        <a id="wd-update-assignment-title"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Title
        </a>
        <FormControl className="w-75" id="wd-assignment-title"
          defaultValue={assignment.title} onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })} />
      </div>
      <div className="mb-2">
        <a id="wd-update-assignment-score"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
        <FormControl className="w-75" id="wd-assignment-score" type="number"
          defaultValue={assignment.score} onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
      </div>
      <div className="mb-2">
        <a id="wd-update-assignment-completed"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Status
        </a>
        <label className="form-control w-75 ">
          <input type="checkbox" checked={assignment.completed}
            onChange={() => setAssignment({ ...assignment, completed: !assignment.completed })} /> Completed
        </label>
        <p>{assignment.completed ? "Completed" : "Not Completed"}</p>
      </div>
      <hr />

      <a id="wd-retrieve-module" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a>
      <br></br>
      <a id="wd-retrieve-module-name"
        href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>
      <hr />
      <a id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <FormControl className="w-75" id="wd-module-name"
        defaultValue={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })} />
      <hr />


    </div>
  );
}
