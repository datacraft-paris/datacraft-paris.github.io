---
slug: biais-humains-et-algorithmes
title: Comment veiller à ce que les biais humains n’imprègnent pas les algorithmes ?  
author: Stéphanie Lehuger
author_title: Thinker et entrepreneuse
author_url: mailto:contact@datacraft.paris
header_image_url: img/blog/UsberetRica.png
tags: [biais, algorithmes, IA, philosophie]
description: Article publié dans Usbek & Rica le 18 février 2022
keywords:
    - biais humain
    - algorithmes
    - IA
    - philosophie
---

<!--truncate-->


---


<div style={{'marginTop': '1em', 'marginBottom': '2em'}}>
<div className="warning" style={{'fontSize': '28px', 'color': '#69337A', 'padding': '1.0em'}}>
Stephanie Lehuger, Thinker et Entrepreneur, membre du <u>club Datacraft</u>, qui réfléchit aux questions éthiques soulevées par l’IA, nous explique dans cette tribune de quels outils et méthodes nous disposons actuellement pour qu’un préjugé humain ne se retrouve pas dans l’algorithme d’une intelligence artificielle.
</div>
</div>




Tous les humains ont des biais cognitifs, c’est inévitable. Et les data scientists sont des humains, donc ils sont fatalement sujets aux biais, comme tout le monde. Pour établir des connaissances, les data scientists analysent des données. Et ces données, si elles sont mal choisies, donnent de mauvais résultats. Ainsi, un biais cognitif se transforme en biais de donnée qui se transforme ensuite en biais algorithmique.

On peut dire qu’un algorithme fonctionne comme une recette de cuisine où les ingrédients seraient les données et la recette le code : si les ingrédients (les données) sont de mauvaise qualité, avec des biais par exemple, le résultat ne peut qu’être décevant. La plupart du temps, les biais proviennent des données et cela se produit de deux manières.

En premier lieu, ils peuvent être le résultat d’une mauvaise collecte. Imaginons par exemple qu’on cherche à déterminer le loyer moyen que paient les gens qui louent leur logement. Si les data scientists sont parisiens et récupèrent la base de données de leur ville, ils vont obtenir un résultat élevé par rapport à la moyenne nationale. Il sera biaisé par les loyers de Paris.

La transmission d’un biais s’effectue donc au travers des données choisies (la « data »). Si les data scientists n’ont pas conscience que les loyers sont moins élevés dans les villes de taille moyenne et en zone rurale que dans les grandes villes et qu’ils entraînent un algorithme à prédire le prix du loyer sur ces données-là, alors ses prédictions seront biaisées aussi. Le biais d’une IA peut provenir à l’origine d’un biais cognitif humain, qui se transmet dans les données choisies qui sont biaisées, puis elles influencent ensuite les résultats en s’étant transformées en un biais algorithmique.


<div style={{'marginTop': '1em', 'marginBottom': '2em'}}>
<div className="warning" style={{'fontSize': '24px', 'color': '#69337A', 'borderLeft': 'solid #805AD5 4px', 'padding': '0.7em'}}>
S’il existe une discrimination des femmes dans une entreprise, se baser sur les données passées pour évaluer le potentiel d’une candidate, même plus brillante qu’un concurrent masculin, lui sera défavorable
</div>
</div>


En deuxième lieu, les biais peuvent émaner d’une situation déjà biaisée et qu’un algorithme pourrait amplifier. Comme une intelligence artificielle qui baserait son apprentissage sur des données historiquement biaisées. Si, depuis toujours, il existe une discrimination des femmes dans une entreprise, se baser sur les données passées pour évaluer le potentiel d’une candidate, même plus brillante qu’un concurrent masculin, lui sera défavorable. Si, historiquement, les femmes sont peu représentées, l’algorithme pourra en déduire de manière erronée qu’elles ont un profil moins désirable.


<h2> Quelques exemples de biais communs </h2>

