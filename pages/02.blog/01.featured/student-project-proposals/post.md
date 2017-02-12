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

routes:
  default: '/student-project-proposals'
---

> [Unitex/GramLab](http://unitexgramlab.org?target=_blank) is an open source, cross-platform, multilingual, lexicon- and
grammar-based corpus processing suite. Unitex/GramLab releases are available
[here](http://releases.unitexgramlab.org?target=_blank). Source code
is hosted on [GitHub](https://github.com/UnitexGramLab?target=_blank).

This page describes several student projects that could be undertaken to learn about Natural Language Processing (NLP), programming and open source software development practices while simultaneously working on the improvement of Unitex/GramLab. Anyone is welcome to participate as mentor or submitting new projects.

<section id="only-one" data-accordion-group>

  <section data-accordion>
    <button data-control><i class="fa fa-1x fa-fw fa-info"></i>Discover Unitex/GramLab</button>
    <div data-content>
      <article markdown="1">
        <a href="/how-to-contribute">How to contribute</a>
      </article>
    </div>
  </section>

  <section data-accordion>
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

  <section data-accordion>
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
      <p><img src="/user/pages/02.blog/01.featured/student-project-proposals/unitex_screenshot.png"></p>
      <h2>Project-oriented IDE (GramLab.jar)</h2>
      <p><img src="/user/pages/02.blog/01.featured/student-project-proposals/gramlab_screenshot.png"></p>
      <p><strong>Mentor</strong>: <a href="http://martinec.org">Cristian Martinez</a></p>   
      </article>
    </div>
  </section>


  <section data-accordion>
    <button data-control><span class="ug-label">PRJ-03</span>Enhance MultiFlex: a module for automatic inﬂection of multi-word units<span class="ug-label c1">Core</span><span class="ug-label c2">C++</span><span class="ug-label c3">MWUs</span><span class="ug-label c4">Priority:2/5</span></button>
    <div data-content>
      <article markdown="1">

[MultiFlex](http://www.info.univ-tours.fr/~savary/English/softwareASgb.html?target=_blank) is a multi-lingual Unicode-compatible module for automatic inﬂection of multi-word units (MWUs). It is meant in particular for the creation of morphological dictionaries of MWUs. It implements a uniﬁcation-based formalism for the description of inﬂectional behavior of MWUs which supposes the existence of a module for the inﬂectional morphology of simple words. In the last years, MultiFlex has evolved independently from Unitex. The goal of this project is to enhance the Unitex implementation of MultiFlex backporting these changes in a granular fashion.

- Mentor: [Agata Savary](http://www.info.univ-tours.fr/~savary/?target=_blank)

      </article>
    </div>
  </section>


  <section data-accordion>
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
        <p>We wish to provide a Unitex Package Manager (UPM) for Linguistic Resources, i.e. a tool to install, upgrade and uninstall dictionnaires, grammars or a group of <a target="_blank" href="http://unitex.univ-mlv.fr/releases/latest-stable/lingua/">language-related resources</a></p>
        <p><strong>Mentor</strong>: <a href="#">To be defined</a></p>
      </article>
    </div>
  </section>


  <section data-accordion>
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
        <p><strong>Mentor</strong>: <a href="#">To be defined</a></p>      
      </article>
    </div>
  </section>


  <section data-accordion>
    <button data-control><span class="ug-label">PRJ-06</span>Support Locate Pattern function on treebanks<span class="ug-label c1">Core</span><span class="ug-label c2">C++</span><span class="ug-label c3">FSA</span><span class="ug-label c4">Priority:3/5</span></label></button>
    <div data-content>
      <article>
        <p>The Locate Pattern program applies a grammar to a text and constructs an index of the occurrences found. We are looking to support the Locate Pattern on treebanks</p>
          <ul>
          <li>A module that represents a treebank in the form of an acyclic automaton (each internal node of a tree is represented by a transition that bypasses the sequence dominated by the node)</li>
          <li>A variant of the search module that works on treebanks represented in this way</li>
          </ul>
        <p><strong>Mentor</strong>: <a target="_blank" href="http://igm.univ-mlv.fr/~mconstan/">Matthieu Constant</a></p>      
      </article>
    </div>
  </section>

  <section data-accordion>
    <button data-control><span class="ug-label c5">PRJ-07</span>Integrate a tree cloud visualization into the Unitex/GramLab IDE<span class="ug-label c1">IDE</span><span class="ug-label c2">Java</span><span class="ug-label c3">TreeCloud</span><span class="ug-label c4">Priority:3/5</span></label></button>
    <div data-content>
      <article>
        <blockquote>
        This project was developed under the GSoC'16 program by <a target="_blank" href="https://github.com/aleksandrachasch">Aleksandra Chashchina</a> from the National Research University Higher School of Economics, Moscow. Final report is available <a target="_blank" href="https://drive.google.com/drive/folders/0B1uzOloZ6LTcVDY3bjBLbXExYmc">here</a>.
        </blockquote>
        <p>TreeCloud is a free software visualization tool which display the most frequent words of a text as a tree cloud. A tree cloud is an extension of a <a href="https://en.wikipedia.org/wiki/Tag_cloud">tag cloud</a>, in which the words are located around a tree representing how close they appear in the text, and where attributes like size and color are used to reflect the word frequency.</p>
        <figure>
        <img class="centered" src="http://www-igm.univ-mlv.fr/~unitex/img/treecloud.png" alt="TreeCloud of the Unitex User's Manual">
        <figcaption>TreeCloud of the Unitex User's Manual</figcaption>
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
        <p><strong>Mentor</strong>: <a http://igm.univ-mlv.fr/~gambette">Philippe Gambette</a></p> 
        <p><strong>Mentor</strong>: <a href="http://martinec.org">Cristian Martinez</a></p> 
      </article>
    </div>
  </section>

  <section data-accordion>
    <button data-control><i class="fa fa-1x fa-fw fa-question-circle"></i>Questions and next steps</button>
    <div data-content>
      <article markdown="1">
If you have any questions, please do not hesitate to send a message to the [developers mailing list](mailto:unitex-devel@univ-mlv.fr) or post back at the [users forum](http://forum.unitexgramlab.org?target=_blank).
      </article>
    </div>
  </section>  

</section>
<br />

{assets:js order:10}
/user/themes/unitexgramlab/js/jquery.accordion.min.js
{/assets}

{assets:inline_js}
  window.addEventListener('DOMContentLoaded', function() {
      (function($) {
          $(document).ready(function() {
            $('#only-one [data-accordion]').accordion({
                "transitionSpeed": 400,
                 singleOpen: false
            });
          });
      })(jQuery);
  });
{/assets}
