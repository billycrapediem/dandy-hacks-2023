import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TaskSchema from '../../../../shared/Tasks';
import { getTaskByWorkSpace } from '../utils/endPoint';
import SingleTasksCard from '../modules/SingleTasksCard';
import SubmitTasks from './SubmitTasks';
// WorkSpace page of the app, contains all the tasks in the same workspace
// 
interface workSpaceProps {
    workspaceName?: string;
}
export default function WorkSapce(props: workSpaceProps) {
    const [tasks, setTasks] = useState<TaskSchema[]>([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const tmpTasks = await getTaskByWorkSpace(false, props.workspaceName);
            setTasks(tmpTasks);
        }
        fetchTasks();
    })
    const hasTasks: boolean = tasks.length > 0;
    const rowStyle = {
        margin: "10px",
        fontSize: "30px",
    };
    return (
        <Container fluid>
            <Row style={rowStyle}>
                {props.workspaceName}

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