import { List } from "./Models/List.js"
import { Task } from "./Models/Tasks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  lists = [
    new List({ name: 'Feed dog' }),
    new List({ name: 'House Sitting' }),
    new List({ name: 'Grocery List' })
  ]

  tasks = [
    new Task({ title: '2 scoops dog food' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
