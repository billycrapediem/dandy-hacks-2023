import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TaskSchema from '../../../../shared/Tasks';
import { getTaskByWorkSpace, deleteList } from '../utils/endPoint';
import SingleTasksCard from '../modules/SingleTasksCard';
import SubmitTasks from './SubmitTasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import "../pages/Main.css"
// WorkSpace page of the app, contains all the tasks in the same workspace
// 
interface workSpaceProps {
    workspaceName?: string;
}

export default function WorkSapce(props: workSpaceProps) {
    const [tasks, setTasks] = useState<TaskSchema[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchTasks = async () => {
            const tmpTasks = await getTaskByWorkSpace(false, props.workspaceName);
            setTasks(tmpTasks);
        }
        fetchTasks();
    })
    async function handleListDelete() {
        if (props.workspaceName !== undefined) {
            await deleteList(props.workspaceName);
            navigate('/');
        }
    }
    const hasTasks: boolean = tasks.length > 0;
    const rowStyle = {
        margin: "10px",
        fontSize: "30px",
    };
    return (
        <Container className='background' fluid>
            <Row style={rowStyle}>
                <Col>
                    {props.workspaceName}
                </Col>
                <Col>
                    <Button variant="danger" onClick={handleListDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </Col>
            </Row>
            {hasTasks ? (
                tasks.map((task: TaskSchema) => {
                    return (
                        <SingleTasksCard task={task} />
                    );
                })
            ) : (
                <Container className="d-flex align-items-center justify-content-center vh-90" style={{ padding: "70px" }}>
                    <h1>No task here</h1>
                </Container>

            )}
            <SubmitTasks id={props.workspaceName} />

        </Container>
    );
};