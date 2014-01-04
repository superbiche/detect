detect
======

Combinaison de 3 tests pour chargement conditionnel de ressources (largeur de fenêtre, densité de pixels et connectivité réseau)

Page de démo  : www.kiwi.gg/detect

Principe général
----------------

* Test de HTML5 Navigation Timing API, le code JS est fortement inspiré d'une conf de Matt Andrews.
* Test de Pixel-ratio en JavaScript
* Test de window.innerWidth en JavaScript

Si l'un des tests échoue, seule la petite image (300px) est chargée

NOTE : il n'y a pas de détection de redimensionnement de fenêtre, il faudra rafraîchir la page pour observer les modifications.

NOTE 2 : ce script n'est certainement pas exempt de bugs ou d'imprécisions. Utilisez-le à vos risques et périls

Compatibilité (janvier 2014)
----------------------------

* OK sur bureau : IE9, Firefox 7, Chrome 6, Opera 15
* OK sur mobile : Android 4, IE10, Opera mobile 16, Blackberry 10, Chrome 31, Firefox 25
* PAS OK sur : Safari (bureau + mobile), Opera mini
* Tableau de support de Navigation Timing sur Caniuse.com

Télécharger et exécuter le script
---------------------------------

Le script est en deux parties distinctes :

* une partie est à insérer dans le <head> du document : detect-head.js (ou minifié : detect-head.min.js)
* une partie est à insérer dans le corps de page, juste avant </body> :
** detect-body-with-notifications.js (version avec bandeaux de notifications)
** detect-body-no-notifications.js (version sans bandeaux)
** detect-body.min.js (version minifiée sans bandeaux)
