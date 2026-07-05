function saluer() {
    let titre = prompt("Entrer votre titre : ")
    let nom = prompt('Enter votre nom : ')
    let prenom = prompt('enter votre prenom : ')
    alert("Salut "+titre+', '+nom+' '+prenom)
}
setTimeout(saluer(), 2000)
