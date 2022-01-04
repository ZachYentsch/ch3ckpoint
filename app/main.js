import { ListController } from "./Controllers/ListController.js";
import { TasksController } from "./Controllers/TaskController.js";
import { loadState } from "./Utils/LocalStorage.js";
class App {
  listsController = new ListController();
  tasksController = new TasksController()
}

loadState()

window["app"] = new App();