Un biais typique qu’il faut tenter d’éviter est le biais des survivants. Par exemple, quand on constate que des bâtiments de plus de cent ans sont encore debout, on a l’impression que la « construction d’antan » était de meilleure qualité qu’aujourd’hui. Pourtant, quand on y réfléchit, la quasi-totalité de ce qui a été construit depuis l’invention de la construction s’est en fait écroulée ou a été démolie, donc ces bâtiments « survivants » sont des exceptions.


<div style={{'marginTop': '1em', 'marginBottom': '2em'}}>
<div className="warning" style={{'fontSize': '24px', 'color': '#69337A', 'borderLeft': 'solid #805AD5 4px', 'padding': '0.7em'}}>
Les data scientists doivent éviter le biais du survivant qui consisterait à tirer des conclusions sur la base d’une population incomplète
</div>
</div>

<!-- > Les data scientists doivent éviter le biais du survivant qui consisterait à tirer des conclusions sur la base d’une population incomplète  -->


Lors de l’étude de données par des data scientists, il leur faut éviter le biais du survivant qui consisterait à tirer des conclusions sur la base d’une population incomplète, comportant uniquement les éléments ayant « survécu », qui sont en fait des exceptions, plutôt que des cas représentatifs.

En France, des « antivax » ont été victimes du paradoxe de Simpson. Ils ont assuré à tort sur les réseaux sociaux que les non-vaccinés ne saturent pas les services de réanimation du pays, en s’appuyant sur des données de la Drees mal interprétées. Leur erreur principale est d’avoir regardé les chiffres bruts au lieu des pourcentages. Il y a en effet neuf fois plus de vaccinés que de non-vaccinés en France. 

Alors que les non-vaccinés sont très minoritaires, ils sont surreprésentés à l’hôpital, avec 63 % des admissions en soins critiques. Si on regarde les chiffres absolus, on peut avoir l’impression que les deux populations sont en nombre équilibrés dans les hôpitaux, mais ce serait oublier de regarder la proportion de chacune dans la population générale. C’est ainsi que plusieurs enquêtes récentes menées sur des échantillons d’hôpitaux ont conclu que les non-vaccinés représentaient entre 70 % et 90 % dans les services de réanimation.


<h2> Comment les data scientists corrigent les biais ? </h2>

Une fois qu’on a identifié pourquoi et comment les biais posent un problème aux data scientists, on va s’intéresser à ce que les data scientists font, ne font pas, et devraient faire pour limiter les risques liés à ces biais.


<h3> 1. Prendre conscience du problème et se poser les bonnes questions </h3>

Pour prendre conscience du problème des biais cognitifs, les data scientists ont accès à différents types de ressources. Ils peuvent par exemple commencer à s’informer par le biais d’une charte, comme la charte éthique élaborée au sein de datacraft. Ils peuvent par ailleurs analyser le contenu des référentiels d’évaluation de l’IA de confiance, comme celui de Labelia Labs (ex-Substra Foundation) ou celui du LNE. Les serments établissent également une liste pertinente de critères d’une IA responsable, comme le font Tech pledge et Holberton-Turing Oath. Enfin, il existe des outils pratiques comme la checklist de Data Science éthique deon, accessible en ligne de commande.

Il est important d’avoir un esprit critique sur son propre travail quand on est data scientist. Si on ne devait choisir que 3 questions à se poser absolument, voici ce que je propose :

 - S’engager à faire une pause pour s’interroger sur toutes les conséquences de son travail, qu’elles soient voulues ou non;
 - Contrôler les conséquences de son travail dans le temps;
 - Tendre vers l’autorégulation à l’aide de référentiel d’évaluation, de certification avec audit), en complément des « 7 points de vigilance » soulignés par la Commission européenne.


<h3> 2. Mesurer les biais </h3>

Après avoir pris conscience de la potentielle existence de biais, la seconde étape consiste à définir des métriques appropriées afin de les mesurer convenablement. Le choix des métriques dépend alors essentiellement de ce que l’on cherche à contrôler. Aequitas est une boîte à outils open source pour auditer les biais, créée par le Center for Data Science and Public Policy de l’Université de Chicago. 

