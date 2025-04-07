import EnvironmentVariables from "./environment_variables";
import PathParameters from "./path_parameters";
import QueryParameters from "./query_parameters";
import WorkingWithObjects from "./working_with_objects";
import WorkingWithArrays from "./working_with_arrays";
import HttpClient from "./http_client";
import "./styles.css";
import WorkingWithObjectsAsynchronously from "./working_with_objects_asynchronously";
import WorkingWithArraysAsynchronously from "./working_with_arrays_asynchronously";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`}
          className="list-group-item">
          Welcome
        </a>
      </div><hr />
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArraysAsynchronously />
    </div>
  );
}
