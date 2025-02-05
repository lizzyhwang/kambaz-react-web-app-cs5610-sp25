import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./green_checkmark";
import { PiPlus } from "react-icons/pi";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <PiPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>);
}