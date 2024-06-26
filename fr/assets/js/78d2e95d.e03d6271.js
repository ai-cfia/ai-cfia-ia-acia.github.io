"use strict";(self.webpackChunkai_cfia_ia_acia=self.webpackChunkai_cfia_ia_acia||[]).push([[817],{2786:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(4848),t=n(8453);const a={title:"Classification automatis\xe9e des semences : Contr\xf4le de la qualit\xe9 \xe0 l'aide de la vision par ordinateur",slug:"seed-classification",authors:["kstern"],tags:["computer vision","quality","classification","AI"],hide_table_of_contents:!1,description:"Dans cet article, nous motivons le besoin de mod\xe8les de vision par ordinateur pour la classification automatique des esp\xe8ces de semences. Nous d\xe9montrons comment nos mod\xe8les personnalis\xe9s ont obtenu des r\xe9sultats prometteurs en utilisant des images de semences du \xab monde r\xe9el \xbb et nous d\xe9crivons nos orientations futures pour le d\xe9ploiement d'une application facile \xe0 utiliser: SeedID."},r=void 0,l={permalink:"/ai-cfia-ia-acia.github.io/fr/articles/seed-classification",source:"@site/i18n/fr/docusaurus-plugin-content-blog-articles/2024-06-14-seed-classification/2024-06-14-seed-classification.md",title:"Classification automatis\xe9e des semences : Contr\xf4le de la qualit\xe9 \xe0 l'aide de la vision par ordinateur",description:"Dans cet article, nous motivons le besoin de mod\xe8les de vision par ordinateur pour la classification automatique des esp\xe8ces de semences. Nous d\xe9montrons comment nos mod\xe8les personnalis\xe9s ont obtenu des r\xe9sultats prometteurs en utilisant des images de semences du \xab monde r\xe9el \xbb et nous d\xe9crivons nos orientations futures pour le d\xe9ploiement d'une application facile \xe0 utiliser: SeedID.",date:"2024-06-14T00:00:00.000Z",tags:[{inline:!0,label:"computer vision",permalink:"/ai-cfia-ia-acia.github.io/fr/articles/tags/computer-vision"},{inline:!0,label:"quality",permalink:"/ai-cfia-ia-acia.github.io/fr/articles/tags/quality"},{inline:!0,label:"classification",permalink:"/ai-cfia-ia-acia.github.io/fr/articles/tags/classification"},{inline:!0,label:"AI",permalink:"/ai-cfia-ia-acia.github.io/fr/articles/tags/ai"}],readingTime:12.835,hasTruncateMarker:!0,authors:[{name:"Kiri Stern",title:"Stagiaire",url:"https://github.com/kiristern",imageURL:"https://github.com/kiristern.png",key:"kstern"}],frontMatter:{title:"Classification automatis\xe9e des semences : Contr\xf4le de la qualit\xe9 \xe0 l'aide de la vision par ordinateur",slug:"seed-classification",authors:["kstern"],tags:["computer vision","quality","classification","AI"],hide_table_of_contents:!1,description:"Dans cet article, nous motivons le besoin de mod\xe8les de vision par ordinateur pour la classification automatique des esp\xe8ces de semences. Nous d\xe9montrons comment nos mod\xe8les personnalis\xe9s ont obtenu des r\xe9sultats prometteurs en utilisant des images de semences du \xab monde r\xe9el \xbb et nous d\xe9crivons nos orientations futures pour le d\xe9ploiement d'une application facile \xe0 utiliser: SeedID."},unlisted:!1},o={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Notre mission",id:"notre-mission",level:3},{value:"Importance de l&#39;industrie semenci\xe8re Canadienne",id:"importance-de-lindustrie-semenci\xe8re-canadienne",level:2},{value:"Contexte : Contr\xf4le de la qualit\xe9",id:"contexte--contr\xf4le-de-la-qualit\xe9",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Surmonter les limitations gr\xe2ce \xe0 la vision par ordinateur",id:"surmonter-les-limitations-gr\xe2ce-\xe0-la-vision-par-ordinateur",level:2},{value:"P\xe9nurie d&#39;analystes",id:"p\xe9nurie-danalystes",level:3},{value:"La contribution de l&#39;IA (P\xe9nurie d&#39;analystes)",id:"la-contribution-de-lia-p\xe9nurie-danalystes",level:4},{value:"Contraintes temporelles",id:"contraintes-temporelles",level:3},{value:"La contribution de l&#39;IA (Contraintes temporelles)",id:"la-contribution-de-lia-contraintes-temporelles",level:4},{value:"Le co\xfbt",id:"le-co\xfbt",level:3},{value:"La contribution de l&#39;IA (Le co\xfbt)",id:"la-contribution-de-lia-le-co\xfbt",level:4},{value:"Objectif : classification automatique des esp\xe8ces de semences",id:"objectif--classification-automatique-des-esp\xe8ces-de-semences",level:2},{value:"Projet #1: Videometer",id:"projet-1-videometer",level:2},{value:"Donn\xe9es (Projet #1)",id:"donn\xe9es-projet-1",level:3},{value:"R\xe9sultats (Projet #1)",id:"r\xe9sultats-projet-1",level:3},{value:"Projet #2: Tagarno",id:"projet-2-tagarno",level:2},{value:"Donn\xe9es (Projet #2)",id:"donn\xe9es-projet-2",level:3},{value:"R\xe9sultats (Projet #2)",id:"r\xe9sultats-projet-2",level:3},{value:"D\xe9fis",id:"d\xe9fis",level:3},{value:"Prochaines \xe9tapes : D\xe9ploiement",id:"prochaines-\xe9tapes--d\xe9ploiement",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"L&#39;avenir : Appel \xe0 collaboration",id:"lavenir--appel-\xe0-collaboration",level:3}];function c(e){const s={em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Dans cet article, nous motivons le besoin de mod\xe8les de vision par ordinateur\npour la classification automatique des esp\xe8ces de semences. Nous d\xe9montrons\ncomment nos mod\xe8les personnalis\xe9s ont obtenu des r\xe9sultats prometteurs en\nutilisant des images de semences du \xab monde r\xe9el \xbb et nous d\xe9crivons nos\norientations futures pour le d\xe9ploiement d'une application facile \xe0 utiliser:\nSeedID."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h2,{id:"introduction",children:"Introduction"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"1",src:n(6308).A+"",width:"1365",height:"1365"})})]}),(0,i.jsxs)("div",{style:{flex:2,marginRight:"10px"},children:[(0,i.jsx)(s.p,{children:"L'intelligence artificielle (IA) pour la vision par ordinateur a r\xe9volutionn\xe9\nnotre capacit\xe9 \xe0 obtenir des informations \xe0 partir des images. En associant des\nalgorithmes d'IA \xe0 l'analyse de donn\xe9es en format de photographes, la vision par\nordinateur a r\xe9volutionn\xe9 de nombreux secteurs, transformant la mani\xe8re dont\nnous interagissons avec les machines. Les avanc\xe9es en recherche en vision par\nordinateur et leur int\xe9gration en industrie ont cr\xe9\xe9 une opportunit\xe9 sans\npr\xe9c\xe9dent d'am\xe9liorer l'efficacit\xe9 et la pr\xe9cision dans des domaines tels que le\ncontr\xf4le de la qualit\xe9, la d\xe9tection et la classification d'objets, la\nsurveillance, et bien plus encore."}),(0,i.jsx)(s.h3,{id:"notre-mission",children:"Notre mission"}),(0,i.jsx)(s.p,{children:"Au laboratoire d'IA de l'ACIA, nous exploitons le plein potentiel des mod\xe8les de\nvision par ordinateur. Notre \xe9quipe d\xe9vou\xe9e de scientifiques des donn\xe9es\nexploite la puissance de cette technologie transformatrice et d\xe9veloppe des\nsolutions personnalis\xe9es adapt\xe9es aux besoins sp\xe9cifiques de nos clients."}),(0,i.jsx)(s.p,{children:"Ici, nous motivons le besoin de mod\xe8les de vision par ordinateur pour la\nclassification automatique des esp\xe8ces de semences. Nous d\xe9montrons comment nos\nmod\xe8les personnalis\xe9s ont obtenu des r\xe9sultats prometteurs en utilisant des\nimages de semences du \xab monde r\xe9el \xbb et nous d\xe9crivons nos orientations futures\npour le d\xe9ploiement d'une application facile \xe0 utiliser: SeedID."}),(0,i.jsx)(s.p,{children:"Au laboratoire d'IA de l'ACIA, nous nous effor\xe7ons non seulement de repousser\nles fronti\xe8res de la science en exploitant des mod\xe8les de pointe, mais aussi de\nrendre ces services accessibles aux autres et de favoriser le partage des\nconnaissances, pour continuer le progr\xe8s de notre soci\xe9t\xe9 canadienne."})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h2,{id:"importance-de-lindustrie-semenci\xe8re-canadienne",children:"Importance de l'industrie semenci\xe8re Canadienne"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"2",src:n(959).A+"",width:"400",height:"579"})})]}),(0,i.jsxs)("div",{style:{flex:2,marginRight:"10px"},children:[(0,i.jsx)(s.p,{children:"L'industrie semenci\xe8re canadienne s'est forg\xe9 une r\xe9putation mondiale dans la\nproduction, le traitement et l'exportation de semences de qualit\xe9 sup\xe9rieure\npour un large \xe9ventail de cultures. Son succ\xe8s est d\xfb \xe0 l'engagement du Canada\nen faveur de l'innovation et du d\xe9veloppement de technologies de pointe, ce qui\nlui permet de fournir des produits de haute qualit\xe9 qui r\xe9pondent aux besoins\nnationaux et internationaux."}),(0,i.jsx)(s.p,{children:"Naturellement, une collaboration entre le groupe de chercheurs sur la science\ndes semences du Canada et le laboratoire d'IA a \xe9t\xe9 mise en place pour maintenir\nle r\xf4le du Canada en tant que responsable r\xe9put\xe9 de l'industrie mondiale des\nsemences."}),(0,i.jsx)(s.h3,{id:"contexte--contr\xf4le-de-la-qualit\xe9",children:"Contexte : Contr\xf4le de la qualit\xe9"}),(0,i.jsx)(s.p,{children:"La qualit\xe9 d'une culture de semences est refl\xe9t\xe9e dans un rapport de classement,\no\xf9 la note finale refl\xe8te le degr\xe9 de conformit\xe9 de la culture avec les normes\nde qualit\xe9 minimales du Canada. Les facteurs utilis\xe9s pour d\xe9terminer la qualit\xe9\nde la r\xe9colte comprennent, entre autres l'analyse de la puret\xe9 et le pourcentage\nde germination et de maladie des semences. Le taux de germination de la graine\net sa r\xe9sistance aux maladies peuvent donner une id\xe9e de l'\xe9tat de sant\xe9 g\xe9n\xe9ral\nde la graine. L'\xe9valuation de la puret\xe9 du contenu est essentielle pour\ns'assurer que la r\xe9colte contient une forte concentration de la mati\xe8re premi\xe8re\nsouhait\xe9e et qu'elle est exempte de contaminants, tels que les graines d'autres\ncultures ou les graines de mauvaises herbes."}),(0,i.jsx)(s.h3,{id:"motivation",children:"Motivation"}),(0,i.jsx)(s.p,{children:"Actuellement, l'\xe9valuation de la qualit\xe9 d'une r\xe9colte est effectu\xe9e\nmanuellement par des experts humains. Toutefois, ce processus est fastidieux et\nchronophage. Au laboratoire d'IA, nous utilisons des mod\xe8les avanc\xe9s de vision\npar ordinateur pour classer automatiquement les esp\xe8ces de semences \xe0 partir\nd'images, ce qui rend ce processus plus efficace et plus fiable."})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(s.h2,{id:"surmonter-les-limitations-gr\xe2ce-\xe0-la-vision-par-ordinateur",children:"Surmonter les limitations gr\xe2ce \xe0 la vision par ordinateur"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h3,{id:"p\xe9nurie-danalystes",children:"P\xe9nurie d'analystes"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"3",src:n(4630).A+"",width:"319",height:"213"})})]}),(0,i.jsxs)("div",{style:{flex:2,marginRight:"10px"},children:[(0,i.jsx)(s.p,{children:"La p\xe9nurie d'analystes experts en semences constitue un d\xe9fi important pour\nl'industrie des semences. La demande d'\xe9valuation pr\xe9cise et efficace de la\nqualit\xe9 des cultures augmente, mais la disponibilit\xe9 d'analystes hautement\nqualifi\xe9s est limit\xe9e. Cette p\xe9nurie peut entra\xeener des retards dans les\n\xe9valuations de la qualit\xe9, des obstacles dans la production et des erreurs\npotentielles dans la classification des semences."}),(0,i.jsx)(s.h4,{id:"la-contribution-de-lia-p\xe9nurie-danalystes",children:"La contribution de l'IA (P\xe9nurie d'analystes)"}),(0,i.jsx)(s.p,{children:"La vision par ordinateur constitue une solution prometteuse pour rem\xe9dier \xe0\ncette p\xe9nurie en analysant et en classant efficacement les semences avec une\nintervention humaine minimale. Ces mod\xe8les peuvent \xeatre entra\xeen\xe9s sur de vastes\nensembles de donn\xe9es d'images de semences, ce qui leur permet de reconna\xeetre des\nmotifs et des tendances, de d\xe9tecter des variations et de classer les semences\nen fonction de param\xe8tres de qualit\xe9 pr\xe9d\xe9termin\xe9s."}),(0,i.jsx)(s.p,{children:"En adoptant des mod\xe8les de vision par ordinateur pour l'analyse des semences,\nles entreprises et les institutions agricoles peuvent all\xe9ger le fardeau de la\np\xe9nurie d'experts, rationaliser leurs op\xe9rations et am\xe9liorer la productivit\xe9\nglobale. Cette technologie permet au Canada de r\xe9pondre \xe0 la demande croissante\nd'\xe9valuation de la qualit\xe9 des semences, ce qui se traduit par une am\xe9lioration\ndu rendement des cultures, une s\xe9lection fiable des semences et, en fin de\ncompte, des pratiques agricoles durables."})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h3,{id:"contraintes-temporelles",children:"Contraintes temporelles"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"4",src:n(809).A+"",width:"400",height:"215"})})]}),(0,i.jsxs)("div",{style:{flex:2,marginRight:"10px"},children:[(0,i.jsx)(s.p,{children:"L'analyse manuelle des semences est un processus qui prend du temps et qui pose\ndes probl\xe8mes en termes d'efficacit\xe9 et de rapidit\xe9. La classification des\nsemences prend du temps en raison de la complexit\xe9 et du volume des \xe9chantillons\nde semences. Les experts humains doivent consacrer beaucoup de temps et\nd'efforts \xe0 l'inspection visuelle et \xe0 la classification de chaque graine, ce\nqui entra\xeene des goulets d'\xe9tranglement et des retards potentiels dans le\nprocessus de contr\xf4le de la qualit\xe9."}),(0,i.jsx)(s.h4,{id:"la-contribution-de-lia-contraintes-temporelles",children:"La contribution de l'IA (Contraintes temporelles)"}),(0,i.jsx)(s.p,{children:"Computer vision models offer a solution to these bottlenecks by automating the\nanalysis. By rapidly processing large volumes of seed samples, they\nsignificantly reduce the time required for classification enabling faster and\nmore efficient seed classification while maintaining accuracy and consistency."})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h3,{id:"le-co\xfbt",children:"Le co\xfbt"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"5",src:n(9632).A+"",width:"400",height:"248"})})]}),(0,i.jsxs)("div",{style:{flex:2,marginRight:"10px"},children:[(0,i.jsx)(s.p,{children:"Le d\xe9veloppement d'une expertise dans l'analyse des semences exige une formation\napprofondie et l'exposition \xe0 divers \xe9chantillons de semences, ce qui peut\ns'av\xe9rer \xe0 la fois co\xfbteux et chronophage. Les co\xfbts associ\xe9s et le temps\nn\xe9cessaire pour former des analystes experts comprennent non seulement les\nprogrammes de formation, mais aussi les ressources requises pour l'exp\xe9rience\npratique. Le temps n\xe9cessaire aux analystes pour acqu\xe9rir les comp\xe9tences et\nl'exp\xe9rience requises peut \xeatre long, ce qui aggrave encore la p\xe9nurie de\nprofessionnels qualifi\xe9s."}),(0,i.jsx)(s.h4,{id:"la-contribution-de-lia-le-co\xfbt",children:"La contribution de l'IA (Le co\xfbt)"}),(0,i.jsx)(s.p,{children:"Les mod\xe8les de vision par ordinateur peuvent offrir une approche plus \xe9volutive\net plus efficace de l'analyse des semences, en att\xe9nuant les co\xfbts et les\ncontraintes de temps associ\xe9s \xe0 la formation d'analystes experts. Les mod\xe8les\npeuvent \xeatre entra\xeen\xe9s sur de vastes ensembles de donn\xe9es d'images de semences,\nce qui \xe9limine la n\xe9cessit\xe9 d'une formation humaine approfondie. En outre, les\nmod\xe8les de vision par ordinateur peuvent apprendre et s'am\xe9liorer\ncontinuellement au fil du temps, s'adaptant rapidement aux nouvelles vari\xe9t\xe9s de\nsemences et am\xe9liorant leur pr\xe9cision. En outre, ils \xe9liminent les biais\nsubjectifs qui peuvent r\xe9sulter de l'interpr\xe9tation humaine, fournissant ainsi\nune \xe9valuation objective et normalis\xe9e de la qualit\xe9 des semences."})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)("div",{style:{textAlign:"center",fontStyle:"italic"},children:(0,i.jsx)(s.p,{children:"En tirant parti de la puissance de la vision par ordinateur, l'industrie des\nsemences peut surmonter les limites li\xe9es \xe0 la p\xe9nurie de main-d'\u0153uvre, aux\nco\xfbts de formation et aux contraintes de temps, ce qui permet une analyse plus\nrapide et plus efficace des semences."})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"objectif--classification-automatique-des-esp\xe8ces-de-semences",children:"Objectif : classification automatique des esp\xe8ces de semences"}),"\n",(0,i.jsx)(s.p,{children:"Ce projet vise \xe0 d\xe9velopper et \xe0 d\xe9ployer un cadre de vision par ordinateur pour\nla classification des esp\xe8ces de semences. En automatisant ce processus de\nclassification, nous serons en mesure de rationaliser et d'acc\xe9l\xe9rer\nl'\xe9valuation de la qualit\xe9 des cultures. Nous d\xe9veloppons des algorithmes\navanc\xe9s et des techniques d'apprentissage profond, tout en garantissant une\n\xe9valuation impartiale et efficace de la qualit\xe9 des cultures, ouvrant ainsi la\nvoie \xe0 de meilleures pratiques agricoles."}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)("div",{style:{flex:1,marginRight:"10px"},children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"6",src:n(7963).A+"",width:"2405",height:"1746"})," ",(0,i.jsx)(s.em,{children:"Source d'image: VideometerLab"})]})}),(0,i.jsxs)("div",{style:{flex:2,marginRight:"10px"},children:[(0,i.jsx)(s.h2,{id:"projet-1-videometer",children:"Projet #1: Videometer"}),(0,i.jsx)(s.p,{children:"Dans ce projet, nous utilisions un mod\xe8le de vision par ordinateur de type\nr\xe9seau neuronal convolutif (CNN) pour \xe9valuer la puret\xe9 du contenu, en\nidentifiant et en classant les esp\xe8ces de semences souhait\xe9es par rapport aux\nesp\xe8ces de semences non souhait\xe9es."}),(0,i.jsx)(s.p,{children:"Nous avions r\xe9ussi \xe0 identifier la contamination par trois esp\xe8ces de mauvaises\nherbes diff\xe9rentes dans un m\xe9lange de s\xe9lection d'\xe9chantillons de bl\xe9."}),(0,i.jsx)(s.p,{children:"Notre mod\xe8le \xe9tait modifi\xe9 pour accepter des images multispectrales \xe0 haute\nr\xe9solution de 19 canaux et atteignait une pr\xe9cision sup\xe9rieure \xe0 95 % sur les\nimages r\xe9serv\xe9es \xe0 l'\xe9valuation."}),(0,i.jsx)(s.p,{children:"Nous avions d\u2019autant plus explor\xe9 le potentiel de notre mod\xe8le pour la\nclassification de nouvelles esp\xe8ces, en injectant cinq nouvelles esp\xe8ces de\ncanola dans l'ensemble de donn\xe9es. Les r\xe9sultats pr\xe9liminaires de cette\nexp\xe9rience montraient une pr\xe9cision d'environ 93 % sur les images r\xe9serves. Ces\nr\xe9sultats soulignent le potentiel de notre mod\xe8le pour une utilisation continue,\nm\xeame si de nouvelles esp\xe8ces de semences sont introduites."})]})]}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h3,{id:"donn\xe9es-projet-1",children:"Donn\xe9es (Projet #1)"}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"7",src:n(3746).A+"",width:"681",height:"570"})," ",(0,i.jsx)(s.em,{children:"Image multispectrale \xe0 19 canaux , Carduus nutans"})]}),(0,i.jsx)(s.p,{children:"Notre CNN a \xe9t\xe9 entra\xeen\xe9 \xe0 classer les esp\xe8ces suivantes :"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Trois esp\xe8ces diff\xe9rentes de chardons des champs (mauvaises herbes):","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Cirsium arvense"}),"\n",(0,i.jsx)(s.li,{children:"Carduus nutans"}),"\n",(0,i.jsx)(s.li,{children:"Cirsium vulgare"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Une esp\xe8ce de bl\xe9:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Triticum aestivum subspecies aestivum"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Cinq esp\xe8ces diff\xe9rentes de Canola:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Brassica napus subspecies napus"}),"\n",(0,i.jsx)(s.li,{children:"Brassica juncea"}),"\n",(0,i.jsx)(s.li,{children:"Brassica juncea (yellow)"}),"\n",(0,i.jsx)(s.li,{children:"Brassica rapa subspecies oleifera"}),"\n",(0,i.jsx)(s.li,{children:"Brassica rapa subspecies oleifera (brown)"}),"\n"]}),"\n"]}),"\n"]})]}),(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h3,{id:"r\xe9sultats-projet-1",children:"R\xe9sultats (Projet #1)"}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"8",src:n(2901).A+"",width:"1174",height:"742"})," ",(0,i.jsx)(s.em,{children:"Pr\xe9cision du mod\xe8le de >95%"})]}),(0,i.jsx)(s.p,{children:"Nous montrons que notre mod\xe8le est capable d'identifier correctement chaque\nesp\xe8ce de graine avec une pr\xe9cision de plus de 95 %."}),(0,i.jsx)(s.p,{children:"De plus, lorsque les trois graines de chardon des champs ont \xe9t\xe9 int\xe9gr\xe9es avec\nle bl\xe9, le mod\xe8le a atteint une pr\xe9cision moyenne de 99,64 % sur 360 graines.\nCela d\xe9montre la robustesse du mod\xe8le et sa capacit\xe9 \xe0 identifier de nouvelles\nimages."}),(0,i.jsx)(s.p,{children:"Enfin, nous introduisions cinq nouvelles esp\xe8ces de canola et \xe9valuions les\nperformances de notre mod\xe8le. Les r\xe9sultats pr\xe9liminaires montraient une\npr\xe9cision d'environ 93 % sur les images r\xe9serv\xe9es \xe0 l'\xe9valuation."})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)("div",{style:{flex:1,marginRight:"10px"},children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"9",src:n(3804).A+"",width:"805",height:"638"})," ",(0,i.jsx)(s.em,{children:"Source d'image: TAGARNO microscope"})]})}),(0,i.jsxs)("div",{style:{flex:2,marginRight:"10px"},children:[(0,i.jsx)(s.h2,{id:"projet-2-tagarno",children:"Projet #2: Tagarno"}),(0,i.jsx)(s.p,{children:"Dans ce projet, le cadre du mod\xe8le de vision par ordinateur suivait deux \xe9tapes\npour identifier un total de 15 esp\xe8ces de semences diff\xe9rentes \xe0 diff\xe9rents\nniveaux d'agrandissement."}),(0,i.jsx)(s.p,{children:"En premier, un mod\xe8le CNN identifiait chaque occurrence de semence dans l'image.\nEnsuite, un mod\xe8le \xab transformateur de vision \xbb \xe9tait utilis\xe9 pour classifier\nchaque esp\xe8ce."}),(0,i.jsx)(s.p,{children:"Nous effectuions plusieurs \xe9tudes d'ablation en entra\xeenant sur un profil de\ngrossissement puis en \xe9valuant sur des semences provenant d'un ensemble de\ngrossissement diff\xe9rent. Nous pr\xe9sentons des r\xe9sultats pr\xe9liminaires avec une\npr\xe9cision de plus de 90% pour tous les niveaux de grossissement."})]})]}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h3,{id:"donn\xe9es-projet-2",children:"Donn\xe9es (Projet #2)"}),(0,i.jsx)(s.p,{children:"Trois niveaux de grossissement diff\xe9rents ont \xe9t\xe9 utilis\xe9s pour les 15 esp\xe8ces\nsuivantes :"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ambrosia artemisiifolia"}),"\n",(0,i.jsx)(s.li,{children:"Ambrosia trifida"}),"\n",(0,i.jsx)(s.li,{children:"Ambrosia psilostachya"}),"\n",(0,i.jsx)(s.li,{children:"Brassica junsea"}),"\n",(0,i.jsx)(s.li,{children:"Brassica napus"}),"\n",(0,i.jsx)(s.li,{children:"Bromus hordeaceus"}),"\n",(0,i.jsx)(s.li,{children:"Bromus japonicus"}),"\n",(0,i.jsx)(s.li,{children:"Bromus secalinus"}),"\n",(0,i.jsx)(s.li,{children:"Carduus nutans"}),"\n",(0,i.jsx)(s.li,{children:"Cirsium arvense"}),"\n",(0,i.jsx)(s.li,{children:"Cirsium vulgare"}),"\n",(0,i.jsx)(s.li,{children:"Lolium temulentum"}),"\n",(0,i.jsx)(s.li,{children:"Solanum carolinense"}),"\n",(0,i.jsx)(s.li,{children:"Solanum nigrum"}),"\n",(0,i.jsx)(s.li,{children:"Solanum rostratum"}),"\n"]}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"10",src:n(7406).A+"",width:"1008",height:"590"})," ",(0,i.jsx)(s.em,{children:"Niveau de grossissement: 2 semences/image, Bromus\nSecalinus"})]}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"11",src:n(3191).A+"",width:"963",height:"520"})," ",(0,i.jsx)(s.em,{children:"Niveau de grossissement: 8 semences/image, Brassica Junsea"})]}),(0,i.jsx)(s.p,{children:"Le niveau de grossissement est indiqu\xe9 par le nombre total de graines pr\xe9sentes\ndans l'image, soit : 2, 8 ou 15 semences par image."})]}),(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h3,{id:"r\xe9sultats-projet-2",children:"R\xe9sultats (Projet #2)"}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"12",src:n(2508).A+"",width:"1020",height:"586"})," ",(0,i.jsx)(s.em,{children:"Performance du mod\xe8le"})]}),(0,i.jsx)(s.p,{children:"Afin d'\xe9tablir un protocole d'enregistrement d'images, nous entra\xeenions des\nmod\xe8les distincts \xe0 partir d'un sous-ensemble de donn\xe9es \xe0 chaque niveau de\ngrossissement, puis nous \xe9valuons les performances du mod\xe8le sur l'ensemble des\nniveaux de grossissement."}),(0,i.jsx)(s.p,{children:"Les r\xe9sultats pr\xe9liminaires d\xe9montrent la performance du mod\xe8le \xe0 identifier\ncorrectement les esp\xe8ces de semences \xe0 travers les grossissements avec une\npr\xe9cision de plus de 90%."}),(0,i.jsx)(s.p,{children:"Cela d\xe9montre le potentiel du mod\xe8le \xe0 classifier avec pr\xe9cision des nouveaux\nimages \xe0 diff\xe9rents niveaux de grossissement."}),(0,i.jsx)(s.h3,{id:"d\xe9fis",children:"D\xe9fis"}),(0,i.jsx)(s.p,{children:"Nous reconnaissons les d\xe9fis associ\xe9s \xe0 l'enregistrement des images par\ndiff\xe9rentes m\xe9thodes et nous nous effor\xe7ons de continuer \xe0 am\xe9liorer la\nrobustesse de notre mod\xe8le en incorporant plus d'esp\xe8ces de graines, en\nam\xe9liorant la g\xe9n\xe9ralisation \xe0 travers les niveaux de grossissement, et en\nr\xe9duisant notre cadre de mod\xe8le de 2-\xe9tapes en 1 pour une meilleure efficacit\xe9."})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"prochaines-\xe9tapes--d\xe9ploiement",children:"Prochaines \xe9tapes : D\xe9ploiement"}),"\n",(0,i.jsx)(s.p,{children:"Avec la r\xe9ussite de la classification des images de semences par vision par\nordinateur, notre prochain objectif est de d\xe9ployer notre mod\xe8le dans une\napplication source ouverte : SeedID. Notre but est de fournir une plateforme\nintuitive et accessible qui permet aux utilisateurs de tous niveaux d'expertise\nde classifier facilement et avec pr\xe9cision les \xe9chantillons de semences."}),"\n",(0,i.jsx)(s.p,{children:"L'objectif est de simplifier le processus de classification des semences et\nd'\xe9liminer les obstacles techniques qui pourraient entraver son utilisation."}),"\n",(0,i.jsx)(s.p,{children:"Notre strat\xe9gie de d\xe9ploiement comprend \xe9galement des tests approfondis et de\nvalidation pour assurer la fiabilit\xe9 et la pr\xe9cision des r\xe9sultats de\nclassification des semences. Une \xe9valuation rigoureuse nous permettra d'ajuster\nle mod\xe8le et de traiter les limites ou biais potentiels, garantissant des\nperformances robustes pour diff\xe9rents types et conditions de semences."}),"\n",(0,i.jsx)(s.p,{children:"Notre vision est de donner aux utilisateurs un moyen d'acc\xe9der aux mod\xe8les de\nvision par ordinateurs d'une mani\xe8re transparente. En d\xe9ployant cette\napplication \xe0 source ouverte, nous favorisons l'efficacit\xe9 et l'accessibilit\xe9\ndans l'analyse des semences pour avancer des pratiques agricoles."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{flex:1,marginRight:"10px"},children:[(0,i.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"13",src:n(4133).A+"",width:"1525",height:"700"})," ",(0,i.jsx)(s.em,{children:"Connecter les id\xe9es"})]})]}),(0,i.jsxs)("div",{style:{flex:2,marginRight:"10px"},children:[(0,i.jsx)(s.p,{children:"Le projet de classification des semences est un exemple de la collaboration\nfructueuse et continue entre le laboratoire d'IA et le groupe de la science des\nsemences de l'ACIA. En mettant en commun nos connaissances et nos expertise\nrespectives, nos deux \xe9quipes contribuent \xe0 l'avancement de l'industrie\nsemenci\xe8re canadienne."}),(0,i.jsx)(s.p,{children:"Nous d\xe9montrons le succ\xe8s de l'utilisation d'apprentissage profond en tant\nqu'outils pour les t\xe2ches de traitement d'images et nous d\xe9montrons leur\npotentiel pour am\xe9liorer la pr\xe9cision et l'efficacit\xe9 de l'\xe9valuation de la\nqualit\xe9 des cultures, ce qui profitera \xe0 la fois \xe0 l'industrie agricole et aux\nconsommateurs."}),(0,i.jsx)(s.h3,{id:"lavenir--appel-\xe0-collaboration",children:"L'avenir : Appel \xe0 collaboration"}),(0,i.jsx)(s.p,{children:"En tant que scientifiques de donn\xe9es, nous reconnaissons l'importance de la\ncollaboration et nous nous engageons \xe0 respecter les principes de la science\nouverte. Notre objectif est de promouvoir la transparence et l'engagement par le\npartage ouvert avec le public."}),(0,i.jsx)(s.p,{children:"En rendant notre application \xe0 source ouverte, nous invitons nos coll\xe8gues, les\nchercheurs, les experts en semences et les d\xe9veloppeurs \xe0 contribuer \xe0 son\nam\xe9lioration et \xe0 sa personnalisation. Cette approche collaborative favorise\nl'innovation, permettant \xe0 la communaut\xe9 d'am\xe9liorer collectivement les\ncapacit\xe9s de l'application SeedID et de r\xe9pondre aux exigences sp\xe9cifiques du\ndomaine."})]})]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6308:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/1-e042919f5524903390c56c38ec5ddd9a.png"},7406:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/10-84fd169d31ba052bc4a203bc774e6dd7.png"},3191:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/11-cadc134e471e370eeab89d4cf10e28a5.png"},2508:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/12-478df93f909046499d03829144206188.png"},4133:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/13-43d41b5bc1d1c4bc5decfefcd96db0bd.png"},959:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/2-f8872cdbedac8fcee0022c5df31a129c.png"},4630:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/3-a209628fb7dd980eff7bf9cfec0fea01.png"},809:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/4-1f61c46c8e2bc3c5e2f1dec6c9d17cab.png"},9632:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/5-e156952ed6c7ccfd7e2057508a63fb50.png"},7963:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/6-d24ed9a119421002f0e46cc272a3697c.png"},3746:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/7-f9e97aad2e936fce28dcbefbcf1e52c6.png"},2901:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/8-da230d17b37faff3984ac63c95c654ac.png"},3804:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/9-73c384ea61924c9a245c1e5182cf3461.png"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var i=n(6540);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);