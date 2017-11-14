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

> [Unitex/GramLab](http://unitexgramlab.org?target=_blank) is an open source, cross-platform, multilingual, lexicon- and
grammar-based corpus processing suite. Unitex/GramLab releases are available
[here](http://releases.unitexgramlab.org?target=_blank). Source code
is hosted on [GitHub](https://github.com/UnitexGramLab?target=_blank).

This page describes several student projects that could be undertaken to learn about Natural Language Processing (NLP), programming and open source software development practices while simultaneously working on the improvement of Unitex/GramLab. Anyone is welcome to participate as mentor or submitting new projects.

<section id="only-one" class="single-open-fisarmonica" data-fisarmonica-group>

  <section data-fisarmonica>
    <button data-control><i class="fa fa-1x fa-fw fa-info"></i>Discover Unitex/GramLab</button>
    <div data-content>
      <article markdown="1">
        <a href="/how-to-contribute">How to contribute</a>
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button class="truncate" data-control><span class="ug-label">PRJ-01</span>Build an annotation comparison module<span class="ug-label c1">Core</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java | YAML</span><span class="ug-label c3">Standoff</span><span class="ug-label c4">Priority:3/5</span></button>
    <div data-content>
      <article>
      <p>The goal of this module is to compare two sets of annotations.</p>
      <ul>
        <li>Export the two set of annotations to a custom standoff format (C++ | YAML or CSV)</li>
        <li>Efficiently align and compare the annotations (C++)</li>
        <li>Count the number of matched relations which are: Correct, Missing, False positive, Partially correct (C++)</li>
        <li>Calculate metrics over matches: micro and macro values of precision, recall and F-measure (C++)</li>
        <li>Integrate the module into the GramLab IDE (Java)</li>
      </ul>
      <p><strong>Note</strong>: Some years ago, a former student developed a Perl script named <a href="http://www-igm.univ-mlv.fr/~unitex/src/SBDiffTool.tar.gz">SBDiffTool</a>, a Sentence Boundary Visual Diff Tool for Unitex. A short time later, another student developed several Perl scripts (<a href="http://www-igm.univ-mlv.fr/~unitex/src/CiteDiff.tar.gz">CiteExtract, CiteDiff, CiteEval</a>) to compare two annotations sets, one set produced by Unitex and other manually labeled by an human. These scripts, which were developed for a very specific class of annotation, could serve as a starting point for build a more flexible and integrated tool.</p>
      <p><strong>Mentor</strong>: <a target="_blank" href="http://martinec.org">Cristian Martinez</a></p>
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label c5">PRJ-02</span>Integrate the Classic IDE and the Project-oriented IDE<span class="ug-label c1">IDE</span><span class="ug-label c2">Java</span><span class="ug-label c3">GUI | Swing</span><span class="ug-label c4">Priority:4/5</span></label></button>
    <div data-content>
      <article>
       <blockquote>
        This project was developed under the GSoC'16 program by <a target="_blank" href="https://github.com/Mukarr">Mukarram Tailor</a> from the Indian Institute of Technology Mandi, India. Final report is available <a target="_blank" href="https://drive.google.com/open?id=0B1uzOloZ6LTcbVFLXzFhbjRDWTQ">here</a>.
        </blockquote>
    <p>
      We need to integrate the two Unitex/GramLab IDEs: the Classic IDE (Unitex.jar) and the Project-oriented IDE (GramLab.jar):
      <ul>
        <li>Classify features according to accessibility from both IDEs or one</li>
        <li>Identify and remove useless dependencies of GramLab.jar on Unitex.jar</li>
        <li>Identify and remove useless differences between the two IDE</li>
        <li>Separate code according to invocation by GramLab.jar or by Unitex.jar only</li>
        <li>Build a welcome wizard to allow users to setup a new project and to select which perspective (the visible actions and views within a window) they want to use: Classic or Project-oriented</li>
      </ul>
      <h2>Classic IDE (Unitex.jar)</h2>
      <p class="center"><img class="image half" src="/user/pages/02.blog/01.featured/student-project-proposals/unitex_screenshot.png"></p>
      <h2>Project-oriented IDE (GramLab.jar)</h2>
      <p><img class="image half" src="/user/pages/02.blog/01.featured/student-project-proposals/gramlab_screenshot.png"></p>
      <p><strong>Mentor</strong>: <a href="http://martinec.org">Cristian Martinez</a></p>   
      </article>
    </div>
  </section>


  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-03</span>Enhance MultiFlex: a module for automatic inﬂection of multi-word units<span class="ug-label c1">Core</span><span class="ug-label c2">C++</span><span class="ug-label c3">MWUs</span><span class="ug-label c4">Priority:2/5</span></button>
    <div data-content>
      <article markdown="1">

[MultiFlex](http://www.info.univ-tours.fr/~savary/English/softwareASgb.html?target=_blank) is a multi-lingual Unicode-compatible module for automatic inﬂection of multi-word units (MWUs). It is meant in particular for the creation of morphological dictionaries of MWUs. It implements a uniﬁcation-based formalism for the description of inﬂectional behavior of MWUs which supposes the existence of a module for the inﬂectional morphology of simple words. In the last years, MultiFlex has evolved independently from Unitex. The goal of this project is to enhance the Unitex implementation of MultiFlex backporting these changes in a granular fashion.

- Mentor: [Agata Savary](http://www.info.univ-tours.fr/~savary/?target=_blank)

      </article>
    </div>
  </section>


  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-04</span>Create a Package Manager for Linguistic Resources<span class="ug-label c1">Core</span><span class="ug-label c2">C++ | JSON</span><span class="ug-label c3">UPM</span><span class="ug-label c4">Priority:3/5</span></button>
    <div data-content>
      <article>
        <p>A package manager is a tool that makes installing, upgrading, uninstalling, configuring and managing packages easy. Popular application-level package managers are:</p>
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
        <p>We wish to provide a Unitex Package Manager (UPM) for Linguistic Resources, i.e. a tool to install, upgrade and uninstall dictionnaires, grammars or a group of <a target="_blank" href="http://unitexgramlab.org/releases/latest-stable/lingua/">language-related resources</a></p>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://martinec.org">Cristian Martinez</a></p>
      </article>
    </div>
  </section>


  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-05</span>Conceive an Import/Export feature between Unitex and GATE<span class="ug-label c1">Core</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java | XML</span><span class="ug-label c3">GATE</span><span class="ug-label c4">Priority:3/5</span></button>
    <div data-content>
      <article>
        <p><a target="_blank" href="https://gate.ac.uk">GATE</a> is an open source infrastructure for developing and deploying software components that process human language. For this project, we are looking to extend Unitex/GramLab to include the next functions :</p>
        <ul>
        <li>A function that exports corpus to GATE with sentence and token delimitation</li>
        <li>A function that exports XML annotated corpus to GATE</li>
        <li>A function that imports GATE corpus to Unitex/GramLab</li>
        <li>A Unitex dialog box that prepares supervised learning with GATE's Learning external module</li>
        </ul>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://www.univ-tours.fr/m-gupta-anubhav-452216.kjsp">Anubhav Gupta</a></p>
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-06</span>Support Locate Pattern function on treebanks<span class="ug-label c1">Core</span><span class="ug-label c2">C++</span><span class="ug-label c3">FSA</span><span class="ug-label c4">Priority:3/5</span></label></button>
    <div data-content>
      <article>
        <p>The Locate Pattern program applies a grammar to a text and constructs an index of the occurrences found. We are looking to support the Locate Pattern on treebanks</p>
          <ul>
          <li>A module that represents a treebank in the form of an acyclic automaton (each internal node of a tree is represented by a transition that bypasses the sequence dominated by the node)</li>
          <li>A variant of the search module that works on treebanks represented in this way</li>
          </ul>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~mconstan/">Matthieu Constant</a></p>
        <p><strong>Co-mentor</strong>: <a href="https://github.com/patwat">Patrick Watrin</a></p>       
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label c5">PRJ-07</span>Integrate a tree cloud visualization into the Unitex/GramLab IDE<span class="ug-label c1">IDE</span><span class="ug-label c2">Java</span><span class="ug-label c3">TreeCloud</span><span class="ug-label c4">Priority:3/5</span></label></button>
    <div data-content>
      <article>
        <blockquote>
        This project was developed under the GSoC'16 program by <a target="_blank" href="https://github.com/aleksandrachasch">Aleksandra Chashchina</a> from the National Research University Higher School of Economics, Moscow. Final report is available <a target="_blank" href="https://drive.google.com/drive/folders/0B1uzOloZ6LTcVDY3bjBLbXExYmc">here</a>.
        </blockquote>
        <p>TreeCloud is a free software visualization tool which display the most frequent words of a text as a tree cloud. A tree cloud is an extension of a <a href="https://en.wikipedia.org/wiki/Tag_cloud">tag cloud</a>, in which the words are located around a tree representing how close they appear in the text, and where attributes like size and color are used to reflect the word frequency.</p>
        <figure>
        <img class="centered" src="http://www-igm.univ-mlv.fr/~unitex/img/treecloud.png" alt="TreeCloud of the Unitex User's Manual">
        <figcaption class="align-center">TreeCloud of the Unitex User's Manual</figcaption>
        </figure>
        <p>The aim of this project is to integrate a tree cloud visualization for the occurrences that are presented in the concordance window of the Unitex/GramLab IDE (see the User’s Manual p.89).  The project will mainly consist in:</p>
        <ul>
        <li>Understanding the Unitex Concord module and the concordance files produced by Unitex.</li>
        <li>Porting from Python (TreeCloud) to Java (Unitex/GramLab IDE) the functions to compute the co-occurrence distance between pairs of words.</li>
        <li>Integrating or re-implementing in Java a tree reconstruction algorithm from the co-occurrence distances between pairs of words;
        -Integrating or re-implementing in Java a tree visualization algorithm;</li>
        <li>Enhancing the tree visualization to allow users to easily go back to the source text and visualize the context of occurrence of a specific word.</li>
        </ul>
        <p><strong>Useful links</strong></p>
        <ul>
        <li>Gambette, P., &amp; Véronis, J. (2010). <em>Visualising a text with a tree cloud. In Classification as a Tool for Research</em> (pp. 561-569). Springer Berlin Heidelberg (<a target="_blank" href="https://hal.archives-ouvertes.fr/lirmm-00373643v2/en/">https://hal.archives-ouvertes.fr/lirmm-00373643v2/en/</a>).</li>
        <li>TreeCloud website: <a target="_blank"  href="http://www.treecloud.org">http://www.treecloud.org</a></li>
        <li>TreeCloud sources: <a target="_blank"  href="https://github.com/PhilippeGambette/treecloud">https://github.com/PhilippeGambette/treecloud</a></li>
        <li>Plotting phylogenetic trees: <a target="_blank" href="http://adamzy.github.io/PhyloPlot/">http://adamzy.github.io/PhyloPlot/</a></li>
        </ul>
        <p><strong>Mentor</strong>: <a href="http://igm.univ-mlv.fr/~gambette">Philippe Gambette</a></p> 
        <p><strong>Mentor</strong>: <a href="http://martinec.org">Cristian Martinez</a></p> 
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-08</span>IDEs Integration: Plugins for the Unitex/GramLab IDE<span class="ug-label c1">IDE</span><span class="ug-label c2">Java</span><span class="ug-label c3">Plugins</span><span class="ug-label c4">Priority:4/5</span></label></button>
    <div data-content>
      <article markdown="1">
Unitex/GramLab includes two Java IDEs, the Classic IDE (`Unitex.jar`) and the Project-oriented IDE (`Gramlab.jar`).
During the GSoC'16 a student (see <small><span class="ug-label c5">PRJ-02</span></small> above) helped us to
deploy a plugin-based architecture to integrate both IDEs into a new one featuring two perspectives: Classical an
Project-oriented. His final report is available [here](https://goo.gl/G6oaVM?target=_blank)

Plugins are built on [PF4J](https://github.com/decebals/pf4j?target=_blank), an open-source, lightweight plugin framework for Java,
with minimal dependencies and easily extensible. Plugins are distributed in ZIP files with all runtime dependencies bundled,
that can be installed without difficulty by copying them into the `App/plugins` folder.

The aim of this project is to continue the integration of both IDEs. The proposed list of tasks is:

1. Migrate core functionalities as plugins (see below)
1. Add a feature to convert a projects between perspectives
1. Create a GUI for plugin manager (see image below)

  ![GramLab Plugins Manager](gramlab_plugins_manager.png?lightbox=600,600&cropResize=400,400 "GramLab Plugins Manager"){.image .half}

1. Configure and deploy an online plugin registry

Some core functionalities to be converted as  plugins:

- Concordance viewer as illustrated in the User's Manual, Fig. 4.8.
- Dictionary viewer as illustrated in the User's Manual, Fig. 3.2.
- Graph editor as showed in the User's Manual, Section 5.2.
- Graph exporter as described in the User's Manual, Section 5.4.
- Plugin manager, a user interface to manage plugins.
- Transcoder as illustrated in the User's Manual, Fig. 2.3.
- Xalign as described in the User's Manual, Chapter 10.
- Treecloud, for TreeCloud-style visualization of Unitex concordances.

Tasks for the Community Bonding Period :

- Reproduce and resolve an issue on the [PR #52](https://github.com/UnitexGramLab/gramlab-ide/pull/52#issuecomment-241422363)
- Rebase the PR #52 with the latest changes on master
- Ask developers to review the PR #52 and then merge it to master
- Rebase the [PR #53](https://github.com/UnitexGramLab/gramlab-ide/pull/53) with the latest changes on master
- Ask developers to review the PR #53 and then merge it to master
- Add a 'Remember Me' feature on the select perspective dialog (see image GramLab Perspective Selection below)

  ![GramLab Perspective Selection](gramlab_perspective_selection.png?lightbox=600,600&cropResize=400,400 "GramLab Perspective Selection"){.image .half}

**More info**:

- [An outdated overview of the Java IDE](http://www-igm.univ-mlv.fr/~unitex/docs/ide_code.pdf) (v3.0)
- [The IDE sources](https://github.com/UnitexGramLab/gramlab-ide)
- [Plugins branch](https://github.com/UnitexGramLab/gramlab-ide/tree/feature/plugins)

**Mentor**: [Cristian Martinez](http://martinec.org?target=_blank)
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-09</span>Introduce the UnTagged Token on Unitex<span class="ug-label c1">Core</span><span class="ug-label c2">C++</span><span class="ug-label c3">CasSys</span><span class="ug-label c4">Priority:3/5</span></label></button>
    <div data-content>
      <article markdown="1">
Unitex supports a lexical mask called **TDIC** that matches any tagged token in the text.
Unitex/GramLab 3.1beta version introduced tagging generalization graph that matches user
specified tagged token in text and then searches untagged instances of the token.
The tagging generalization graph is too restrictive and works only as part of CasSys.

The proposal is to create a new lexical mask, **UDIC**, in order to combine the functioning
of **TDIC** and tagging generalization graph. This lexical mask has to be written with
constraints i.e. **&lt;UDIC&gt;** is not allowed. It does not accept negations either (**!**). This
mask will lookup untagged instances of a token defined by constraints.

Assume the following tagged token: **{TTT,LLL.CCC}**, to match all untagged instances of
**TTT** the syntax is **&lt;UDIC+CCC&gt;**

**Mentor**: [Anubhav Gupta](http://www.univ-tours.fr/m-gupta-anubhav-452216.kjsp?target=_blank)
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-10</span>POS-list-to-Automaton Conversion<span class="ug-label c1">Core</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java</span><span class="ug-label c3">Word tag</span><span class="ug-label c4">Priority:3/5</span></button>
    <div data-content>
      <article>
        <p>Unitex has a function to convert the text automaton into a 'POS list' format (FST-Text dialog box, Table pane, 'Export all text as POS list' button).
      </p>
      <p>
      The project consists in implementing the reverse conversion in case all lexical ambiguity has been removed from the 'POS list' format.
      </p>
      <p>
      This function was suggested by users that remove lexical ambiguity from corpora manually, but do part of this revision on the 'POS list' format. They want to be able to convert the resulting corpus back to the FST-Text format, so that they can apply search queries on it later.
      </p>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~laporte/index_en.html/">Eric Laporte</a></p>       
      </article>
    </div>
  </section>
  
  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-11</span>Add Boxes in Text Automaton<span class="ug-label c1">Core</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java</span><span class="ug-label c3">Word tag</span><span class="ug-label c4">Priority:3/5</span></button>
    <div data-content>
      <article>
        <p>Currently, boxes in the text automaton can be manually modified or removed in order to revise the tagging of the text, but it would be useful to be able to add new boxes with new analyses. The difficult part is to deal with the case where parts of a word are tagged separately.
      </p>
      <p>
      This function was suggested by users that remove lexical ambiguity from corpora manually.
      </p>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~laporte/index_en.html/">Eric Laporte</a></p>       
      </article>
    </div>
  </section>
  
  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-12</span>Morphological Graph-Dictionary to List<span class="ug-label c1">Core</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java</span><span class="ug-label c3">Word tag</span><span class="ug-label c4">Priority:3/5</span></button>
    <div data-content>
      <article>
        <p>Currently, the 'Export all graph paths' function (in the FSGraph > Tools menu) lists the paths of a graph and writes them in a file.
      </p>
      <p>
      If the graph is a morphological dictionary-graph (Manual, Section 3.8.4), it would be useful to extend this function so that it makes an additional processing of the lexical masks in the graph. At each occurrence of a lexical mask, the new function will search the morphological-mode dictionaries for entries which satisfy the mask, and replace the mask with them. The resulting list will be a list of forms with lexical information. Such a list of forms can be converted into a DELAF-format dictionary.
      </p>
      <p>
      This function would be useful for some languages in which morphosyntax has been encoded with morphological dictionary-graphs (MDG). In Malagasy and Arabic, for example, the word forms described in the MDGs are in finite number and do not run into a combinatorial explosion. It would be interesting to generate all of them into a full-form dictionary, so that Unitex/GramLab can process the language like more weakly inflected languages such as English.
      </p>
<p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~laporte/index_en.html/">Eric Laporte</a></p>       
      </article>
    </div>
  </section>

  <section data-fisarmonica>
    <button data-control><span class="ug-label">PRJ-13</span>Integration of LexiMir<span class="ug-label c1">Core</span><span class="ug-label c1">IDE</span><span class="ug-label c2">C++ | Java</span><span class="ug-label c3">Language Resource Management</span><span class="ug-label c4">Priority:3/5</span></button>
    <div data-content>
      <article>
        <p><a href="http://korpus.matf.bg.ac.rs/soft/LeXimir.html">LexiMir</a>, formerly ILReMaT, is an open-source dictionary manager in C# created at the Language Technology Group of  the University of Belgrade (<a href="https://halshs.archives-ouvertes.fr/hal-01108253/document">Krstev <i>et al.</i>, 2004</a>; <a href="http://link.springer.com/chapter/10.1007%2F978-3-642-34399-5_6#page-1">Krstev <i>et al.</i>, 2013</a>). The project consists in rewriting LexiMir in Java and integrating it into Unitex/GramLab.
      </p>
      <p>LexiMir was designed for dictionary-management tasks not implemented in Unitex/GramLab.
      </p>
<p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~laporte/index_en.html/">Eric Laporte</a></p>       
      </article>
    </div>
  </section>

<section data-fisarmonica>
    <button data-control><i class="fa fa-1x fa-fw fa-question-circle"></i>Questions and next steps</button>
    <div data-content>
      <article markdown="1">
If you have any questions, please do not hesitate to send a message to the [developers mailing list](mailto:unitex-devel@univ-mlv.fr) or post back at the [users forum](http://forum.unitexgramlab.org?target=_blank).
      </article>
    </div>
  </section>  

</section>
<br />
