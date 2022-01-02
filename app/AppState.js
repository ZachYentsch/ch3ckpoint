import { List } from "./Models/List.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  lists = [
    new List({ name: 'Feed dog', finish: 'Tonight' }),
    new List({ name: 'House Sitting', finish: 'Friday' }),
    new List({ name: 'Grocery List', finish: 'Tomorrow' })
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
