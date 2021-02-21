class Joueurs{
    constructor(){
        this.tour = false
    }

    ChangerTour(){
        this.tour = !this.tour
        return this.tour
    }

    AI_Tour(){
        // Faire un random pour les lignes et le nombre d'alumette à retirer + vérification
        let ligne = 0
        let allu = 0
        let table = []
        while (ligne < 1 || ligne > 4){
            ligne = Math.floor(Math.random() * 10)
        }
        while (allu < 1 || allu > 7){
            allu = Math.floor(Math.random() * 10)
        }
        table.push(ligne)
        table.push(allu)
        return table
    }

    AI_Tour(nb_a_eviter){
        let ligne = 0
        let allu = 0
        let table = []
        while (ligne < 1 || ligne > 4 || ligne == nb_a_eviter){
            ligne = Math.floor(Math.random() * 10)
        }
        while (allu < 1 || allu > 7){
            allu = Math.floor(Math.random() * 10)
        }
        table.push(ligne)
        table.push(allu)
        return table
    }
}

module.exports = Joueurs