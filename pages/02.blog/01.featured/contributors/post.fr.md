---
title: "Contributeurs à Unitex/GramLab"

date:   04/30/2009

taxonomy:
- category: [blog, featured]
- tag: [contributeurs]
- 
routes:
  default: '/contributeurs'
---

En plus des contributeurs aux [Ressources Linguistiques](/language-resources) de Unitex/GramLab,
principalement construites et maintenues par les membres du [Réseau RELEX](/relex-network),
des autres organisations ont contribué et continuent à travailler pour maintenir et améliorer
Unitex/GramLab.

# Ergonotics

Ergonotics a été l'acteur essentiel de l'effort d'adaptation d'Unitex 2.1 aux contraintes
liée à l'intégration dans un logiciel commercial. Tout ce travail n'aurait pas été possible
sans l'ouverture de l'IGM aux contributions extérieures, au choix de la licence LGPL et
à la collaboration de Sébastien Paumier.

Ainsi, la contribution d'Ergonotics à Unitex 2.1 version public (depuis avril 2009) a permis :

- Suppression des fuites mémoires
- Compatibilité multithread
- Très gros gain de vitesse
- Gain d'occupation mémoire
- Débogage
- Système de log et outils associés
- Paramétrage généralisé de l'encodage Unicode (UTF8/UTF16LE/UTF16BE)
- Mise en Librairie et regroupement dans UnitexTool
- Compatibilité Visual C++
- Création des outils Untokenizer (et DuplicateFile)
- Création de l'outil Fst2Check à partir du compilateur Grf2Fst2
- Compatibilité avec système de gestion de persistance des graphes et dictionnaire externe et allocateur de mémoire optimisé
- Gestion des lectures de gros fichiers par accès fichier en mémoire, avec code Posix et MS-Windows

Ergonotics a également proposé une librairie JNI permettant d'appeler aisément
les outils Unitex à partir d'application Java, qui est maintenant integrée dans
Unitex 3.0.

Enfin, Ergonotics propose un ensemble logiciel permettant d'enrichir encore la
souplesse et les performances d'Unitex 2.1, 3.0 et 3.1 beta.

Cela permet d'obtenir les performances d'exécutions maximales, et de protéger
votre propriété intellectuelle des ressources linguistiques lors de la distribution
d'un logiciel. Avec :

- Un gestionnaire de persistance de ressource et système de fichier virtuel optimisé, compatible multithread
- Un gestionnaire d'allocation mémoire spécifique et optimisé par opération
- Un format de fichier graphe binaire optimisé, offrant la possibilité de ne pas avoir sur disque les graphes en clair et de les crypter
- Un format binaire INP remplaçant le format INF pour les dictionnaires Unitex 2.1, immédiat à charger et ne demandant pas d'allocation mémoire (mais uniquement un fichier mappé en mémoire, ce qui est plus efficace, notamment sur iPhone)

Si vous souhaitez bénéficier du savoir faire d'Ergonotics pour mettre en marche votre
projet basé Unitex/GramLab. Vous pouvez les contacter à <a href="mailto:{{'info@winimage.com'|safe_email}}">
cette adresse</a>
