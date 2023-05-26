# Construisez une API sécurisée pour une application d'avis gastronomiques
### Piiquante - Hot Takes
_Projet 6 - Formation Développeu.r.se Web - octobre et novembre 2022 - Openclassrooms_

## Contexte
"Vous avez passé la dernière année en tant que développeur back-end indépendant et vous avez travaillé sur plusieurs projets de tailles et de difficultés variées.

La semaine dernière, vous avez reçu un message sur votre plateforme de freelance vous demandant de l'aide pour un nouveau projet. Les sauces piquantes sont de plus en plus populaires, en grande partie grâce à la série YouTube « Hot Ones » . C’est pourquoi ce nouveau client, la marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée « Hot Takes ».
Si la responsable produit de Piiquante souhaite à terme transformer l'application d'évaluation en une boutique en ligne, elle souhaite que la première version soit une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a été développé à l'aide d'Angular et a été précompilé après des tests internes, mais Piiquante a besoin d'un développeur back-end pour construire l'API.

Le délai est raisonnable, vous décidez donc d'accepter le projet. Après avoir rencontré Paula, la cheffe de produit de Piiquante, elle vous envoie l’email suivant :"

"Bonjour,

Nous sommes ravis que vous contribuiez à cette nouvelle application web ! Nous sommes une petite marque, donc ce projet aura un impact important sur notre croissance.

Vous trouverez ci-joint les spécifications pour l'API. Vous pouvez également trouver un lien vers le repo du projet ici où vous aurez accès à l'interface.

Merci de faire particulièrement attention aux exigences en matière de sécurité. Nous avons récemment été victimes d'attaques sur notre site web et nous voulons être sûrs que l'API de cette application est construite selon des pratiques de code sécurisées. Tous les mots de passe des utilisateurs recueillis par l'application doivent être protégés !

Cordialement,
Paula"

## Compétences évaluées
**\[validé]** Mettre en œuvre des opérations CRUD de manière sécurisée

**\[validé]** Implémenter un modèle logique de données conformément à la réglementation

**\[validé]** Stocker des données de manière sécurisée


## Soutenance
date de validation

_18 novembre 2022_

points forts:
>"1.Code source bien indenté et commenté.
>2.Bonne gestion de la sécurité.
>3.Bonne gestion du stockage par suppression d’image à la suppression de la sauce.
>4.Bonne vérification de l’authentification avant la modification et la suppression d’une sauce.
>5.Bonne gestion des conditions pour éviter les doublons de like et de dislike.
>6.Le projet contient une documentation technique pour guider sur le déploiement de l’application."

remarque: 
>"Soutenance bien faite. Présentation bien organisée. Félicitation !"

## Fonctionnement 
### Prérequis Back end
Vous aurez besoin de Node and `npm` installés sur votre machine localement.

### Installation du Back end
** Etape 1 **
Executer `npm install` dans un terminal
** Etape 2 **
Parametrer le fichier `.env.example` et le renomer `.env`
** Etape 3 **
Creer un dossier `images` à la racine de l'API
** Lancez le serveur **
Lancez le serveur de l'API avec `npm start`
