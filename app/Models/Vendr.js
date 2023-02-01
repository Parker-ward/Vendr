



export class Snack{

    constructor(data){

        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
        
    }

    get ListTemplate(){
        return `
        <div class="col-md-3">
            <div class="card">
                <img src="${this.imgUrl}" alt="Protein Shake">
                <div><p><b>${this.name}</b></p></div>
                <div><span><b>$${this.price}</b></span></div>
            </div>
        </div>
        `
    }
}