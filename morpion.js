let joueur = 0

function init() {
    if (joueur == 0 ) {
        document.getElementById("txt_joueur").innerHTML = "A joueur 1 de jouer !";
        joueur = 1
    } else if (joueur == 1) {
        document.getElementById("txt_joueur").innerHTML = "A joueur 2 de jouer !";
        joueur = 0
    }

    for (let i = 1; i < 10; i++) {
        document.getElementById("case" + i).innerHTML = "";
        document.onclick = "";
    }

} 



function Case(number) {
    let boutton = document.getElementById("case" + number);
  
    if (joueur === 0) {
      boutton.innerHTML = "X";
      joueur = 1;
    } else if (joueur === 1) {
      boutton.innerHTML = "O";
      joueur = 0;
    }
    boutton.onclick = null;
}
