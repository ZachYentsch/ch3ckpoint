import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Tasks.js";

export function saveState() {
    localStorage.setItem('List', JSON.stringify({
        list: ProxyState.lists,
        task: ProxyState.tasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('list'))
    console.log('load state data', data);
    if (data != null) {
        ProxyState.lists = data.lists.map(l => new List(l))
        ProxyState.task = data.task.map(t => new Task(t))
        console.log('load state', ProxyState.tasks);
    }
}