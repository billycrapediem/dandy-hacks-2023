import React from "react";
import taskSchema from "../../../../shared/Tasks";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { deleteTask, changeTaskToDone } from "../utils/endPoint";
import UpdateTask from "./updateTasks";
import UploadForm from "./UploadForm";

// single task card, contains the information of a single task, including the name, due date, and the value for the task
// the card will be shown in the main page and the task page
// the card will contain a bottom to edit the task value and a bottom to set the tasks as done, and a bottom to delete the task
// display the task name, due date, and the value of the task and the button at the same line
interface MyComponentProps {
    task: taskSchema;
}



export default function SingleTasksCard(props: MyComponentProps) {
    async function HANDLE_DELETE_TASK() {
        await deleteTask(props.task._id);
    }

    async function HANDLE_CHANGE_TASK_TO_DONE() {
        await changeTaskToDone(props.task._id);
    }
    const TASK_STYLE = {
        margin: "10px",
        borderTop: '2px solid #808080',
        borderBottom: '2px solid #808080',
        padding: '10px',
    }
    const time: Date = props.task.due_dy;
    return (
        <Row style={TASK_STYLE}>
            {!props.task.done ? (
                <Col sm='1'>
                    <Form.Check
                        type={'radio'}
                        id={`default-${'radio'}`}
                        onClick={HANDLE_CHANGE_TASK_TO_DONE}
                    />
                </Col>
            ) : (<></>)
            }
            <Col sm='2'>
                <Row className="u-bold" style={{ fontSize: "16px" }}>
                    {props.task.name}

                </Row>
                <Row className="u-bold" style={{ fontSize: "12px" }}>
                    {props.task.dayInString}
                </Row>
            </Col>
            <Col>
                <Row className="u-bold" style={{ fontSize: "16px" }}>
                    Motivation value: {props.task.value}
                </Row>
            </Col>
            <Col>
                <UploadForm id={props.task._id} />
            </Col>
            <Col>
                <UpdateTask id={props.task._id} />
            </Col>
            <Col>
                <Button variant="primary" onClick={HANDLE_DELETE_TASK}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </Col>
        </Row>
    )
}