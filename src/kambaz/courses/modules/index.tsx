import { useParams } from "react-router";
import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./modules_controls";
import ModuleControlButtons from "./module_control_buttons";
import LessonControlButtons from "./lesson_control_buttons";
import { BsGripVertical } from "react-icons/bs";
import { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };


  return (
    <div>
      <div className="wd-modules">
        {isFaculty &&
          <ModulesControls
            setModuleName={setModuleName}
            moduleName={moduleName}
            addModule={createModuleForCourse} />
        }
        <br /><br /><br /><br />
      </div>
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .map((module: any) => (
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl className="w-50 d-inline-block"
                    onChange={(e) => dispatch(
                      updateModule({ ...module, name: e.target.value })
                    )}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name} />
                )}
                {isFaculty &&
                  <ModuleControlButtons moduleId={module._id}
                    deleteModule={(moduleId) => {
                      removeModule(moduleId);
                    }}
                    editModule={(moduleId) => dispatch(editModule(moduleId))} />
                }
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div >
  );
}
