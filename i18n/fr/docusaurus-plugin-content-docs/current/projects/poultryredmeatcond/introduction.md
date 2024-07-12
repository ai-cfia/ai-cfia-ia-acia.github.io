---
sidebar_position: 2
---
# Projet "Poultry and Red Meat Condemnations"

![texte alternatif](CAHSS_Dashboard.png)

## Vue d'ensemble

L'équipe de Visualisation de Données de l'ACIA extrait des données des rapports
[condamnations de la volaille et du bétail dans les établissements sous
inspection fédérale
(ADH-717)](https://agriculture.canada.ca/fr/systeme-information-marches/rp/index-fra.cfm?action=pR&r=778&pdctc=)
pour alimenter le tableau de bord des données sur l'abattage inspecté au
fédéral, dans le Système canadien de surveillance de la santé animale (SCSSA).
L'équipe a demandé une manière automatisée de mettre à jour les données de leur
tableau de bord avec les nouveaux rapports qui sont publiés mensuellement.

## Solution

Au début du mois, un travail CRON exécute un script Python à partir d'un
conteneur Docker qui récupère le nouveau rapport, fusionne les nouvelles données
avec les données historiques, et met à jour le dépôt GitHub automatiquement.

Nous avons opté pour une solution qui est gratuite et open-source.

Si vous souhaitez parcourir le code, vous pouvez visiter notre [dépôt
GitHub](https://github.com/ai-cfia/PoultryRedMeatCond)
