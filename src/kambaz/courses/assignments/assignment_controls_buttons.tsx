import { IoEllipsisVertical } from "react-icons/io5";
import { PiPlus } from "react-icons/pi";
import PercentLabel from "./percent_label";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <PercentLabel />
      <PiPlus />
      <IoEllipsisVertical className="fs-4" />
    </div >);

}