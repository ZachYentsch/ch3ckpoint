import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class List {
  constructor(data) {
    this.name = data.name
    this.id = data.id || generateId()
    this.color = data.color
  }

  get Template() {
    return `
        <div class="col-md-3 text-light m-3">
          <div class="rounded">
            <div class="row p-3" style="background:${this.color};">
              <div class="col-md-10 d-flex justify-content-around">
              <h3>${this.name}</h3>
              </div>
              <div class="col-md-2 d-flex">
              <i class="mdi mdi-delete-circle-outline selectable text-danger" onclick="app.listsController.deleteList('$this.id}')"></i>
              </div>
              <div class="col-12 mt-2">
                <h5>Steps: </h5>
                <ul>
                  ${this.Task}
                </ul>
                <form onsubmit="app.tasksController.createTask('${this.id}')">
                  <div class="form-group d-flex">
                    <input type="text" class="form-control" name="title" id="form-control" placeholder="Text Here...">
                    <button class="btn btn-light">+</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        `
  }
  get Task() {
    let template = ''
    let foundTasks = ProxyState.tasks.filter(t => t.listId == this.id)
    foundTasks.forEach(t => template += t.Template)
    return template
  }
}