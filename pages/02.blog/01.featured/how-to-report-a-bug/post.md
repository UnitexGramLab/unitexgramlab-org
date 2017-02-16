---
title: "How to report a bug on Unitex/GramLab"

date:   07/11/2016

taxonomy:
    category: [blog, featured]
    tag: [bug]
    author: 'Cristian Martinez'    

anchors:
    active: true
    selectors: '.autumn-post-content h1, .autumn-post-content h2'

routes:
  default: '/how-to-report-a-bug'    
---

> [Unitex/GramLab](/) is an open source, cross-platform, multilingual, lexicon- and grammar-based corpus processing suite

===

Thank you for your interest in contributing with Unitex/GramLab development! This page provides guidelines for reporting bugs directly to the developers.

# Is it a bug ?

The first step after discovering a bug is to check in the [Unitex/GramLab forum](http://forum.unitexgramlab.org?target=_blank) if there is already a thread on it. If not, post a short description of the problem you identified. To avoid confusion, *do not post in an existing thread*, unless your problem is exactly the same: start a new thread instead. Wait for feedback. Unitex/GramLab community is quite active and responsive. If you feel a consensus of opinions that the problem is real and that it is a bug, the next step is to report it as a bug in more detail.

Attention! Please be clear whether you are describing an Unitex/GramLab bug or doing something else: requesting support, discussing features, proposing ideas or reporting a bug for a package or program not provided by the Unitex/GramLab distribution. If you need help, please visit the [Unitex/GramLab forum](http://forum.unitexgramlab.org?target=_blank).

# Bug reporting

To report an issue, please observe the following steps:

1. Identify which major component from the categories below is affected. If you are having troubles with the visual user interface chose the **Visual IDE** component, if you are experimenting problems with the execution of `UnitexToolLogger`, select the **Core Engine** component. If you don't have a clue on which part of the program the issue comes from, please report what happened under the Visual IDE category.

| Component          | Tracker                                                                        |
|--------------------| :----------------------------------------------------------------------------: |
| Visual IDE         | [Issues](https://github.com/UnitexGramLab/gramlab-ide/issues)                  |
| Core Engine        | [Issues](https://github.com/UnitexGramLab/unitex-core/issues)                  |
| Language Resources | [Issues](https://github.com/UnitexGramLab/lingua/issues)                       |
| User's Manual      | [Issues](https://github.com/UnitexGramLab/unitex-doc-usermanual/issues)        |
| Windows Installer  | [Issues](https://github.com/UnitexGramLab/unitex-packaging-windows/issues)     |
| Unix Installer     | [Issues](https://github.com/UnitexGramLab/unitex-packaging-unix/issues)        |
| Main Website       | [Issues](https://github.com/UnitexGramLab/unitexgramlab-org/issues)            |
| Core Tests         | [Issues](https://github.com/UnitexGramLab/unitex-core-tests/issues)            |
| Vinber CI          | [Issues](https://github.com/UnitexGramLab/vinber-backend/issues)               |

1. Search the tracker for previous reports of your problem by clicking the **Issues** link. If so, add any comment you might have relevant to this issue, or at least indicate that you have the same problem.

1. If your problem is unreported yet, create a new item for it by clicking **New issue** and by creating a [GitHub account](https://github.com/join?target=_blank) if you don't have any.

1. Describe the issue in the **Write** tab. Please focus on answering the next questions: What steps will reproduce the problem?, What is the expected output?, and What do you see instead? Please keep your sentences simple and don't combine multiple bugs into one description. Specify also the version of Unitex/GramLab, the operating system, and the hardware if you think it is necessary. 

    Suggested template:


    ```
    A detailed summary of the issue goes here. 

    **What steps will reproduce the problem?**

    **What is the expected output?**

    **What do you see instead?**

    **More info**

    <!---  
    Any other information you want to share that is relevant to the issue being reported. For example: 
    --->

    - Did this work before?: [ ] yes [ ] no
    - Forum thread:
    - Log (.ulp) file:
    ```
    
    Some examples of bugs reports using the previous template are [Segmentation fault on MultiFlex](https://github.com/UnitexGramLab/unitex-core/issues/1) and [Apply Lexical Resources Buffer Underflow Exception](https://github.com/UnitexGramLab/gramlab-ide/issues/10).  

1. **Attachments**: Even if the bug can be explained in a few short sentences, Unitex/GramLab files required to reproduce the problem are very useful. They are usually a log file, the resources used in the experiment, as well as the command line used to launch it (Click Console on the Info menu to see, in chronological order, a list of all executed modules and their parameters from your current session). Unitex has a tool for generating log files: see the User Manual, Section 13.1. Screenshots can be a lot of help too. Make them as visually descriptive as possible, and wherever applicable, make annotations. However, *be aware that the tracker is public: do not to share confidential information*.

1. Finally, click **Submit new issue** at the bottom of the form.

# Bug prioritization

To determine which bugs they address first, developers take into account a number of factors. These include the following: severity and number of affected users.
