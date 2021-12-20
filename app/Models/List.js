import { generateId } from "../Utils/generateId"


export class Todo {
    constructor(data) {
        this.name = data.name
        this.id = generateId()
        this.tasksid = data.tasksid
    }

    get Template() {
        return `
        <li>${this.name}</li>
        `
    }
}