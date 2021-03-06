# BESOINS FONCTIONNELS

Le site a un menu (navbar) avec des options de *navigation, simulation de login et changement de langue*.
Pour la navigation, le site utilise la librairie **router-link**, et la navigation est fait *sans post back*.
Pour la simulation de login et changement de langue la librairie **vuex** a été utilisé, pour garder de forme
global les variables.

Le changement de langue mentionné avant, implique la traduction des différentes libellés. Pour cela, le site utilise
un **mixin** que traduit les libellés en utilisant un *filtre*.
La langue par défaut du site est le *français*, cela peut être modifié dans la variable d'état 'language' dans la store de vuex.

La simulation de login, change l'affichage de l'Accueil entre du simple text lorem ipsum et l'affichage d'un profil.

Le site a aussi un page de *contact* avec un formulaire qui soumet rien, une *page à props* avec du text lorem ipsum 
et une page *projets* qui affiche une liste de projets.

A footer fait partie du projet aussi. Le footer utilise un directive pour afficher le copyright et la date.
Le nom est 'hardcodé'. Le footer contien aussi un lien vers la license du projet.

L'utilité global du site/projet, un fois finalisé et ameilloré, est de montrer à des récruteurs un porfolio d'un développeur web - frontend, 
dans le but ultime de trouver soit un stage, soit un emploi dans le domaine.


## Captures d'écran du projet

![Screenshot site web](https://i.imgur.com/6AeGHLv.jpg)

![Connecté en anglais](https://i.imgur.com/vAt0mh5.jpg)


## Arborecence du site web

![Arborescence](https://i.imgur.com/9XlpfAo.jpg)