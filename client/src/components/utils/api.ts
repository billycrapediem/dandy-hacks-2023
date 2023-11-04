import { taskSchema } from "../../../../server/models/Tasks";
import { listSchema } from "../../../../server/models/Lists";
import { get } from "./utilities";


export async function getLists(): Promise<listSchema[]> {
    return await get("/api/getLists");
}

export async function getTasks(): Promise<taskSchema[]> {
    return await get("/api/tasks");
}

export async function getTaskByWorkSpace(name: string, done: boolean): Promise<taskSchema[]> {
    return await get("/api/task", { name, done });
}