Elle permet de vérifier les prédictions des outils d’évaluation des risques basés sur l’apprentissage automatique afin de comprendre les différents types de biais et de prendre des décisions éclairées sur le développement et le déploiement de ces systèmes. Le « fairness tree » aide à choisir la bonne métrique. Là comme ailleurs, il convient d’être attentif aux choix réalisés puisqu’il existe un nouveau biais possible. En effet, il faut avoir conscience que, en choisissant une métrique, on écarte toutes les autres.

<div style={{'marginTop': '1em', 'marginBottom': '2em'}}>
<div className="warning" style={{'fontSize': '24px', 'color': '#69337A', 'borderLeft': 'solid #805AD5 4px', 'padding': '0.7em'}}>
Tout choix concernant une population étudiée devient moral en data science
</div>
</div>

<!-- > Tout choix concernant une population étudiée devient moral en data science  -->


Des métriques faciles d’accès pour les data scientists sont également mises en œuvre. Une équipe au sein de datacraft a réalisé une cartographie de 5 « fairness open source libraries » lors d’un benchathon : AIF360, Shapash, Aequitas, What if tool, Fairlearn.

Tout choix concernant une population étudiée devient moral en data science. En dehors des très grands groupes qui ont conscience des risques réputationnels forts auxquels ils sont soumis s’ils ne font pas attention aux biais et à leurs conséquences, cela reste principalement une question qui tient du ressort individuel dans les autres entreprises.

Même si ce n’est pas obligatoire légalement, il revient donc aux data scientists d’être moralement critiques sur leurs choix de données. Tout comme il est nécessaire d’être prudent pour ne pas introduire de biais dans les algorithmes qu’ils développent.


<h3> 3. Limiter les risques de biais </h3>

Il existe de nombreuses méthodes pour réduire les biais, que l’on peut diviser en trois grandes familles selon que l’intervention du praticien se situe avant, pendant ou après l’entraînement de l’algorithme. Avant l’entraînement, ces méthodes consistent à transformer les données à disposition, par exemple en les repondérant.

Concrètement, on peut revoir la pondération du nombre de personnes dans un jeu de données pour s’assurer qu’il y a autant d’hommes que de femmes et ainsi éviter un biais de genre. Pendant l’entraînement, il s’agit d’incorporer des contraintes d’équité à satisfaire, en complément des objectifs de performance classique. Enfin, les méthodes dites de post-traitement consistent à modifier les décisions des algorithmes, par exemple en favorisant les sous-groupes discriminés.


<div style={{'marginTop': '1em', 'marginBottom': '2em'}}>
<div className="warning" style={{'fontSize': '24px', 'color': '#69337A', 'borderLeft': 'solid #805AD5 4px', 'padding': '0.7em'}}>
Pour qu’une entreprise soit à la fois juste et profitable, toutes les parties prenantes doivent échanger pour parvenir à des compromis acceptables 
</div>
</div>

<!-- > Pour qu’une entreprise soit à la fois juste et profitable, toutes les parties prenantes doivent échanger pour parvenir à des compromis acceptables  -->


En diminuant les biais d’un côté, on diminue généralement la performance des algorithmes de l’autre : on parle du fairness-accuracy tradeoff. Pour qu’une entreprise soit à la fois juste et profitable, toutes les parties prenantes doivent échanger pour parvenir à des compromis acceptables. Les data scientists, les décideurs business ou encore les équipes de gouvernance sont impliqués dans ce processus complexe afin d’aboutir à un arbitrage. Une fois la décision prise, l’algorithme déployé et mis en production, il est indispensable de mettre en place une politique de supervision en temps réel (monitoring) afin de détecter de possibles changements de comportement du modèle.

Pour résumer, afin d’éviter de transmettre des biais humains à une intelligence artificielle, les data scientists doivent faire preuve d’esprit critique vis-à-vis de leurs possibles préjugés inconscients quand ils sélectionnent leurs données et construisent leurs algorithmes. Il n’y a malheureusement pas de méthode miracle qui marche à tous les coups. Un modèle repose sur des hypothèses dépendantes d’un contexte, elles seront donc différentes pour chaque problème, sans qu’un modèle magique fonctionne pour tous.

