// main page of the app
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { getTaskByWorkSpace, getTasks } from '../utils/endPoint';
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
    }, []);
    const rowStyle = {
        margin: "10px",
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
            <Row style={rowStyle}>
                Tasks Over View
            </Row>
        </Container>

    );
}