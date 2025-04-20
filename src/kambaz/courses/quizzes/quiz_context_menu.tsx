import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as quizClient from "./client";
import { useDispatch } from "react-redux";
import { removeQuiz, updateQuiz } from "./reducer";
import { useNavigate, useParams } from "react-router";

interface DropdownItemProps {
  icon?: string
  quiz: { _id: string, published: boolean }
}

export const QuizContextMenu: React.FC<DropdownItemProps> = ({ quiz }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cid } = useParams();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const dispatch = useDispatch();

  const deleteQuiz = async (quizId: any) => {
    await quizClient.deleteQuiz(quizId);
    dispatch(removeQuiz(quizId));
  };

  const togglePublished = async () => {
    if (!quiz) {
      return;
    }
    const newQuiz = await quizClient.updateQuiz({ ...quiz, published: !quiz.published })
    dispatch(updateQuiz(newQuiz));
  }

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={toggleDropdown}>
        <BsThreeDotsVertical />
      </div>
      {isOpen && <div className="dropdown-list-container">
        <button className="dropdown-list-btn"
          onClick={() => {
            togglePublished();
            toggleDropdown();
          }}>
          {quiz.published ? "Unpublish" : "Publish"}
        </button>
        <button className="dropdown-list-btn" onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/edit`)}>
          Edit
        </button>
        <button className="dropdown-list-btn red" onClick={() => deleteQuiz(quiz._id)}>
          Delete
        </button>
      </div>}
    </div>
  )
}