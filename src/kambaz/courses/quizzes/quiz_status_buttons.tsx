import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/green_checkmark";
import { Link, useParams } from "react-router";

export default function QuizStatusButtons(
  { qid }:
    {
      qid: string;
    }
) {
  const { cid } = useParams();
  return (
    <div className="float-end" >
      <GreenCheckmark />
      < IoEllipsisVertical className="fs-4" />
    </div >
  );
}