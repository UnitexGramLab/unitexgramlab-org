---
title: "Unitex/GramLab Student Project Proposals"

date: 02/05/2016

taxonomy:
    category: [blog, featured]
    tag: [gsoc]

anchors:
    active: true
    selectors: '.autumn-post-content h1'

markdown:
    extra: true

featherlight:
    active: true

routes:
  default: '/student-project-proposals'
---

> [Unitex/GramLab](http://unitexgramlab.org?target=_blank) est une suite logicielle libre, multiplateforme, multilingue, fondée sur des dictionnaires et des grammaires pour l'analyse de corpus. Les versions de Unitex/GramLab sont disponibles 
[ici](http://releases.unitexgramlab.org?target=_blank). Le code source est hébergé sur [GitHub](https://github.com/UnitexGramLab?target=_blank).

Cette page décrit plusieurs projets proposés aux étudiants pour s'initier au traitement automatique des langues (TAL), à la programmation et au développement de logiciels open source tout en travaillant simultanément sur l'amélioration de Unitex/GramLab. Toute personne est invitée à participer en tant que mentor ou à soumettre de nouveaux projets.

<section id="only-one" class="single-open-fisarmonica" data-fisarmonica-group>

  <section data-fisarmonica>
    <button data-control><i class="fa fa-1x fa-fw fa-info"></i>Découvrir Unitex/GramLab</button>
    <div data-content>
      <article markdown="1">
        <a href="how-to-contribute">Comment contribuer</a>
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button class="truncate" data-control><span class="ug-label">PRJ-01</span>Construire un module de comparaison d'annotations<span class="ug-label c1">Noyau</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java | YAML</span><span class="ug-label c3">Standoff</span><span class="ug-label c4">Priorité:3/5</span></button>
    <div data-content>
      <article>
      <p>Le but de ce module est de comparer deux ensembles d'annotations.</p>
      <ul>
        <li>Exporter les deux jeux d'annotations vers un format standoff personnalisé (C++ | YAML or CSV)</li>
        <li>Aligner et comparer efficacement les annotations (C++)</li>
        <li>Compter le nombre d'annotations qui sont : Correctes, Manquantes, des Faux positifs, Partiellement correctes (C++)</li>
        <li>Calculer quelques métriques sur les "matches": valueurs micro et macro de précision, de rappel et de F-mesure (C++)</li>
        <li>Intégrer le module dans l'IDE GramLab (Java)</li>
      </ul>
      <p><strong>Note</strong>: Il y a quelques années, un ancien étudiant a développé un script Perl intitulé <a href="http://www-igm.univ-mlv.fr/~unitex/src/SBDiffTool.tar.gz">SBDiffTool</a>, un outil de visualisation des différences de frontière de phrases pour Unitex. Peu de temps après, un autre étudiant a développé plusieurs scripts Perl (<a href="http://www-igm.univ-mlv.fr/~unitex/src/CiteDiff.tar.gz">CiteExtract, CiteDiff, CiteEval</a>) pour comparer des ensembles d'annotations, l'un produit par Unitex l'autre étiqueté manuellement par un humain. Ces scripts, développés pour une classe d'annotations très spécifiques, pourraient servir de point de départ pour créer un outil plus flexible et plus intégré.</p>
      <p><strong>Mentor</strong>: <a target="_blank" href="http://martinec.org">Cristian Martinez</a></p>
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label c5">PRJ-02</span>Intégrer l'IDE classique et l'IDE orienté projet<span class="ug-label c1">IDE</span><span class="ug-label c2">Java</span><span class="ug-label c3">GUI | Swing</span><span class="ug-label c4">Priorité:4/5</span></label></button>
    <div data-content>
      <article>
       <blockquote>
        Ce projet a été développé dans le cadre du programme GSoC'16 par <a target="_blank" href="https://github.com/Mukarr">Mukarram Tailor</a> de l'Institut de Technologie indien Mandi. Le rapport final est disponible <a target="_blank" href="https://drive.google.com/open?id=0B1uzOloZ6LTcbVFLXzFhbjRDWTQ">ici</a>.
        </blockquote>
    <p>
      Nous devons integrer les deux interfaces graphiques de développement de Unitex/GramLab: l'interface Classique (Unitex.jar) et celui orinté projet (GramLab.jar):
      <ul>
        <li>Classifier les fonctionnalités en fonction de leur accessibilité dans chacun des IDE</li>
        <li>Identifier et supprimer les dépendances inutiles de GramLab.jar vis à vis d'Unitex.jar</li>
        <li>Identifier et supprimer les différences entre les deux IDE</li>
        <li>Séparer le code selon qu'il est appelé par GramLab.jar ou par Unitex.jar only</li>
        <li>Créez un assistant de bienvenue pour permettre aux utilisateurs de configurer un nouveau projet et de sélectionner le point de vue (les actions visibles et les vues dans une fenêtre) qu'ils souhaitent utiliser: classique ou orienté projet</li>
      </ul>
      <h2>IDE Classique (Unitex.jar)</h2>
      <p class="center"><img class="image half" src="/user/pages/02.blog/01.featured/student-project-proposals/unitex_screenshot.png"></p>
      <h2>IDE Orienté Projet (GramLab.jar)</h2>
      <p><img class="image half" src="/user/pages/02.blog/01.featured/student-project-proposals/gramlab_screenshot.png"></p>
      <p><strong>Mentor</strong>: <a href="http://martinec.org">Cristian Martinez</a></p>   
      </article>
    </div>
  </section>


  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-03</span>Améliorer MultiFlex: un module de flexion automatique des unités multi-mots<span class="ug-label c1">Noyau</span><span class="ug-label c2">C++</span><span class="ug-label c3">MWUs</span><span class="ug-label c4">Priorité:2/5</span></button>
    <div data-content>
      <article markdown="1">

[MultiFlex](http://www.info.univ-tours.fr/~savary/English/softwareASgb.html?target=_blank) est un module multilingue compatible Unicode pour la flexion automatique des unités multi-mots (MWU). Il s'agit notamment de la création de dictionnaires morphologiques de MWU. Il met en œuvre un formalisme fondé sur l'unification pour la description du comportement flexionnel des MWU ce qui suppose l'existence d'un module pour la morphologie flexionnel des mots simples. Au cours des dernières années, MultiFlex a évolué indépendamment d'Unitex. L'objectif de ce projet est d'améliorer son implementation dans Unitex en intégrant ces volutions successives.

- Mentor: [Agata Savary](http://www.info.univ-tours.fr/~savary/?target=_blank)

      </article>
    </div>
  </section>


  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-04</span>Créer un gestionnaire de packages pour les ressources linguistiques<span class="ug-label c1">Noyau</span><span class="ug-label c2">C++ | JSON</span><span class="ug-label c3">UPM</span><span class="ug-label c4">Priorité:3/5</span></button>
    <div data-content>
      <article>
        <p>Un gestionnaire de packages est un outil qui facilite l'installation, la mise à niveau, la désinstallation, la configuration et la gestion des packages. Les gestionnaires de packages populaires à niveau d'application sont:</p>
        <ul>
          <li><a target="_blank" href="https://github.com/atom/apm">APM</a> for Atom</li>
          <li><a target="_blank" href="http://leiningen.org">Leiningen</a> for Clojure</li>
          <li><a target="_blank" href="https://www.npmjs.com">NPM</a> for Node</li>
          <li><a target="_blank" href="www.cpan.org">CPAN</a> for Perl</li>
          <li><a target="_blank" href="https://getcomposer.org">Composer</a> for PHP</li>
          <li><a target="_blank" href="https://wiki.python.org/moin/EasyInstall">Easy_install</a> for Python</li>
          <li><a target="_blank" href="https://rubygems.org">Gems</a> for Ruby</li>
          <li><a target="_blank" href="http://bower.io/">Bower</a> for the web</li>
          <li><a target="_blank" href="https://en.wikipedia.org/wiki/List_of_software_package_management_systems#Application-level_package_managers">More here</a></li>
        </ul>
        <p>Nous souhaitons fournir à Unitex un gestionnaire de packages pour les ressources linguistiques, c'est-à-dire un outil pour installer, mettre à niveau et désinstaller des dictionnaires, des grammaires ou un groupe de <a target="_blank" href="http://unitexgramlab.org/releases/latest-stable/lingua/">Ressources liées à une langue</a></p>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://martinec.org">Cristian Martinez</a></p>
      </article>
    </div>
  </section>


  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-05</span>Concevoir une fonctionnalité Import/Export entre Unitex et GATE<span class="ug-label c1">Noyau</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java | XML</span><span class="ug-label c3">GATE</span><span class="ug-label c4">Priorité:3/5</span></button>
    <div data-content>
      <article>
        <p><a target="_blank" href="https://gate.ac.uk">GATE</a> est une infrastructure open source pour le développement et le déploiement de composants logiciels qui traitent le langage naturel. Pour ce projet, nous cherchons à étendre Unitex/GramLab pour inclure les fonctions suivantes :</p>
        <ul>
        <li>Une fonction qui exporte le corpus vers GATE avec la délimitation des phrases et des tokens</li>
        <li>Une fonction qui exporte le corpus annoté XML vers GATE</li>
        <li>Une fonction qui importe le corpus GATE vers Unitex/GramLab</li>
        <li>Une boîte de dialogue Unitex qui prépare l'apprentissage supervisé avec le module externe d'apprentissage de GATE</li>
        </ul>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://www.univ-tours.fr/m-gupta-anubhav-452216.kjsp">Anubhav Gupta</a></p>
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-06</span>Support de la fonction "Locate" sur les treebanks<span class="ug-label c1">Noyau</span><span class="ug-label c2">C++</span><span class="ug-label c3">FSA</span><span class="ug-label c4">Priorité:3/5</span></label></button>
    <div data-content>
      <article>
        <p>Le programme Locate applique une grammaire à un texte et construit un index des occurrences trouvées. Nous souhaitons adapter Locate sur les treebanks</p>
          <ul>
          <li>Un module qui représente un treebank sous la forme d'un automate acyclique (Chaque nœud interne d'un arbre est représenté par une transition qui contourne la séquence dominée par le noeud)</li>
          <li>Une variante du module de recherche qui fonctionne sur des treebanks représentés de cette façon</li>
          </ul>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~mconstan/">Matthieu Constant</a></p>
        <p><strong>Co-mentor</strong>: <a href="https://github.com/patwat">Patrick Watrin</a></p>       
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label c5">PRJ-07</span>Intégrez une visualisation nuage arboré dans l'IDE Unitex/GramLab<span class="ug-label c1">IDE</span><span class="ug-label c2">Java</span><span class="ug-label c3">TreeCloud</span><span class="ug-label c4">Priorité:3/5</span></label></button>
    <div data-content>
      <article>
        <blockquote>
        Ce projet est développé dans le cadre du programme GSoC'16 par <a target="_blank" href="https://github.com/aleksandrachasch">Aleksandra Chashchina</a> de la National Research University Higher School of Economics, de Moscou. Le rapport final est disponible <a target="_blank" href="https://drive.google.com/drive/folders/0B1uzOloZ6LTcVDY3bjBLbXExYmc">ici</a>.
        </blockquote>
        <p>TreeCloud est un outil de visualisation de logiciel gratuit qui affiche les mots les plus fréquents d'un texte en tant que nuage arboré. Un nuage arboré est une extension d'un <a href="https://en.wikipedia.org/wiki/Tag_cloud">tag cloud</a>, dans lequel les mots sont situés autour d'un arbre représentant la proximité à laquelle ils apparaissent dans le texte, et où des attributs comme la taille et la couleur sont utilisés pour refléter la fréquence du mot.</p>
        <figure>
        <img class="centered" src="http://www-igm.univ-mlv.fr/~unitex/img/treecloud.png" alt="TreeCloud of the Unitex User's Manual">
        <figcaption class="align-center">Nuage arboré du Manuel utilisateur en anglais</figcaption>
        </figure>
        <p>Le but de ce projet est d'intégrer une visualisation des nuages arborés pour les occurrences présentées dans la fenêtre de concordance de l'ID Unitex/GramLab (voir le Manuel utilisateur p.89).  Le projet consistera principalement à:</p>
        <ul>
        <li>Comprendre le module Concord d'Unitex et les fichiers de concordance produits par Unitex.</li>
        <li>Porter de Python (TreeCloud) à Java (Unitex/GramLab IDE) les fonctions pour calculer la distance de co-occurrence entre les paires de mots.</li>
        <li>Intégrer ou ré-implémenter en Java un algorithme de reconstruction d'arborescence à partir des distances de co-occurrence entre des paires de mots;
        -Intégrer ou ré-implémenter en Java un algorithme de visualisation d'arbre;</li>
        <li>Améliorer la visualisation de l'arbre pour permettre aux utilisateurs de revenir facilement au texte source et de visualiser le contexte d'occurrence d'un mot spécifique.</li>
        </ul>
        <p><strong>Liens utiles</strong></p>
        <ul>
        <li>Gambette, P., &amp; Véronis, J. (2010). <em>Visualising a text with a tree cloud. In Classification as a Tool for Research</em> (pp. 561-569). Springer Berlin Heidelberg (<a target="_blank" href="https://hal.archives-ouvertes.fr/lirmm-00373643v2/en/">https://hal.archives-ouvertes.fr/lirmm-00373643v2/en/</a>).</li>
        <li>Site web de TreeCloud: <a target="_blank"  href="http://www.treecloud.org">http://www.treecloud.org</a></li>
        <li>Code source de TreeCloud: <a target="_blank"  href="https://github.com/PhilippeGambette/treecloud">https://github.com/PhilippeGambette/treecloud</a></li>
        <li>Tracer des arbres phylogénétiques: <a target="_blank" href="http://adamzy.github.io/PhyloPlot/">http://adamzy.github.io/PhyloPlot/</a></li>
        </ul>
        <p><strong>Mentor</strong>: <a href="http://igm.univ-mlv.fr/~gambette">Philippe Gambette</a></p> 
        <p><strong>Mentor</strong>: <a href="http://martinec.org">Cristian Martinez</a></p> 
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-08</span>Intégration des IDE: Plugins pour l'IDE Unitex/GramLab<span class="ug-label c1">IDE</span><span class="ug-label c2">Java</span><span class="ug-label c3">Plugins</span><span class="ug-label c4">Priorité:4/5</span></label></button>
    <div data-content>
      <article markdown="1">
Unitex/GramLab comprend deux IDE Java, l'IDE classique (`Unitex.jar`) et l'IDE orienté projet (`Gramlab.jar`).
Au cours de la GSoC'16, un étudiant (voir <small><span class="ug-label c5">PRJ-02</span></small> au-dessus) nous a aidé à déployer une architecture basée sur les plugins pour intégrer les deux IDE dans un nouveau qui présente les deux perspectives: Classique et orienté projet. Son rapport final est disponible [ici](https://goo.gl/G6oaVM?target=_blank)

Les plugins sont construits avec [PF4J](https://github.com/decebals/pf4j?target=_blank), un sytème léger de plugins  open-source pour Java, avec des dépendances minimales et facilement extensibles. Les plugins sont distribués dans les fichiers ZIP avec toutes les dépendances d'exécution regroupées, et peuvent être installés sans difficulté en les copiant dans le dossier `App/plugins`.

L'objectif de ce projet est de poursuivre l'intégration des deux IDE. La liste des tâches proposées est:

1. Migrez les fonctionnalités principales en tant que plugins (voir ci-dessous)
1. Ajouter une fonctionnalité pour convertir un projet d'une perspective à l'autre
1. Créer une interface graphique pour le gestionnaire de plugins (voir l'image ci-dessous)

  ![GramLab Plugins Manager](gramlab_plugins_manager.png?lightbox=600,600&cropResize=400,400 "GramLab Plugins Manager"){.image .half}

1. Configurer et déployer un registre de plugins en ligne

Quelques fonctionnalités de base à convertir en plugins:

- Visualisation de Concordance comme illustré dans le Manuel de l'Utilisateur, Fig. 4.8.
- Visualiseur de dictionnaire comme illustré dans le Manuel de l'utilisateur, figure 3.2.
- Éditeur de graphe tel qu'indiqué dans le Manuel de l'utilisateur, section 5.2.
- Exportateur de graphes tel que décrit dans le Manuel de l'utilisateur, section 5.4.
- Gestionnaire de plugins, une interface utilisateur pour gérer les plugins.
- Transcoder comme illustré dans le manuel de l'utilisateur, figure 2.3.
- Xalign comme décrit dans le Manuel de l'utilisateur, chapitre 10.
- Treecloud, pour la visualisation sous forme de nuages arborés des concordances d'Unitex.

Tâches pour la période de cautionnement communautaire :

- Reproduire et résoudre un problème sur le [PR #52](https://github.com/UnitexGramLab/gramlab-ide/pull/52#issuecomment-241422363)
- Rebaser le PR # 52 avec les dernières modifications sur le master
- Demandez aux développeurs de revoir le PR # 52 puis de le fusionner au master
- Rebaser le [PR #53](https://github.com/UnitexGramLab/gramlab-ide/pull/53) avec les derniers changements sur master
- Demandez aux développeurs de revoir le PR # 53 puis de le fusionner au master
- Ajoutez une fonction "Se souvenir de moi" dans la boîte de dialogue de sélection de la perspective (voir la sélection de l'image GramLab Perspective ci-dessous)

  ![GramLab Perspective Selection](gramlab_perspective_selection.png?lightbox=600,600&cropResize=400,400 "GramLab Perspective Selection"){.image .half}

**More info**:

- [Un aperçu obsolète de l'IDE Java](http://www-igm.univ-mlv.fr/~unitex/docs/ide_code.pdf) (v3.0)
- [Les sources de l'IDE](https://github.com/UnitexGramLab/gramlab-ide)
- [La branche plugins](https://github.com/UnitexGramLab/gramlab-ide/tree/feature/plugins)

**Mentor**: [Cristian Martinez](http://martinec.org?target=_blank)
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-09</span>Définir un Token non étiqueté dans Unitex<span class="ug-label c1">Noyau</span><span class="ug-label c2">C++</span><span class="ug-label c3">CasSys</span><span class="ug-label c4">Priorité:3/5</span></label></button>
    <div data-content>
      <article markdown="1">
Unitex intègre un masque lexical appelé **TDIC** qui "matche" n'importe quel token étiqueté dans le texte.
La version Unitex/GramLab 3.1beta a introduit un graphe de généralisation d'étiquetage qui "matche" le token désigné par l'utilisasateur dans le texte, puis recherche les occurrences non étiquetées du token.
Le graphe de généralisation de l'étiquetage est trop restrictif et fonctionne uniquement dans CasSys.

La proposition est de créer un nouveau masque lexical, **UDIC**, afin de combiner le fonctionnement de **TDIC** et le graphe de généralisation de d'étiquetage.

Ce masque lexical doit être écrit avec
constraintes c'est-à-dire que **&lt;UDIC&gt;** n'est pas autorisé. On n'accepte pas non plus les négations (**! **). Ce  masque recherchera des instances non étiquetées d'un token défini par des contraintes.


Supposons le token étiqueté suivant: ** {TTT, LLL.CCC} **, pour "matcher" toutes les instances non étiquetées de
** TTT ** la syntaxe est ** & lt; UDIC + CCC & gt; **

**Mentor**: [Anubhav Gupta](http://www.univ-tours.fr/m-gupta-anubhav-452216.kjsp?target=_blank)
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-10</span>Conversion de la liste des parties du discours en automate<span class="ug-label c1">Noyau</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java</span><span class="ug-label c3">Word tag</span><span class="ug-label c4">Priorité:3/5</span></button>
    <div data-content>
      <article>
        <p>Unitex a une fonction pour convertir l'automate du texte au format 'POS list' (FST-Text dialog box, Table pane, 'Export all text as POS list' button).
      </p>
      <p>
      Le projet consiste à mettre en œuvre la conversion inverse dans le cas où toute ambiguïté lexicale a été supprimée du format 'POS list'.
      </p>
      <p>
      Cette fonction a été suggérée par les utilisateurs qui suppriment manuellement l'ambiguïté lexicale des corpus, mais qui font une partie de cette révision, en format 'POS list'. Ils veulent pouvoir convertir le corpus résultant au format FST-Text, afin de pouvoir effectuer des recherches ultérieures.
      </p>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~laporte/index_en.html/">Eric Laporte</a></p>
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-11</span>Ajouter des boîtes dans l'automate texte<span class="ug-label c1">Noyau</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java</span><span class="ug-label c3">Word tag</span><span class="ug-label c4">Priorité:3/5</span></button>
    <div data-content>
      <article>
        <p>Actuellement, les boîtes dans l'automate du texte peuvent être modifiées ou supprimées manuellement afin de réviser le marquage du texte, mais il serait utile d'ajouter de nouvelles boîtes avec de nouvelles analyses. La partie difficile est de traiter le cas où des parties d'un mot sont étiquetées séparément.
      </p>
      <p>
      Cette fonction a été suggérée par les utilisateurs qui suppriment l'ambiguïté lexicale des corpus manuellement.
      </p>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~laporte/index_en.html/">Eric Laporte</a></p>
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-12</span>Conversion d'un graphe-dictionnaire morphologique en liste<span class="ug-label c1">Noyau</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java</span><span class="ug-label c3">Word tag</span><span class="ug-label c4">Priorité:3/5</span></button>
    <div data-content>
      <article>
        <p>Actuellement, la fonction 'Exporter tous les chemins du graphe' (dans le menu FSGraph> Tools) liste les chemins d'un graphe et les écrit dans un fichier.
      </p>
      <p>
      Si le graphe est un graphe-dictionnaire morphologique (manuel, section 3.8.4), il serait utile d'étendre cette fonction afin de créer un traitement supplémentaire des masques lexicaux dans le graphe. À chaque occurrence d'un masque lexical, la nouvelle fonction recherchera dans les dictionnaires en mode morphologique les entrées qui satisfont le masque, et les substituera au masque. La liste qui en résulte sera une liste de formes contenant des informations lexicales. Une telle liste de formes peut être convertie en un dictionnaire au format DELAF.
      </p>
      <p>
      Cette fonction serait utile pour certaines langues dans lesquelles la morphosyntaxe a été codée avec des graphes-dictionnaires morphologiques (MDG). En malgache et en arabe, par exemple, les formes de mots décrites dans les MDG sont en nombre fini et ne donnent pas lieu à une explosion combinatoire. Il serait intéressant de les générer dans un dictionnaire complet, de sorte que Unitex/GramLab puisse traiter la langue comme des langues au sytème flexionnel moins riche tels que l'anglais.
      </p>
<p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~laporte/index_en.html/">Eric Laporte</a></p>
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-13</span>Intégration de LexiMir<span class="ug-label c1">Noyau</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java</span><span class="ug-label c3">Language Resource Management</span><span class="ug-label c4">Priorité:3/5</span></button>
    <div data-content>
      <article>
        <p><a href="http://korpus.matf.bg.ac.rs/soft/LeXimir.html">LexiMir</a>, anciennement ILReMaT, est un gestionnaire de dictionnaire open-source créé en C # au Language Technology Group de l'Université de Belgrade (<a href="https://halshs.archives-ouvertes.fr/hal-01108253/document">Krstev <i>et al.</i>, 2004</a>; <a href="http://link.springer.com/chapter/10.1007%2F978-3-642-34399-5_6#page-1">Krstev <i>et al.</i>, 2013</a>).
        Le projet consiste à réécrire LexiMir en Java et à l'intégrer dans Unitex/GramLab.
      </p>
      <p>LexiMir a été conçu pour des tâches de gestion de dictionnaire non implémentées dans Unitex/GramLab.
      </p>
<p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~laporte/index_en.html/">Eric Laporte</a></p>
      </article>
    </div>
  </section>

<section data-fisarmonica>
    <button data-control><i class="fa fa-1x fa-fw fa-question-circle"></i>Questions et prochaines étapes</button>
    <div data-content>
      <article markdown="1">
Si vous avez des questions, n'hésitez pas à envoyer un message à la [liste de diffusion des développeurs](mailto:unitex-devel@univ-mlv.fr) ou sur le [forum des utilisateurs](http://forum.unitexgramlab.org?target=_blank).
      </article>
    </div>
  </section>

</section>
<br />
