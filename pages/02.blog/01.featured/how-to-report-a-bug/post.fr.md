---
title: "Comment signaler un bug sur Unitex/GramLab"

date:   07/11/2016

taxonomy:
    category: [blog, featured]
    tag: [bug]
    author: 'Cristian Martinez'
    translator: 'Claude Martineau'

anchors:
    active: true
    selectors: '.autumn-post-content h1, .autumn-post-content h2'

routes:
  default: '/how-to-report-a-bug'
---

> [Unitex/GramLab](/) est suite logicielle d'analyse de corpus open source, multiplateforme, multilingue, fondée sur des dictionnaires et des grammaires

===

Nous vous remercions de votre intérêt pour contribuer au développement d'Unitex/GramLab ! Cette page fournit des lignes directrices pour signaler directement des bugs aux développeurs.

# Est-ce un bug ?

La première étape après avoir découvert un bug est de vérifier dans le [Forum Unitex/GramLab](http://forum.unitexgramlab.org?target=_blank) s'il a déjà été signalé. Si ce n'est pas le cas, faites une courte description du problème que vous avez identifié. Afin d'éviter toute confusion, *ne modifiez pas un signalement existant*, à moins que le problème soit exactement le même: Effectuez un nouveau signalement. Attendez une réponse. La communauté Unitex/GramLab est très réactive. Si vous pensez qu'un consensus se dégage sur la réalité du problème et qu'il s'agit effectivement d'un bug, la prochaine étape consiste à le signaler plus en détail.

Attention ! S'il vous plaît soyez clair dans votre description d'un bug de Unitex/GramLab ou d'autre chose: demander de l'aide, discutez des fonctionnalités, proposez des idées ou signalez un bug pour un package ou un programme non fourni par la distribution Unitex/GramLab. Si vous avez besoin d'aide, allez sur le [Forum Unitex/GramLab ](http://forum.unitexgramlab.org?target=_blank).

# Signalement d'un bug

Pour signaler un problème, veuillez respecter les étapes suivantes:

1. Identifiez quel composant principal d'Unitex/GramLab est affecté. Si vous rencontrez des problèmes avec l'interface graphique utilisateur, choisissez le composant **IDE Graphique**. Si vous éprouvez des problèmes lors de l'exécution de l'outil `UnitexToolLogger`, choisissez le composant **Noyau**. En général, les questions se situent dans l'une des catégories suivantes:

| Composant                | Tracker                                                                        |
|--------------------------|--------------------------------------------------------------------------------|
| IDE Graphique            | [Issues](https://github.com/UnitexGramLab/gramlab-ide/issues)                  |
| Noyau                    | [Issues](https://github.com/UnitexGramLab/unitex-core/issues)                  |
| Ressources linguistiques | [Issues](https://github.com/UnitexGramLab/lingua/issues)                       |
| Manuel utilisateur       | [Issues](https://github.com/UnitexGramLab/unitex-doc-usermanual/issues)        |
| Installateur Windows     | [Issues](https://github.com/UnitexGramLab/unitex-packaging-windows/issues)     |
| Installateur Unix        | [Issues](https://github.com/UnitexGramLab/unitex-packaging-unix/issues)        |
| Site web principal       | [Issues](https://github.com/UnitexGramLab/unitexgramlab-org/issues)            |
| Tests du Noyau           | [Issues](https://github.com/UnitexGramLab/unitex-core-tests/issues)            |
| Vinber CI                | [Issues](https://github.com/UnitexGramLab/vinber-backend/issues)               |

1. Recherchez dans le "tracker" les signalements précédents de votre problème en cliquant sur le lien **Issues**. 
S'il y en a, ajoutez tous les commentaires pertinents pour ce problème, ou du moins indiquez que vous avez le même problème.

1. Si votre problème n'est pas encore signalé, créez un nouvel élément en cliquant sur **New issue** et en créant un [compte GitHub](https://github.com/join?target=_blank) si vous n'en possédez pas déjà un.

1. Décrivez le problème dans l'onglet **Write**. Veuillez vous concentrez vous sur les réponses aux questions suivantes: Quelles sont les étapes pour reproduire le problème ?, Quelle est la sortie attendue ?, Et que voyez-vous à la place ? Faites des phrases simples et ne combinez pas la  description de plusieurs bugs dans le même message. Spécifiez également la version d'Unitex/GramLab, le système d'exploitation et le matériel si vous pensez cela nécessaire. Modèle suggéré:


    ```
    A detailed summary of the issue goes here. If suitable, include the steps required to reproduce the problem.
    
    
    **What steps will reproduce the problem?**

    

    **What is the expected output?**



    **What do you see instead?**



    **More info**
    
    Any other information you want to share that is relevant to the issue being reported. For example:
    
    - Did this work before?: yes[] no[]
    - Forum thread:
    - Log (.ulp) file:

    ```
    
    Voici quelques exemples de sigalement de bugs utilisant le modèle précédent [Segmentation fault on MultiFlex](https://github.com/UnitexGramLab/unitex-core/issues/1) et [Apply Lexical Resources Buffer Underflow Exception](https://github.com/UnitexGramLab/gramlab-ide/issues/10).  

1. **Fichiers joints**: Même si le bug peut être expliqué en quelques phrases courtes, les fichiers de Unitex/GramLab nécessaires pour reproduire le problème sont très utiles. Ils se présentent généralement sous la forme d'un fichier log, les ressources utilisées dans le traitement, ainsi que la ligne de commande utilisée pour le lancer (Cliquez sur Console dans le menu Info pour afficher, par ordre chronologique, une liste de tous les modules exécutés et de leurs paramètres à partir de votre session courante). Unitex dispose d'un outil pour générer des fichiers logs: regardez dans le Manuel utilisateur, Section 13.1. Des captures d'écran peuvent être également d'une aide précieuse. Rendez-les aussi visuellement descriptives que possible et, le cas échéant, faites des annotations. Cependant, *Soyez conscient que le tracker est public: ne partager donc pas d'information confidentielle*.

1. Enfin, cliquez sur **Submit new issue** en bas du formulaire.

# Priorité de traitement des bugs

Pour déterminer quels bugs ils abordent en premier, les développeurs prennent en compte un certain nombre de facteurs. Il s'agit notamment de la gravité et du nombre d'utilisateurs affectés.
