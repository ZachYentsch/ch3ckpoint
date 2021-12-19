import { generateId } from "../Utils/generateId"


export class Task {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.startTime = data.startTime
        this.endTime = data.endTime
    }

    get Template() {
        return `
        
        `
    }
}