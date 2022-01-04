import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Tasks.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {

    constructor() {
        ProxyState.on('tasks', saveState)
    }

    createTask(newTask) {
        ProxyState.tasks = [new Task(newTask), ...ProxyState.tasks]
        console.log('tasks', ProxyState.tasks);
    }

    deleteTask(listId) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.listId !== listId)
    }
}

export const taskService = new TasksService()