"use strict";(self.webpackChunkai_cfia_ia_acia=self.webpackChunkai_cfia_ia_acia||[]).push([[806],{4902:e=>{e.exports=JSON.parse("{\"archive\":{\"blogPosts\":[{\"id\":\"nlp-projects-chat-gpt\",\"metadata\":{\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/nlp-projects-chat-gpt\",\"source\":\"@site/i18n/fr/docusaurus-plugin-content-blog-articles/2024-06-21-nlp-projects-chat-gpt/2024-06-21-nlp-projects-chat-gpt.md\",\"title\":\"Projets de traitement automatique des langues (TAL) utilisant ChatGPT et plus\",\"description\":\"Dans cet article, nous sommes ravis d'\xeatre \xe0 l'avant-garde de cette technologie passionnante et en rapide \xe9volution, et de partager quelques-uns de nos projets pour d\xe9monstration.\",\"date\":\"2024-06-21T00:00:00.000Z\",\"tags\":[{\"inline\":true,\"label\":\"Chat GPT\",\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/tags/chat-gpt\"},{\"inline\":true,\"label\":\"traitement automatique des langues\",\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/tags/traitement-automatique-des-langues\"},{\"inline\":true,\"label\":\"IA\",\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/tags/ia\"}],\"readingTime\":8.27,\"hasTruncateMarker\":true,\"authors\":[{\"name\":\"Tony Kaekang Lee\",\"title\":\"Scientifique des donn\xe9es\",\"url\":\"https://github.com/leejaeka\",\"imageURL\":\"https://github.com/leejaeka.png\",\"key\":\"leejaeka\"}],\"frontMatter\":{\"title\":\"Projets de traitement automatique des langues (TAL) utilisant ChatGPT et plus\",\"slug\":\"nlp-projects-chat-gpt\",\"authors\":[\"leejaeka\"],\"tags\":[\"Chat GPT\",\"traitement automatique des langues\",\"IA\"],\"hide_table_of_contents\":false,\"description\":\"Dans cet article, nous sommes ravis d'\xeatre \xe0 l'avant-garde de cette technologie passionnante et en rapide \xe9volution, et de partager quelques-uns de nos projets pour d\xe9monstration.\"},\"unlisted\":false,\"nextItem\":{\"title\":\"Classification automatis\xe9e des semences : Contr\xf4le de la qualit\xe9 \xe0 l'aide de la vision par ordinateur\",\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/seed-classification\"}},\"content\":\"Dans cet article, nous sommes ravis d'\xeatre \xe0 l'avant-garde de cette technologie\\npassionnante et en rapide \xe9volution, et de partager quelques-uns de nos projets\\npour d\xe9monstration.\\n\\n\x3c!-- truncate --\x3e\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n## Introduction\\n\\n![Logo de l'agent conversationnel ChatGPT](./img/1.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\nL'intelligence artificielle (IA) et le traitement automatique des langues (TAL)\\nsont devenus de plus en plus importants dans le monde moderne. Avec l'essor des\\ninterfaces conversationnelles, des agents conversationnels et des assistants\\nvirtuels, le TAL est devenu un outil essentiel pour am\xe9liorer la communication\\nentre les humains et les machines. L'un des mod\xe8les de TAL les plus\\nimpressionnants de ces derniers temps est ChatGPT, un grand mod\xe8le de langage\\nentra\xeen\xe9 par OpenAI bas\xe9 sur l'architecture GPT-3.5. ChatGPT a la capacit\xe9 de\\ncomprendre le langage naturel et de g\xe9n\xe9rer des r\xe9ponses semblables \xe0 celles des\\nhumains \xe0 une grande vari\xe9t\xe9 de sollicitations.\\n\\nMalgr\xe9 ses capacit\xe9s impressionnantes, les utilisateurs peuvent rencontrer des\\nlimitations lors de l'utilisation de ChatGPT pour des t\xe2ches tr\xe8s sp\xe9cifiques,\\ntelles que fournir des informations historiques pr\xe9cises sur des pays. Comme\\ntout syst\xe8me d'IA, ChatGPT a ses limites et peut b\xe9n\xe9ficier d'une formation\\nsuppl\xe9mentaire pour am\xe9liorer sa pr\xe9cision et son efficacit\xe9 pour des t\xe2ches\\nsp\xe9cifiques.\\n\\nEn tant que scientifiques de donn\xe9es, nous travaillons constamment \xe0 affiner et\\n\xe0 peaufiner ChatGPT et d'autres mod\xe8les de TAL pour mieux r\xe9pondre aux besoins\\nde nos clients. En personnalisant ces mod\xe8les pour travailler avec des ensembles\\nde donn\xe9es et des t\xe2ches sp\xe9cifiques, nous pouvons rendre des fonctionnalit\xe9s\\nauparavant indisponibles possibles. Dans cet article, nous sommes ravis d'\xeatre \xe0\\nl'avant-garde de cette technologie passionnante et en rapide \xe9volution, et de\\npartager quelques-uns de nos projets pour d\xe9monstration.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n![Illustration minimaliste d'une femme avec un thermom\xe8tre dans la bouche et\\ntenant sa t\xeate d'une main, signe de fi\xe8vre ou de c\xe9phal\xe9e.](./img/2.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\n## Projet n\xb01 : Projet de classification des rapports de maladie IMS (_Incident Management System_)\\n\\n### Objectif (Projet n\xb01)\\n\\nL'objectif de ce projet est de d\xe9velopper un pipeline efficace qui peut\\nautomatiquement d\xe9tecter les rapports de maladie au sein de documents anglais\\n(PDF) en utilisant l'intelligence artificielle (IA). Le pipeline utilisera des\\ntechniques de TAL pour lire et r\xe9sumer des documents qui sont sp\xe9cifiquement\\nax\xe9s sur les sujets de rapport de maladie. L'objectif ultime est de permettre au\\nclient de traiter de grandes quantit\xe9s de tels documents en quelques minutes, ce\\nqui aidera \xe0 gagner du temps et \xe0 augmenter l'efficacit\xe9.\\n\\n### Utilisation potentielle (Projet n\xb01)\\n\\n1. Permet une analyse r\xe9trospective des incidents\\n2. QA des donn\xe9es structur\xe9es via une analyse comparative du texte pour\\n   l'analytique des donn\xe9es et les rapports de performance des d\xe9partements\\n   (Exemple actuel)\\n3. Soutien aux revues syst\xe9matiques des incidents pour des analyses\\n   administratives, scientifiques ou strat\xe9giques.\\n4. Combinaison des points 1 \xe0 3 pour un soutien potentiel en temps r\xe9el \xe0 des\\n   parcours possibles.\\n\\nRapport pour le Conseil du Tr\xe9sor sur l'indicateur de r\xe9sultat d\xe9partemental -\\nUne majorit\xe9 (plus de 84 %) des rappels \xe0 haut risque sont \xe9mis avant que la\\nmaladie soit signal\xe9e \xe0 l'ACIA (Agence Canadienne d'Inspection des Aliments).\\n\\n</div>\\n\\n</div>\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### Livrable (Projet n\xb01)\\n\\nComme r\xe9sultat final de ce projet, le client recevra une application web\\nconnect\xe9e \xe0 un mod\xe8le d'apprentissage machine entra\xeen\xe9 et au pipeline.\\nL'application sera capable de traiter un grand nombre de documents anglais ax\xe9s\\nsur les sujets de rapport de maladie.\\n\\n### Phase (Projet n\xb01)\\n\\nActuellement, le projet est en phase de test et de mise en \u0153uvre, o\xf9 diff\xe9rents\\nmod\xe8les sont en cours de d\xe9veloppement pour s'adapter aux donn\xe9es de maladie.\\nSelon les r\xe9sultats, le ChatGPT-3 affin\xe9 a montr\xe9 des r\xe9sultats prometteurs et a\\n\xe9t\xe9 d\xe9ploy\xe9. L'\xe9tape suivante consiste \xe0 finaliser et \xe0 livrer le produit au\\nclient.\\n\\n</div>\\n\\n</div>\\n\\n### Prochaine \xe9tape (Projet n\xb01)\\n\\nLa d\xe9tection de maladie peut \xeatre un tremplin pour \xe9tendre le projet \xe0 un outil\\ng\xe9n\xe9ral de questions-r\xe9ponses IA. Cela est discut\xe9 avec le client Devendra et il\\na montr\xe9 un grand int\xe9r\xeat.\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n![Photo d'une table garnie de six bols contenant un assortiment de charcuteries\\net de viandes diverses.](./img/3.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\n## Projet n\xb02 : Projet de classification de la viande HS (Jan-Nov 2022)\\n\\n### Objectif (Projet n\xb02)\\n\\nUne initiative de classification de texte propuls\xe9e par l'intelligence\\nartificielle est en cours pour automatiser le processus de marquage manuel d'un\\nvolumineux fichier de donn\xe9es HS (_Harmonized System_). L'entr\xe9e du syst\xe8me est\\nla description des produits alimentaires g\xe9n\xe9r\xe9e par l'homme, et la sortie est\\nla cat\xe9gorisation du texte en diff\xe9rentes cat\xe9gories de viande, telles que Cru\\nou Pr\xeat-\xe0-manger, d\xe9termin\xe9e par le mod\xe8le d'IA.\\n\\n### Utilisation potentielle (Projet n\xb02)\\n\\nLe client a sp\xe9cifi\xe9 que leur intention dans ce projet \xe9tait \xe0 des fins de\\nrecherche.\\n\\n</div>\\n\\n</div>\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### M\xe9thodologie (Projet n\xb02)\\n\\nLe projet utilise des techniques de traitement automatique des langues \xe0 la\\npointe de la technologie, en particulier le mod\xe8le BERT (Bidirectional Encoder\\nRepresentations from Transformers), pour analyser efficacement d'\xe9normes volumes\\nde texte. Cela fournira aux parties prenantes pertinentes une compr\xe9hension plus\\nprofonde de leurs donn\xe9es, \xe9liminant le besoin d'examen manuel et de marquage de\\nmilliers d'entr\xe9es. Le r\xe9sultat sera une r\xe9duction substantielle du temps et des\\nefforts n\xe9cessaires pour obtenir un aper\xe7u des donn\xe9es.\\n\\n</div>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### R\xe9sultat (Projet n\xb02)\\n\\nLe client a fourni des donn\xe9es de formation qui ont \xe9t\xe9 utilis\xe9es pour former le\\nmod\xe8le BERT. Le mod\xe8le a r\xe9ussi \xe0 \xe9tiqueter avec pr\xe9cision des cat\xe9gories plus\\nlarges telles que la volaille, le b\u0153uf, le porc et la viande d'alligator\\n(pr\xe9cision de plus de 99 %). Cependant, il a eu du mal \xe0 \xe9tiqueter des\\ncat\xe9gories tr\xe8s sp\xe9cifiques (pr\xe9cision de 80 %) telles que le b\u0153uf cru par\\nrapport au b\u0153uf en conserve car les donn\xe9es de formation manquaient de motifs et\\nde d\xe9tails.\\n\\n</div>\\n\\n</div>\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### Livrable (Projet n\xb02)\\n\\nEn tant que livrable final de ce projet, le client recevra un programme qui peut\\ntraiter leurs demandes d'entr\xe9e. Le programme \xe9tiquettera et g\xe9n\xe9rera un fichier\\n.csv pour le client.\\n\\n</div>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### Prochaine \xe9tape (Projet n\xb02)\\n\\nLe client a mentionn\xe9 un projet potentiel pour la classification des poissons \xe0\\nl'avenir.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n![Capture d'\xe9cran de l'interface de notre logiciel de traduction.](./img/4.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\n## Projet n\xb03 : Application Traducteur Anglais-Fran\xe7ais (Sept 2022 - 2023)\\n\\n### Objectif (Projet n\xb03)\\n\\nL'application Traducteur Ang-Fr Fr-Ang vise \xe0 traduire et r\xe9sumer de mani\xe8re\\ns\xe9curis\xe9e les documents classifi\xe9s sur les serveurs de l'ACIA. Elle vise \xe0\\nr\xe9soudre le manque de protection des donn\xe9es de Google Translate tout en\\nmaintenant le niveau de pr\xe9cision de la traduction de DeepL Translate avec un\\nmod\xe8le d'apprentissage automatique, BERT.\\n\\n### Utilisation Potentielle (Projet n\xb03)\\n\\n1. Traduction rapide pour l'un des documents suivants - .pdf, .docx, .txt, .pptx\\n2. R\xe9sum\xe9 rapide du corpus de texte pour r\xe9duire le temps de lecture manuel\\n\\n</div>\\n\\n</div>\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### Livrable (Projet n\xb03)\\n\\nEn tant que livrable final de ce projet, les clients ayant acc\xe8s au VPN de\\nl'ACIA peuvent utiliser l'application web trouv\xe9e\\n[ici](https://translatorv1.azurewebsites.net/). Le client peut glisser-d\xe9poser,\\nt\xe9l\xe9charger ou taper directement pour obtenir la traduction du document entrant.\\nLa fonction de r\xe9sum\xe9 de texte peut \xeatre utilis\xe9e sur la m\xeame entr\xe9e pour\\nfournir un r\xe9sum\xe9 du document entrant.\\n\\nEssayez le traducteur [ici](https://translatorv1.azurewebsites.net/).\\n\\n</div>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### Phase (Projet n\xb03)\\n\\nD\xe9ploy\xe9 et pr\xeat \xe0 tout moment.\\n\\n### Prochaine \xe9tape (Projet n\xb03)\\n\\nL'application est extensible pour un meilleur mod\xe8le et plus de fonctionnalit\xe9s.\\nComme elle utilise l'application dorsale de ChatGPT, elle peut non seulement\\nr\xe9sumer, mais aussi effectuer de nombreuses autres t\xe2ches.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n## Conclusion\\n\\n![Portrait d'un robot anthropomorphe se touchant le menton dans une pose\\npensive.](./img/5.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\nEn conclusion, le d\xe9veloppement de la technologie du traitement automatique des\\nlangues a inaugur\xe9 une nouvelle \xe8re d'interaction personne-machine, rendant\\npossible pour nous de communiquer avec les machines de mani\xe8re auparavant\\ninimaginable. Avec l'arriv\xe9e de ChatGPT et d'autres mod\xe8les avanc\xe9s de TAL, nous\\navons constat\xe9 d'importantes am\xe9liorations dans la pr\xe9cision et l'efficacit\xe9 des\\ninterfaces conversationnelles, des agents conversationnels et des assistants\\nvirtuels.\\n\\n\xc0 travers les exemples que nous avons explor\xe9s dans cet article, il est clair\\nque la technologie TAL a le potentiel de r\xe9volutionner une large gamme\\nd'industries et d'applications ici \xe0 l'ACIA. En exploitant la puissance du TAL,\\nnous pouvons d\xe9velopper des fa\xe7ons de communiquer avec les utilisateurs et les\\nclients plus efficaces et efficients, ce qui conduit finalement \xe0 de meilleurs\\nr\xe9sultats pour les entreprises et les particuliers.\\n\\nCependant, comme toute nouvelle technologie, il y a aussi des d\xe9fis \xe0 relever.\\nLes pr\xe9occupations \xe9thiques concernant la protection des donn\xe9es et le biais des\\nsyst\xe8mes d'IA sont des consid\xe9rations importantes qui doivent \xeatre soigneusement\\ng\xe9r\xe9es \xe0 mesure que la technologie TAL continue d'\xe9voluer. En outre, la s\xe9curit\xe9\\ndes donn\xe9es est une grande pr\xe9occupation, c'est pourquoi notre \xe9quipe collabore\\n\xe9troitement avec l'\xe9quipe Microsoft pour garantir la s\xe9curit\xe9 et la\\nconfidentialit\xe9 des donn\xe9es trait\xe9es par l'IA.\\n\\nEn m\xeame temps, nous sommes enthousiastes quant aux opportunit\xe9s qui se profilent\\ndans le domaine du TAL. En tant que scientifiques de donn\xe9es, nous nous\\nengageons \xe0 continuer \xe0 affiner et am\xe9liorer ChatGPT et d'autres mod\xe8les de TAL,\\nafin que nous puissions d\xe9velopper des outils encore plus puissants pour\\nsoutenir l'interaction personne-machine et stimuler l'innovation dans un large\\n\xe9ventail d'industries. Nous sommes confiants dans l'avenir du TAL et nous sommes\\nimpatients de faire partie de ce voyage passionnant.\\n\\n</div>\\n\\n</div>\"},{\"id\":\"seed-classification\",\"metadata\":{\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/seed-classification\",\"source\":\"@site/i18n/fr/docusaurus-plugin-content-blog-articles/2024-06-14-seed-classification/2024-06-14-seed-classification.md\",\"title\":\"Classification automatis\xe9e des semences : Contr\xf4le de la qualit\xe9 \xe0 l'aide de la vision par ordinateur\",\"description\":\"Dans cet article, nous motivons le besoin de mod\xe8les de vision par ordinateur pour la classification automatique des esp\xe8ces de semences. Nous d\xe9montrons comment nos mod\xe8les personnalis\xe9s ont obtenu des r\xe9sultats prometteurs en utilisant des images de semences du \xab monde r\xe9el \xbb et nous d\xe9crivons nos orientations futures pour le d\xe9ploiement d'une application facile \xe0 utiliser: SeedID.\",\"date\":\"2024-06-14T00:00:00.000Z\",\"tags\":[{\"inline\":true,\"label\":\"computer vision\",\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/tags/computer-vision\"},{\"inline\":true,\"label\":\"quality\",\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/tags/quality\"},{\"inline\":true,\"label\":\"classification\",\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/tags/classification\"},{\"inline\":true,\"label\":\"AI\",\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/tags/ai\"}],\"readingTime\":12.835,\"hasTruncateMarker\":true,\"authors\":[{\"name\":\"Kiri Stern\",\"title\":\"Stagiaire\",\"url\":\"https://github.com/kiristern\",\"imageURL\":\"https://github.com/kiristern.png\",\"key\":\"kstern\"}],\"frontMatter\":{\"title\":\"Classification automatis\xe9e des semences : Contr\xf4le de la qualit\xe9 \xe0 l'aide de la vision par ordinateur\",\"slug\":\"seed-classification\",\"authors\":[\"kstern\"],\"tags\":[\"computer vision\",\"quality\",\"classification\",\"AI\"],\"hide_table_of_contents\":false,\"description\":\"Dans cet article, nous motivons le besoin de mod\xe8les de vision par ordinateur pour la classification automatique des esp\xe8ces de semences. Nous d\xe9montrons comment nos mod\xe8les personnalis\xe9s ont obtenu des r\xe9sultats prometteurs en utilisant des images de semences du \xab monde r\xe9el \xbb et nous d\xe9crivons nos orientations futures pour le d\xe9ploiement d'une application facile \xe0 utiliser: SeedID.\"},\"unlisted\":false,\"prevItem\":{\"title\":\"Projets de traitement automatique des langues (TAL) utilisant ChatGPT et plus\",\"permalink\":\"/ai-cfia-ia-acia.github.io/fr/articles/nlp-projects-chat-gpt\"}},\"content\":\"Dans cet article, nous motivons le besoin de mod\xe8les de vision par ordinateur\\npour la classification automatique des esp\xe8ces de semences. Nous d\xe9montrons\\ncomment nos mod\xe8les personnalis\xe9s ont obtenu des r\xe9sultats prometteurs en\\nutilisant des images de semences du \xab monde r\xe9el \xbb et nous d\xe9crivons nos\\norientations futures pour le d\xe9ploiement d'une application facile \xe0 utiliser:\\nSeedID.\\n\\n\x3c!-- truncate --\x3e\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n## Introduction\\n\\n![1](./img/1.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\nL'intelligence artificielle (IA) pour la vision par ordinateur a r\xe9volutionn\xe9\\nnotre capacit\xe9 \xe0 obtenir des informations \xe0 partir des images. En associant des\\nalgorithmes d'IA \xe0 l'analyse de donn\xe9es en format de photographes, la vision par\\nordinateur a r\xe9volutionn\xe9 de nombreux secteurs, transformant la mani\xe8re dont\\nnous interagissons avec les machines. Les avanc\xe9es en recherche en vision par\\nordinateur et leur int\xe9gration en industrie ont cr\xe9\xe9 une opportunit\xe9 sans\\npr\xe9c\xe9dent d'am\xe9liorer l'efficacit\xe9 et la pr\xe9cision dans des domaines tels que le\\ncontr\xf4le de la qualit\xe9, la d\xe9tection et la classification d'objets, la\\nsurveillance, et bien plus encore.\\n\\n### Notre mission\\n\\nAu laboratoire d'IA de l'ACIA, nous exploitons le plein potentiel des mod\xe8les de\\nvision par ordinateur. Notre \xe9quipe d\xe9vou\xe9e de scientifiques des donn\xe9es\\nexploite la puissance de cette technologie transformatrice et d\xe9veloppe des\\nsolutions personnalis\xe9es adapt\xe9es aux besoins sp\xe9cifiques de nos clients.\\n\\nIci, nous motivons le besoin de mod\xe8les de vision par ordinateur pour la\\nclassification automatique des esp\xe8ces de semences. Nous d\xe9montrons comment nos\\nmod\xe8les personnalis\xe9s ont obtenu des r\xe9sultats prometteurs en utilisant des\\nimages de semences du \xab monde r\xe9el \xbb et nous d\xe9crivons nos orientations futures\\npour le d\xe9ploiement d'une application facile \xe0 utiliser: SeedID.\\n\\nAu laboratoire d'IA de l'ACIA, nous nous effor\xe7ons non seulement de repousser\\nles fronti\xe8res de la science en exploitant des mod\xe8les de pointe, mais aussi de\\nrendre ces services accessibles aux autres et de favoriser le partage des\\nconnaissances, pour continuer le progr\xe8s de notre soci\xe9t\xe9 canadienne.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n## Importance de l'industrie semenci\xe8re Canadienne\\n\\n![2](./img/2.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\nL'industrie semenci\xe8re canadienne s'est forg\xe9 une r\xe9putation mondiale dans la\\nproduction, le traitement et l'exportation de semences de qualit\xe9 sup\xe9rieure\\npour un large \xe9ventail de cultures. Son succ\xe8s est d\xfb \xe0 l'engagement du Canada\\nen faveur de l'innovation et du d\xe9veloppement de technologies de pointe, ce qui\\nlui permet de fournir des produits de haute qualit\xe9 qui r\xe9pondent aux besoins\\nnationaux et internationaux.\\n\\nNaturellement, une collaboration entre le groupe de chercheurs sur la science\\ndes semences du Canada et le laboratoire d'IA a \xe9t\xe9 mise en place pour maintenir\\nle r\xf4le du Canada en tant que responsable r\xe9put\xe9 de l'industrie mondiale des\\nsemences.\\n\\n### Contexte : Contr\xf4le de la qualit\xe9\\n\\nLa qualit\xe9 d'une culture de semences est refl\xe9t\xe9e dans un rapport de classement,\\no\xf9 la note finale refl\xe8te le degr\xe9 de conformit\xe9 de la culture avec les normes\\nde qualit\xe9 minimales du Canada. Les facteurs utilis\xe9s pour d\xe9terminer la qualit\xe9\\nde la r\xe9colte comprennent, entre autres l'analyse de la puret\xe9 et le pourcentage\\nde germination et de maladie des semences. Le taux de germination de la graine\\net sa r\xe9sistance aux maladies peuvent donner une id\xe9e de l'\xe9tat de sant\xe9 g\xe9n\xe9ral\\nde la graine. L'\xe9valuation de la puret\xe9 du contenu est essentielle pour\\ns'assurer que la r\xe9colte contient une forte concentration de la mati\xe8re premi\xe8re\\nsouhait\xe9e et qu'elle est exempte de contaminants, tels que les graines d'autres\\ncultures ou les graines de mauvaises herbes.\\n\\n### Motivation\\n\\nActuellement, l'\xe9valuation de la qualit\xe9 d'une r\xe9colte est effectu\xe9e\\nmanuellement par des experts humains. Toutefois, ce processus est fastidieux et\\nchronophage. Au laboratoire d'IA, nous utilisons des mod\xe8les avanc\xe9s de vision\\npar ordinateur pour classer automatiquement les esp\xe8ces de semences \xe0 partir\\nd'images, ce qui rend ce processus plus efficace et plus fiable.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n<div style={{textAlign: 'center'}}>\\n\\n## Surmonter les limitations gr\xe2ce \xe0 la vision par ordinateur\\n\\n</div>\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### P\xe9nurie d'analystes\\n\\n![3](./img/3.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\nLa p\xe9nurie d'analystes experts en semences constitue un d\xe9fi important pour\\nl'industrie des semences. La demande d'\xe9valuation pr\xe9cise et efficace de la\\nqualit\xe9 des cultures augmente, mais la disponibilit\xe9 d'analystes hautement\\nqualifi\xe9s est limit\xe9e. Cette p\xe9nurie peut entra\xeener des retards dans les\\n\xe9valuations de la qualit\xe9, des obstacles dans la production et des erreurs\\npotentielles dans la classification des semences.\\n\\n#### La contribution de l'IA (P\xe9nurie d'analystes)\\n\\nLa vision par ordinateur constitue une solution prometteuse pour rem\xe9dier \xe0\\ncette p\xe9nurie en analysant et en classant efficacement les semences avec une\\nintervention humaine minimale. Ces mod\xe8les peuvent \xeatre entra\xeen\xe9s sur de vastes\\nensembles de donn\xe9es d'images de semences, ce qui leur permet de reconna\xeetre des\\nmotifs et des tendances, de d\xe9tecter des variations et de classer les semences\\nen fonction de param\xe8tres de qualit\xe9 pr\xe9d\xe9termin\xe9s.\\n\\nEn adoptant des mod\xe8les de vision par ordinateur pour l'analyse des semences,\\nles entreprises et les institutions agricoles peuvent all\xe9ger le fardeau de la\\np\xe9nurie d'experts, rationaliser leurs op\xe9rations et am\xe9liorer la productivit\xe9\\nglobale. Cette technologie permet au Canada de r\xe9pondre \xe0 la demande croissante\\nd'\xe9valuation de la qualit\xe9 des semences, ce qui se traduit par une am\xe9lioration\\ndu rendement des cultures, une s\xe9lection fiable des semences et, en fin de\\ncompte, des pratiques agricoles durables.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### Contraintes temporelles\\n\\n![4](./img/4.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\nL'analyse manuelle des semences est un processus qui prend du temps et qui pose\\ndes probl\xe8mes en termes d'efficacit\xe9 et de rapidit\xe9. La classification des\\nsemences prend du temps en raison de la complexit\xe9 et du volume des \xe9chantillons\\nde semences. Les experts humains doivent consacrer beaucoup de temps et\\nd'efforts \xe0 l'inspection visuelle et \xe0 la classification de chaque graine, ce\\nqui entra\xeene des goulets d'\xe9tranglement et des retards potentiels dans le\\nprocessus de contr\xf4le de la qualit\xe9.\\n\\n#### La contribution de l'IA (Contraintes temporelles)\\n\\nComputer vision models offer a solution to these bottlenecks by automating the\\nanalysis. By rapidly processing large volumes of seed samples, they\\nsignificantly reduce the time required for classification enabling faster and\\nmore efficient seed classification while maintaining accuracy and consistency.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### Le co\xfbt\\n\\n![5](./img/5.png)\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\nLe d\xe9veloppement d'une expertise dans l'analyse des semences exige une formation\\napprofondie et l'exposition \xe0 divers \xe9chantillons de semences, ce qui peut\\ns'av\xe9rer \xe0 la fois co\xfbteux et chronophage. Les co\xfbts associ\xe9s et le temps\\nn\xe9cessaire pour former des analystes experts comprennent non seulement les\\nprogrammes de formation, mais aussi les ressources requises pour l'exp\xe9rience\\npratique. Le temps n\xe9cessaire aux analystes pour acqu\xe9rir les comp\xe9tences et\\nl'exp\xe9rience requises peut \xeatre long, ce qui aggrave encore la p\xe9nurie de\\nprofessionnels qualifi\xe9s.\\n\\n#### La contribution de l'IA (Le co\xfbt)\\n\\nLes mod\xe8les de vision par ordinateur peuvent offrir une approche plus \xe9volutive\\net plus efficace de l'analyse des semences, en att\xe9nuant les co\xfbts et les\\ncontraintes de temps associ\xe9s \xe0 la formation d'analystes experts. Les mod\xe8les\\npeuvent \xeatre entra\xeen\xe9s sur de vastes ensembles de donn\xe9es d'images de semences,\\nce qui \xe9limine la n\xe9cessit\xe9 d'une formation humaine approfondie. En outre, les\\nmod\xe8les de vision par ordinateur peuvent apprendre et s'am\xe9liorer\\ncontinuellement au fil du temps, s'adaptant rapidement aux nouvelles vari\xe9t\xe9s de\\nsemences et am\xe9liorant leur pr\xe9cision. En outre, ils \xe9liminent les biais\\nsubjectifs qui peuvent r\xe9sulter de l'interpr\xe9tation humaine, fournissant ainsi\\nune \xe9valuation objective et normalis\xe9e de la qualit\xe9 des semences.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n<div style={{textAlign: 'center', fontStyle: 'italic'}}>\\n\\nEn tirant parti de la puissance de la vision par ordinateur, l'industrie des\\nsemences peut surmonter les limites li\xe9es \xe0 la p\xe9nurie de main-d'\u0153uvre, aux\\nco\xfbts de formation et aux contraintes de temps, ce qui permet une analyse plus\\nrapide et plus efficace des semences.\\n\\n</div>\\n\\n---\\n\\n## Objectif : classification automatique des esp\xe8ces de semences\\n\\nCe projet vise \xe0 d\xe9velopper et \xe0 d\xe9ployer un cadre de vision par ordinateur pour\\nla classification des esp\xe8ces de semences. En automatisant ce processus de\\nclassification, nous serons en mesure de rationaliser et d'acc\xe9l\xe9rer\\nl'\xe9valuation de la qualit\xe9 des cultures. Nous d\xe9veloppons des algorithmes\\navanc\xe9s et des techniques d'apprentissage profond, tout en garantissant une\\n\xe9valuation impartiale et efficace de la qualit\xe9 des cultures, ouvrant ainsi la\\nvoie \xe0 de meilleures pratiques agricoles.\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n![6](./img/6.png) *Source d'image: VideometerLab*\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\n## Projet #1: Videometer\\n\\nDans ce projet, nous utilisions un mod\xe8le de vision par ordinateur de type\\nr\xe9seau neuronal convolutif (CNN) pour \xe9valuer la puret\xe9 du contenu, en\\nidentifiant et en classant les esp\xe8ces de semences souhait\xe9es par rapport aux\\nesp\xe8ces de semences non souhait\xe9es.\\n\\nNous avions r\xe9ussi \xe0 identifier la contamination par trois esp\xe8ces de mauvaises\\nherbes diff\xe9rentes dans un m\xe9lange de s\xe9lection d'\xe9chantillons de bl\xe9.\\n\\nNotre mod\xe8le \xe9tait modifi\xe9 pour accepter des images multispectrales \xe0 haute\\nr\xe9solution de 19 canaux et atteignait une pr\xe9cision sup\xe9rieure \xe0 95 % sur les\\nimages r\xe9serv\xe9es \xe0 l'\xe9valuation.\\n\\nNous avions d\u2019autant plus explor\xe9 le potentiel de notre mod\xe8le pour la\\nclassification de nouvelles esp\xe8ces, en injectant cinq nouvelles esp\xe8ces de\\ncanola dans l'ensemble de donn\xe9es. Les r\xe9sultats pr\xe9liminaires de cette\\nexp\xe9rience montraient une pr\xe9cision d'environ 93 % sur les images r\xe9serves. Ces\\nr\xe9sultats soulignent le potentiel de notre mod\xe8le pour une utilisation continue,\\nm\xeame si de nouvelles esp\xe8ces de semences sont introduites.\\n\\n</div>\\n\\n</div>\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### Donn\xe9es (Projet #1)\\n\\n![7](./img/7.png) *Image multispectrale \xe0 19 canaux , Carduus nutans*\\n\\nNotre CNN a \xe9t\xe9 entra\xeen\xe9 \xe0 classer les esp\xe8ces suivantes :\\n\\n- Trois esp\xe8ces diff\xe9rentes de chardons des champs (mauvaises herbes):\\n  - Cirsium arvense\\n  - Carduus nutans\\n  - Cirsium vulgare\\n- Une esp\xe8ce de bl\xe9:\\n  - Triticum aestivum subspecies aestivum\\n- Cinq esp\xe8ces diff\xe9rentes de Canola:\\n  - Brassica napus subspecies napus\\n  - Brassica juncea\\n  - Brassica juncea (yellow)\\n  - Brassica rapa subspecies oleifera\\n  - Brassica rapa subspecies oleifera (brown)\\n\\n</div>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### R\xe9sultats (Projet #1)\\n\\n![8](./img/8.png) *Pr\xe9cision du mod\xe8le de >95%*\\n\\nNous montrons que notre mod\xe8le est capable d'identifier correctement chaque\\nesp\xe8ce de graine avec une pr\xe9cision de plus de 95 %.\\n\\nDe plus, lorsque les trois graines de chardon des champs ont \xe9t\xe9 int\xe9gr\xe9es avec\\nle bl\xe9, le mod\xe8le a atteint une pr\xe9cision moyenne de 99,64 % sur 360 graines.\\nCela d\xe9montre la robustesse du mod\xe8le et sa capacit\xe9 \xe0 identifier de nouvelles\\nimages.\\n\\nEnfin, nous introduisions cinq nouvelles esp\xe8ces de canola et \xe9valuions les\\nperformances de notre mod\xe8le. Les r\xe9sultats pr\xe9liminaires montraient une\\npr\xe9cision d'environ 93 % sur les images r\xe9serv\xe9es \xe0 l'\xe9valuation.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n![9](./img/9.png) *Source d'image: TAGARNO microscope*\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\n## Projet #2: Tagarno\\n\\nDans ce projet, le cadre du mod\xe8le de vision par ordinateur suivait deux \xe9tapes\\npour identifier un total de 15 esp\xe8ces de semences diff\xe9rentes \xe0 diff\xe9rents\\nniveaux d'agrandissement.\\n\\nEn premier, un mod\xe8le CNN identifiait chaque occurrence de semence dans l'image.\\nEnsuite, un mod\xe8le \xab transformateur de vision \xbb \xe9tait utilis\xe9 pour classifier\\nchaque esp\xe8ce.\\n\\nNous effectuions plusieurs \xe9tudes d'ablation en entra\xeenant sur un profil de\\ngrossissement puis en \xe9valuant sur des semences provenant d'un ensemble de\\ngrossissement diff\xe9rent. Nous pr\xe9sentons des r\xe9sultats pr\xe9liminaires avec une\\npr\xe9cision de plus de 90% pour tous les niveaux de grossissement.\\n\\n</div>\\n\\n</div>\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### Donn\xe9es (Projet #2)\\n\\nTrois niveaux de grossissement diff\xe9rents ont \xe9t\xe9 utilis\xe9s pour les 15 esp\xe8ces\\nsuivantes :\\n\\n- Ambrosia artemisiifolia\\n- Ambrosia trifida\\n- Ambrosia psilostachya\\n- Brassica junsea\\n- Brassica napus\\n- Bromus hordeaceus\\n- Bromus japonicus\\n- Bromus secalinus\\n- Carduus nutans\\n- Cirsium arvense\\n- Cirsium vulgare\\n- Lolium temulentum\\n- Solanum carolinense\\n- Solanum nigrum\\n- Solanum rostratum\\n\\n![10](./img/10.png) *Niveau de grossissement: 2 semences/image, Bromus\\nSecalinus*\\n\\n![11](./img/11.png) *Niveau de grossissement: 8 semences/image, Brassica Junsea*\\n\\nLe niveau de grossissement est indiqu\xe9 par le nombre total de graines pr\xe9sentes\\ndans l'image, soit : 2, 8 ou 15 semences par image.\\n\\n</div>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n### R\xe9sultats (Projet #2)\\n\\n![12](./img/12.png) *Performance du mod\xe8le*\\n\\nAfin d'\xe9tablir un protocole d'enregistrement d'images, nous entra\xeenions des\\nmod\xe8les distincts \xe0 partir d'un sous-ensemble de donn\xe9es \xe0 chaque niveau de\\ngrossissement, puis nous \xe9valuons les performances du mod\xe8le sur l'ensemble des\\nniveaux de grossissement.\\n\\nLes r\xe9sultats pr\xe9liminaires d\xe9montrent la performance du mod\xe8le \xe0 identifier\\ncorrectement les esp\xe8ces de semences \xe0 travers les grossissements avec une\\npr\xe9cision de plus de 90%.\\n\\nCela d\xe9montre le potentiel du mod\xe8le \xe0 classifier avec pr\xe9cision des nouveaux\\nimages \xe0 diff\xe9rents niveaux de grossissement.\\n\\n### D\xe9fis\\n\\nNous reconnaissons les d\xe9fis associ\xe9s \xe0 l'enregistrement des images par\\ndiff\xe9rentes m\xe9thodes et nous nous effor\xe7ons de continuer \xe0 am\xe9liorer la\\nrobustesse de notre mod\xe8le en incorporant plus d'esp\xe8ces de graines, en\\nam\xe9liorant la g\xe9n\xe9ralisation \xe0 travers les niveaux de grossissement, et en\\nr\xe9duisant notre cadre de mod\xe8le de 2-\xe9tapes en 1 pour une meilleure efficacit\xe9.\\n\\n</div>\\n\\n</div>\\n\\n---\\n\\n## Prochaines \xe9tapes : D\xe9ploiement\\n\\nAvec la r\xe9ussite de la classification des images de semences par vision par\\nordinateur, notre prochain objectif est de d\xe9ployer notre mod\xe8le dans une\\napplication source ouverte : SeedID. Notre but est de fournir une plateforme\\nintuitive et accessible qui permet aux utilisateurs de tous niveaux d'expertise\\nde classifier facilement et avec pr\xe9cision les \xe9chantillons de semences.\\n\\nL'objectif est de simplifier le processus de classification des semences et\\nd'\xe9liminer les obstacles techniques qui pourraient entraver son utilisation.\\n\\nNotre strat\xe9gie de d\xe9ploiement comprend \xe9galement des tests approfondis et de\\nvalidation pour assurer la fiabilit\xe9 et la pr\xe9cision des r\xe9sultats de\\nclassification des semences. Une \xe9valuation rigoureuse nous permettra d'ajuster\\nle mod\xe8le et de traiter les limites ou biais potentiels, garantissant des\\nperformances robustes pour diff\xe9rents types et conditions de semences.\\n\\nNotre vision est de donner aux utilisateurs un moyen d'acc\xe9der aux mod\xe8les de\\nvision par ordinateurs d'une mani\xe8re transparente. En d\xe9ployant cette\\napplication \xe0 source ouverte, nous favorisons l'efficacit\xe9 et l'accessibilit\xe9\\ndans l'analyse des semences pour avancer des pratiques agricoles.\\n\\n---\\n\\n<div style={{display: 'flex', justifyContent: 'space-between'}}>\\n\\n<div style={{flex: 1, marginRight: '10px'}}>\\n\\n## Conclusion\\n\\n![13](./img/13.png) *Connecter les id\xe9es*\\n\\n</div>\\n\\n<div style={{flex: 2, marginRight: '10px'}}>\\n\\nLe projet de classification des semences est un exemple de la collaboration\\nfructueuse et continue entre le laboratoire d'IA et le groupe de la science des\\nsemences de l'ACIA. En mettant en commun nos connaissances et nos expertise\\nrespectives, nos deux \xe9quipes contribuent \xe0 l'avancement de l'industrie\\nsemenci\xe8re canadienne.\\n\\nNous d\xe9montrons le succ\xe8s de l'utilisation d'apprentissage profond en tant\\nqu'outils pour les t\xe2ches de traitement d'images et nous d\xe9montrons leur\\npotentiel pour am\xe9liorer la pr\xe9cision et l'efficacit\xe9 de l'\xe9valuation de la\\nqualit\xe9 des cultures, ce qui profitera \xe0 la fois \xe0 l'industrie agricole et aux\\nconsommateurs.\\n\\n### L'avenir : Appel \xe0 collaboration\\n\\nEn tant que scientifiques de donn\xe9es, nous reconnaissons l'importance de la\\ncollaboration et nous nous engageons \xe0 respecter les principes de la science\\nouverte. Notre objectif est de promouvoir la transparence et l'engagement par le\\npartage ouvert avec le public.\\n\\nEn rendant notre application \xe0 source ouverte, nous invitons nos coll\xe8gues, les\\nchercheurs, les experts en semences et les d\xe9veloppeurs \xe0 contribuer \xe0 son\\nam\xe9lioration et \xe0 sa personnalisation. Cette approche collaborative favorise\\nl'innovation, permettant \xe0 la communaut\xe9 d'am\xe9liorer collectivement les\\ncapacit\xe9s de l'application SeedID et de r\xe9pondre aux exigences sp\xe9cifiques du\\ndomaine.\\n\\n</div>\\n\\n</div>\"}]}}")}}]);