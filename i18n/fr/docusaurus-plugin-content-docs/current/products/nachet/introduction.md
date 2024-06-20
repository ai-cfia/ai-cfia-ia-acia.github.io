---
sidebar_position: 1
---
# Aperçu

## Qu'est-ce que Nachet ?

![Une image en gros plan d'un microscope est affichée. Un écran d'ordinateur est à l'arrière-plan. Une boîte de Pétri et un scalpel sont sur la table.](./nachet-img/nachet-1.png)

L'ACIA veille à ce que les semences ou les grains qui traversent les frontières canadiennes respectent des normes phytosanitaires strictes afin de prévenir la propagation d'espèces végétales envahissantes. Nachet Interactive est une application Web à code source ouvert conçue pour aider les analystes de semences de l'ACIA à identifier rapidement et précisément les semences de mauvaises herbes réglementées. Elle combine la microscopie numérique avec des modèles de vision par ordinateur hébergés sur AzureML pour simplifier le processus d'inspection des semences.

Initialement axée sur l'identification des semences de mauvaises herbes, la portée de Nachet Interactive s'étend pour inclure d'autres tâches comme l'identification de semences pures et d'insectes, ce qui démontre la polyvalence de l'application. Cet outil vise à soutenir les scientifiques de l'ACIA en intégrant l'IA dans leur flux de travail.

### Espèces de semences

Nous formons actuellement nos modèles pour identifier ces 15 espèces :

| **Espèces** |
|:--:|
| Ambrosia artemisiifolia  |
| Ambrosia trifida |
| Ambrosia psilostachya |
| Brassica junsea |
| Brassica napus |
| Bromus hordeaceus |
| Bromus japonicus |
| Bromus secalinus |
| Carduus nutans |
| Cirsium arvense |
| Cirsium vulgare |
| Lolium temulentum |
| Solanum carolinense |
| Solanum nigrum |
| Solanum rostratum|

Pour plus d'informations sur le Programme des semences de l'ACIA, consultez la [page d'identification des
semences](https://inspection.canada.ca/plant-health/seeds/seed-testing-and-grading/seeds-identification/eng/1333136604307/1333136685768).

## Application Web

Visitez ce lien pour accéder à l'application Web Nachet Interactive déployée :
[https://nachet.inspection.alpha.canada.ca/](https://nachet.inspection.alpha.canada.ca/)

## Composants de l'application

Nachet Interactive est structurée autour de deux éléments clés : un frontal basé sur React et un moteur basé sur Flask. Pour plus d'informations sur chaque élément, consultez la documentation respective ci-dessous :

* [Nachet : frontal](https://github.com/ai-cfia/nachet-frontend)
* [Nachet : moteur](https://github.com/ai-cfia/nachet-backend)

## Lien supplémentaire

[Modèles de vision par ordinateur : projet de classification des semences | Statistique
Canada](https://www.statcan.gc.ca/fr/science-donnees/reseau/projet-classification-semences?utm_source=newsletter&utm_medium=email&utm_campaign=statcan-data-science-23-24?utm_source=newsletter&utm_medium=email&utm_campaign=statcan-data-science-23-24)