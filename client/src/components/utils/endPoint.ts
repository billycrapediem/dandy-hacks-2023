import { taskSchema } from "../../../../server/models/Tasks";
import { listSchema } from "../../../../server/models/Lists";
import { get, post } from "./utilities";

// get all the lists from the database
export async function getLists(): Promise<listSchema[]> {
    return await get("/api/getLists");
}

// get all the tasks from the database
export async function getTasks(): Promise<taskSchema[]> {
    return await get("/api/tasks");
}

// get the tasks by the list name, not done tasks
export async function getTaskByWorkSpace(done: boolean, name?: string,): Promise<taskSchema[]> {
    return await get("/api/task", { name, done });
}

// change the task to done
export async function changeTaskToDone(id: string): Promise<void> {
    return await post("/api/updateTaskDone", { id });
}

// delete task from the database
export async function deleteTask(id: string): Promise<void> {
    return await get("/api/deleteTask", { id });
}

