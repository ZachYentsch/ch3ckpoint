import { generateId } from "../Utils/generateId.js"


export class Task {
    constructor(data) {
        this.title = data.title
        this.id = generateId()
        this.listId = data.listId
    }

    get Template() {
        return `
        <li>${this.title}</li>
        `
    }
}