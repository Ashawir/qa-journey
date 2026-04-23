const rapportFinal = [
    { nom: "test_login", statut: "passed", duree: 900, navigateur: "chromium" },
    { nom: "test_inscription", statut: "failed", duree: 4200, navigateur: "firefox" },
    { nom: "test_recherche", statut: "passed", duree: 1100, navigateur: "chromium" },
    { nom: "test_profil", statut: "failed", duree: 2800, navigateur: "safari" }
]

rapportFinal.forEach(function({ nom, statut, navigateur, duree }) {

    if (statut === "passed") {
        console.log(`✓ ${nom} | ${navigateur} | ${duree / 1000}s`)
    } else {
        console.log(`✗ ${nom} | ${navigateur} | ${duree / 1000}s`)
    }

})

console.log("--- Rapport final ---")

const testReussis = rapportFinal.filter(function(test) {
    return test.statut === "passed"
})

const testEchoues = rapportFinal.filter(function(test) {
    return test.statut === "failed"
})

console.log("Total :", rapportFinal.length, "| Réussis :", testReussis.length, "| Echoués :", testEchoues.length)
