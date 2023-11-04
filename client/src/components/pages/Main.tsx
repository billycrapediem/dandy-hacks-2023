// main page of the app
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { getTaskByWorkSpace, getTasks } from '../utils/api';
import TaskSchema from "../../../../shared/Tasks";
// main page of the app consists of two parts, reminder of the today's task and overview of the tasks in the future
// make the text beautiful
export default function Main() {
    const [tasks, setTasks] = useState<TaskSchema[]>([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const tmpTasks = await getTaskByWorkSpace("asdfasdf", false);
            setTasks(tmpTasks);
            console.log(tasks);
        };
        fetchTasks();
    }, []);
    const rowStyle = {
        margin: "10px",
        fontSize: "30px",
    };

    return (
        <Container fluid>
            <Row style={rowStyle}>
                Tasks due today
            </Row>
            <Row style={rowStyle}>
                Tasks Over View
            </Row>
        </Container>

    );
}