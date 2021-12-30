import { ProxyState } from "../AppState";
import { List } from "../Models/List";

// List
// ProxyState
class ListsService {
    constructor() {
        ProxyState.on('list', saveState)
    }

    createList(newList) {
        ProxyState.lists = [new List(newList), ...ProxyState.lists]
    }

    deleteList(listId) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id !== listId)
        taskService.deleteTask(listId)
    }
}

export const listsService = new ListsService()