


export function getTasks(req, res) {
res.send ('Task');


}

export function createTask(req, res) {
    const newTask = req.body;
    res.status(201).send('Task Added');
}

export function updateTask(req, res) {
    const taskUpdated = req.body;
    const { taskId} = req.params;
    res.status(202).send('Task Updated')
}

export function deletedTask(req, res) {
    const {taskId} = req.params;
    res.status(203).send('Task Deleted')
}