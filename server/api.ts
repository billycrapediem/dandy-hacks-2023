import express, { Request, Response } from "express";
import tasksObject, { taskSchema } from "./models/Tasks";
import listObject from "./models/Lists";
const router = express.Router();

// get all the lists from the database
router.get("/getLists", (req: Request, res: Response) => {
  listObject.find({}).then((listObject) => (res.send(listObject)));

})
// get all the tasks from the database
router.get("/tasks", (req: Request, res: Response) => {
  tasksObject.find({}).then((tasks) => (res.send(tasks)));
})


interface foo {
  name: string;
  done: boolean;
}
// get the tasks by the list name, not done tasks
router.get("/task", async (req: Request<{}, {}, {}, foo>, res: Response) => {
  function compareFun(a: taskSchema, b: taskSchema) {
    if (a.value > b.value) {
      return -1;
    }
    else if (b.value > a.value) {
      return 1;
    }
    return 0;
  }
  let q = {};
  const { query } = req;
  if (query.name === 'undefined') {
    q = { done: query.done }

  }
  else {
    q = { workSpace: query.name, done: query.done }
  }
  const tasks = await tasksObject.find(
    q
  );
  tasks.sort(compareFun);
  res.send(tasks);
})

// return the value of the task
function calcualteValue(interest: number, confident: number, time: number) {
  const date = new Date();
  const nomiator: number = interest * confident;
  const denominator: number = (time - date.getTime()) / (1000 * 3600 * 24);
  return nomiator / denominator;
}

async function upToDateTask() {
  const updateTask = await tasksObject.find({});
  updateTask.forEach(async (task) => {
    task.value = calcualteValue(task.interest, task.confident, task.time);
    await task.save();
  })
}

// add new task to the database
router.post("/newTasks", (req: Request, res: Response) => {
  const motivationValue: number = calcualteValue(req.body.interest, req.body.confident, req.body.time);
  const dateInString: string = req.body.dueDate.toString();
  const newTasks = new tasksObject({
    name: req.body.name,
    confident: req.body.confident,
    interest: req.body.interest,
    due_dy: req.body.dueDate,
    value: motivationValue,
    time: req.body.time,
    done: req.body.done,
    workSpace: req.body.workSpace,
    dayInString: dateInString,
  }
  )
  newTasks.save().then((task) => res.send(task));
});

// update the task given the id
router.post("/updateTask", (req: Request, res: Response) => {
  const dateInString: string = req.body.dueDate.toString();
  const motivationValue: number = calcualteValue(req.body.interest, req.body.confident, req.body.time);
  tasksObject.updateOne({ _id: req.body.id }, {
    $set: {
      confident: req.body.confident,
      interest: req.body.interest,
      due_dy: req.body.dueDate,
      value: motivationValue,
      time: req.body.time,
      dayInString: dateInString,
    }
  }).then((task) => res.send(task));
});

//update the task
router.post("/upToDateTask", (req: Request, res: Response) => {
  upToDateTask();
})

// add new list to the database
router.post("/addNewList", (req: Request, res: Response) => {
  const newLists = new listObject({
    name: req.body.name,
  });
  newLists.save().then((list) => res.send(list));
});
// update the task given the id
router.post("/updateTaskDone", (req: Request, res: Response) => {
  tasksObject.updateOne({ _id: req.body.id }, { $set: { done: true } }).then((task) => res.send(task));
});

// update the tasks value
router.post("/updateTaskInfo", (req: Request, res: Response) => {
  const motivationValue: number = calcualteValue(req.body.interest, req.body.confident, req.body.time);
  tasksObject.updateOne({ _id: req.body.id }, {
    $set: {
      confident: req.body.confident,
      interest: req.body.interest,
      due_dy: req.body.dueDate,
      value: motivationValue,
      time: req.body.time,
    }
  }).then((task) => res.send(task));
});

// delete the task given the id
router.post("/deleteTask", (req: Request, res: Response) => {
  tasksObject.deleteOne({ _id: req.body.id }).then((task) => res.send(task));
});

// delete teh list given the name
router.post("/deleteList", (req: Request, res: Response) => {
  listObject.deleteOne({ name: req.body.name }).then((list) => res.send(list));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  const msg = `Api route not found: ${req.method} ${req.url}`;
  res.status(404).send({ msg });
});

export default router;
