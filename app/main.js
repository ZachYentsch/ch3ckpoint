import { ListController } from "./Controllers/ListController.js";
// ListController

class App {
  ListController = new ListController();
}

window["app"] = new App();
