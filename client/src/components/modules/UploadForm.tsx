// Modal Component
import React, { useState } from 'react';
import { Container, Modal, Form, Button } from 'react-bootstrap';

interface AddItemModalProps {
    id: string;
}

// put the content at the center using bootstrap
export default function UploadForm(props: AddItemModalProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
};