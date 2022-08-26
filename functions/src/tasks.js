import dbConnect from "./dbConnect.js"

export async function getTasks(req, res) {
  //later add "by user id"
  const db = dbConnect()
  db.collections("tasks").get()
  const collection = await db
    .collection("tasks")
    .get()
    .catch((err) => res.status(500).send(err))
  const task = collection.docs.map((doc) => {
    let task = doc.data()
    task.id = doc.id
    return task
  })
  res.send("tasks")
}

export async function createTask(req, res) {
  const newTask = req.body
  if (!newTask || !newTask.task)
    res.status(400).send({ success: false, message: "Inavalid Request" })
  return;
}

const db = dbConnect()
await db
  .collection("task")
  .add(newTask)
  .catch((err) => res.status(500).send(err))
res.status(201);
getTasks(req, res); // sends back full list with new task...

export function updateTask(req, res) {
  const taskUpdated = req.body
  const { taskId } = req.params
  res.status(202).send("Task Updated")
}

export function deletedTask(req, res) {
  const { taskId } = req.params
  res.status(203).send("Task Deleted")
}
