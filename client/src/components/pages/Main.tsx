// main page of the app
import React, { useEffect, useState } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { getTaskByWorkSpace } from '../utils/endPoint';
import TaskSchema from "../../../../shared/Tasks";
import SingleTasksCard from '../modules/SingleTasksCard';
import "./Main.css"
// main page of the app consists of two parts, reminder of the today's task and overview of the tasks in the future
// make the text beautiful
export default function Main() {
    const [tasks, setTasks] = useState<TaskSchema[]>([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const tmpTasks = await getTaskByWorkSpace(false);
            console.log(tmpTasks)
            setTasks(tmpTasks);
        };
        fetchTasks();
    });
    const rowStyle = {
        fontSize: "30px",

    };
    return (
        <Container className="background" fluid>
            <Row className='u-bold' style={rowStyle}>
                Tasks due today
            </Row>
            {tasks.map((task: TaskSchema) => {
                return (
                    <SingleTasksCard task={task} key={task._id} />
                );
            })}
            <Row>
                <Container fluid className="d-flex align-items-center justify-content-center vh-100">
                    <Card>
                        <Card.Body>
                            <Card.Title>Don't procrastinate</Card.Title>
                            <Card.Text>
                                The goal of this app is to help you to manage your time and tasks and avoid procrastination.
                                The motivation value of each task is calculated based on motivation formula founded by Steel.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Container>
            </Row>
        </Container>

    );
}