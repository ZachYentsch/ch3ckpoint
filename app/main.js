import { ListController } from "./Controllers/ListController.js";
import { loadState } from "./Utils/LocalStorage.js";

// ListController

class App {
  listsController = new ListController();
}

loadState()

window["app"] = new App();
