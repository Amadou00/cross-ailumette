const { throws } = require('assert');
const process = require('process');

class Tableau{
    constructor(){
        this.tableau = []
    }

    CreationTableau(){
        this.tableau = [
            [[" "],[" "],[" "],["|"],[" "],[" "],[" "]],
            [[" "],[" "],["|"],["|"],["|"],[" "],[" "]],
            [[" "],["|"],["|"],["|"],["|"],["|"],[" "]],
            [["|"],["|"],["|"],["|"],["|"],["|"],["|"]]
        ]
        
    }

    Retirer(ligne, nbAllu){
        if (ligne <= 4 && nbAllu <= 7){
            let countAlu = 0
            for (let i = 0; i < 7; i++){
                if (this.tableau[ligne-1][i][0] == "|"){
                    countAlu += 1
                }
            }
            if (countAlu >= nbAllu){
                for (let y = 0; y < nbAllu; y++){
                    this.tableau[ligne-1][ligne+2-y][0] = " "
                }
            }
        }
        else{
            if (ligne > 4){
                console.log("\nError: this line is out of range")
            }
        }
    }
        
    Affichage(){
        process.stdout.write("*********\n")

        this.tableau.forEach(line => {
            let allumette = ""
            line.forEach(element => {
                allumette += element[0]
            });
            process.stdout.write('*' + allumette + '* \n')
        });
        process.stdout.write("*********")
    }

}

module.exports = Tableau