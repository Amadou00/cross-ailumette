class Joueurs{
    constructor(){
        this.tour = false
    }

    ChangerTour(){
        this.tour = !this.tour
    }

    AI_Tour(){
        // Faire un random pour les lignes et le nombre d'alumette à retirer + vérification
    }
}

module.exports = Joueurs