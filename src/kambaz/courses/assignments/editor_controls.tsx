import { Button } from "react-bootstrap";

export default function EditorControls() {
  return (
    <div id="wd-assignment-editor-controls" className="text-nowrap">
      <Button variant="danger" size="sm" className="me-1 float-end" id="wd-add-module-btn">
        Save
      </Button>
      <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-view-progress">
        Cancel
      </Button>
    </div>
  );
}
