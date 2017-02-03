---
title: "Why Unitex ?"

date:   06/30/2009

taxonomy:
    category: [blog, featured]
    tag: [history]
    
routes:
  default: '/why-unitex'
---

# How the creation of Unitex has benefited to the scientific community

Right from its creation in 2002, Unitex has provided the following features:

- Unitex is an [open-source system](#feature-1)
- It works on [Windows, Linux, Mac OS](#feature-2) and other systems
- The Unitex [search function was innovative as regards performances](#feature-3)
- Unitex adopted [Unicode](#feature-4) for character encoding
- It [adapts its tokenization strategy](#feature-5) in function of the language of the text
- The creation of Unitex was an incentive to [release lexicons with the LGPLLR license](#feature-6)

## Unitex is an open-source system <a id="feature-1"></a>

The initial version of Unitex was written in 2002 so as to reproduce the functionality of Intex, which was not open-source.

Unitex is *available to anyone*. For example, universities and enterprises can download and use it for free. Many open-source systems were created from products with restricted distribution, by writing new code with the same functionality. This is the case of LibreOffice.org as compared to Microsoft Office. As Francis Tyers puts it:

> If someone writes something that works the same as your software with their own code and their own hands, this should not be a problem. (...) There are many pieces of free software which have started out as "clones" of other pieces of non-free software, and have in time become better.

Owners of products with restricted distribution are rarely in favour of such cloning, but the law does not allow them to forbid independent developers from writing code.

You can use Unitex while preserving your *independence* from its authors. If you need to recompile the system due to technical changes, you can do it from the source code which is openly distributed (hence the term 'open source'). You are protected from the whims of a person or of an institution.

Software developers can improve and correct Unitex. Here are a few contributions to Unitex through [collaborative development](http://en.wikipedia.org/wiki/Collaborative_software_development_model?target=_blank) since 2002. The PolyLex module has been adapted to Russian by Sebastian Nagel, a Russian-speaking developer. Thanks to Claude Devis, a developer working with Ancient Greek texts, you can produce concordances containing references to parts of a corpus. A user of a 64-bit computer made the Unitex code compatible with this type of machine. Agata Savary, a specialist of inflection of multi-word units, contributed the Multiflex module. It would not be reasonable to ask a single developer to deal with all the aspects of such a complex system. Unitex can be used by other systems ([Glossanet](http://glossa.fltr.ucl.ac.be?target=_blank), [EELO](http://label.ist.utl.pt/pt/eelo_intr_pt.php?target=_blank) and [SMELL](http://label.ist.utl.pt/pt/smell_intr_pt.php?target=_blank) use Unitex), and Unitex makes use of independently existing open-source systems as [TRE](http://freecode.com/projects/tre?target=_blank).

The methods implemented in an open-source system are *transparent*, i.e. open to the knowledge of all. Anyone can discuss them and design improvements. There are no trade secrets about them.

The code of Unitex is distributed with the [LGPL](http://www.gnu.org/licenses/lgpl.html?target=_blank) license. This allows users to include this code in commercial products, free of charge, and facilitates the use of Unitex to solve real-world problems. 


## Unitex works on Windows, Linux, MacOS and other systems <a id="feature-2"></a>

Unitex works on any operating system that can compile C++ language. In particular, it can be run on [Linux](http://www.linux.org?target=_blank), i.e. *without paying a license* for an operating system. The price of such a license can be an obstacle to the use of a system by universities, since it has to be multiplied by the number of students that use the system. In addition, Unitex can be run on Linux without using an emulator of another operating system. (When programs are implemented for Windows only, they can be run on Linux by using a Windows emulator, but this requires a Windows license, and prevents interaction with other programs running directly on Linux.) For example, the [Glossanet](http://glossa.fltr.ucl.ac.be?target=_blank) system runs Unitex with other programs directly on Linux. 

## The Unitex search function was innovative as regards performances <a id="feature-3"></a>

The search function of Unitex was re-used from the Aglaé system. The search function of Aglaé used an innovative representation of tokens and was significantly quicker than comparable systems (Paumier, 2000, 2003). Later, the search function was further optimized by Alexis Némé. The search function of Unitex is very quick, even with large corpora and large lexicons, especially when run on Linux. Searching a 12-million-word corpus for expressions described in a 600-state, 3600-transition grammar typically takes 1 mn.

```
Paumier, Sébastien. 2000. "Nouvelles méthodes pour la recherche d'expressions dans de grands corpus", In Anne Dister (éd.), Revue Informatique et Statistique dans les Sciences humaines 36, Actes des troisièmes journées INTEX, Liège, 2000, pp. 289-295.
```

```
Paumier, Sébastien. 2003. "A Time-Efficient Token Representation for Parsers", Proceedings of the EACL Workshop on Finite-State Methods in Natural Language Processing, Budapest, pp. 83-90. 
```

## Unitex adopted Unicode for character encoding <a id="feature-4"></a>

Unitex can process Chinese, Korean, multilingual text with characters from several alphabets, e.g. Latin and Greek alphabets, without having to encode an alphabet into another. Special typographical characters, such as '—', do not pose particular problems when they happen to occur in text. 

## It adapts its tokenization strategy in function of the language of the text <a id="feature-5"></a>

Languages written without word delimiters, such as Chinese, Japanese and Thai, require specific tokenization strategies as compared to English. Tokenizing a text consists of segmenting it into elementary units before further analysis, and these elementary units are usually words

## The creation of Unitex was an incentive to release lexicons with the LGPLLR license <a id="feature-6"></a>

After the LGPL license was adopted, it appeared that some of the electronic lexicons which are required for Unitex to operate should also be released for free with a user license. Various institutions released their lexicons under the [LGPLLR license](../lgpllr). 
