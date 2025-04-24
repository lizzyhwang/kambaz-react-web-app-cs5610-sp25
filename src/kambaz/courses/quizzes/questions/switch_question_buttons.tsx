import { Button } from "react-bootstrap";

export default function SwitchQuestionButtons(
  { curQuestion, setCurQuestion, numQuestions }: { curQuestion: number; setCurQuestion: (idx: number) => void; numQuestions: number }) {
  return (
    <div className="d-flex justify-content-between question-nav-buttons">
      <Button
        className={curQuestion == 0 ? "invisible" : "btn btn-secondary"}
        onClick={() => setCurQuestion(curQuestion - 1)}>
        Previous
      </Button>
      <Button
        className={curQuestion == numQuestions - 1 ? "invisible" : "btn btn-secondary"}
        onClick={() => setCurQuestion(curQuestion + 1)}>
        Next
      </Button>
    </div >
  )
}