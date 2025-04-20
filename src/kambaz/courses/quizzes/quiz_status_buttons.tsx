import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/green_checkmark";
import { Link, useParams } from "react-router";
import { useState } from "react";
import { QuizContextMenu } from "./quiz_context_menu";

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
      <QuizContextMenu quizId={qid} />
    </div >
  );
}