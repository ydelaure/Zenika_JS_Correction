## TP 5 : Redux

Dans le cadre de ces exercices, le but sera de migrer notre application vers une architecture basée sur redux.

**Remarque** : Les librairies `redux`, `react-redux` et `redux-thunk` sont déjà en place dans le projet (voir le fichier `package.json`) et ont normalement déjà dûe être installées lors de l'exécution de la commande `npm install`.

### Implémentation des actions creators

Afin que notre store puisse réagir au déclenchement des actions, nous allons devoir les implémenter.

Nous allons implémenter les actions `DO_LIKE` et `DO_UNLIKE` :

- Dans un nouveau répertoire `actions`, créer le fichier `likes-actions.js`.
- Dans ce fichier, écrire une fonction `doLike`  :
  - Cette fonction prend en argument un identifiant de règle
  - Elle doit appeler le backend pour ajouter le like
  - Elle doit déclencher une action de type `DO_LIKE`,  contenant l'identifiant de la règle
- Ecrire une nouvelle fonction `doUnlike` :
  - Cette fonction prend en argument un identifiant de règle
  - Elle doit appeler le backend pour ajouter le dislike
  - Elle doit déclencher une action de type `DO_UNLIKE`,  contenant l'identifiant de la règle
- Ne pas oublier d'exporter les fonctions.


Enfin, nous allons mettre en place l'action `RULES_LOADED` :

- Dans le répertoire `actions`, créer le fichier `rules-actions.js`.
- Dans ce fichier, écrire une fonction `loadRules` dont le rôle sera :
  - De récupérer les règles à partir du backend
  - Elle doit déclencher une action de type `RULES_LOADED` et contenant les règles
- Ne pas oublier d'exporter la fonction.

**Remarque** : Comme il s'agit d' actions asynchrones, l'utilisation de `redux-thunk` est indispensable.

- Implémenter les tests unitaires pour ces actions.

### Mise en place du reducer

La première étape va être de créer un reducer pour gérer les règles :
- Dans le répertoire `js`, créer un répertoire `reducers` contenant un nouveau fichier `rules-reducer.js`.
- Dans ce fichier, créer une fonction :
  - Elle doit prendre en paramètre un state (initialisé par défaut à []) et une action. Le state contiendra l'ensemble des règles.
  - Les actions à gérer seront `RULES_LOADED`, `DO_LIKE` et `DO_UNLIKE` :
    - L'action `RULES_LOADED` permet de sauvegarder les règles.
    - L'action `DO_LIKE` incrémente la valeur `likes` sur la règle dont l'identifiant est passée en paramètre de l'action.
    - L'action `DO_UNLIKE` incrémente la valeur `dislikes` sur la règle dont l'identifiant est passée en paramètre de l'action.
  - Exporter le reducer
  - **/!\\** Attention à bien faire attention à ne pas muter le `state`
- Implémenter les tests unitaires pour ce reducer.

### Mise en place du store

- Dans le répertoire `js`, créer un répertoire `store` contenant un nouveau fichier `app-store.js`.
- Dans ce fichier, créer un store à partir du reducer `rules-reducer` et configurer le middleware `redux-thunk`
- Exporter le store

### Mise à jour des composants React

Nous allons maintenant mettre à jour nos composants React pour qu'ils utilisent l'architecture Redux :

- Créer un container pour le composant `RuleList` :
  - Fournir les règles et la fonction `loadRules` au composant `RuleList`
  - Déclencher l'action permettant le chargement des règles lors de la phase `componentDidMount` du composant `RuleList`.
- Créer un container pour le composant `LikeBtn` :
  - Fournir la règle à afficher et les fonctions `doLike` et `doUnlike` au composant `LikeBtn`
  - Déclencher les actions correspondantes lors du click sur le bouton.
- Fournir le store à toute l'application grâce au composant `Provider`
- Implémenter les tests unitaires associés à ces changements.
- **/!\\** Dans le state interne des composants, ne devra subsister que des logiques d'affichage

<div class="pb"></div>
