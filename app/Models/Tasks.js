import { generateId } from "../Utils/generateId"


export class Task {
    constructor(data) {
        this.title = data.title
        this.id = data.id || generateId()
    }

    get Template() {
        return `
        
        `
    }
}