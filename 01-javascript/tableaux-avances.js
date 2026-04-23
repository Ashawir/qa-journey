// Practice

const mesTests = [
    { nom: "test_login_admin", statut: "passed", duree: 1200 },
    { nom: "test_login_user", statut: "failed", duree: 3400 },
    { nom: "test_panier_vide", statut: "passed", duree: 800 },
    { nom: "test_panier_plein", statut: "failed", duree: 5600 },
    { nom: "test_paiement", statut: "passed", duree: 2100 }
]

const testsReussis = mesTests.filter(function(analyserResultats) {
    return analyserResultats.statut === "passed"
})

const testsEchoues = mesTests.filter(function(analyserResultats) {
    return analyserResultats.statut === "failed"
})

console.log("Total :", mesTests.length)
console.log("Tests réussis :", testsReussis.length)
console.log("Tests échoués :", testsEchoues.length)

testsEchoues.forEach(function(analyserResultats) {
    console.log("✗ Echec :", analyserResultats.nom, analyserResultats.duree / 1000, "s")
})

const durees = testsEchoues.map(function(analyserResultats) {
    return analyserResultats.duree
})

const dureeMax = Math.max(...durees)

testsEchoues.forEach(function(analyserResultats) {
    if (analyserResultats.duree === dureeMax) {
        console.log("⏱️ Test le plus lent :", analyserResultats.nom, "-", analyserResultats.duree / 1000, "s")
    }
})