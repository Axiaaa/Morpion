let joueur = 0
let joueur1_nom = "Joueur 1"
let joueur2_nom = "Joueur 2"
let statut_jeu = 0 /*
                    0 -> Non lancé
                    1 -> En cours
                    2 -> Egalité
                    3 -> Victoire/défaite
                        */

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
            fin_jeu()
                } 
            else if (joueur === 1) {
            boutton.innerHTML = "O";
            document.getElementById("txt_joueur").innerHTML = "A " + joueur2_nom + " de jouer !";
            joueur = 0;
            fin_jeu()
                }
        }
    }

    }
}


function fin_jeu() {
    const jeu = []
    for (let i = 1; i < 10; i++) {
        jeu.push(document.getElementById("case" + i).innerText)
    }

    console.log(jeu)
    egalite(jeu)
    
    if 
    (jeu[0] == "X" && jeu[1] == "X" && jeu[2] == "X") 
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur1_nom + " !" 
    } // première ligne X
    else if  (jeu[0] == "O" && jeu[1] == "O" && jeu[2] == "O")
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur2_nom + " !" 
    } // première ligne O 

    else if (jeu[3] == "X" && jeu[4] == "X" && jeu[5] == "X") 
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur1_nom + " !" 
    
    }    // deuxième ligne X
    else if  (jeu[3] == "O" && jeu[4] == "O" && jeu[5] == "O") 
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur2_nom + " !" 
    
    }    // deuxième ligne O 

    else if (jeu[6] == "X" && jeu[7] == "X" && jeu[8] == "X") 
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur1_nom + " !" 
    
    }     // troisième ligne X
    else if (jeu[6] == "O" && jeu[7] == "O" && jeu[8] == "O")
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur2_nom + " !" 
    
    }     // troisième ligne O
    else if (jeu[1] == "X" && jeu[4] == "X" && jeu[7] == "X") 
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur1_nom + " !" 
    
    }    // deuxième colonne X
    else if (jeu[1] == "O" && jeu[4] == "O" && jeu[7] == "O") 
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur2_nom + " !" 
    
    }    // deuxième colonne O 
    else if (jeu[0] == "X" && jeu[3] == "X" && jeu[6] == "X")
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur1_nom + " !" 
    
    }  // première colonne X
    else if (jeu[0] == "O" && jeu[3] == "O" && jeu[6] == "O") 
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur2_nom + " !" 
    
    }  // première colonne O 
    else if (jeu[2] == "X" && jeu[5] == "X" && jeu[8] == "X") 
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur1_nom + " !" 
    }    // troisième colonne X
    else if (jeu[2] == "O" && jeu[5] == "O" && jeu[8] == "O") 
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur2_nom + " !" 
    }    // troisième colonne O 
    else if (jeu[0] == "X" && jeu[4] == "X" && jeu[8] == "X")
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur1_nom + " !" 
    
    }    // diagonale haut-gauche à bas-droite X
    else if (jeu[0] == "O" && jeu[4] == "O" && jeu[8] == "O")
    {
        statut_jeu = 3;
        console.log(statut_jeu);
        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur2_nom + " !" 
    
    }    // diagonale haut-gauche à bas-droite O
    else if (jeu[2] == "X" && jeu[4] == "X" && jeu[6] == "X")
    {
        statut_jeu = 3;
        console.log(statut_jeu);

        document.getElementById("txt_joueur").innerHTML = "Victoire de " + joueur1_nom + " !" 
    }   // diagonale haut-droite à bas-gauche X
    else if (jeu[2] == "O" && jeu[4] == "O" && jeu[6] == "O")
    {
        statut_jeu = 3;
        console.log(statut_jeu);

        document.getElementById("txt_joueur").innerHTML = "Victoire de "  + joueur2_nom + " !" 
    }   // diagonale haut-droite à bas-gauche O

    if (statut_jeu === 3) {
        document.getElementById("bouton_jouer").innerHTML = "Recommencer"
    }

}


function egalite(jeu) {
    if (!jeu.includes('')) 
    {document.getElementById("txt_joueur").innerHTML = "Egalité";
    document.getElementById("bouton_jouer").innerHTML = "Recommencer";
    statut_jeu = 2;}
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