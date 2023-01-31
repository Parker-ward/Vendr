



export class Snack{

    constructor(data){

        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
        
    }

    get ListTemplate(){
        return `<div class="card">
            <img src="https://images.unsplash.com/photo-1563417994892-38ee47f9d1f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvdGVpbiUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Protein Shake">
            <div><p><b>Protein Shake</b></p></div>
            <div><span><b>Price $</b></span></div>
        </div>
        `
    }
}