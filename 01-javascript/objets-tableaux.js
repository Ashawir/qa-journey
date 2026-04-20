// Practice

const reponseOK = {
    statut: 200,
    message: "Utilisateur créé",
    id: 42
}

const reponseFail = {
    statut: 400,
    message: "",
    id: null
}

function verifierReponse(reponse) {
    if (reponse.statut === 200) {
        console.log("✓ Statut correct")
    } else {
        console.log("✗ Statut incorrect :", reponse.statut)
    }
    if (reponse.message === "") {
        console.log("✗ Message vide")
    } else {
        console.log("✓ Message :", reponse.message)
    }
}

verifierReponse(reponseOK)
verifierReponse(reponseFail)