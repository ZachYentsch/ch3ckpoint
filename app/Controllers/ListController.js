import { ProxyState } from "../AppState.js";
import { listForm } from "../Componets/ListForm.js";
import { listsService } from "../Services/ListService.js";
import { loadState } from "../Utils/LocalStorage.js";

// Modal
function _drawList() {
    let template = ''
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
}
function _drawListForm() {
    document.getElementById('modal-body-slot').innerHTML = listForm()
}

export class ListController {
    constructor() {
        ProxyState.on('lists', _drawList)
        ProxyState.on('tasks', _drawList)
        _drawList()
    }

    createList() {
        window.event.preventDefault()
        let form = window.event.target
        const newList = {
            name: form.name.value
        }
        console.log('new list', newList)
        listsService.createList(newList)

        form.reset()
        bootstrap.Modal.getOrCreateInstance(document.getElementById('listModal')).toggle()
    }

    deleteList(listId) {
        console.log('list id', listId)
        listsService.deleteList(listId)
    }

    drawListForm() {
        _drawListForm()
    }
}