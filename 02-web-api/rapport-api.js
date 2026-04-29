const BASE_URL = "https://jsonplaceholder.typicode.com"

async function appelAPI(url, options = {}) {
  try {
    const reponse = await fetch(url, options)
    const donnees = await reponse.json().catch(() => null)

    return { status: reponse.status, data: donnees }
  } catch (erreur) {
    return { status: null, data: null }
  }
}

async function lancerRapport() {
  let succes = 0
  let echecs = 0

  console.log("===== RAPPORT API FINAL =====")

  // ===== TEST 1 — GET /users/3 =====
  const res1 = await appelAPI(`${BASE_URL}/users/3`)

  if (res1.status === 200 && res1.data.email.includes("@")) {
    console.log(`✓ GET /users/3 — 200 — email valide`)
    succes++
  } else {
    console.log(`✗ GET /users/3 — erreur`)
    echecs++
  }

  // ===== TEST 2 — POST /posts =====
  const res2 = await appelAPI(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Test QA",
      body: "Contenu",
      userId: 1
    })
  })

  if (res2.status === 201 && res2.data.id) {
    console.log(`✓ POST /posts — 201 — id : ${res2.data.id}`)
    succes++
  } else {
    console.log(`✗ POST /posts — erreur`)
    echecs++
  }

  // ===== TEST 3 — GET /users/999 =====
  const res3 = await appelAPI(`${BASE_URL}/users/999`)

  if (res3.status === 404) {
    console.log(`✓ GET /users/999 — 404 — erreur correctement détectée`)
    succes++
  } else {
    console.log(`✗ GET /users/999 — erreur`)
    echecs++
  }

  console.log(`===== 3 testés | ${succes} réussis | ${echecs} échoués =====`)
}

lancerRapport()