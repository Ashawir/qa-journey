async function appelAPI(url) {
    try {
        const reponse = await fetch(url)

        if (!reponse.ok) {
            return null
        }

        const donnees = await reponse.json()
        return donnees

    } catch (erreur) {
        return null
    }

}

async function testerUtilisateurs() {

    const ids = [1, 2, 3, 4, 5]

    let valides = 0
    let invalides = 0

    console.log("===== RAPPORT DE TEST API =====")

    for (let i = 0; i < ids.length; i++) {

        const id = ids[i]
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        const user = await appelAPI(url)

        if (!user) {
            console.log(`❌ Utilisateur ${id} introuvable`)
            invalides++
            continue
        }

        if (!user.email.includes("@")) {
            console.log(`❌ ${user.name} - ${user.email} - INVALIDE`)
            invalides++
            continue
        }
        if (user.name === "") {
            console.log(`❌ - ${user.email} - INVALIDE`)
            invalides++
            continue
        }
        
        console.log(`✓ ${user.name} - ${user.email} - VALIDE`)
        valides++
    }

    console.log("===== RÉSUMÉ =====")

    console.log(`Total testés : ${ids.length}`)
    console.log(`Valides : ${valides}`)
    console.log(`Invalides : ${invalides}`)

    const taux = (valides / ids.length) * 100
    console.log(`Taux de succès : ${taux}%`)

    console.log("==============================")

}
testerUtilisateurs()