import React, { useState, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { post } from '../utils/utilities';
import { Form, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "../utils/utilities.css";


interface updateTasksProps {
    id?: string;
}

function UpdateTask(props: updateTasksProps) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [confident, confidentSetter] = useState<number>(0);
    const [interest, interestSetter] = useState<number>(0);
    const [selectDate, setSelectDate] = useState(new Date());

    const handleConfident = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        confidentSetter(parseInt(value));
    }
    const handleInterest = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        interestSetter(parseInt(value));
    }
    const handleSubmit = () => {
        const body = {
            dueDate: selectDate.toDateString(),
            time: selectDate.getTime(),
            confident: confident,
            interest: interest,
            done: false,
            id: props.id,
        };
        post('/api/updateTaskInfo', body);
        post('/api/upToDateTask');
    }
    async function handleUnderstand() {
        await handleClose();
        await handleSubmit();
    }
    return (
        <>
            <Button className="u-bold" variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faEdit} />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>new tasks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>
                        <Form.Label htmlFor="inputConfident" >confident</Form.Label>
                        <Form.Control type="confident rate" placeholder='how confident are you in this work( scale from 0 to 10)' onChange={handleConfident} />
                        <Form.Label htmlFor="inputInterest" >intereset</Form.Label>
                        <Form.Control type="Interest rate" placeholder='how is the job interesting (0-10)' onChange={handleInterest} />
                        <div style={{ marginTop: '20px' }}>
                            Date
                        </div>
                        <DatePicker showIcon selected={selectDate} onChange={(date) => setSelectDate(date)} />
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUnderstand}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UpdateTask;