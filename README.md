detect
======

Combinaison de 3 tests pour chargement conditionnel de ressources :
* largeur de fenêtre (innerWidth)
* densité de pixels (devicePixelRatio)
* et connectivité réseau (2G, edge, 3G, Wi-fi, etc.).

Le but étant de demeurer concis le plus simple possible à mettre en oeuvre, même si l'outil n'a pas vocation à être parfait.

Page de démo  : www.kiwi.gg/detect

Principe général
----------------

* Test de HTML5 [Navigation Timing API](https://developer.mozilla.org/en-US/docs/Navigation_timing), le code JS est fortement inspiré d'une conf de [Matt Andrews](http://mattandrews.info/talks/port80-2013/#/33).
* Test de Pixel-ratio en JavaScript
* Test de window.innerWidth en JavaScript

Si l'un des tests échoue, seules les petites images (celles qui contiennent "small" dans leur chemin) sont chargées, sinon, elles sont remplacées par les images contenant "big" dans leur chemin.

**NOTE :** il n'y a pas de détection de redimensionnement de fenêtre, il faudra rafraîchir la page pour observer les modifications.

**NOTE 2 :** ce script n'est certainement pas exempt de bugs ou d'imprécisions. Utilisez-le à vos risques et périls

Compatibilité (janvier 2014)
----------------------------

* OK sur bureau : IE9, Firefox 7, Chrome 6, Opera 15
* OK sur mobile : Android 4, IE10, Opera mobile 16, Blackberry 10, Chrome 31, Firefox 25
* PAS OK sur : Safari (bureau + mobile), Opera mini
* Tableau de support de Navigation Timing sur [Caniuse.com](http://caniuse.com/#feat=nav-timing)

Si le périphérique n'est pas compatible, seules les images de base ("small") sont chargées, donc tout demeure fonctionnel, même sans JavaScript.

Télécharger et exécuter le script
---------------------------------

Le script est en deux parties distinctes :

* une partie est à insérer dans le `<head>` du document : `detect-head.js` (ou minifié : `detect-head.min.js`)
* une partie est à insérer dans le corps de page, juste avant `</body>` :
    * `detect-body-with-notifications.js` (version avec bandeaux de notifications, pour tests en développement)
    * `detect-body-no-notifications.js` (version sans bandeaux)
    * `detect-body.min.js` (version minifiée sans bandeaux)
