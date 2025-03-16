import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function DeleteAssignmentDialog({ show, handleClose, dialogTitle, aid }: {
  show: boolean; handleClose: () => void; dialogTitle: string; aid: string
}) {
  const dispatch = useDispatch();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}> Cancel </Button>
        <Button variant="danger"
          onClick={() => {
            dispatch(deleteAssignment(aid))
            handleClose;
          }} > Yes, Delete </Button>
      </Modal.Footer>
    </Modal>
  );
}