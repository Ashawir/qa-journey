// Fonctions Practice

function verifierUrl(URLreçue, URLattendue) {
    if (URLreçue === URLattendue) {
        console.log("URL correcte :", URLreçue)
    } else {
        console.log("URL incorrecte :", URLreçue, "/ URL incorrecte :", URLattendue)
    }
}

verifierUrl("https://app.com/dashboard", "https://app.com/dashboard")
verifierUrl("https://app.com/login", "https://app.com/dashboard")
verifierUrl("https://app.com/dashboard?token=123", "https://app.com/dashboard")


// Same thing with .startwith
function verifierUrl(URLreçue, URLattendue) {
    if (URLreçue.startsWith(URLattendue)) {
        console.log("URL correcte :", URLreçue)
    } else {
        console.log("URL incorrecte :", URLreçue, "/ URL incorrecte :", URLattendue)
    }
}