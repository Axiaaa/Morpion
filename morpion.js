let joueur = 0
let joueur1_nom = "Joueur 1"
let joueur2_nom = "Joueur 2"
let statut_jeu = 0 /* 0 = Non lancé 
                      1 = En cours 
                      2 = Fini avec un gagnant
                      3 = Egalité*/

function init() {
    if (joueur == 0 ) {
        document.getElementById("txt_joueur").innerHTML = "A " + joueur1_nom + " de jouer !";
        joueur = 1
    } else if (joueur == 1) {
        document.getElementById("txt_joueur").innerHTML = "A " + joueur2_nom + " de jouer !";
        joueur = 0
    }

    for (let i = 1; i < 10; i++) {
        document.getElementById("case" + i).innerHTML = "";

    }

    statut_jeu = 1
} 



function Case(number) {
    let boutton = document.getElementById("case" + number);
    if (statut_jeu === 0) {
        null
    } else if (statut_jeu === 1) {
            
    if (boutton.innerText !== "X") {
        if (boutton.innerText !== "O") {
            if (joueur === 0) {
            boutton.innerHTML = "X";
            document.getElementById("txt_joueur").innerHTML = "A " + joueur1_nom + " de jouer !";
            joueur = 1;
                } 
            else if (joueur === 1) {
            boutton.innerHTML = "O";
            document.getElementById("txt_joueur").innerHTML = "A " + joueur2_nom + " de jouer !";
            joueur = 0;
                }
        }
    }
    
    // for (let i = 1; i < 9; i++) {
    //     while (document.getElementById("case" + i).innerText !== "") {}
    //      document.getElementById("bouton_jouer").innerText = "Recommencer"
    // }

    }
}


function fin_jeu() {


    
}

function player_name() {
    joueur1_nom = document.getElementById("j1").value;
    if (document.getElementById("j1").value === "") { 
        joueur1_nom = "Joueur 1"
    }
    console.log(document.getElementById("j1").value)

    joueur2_nom = document.getElementById("j2").value;
    if (document.getElementById("j2").value === "") { 
        joueur2_nom = "Joueur 2"
    }
    console.log(document.getElementById("j2").value)
  }
