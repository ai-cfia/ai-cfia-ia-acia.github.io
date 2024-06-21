---
sidebar_position: 3
---

# Aperçu

## Qu'est-ce que Finesse ?

Finesse est un moteur de recherche sémantique que nous développons.
Contrairement aux moteurs de recherche traditionnels qui correspondent aux
mots-clés, les moteurs de recherche sémantique comprennent l'intention et le
sens contextuel derrière une requête. Semblable à Google et Bing, Finesse permet
aux utilisateurs de rechercher des informations. Cependant, il effectue des
recherches uniquement dans des ensembles de documents spécifiques qui lui sont
fournis, et non sur l'ensemble du Web. Le prototype de travail actuel,
[finesse.inspection.alpha.canada.ca](https://finesse.inspection.alpha.canada.ca),
est configuré pour rechercher un ensemble de documents extraits du site Web
public [inspection.canada.ca](https://inspection.canada.ca). Notre ambition est
que Finesse soit aussi sûr, précis et rapide que les moteurs de recherche
publics, tout en minimisant les coûts.

## Principales caractéristiques

- Compréhension sémantique : fournit des résultats de recherche plus précis en
  comprenant l'intention derrière les requêtes, pas seulement les mots-clés.

- Prise en charge multilingue : prend en charge les recherches dans différentes
  langues, à condition que les documents soient disponibles dans ces langues.

D'autres fonctionnalités seront ajoutées au fil du temps.

## Pourquoi faisons-nous cela ?

Bien que les moteurs de recherche publics comme Google et Bing soient efficaces
pour les recherches générales sur le Web, ils n'ont pas accès aux documents
internes. Les outils actuellement à la disposition des employés de l'ACIA pour
rechercher des documents internes sont principalement basés sur des mots-clés,
ce qui est dépassé. Trouver les bonnes informations est difficile et souvent
pénible pour les employés. Un exemple de ceci est l'outil Guidance Finder,
accessible à [Guidance Finder](https://inspection.canada.ca/apps/eng/guidance).
En réponse, nous développons Finesse, un moteur de recherche sémantique conçu
pour rechercher efficacement des ensembles de documents internes et améliorer
l'expérience de recherche pour nos employés.

## À qui est-il destiné ?

Le moteur de recherche Finesse est principalement destiné aux employés de
l'ACIA. Actuellement, un groupe de champions, des inspecteurs de l'ACIA, aident
à tester le prototype.

Il est également open source, permettant à toute personne intéressée d'utiliser
le code pour développer ses propres applications.

- Application frontale :
  [finesse-frontend](https://github.com/ai-cfia/finesse-frontend)
- Application dorsale :
  [finesse-backend](https://github.com/ai-cfia/finesse-backend)
- Intégration d'index Azure : [azure-db](https://github.com/ai-cfia/azure-db)
- Intégration de LlamaIndex :
  [llamaindex-db](https://github.com/ai-cfia/llamaindex-db)
- Intégration d'index personnalisé du Labo d'IA :
  [ailab-db](https://github.com/ai-cfia/ailab-db)
- Outils de test d'API : [api-test](https://github.com/ai-cfia/api-test)
