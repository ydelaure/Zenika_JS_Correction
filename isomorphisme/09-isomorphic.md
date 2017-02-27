## TP9 - React isomorphique

Dans cette partie, nous allons migrer notre application SPA vers une application isomorphique.

Les objectifs seront :
- D'utiliser les fonctionnalités de React pour effectuer un rendu côté serveur.
- D'adapter notre application côté client afin de la rendre complétement isomorphique.

### Rendu serveur

Afin de rendre notre application isomorphique, la première étape va consister à effectuer les rendu directement depuis notre serveur Node.JS.

Le serveur est basé sur le framework Express. Pour les besoins de cette formation, seul le fichier `server/app.js` sera à modifier. Nous allons devoir gérer trois routes :
- `/` : Permet de visualiser la liste des règles afficher à l'écran (accueil de l'application).
- `/edit` : Permet d'afficher le formulaire de création d'une règle.
- `/edit/:id` : Permet d'afficher le formulaire en mode modification.

Dans le fichier `server/app.js`, nous allons commencer par ajouter la gestion de ces routes. Voici un exemple de gestion d'une route avec le framework Express :

```javascript
var ReactRouter = require('react-router');
var ReactDOMserver = require('react-dom/server');
var routes = require('./routes');

app.get('/edit', function (req, res) {
    ReactRouter.match({ routes, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            res.status(200).render('index', {
                markup: ReactDOMserver.renderToString(<RoutingContext {...renderProps} />)
            });
        } else {
            res.status(404).send('Not found');
        }
    });
})
```

**Remarque :** Afin de ne pas dupliquer la configuration des routes, il est préférable d'exporter cette configuration dans un nouveau module (l'exemple précédent utilise d'ailleurs une configuration de routes présent dans le fichier `routes.js`).

Pour chaque route, nous allons ajouter le rendu des composants React :
- Pour chaque vue, récupérer les données à afficher à l'écran.
- Déclencher la réponse (appel à `res.render(...)`) une fois que les données sont récupérées.

Une fois que ces routes sont correctement gérées, vérifier que celle-ci sont bien rendues dans le navigateur.

### Rendu isomorphique

Afin de ne pas dupliquer la récupération des données (côté serveur et via un appel HTTP côté client), nous allons ajouter dans la réponse du serveur les données directement dans le code HTML :
- Ajouter dans le fichier HTML d'index les données récupérées :
  - Nous allons utiliser la solution à base du JavaScript "inline".
  - Affecter ces données à une variable globale (par exemple une variable nommée `ISO_BOILERPLATE`).
- Ajouter ces données dans le markup HTML.
- Gérer le fait que les données à afficher à l'écran peuvent être récupérées :
  - Soit directement du markup HTML.
  - Soit depuis un appel HTTP si celles-ci ne sont pas présentes.

Tester le bon fonctionnement de l'application.

<div class="pb"></div>
