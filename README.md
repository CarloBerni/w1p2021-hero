# Le site dont vous êtes le héros

URL du site : https://glad-arena.netlify.com

### Groupe

- Carlo & BERNI
- Lucas & CUNAULT

### Rendu final

Cette grille va vous permettre de pré-évaluer votre travail. Pour chaque ligne, indiquez *Oui*, *Non* ou *En partie*. Plus placez la grille en haut de votre fichier README.md. La non-complétion de la grille entraînera des malus.

Notes :
- Il ne s'agit pas du barême final, mais d'une checklist vous permettant d'évaluer la conformité de votre travail par rapport au cahier des charges.
- Si une contrainte semble ne pas s'appliquer à votre situation, posez-nous la question !

### Grille d'auto-évaluation

| Type  | Objectif | Fait ? | 
| ----- | -------- | ------ |
| Setup | Le repository respecte la nomenclature `w1p2021-hero-amsellem-calou`, avec tous les noms des membres, et les membres sont cités dans le README.md | oui |
| Setup | Le site est en ligne, et l'URL est citée dans le README.md | oui |
| Setup | Le site utilise VueJS | oui |
| Setup | Cloner le repository et exécuter `npm install` puis `npm run dev` s'effectue sans encombre | oui |
| Données | Un schéma numérique ou papier (scanné ou photographié) décrivant les différentes étapes et enchaînements possible. Affiché dans ce readme (si plusieurs images sont nécessaires, en afficher plusieurs, mais essayer d'être synthétique). | oui |
| Données | Un fichier `data.json` est utilisé pour stocker la structure du jeu | oui |
| Données | Le fichier `data.json` décrit 30 phases de jeu ou plus. Indiquez *En partie* s'il en décrit plus de 15. | oui |
| Pages | Une page d'accueil est présente | oui |
| Pages | Une page de choix du personnage est présente | oui |
| Pages | Une page de victoire est présente | oui |
| Pages | Une page d'échec est présente | oui |
| Routing | Une route dont l'`id` varie permet d'afficher les différentes étapes du jeu | oui |
| Routing | Lorsqu'on recharge la page (`Ctrl + R`), on se trouve toujours à la même étape | oui |
| Transitions | Chaque page apparaît grâce à une transition fluide (la complexité de la transition n'est pas prise en compte ici) | oui |
| Transitions | Les transitions internes au jeu (d'une étape à une autre) et externes (intro, fin...) sont différentes | non |
| État | Le choix du personnage et/ou de ses caractéristiques impacte l'aventure au moins une fois. **Indiquez ici comment succintement.** | non |
| État | Une décision ou un événement aléatoire survenu pendant l'aventure a un impact sur la suite, au moins une fois. **Indiquez ici comment succintement.** | non |
| État | Le choix du personnage et/ou ce qu'il s'est passé pendant l'aventure impactent l'écran de fin. **Indiquez ici comment succintement.** | non |
| État | Au moins un service (classe de type `GameService`) est utilisé | non |
| Sauvegarde | Lorsqu'on recharge la page (`Ctrl + R`), le personnage, ses caractéristiques, les choix du joueur et tout le reste sont rétablis | non |
| Sauvegarde | Lorsqu'on quitte le jeu et qu'on revient plus tard à la page d'accueil (sur le même navigateur), il est possible de reprendre l'aventure où on l'avait laissée | non |
| Multimédia | L'expérience présente une vidéo ou plus | oui |
| Multimédia | L'expérience présente un audio ou plus | oui |
| Multimédia | L'utilisateur a la possibilité de couper le son à tout moment | non |
| Facultatif | Le repository contient un dossier /ressources contenant toutes les ressources ayant servi à la conception du jeu (schéma, design, figma...) | oui |


![maquette figma](https://cdn.discordapp.com/attachments/501488128041811979/580760943043280926/figma.jpg)



## Prologue

- Voici le cahier des charges que doit respecter **au minimum** le projet.
- Tout ce qui n'est pas précisé relève de vos choix personnels.

### Git

1. Forkez ce repository et renommez-le selon la nommenclature `w1p2021-hero-amsellem-calou`, en remplaçant les noms par les vôtres.
2. Utilisez [netlify](https://www.netlify.com/) ou le service de votre choix pour mettre votre projet en ligne.
3. Remplacez la fausse URL en haut de ce fichier par l'URL de votre projet.
4. Renseignez les membres de votre groupe en haut du fichier.

### Environnement technique

Le projet doit être construit avec le framework [VueJS](https://vuejs.org/).

### Lancer le projet

Se mettre dans un terminal dans le répertoire du projet forké, puis :

- `npm i`
- `npm run dev`

#### Plugins conseillés

- [Vue.js devtools pour Chrome, inspecteur vue](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Vue.js devtools pour Firefox, inspecteur vue](https://addons.mozilla.org/fr/firefox/addon/vue-js-devtools/)
- [Plugin vue pour VSCode, coloration syntaxique](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Plugin eslint pour VSCode, validation de code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Structure des données

Le projet doit contenir un fichier `data.json` contenant l'intégralité des données nécessaires à la génération du jeu.

#### Données de test

Avant d'écrire votre histoire, commencez par un jeu de données de test constitué ainsi :

| phase n° | titre             | action A                 | action B             | Fin ?    |
| -------- | ----------------- | ------------------------ | -------------------- | -------- |
| 1        | Bienvenue !       | avancer (-> vers 2)      |                      |
| 2        | Ou aller ?        | à gauche (-> vers 3)     | à droite (-> vers 4) |
| 3        | Chemin tranquille | avancer (-> vers 5)      |                      |
| 4        | Chemin dangereux  | revenir (-> vers 2)      | avancer (-> vers 6)  |
| 5        | Arrivée           | continuer (vers `/win`)  |                      | Victoire |
| 6        | Piège mortel      | continuer (vers `/lose`) |                      | Échec    |

- À vous de trouver comment représenter ces données sous forme d'un `json` exploitable par votre JavaScript.
- Par la suite, vous écrirez une histoire complète constituée d'au moins **30 phases**.
- Les chemins peuvent s'entremêler, et les victoires et les échecs peuvent être multiples.
- Chaque phase pourra offrir un ou plusieurs choix (sans se limiter à deux).
- Votre `json` s'enrichira de nouvelles informations pour chaque phase (texte(s), image(s)...).

## Semaine 1 : Routing & transitions

### Routes

Le projet doit contenir les pages suivantes :

| url          | description                 | paramètres                   | destination                      |
| ------------ | --------------------------- | ---------------------------- | -------------------------------- |
| `/`          | Page d'accueil              |                              | `/character`                     |
| `/character` | Page de choix du personnage |                              | `/game/1`                        |
| `/game/:id`  | Pages de l'aventure         | id : identifiant de la phase | `/game/:id` ou `/win` ou `/lose` |
| `/win`       | Page de victoire            |                              | `/`                              |
| `/lose`      | Page d'échec                |                              | `/`                              |

- Commencez par créer des pages constituées d'un simple texte de test. Elles se construiront par la suite.
- Lorsque l'utilisateur recharge le navigateur, la page courante doit être restaurée correctement. Si je suis sur `game/3` et que je rafraîchi, je suis toujours sur `game/3`.

#### La page /character

Vide pour l'instant, sa logique sera approfondie au cours des semaines suivantes.

#### La page /game/:id

- Chaque phase est un `object` identifié par un `id` dans le fichier `data.json`.
- Lorsque la page est affichée, elle doit charger la phase de jeu correspondante.
- Au début, affichez seulement l'`object` brut. Le contenu des pages sera mis en place plus tard.

### Transitions

- Le passage d'une page à l'autre doit être fluide pour l'utilisateur.
- Utilisez les transitions et les animations de votre choix pour parvenir à cet effet.
- Les transitions ne seront pas toutes identiques.

Voici un exemple de trame :

- _Loader_ <sub><sup>(3 secondes fixes pour l'instant, logique à implémenter par la suite)</sup></sub>
- _Transition d'ouverture_
  - Page d'accueil
- _Transition_
  - Page de sélection du personnage
- _Transition du hors-jeu vers le jeu_ <sub><sup>(ex: passage par un écran noir, comme un jeu vidéo - soyez inventifs !)</sup></sub>
  - Phase 1
- _Transition de phase_
  - Phase 2
- _Transition de phase_
  - Phase 3
- _Transition du jeu vers le hors-jeu_
  - Page de victoire ou d'échec

## Semaine 2 : Gestion d'états et sauvegarde

### Gestion d'états

Les décisions prises au cours du jeu doivent avoir des répercussions à d'autres moments de l'aventure. Notez que les exemples donnés sont très basiques et qu'ils ne doivent pas brider votre créativité !

#### 1. Impact du choix du personnage

Le choix du personnage doit impacter au moins une fois l'aventure.

##### Exemples

- J'ai le choix entre un scientifique et un politique. À certains moments, le scientifique dispose de textes supplémentaires pour lui permettre de prendre une décision éclairée. En revanche, les relations du politique lui donnent accès a des chemins qui lui sont exclusifs.
- Je dois répartir des points de force et d'agilité pour mon personnage. Les points de force influent sur la probabilité de se sortir d'un combat, tandis que les points d'agilité influent sur la probabilité de franchir un précipice sans encombre.

#### 2. Impact des décisions au cours du jeu

Les décisions ou événéments aléatoires au cours du jeu doivent impacter au moins une fois l'aventure.

##### Exemples

- J'ai décidé d'aider un vieil homme à traverser la montagne. Lorsque je le croise à nouveau par la suite, il me remet un précieux artefact.
- J'ai décidé de camper en fôret, malgré les 30% de chance d'être volé par des brigands pendant la nuit (événément aléatoire). Mon épée a été dérobée, ce qui m'empêchera de forcer une porte massive par la suite.

#### 3. Influences sur l'écran de fin

Les deux parties précédentes doivent influencer l'écran de fin (victoire ou défaite).

##### Exemples

- Sur l'écran de défaite est montré le triste sort du personnage que j'avais sélectionné au début.
- Sur l'écran de victoire se trouvent des statistiques sur mon parcours : nombre d'étapes parcourues comparé au nombre d'étapes minimum, argent récolté...

#### Comment faire ?

- Pour stocker et lire ces données n'étant ni liées à une route ni à un composant, vous utiliserez un ou plusieurs _services_.
- Un service est une simple classe JavaScript permettant de stocker et modifier des variables grâce aux méthodes qu'il expose.
- Par la suite, certains composants feront appel à certains services pour écrire ou lire des données. C'est ainsi qu'elles passent de route en route, et de composant en composant.
- Votre projet doit contenir au moins un service (exemple: `GameService`).
- Il vous est possible de découper le code en plusieurs services ayant chacun sa responsabilité (`CharacterService`, `DecisionsService`, `FightService`)...

### Sauvegarde et restauration

Le jeu doit sauvegarder en permanence la partie en cours sur le navigateur de l'utilisateur (pas de sauvegarde back-end). Cela inclut :

- L'étape actuelle
- Le personnage choisi et/ou ses caractéristiques
- Les décisions effectuées
- Tout ce qui est variable !

Autrement dit : la page doit pouvoir être rechargée à tout moment et se restaurer à l'identique.

#### Comment faire ?

- Votre code devra sauvegarder ces informations dans le [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage).
- Prenez garde à effectuer les sauvegardes dès que quelque chose change : vous ne savez jamais quand votre utilisateur va quitter la session.

## Semaine 3 : Multimédia & rendu final

### Multimédia : vidéo & audio

**Si le temps vous le permet**, il vous est possible de compléter l'aventure à 100% en ajoutant :

- Au moins une vidéo
- Au moins un audio (exemple : ambiance évolutive en fonction des étapes)

Ces éléments peuvent survenir à n'importe quel moment de l'aventure (introduction, au sein du jeu, à la fin). Vous veillerez à :

- Fournir des fichiers de taille raisonnable
  - Quelques Mo maximum pour les vidéos
  - Quelques centaines de Ko maximum pour les audios
- Permettre à l'utilisateur de couper le son à tout moment
- Pré-charger les ressources si nécessaire





