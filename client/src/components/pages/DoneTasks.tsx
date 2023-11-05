import React, { useEffect, useState } from "react";
import { getTaskByWorkSpace } from "../utils/endPoint";
import taskSchema from "../../../../shared/Tasks";
import SingleTasksCard from "../modules/SingleTasksCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Main.css'

// display all the done tasks in the past
// the page will be shown in the done task page

export default function DoneTasks() {
    const [tasks, setTasks] = useState<taskSchema[]>([]); // prettier-ignore
    useEffect(() => {
        getTaskByWorkSpace(true).then((res) => {
            console.log(res)
            setTasks(res);
        });
    }, []);
    const hasTasks: boolean = tasks.length > 0;
    return (
        <div className="background">
            {hasTasks ? (tasks.map((task: taskSchema) => {
                return (
                    <SingleTasksCard task={task} />
                );
            })
            ) : (
                <Container fluid className="d-flex align-items-center justify-content-center vh-100">
                    <Row>
                        <Col className="text-center">
                            <h1>No Done Task yet</h1>
                            <Link to="/">Go to home page</Link>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    )
}