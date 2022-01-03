import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";


class ListsService {

    constructor() {
        ProxyState.on('list', saveState)
    }

    createList(newList) {
        ProxyState.lists = [new List(newList), ...ProxyState.lists]
        console.log('list Proxy', ProxyState.lists)
    }

    deleteList(listId) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id !== listId)
        taskService.deleteTask(listId)
    }
}

export const listsService = new ListsService()