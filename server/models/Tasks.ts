import { Schema, Document, model } from "mongoose";

//define a schema for the tasks
const taskSchema = new Schema({
    name: String,
    confident: Number,
    interest: Number,
    due_dy: Date,
    value: Number,
    done: Boolean,
    workSpace: String,
    time: Number,
    dayInString: String,
});

export interface taskSchema extends Document {
    name: string,
    confident: number,
    interest: number,
    due_dy: Date,
    value: number,
    done: boolean,
    workSpace: string,
    time: number,
    dayInString: string,
    _id: string,

};

const tasksObject = model<taskSchema>("tasks", taskSchema);

export default tasksObject;