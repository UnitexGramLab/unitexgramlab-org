---
title: "How to start contributing to Unitex/GramLab"

date:   01/30/2017

taxonomy:
    category: [blog, featured]
    tag: [contribute]
    author: 'Cristian Martinez'    

anchors:
    active: true
    selectors: '.autumn-post-content h1, .autumn-post-content h2'

routes:
  default: '/how-to-contribute'    
---

> [Unitex/GramLab](/) is an open source, cross-platform, multilingual, lexicon- and grammar-based corpus processing suite

===

Unitex/GramLab project decision-making is based on a [community meritocratic process](http://governance.unitexgramlab.org?target=_blank). Anyone with an interest in Unitex/GramLab can join the community, contribute to the project design and participate in decisions.

# Unitex

Unitex is the C++ Natural Language Processing (NLP) engine of Unitex/GramLab. It is distributed under the terms of the [GNU Lesser General Public License version 2.1](http://opensource.org/licenses/lgpl-2.1?target=_blank) (LGPLv2) and contains only few third-party code dependencies (LibYAML, Pstdin, TRE, WinGetOpt) licensed under more-permissive licenses.

# GramLab

GramLab is the Project-oriented integrated development environment (IDE) of Unitex/GramLab. There is also a Classic IDE (Unitex.jar) that we are currently integrating with GramLab. They are distributed under the terms of the [GNU Lesser General Public License version 2.1](http://opensource.org/licenses/lgpl-2.1?target=_blank) (LGPLv2) and contains only few third-party dependencies (XAlign, Xerces2-j) licensed under equal or more-permissive licenses.

# Language resources

Language resources released with Unitex/GramLab are distributed under the terms of the [Lesser General Public License For Linguistic Resources](/lgpllr?target=_blank) (LGPLLR). For authors and more information on these language resources, see [here](/language-resources?target=_blank).

# Documentation

User’s Manual (in PDF format) is available in English and French (more translations are welcome). You can view and print them with Evince, downloadable [here](https://wiki.gnome.org/Apps/Evince/Downloads?target=_blank). The latest on-line version of the User’s Manual is accessible [here](http://releases.unitexgramlab.org/latest-stable/man?target=_blank).

# Support

Support questions can be posted in the [community support forum](http://forum.unitexgramlab.org?target=_blank). You are welcome to ask to join at any time by following [this link](https://unitexgramlab.typeform.com/to/nLE4sb). Please feel free to submit any suggestions or requests for new features too. Some general advice about asking technical support questions can be found [here](http://www.catb.org/esr/faqs/smart-questions.html?target=_blank).

# Reporting Bugs

See the [Bug Reporting Guide](/how-to-report-a-bug) for information on how to report bugs.

# Governance Model

Unitex/GramLab project decision-making is based on a community meritocratic process. Anyone with an interest in it can join the community, contribute to the project design and participate in decisions. The [Unitex/GramLab Governance Model](http://governance.unitexgramlab.org?target=_blank) describes how this participation takes place and how to set about earning merit within the project community.

# Spelling

Unitex/GramLab is spelled with capitals "U" "G" and "L", and with everything else in lower case. Excepting the forward slash, do not put a space or any character between words. When the forward slash is not allowed, you can simply write “UnitexGramLab”

It's common to refer to the Unitex/GramLab Core as "Unitex", and to the Unitex Project-oriented IDE as "GramLab". If you are mentioning the distribution suite (Core, IDE, Linguistic Resources and others bundled tools) always use "Unitex/GramLab".

# Useful links

- Main website: 	[http://unitexgramlab.org](http://unitexgramlab.org)
- Binary releases: 	[http://releases.unitexgramlab.org](http://releases.unitexgramlab.org)
- User's manual: 	[http://releases.unitexgramlab.org/latest-stable/man](http://releases.unitexgramlab.org/latest-stable/man)
- Bug reporting: [http://unitexgramlab.org/how-to-report-a-bug](http://unitexgramlab.org/how-to-report-a-bug)
- User's forum: 	[http://forum.unitexgramlab.org](http://forum.unitexgramlab.org)
- Developers list: 	[unitex-devel at univ-mlv.fr](mailto://unitex-devel@univ-mlv.fr)
- Code hosting: 	[http://code.unitexgramlab.org](http://code.unitexgramlab.org)
- Your contribution: 	[Contribution rules](#)
- Governance: 	[http://governance.unitexgramlab.org](http://governance.unitexgramlab.org)

# How to start ?

Thank you for your interest in contributing with the Unitex/GramLab development! You could start downloading a [binary release](http://releases.unitexgramlab.org?target=_blank) and getting familiar with Unitex/GramLab. The User's Manual is available [here](http://unitexgramlab.org/releases/latest-stable/man/Unitex-GramLab-3.1-usermanual-en.pdf?target=_blank).

Unitex/GramLab source code is hosted on [https://github.com/UnitexGramLab](https://github.com/UnitexGramLab?target=_blank). An overview of the C++ Core code (v3.0) is reachable [here](http://www-igm.univ-mlv.fr/~unitex/docs/core_code.pdf?target=_blank). For an overview of the Java IDE (v3.0) you could check [this presentation](http://www-igm.univ-mlv.fr/~unitex/docs/ide_code.pdf?target=_blank). There are also some contribution rules [here](#).

To start hacking the code, checkout the sources with git:

## C++ Core

```
git clone https://github.com/UnitexGramLab/unitex-core.git
```

To compile under Linux use e.g.:

```
cd build
make DEBUG=yes UNITEXTOOLLOGGERONLY=yes
```

## Java GramLab IDE

```
git clone https://github.com/UnitexGramLab/gramlab-ide
```

To compile use:

```
ant
```

## Language Resources

```
git clone https://github.com/UnitexGramLab/lingua
```

# Where to start ?

All contributions are welcome. If you are a new comer and want to help with the Unitex/GramLab
codebase, look the GitHub issues under the label [`first-timers-only`](http://goo.gl/zfIsQZ?target=_blank).

