import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class List {
  constructor(data) {
    this.name = data.name
    this.id = data.id || generateId()
    this.finishBy = data.finishBy
  }

  get Template() {
    return `
        <div class="col-md-3 text-light">
          <div class="rounded">
            <div class="row p-3 bg-primary">
              <div class="col-md-10 d-flex justify-content-around">
              <h3>${this.name}</h3>
              <h4>${this.finishBy}</h4>
              </div>
              <div class="col-md-2">
              <i class="mdi mdi-delete-circle-outline selectable" onclick="app.listController.deleteList('$this.id}')"></i>
              </div>
              <div class="col-12 text-center">
                <h5 class="mt-4">Steps: </h5>
                <ul class="mt-3">
                  ${this.Task}
                </ul>
                // <form onsubmit="app.taskController.createTask('${this.id}')">
                //   <div class="form-group d-flex">
                //     <input type="text" class="form-control" name="list" id="" placeholder="Text Here...">
                //     <button class="btn btn-light"></button>
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
    let foundTask = ProxyState.Tasks.filter(t => t.listId == this.id)
    foundTask.forEach(t => template += t.Template)
    return template
  }
}