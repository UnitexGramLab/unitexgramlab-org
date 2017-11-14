---
title: "Comment contribuer à Unitex/GramLab"

date:   01/30/2017

taxonomy:
    category: [blog, featured]
    tag: [contribuer]
    author: 'Cristian Martinez'
    translator: 'Claude Martineau'

anchors:
    active: true
    selectors: '.autumn-post-content h1, .autumn-post-content h2'

routes:
  default: '/how-to-contribute'
---

> [Unitex/GramLab](/) est suite logicielle d'analyse de corpus open source, multiplateforme, multilingue, fondée sur des dictionnaires et des grammaires

===

Au sein du projet Unitex/GramLab la prise de décision est fondée sur un [processus méritocratique communautaire ](http://governance.unitexgramlab.org?target=_blank). Quiconque intéressé par Unitex/GramLab peut rejoindre la communauté, contribuer à la conception du projet et participer aux décisions.

# Unitex

Unitex est le  moteur C++ de traitement automatique des langues (TAL) d'Unitex/GramLab. Il est distribué selon les termes de la licence [GNU Lesser General Public License version 2.1](http://opensource.org/licenses/lgpl-2.1?target=_blank) (LGPLv2) et contient quelques dépendances à un code tierce (LibYAML, Pstdin, TRE, WinGetOpt) sous des licences plus permissives.

# GramLab

GramLab est l'environnement orienté projet de développement intégré (IDE) d'Unitex/GramLab. Il y a	également un  IDE classique (Unitex.jar) que nous sommes en train d'intégrer à GramLab. Ils sont distribués selon les termes de la licence  [GNU Lesser General Public License version 2.1](http://opensource.org/licenses/lgpl-2.1?target=_blank) (LGPLv2) et contient quelques dépendances à un code tierce (XAlign, Xerces2-j) sous des licences identiques ou plus permissives..

# Ressources Linguistiques

Les Ressources Linguistiques fournies avec Unitex/GramLab sont distribuées selon les termes de la licence [Lesser General Public License For Linguistic Resources](/lgpllr?target=_blank) (LGPLLR). Pour les auteurs de ces ressources et des informations supplémentaires, voir [ici](/language-resources?target=_blank).

# Documentation

Le manuel utilisateur (au format PDF) est disponible en Français et en Anglais (d'autres traductions sont les bienvenues). Vous pouvez les voir et les imprimer avec Evince, téléchargeable [ici](https://wiki.gnome.org/Apps/Evince/Downloads?target=_blank). La dernière version en ligne du manuel utilisateur est accessible [ici](http://releases.unitexgramlab.org/latest-stable/man?target=_blank).

# Aide

Les demandes d'aides peuvent être envoyer sur le [forum communautaire](http://forum.unitexgramlab.org?target=_blank). Vous pouvez nous joindre à tout moment en suivant [ce lien](https://unitexgramlab.typeform.com/to/nLE4sb). S'il vous plaît n'hésitez pas à soumettre des suggestions ou des demandes de nouvelles fonctionnalités. Vous trouverez des conseils généraux sur les questions de support technique [ici](http://www.catb.org/esr/faqs/smart-questions.html?target=_blank).

# Signaler des bogues

Voir le [Guide de Signalement de Bogue](/how-to-report-a-bug) sur la manière de signaler un bogue.

# Modèle de Gouvernance

Au sein du projet Unitex/GramLab, la prise de décision repose sur un processus méritocratique communautaire. Quiconque intéressé par Unitex/GramLab peut rejoindre la communauté, contribuer à la conception du projet et participer aux décisions. Le [Modèle de Gouvernance Unitex/GramLab](http://governance.unitexgramlab.org?target=_blank) décrit la façon dont cette participation se déroule et comment établir un mérite au sein de la communauté du projet.

# Orthographe

Unitex/GramLab s'écrit avec les lettres majuscules "U" "G" et "L", et toutes les autres lettres en minuscules. Excepté l'antislash, ne mettez pas d'espace ou un autre caractère entre les mots. Lorsque l'antislash n'est pas autorisé, écrivez simplement “UnitexGramLab”

Il est habituel de faire référence au noyau d'Unitex/GramLab comme "Unitex", et à l'IDE orienté Projet comme "GramLab". Si vous faites référence à la distribution (Noyau, IDE, Ressources Linguistiques et autres outils) utilisez toujours "Unitex/GramLab".

# Liens Utiles

- Site web principal: 	[http://unitexgramlab.org](http://unitexgramlab.org)
- Versions binaires: 	[http://releases.unitexgramlab.org](http://releases.unitexgramlab.org)
- Manuel utilisateur: 	[http://releases.unitexgramlab.org/latest-stable/man](http://releases.unitexgramlab.org/latest-stable/man)
- Signaler un bogue: [http://unitexgramlab.org/how-to-report-a-bug](http://unitexgramlab.org/how-to-report-a-bug)
- Forum utilisateurs: 	[http://forum.unitexgramlab.org](http://forum.unitexgramlab.org)
- Liste développeurs: 	[unitex-devel at univ-mlv.fr](mailto://unitex-devel@univ-mlv.fr)
- Hébergement du code: 	[http://code.unitexgramlab.org](http://code.unitexgramlab.org)
- Votre contribution: 	[Contribution rules](#)
- Gouvernance: 	[http://governance.unitexgramlab.org](http://governance.unitexgramlab.org)

# Comment commencer ?

Nous vous remercions de votre intérêt pour contribuer au développement d'Unitex/GramLab ! Vous pouvez commencer par télécharger une [version binaire](http://releases.unitexgramlab.org?target=_blank) et vous familiariser à Unitex/GramLab. Le manuel utilisateur est disponible [ici](http://unitexgramlab.org/releases/latest-stable/man/Unitex-GramLab-3.1-usermanual-fr.pdf?target=_blank).

Le code source d'Unitex/GramLab est hébergé sur [https://github.com/UnitexGramLab](https://github.com/UnitexGramLab?target=_blank). Un aperçu du code C++ du noyau (v3.0) est accessible [ici](http://www-igm.univ-mlv.fr/~unitex/docs/core_code.pdf?target=_blank). Pour une vue d'ensemble de l'IDE Java (v3.0), vous pouvez consulter [cette présentation](http://www-igm.univ-mlv.fr/~unitex/docs/ide_code.pdf?target=_blank). Il existe également des règles de contribution à observer [ici](#).

Pour commencer à installer le code, consultez les sources avec git:

## Noyau C++

```
git clone https://github.com/UnitexGramLab/unitex-core.git
```

Pour compiler sous linux utiliser par exemple:

```
cd build
make DEBUG=yes UNITEXTOOLLOGGERONLY=yes
```

## IDE GramLab en Java

```
git clone https://github.com/UnitexGramLab/gramlab-ide
```

Pour compiler utilisez:

```
ant
```

## Ressources Linguistiques

```
git clone https://github.com/UnitexGramLab/lingua
```

# Où commencer ?

Toutes les contributions sont les bienvenues. Si vous êtes un nouveau venu et que vous souhaitez contribuer au code d'  Unitex/GramLab, regardez  sur GitHub les demandes sous l'étiquette [`first-timers-only`](http://goo.gl/zfIsQZ?target=_blank).

