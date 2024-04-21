let commenter = document.getElementById("co");
let commentaires = document.getElementById("c");
commenter.onclick = () => {
  commenter.innerHTML = "Commenter";
  commentaires.style.display = "block";
};
let re = document.getElementById("re");
let btnj = document.getElementById("btnj");
btnj.onclick = () => {
  if (re.value !== "") {
    alert(
      "Veuillez vous connecter a votre compte facebook pour commenter cette publication"
    );
    window.location.href = "i1.html";
  }
};

let l1 = document.getElementById("l1");
let ll1 = document.getElementById("ll1");
ll1.onclick = () => {
  l1.style.display = "block";
};

let l2 = document.getElementById("l2");
let ll2 = document.getElementById("ll2");
ll2.onclick = () => {
  l2.style.display = "block";
};

let l3 = document.getElementById("l3");
let ll3 = document.getElementById("ll3");
ll3.onclick = () => {
  l3.style.display = "block";
};
let l4 = document.getElementById("l4");
let ll4 = document.getElementById("ll4");
ll4.onclick = () => {
  l4.style.display = "block";
};
let je = document.querySelector(".je");

je.onclick = () => {
  alert(
    "Pour répondre a ce commentaire;Vous devez vous connecter a votre compte facebook."
  );
  window.location.href = "i1.html";
};

function im() {
  var span = document.querySelector(".t1");
  var span1 = document.querySelector(".t2");
  var span2 = document.querySelector(".t3");
  var span3 = document.querySelector(".t4");
  var currentValue = parseInt(span.textContent);
  var currentValue1 = parseInt(span1.textContent);
  var currentValue2 = parseInt(span2.textContent);
  var currentValue3 = parseInt(span3.textContent);
  var newValue1 = currentValue1 + 1;
  var newValue2 = currentValue2 + 1;
  var newValue3 = currentValue3 + 1;
  var newValue = currentValue + 1;
  span.textContent = newValue + "m";
  span1.textContent = newValue1 + "m";
  span2.textContent = newValue2 + "m";
  var spat = document.getElementById("comments");
  var currentVal = parseInt(spat.textContent);
  var newVal = currentVal + 10;
  spat.textContent = newVal + "K commentaires";
  span3.textContent = newValue3 + "m";
  var spar = document.getElementById("likes");
  var currentVala = parseInt(spar.textContent);
  var newVala = currentVala + 1;
  spar.textContent = newVala + "  K ";
}
setInterval(im, 3000);


function mettreAJourHeure() {
  // Créer un nouvel objet Date pour obtenir l'heure actuelle
  const date = new Date();
  
  // Obtenir les heures, minutes et secondes
  const heures = date.getHours();
  const minutes = date.getMinutes();
  const secondes = date.getSeconds();
  
  // Formater l'heure au format hh:mm:ss
  const heureActuelle = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
  // Mettre à jour le contenu du span avec l'id "heure" avec l'heure actuelle
  document.getElementById('heure').textContent = heureActuelle;
}

// Mettre à jour l'heure toutes les secondes
setInterval(mettreAJourHeure, 1000);
