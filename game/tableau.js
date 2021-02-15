const allumettes = require('./allumettes.js')

class tableau{
    constructor(){
        this.tableau = []
    }

    CreationTableau(){
        const allumette = new allumettes()
        for (let i = 0; i < 9; i++){
            if (i%2 != 0){
                let tabL = []
                for (let y = 0; y < 1; y++){
                    tabL.push(allumette.Ajout(i))
                    this.tableau.push(tabL)
                    //console.log(tabL)
                }
            }
        }
        console.log(this.tableau + '\r');

        // for (let i = 0; i < 9; i++){

        // }
    }
}

const test = new tableau()
test.CreationTableau()