// ===== LES 4 METHODES HTTP EN QA =====

const BASE_URL = "https://jsonplaceholder.typicode.com"

// ===== GET — Lire des données =====
async function testerGET() {
    console.log("--- Test GET ---")
    const reponse = await fetch(`${BASE_URL}/posts/1`)
    const donnees = await reponse.json()

    console.log(`Statut : ${reponse.status}`)
    console.log(`Titre : ${donnees.title}`)
    console.log(reponse.status === 200 ? "✓ GET réussi" : "✗ GET échoué")
}

// ===== POST — Créer des données =====
async function testerPOST() {
    console.log("--- Test POST ---")
    const reponse = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "Mon test QA",
            body: "Contenu du post",
            userId: 1
        })
    })
    const donnees = await reponse.json()

    console.log(`Statut : ${reponse.status}`)
    console.log(`ID créé : ${donnees.id}`)
    console.log(reponse.status === 201 ? "✓ POST réussi" : "✗ POST échoué")
}

// ===== PUT — Modifier des données =====
async function testerPUT() {
    console.log("--- Test PUT ---")
    const reponse = await fetch(`${BASE_URL}/posts/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "Titre modifié",
            body: "Contenu modifié",
            userId: 1
        })
    })
    const donnees = await reponse.json()

    console.log(`Statut : ${reponse.status}`)
    console.log(`Titre modifié : ${donnees.title}`)
    console.log(reponse.status === 200 ? "✓ PUT réussi" : "✗ PUT échoué")
}

// ===== DELETE — Supprimer des données =====
async function testerDELETE() {
    console.log("--- Test DELETE ---")
    const reponse = await fetch(`${BASE_URL}/posts/1`, {
        method: "DELETE"
    })

    console.log(`Statut : ${reponse.status}`)
    console.log(reponse.status === 200 ? "✓ DELETE réussi" : "✗ DELETE échoué")
}

// ===== LANCER TOUS LES TESTS =====
async function lancerTouts() {
    console.log("===== TESTS HTTP =====")
    await testerGET()
    await testerPOST()
    await testerPUT()
    await testerDELETE()
    console.log("===== FIN =====")
}

lancerTouts()