import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { setQuizzes } from "./reducer";
import { IoRocketOutline } from "react-icons/io5";
import QuizStatusButtons from "./quiz_status_buttons";
import QuizControls from "./quiz_controls";

export default function Quizzes() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const isFaculty = currentUser.role == "FACULTY";
  const dispatch = useDispatch();
  const today = new Date();

  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  }

  useEffect(() => {
    fetchQuizzes();
  }, [cid, quizzes]);

  return (
    <div id="wd-quizzes">
      {isFaculty && <QuizControls />}
      <br></br>
      <ListGroup className="rounded-0" id="wd-quizzes">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div id="wd-quizzes-title"
            className="p-3 ps-2 bg-secondary">
            Assignment Quizzes
          </div>
          <div>
            <ListGroup id="wd-quiz-list" className="rounded-0">
              {quizzes.map((quiz: any) => (
                <ListGroup.Item action
                  className="wd-assignment-list-item p-3 ps-1 flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <IoRocketOutline className="me-2 fs-3 text-success" />
                    <div className="wd-assignment-description">
                      <Link to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}
                        className="text-decoration-none text-dark">
                        <p>
                          <span className="wd-text-bold">{quiz.title}</span>
                          <br></br>
                          {new Date(quiz.until_date) < today ? (
                            <>
                              <b>Closed</b> | <b>Due</b> {new Date(quiz.due_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | {quiz.points} points | 10 questions
                            </>
                          ) : (
                            <>
                              {new Date(quiz.available_date) < today ? (
                                <>
                                  <b>Available Now</b> | <b>Due</b> {new Date(quiz.due_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | {quiz.points} points | 10 questions
                                </>
                              ) : (
                                <>
                                  <b>Available</b> {new Date(quiz.available_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | <b>Due</b> {new Date(quiz.due_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | {quiz.points} points | 10 questions
                                </>
                              )}
                            </>
                          )}
                        </p>
                      </Link>
                    </div>
                    {isFaculty && <QuizStatusButtons
                      qid={quiz._id} />}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}