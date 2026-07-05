function nvInscription() {
  let form = document.querySelector("#formInsc");
  form.style.display = "block";
}
let candidats = [];

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

  if (!regexCode.test(code)) {
    errCode.innerHTML = "Code doit avoir en cette format ex : C001";
    valide = false;
  }
  if (!regexTele.test(tele)) {
    errTele.innerHTML = "Doit 10 chiffres ex: 061234567";
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
    afficher()
}
function afficher() {
  let table = document.querySelector("#tableIns");

  let tbody = document.getElementById("tbody");
  for (c of candidats) {
    let trow = document.createElement("tr");

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
