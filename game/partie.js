const readlineSync = require('readline-sync')

const Joueurs = require('./joueurs.js')
const Tableau = require('./tableau.js')

const tableau = new Tableau()
const Joueur = new Joueurs()
const AI = new Joueurs()

let tourJoueur = false
let allu = null
let line = null
//var pour IA
let tourAI = false
let randomTab = []
let ligneVide = false
let alluRestante = 0
let ligneOK = false

tableau.CreationTableau()
while (tableau.TableauVide() != 0){

    // Faire jouer le Joueur en premier, Appeler la fonction ChangeTour()
    tourJoueur = Joueur.ChangerTour()
    // Vérifier que Tour et true
    if (tourJoueur == true && tourAI == false){
        // Appeller la fonction Retirer() du tableau
        line = readlineSync.question("Line : ")
        line = parseInt(line, 10)
        if (line !== null){
            allu = readlineSync.question("Matches : ")
            allu = parseInt(allu, 10)
        }
        if (line !== null && allu !== null){
            tableau.Retirer(line, allu)
            // Appeller la fonction ChangeTour() de Joueur
            Joueur.ChangerTour()
            tourJoueur = false
            tableau.TableauVide()
        }
        if (tableau.TableauVide() == 0){
            console.log("\nYou lost, too bad..\n")
        }
    }
    
        // Faire Jouer l'IA
    tourAI = AI.ChangerTour()
    if (tourAI == true && tourJoueur == false){
        console.log("\nAI’s turn...")
        // Appeler la fonction AI_Tour() de Joueur
        randomTab = AI.AI_Tour()
        ligneVide = tableau.LigneVide(randomTab[0])[0]
        while (ligneVide[0]){
            randomTab[0] = AI.AI_Tour(randomTab[0])[0]
            ligneVide = tableau.LigneVide(randomTab[0])
        }
        alluRestante =  tableau.LigneVide(randomTab[0])[1]
        while (randomTab[1] > alluRestante){
            (randomTab)
            randomTab[1] = AI.AI_Tour(randomTab[1])[1]
        }
        console.log("AI removed "+ randomTab[0] +" match(es) from line "+ randomTab[1])
        tableau.Retirer(randomTab[0], randomTab[1])
        tourAI = false
        AI.ChangerTour()
        tableau.TableauVide()
        if (tableau.TableauVide() == 0){
            console.log("\nI lost.. snif.. but I’ll get you next time!!\n")
        }

    }
}