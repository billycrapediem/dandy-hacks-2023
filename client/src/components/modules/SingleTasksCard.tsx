import React from "react";
import taskSchema from "../../../../shared/Tasks";

// single task card, contains the information of a single task, including the name, due date, and the value for the task
// the card will be shown in the main page and the task page
// the card will contain a bottom to edit the task value and a bottom to set the tasks as done, and a bottom to delete the task
// display the task name, due date, and the value of the task and the button at the same line
interface MyComponentProps {
    task: taskSchema;
}

export default function SingleTasksCard(props: MyComponentProps) {
    return (
        <div>
            <div>
                {props.task.name}
            </div>
            <div>
                {props.task.due_dy}
            </div>
            <div>
                {props.task.value}
            </div>
        </div>
    )
}