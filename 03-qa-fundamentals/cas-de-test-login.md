# Cas de test - Login

## TC-001 — Login avec identifiants valides

**Préconditions :**  
L'utilisateur Admin existe avec le mot de passe admin123

**Étapes :**
1. Ouvrir https://opensource-demo.orangehrmlive.com
2. Saisir "Admin" dans Username
3. Saisir "admin123" dans Password
4. Cliquer sur Login

**Résultat attendu :**
- Redirection vers le dashboard
- L'URL contient "/dashboard"


## TC-002 — Login avec mot de passe incorrect
**Préconditions :** 
L’utilisateur existe avec l’identifiant Admin

**Étapes :**
1. Ouvrir https://opensource-demo.orangehrmlive.com
2. Saisir "Admin" dans Username
3. Saisir "errorpassword" dans Password
4. Cliquer sur Login

**Résultat attendu :**
- Un message d'erreur s'affiche
- L'utilisateur reste sur la page de login
- L'URL ne change pas


## TC-003 — Login avec username vide
**Préconditions :** 
La page de login est accessible

**Étapes :**
1. Ouvrir https://opensource-demo.orangehrmlive.com
2. Laisser la case username vide
3. Saisir "admin123" dans Password
4. Cliquer sur Login

**Résultat attendu :**
- Un message d'erreur s'affiche
- L'utilisateur reste sur la page de login
- L'URL ne change pas


## TC-004 — Login avec les deux champs vides
**Préconditions :** 
La page de login est accessible

**Étapes :**
1. Ouvrir https://opensource-demo.orangehrmlive.com
2. Laisser la case username vide
3. Laisser la case password vide
4. Cliquer sur Login

**Résultat attendu :**
- Un message d'erreur s'affiche
- L'utilisateur reste sur la page de login
- L'URL ne change pas


## TC-005 — Login avec un username qui n'existe pas
**Préconditions :** 
La page de login est accessible

**Étapes :**
1. Ouvrir https://opensource-demo.orangehrmlive.com
2. Saisir "usernonexistant" dans Username
3. Saisir "admin123" dans Password
4. Cliquer sur Login

**Résultat attendu :**
- Un message d'erreur s'affiche
- L'utilisateur reste sur la page de login
- L'URL ne change pas