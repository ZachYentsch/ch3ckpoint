import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class List {
  constructor(data) {
    this.name = data.name
    this.id = data.id || generateId()
  }

  get Template() {
    return `
        <div class="col-md-3 text-light m-3">
          <div class="rounded">
            <div class="row p-3 bg-primary">
              <div class="col-md-10 d-flex justify-content-around">
              <h3>${this.name}</h3>
              </div>
              <div class="col-md-2 d-flex">
              <i class="mdi mdi-delete-circle-outline selectable" onclick="app.listController.deleteList('$this.id}')"></i>
              </div>
              <div class="col-12">
                <h5 class="mt-4">Steps: </h5>
                <ul class="mt-3">
                  ${this.Task}
                </ul>
                // <form onsubmit="app.taskController.createTask('${this.id}')">
                //   <div class="form-group d-flex">
                //     <input type="text" class="form-control" name="list" id="form-control" placeholder="Text Here...">
                //     <button class="btn btn-light">+</button>
                //   </div>
                // </form>
              </div>
            </div>
          </div>
        </div>
        `
  }
  get Tasks() {
    let template = ''
    let foundTasks = ProxyState.tasks.filter(t => t.listId == this.id)
    foundTasks.forEach(t => template += t.Template)
    return template
  }
}