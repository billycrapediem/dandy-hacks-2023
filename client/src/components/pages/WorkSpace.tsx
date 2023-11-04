// main page of the app
import React, { useState } from 'react';
import { Container, Modal, Form, Button } from 'react-bootstrap';
import UploadForm from '../modules/UploadForm';

// put the content at the center using bootstrap
export default function WorkSapce() {
    const [showUploadForm, setShowUploadForm] = useState(false);
    const handleClose = () => setShowUploadForm(false);
    const handleShow = () => setShowUploadForm(true);

    return (
        <Container fluid className="d-flex align-items-center justify-content-center vh-100">
            <div className="addTask">
                <button onClick={handleShow}>add task</button>
                <UploadForm show={showUploadForm} handleClose={handleClose} />
            </div>
        </Container>
    );
}
