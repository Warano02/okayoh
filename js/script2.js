let commenter = document.getElementById("co");
let co1 = document.getElementById("co1");
let c1 = document.getElementById("c1");
let commentaires = document.getElementById("c");
let co2 = document.getElementById("co2");
let c2 = document.getElementById("c2");
commenter.onclick = () => {
  commenter.innerHTML = "Commenter";
  commentaires.style.display = "block";
};
co1.onclick = () => {
  co1.innerHTML = "commenter";
  c1.style.display = "block";
};
co2.onclick = () => {
  co.innerHTML = "commenter";
  c2.style.display = "block";
};
cok.onclick = () => {
  cok.innerHTML = "Commenter";
  c3.style.display = "block";
};
let re = document.getElementById("re");
let er = document.getElementById("er");

let btnj = document.getElementById("btnj");
let username = document.getElementById("username");
let username1 = document.getElementById("username1");
btnj.onclick = () => {
  if (re.value !== "") {
    username.innerHTML = localStorage.getItem("username") + " (Vous)";
    username1.innerHTML = localStorage.getItem("username");
    er.textContent = re.value;
    document.getElementsByClassName("ok")[0].style.display = "block";
    re.value = "";
    // Event.preventDefault();
  }
};
let soudaysb = document.getElementById("soudaysb");
let soudaysn = document.getElementById("soudaysn");
let soudaysc = document.getElementById("soudaysc");
let soudaysr = document.getElementById("soudaysr");
soudaysb.onclick = () => {
  if (soudaysc.value !== "") {
    soudaysn.innerHTML = localStorage.getItem("username") + " (Vous)";
    soudaysr.textContent = soudaysc.value;
    document.getElementsByClassName("ook")[1].style.display = "block";
    soudaysc.value = "";
    // Event.preventDefault();
  }
};
erte.onclick = () => {
  if (gtyr2.value !== "") {
    xtre.innerHTML = localStorage.getItem("username") + " (Vous)";
    fret.textContent = gtyr2.value;
    document.getElementsByClassName("ook")[2].style.display = "block";
    gtyr2.value = "";
    // Event.preventDefault();
  }
};
fgtr.onclick = () => {
  if (terye.value !== "") {
    hfyu.innerHTML = localStorage.getItem("username") + " (Vous)";
    iosk.textContent = terye.value;
    document.getElementsByClassName("ook")[3].style.display = "block";
    terye.value = "";
    // Event.preventDefault();
  }
};
let l1 = document.getElementById("l1");
let ll1 = document.getElementById("ll1");
ll1.onclick = () => {
  l1.style.display = "block";
};
let l9 = document.getElementById("l9");
let ll9 = document.getElementById("ll9");
ll9.onclick = () => {
  l9.style.display = "block";
};
let l10 = document.getElementById("l10");
let ll10 = document.getElementById("ll10");
ll10.onclick = () => {
  l10.style.display = "block";
};
let l11 = document.getElementById("l11");
let ll11 = document.getElementById("ll11");
ll11.onclick = () => {
  l11.style.display = "block";
};
lgs88.onclick = () => {
  lgs8.style.display = "block";
};
let l12 = document.getElementById("l12");
let ll12 = document.getElementById("ll12");
ll12.onclick = () => {
  l12.style.display = "block";
};
let l13 = document.getElementById("l13");
let ll13 = document.getElementById("ll13");
ll13.onclick = () => {
  l13.style.display = "block";
};
let l8 = document.getElementById("l8");
let ll8 = document.getElementById("ll8");
ll8.onclick = () => {
  l8.style.display = "block";
};

let l2 = document.getElementById("l2");
let ll2 = document.getElementById("ll2");
ll2.onclick = () => {
  l2.style.display = "block";
};

let l3 = document.getElementById("l3");
let ll3 = document.getElementById("ll3");
ll3.onclick = () => {
  l13.style.display = "block";
};
let l4 = document.getElementById("l4");
let ll4 = document.getElementById("ll4");
ll4.onclick = () => {
  l4.style.display = "block";
};
let l14 = document.getElementById("l14");
let ll14 = document.getElementById("ll14");
ll14.onclick = () => {
  l14.style.display = "block";
};
lfgg.onclick = () => {
  lfg.style.display = "block";
};

io88.onclick = () => {
  io8.style.display = "block";
};

po800.onclick = () => {
  po80.style.display = "block";
};

