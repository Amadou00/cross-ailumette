const Joueurs = require('./joueurs.js')
const Tableau = require('./tableau.js')

const tableau = new Tableau()
const Joueur = new Joueurs()
const AI = new Joueurs()

tableau.CreationTableau()
// Faire jouer le Joueur en premier, Appeler la fonction ChangeTour()
// Vérifier que Tour et true
// Appeller la fonction Retirer() du tableau
// Appeller la fonction ChangeTour() de Joueur
// Faire Jouer l'IA
// Appeler la fonction AI_Tour() de Joueur
// Appeler de nouveau la fonction ChangeTour()