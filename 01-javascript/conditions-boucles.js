// Practice A

const statusCode = [200, 201, 400, 401, 500] 
statusCode.forEach(function(code) {
    if (code === 200 || code === 201) {
        console.log("Succes")
    } else if (code === 400 || code === 401) {
        console.log("Erreur Client")
    } else if (code === 500) {
        console.log("Erreur serveur")
    } else {
        console.log("? Inconnu")
    }
})


// Practice B

const emails = ["admin@app.com", "user@app.com", "invalidemail", "test@site"]
emails.forEach(function(email) {
    if (email.includes("@") && email.includes(".")) {
        console.log("Valid email", email)
    } else {
        console.log("Invalid email", email)
    }
})