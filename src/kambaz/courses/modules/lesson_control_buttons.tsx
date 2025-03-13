import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./green_checkmark";
import { FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router";

export default function LessonControlButtons(
  { aid, deleteAssignment }:
    { aid: string; deleteAssignment: (aid: string) => void; }
) {
  const { cid } = useParams();
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <Link to={`/Kambaz/Courses/${cid}/Assignments`} >
        <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(aid)} />
      </Link>

    </div >);
}