class allumettes{
    constructor(){
        this.allumette = "|"
        this.lst_allu = ""
    }

    Ajout(nbAllu){
        let allumettes = ""
        let espace = 7 - nbAllu
        for (let i = 0; i < nbAllu; i++){
            allumettes += this.allumette
            this.lst_allu = allumettes
        }
        for (let y = 0; y < espace; y++){
            this.lst_allu += " "
            if(y == espace-1){
                this.lst_allu += "\n"
            }
        }
        return this.lst_allu
    }

    Retirer(nbAllu){
        if (nbAllu <= this.lst_allu.length){
                this.lst_allu = this.lst_allu.substring(0,this.lst_allu.length-nbAllu)
                for (let i = 0; i < nbAllu; i++){
                    this.lst_allu += " "
                }
        }
        return this.lst_allu
    }
}

const test = new allumettes().Ajout(5)
module.exports = allumettes