(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,function(e,a,t){},,,,,,,,,,,,,,,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),s=t.n(l),i=t(16),c=(t(27),t(1)),o=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,l=e.buttonStyle,s=e.buttonSize,i=o.includes(l)?l:o[0],u=m.includes(s)?s:m[0];return r.a.createElement(c.b,{to:"/sign-up",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(i," ").concat(u),onClick:n,type:t},a))};t(33);var p=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)(!0),o=Object(i.a)(s,2),m=o[0],p=o[1],d=function(){return l(!1)},E=function(){window.innerWidth<=960?p(!1):p(!0)};return Object(n.useEffect)((function(){E()}),[]),window.addEventListener("resize",E),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(c.b,{to:"/",className:"navbar-logo",onClick:d},r.a.createElement("img",{alt:"",src:"/images/logos.png",width:"210px"})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},r.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/",className:"nav-links",onClick:d},"Accueil")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/services",className:"nav-links",onClick:d},"Qui sommes-nous?")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/products",className:"nav-links",onClick:d},"Nos activites")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/ContactUs",className:"nav-links",onClick:d},"Nous contacter")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/sign-up",className:"nav-links-mobile",onClick:d},"Connexion"))),m&&r.a.createElement(u,{buttonStyle:"btn--outline"},"Connexion"))))};t(7),t(34);var d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement(c.b,{className:"cards__item__link",to:e.path},r.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var E=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,"UGOP ASSOCIATION"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(d,{src:"images/equipe-PAV.png",text:"Autour de Salima et Oswald, une \xe9quipe dynamique vous accompagne au travers des activit\xe9s propose\u0301es au Pavillon Culturel.",label:"NOTRE BELLE \xc9QUIPE",path:"/services"}),r.a.createElement(d,{src:"images/collectif-Artisis.png",text:"Le collectif Artisis est un groupe engag\xe9 f\xe9d\xe9rant des parcours pluriels d\u2019artistes, musiciens, com\xe9diens, plasticiens, chercheurs, producteurs qui souhaitent participer activement \xe0 imaginer les mondes de demain",label:"LE COLLECTIF ARTISIS",path:"/services"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(d,{src:"images/ecole.png",text:"L\u2019\xe9cole Saint Eloi nous a r\xe9serv\xe9 leur plus belle musique.",label:"MUSIQUE",path:"/services"}),r.a.createElement(d,{src:"images/tables-rondes.jpg",text:"D\xe9couvrez des sujets importants \xe0 travers nos reportages.",label:"LES TABLES RONDES",path:"/products"}),r.a.createElement(d,{src:"images/couv.png",text:"Le Pavillon Culturel propose de nombreuses activit\xe9s intergen\xe9rationnelles, artistiques et culturelles\u200b via le nume\u0301rique.",label:"NOS ACTIVIT\xc9S",path:"/sign-up"})))))};t(35);var b=function(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("video",{src:"/videos/video-4.mp4",autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("h1",null,"Le Pavillon Culturel"),r.a.createElement("p",null,"Votre nouveau lieu artistique et culturel via le num\xe9rique, dans le 12e arrondissement"),r.a.createElement("div",{className:"hero-btns"},r.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Connexion"),r.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"NOS ACTIVITE ",r.a.createElement("i",{className:"far fa-play-circle"}))))};t(36);var v=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("p",{className:"footer-subscription-heading"},"REJOIGNEZ L'ASSOCIATION UGOP POUR RECEVOIR NOS MEILLEURES OFFRES"),r.a.createElement("p",{className:"footer-subscription-text"},"Vous pouvez vous S'inscrire \xe0 tout moment."),r.a.createElement("div",{className:"input-areas"},r.a.createElement("form",null,r.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Ton Email"}),r.a.createElement(u,{buttonStyle:"btn--outline"},"S'inscrire")))),r.a.createElement("div",{class:"footer-links"},r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"\xc0 propos de nous"),r.a.createElement(c.b,{to:"/sign-up"},"Comment \xe7a fonctionne"),r.a.createElement(c.b,{to:"/"},"T\xe9moignages"),r.a.createElement(c.b,{to:"/"},"Carri\xe8res")),r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Nous contacter"),r.a.createElement(c.b,{to:"/"},"Contact"),r.a.createElement(c.b,{to:"/"},"Support"),r.a.createElement(c.b,{to:"/"},"Destinations"),r.a.createElement(c.b,{to:"/"},"Sponsorships"))),r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Videos"),r.a.createElement(c.b,{to:"/"},"Soumettre une vid\xe9o"),r.a.createElement(c.b,{to:"/"},"Agence"),r.a.createElement(c.b,{to:"/"},"influenceure")),r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Social Media"),r.a.createElement(c.b,{to:"/"},"Instagram"),r.a.createElement(c.b,{to:"/"},"Facebook"),r.a.createElement(c.b,{to:"/"},"Youtube"),r.a.createElement(c.b,{to:"/"},"Twitter")))),r.a.createElement("section",{class:"social-media"},r.a.createElement("div",{class:"social-media-wrap"},r.a.createElement("div",{class:"footer-logo"},r.a.createElement(c.b,{to:"/",className:"social-logo"},r.a.createElement("img",{alt:"",src:"/images/logos.png",width:"210px"}))),r.a.createElement("small",{class:"website-rights"},"ASSOCIATION UGOP \xa9 2021"),r.a.createElement("div",{class:"social-icons"},r.a.createElement(c.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},r.a.createElement("i",{class:"fab fa-facebook-f"})),r.a.createElement(c.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},r.a.createElement("i",{class:"fab fa-instagram"})),r.a.createElement(c.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},r.a.createElement("i",{class:"fab fa-youtube"})),r.a.createElement(c.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},r.a.createElement("i",{class:"fab fa-twitter"})),r.a.createElement(c.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},r.a.createElement("i",{class:"fab fa-linkedin"}))))))};var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(v,null))},h=t(2),f=t(8),N=t(9),w=t(11),O=t(10);n.Component;function _(){return r.a.createElement("h1",{className:"products"},"Nos activite")}var A=function(e){Object(w.a)(t,e);var a=Object(O.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign_in"},r.a.createElement("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("div",{className:"pa4 black-80"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:" tc f1 fw6 ph0 mh0 white"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6 white",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6 white",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:" ",style:{marginLeft:"35%"}},r.a.createElement(c.b,{to:"/"},r.a.createElement("input",{className:"white sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"}))),r.a.createElement(c.b,{to:"register"},r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{className:"tc f6 link dim white db pointer",path:"/services"},"Register"))))))}}]),t}(n.Component),C=function(e){Object(w.a)(t,e);var a=Object(O.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"register",style:{marginTop:"-8%"}},r.a.createElement("div",{className:"tc  white center br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_htmlForm"},r.a.createElement("legend",{className:"tc f1 fw6 ph0 mh0 white center"},"Register"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"marque_voiture"},"Nom : "),r.a.createElement("input",{className:"pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2",type:"text",id:"nom",name:"nom"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"marque_voiture"},"Prenom : "),r.a.createElement("input",{className:"pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2",type:"text",id:"prenom",name:"prenom"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"bagage"},"Sexe : "),r.a.createElement("select",{className:"pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2",name:"sexe",id:"sexe"},r.a.createElement("option",{value:"rien"}),r.a.createElement("option",{value:"homme"},"Homme"),r.a.createElement("option",{value:"femme"},"Femme")),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"bagage"},"Telephone : "),r.a.createElement("input",{className:"pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2",type:"text",id:"telephone",name:"telephone"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"marque_voiture"},"Email : "),r.a.createElement("input",{className:"pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2",type:"text",id:"email",name:"email"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"marque_voiture"},"Ville : "),r.a.createElement("input",{className:"pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2",type:"text",id:"Ville",name:"Ville"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"date"},"Date de naissance : "),r.a.createElement("input",{className:"pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2",type:"date",id:"date",name:"date"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"nbr_place_dispo"},"Photo de profil : "),r.a.createElement("input",{className:"pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2",type:"file",id:"pdp",name:"pdp"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"marque_voiture"},"Password : "),r.a.createElement("input",{className:"pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2",type:"password",id:"password",name:"password"}),r.a.createElement("br",null),r.a.createElement(c.b,{to:"sign-up"},r.a.createElement("div",{className:""},r.a.createElement("input",{className:"mv2 sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white",type:"submit",value:"Register"})))))}}]),t}(n.Component),R=(t(37),function(e){Object(w.a)(t,e);var a=Object(O.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"form"},r.a.createElement("div",{class:"contact-info"},r.a.createElement("h3",{class:"title"},"NOUS CONTACTER"),r.a.createElement("p",{class:"text"},"Investissez-vous pour une cause qui vous tient \xe0 c\u0153ur pour plus de lien social, de vivre-ensemble, d\u2019aide interg\xe9n\xe9rationnelle."),r.a.createElement("div",{class:"info"},r.a.createElement("div",{class:"information"},r.a.createElement("img",{src:"images/location.png",class:"icon",alt:""}),r.a.createElement("p",null,"16 rue Edouard Robert, Hall 17")),r.a.createElement("div",{class:"information"},r.a.createElement("img",{src:"images/email.png",class:"icon",alt:""}),r.a.createElement("p",null,"animation.ugop@gmail.com")),r.a.createElement("div",{class:"information"},r.a.createElement("img",{src:"images/phone.png",class:"icon",alt:""}),r.a.createElement("p",null,"01 45 84 90 26"))),r.a.createElement("div",{class:"social-media"},r.a.createElement("p",null,"Connecte avec nous  :"),r.a.createElement("div",{class:"social-icons"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{class:"fab fa-facebook-f"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{class:"fab fa-twitter"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{class:"fab fa-instagram"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{class:"fab fa-linkedin-in"}))))),r.a.createElement("div",{class:"contact-form"},r.a.createElement("span",{class:"circle one"}),r.a.createElement("span",{class:"circle two"}),r.a.createElement("form",{action:"index.html",autocomplete:"off"},r.a.createElement("h3",{class:"title"},"NOUS CONTACTER"),r.a.createElement("div",{class:"input-container"},r.a.createElement("input",{type:"text",name:"name",class:"input"}),r.a.createElement("label",{for:""},"Nom"),r.a.createElement("span",null,"Nom")),r.a.createElement("div",{class:"input-container"},r.a.createElement("input",{type:"email",name:"email",class:"input"}),r.a.createElement("label",{for:""},"Email"),r.a.createElement("span",null,"Email")),r.a.createElement("div",{class:"input-container"},r.a.createElement("input",{type:"tel",name:"phone",class:"input"}),r.a.createElement("label",{for:""},"T\xe9l\xe9phone"),r.a.createElement("span",null,"T\xe9l\xe9phone")),r.a.createElement("div",{class:"input-container textarea"},r.a.createElement("textarea",{name:"message",class:"input"}),r.a.createElement("label",{for:""},"Message"),r.a.createElement("span",null,"Message")),r.a.createElement("input",{type:"submit",value:"envoyer",class:"btm"}))))),r.a.createElement(v,null))}}]),t}(n.Component));t(38);var S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item2"},r.a.createElement(c.b,{className:"cards__item__link2",to:e.path},r.a.createElement("figure",{className:"cards__item__pic-wrap2","data-category":e.label},r.a.createElement("img",{className:"cards__item__img2",alt:"Travel Image",src:e.src})),r.a.createElement("div",{className:"cards__item__info2"},r.a.createElement("h2",{style:{"margin-bottom":"20px"}},e.poste),r.a.createElement("h5",{className:"cards__item__text2"},e.text)))))};var L=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",{id:"rca"},"RENCONTREZ NOTRE BRILLANTE \xc9QUIPE"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("h1",{id:"equipe"},"L \u2019 \xe9quipe de Direction"),r.a.createElement("ul",{className:"cards__items2"},r.a.createElement(S,{src:"images/Oswald.jpg",poste:"Fondateur de l\u2019association UGOP",text:"Oswald a plus de 25 ans d\u2019exp\xe9rience dans l\u2019\xe9ducation populaire et le monde artistique.\r\nIl est charg\xe9 de la direction, du d\xe9veloppement des projets et de la coordination des diff\xe9rents p\xf4les du Pavillon Culturel de l\u2019association UGOP",label:"OSWALD MAVOUNGOUD"}),r.a.createElement(S,{src:"images/Salima.jpg",poste:"Directrice artistique de l\u2019association ",text:"Coordonner les \xe9nergies, donner vie \xe0 des id\xe9es, collaborer avec les \xe9quipes autour de projets artistiques inspirants, c\u2019est ce qui anime cette auteure, compositeur et interpr\xe8te. Salima Drider a commenc\xe9 sa carri\xe8re artistique par la musique urbaine et a continu\xe9 avec l\u2019\xe9criture de pi\xe8ces de th\xe9\xe2tre musical, de livres jeunesse et de sc\xe9nario.",label:"SALIMA DRIDER"}),r.a.createElement(S,{src:"images/OLIVIER.jpg",poste:"Administrateur UGOP Radio",text:"Apr\xe8s diff\xe9rentes exp\xe9riences professionnelles et passionn\xe9, Olivier vient partager des cl\xe9s et conseils dans les diff\xe9rentes activit\xe9s li\xe9es aux m\xe9tiers de l\u2019Informatique et du Multim\xe9dia.",label:"OLIVIER OLIVARIUS"})),r.a.createElement("h1",{id:"equipe"},"Secr\xe9tariat"),r.a.createElement(S,{src:"images/Mada.jpg",poste:"Administration ",text:"Licenci\xe9e en \xe9conomie, Maddalena met tout en \u0153uvre pour veiller au bon fonctionnement de l\u2019association. Souriante et passionn\xe9e, elle \xe9gaillera les journ\xe9es de ses collaborateurs avec sa bonne humeur.",label:"MADDALENA LANZIANO",path:"/products"}),r.a.createElement("h1",{id:"equipe"},"L\u2019\xe9quipe Communication et Marketing"),r.a.createElement("ul",{className:"cards__items2"},r.a.createElement(S,{src:"images/Lucy.jpg",poste:"Graphiste et communication visuelle",text:"Ambitieuse et cr\xe9ative, Lucy est passionn\xe9e par le dessin depuis son plus jeune \xe2ge. Actuellement en alternance chez UGOP pour sa troisi\xe8me ann\xe9e de Bachelor en Design Graphique, elle se donne au maximum pour r\xe9aliser des cr\xe9ations uniques. D\xe9termin\xe9e dans ce qu\u2019elle entreprend, Lucy souhaite par la suite continuer ses \xe9tudes et poursuivre vers un Master afin de devenir DA.",label:"LUCY TENDRE"}),r.a.createElement(S,{src:"images/louis.jpg",poste:"Charg\xe9 de communication",text:"Dipl\xf4m\xe9 d\u2019une licence en communication, Louis a d\xe9cid\xe9 de vivre une exp\xe9rience internationale en quittant sa Belgique natale au profit de Paris. Actif dans la conception et la mise en place de plans strat\xe9giques de communication, il vient soutenir le Pavillon Culturel et Ugop Radio dans le d\xe9veloppement de leur notori\xe9t\xe9.",label:"LOUIS GUYON DE MONTLIVAULT"})),r.a.createElement("h1",{id:"equipe"},"L\u2019\xe9quipe d\u2019Animation"),r.a.createElement("ul",{className:"cards__items2"},r.a.createElement(S,{src:"images/liona.jpg",poste:"Directrice adjointe UGOP",text:"Autodidacte av\xe9r\xe9e, Liona se forme seule, aux arts vivants et plus particuli\xe8rement \xe0 la musique, d\xe8s son plus jeune \xe2ge. Au cours de son parcours professionnel, elle a pu r\xe9aliser de nombreux projets dans les m\xe9tiers du spectacle vivant et de l\u2019\xe9ducation m\xealant ainsi ses passions et son fort int\xe9r\xeat pour l\u2019environnement social, culturel, \xe9ducatif et populaire. Attach\xe9e aux grandes valeurs humaines et impliqu\xe9e, elle d\xe9fend l\u2019acc\xe8s \xe0 la culture pour tous. Pour elle, il n\u2019y a pas de cr\xe9ation artistique sans \xe9ducation artistique.",label:"LIONA BENCHAGRA"}),r.a.createElement(S,{src:"images/Simon.png",poste:"Animateur UGOP",text:"Un grand fan de musique, mais aussi de danse et de sport. Simon rejoind UGOP en alternance pour accomplir la formation du brevet professionnel de la jeunesse, et de l\u2019\xe9ducation populaire et du sport. Dans l\u2019animation depuis plus de 5 ans, il a pu r\xe9aliser plusieurs projets dans diff\xe9rentes structures pour favoriser l\u2019acc\xe8s \xe0 la culture pour tous. Tr\xe8s motiv\xe9 pour partager ses exp\xe9riences et enthousiaste \xe0 l\u2019id\xe9e d\u2019apprendre et d\u2019\xe9changer avec la structure et son public.",label:"SIMON TSHABALALA"}),r.a.createElement(S,{src:"images/Louise.jpg",poste:"Animatrice UGOP",text:"L\u2019engagement fait partie de la vie de Louise. Pendant quatre ans (de 2014 \xe0 2018), elle a b\xe9n\xe9volement aid\xe9 les moniteurs et les monitrices de la section des jeunes plongeurs et plongeuses du Centre Subaquatique Nantais. L\xe0 revoil\xe0 deux ans apr\xe8s au service d\u2019UGOP. Passionn\xe9e par la litt\xe9rature, la musique, le cin\xe9ma et l\u2019histoire, Louise souhaite avant tout transmettre ses connaissances et en apprendre de nouvelles.",label:"LOUISE FOURNIER LE RAY"})),r.a.createElement("h1",{id:"equipe"},"L\u2019\xe9quipe radio"),r.a.createElement("ul",{className:"cards__items2"},r.a.createElement(S,{src:"images/Caroline.jpg",poste:"Journaliste R\xe9dactrice Ugop Radio",text:"R\xe9cemment dipl\xf4m\xe9e d\u2019un master en journalisme culturel, Caroline a rejoint l\u2019\xe9quipe d\u2019Ugop Radio pour contribuer au d\xe9veloppement de la plateforme, tout en approfondissant ses connaissances radiophoniques. Dynamique et  souriante, elle aff\xfbte quotidiennement son micro pour vous proposer des podcasts toujours plus vari\xe9s et passionnants.",label:"CAROLINE GARNIER"}),r.a.createElement(S,{src:"images/Remi.jpg",poste:"Journaliste Ugop Radio",text:"Apr\xe8s un dipl\xf4me de Chef Op\xe9rateur Son (ISTS) en poche, R\xe9mi se tourne vers le journalisme radiophonique pour concocter des reportages et podcasts tout au long de l\u2019ann\xe9e !",label:"R\xc9MI PIERRE"}),r.a.createElement(S,{src:"images/Alice.jpg",poste:"Journaliste Ugop Radio",text:"Revenant d\u2019Argentine et apr\xe8s une licence de cin\xe9ma, Alice s\u2019engage en alternance au sein de Ugop Radio en parall\xe8le de ses \xe9tudes \xe0 l\u2019EICAR. Anim\xe9e par la passion du documentaire, elle participe \xe0 la cr\xe9ation de sujets et de podcasts pour UGOP Radio.",label:"ALICE CHABOT"})),r.a.createElement("ul",{className:"cards__items2"},r.a.createElement(S,{src:"images/Lucas.jpg",poste:"Technicien Son Ugop Radio  ",text:"Apr\xe8s un BTS audiovisuel option son, Lucas rejoint l\u2019\xe9quipe d\u2019UGOP Radio en tant que technicien son pour le montage et le mixage des podcasts et des vid\xe9os mais aussi sur le terrain pour les reportages.",label:"LUCAS BEUNECHE"}),r.a.createElement(S,{src:"images/Xavier.jpg",poste:"Cadreur Monteur Ugop Radio",text:"Apr\xe8s un baccalaur\xe9at obtenu en candidat libre, des \xe9tudes de journalisme et un documentaire 52mn, Xavier int\xe8gre UGOP radio  comme cadreur-monteur. Il r\xe9alise-l\xe0 une mission de service civique.",label:"XAVIER DUCLOS"}),r.a.createElement(S,{src:"images/Axel.jpg",poste:"Cadreur Monteur Ugop Radio",text:"Passionn\xe9 par le monde de l\u2019image et apr\xe8s des \xe9tudes cin\xe9matographiques, Axel a rejoint UGOP Radio pour participer au d\xe9veloppement de son p\xf4le vid\xe9o comme cadreur et monteur. Cela lui permet de d\xe9couvrir un autre pan de l\u2019univers audiovisuel, tout en confirmant et approfondissant ses comp\xe9tences techniques en mati\xe8re de r\xe9alisation. ",label:"AXEL VAUSSOURD"})),r.a.createElement("ul",{className:"cards__items2"},r.a.createElement(S,{src:"images/CLARA.jpg",poste:"Journaliste UGOP Radio  ",text:"Jeune journaliste dipl\xf4m\xe9e d\u2019un bachelor, sp\xe9cialis\xe9 en radio. Clara rejoint l\u2019\xe9quipe pour vous faire d\xe9couvrir le 12 e arrondissement, par son \u0153il de n\xe9o parisienne. Passionn\xe9e de podcast et d\u2019information, elle sera ravie de vous partager de nombreux contenus.",label:"CLARA GIANNITELLI"}),r.a.createElement(S,{src:"images/Gabriel.png",poste:"Cadreur Monteur Ugop Radio",text:"Apr\xe8s avoir obtenu un master en cin\xe9ma et r\xe9aliser des dizaine de clips, Gabriel a rejoint UGOP Radio pour participer au d\xe9veloppement du p\xf4le vid\xe9o. Passionn\xe9 par la cam\xe9ra depuis son plus jeune \xe2ge, il met \xe0 mal, quotidiennement, son savoir-faire pour mettre en lumi\xe8re les acteurs et les \xe9v\xe8nements du 12\xe8me.",label:"GABRIEL MOUSSERIN"})),r.a.createElement("h1",{id:"equipe"},"Les b\xe9n\xe9voles"),r.a.createElement(S,{src:"images/Michele.jpg",poste:"Responsable partenariats",text:"Apr\xe8s avoir travaill\xe9 dans des entreprises du priv\xe9 \xe0 des postes op\xe9rationnels et de management et dans l\u2019enseignement, Mich\xe8le a choisi d\u2019\xe9voluer dans des cabinets de conseil dans la sph\xe8re de l\u2019accompagnement et du d\xe9veloppement professionnel. Aujourd\u2019hui, elle souhaite mettre son exp\xe9rience au service du monde associatif, d\u2019UGOP Radio en particulier et du Pavillon Culturel de l\u2019association UGOP. En \xe9troite relation avec son fondateur, elle peut ainsi aider l\u2019association \xe0 nouer des partenariats avec des groupes priv\xe9s, d\u2019une part, et monter des dossiers de financement avec des entit\xe9s publiques, d\u2019autre part.",label:"MICH\xc8LE"}))))};t(39);var x=function(){return r.a.createElement("div",{className:"hero-container1"},r.a.createElement("video",{src:"/videos/video-3.mp4",autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("h1",null,"NOTRE BELLE HISTOIRE"),r.a.createElement("p",null,"Cr\xe9\xe9e il y a 23 ans, l\u2019association UGOP propose des ateliers artistiques et num\xe9riques pour tous dans le 12e arrondissement de Paris."))};var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(L,null),r.a.createElement(v,null))};var q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(p,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:g}),r.a.createElement(h.a,{path:"/services",component:k}),r.a.createElement(h.a,{path:"/products",component:_}),r.a.createElement(h.a,{path:"/sign-up",component:A}),r.a.createElement(h.a,{path:"/register",component:C}),r.a.createElement(h.a,{path:"/ContactUs",component:R}))))};t(40);s.a.render(r.a.createElement(q,null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.f0a224a6.chunk.js.map