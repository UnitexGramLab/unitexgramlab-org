---
title: "Pourquoi Unitex ?"

date:   06/30/2009

taxonomy:
    category: [blog, featured]
    tag: [histoire]
    
routes:
  default: '/why-unitex'
---

# Comment la création d'Unitex a-t-elle bénéficié à la communauté scientifique

Dès sa création en 2002, Unitex disposais des caractéristiques suivantes:

- Unitex est un [système open-source](#feature-1)
- Il fonctionne sur [Windows, Linux, Mac OS](#feature-2) et d'autres systèmes
- Unitex possède [une fonction de recherche innovante en matière de performances](#feature-3)
- Unitex a choisi [Unicode](#feature-4) pour le codage des caractères
- Il [adapte sa stratégie de découpage en tokens](#feature-5) en fonction de la langue du texte
- La création d'Unitex a été une incitation à [diffuser des dictionnaires avec la license LGPLLR](#feature-6)

## Unitex est un système open-source <a id="feature-1"></a>

La version initiale d'Unitex a été écrite en 2002 pour reproduire les fonctionalités d'Intex, qui n'était pas open-source.

Unitex est *disponible pour tous*. Par exemple, universités et entreprises peuvent le télécharger et l'utiliser gratuitement. Beaucoup de systèmes open-source ont été créés à partir de produits à distribution restreinte, en écrivant un nouveau code avec la même fonctionalité. C'est le cas de LibreOffice.org par rapport à Microsoft Office. Comme Francis Tyers le mentionne:

> If someone writes something that works the same as your software with their own code and their own hands, this should not be a problem. (...) There are many pieces of free software which have started out as "clones" of other pieces of non-free software, and have in time become better.

> Si quelqu'un écrit quelque chose qui fonctionne de la même manière que votre logiciel avec leur propre code et de leurs propres mains, ce ne devrait pas être un problème. (...) Il y a beaucoup de parties de logiciels libres qui ont commencé comme des «clones» d'autres parties de logiciels non-libres, et sont devenus meilleur avec le temps.

Les détenteurs de produits à distribution restreinte sont rarement en faveur d'un tel clonage, mais la loi ne leur permet pas d'interdire à des développeurs indépendants d'écrire du code.

Vous pouvez utiliser Unitex en préservant votre *indépendance* de ses auteurs. Si vous avez besoin de recompiler le système en raison de modifications techniques, vous pouvez le faire à partir du code source qui est distribué ouvertement (d'où le terme «open source»). Vous êtes protégé des caprices d'une personne ou d'une institution.

Les développeurs de logiciels peuvent améliorer et corriger Unitex. Voici quelques contribution à Unitex via le [dévelopmment collaboratif](http://en.wikipedia.org/wiki/Collaborative_software_development_model?target=_blank) depuis 2002. Le module PolyLex a été adapté pour le Russe par Sebastian Nagel, un développeur locuteur du russe. Grâce à Claude Devis, un développeur travaillant avec des textes en grec ancien, vous pouvez produire des concordances qui continnent des références à des parties d'un corpus. Un utilisateur d'odinateur 64-bits a rendu le code  d'Unitex compatible avec ce type de machine. Agata Savary, une spécialiste de la flexion multimots, a contribué au module Multiflex. Il ne serait pas raisonnable de demander à un seul promoteur de traiter tous les aspects d'un tel système complexe. Unitex peut être utilisé par d'autres systèmes ([Glossanet](http://glossa.fltr.ucl.ac.be?target=_blank), [EELO](http://label.ist.utl.pt/pt/eelo_intr_pt.php?target=_blank) et [SMELL](http://label.ist.utl.pt/pt/smell_intr_pt.php?target=_blank) utilisent Unitex), et Unitex utilise d'autres systèmes open-source existant indépendamment comme [TRE](http://freecode.com/projects/tre?target=_blank).

Les méthodes implémentées dans un système open-source sont *transparentes*, i.e. ouvertes à la connaissance de tous. Quiconque peut les commenter et concevoir des améliorations. Il n'y a pas de secret commercial à leur propos.

Le code d'Unitex est distributé avec la licence [LGPL](http://www.gnu.org/licenses/lgpl.html?target=_blank). Ceci permet aux utilisateurs d'inclure ce code dans des projets commerciaux, gratuitement, et facilite l'utilisation Unitex pour résoudre des problèmes du monde réel. 


## Unitex fonctionne sur Windows, Linux, MacOS et d'autres systèmes <a id="feature-2"></a>

Unitex fonctionne sur n'importe quel système qui peut compiler du language C++. En particulier il peut tourner sur [Linux](http://www.linux.org?target=_blank), c'est à dire *sans payer de license* pour un système d'exploitation. Le prix de cette license peut être un obstacle pour l'utilisation d'un tel système par  les universités, puisqu'il doit être multiplié par le nombre d'étudiants. Lorsque les programmes sont mis en œuvre pour Windows seulement, ils peuvent être exécutés sur Linux à l'aide d'un émulateur Windows, mais cela nécessite une licence Windows et empêche l'interaction avec d'autres programmes exécutés directement sur Linux.) Par example, le système [Glossanet](http://glossa.fltr.ucl.ac.be?target=_blank) fait tourner Unitex avec d'autres programmes directement sous Linux.

## La fonction de recherche d'Unitex était novatrice en ce qui concerne les performances <a id="feature-3"></a>

La fonction de recherche d'Unitex est issu du sytème Aglaé. La fonction de recherche d'Aglaé utilisait une représentation innovante des tokens qui est significativement plus rapide que des sytèmes comparables (Paumier, 2000, 2003). Ensuite, a fonction de recherche a été à nouveau optimisée par Alexis Némé. La fonction de recherche d'Unitex est très rapide, même avec de grands corpus et de grands dictionnaires, particulièrement lorsqu'il tourne sur  Linux. La recherche d'expressions décrites par une grammaire ayant 600 états et 3600 transitions dans un corpus de 12 millions de mots prend typiquement une minute.

```
Paumier, Sébastien. 2000. "Nouvelles méthodes pour la recherche d'expressions dans de grands corpus", In Anne Dister (éd.), Revue Informatique et Statistique dans les Sciences humaines 36, Actes des troisièmes journées INTEX, Liège, 2000, pp. 289-295.
```

```
Paumier, Sébastien. 2003. "A Time-Efficient Token Representation for Parsers", Proceedings of the EACL Workshop on Finite-State Methods in Natural Language Processing, Budapest, pp. 83-90. 
```

## Unitex a adopté le codage Unicode pour les caractères <a id="feature-4"></a>

Unitex peut traiter du chinois, du corréen, des textes  multilingues avec des caractères de  plusieurs alphabets, c.a.d.. alphabets latin et grec, sans avoir à coder un alphabet par rapport à l'autre. Des caractères typographiques spéciaux, comme '—', ne pose pas de problèmes particulier quand il leur arrive d'apparaitre dans un texte. 

## Il adapte la strategie de découpage en  tokens en fonction de la langue du texte <a id="feature-5"></a>

Les langues écrites sans délimiteurs de mots, comme le chinois, le japonais et le thaï, exigent des stratégies de tokenisation spécifiques par rapport à l'anglais. La tokenisation d'un texte consiste à le segmenter en unités élémentaires avant une analyse plus poussée, et ces unités élémentaires sont généralement des mots.

## La création d'Unitex a encouragé la production de dictionnaires avec licence LGPLLR<a id="feature-6"></a>

Après l'adoption de la licence LGPL, il semble que certains des dictionnaires électroniques nécessaires à l'exploitation d'Unitex soient également publiés gratuitement avec une licence d'utilisateur. Diverses institutions ont publié leurs lexiques avec la license [LGPLLR](../lgpllr). 
