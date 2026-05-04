# Bug Report 

## BUG-001 : le nom du produit affiché sur l'accueil ne correspond pas au produit en question
**Sévérité :** High

**Environnement :**
- Navigateur : Chrome 124
- OS : macOS
- URL : https://www.saucedemo.com

**Préconditions :** Le produit existe

**Étapes pour reproduire :**
1. Ouvrir l'URL
2. Saisir "problem_user" dans username
3. Saisir "secret_sauce" dans password
4. Cliquer sur Login
5. Cliquer sur le produit "Sauce Labs BackPack"

**Résultat obtenu :**
L'utilisateur est redirigé vers la page produit de l'article "Sauce Labs Fleece Jacket"

**Résultat attendu :**
L'utilisateur doit etre redirigé vers la page produit de l'article "Sauce Labs BackPack"

Preuve : [screenshot]

## BUG-002 : les images miniatures sont toutes les mêmes
**Sévérité :** low

**Environnement :**
- Navigateur : Chrome 124
- OS : macOS
- URL : https://www.saucedemo.com

**Préconditions :** Le produit existe

**Étapes pour reproduire :**
1. Ouvrir l'URL
2. Saisir "problem_user" dans username
3. Saisir "secret_sauce" dans password
4. Cliquer sur Login

**Résultat obtenu :**
Toutes les miniatures des articles sont identiques sur la page d'accueil

**Résultat attendu :**
L'utilisateur doit voir une image miniature de chaque article présent sur la page d'accueil

Preuve : [screenshot]