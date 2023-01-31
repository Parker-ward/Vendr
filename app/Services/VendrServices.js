import { appState } from "../AppState.js"


class VenderService{

    increaseCash(){
        appState.cash+=.25
        console.log("service increase",appState.cash);
    }
}


export const vendrService = new VenderService()