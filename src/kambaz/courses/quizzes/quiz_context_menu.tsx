import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as quizClient from "./client";
import { useDispatch } from "react-redux";
import { removeQuiz } from "./reducer";

interface DropdownItemProps {
  icon?: string
  quizId: string
}

export const QuizContextMenu: React.FC<DropdownItemProps> = ({ quizId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const dispatch = useDispatch();

  const deleteQuiz = async (quizId: string) => {
    await quizClient.deleteQuiz(quizId);
    dispatch(removeQuiz(quizId));
  };

  const dropdownOptions: Array<any> = [
    {
      value: "Delete",
      onClick: deleteQuiz,
      color: "red",
    },
    {
      value: "Edit",
      // onClick: onEdit,
    }
  ]

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={toggleDropdown}>
        <BsThreeDotsVertical />
      </div>
      {isOpen && <div className="dropdown-list-container">
        <button className="dropdown-list-btn">
          Edit
        </button>
        <button className="dropdown-list-btn red" onClick={() => deleteQuiz(quizId)}>
          Delete
        </button>
      </div>}
    </div>
  )
}