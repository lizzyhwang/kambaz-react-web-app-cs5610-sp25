import { Button } from "react-bootstrap";

export default function SaveQuestionFooter({ updateQuestion, handleCancel }:
  { updateQuestion: () => void; handleCancel: () => void; }) {
  return (
    <div className="small-margin d-flex justify-content-start align-items-center">
      <Button variant="danger" size="sm" className="me-1" id="wd-add-module-btn"
        onClick={updateQuestion}
      >
        Save
      </Button>
      <Button variant="secondary" size="sm" className="me-1" id="wd-view-progress" onClick={handleCancel}>
        Cancel
      </Button>
    </div >
  );
}
