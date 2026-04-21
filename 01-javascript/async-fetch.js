// Practice 

async function testeUtilisateur() {
    console.log("Envoi de la requete...")

    const reponse = await fetch("https://jsonplaceholder.typicode.com/users/5")
    const donnees = await reponse.json()

    if (reponse.status === 200) {
        console.log("✓ Statut OK")
    } else {
        console.log("✗ Statut KO")
    }
    if (donnees.email.includes("@")) {
        console.log("✓ Email valide")
    } else {
        console.log("✗ Email invalide")
    }
}

testeUtilisateur()