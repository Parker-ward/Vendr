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
        imgUrl: 'https://images.unsplash.com/photo-1563417994892-38ee47f9d1f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvdGVpbiUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      }),

      new Snack(
        {
          name: 'protein bar',
          price: 1.00,
          imgUrl: 'https://plus.unsplash.com/premium_photo-1664392029345-eba492b172d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvdGVpbiUyMGJhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
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
