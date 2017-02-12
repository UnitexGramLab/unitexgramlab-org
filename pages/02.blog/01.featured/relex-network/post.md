---
title: "The RELEX network"

date:   09/01/2015

taxonomy:
    category: [blog, featured]
    tag: [resources,relex]

anchors:
    active: true
    selectors: '.autumn-post-content h1'

routes:
  default: '/relex-network'    
---

Unitex/GramLab works with dictionaries built by the members of the [RELEX network](http://infolingu.univ-mlv.fr/english/Relex/Relex.html?target=_blank), an international network of laboratories specialized in Computational Linguistics that was created by <a target="_blank" href="https://en.wikipedia.org/wiki/Maurice_Gross">Maurice Gross</a> and his LADL team. Most of the universities listed in the [partners](../unitexgramlab-partners) page are members of this network. 

Members of the RELEX network have built and are building exhaustive dictionaries of simple and compound words for French, English, Greek, [Portuguese](http://label.ist.utl.pt/en/index.html), [Russian](http://www.cis.uni-muenchen.de), Thai, Korean, Italian, Spanish, Norwegian, Arabic, German, Polish and more. They also build [lexicon-grammar tables](#lexicon-grammar-tables). 

For more information and references about RELEX resources, please consult the Unitex/GramLab [Language Resources](/language-resources) page.

# DELAF dictionaries

All the dictionaries conform to the DELAF formalism. A DELAF dictionary is a text file, each line representing an entry. The line representing a word contains the inflected form of the word, the lemma of the word and some grammatical, semantic and inflectional information. Here is a sample of the English simple word dictionary:

    acidize,.V:W:P1s:P2s:P1p:P2p:P3p
    acidizing,acidize.V:G
    acidized,acidize.V:K:I1s:I2s:I3s:I1p:I2p:I3p
    acidizes,acidize.V:P3s
    acidizer,.N+Conc:s
    acidizers,acidizer.N+Conc:p
    acidizing,.N:s
    acidizings,acidizing.N:p
    acidly,.ADV
    acidness,.N:s
    acidnesses,acidness.N:p
    acidoid,.A
    acidolysis,.N:s
    acidolyses,acidolysis.N:p
    acidometer,.N+Conc:s 

DELAF dictionaries can contain both simple and compound words. Here is a sample of the English compound word dictionary:

    Chamber of Commerce,.N+NPN+z1:s
    Chamber of Deputies,.N+NPN+z1:s
    Chamber of Horrors,.N+NPN+z1:s
    Chamber of trade,.N+NPN+z1:s
    Chambers of Commerce,Chamber of Commerce.N+NPN+z1:p
    Chambers of Deputies,Chamber of Deputies.N+NPN+z1:p
    Chambers of Horrors,Chamber of Horrors.N+NPN+z1:p
    Chambers of trade,Chamber of trade.N+NPN+z1:p
    Champagne Charley,.N+XN+z1:s
    Chancellor of The Exchequer,.N+NPN+Hum+z1:s
    Channel Fleet,.N+XN+z1:s
    Channel Fleets,Channel Fleet.N+XN+z1:p
    Channel Islander,.N+XN+Hum+z1:s
    Channel Islanders,Channel Islander.N+XN+Hum+z1:p

To get more information about the DELAF formalism, please consult the Unitex/GramLab [User's Manual](http://releases.unitexgramlab.org/latest-stable/man).

# Lexicon-Grammar tables

The lexicon-grammar methodology was developed by Maurice Gross, according to the following principle: every verb has a specific set of arguments (i.e. subject and complements), to the point that this set is often unique. Hence, the syntactic properties of verbs, or rather of the elementary sentences defined for each verb, have to be systematically described. No system predicting sentence forms from semantic features could exist. The systematic description consists in matrices whose rows are verbs (i.e. elementary sentences) and columns are sentence forms into which verbs may enter or not. The sentence forms are the usual transformations of elementary sentences, often simple declarative forms. Matrices are binary: a "+" sign appears at the intersection of a given row and a given column when the verb in the row enters the structure represented in the given column, a minus sign appears in the opposite situation.

A lexicon of the 12,000 main verbs of French has been subdivided into about 50 classes (C. Leclère 1991). Each class has a particular matrix. The sentence forms number about 400, including pronominalisation, passivization, sentential complement reductions, and nominalizations with support verbs.

A lexicon of 25,000 elementary sentences with at least one frozen argument is also available. Their representation by binary matrices follows the same principles. Partial lexicons of sentences with support verbs (être, avoir, faire, etc.) and predicative nouns have also been built (J. Giry-Schneider 1978, 1987, A. Meunier 1977). 

# Resources distributed with Unitex/GramLab

The information related to the resources distributed with Unitex/GramLab is now available [here](../language-resources).
