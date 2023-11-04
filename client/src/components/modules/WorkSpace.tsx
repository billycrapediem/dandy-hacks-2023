import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
    }, [])
    const hasTasks: boolean = tasks.length > 0;
    return (
        <Container fluid className="d-flex align-items-center justify-content-center vh-100">
            <SubmitTasks id={props.workspaceName} />
            {hasTasks ? (tasks.map((task: TaskSchema) => {
                return (
                    <SingleTasksCard task={task} />
                );
            })
            ) : (
                <div>
                    no tasks
                </div>
            )}
        </Container>
    );
};