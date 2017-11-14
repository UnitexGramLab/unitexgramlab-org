---
title: "Le réseau RELEX"

date:   09/01/2015

taxonomy:
    category: [blog, featured]
    tag: [ressources,relex]

anchors:
    active: true
    selectors: '.autumn-post-content h1'

routes:
  default: '/relex-network'    
---

Unitex/GramLab utilise des dictionnaires électroniques construis par les membres [RESEAU RELEX ](http://infolingu.univ-mlv.fr/english/Relex/Relex.html?target=_blank), un réseau international de laboratoires spécialisés en Linguistique Informatique créé par <a target="_blank" href="https://en.wikipedia.org/wiki/Maurice_Gross">Maurice Gross</a> et son équipe du LADL. La plupart des universités listées dans la page [partenaires](../unitexgramlab-partners) sont membres de ce réseau.

Les membres du réseau RELEX ont construit des dictionnaires de mots simples et composés pour de nombreuses langues Français, Anglais, Grec, [Portuguais](http://label.ist.utl.pt/en/index.html), [Russe](http://www.cis.uni-muenchen.de), Thai, Coréen, Italien, Espagnol, Norwegien, Arabe, Allemand, Polonais etc. Ils ont aussi construit des [tables du lexique grammaire](#lexicon-grammar-tables).

Pour des informations supplémentaires et des réferences sur les ressources de RELEX, veuillez consulter la page [Ressources Linguistique](/language-resources) d'Unitex/GramLab.

# Les dictionnaires DELAF

Tous les dictionnaires sont conformes au formalisme DELAF. Un dictionnaire DELAF est un fichier texte, dans lequel chaque ligne  représente une entrée. La ligne contient la forme fléchie du mot, le lemme du mot et des informations grammaticales, sémantiques et flexionnelles. Voici un extrait du dictionnaire Anglais des mots simples:

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

Les dictionnaires peuvent contenir à la fois des mots simples et des mots composés. Voici un extrait du dictionnaire anglais de mots composés:

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

Pour obtenir des informations sur le formalisme DELA, veuillez consulter le [Manuel Utilisateur](http://releases.unitexgramlab.org/latest-stable/man) d'Unitex/GramLab.

# Tables du Lexique-Grammaire

La méthodologie du lexique-grammaire a été développée par Maurice Gross, selon le principe suivant: chaque verbe a un ensemble spécifique d'arguments (c'est-à-dire sujet et compléments), au point que cet ensemble est souvent unique. De ce fait, les propriétés syntaxiques des verbes, ou plutôt des phrases élémentaires définies pour chaque verbe, doivent être systématiquement décrites. Aucun système prévoyant des formes de phrase à partir de caractéristiques sémantiques ne pourrait exister. La description systématique consiste en des matrices dont les lignes sont des verbes (c'est-à-dire des phrases élémentaires) et des colonnes sont des formes de phrases dans lesquelles les verbes peuvent entrer ou non. Les formes de phrase sont les transformations habituelles des phrases élémentaires, souvent des formes déclaratives simples. Les matrices sont binaires: un signe "+" apparaît à l'intersection d'une ligne donnée et d'une colonne donnée lorsque le verbe dans la ligne entre dans la structure représentée dans la colonne donnée, un signe moins apparaît dans la situation opposée.

Un lexique des 12,000 des verbes principaux du français a été subdivisé en environ 50 classes (C. Leclère 1991). Chaque classe a matrice particulière. Les formes de phrases sont au nombre de 400, y compris la pronominalisation, la passivation, les réductions de complément sententielles, et les nominations avec verbes supports.

Un lexique de 25,000 phrases élémentaires avec au moins un argument figé est également disponible. Leur représentation par des matrices binaires suit les mêmes principes. Des lexiques partiels de phrases à verbes support (être, avoir, faire, etc.) et des noms prédicatifs ont été également construits (J. Giry-Schneider 1978, 1987, A. Meunier 1977). 

# Ressources distributées avec Unitex/GramLab

Les informations concernant les ressources distributées avec Unitex/GramLab sont désormais disponibles [ici](../language-resources).
