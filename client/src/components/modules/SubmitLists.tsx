import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { post } from '../utils/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import listSchema from '../../../../shared/Lists';

interface submitListsProps {
    myList: listSchema[];
    myFunction: (value: listSchema[]) => void;
}
function SubmitLists(props: submitListsProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, nameSetter] = useState<string>('');
    const handlename = (event: ChangeEvent<HTMLInputElement>) => {
        nameSetter(event.target.value);
    }
    const handleSubmit = () => {
        const body = {
            name: name,
        }

        post('/api/addNewList', body).then((res) => {
            props.myFunction([...props.myList, res]);
        });

    }
    async function handleSubmitButton() {
        await handleSubmit();
        await handleClose();
    }
    return (
        <>
            <Button variant="light" onClick={handleShow} className='d-flex align-items-center justify-content-center'>
                <FontAwesomeIcon icon={faSquarePlus} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>add new Work Space</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>workSpace Name</Form.Label>
                            <Form.Control
                                type="workspace"
                                onChange={handlename}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitButton}>
                        submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SubmitLists;