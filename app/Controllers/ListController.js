import { Modal } from "bootstrap"
import { ProxyState } from "../AppState"
import { listForm } from "../Componets/ListForm"
import { listsService } from "../Services/ListService"


function _drawList() {
    let template = ''
    ProxyState.lists.forEach(l => template += l.template)
    document.getElementById('list').innerHTML = template
}
function _drawListForm() {
    document.getElementById('modal-body-slot').innerHTML = listForm
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
            name: form.name.value,
            finishBy: form.finishBy.value
        }
        listsService.createList(newList)

        form.removeEventListener()
        bootstrap.Modal.getOrCreateInstance(document.getElementById('listModal')).toggle()
    }

    deleteList(listId) {
        listsService.deleteList(listId)
    }

    drawListForm() {
        _drawListForm()
    }
}