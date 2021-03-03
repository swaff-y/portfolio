(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{72:function(e,t,c){},73:function(e,t,c){},81:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(20),a=c.n(s),l=(c(72),c(18)),r=c(5);c.p,c(73);function j(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var o=function(){var e=Object(i.useState)(j()),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){function e(){n(j())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c},d=c(110),b=c(111),h=c(27),O=c.n(h),x=c(57),u=c.n(x),p=c(42),f=(c(81),c(1)),m=function(e){var t=function(){e.windowWidth<600&&(e.toggleSidebar(),!0===e.sidebar?e.turnMainOff(!1):!1===e.sidebar&&e.turnMainOff(!0))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"sidebar",children:[Object(f.jsx)("div",{className:"sidebar__header",children:Object(f.jsx)(d.a,{onClick:function(){e.windowWidth>600?e.toggleSidebar():(e.toggleSidebar(),!0===e.sidebar?e.turnMainOff(!1):!1===e.sidebar&&e.turnMainOff(!0))},children:Object(f.jsx)(O.a,{})})}),Object(f.jsx)("img",{src:"/img/image.png",alt:"Kyle Swaffield",className:"sidebar__img"}),Object(f.jsx)("h1",{children:"Kyle Swaffield"}),Object(f.jsxs)(b.a,{onClick:function(){window.location.href="mailto:kyle@swaff.id.au?subject=Lets talk - Kyle Swaffield&body=Good Day, \n\n I found your website and I would like to have a chat with you. "},children:[Object(f.jsx)(u.a,{}),"kyle@swaff.id.au"]}),Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(b.a,{onClick:t,children:Object(f.jsx)("a",{href:"#/introduction",children:"Introduction"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.a,{onClick:t,children:Object(f.jsx)("a",{href:"#/about",children:"About Me"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.a,{onClick:t,children:Object(f.jsx)("a",{href:"#/timeline",children:"Timeline"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.a,{onClick:t,children:Object(f.jsx)("a",{href:"#/projects",children:"Projects"})})})]})}),Object(f.jsxs)("ul",{className:"sidebar__social",children:[Object(f.jsx)("li",{children:Object(f.jsx)(p.SocialIcon,{url:"https://www.linkedin.com/in/kyle-swaffield/",className:"social"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.SocialIcon,{url:"https://twitter.com/KyleSwaffield",className:"social"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.SocialIcon,{url:"https://github.com/swaff-y",className:"social"})})]}),Object(f.jsx)("p",{children:"\xa9 Swaff-y 2021 - Built in React"})]})})},w=c(115),g=(c(52),c(86),function(e){var t=Object(i.useState)(!0),c=Object(r.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)("80vw"),l=Object(r.a)(a,2),j=l[0],o=l[1],d=Object(i.useState)("100px"),b=Object(r.a)(d,2),h=b[0],O=b[1],x=Object(i.useState)("200px"),u=Object(r.a)(x,2),p=u[0],m=u[1];Object(i.useEffect)((function(){e.windowWidth<1090?o("100vw"):e.windowWidth>=1090&&o("80vw"),e.windowWidth>800?(O("100px"),m("400px")):e.windowWidth<=800&&(O("30px"),m("280px"))}),[e.windowWidth]);return Object(f.jsx)("div",{className:"introduction",id:"introduction",style:{width:j},children:Object(f.jsxs)(w.a,{className:"introduction__carousel",controls:!1,indicators:!1,onSlide:function(){!0===n?s(!1):!1===n&&s(!0)},style:{left:h,width:p},children:[Object(f.jsxs)(w.a.Item,{interval:5e3,children:[Object(f.jsx)("h1",{children:Object(f.jsx)("strong",{children:"Hi, I'm Kyle"})}),Object(f.jsx)("p",{children:"A full stack software engineer based in Sydney"}),Object(f.jsx)("div",{className:"introduction__callToAction",children:Object(f.jsx)("a",{href:"https://swaff-y.github.io/portfolio/cv.pdf",download:"Kyle Swaffield - Full Stack Software Engineer",target:"_blank",children:"Download my Resume"})})]}),Object(f.jsxs)(w.a.Item,{interval:5e3,children:[Object(f.jsx)("h1",{children:"I love building things"}),Object(f.jsx)("p",{children:"Why not check out some of my work?"}),Object(f.jsx)("div",{className:"introduction__callToAction",children:Object(f.jsx)("a",{href:"#/projects",children:"View my Projects"})})]})]})})}),y=(c(87),function(e){var t=Object(i.useState)("80vw"),c=Object(r.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)("800px"),l=Object(r.a)(a,2),j=l[0],o=l[1],d=Object(i.useState)("0px"),b=Object(r.a)(d,2),h=b[0],O=b[1];return Object(i.useEffect)((function(){e.windowWidth<1090?s("100vw"):e.windowWidth>=1090&&s("80vw"),e.windowWidth<865?(o("1000px"),O("100px")):e.windowWidth>=865&&(o("800px"),O("0px")),e.windowWidth<520?(o("1100px"),O("200px")):e.windowWidth>=865&&O("0px")}),[e.windowWidth]),Object(f.jsxs)("div",{className:"about",id:"about",style:{width:n,height:j},children:[Object(f.jsx)("div",{className:"about__paragraph",children:Object(f.jsxs)("article",{children:[Object(f.jsx)("h1",{children:"Who am I?"}),Object(f.jsx)("p",{children:"I have a strong passion for software engineering, and a great deal of experience in project management. I enjoy the results of what can be achieved when thinking about software development problems collectively. My aptitude for analysing code based problems, helps me think about solutions from a unique perspective. As a collaborative and communicative team member, I help build operational teams while cultivating meaningful relationships."})]})}),Object(f.jsxs)("div",{className:"about__tech",style:{top:h},children:[Object(f.jsx)("h1",{children:"Technologies I use"}),Object(f.jsx)("img",{src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612767618/ruby_iqqlro.png",alt:"Ruby on Rails",width:"154px"}),Object(f.jsx)("img",{src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612768183/mern_ocokf5.png",alt:"Mern",width:"200px"})]})]})}),v=c(25),k=c.n(v),_=function(e){var t=Object(i.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1];Object(i.useEffect)((function(){!0===e.one&&s(a)}),[e.one]),Object(i.useEffect)((function(){!0===e.two&&s(l)}),[e.two]),Object(i.useEffect)((function(){!0===e.three&&s(j)}),[e.three]),Object(i.useEffect)((function(){!0===e.four&&s(o)}),[e.four]),Object(i.useEffect)((function(){!0===e.five&&s(d)}),[e.five]),Object(i.useEffect)((function(){!0===e.six&&s(b)}),[e.six]);var a=Object(f.jsx)("div",{children:Object(f.jsxs)("article",{children:[Object(f.jsx)("h3",{children:"General Assembly Immersive"}),Object(f.jsx)("p",{children:"General Assembly  (Nov 2020 - Jan 2020)"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:'3 Month Full-Time Software Engineering Immersive "Bootcamp"'}),Object(f.jsx)("li",{children:"The course covers full-stack front-end and back-end development"})]})]})}),l=Object(f.jsx)("div",{children:Object(f.jsxs)("article",{children:[Object(f.jsx)("h3",{children:"Project Manager eCommerce"}),Object(f.jsx)("p",{children:"Pinnacle Pumps  (Oct 2019 - Feb 2020)"}),Object(f.jsx)("ul",{children:Object(f.jsx)("li",{children:"Project manager for the development and launch of Pinnace Pumps eCommerce website"})})]})}),j=Object(f.jsx)("div",{children:Object(f.jsxs)("article",{children:[Object(f.jsx)("h3",{children:"Commercial IT Manager"}),Object(f.jsx)("p",{children:"RINGSPANN South Africa  (Jan 2019 - Feb 2020)"}),Object(f.jsx)("ul",{children:Object(f.jsx)("li",{children:"I oversaw daily operations (IT systems - mainly SAP, business analysis, company associations, and employee activities) to promote consistency of service among divisions."})})]})}),o=Object(f.jsx)("div",{children:Object(f.jsxs)("article",{children:[Object(f.jsx)("h3",{children:"Project Manager SAP Implementation"}),Object(f.jsx)("p",{children:"RINGSPANN South Africa  (Jan 2018 - Dec 2019)"}),Object(f.jsx)("ul",{children:Object(f.jsx)("li",{children:"RINGSPANN needed to implement SAP as part of their global strategy to integrate all subsidiaries worldwide on one central ERP system."})})]})}),d=Object(f.jsx)("div",{children:Object(f.jsxs)("article",{children:[Object(f.jsx)("h3",{children:"Project Manager eCommerce"}),Object(f.jsx)("p",{children:"Bearings Online  (Jul 2015 - Sep 2016)"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"As part of a strategic decision, I managed the project to start, develop and run a sister company, Bearings Online."}),Object(f.jsx)("li",{children:"The project was an online marketing approach to selling power transmission products via an eCommerce platform."})]})]})}),b=Object(f.jsx)("div",{children:Object(f.jsxs)("article",{children:[Object(f.jsx)("h3",{children:"General Manager"}),Object(f.jsx)("p",{children:"Sprag Components (Aug 2012 - Jun 2017)"}),Object(f.jsx)("p",{children:"I was responsible for supervising lower-level managers. These divisions included; sales, marketing, accounts, procurement, workshop management, and human resources. Duties included hiring, training, coaching and disciplining lower-level managers. I was also involved with appraising the efficiency of departments and creating strategic plans for the business."})]})});return Object(f.jsx)("div",{className:"timeline__story",style:e.storyStyle,children:n})},S=(c(88),function(e){var t=Object(i.useState)(!0),c=Object(r.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)(!1),l=Object(r.a)(a,2),j=l[0],o=l[1],d=Object(i.useState)(!1),h=Object(r.a)(d,2),O=h[0],x=h[1],u=Object(i.useState)(!1),p=Object(r.a)(u,2),m=p[0],w=p[1],g=Object(i.useState)(!1),y=Object(r.a)(g,2),v=y[0],S=y[1],N=Object(i.useState)(!1),C=Object(r.a)(N,2),T=C[0],W=C[1],I=Object(i.useState)("80vw"),A=Object(r.a)(I,2),B=A[0],R=A[1],J=Object(i.useState)("100px"),P=Object(r.a)(J,2),E=P[0],M=P[1],L=Object(i.useState)("73px"),F=Object(r.a)(L,2),G=F[0],q=F[1],H=Object(i.useState)(""),D=Object(r.a)(H,2),K=D[0],z=D[1],V=Object(i.useState)({position:"relative",top:"-1170px",left:"350px",width:"40vw"}),U=Object(r.a)(V,2),Q=U[0],X=U[1],Y=Object(i.useState)({position:"relative",backgroundColor:"rgba(240, 242, 245,1)",padding:"30px",top:"-1150px",left:"350px",width:"30vw"}),Z=Object(r.a)(Y,2),$=Z[0],ee=Z[1];Object(i.useEffect)((function(){e.windowWidth<1090?R("100vw"):e.windowWidth>=1090&&R("80vw"),e.windowWidth<600?(M("30px"),q("5px"),z("none"),X({position:"relative",top:"-1000px",left:"10px",width:"80vw"}),ee({position:"relative",backgroundColor:"rgba(240, 242, 245,1)",padding:"30px",top:"-960px",left:"80px",width:"65vw"})):e.windowWidth>=600&&(M("100px"),q("73px"),z(""),X({position:"relative",top:"-1170px",left:"350px",width:"40vw"}),ee({position:"relative",backgroundColor:"rgba(240, 242, 245,1)",padding:"30px",top:"-1150px",left:"350px",width:"30vw"}))}),[e.windowWidth]);var te={fontSize:62,color:"#1DA1F2"},ce=function(){s(!0),o(!1),x(!1),w(!1),S(!1),W(!1)},ie=function(){s(!1),o(!0),x(!1),w(!1),S(!1),W(!1)},ne=function(){s(!1),o(!1),x(!0),w(!1),S(!1),W(!1)},se=function(){s(!1),o(!1),x(!1),w(!0),S(!1),W(!1)},ae=function(){s(!1),o(!1),x(!1),w(!1),S(!0),W(!1)},le=function(){s(!1),o(!1),x(!1),w(!1),S(!1),W(!0)};return Object(f.jsxs)("div",{className:"timeline",id:"timeline",style:{width:B},children:[Object(f.jsx)("div",{className:"timeline__line",style:{left:E}}),Object(f.jsx)("div",{className:"timeline__circle one",onClick:ce,style:{left:G},children:Object(f.jsx)(k.a,{style:te,className:"clock"})}),Object(f.jsx)("div",{className:"timeline__circle two",onClick:ie,style:{left:G},children:Object(f.jsx)(k.a,{style:te,className:"clock"})}),Object(f.jsx)("div",{className:"timeline__circle three",onClick:ne,style:{left:G},children:Object(f.jsx)(k.a,{style:te,className:"clock"})}),Object(f.jsx)("div",{className:"timeline__circle four",onClick:se,style:{left:G},children:Object(f.jsx)(k.a,{style:te,className:"clock"})}),Object(f.jsx)("div",{className:"timeline__circle five",onClick:ae,style:{left:G},children:Object(f.jsx)(k.a,{style:te,className:"clock"})}),Object(f.jsx)("div",{className:"timeline__circle six",onClick:le,style:{left:G},children:Object(f.jsx)(k.a,{style:te,className:"clock"})}),Object(f.jsx)("div",{className:"timeline__dateOne",style:{display:K},children:!0===n?Object(f.jsx)("p",{onClick:ce,children:Object(f.jsx)(b.a,{children:Object(f.jsx)("strong",{children:"Nov 2020 - Jan 2021"})})}):Object(f.jsx)("p",{onClick:ce,children:Object(f.jsx)(b.a,{children:"Nov 2020 - Jan 2021"})})}),Object(f.jsx)("div",{className:"timeline__dateTwo",style:{display:K},children:!0===j?Object(f.jsx)("p",{onClick:ie,children:Object(f.jsx)(b.a,{children:Object(f.jsx)("strong",{children:"Oct 2019 - Feb 2020"})})}):Object(f.jsx)("p",{onClick:ie,children:Object(f.jsx)(b.a,{children:"Oct 2019 - Feb 2020"})})}),Object(f.jsx)("div",{className:"timeline__dateThree",style:{display:K},children:!0===O?Object(f.jsx)("p",{onClick:ne,children:Object(f.jsx)(b.a,{children:Object(f.jsx)("strong",{children:"Jan 2019 - Feb 2020"})})}):Object(f.jsx)("p",{onClick:ne,children:Object(f.jsx)(b.a,{children:"Jan 2019 - Feb 2020"})})}),Object(f.jsx)("div",{className:"timeline__dateFour",style:{display:K},children:!0===m?Object(f.jsx)("p",{onClick:se,children:Object(f.jsx)(b.a,{children:Object(f.jsx)("strong",{children:"Jan 2018 - Dec 2019"})})}):Object(f.jsx)("p",{onClick:se,children:Object(f.jsx)(b.a,{children:"Jan 2018 - Dec 2019"})})}),Object(f.jsx)("div",{className:"timeline__dateFive",style:{display:K},children:!0===v?Object(f.jsx)("p",{onClick:ae,children:Object(f.jsx)(b.a,{children:Object(f.jsx)("strong",{children:"Jul 2015 - Sep 2016"})})}):Object(f.jsx)("p",{onClick:ae,children:Object(f.jsx)(b.a,{children:"Jul 2015 - Sep 2016"})})}),Object(f.jsx)("div",{className:"timeline__dateSix",style:{display:K},children:!0===T?Object(f.jsx)("p",{onClick:le,children:Object(f.jsx)(b.a,{children:Object(f.jsx)("strong",{children:"Aug 2012 - Jun 2017"})})}):Object(f.jsx)("p",{onClick:le,children:Object(f.jsx)(b.a,{children:"Aug 2012 - Jun 2017"})})}),Object(f.jsx)("h1",{className:"timeline__heading",style:Q,children:"My work history"}),Object(f.jsx)(_,{one:n,two:j,three:O,four:m,five:v,six:T,storyStyle:$})]})}),N=c(112),C=c(113),T=c(114),W=c(117),I=c(116),A=c(62),B=(c(89),function(e){var t=Object(i.useState)({}),c=Object(r.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)({offset:4}),l=Object(r.a)(a,2),j=l[0],o=l[1],d=Object(i.useState)({offset:1}),b=Object(r.a)(d,2),h=b[0],O=b[1],x=Object(i.useState)(4),u=Object(r.a)(x,2),p=u[0],m=u[1];Object(i.useEffect)((function(){if(e.windowWidth<1195){s({display:"none"})}else if(e.windowWidth>1195){s({position:"relative",marginLeft:"20px",top:"-1480px",width:"200px"})}e.windowWidth<1075?(o({}),O({}),m(0)):e.windowWidth>1075&&(o({offset:4}),O({offset:1}),m(4))}),[e.windowWidth]);var w={width:"18rem",height:"48rem",backgroundColor:"rgba(240, 242, 245,1)",marginTop:"20px"},g={width:"18rem",backgroundColor:"rgba(240, 242, 245,1)",marginTop:"20px"},y=function(){window.open("https://swaff-y.github.io/tic-tac-toe/","_blank")},v=function(){window.open("https://swaff-y.github.io/burning-airlines-react/#/","_blank")},k=function(){window.open("https://rent-help.herokuapp.com/","_blank")},_=function(){window.open("https://stacey-lewis.github.io/react-air-cnb-app/#/","_blank")},S=function(){window.open("https://swaff-y.github.io/mapChat-react/#/","_blank")};return Object(f.jsxs)("div",{className:"projects",id:"projects",children:[Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(C.a,{md:p,className:"projects__firstRow",children:[Object(f.jsx)(T.a,{md:j,children:Object(f.jsxs)(W.a,{style:w,className:"projects__card",children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785394/TicTac_haxsiw.jpg",onClick:y,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:y,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"Tic-Tac-Toe"})}),Object(f.jsx)(W.a.Text,{children:"Can you beat the computer? A simple Tic Tac Toe where you can test your skills against the computer."})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:y,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:y,children:[Object(f.jsx)(A.a,{children:"JavaScript"}),Object(f.jsx)(A.a,{children:"HTML"}),Object(f.jsx)(A.a,{children:"CSS"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/swaff-y/tic-tac-toe",target:"_blank",children:"GitHub Repo"})})]})}),Object(f.jsx)(T.a,{md:h,children:Object(f.jsxs)(W.a,{style:w,className:"projects__card",children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785417/burnAirlines_sees6p.jpg",onClick:v,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:v,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"Burning Airlines"})}),Object(f.jsx)(W.a.Text,{children:"A group pressure test to see how quickly we can deliver a working product. Burning Airlines is an airline ticket reservation app built in two and a half days."})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:v,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:v,children:[Object(f.jsx)(A.a,{children:"Ruby on Rails"}),Object(f.jsx)(A.a,{children:"ReactJS"}),Object(f.jsx)(A.a,{children:"Bootstrap"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/swaff-y/burning-airlines-react",target:"_blank",children:"GitHub Repo"})})]})})]}),Object(f.jsxs)(C.a,{className:"projects__secondRow",children:[Object(f.jsx)(T.a,{children:Object(f.jsxs)(W.a,{style:g,className:"projects__card",children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785397/rentHelp_pjflqj.jpg",onClick:k,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:k,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"Rent-Help"})}),Object(f.jsx)(W.a.Text,{children:"Are you a tenant? Are you a landlord? Rent Help connects you!"})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:k,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:k,children:[Object(f.jsx)(A.a,{children:"Ruby on Rails"}),Object(f.jsx)(A.a,{children:"JavaScript"}),Object(f.jsx)(A.a,{children:"HTML"}),Object(f.jsx)(A.a,{children:"CSS"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/swaff-y/rent-help",target:"_blank",children:"GitHub Repo"})})]})}),Object(f.jsx)(T.a,{children:Object(f.jsxs)(W.a,{style:g,className:"projects__card",children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785401/AirCnB_xidwfy.jpg",onClick:_,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:_,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"AirCnB"})}),Object(f.jsxs)(W.a.Text,{children:["An Air BnB clone website. Use the login details, kyle@ga.co Password: chicken, to have a wonder around the website. ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("strong",{children:"The Website Boasts:"}),Object(f.jsx)("br",{})," Online transactions, Dashboard, Booking emails, and so much more."]})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:_,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:_,children:[Object(f.jsx)(A.a,{children:"Ruby on Rails"}),Object(f.jsx)(A.a,{children:"ReactJS"}),Object(f.jsx)(A.a,{children:"Bootstrap"}),Object(f.jsx)(A.a,{children:"ChartsJS"}),Object(f.jsx)(A.a,{children:"BrainTree"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/stacey-lewis/react-air-cnb-app",target:"_blank",children:"GitHub Repo"})})]})}),Object(f.jsx)(T.a,{children:Object(f.jsxs)(W.a,{style:g,className:"projects__card",children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785788/Screen_Shot_2021-02-08_at_11.02.57_pm_chjazt.png",onClick:S,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:S,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"mapChat"})}),Object(f.jsx)(W.a.Text,{children:"An application that logs GPS co-ordinates with a simple whatsApp type chat application. Common use cases for the type of application include; companies with reps on the road, chatting about surf sites, notifying people of traffic congestions, etc. The uses for this type of application are only limited by the imagination."})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:S,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:S,children:[Object(f.jsx)(A.a,{children:"MongoDB"}),Object(f.jsx)(A.a,{children:"Mongoose"}),Object(f.jsx)(A.a,{children:"ExpressJS"}),Object(f.jsx)(A.a,{children:"NodeJS"}),Object(f.jsx)(A.a,{children:"ReactJS"}),Object(f.jsx)(A.a,{children:"Pusher"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/swaff-y/mapChat-react",target:"_blank",children:"GitHub Repo"})})]})})]})]}),Object(f.jsx)("h1",{className:"projects__heading",style:n,children:"Some of My Projects"})]})}),R=(c(90),function(e){var t=Object(i.useState)({flex:.65}),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(i.useEffect)((function(){var t;""!==(t=e.location.pathname.substring(1))&&document.getElementById(t).scrollIntoView()}),[]),Object(i.useEffect)((function(){!0===e.sidebar?s({flex:.65}):!1===e.sidebar&&s({flex:1,width:"100vw"})}),[e.sidebar]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"main",style:n,children:[Object(f.jsx)(g,{windowWidth:e.windowWidth}),Object(f.jsx)(y,{windowWidth:e.windowWidth}),Object(f.jsx)(S,{windowWidth:e.windowWidth}),Object(f.jsx)(B,{windowWidth:e.windowWidth})]})})}),J=c(61),P=c(9);var E=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(!1),a=Object(r.a)(s,2),j=a[0],b=a[1],h=o(),x=(h.height,h.width);Object(i.useEffect)((function(){p(x)}),[x]);var u=function(){!0===c?n(!1):!1===c&&n(!0)},p=function(e){e<1090?n(!1):e>=1090&&n(!0),e<600?b(!0):e>=600&&b(!1)};return Object(f.jsxs)("div",{className:"app",children:[!0===c?Object(f.jsx)(m,{toggleSidebar:u,toggleMainOff:function(){!0===j?b(!1):!1===j&&b(!0)},windowWidth:x,sidebar:c,mainOff:j,turnMainOff:function(e){!0===e?b(!0):!1===j&&b(!1)}}):Object(f.jsx)(d.a,{onClick:u,className:"app__sidebarButton",children:Object(f.jsx)(O.a,{})}),!0===j&&!0===c?Object(f.jsx)("div",{className:"stub"}):Object(f.jsxs)(J.a,{children:[Object(f.jsx)(P.a,{exact:!0,path:"/",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}}),Object(f.jsx)(P.a,{exact:!0,path:"/introduction",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}}),Object(f.jsx)(P.a,{exact:!0,path:"/about",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}}),Object(f.jsx)(P.a,{exact:!0,path:"/projects",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}}),Object(f.jsx)(P.a,{exact:!0,path:"/timeline",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}})]})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,118)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))};a.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root")),M()}},[[95,1,2]]]);
//# sourceMappingURL=main.da586789.chunk.js.map