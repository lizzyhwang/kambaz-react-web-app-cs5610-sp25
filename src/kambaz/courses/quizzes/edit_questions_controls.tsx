
import { Button } from "react-bootstrap";

export default function QuestionsEditorControls({ updates, updateQuestions }:
  { updates: any; updateQuestions: (quiz: any) => void; }) {
  return (
    <div id="wd-questions-editor-controls" className="mt-2 text-nowrap d-flex justify-content-center align-items-center">
      <Button variant="danger" size="sm" className="me-1" id="wd-add-module-btn"
        onClick={() => {
          updateQuestions(updates);
        }}
      >
        Save
      </Button>
      <Button variant="secondary" size="sm" className="me-1" id="wd-view-progress">
        Cancel
      </Button>
    </div >
  );
}
