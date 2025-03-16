import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/green_checkmark";
import { FaTrash } from "react-icons/fa";
import DeleteAssignmentDialog from "./delete_assignment_dialog";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModuleEditor from "../modules/module_editor";

export default function AssignmentStatusButtons(
  { aid }:
    { aid: string; }
) {
  const { cid } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <button className="transparent-button" onClick={handleShow}>
        <FaTrash className="text-danger me-2 mb-1" />
      </button>

      <DeleteAssignmentDialog show={show} handleClose={handleClose} dialogTitle="Delete Module" aid={aid} />
    </div >);
}