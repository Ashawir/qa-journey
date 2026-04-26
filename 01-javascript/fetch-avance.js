async function appelAPI(url) {
    try {
        const reponse = await fetch(url)

        if (!reponse.ok) {
            console.log(`✗ Erreur HTTP : ${reponse.status}`)
            return null
        }

        const donnees = await reponse.json()
        return donnees

    } catch (erreur) {
        console.log("✗ Erreur réseau :", erreur.message)
        return null
    }
}


async function testerPlusieursUsers() {
    const ids = [1, 2, 3, 999]    

    let trouves = 0
    let introuvables = 0

    console.log("--- Rapport API ---")

    for (let i = 0; i < ids.length; i++) {

        const id = ids[i] 
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        const user = await appelAPI(url)

        if (user) {
           console.log(`✓${user.name} - ${user.email}`) 
           trouves++
        } else {
            console.log(`✗ utilisateur ${id} introuvable`)
            introuvables++
        }
    }
    console.log(`--- Total : ${ids.length} testés | ${trouves} trouvés | ${introuvables} introuvable(s) ---`)
}

testerPlusieursUsers()