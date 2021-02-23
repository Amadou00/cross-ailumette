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
        if (ligne > 0 && ligne <= 4 && nbAllu <= 7 && nbAllu > 0){
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
            this.Affichage()
            return true
        }
        else{
            if (ligne > 4 && ligne <= 0){
                console.log("\nError: this line is out of range")
            }
            console.log("\nError: this line is out of range")
            return false
        }
    }

    LigneRestante(){
        let tab = []
        let count = 0
        let pipeHere = false
        this.tableau.forEach(line => {
            count += 1
            for (let i = 0; i < 7; i++){
                if (line[i][0] == "|"){
                    pipeHere = true
                }
            }
            if (pipeHere){
                tab.push(count)
                pipeHere = false
            }
        });
        return tab
    }

    AllumettesRestante(ligne){
        let countAlu = 0
        for (let i = 0; i < 7; i++){
            if (this.tableau[ligne-1][i][0] == "|"){
                countAlu += 1
            }
        }
        console.log(countAlu)
        return countAlu
    }



    // LigneVide(index){
    //     let ligneVide = false
    //     let count = 0
    //     let tab = []
    //     for (let i = 0; i < 7; i++){
    //         if (this.tableau[index-1][i][0] == "|"){
    //             count += 1 
    //         }
    //     }
    //     if (count == 0){
    //         ligneVide = true
    //     }
    //     tab.push(ligneVide)
    //     tab.push(count)
    //     return tab
    // }

    TableauVide(){
        let count = 0
        this.tableau.forEach(tableau1 => {
            tableau1.forEach(tableau2 => {
                tableau2.forEach(element =>{
                    if (element == "|"){
                        count += 1
                    }
                })
            });
        });
        return count
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
        process.stdout.write("*********\n")
    }

}

module.exports = Tableau