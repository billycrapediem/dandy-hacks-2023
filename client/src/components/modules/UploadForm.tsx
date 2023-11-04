// Modal Component
import React, {useState} from 'react';
import { Container, Modal, Form, Button} from 'react-bootstrap';

interface AddItemModalProps {
    show: boolean;
    handleClose: () => void;
}

// put the content at the center using bootstrap
const UploadForm: React.FC<AddItemModalProps> = ({ show, handleClose }) => {
    const [item, setItem] = useState('');

    return (
        <div className="addTask">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title> Add Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="enter the task"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UploadForm;