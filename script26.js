function nvInscription() {
  let form = document.querySelector("#formInsc");
  form.style.display = "block";
}
let candidats = [];
let selectedlin = [];

function Sauvegarder() {
  // selection des elements en premier pour les valider et apres en les ajout en en tableau

  let code = document.querySelector("#code").value;
  let nom = document.querySelector("#nom").value;
  let prenom = document.querySelector("#prenom").value;
  let permis = document.querySelector("#permis").value;
  let tele = document.querySelector("#tele").value;

  //selection des erreurs

  let errCode = document.querySelector("#errCode");
  let errNom = document.querySelector("#errNom");
  let errPrenom = document.querySelector("#errPrenom");
  let errPermis = document.querySelector("#errPermis");
  let errTele = document.querySelector("#errTele");

  errCode.innerHTML = "";
  errNom.innerHTML = "";
  errPrenom.innerHTML = "";
  errPermis.innerHTML = "";
  errTele.innerHTML = "";
  let valide = true;
  let regexCode = /^[C][0-9]{3}$/;
  let regexTele = /^[0-9]{10}$/;
  let regexPermis = /^[ABCD]$/;
  if (!regexCode.test(code)) {
    errCode.innerHTML = "Code doit avoir en cette format ex : C001";
    valide = false;
  }
  if (!regexTele.test(tele)) {
    errTele.innerHTML = "Doit 10 chiffres ex: 061234567";
    valide = false;
  }
  if (!regexPermis.test(permis)) {
    errPermis.innerHTML = "ex A, B, C, D .....";
    valide = false;
  }

  if (valide == false) {
    return;
  }

  let c = {
    code: code,
    nom: nom,
    prenom: prenom,
    permis: permis,
    tele: tele,
  };

  candidats.push(c);
  afficher();
}
function afficher() {
  let table = document.querySelector("#tableIns");

  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for (c of candidats) {
    let trow = document.createElement("tr");
    trow.onclick = function () {
      trow.style.backgroundColor = "orange";
      selectedlin.push(trow);
    };

    let tdcode = document.createElement("td");
    tdcode.textContent = c.code;

    let tdnom = document.createElement("td");
    tdnom.textContent = c.nom;

    let tdprenom = document.createElement("td");
    tdprenom.textContent = c.prenom;

    let tdpermis = document.createElement("td");
    tdpermis.textContent = c.permis;

    let tdtele = document.createElement("td");
    tdtele.textContent = c.tele;

    trow.appendChild(tdcode);
    trow.appendChild(tdnom);
    trow.appendChild(tdprenom);
    trow.appendChild(tdpermis);
    trow.appendChild(tdtele);

    tbody.appendChild(trow);
  }
}

function annuler() {
  let form = document.getElementById("formInsc");
  form.style.display = "none";
}

function vider() {
  let inp = document.querySelectorAll("input");

  for (i of inp) {
    i.value = "";
  }
}

function supprimer() {
  let ok = confirm("voulez vous supprimer cette ligne");
  if (ok) {
    for (let l of selectedlin) {
      l.remove();
    }
    selectedlin = [];
  }
}

class Candidat {
  constructor(code, nom, prenom, permis, tele) {
    this.code = code;
    this.nom = nom;
    this.prenom = prenom;
    this.permis = permis;
    this.tele = tele;
  }
}

let c1 = new Candidat("C001", "Benali", "Fatima", "B", "0661112233");

let c2 = new Candidat("C002", "Rachidi", "Karim", "A", "0672223344");


let sessions = [
  {
    id: 1,
    session: "Examen Code de la Route",
    date: "12/04/2025",
    heure: "08:00",
  },
  {
    id: 2,
    session: "Examen Conduite Permis B",
    date: "14/04/2025",
    heure: "09:30",
  },
  {
    id: 3,
    session: "Examen Conduite Permis A",
    date: "16/04/2025",
    heure: "14:00",
  },
];

function afficherSess() {
    let liste = document.querySelector('#lisste')

    liste.innerHTML = '';
    for (let s of sessions) {
        let li = document.createElement('li')
        li.textContent = s.session + '-' + s.date
        liste.appendChild(li)
    }
}
