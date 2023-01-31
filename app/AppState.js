import { Value } from "./Models/Value.js"
import { Snack } from "./Models/Vendr.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  snacks = [
    new Snack(
      {
        name: 'protein shake',
        price: 1.50,
        imgUrl: ''
      }),

      new Snack(
        {
          name: 'protein bar',
          price: 1.00,
          imgUrl: ''
        }
      )
    
  ]

  cash = 0
}

export const appState = new Proxy(new AppState(), {
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
