import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/green_checkmark";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { QuizContextMenu } from "./quiz_context_menu";
import * as quizClient from "./client";
import { PiProhibitBold } from "react-icons/pi";

export default function QuizStatusButtons(
  { qid }:
    {
      qid: string;
    }
) {
  const { cid } = useParams();
  const [quiz, setQuiz] = useState({ _id: "", published: false });

  const fetchQuiz = async () => {
    if (!qid) {
      return;
    }
    const quiz = await quizClient.findQuizById(qid);
    setQuiz(quiz);
  }

  useEffect(() => {
    fetchQuiz();
  }, [qid]);

  return (
    <div className="float-end" >
      {quiz.published && <GreenCheckmark />}
      {!quiz.published && <PiProhibitBold className="text-danger" />}
      <QuizContextMenu quiz={quiz} />
    </div >
  );
}