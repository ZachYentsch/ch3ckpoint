import { generateId } from "../Utils/generateId"


export class List {
    constructor(data) {
        this.name = data.name
        this.id = data.id || generateId()
        this.finish = data.finish
    }

    get Template() {
        return `
        <div class="col-md-3 text-light">
          <div class="rounded">
            <div class="row p-3 bg-primary">
              <div class="col-12 d-flex justify-content-around">
                <h3>${this.name}</h3>
                <h4>${this.finish}</h4>
              </div>
              <div class="col-12 text-center">
                <h5 class="mt-4">Steps: </h5>
                <ul class="mt-3">
                  ${this.}
                </ul>
                <form onsubmit="app.taskController.createTask('${this.id}')">
                  <div class="form-group d-flex">
                    <input type="text" class="form-control" name="list" id="" placeholder="Text Here...">
                    <button class="btn btn-light"></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        `
    }
}