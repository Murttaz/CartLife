# CartLife
Projet Ionic de développement d'un outil pour faciliter les courses.

Le projet est contitué de 3 pages: 
 - Accueil
 - Créer un liste
 - faire les courses

Accueil

Le rôle de Accueil est d'être la page de "connexion", en présentant
 l'application et en permettant la navigation vers les autres pages.


Créer une liste

Créer une liste, comme son nom l'indique, sera la page qui permet 
de créer une ou plusieurs listes de courses, à travers un service,
afin de créer une ou des listes qui seront récupérables sur la dernière page.

Dans son contenu on aura un encart avec un champ texte pour la saisie des éléments
qui doivent être ajoutés à la liste et à coté de celui-ci, un menu déroulant 
avec des quantités. en bout de ligne il y a un bouton qui valide
l'ajout de l'élément à la iste.

Pour un élément déjà existant apparaissent le nom de l'élément 
et sa quantité, et en bout de ligne un bouton permettant la 
supression de celui de la liste.

En bas des éléments précédement cités, il y a un bouton "+" qui permet
d'ajouter un ligne de champ de saisie pour ajouter un élément à la liste.

En bas 2 page il y aura deux boutons:
 - retour: il permet de retourner à l'accueil
 - soumettre : il enregistre la liste et la met comme disponible dans 
                shopping pour traiter les demandes qui y sont renseignées.
                une fois le bouton cliqué, cela envoie une notification
                aux utilisateurs pour dire qu'une liste a été mise à disposition.


Faire les courses

Faire les courses récupère les listes créées par créer un liste et les 
met à disposition de la personne qui est dans le magasin.
Cette page contient la liste qui a été précédement créée.
Sauf que cette fois, les éléments de la liste et leur quantité représente une 
entité, un ligne, au bout de laquelle il y a une checkbox
pour validation de l'acte d'achat. Lorsqu'on clique sur la checkbox, 
le texte se grise et se barre.
Une fois les actions d'achat faites, en bas de la liste, il y a 2 boutons:
"retour" qui permet de retourner à la page d'accueil, et "finir" qui 
supprime la liste. Finir ne marche que si tous les éléments de la liste
ont été validés. S'il en manque 1 ou plus, il fait émettre une vibration téléphone
et un message d'alerte apparait avec les éléments oubliés.


