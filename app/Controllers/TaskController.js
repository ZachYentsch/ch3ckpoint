import { taskService } from "../Services/TaskService.js";

export class TasksController {
    constructor() {
        console.log('hello from Tasks');
    }

    createTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        const newTask = {
            title: form.title.value,
            listId: listId
        }
        taskService.createTask(newTask)
        console.log('list obj', newTask)
    }
}