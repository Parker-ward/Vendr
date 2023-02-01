import { appState } from "../AppState.js";
import { vendrService } from "../Services/VendrServices.js";
import { setHTML } from "../Utils/Writer.js";


function _drawcash() {
    let cash = appState.cash
    let template = ''
        template += `<div class="card">Total Cash $${cash}</div>`
    setHTML('cash', template)

}

function _drawSnacks() {
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(snack => template += snack.ListTemplate)
        // console.log('this is the snack',template);
        setHTML('snacks', template)
    
}

export class VendrController{
constructor(){

    // NOTE draw functions always in constructor bc I want it to 'draw' as soon as the page loads
    _drawcash()
    _drawSnacks()
// console.log('hello from the vendr controller');
appState.on('cash', _drawcash)
}


increaseCash(){
// console.log('increase cash');
vendrService.increaseCash()
}

}