tyuiee.onclick = () => {
  tyuie.style.display = "block";
};
l5133.onclick = () => {
  l513.style.display = "block";
};
lytu11.onclick = () => {
  lytu1.style.display = "block";
};
il122.onclick = () => {
  il12.style.display = "block";
};
kkpp.onclick = () => {
  kkp.style.display = "block";
};
fgtrttt.onclick = () => {
  fgtrtt.style.display = "block";
};
lgs99.onclick = () => {
  lgs9.style.display = "block";
};
juiff.onclick = () => {
  juif.style.display = "block";
};
dfrr.onclick = () => {
  dfr.style.display = "block";
};
bvgg.onclick = () => {
  bvg.style.display = "block";
};
let je = document.querySelector(".je");

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
  ncspp = parseInt(ncsp.textContent);
  ncsp.textContent = ncspp + 10 + " k Commentaires";
  npsp.textContent = parseInt(npsp.textContent) + 10 + "k partages";
  var newValue2 = currentValue2 + 1;
  var newValue3 = currentValue3 + 1;
  var newValue = currentValue + 1;
  je25l.textContent = parseInt(je25l.textContent) + 1 + "m";
  let nls = document.getElementById("likees");
  let nlsp = document.getElementById("likeees");
  let lp8 = parseInt(nlsp.textContent);
  let likebrianaa = parseInt(likebriana.textContent);
  let loide = likebrianaa + 700;
  likebriana.textContent = loide + "k";
  let mp8 = lp8 + 1;
  let partbriaa = parseInt(partbria.textContent);
  let tent = partbriaa + 70;
  partbria.textContent = tent + "k partages";
  let combriaa = parseInt(combria.textContent);
  let vfr = combriaa + 300;
  combria.textContent = vfr + "k Commentaires";
  nlsp.textContent = mp8 + "k";
  let nlscv = parseInt(nls.textContent);
  let nv = nlscv + 1;

  let ncs = document.getElementById("ncs");
  let nlncs = parseInt(ncs.textContent);
  let nncs = nlncs + 10;
  ncs.textContent = nncs + "K Commentaires";
  let nps = document.getElementById("nps");
  let npsv = parseInt(nps.textContent);
  let npsnv = npsv + 10;
  nps.textContent = npsnv + "K partages";
  nls.textContent = nv + "M ";
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
  likeazaa = parseInt(likeaza.textContent);
  ryui = likeazaa + 15;
  likeaza.textContent = ryui + "K ";
  comazaa = parseInt(comaza.textContent);
  kdldkd.textContent = parseInt(kdldkd.textContent) + 10;
  rty = comazaa + 2;
  comaza.textContent = rty + "K commeentaires";
  patazaa = parseInt(pataza.textContent);
  oipg = patazaa + 5;
  pataza.textContent = oipg + " K partages";
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
  const heureActuelle = `${heures.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  // Mettre à jour le contenu du span avec l'id "heure" avec l'heure actuelle
  document.getElementById("heure").textContent = heureActuelle;
}

// Mettre à jour l'heure toutes les secondes
setInterval(mettreAJourHeure, 1000);
let om = document.getElementById("om");
let menu = document.getElementById("menu");
let toyiboyi1 = document.getElementById("toyiboyi1");
let samuel = document.getElementById("loading");
let ange = 0;
let progress = document.getElementById("progress");
om.onclick = () => {
  samuel.style.display = "block";
  let intervale = setInterval(() => {
    if (ange < 101) {
      progress.style.width = ange++ + "%";
    } else {
      clearInterval(intervale);
      samuel.style.opacity = 0;
      menu.style.left = "1px";
      ange === 0;
    }
  }, 100);
};
toyiboyi1.onclick = () => {
  menu.style.left = "600px";
};
let msd = document.getElementById("msd");
let mds = document.getElementById("mds");
mds.onclick = () => {
  msd.style.right = "0";
  msd.style.background = "#000";
  document.getElementsByClassName("container")[0].style.background = "#000";
  document.getElementsByClassName("container")[0].style.color = "#fff";
  document.getElementsByClassName("text")[0].style.color = "#000";
  document.getElementsByClassName("text")[1].style.color = "#000";
  document.getElementsByClassName("text")[2].style.color = "#000";
  document.getElementsByClassName("text")[1].style.color = "#000";
  document.getElementsByClassName("text")[2].style.color = "#000";
  document.getElementsByClassName("text")[3].style.color = "#000";
  document.getElementsByClassName("text")[3].style.color = "#000";
  document.getElementsByClassName("text")[4].style.color = "#000";
  document.getElementsByClassName("text")[4].style.color = "#000";
  document.getElementsByClassName("text")[5].style.color = "#000";

  document.getElementById("menu").style.background = "#000";
  document.getElementById("toyiboyi1").style.color = "#fff";
  // document.getElementById('parametre').style.color='#000'
  document.getElementsByClassName("message")[0].style.background = "#000";
  document.getElementsByClassName("message")[1].style.background = "#000";
  document.getElementsByClassName("message")[0].style.color = "#fff";
  document.getElementsByClassName("message")[1].style.color = "#fff";
  hdr.style.background = "#4d4848";
};
// document.getElementById("sd1").onclck = () => {
//   document.getElementById("jki").style.display = "block";
// };
let sd1 = document.getElementById("sd1");
let jki = document.getElementById("jki");
sd1.onclick = () => {
  jki.style.display = "block";
};
let sd8 = document.getElementById("sd8");
let wxt = document.getElementsByClassName("wxt")[0];
sd8.onclick = () => {
  wxt.style.display = "block";
};
document.getElementById("foot").addEventListener("click", function () {
  window.location.href = "i1.html";
});
voirplus.onclick = () => {
  jukilo.style.left = "-100px";
};
