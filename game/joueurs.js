class Joueurs{
    constructor(){
        this.tour = false
    }

    ChangerTour(){
        this.tour = !this.tour
        return this.tour
    }

    AI_Allu(nbAlluDispo){
        let allumette = Math.floor(Math.random() * 10)
        while (allumette > nbAlluDispo){
            allumette = Math.floor(Math.random() * 10)
        }
        return allumette+1
    }

    AI_Lignes(lignes){
        let validation = false
        let rdmLigne = Math.floor(Math.random() * 10)
        while (validation != true){
            lignes.forEach(ligne => {
                if (ligne == rdmLigne){
                    validation = true
                }
            });
            if (validation != true){
                rdmLigne = Math.floor(Math.random() * 10)
            }
        }
        return rdmLigne
    }
}

module.exports = Joueurs