(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{72:function(e,t,c){},73:function(e,t,c){},81:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(20),a=c.n(s),l=(c(72),c(18)),r=c(5);c.p,c(73);function o(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var j=function(){var e=Object(i.useState)(o()),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){function e(){n(o())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c},d=c(110),b=c(111),h=c(27),O=c.n(h),x=c(57),u=c.n(x),p=c(42),f=(c(81),c(1)),m=function(e){var t=function(){e.windowWidth<600&&(e.toggleSidebar(),!0===e.sidebar?e.turnMainOff(!1):!1===e.sidebar&&e.turnMainOff(!0))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"sidebar",children:[Object(f.jsx)("div",{className:"sidebar__header",children:Object(f.jsx)(d.a,{onClick:function(){e.windowWidth>600?e.toggleSidebar():(e.toggleSidebar(),!0===e.sidebar?e.turnMainOff(!1):!1===e.sidebar&&e.turnMainOff(!0))},children:Object(f.jsx)(O.a,{})})}),Object(f.jsx)("img",{src:"/img/image.png",alt:"Kyle Swaffield",className:"sidebar__img"}),Object(f.jsx)("h1",{children:"Kyle Swaffield"}),Object(f.jsxs)(b.a,{onClick:function(){window.location.href="mailto:kyle@swaff.id.au?subject=Lets talk - Kyle Swaffield&body=Good Day, \n\n I found your website and I would like to have a chat with you. "},children:[Object(f.jsx)(u.a,{}),"kyle@swaff.id.au"]}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(b.a,{onClick:t,children:Object(f.jsx)("a",{href:"#/introduction",children:"Introduction"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.a,{onClick:t,children:Object(f.jsx)("a",{href:"#/about",children:"About Me"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.a,{onClick:t,children:Object(f.jsx)("a",{href:"#/timeline",children:"Timeline"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.a,{onClick:t,children:Object(f.jsx)("a",{href:"#/projects",children:"Projects"})})})]}),Object(f.jsxs)("ul",{className:"sidebar__social",children:[Object(f.jsx)("li",{children:Object(f.jsx)(p.SocialIcon,{url:"https://www.linkedin.com/in/kyle-swaffield/"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.SocialIcon,{url:"https://twitter.com/KyleSwaffield"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.SocialIcon,{url:"https://github.com/swaff-y"})})]}),Object(f.jsx)("p",{children:"\xa9 Swaff-y 2021 - Built in React"})]})})},w=c(115),g=(c(52),c(86),function(e){var t=Object(i.useState)(!0),c=Object(r.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)("80vw"),l=Object(r.a)(a,2),o=l[0],j=l[1],d=Object(i.useState)("100px"),b=Object(r.a)(d,2),h=b[0],O=b[1],x=Object(i.useState)("200px"),u=Object(r.a)(x,2),p=u[0],m=u[1];Object(i.useEffect)((function(){e.windowWidth<1090?j("100vw"):e.windowWidth>=1090&&j("80vw"),e.windowWidth>800?(O("100px"),m("400px")):e.windowWidth<=800&&(O("30px"),m("280px"))}),[e.windowWidth]);return Object(f.jsx)("div",{className:"introduction",id:"introduction",style:{width:o},children:Object(f.jsxs)(w.a,{className:"introduction__carousel",controls:!1,indicators:!1,onSlide:function(){!0===n?s(!1):!1===n&&s(!0)},style:{left:h,width:p},children:[Object(f.jsxs)(w.a.Item,{interval:5e3,children:[Object(f.jsx)("h1",{children:Object(f.jsx)("strong",{children:"Hi, I'm Kyle"})}),Object(f.jsx)("p",{children:"A full stack software engineer based in Sydney"}),Object(f.jsx)("div",{className:"introduction__callToAction",children:Object(f.jsx)("a",{href:"https://swaff-y.github.io/portfolio/cv.pdf",download:"Kyle Swaffield - Full Stack Software Engineer",target:"_blank",children:"Download my Resume"})})]}),Object(f.jsxs)(w.a.Item,{interval:5e3,children:[Object(f.jsx)("h1",{children:"I love building things"}),Object(f.jsx)("p",{children:"Why not check out some of my work?"}),Object(f.jsx)("div",{className:"introduction__callToAction",children:Object(f.jsx)("a",{href:"#/projects",children:"View my Projects"})})]})]})})}),y=(c(87),function(e){var t=Object(i.useState)("80vw"),c=Object(r.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)("800px"),l=Object(r.a)(a,2),o=l[0],j=l[1],d=Object(i.useState)("0px"),b=Object(r.a)(d,2),h=b[0],O=b[1];return Object(i.useEffect)((function(){e.windowWidth<1090?s("100vw"):e.windowWidth>=1090&&s("80vw"),e.windowWidth<865?(j("1000px"),O("100px")):e.windowWidth>=865&&(j("800px"),O("0px")),e.windowWidth<520?(j("1100px"),O("200px")):e.windowWidth>=865&&O("0px")}),[e.windowWidth]),Object(f.jsxs)("div",{className:"about",id:"about",style:{width:n,height:o},children:[Object(f.jsxs)("div",{className:"about__paragraph",children:[Object(f.jsx)("h1",{children:"Who am I?"}),Object(f.jsx)("p",{children:"I have a strong passion for software engineering, and a great deal of experience in project management. I enjoy the results of what can be achieved when thinking about software development problems collectively. My aptitude for analysing code based problems, helps me think about solutions from a unique perspective. As a collaborative and communicative team member, I help build operational teams while cultivating meaningful relationships."})]}),Object(f.jsxs)("div",{className:"about__tech",style:{top:h},children:[Object(f.jsx)("h1",{children:"Technologies I use"}),Object(f.jsx)("img",{src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612767618/ruby_iqqlro.png",alt:"Ruby on Rails",width:"154px"}),Object(f.jsx)("img",{src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612768183/mern_ocokf5.png",alt:"Mern",width:"200px"})]})]})}),v=c(25),k=c.n(v),_=function(e){var t=Object(i.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1];Object(i.useEffect)((function(){!0===e.one&&s(a)}),[e.one]),Object(i.useEffect)((function(){!0===e.two&&s(l)}),[e.two]),Object(i.useEffect)((function(){!0===e.three&&s(o)}),[e.three]),Object(i.useEffect)((function(){!0===e.four&&s(j)}),[e.four]),Object(i.useEffect)((function(){!0===e.five&&s(d)}),[e.five]),Object(i.useEffect)((function(){!0===e.six&&s(b)}),[e.six]);var a=Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"General Assembly Immersive"}),Object(f.jsx)("p",{children:"General Assembly  (Nov 2020 - Jan 2020)"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:'3 Month Full-Time Software Engineering Immersive "Bootcamp"'}),Object(f.jsx)("li",{children:"The course covers full-stack front-end and back-end development"})]})]}),l=Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Project Manager eCommerce"}),Object(f.jsx)("p",{children:"Pinnacle Pumps  (Oct 2019 - Feb 2020)"}),Object(f.jsx)("ul",{children:Object(f.jsx)("li",{children:"Project manager for the development and launch of Pinnace Pumps eCommerce website"})})]}),o=Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Commercial IT Manager"}),Object(f.jsx)("p",{children:"RINGSPANN South Africa  (Jan 2019 - Feb 2020)"}),Object(f.jsx)("ul",{children:Object(f.jsx)("li",{children:"I oversaw daily operations (IT systems - mainly SAP, business analysis, company associations, and employee activities) to promote consistency of service among divisions."})})]}),j=Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Project Manager SAP Implementation"}),Object(f.jsx)("p",{children:"RINGSPANN South Africa  (Jan 2018 - Dec 2019)"}),Object(f.jsx)("ul",{children:Object(f.jsx)("li",{children:"RINGSPANN needed to implement SAP as part of their global strategy to integrate all subsidiaries worldwide on one central ERP system."})})]}),d=Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Project Manager eCommerce"}),Object(f.jsx)("p",{children:"Bearings Online  (Jul 2015 - Sep 2016)"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"As part of a strategic decision, I managed the project to start, develop and run a sister company, Bearings Online."}),Object(f.jsx)("li",{children:"The project was an online marketing approach to selling power transmission products via an eCommerce platform."})]})]}),b=Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"General Manager"}),Object(f.jsx)("p",{children:"Sprag Components (Aug 2012 - Jun 2017)"}),Object(f.jsx)("p",{children:"I was responsible for supervising lower-level managers. These divisions included; sales, marketing, accounts, procurement, workshop management, and human resources. Duties included hiring, training, coaching and disciplining lower-level managers. I was also involved with appraising the efficiency of departments and creating strategic plans for the business."})]});return Object(f.jsx)("div",{className:"timeline__story",style:e.storyStyle,children:n})},S=(c(88),function(e){var t=Object(i.useState)(!0),c=Object(r.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)(!1),l=Object(r.a)(a,2),o=l[0],j=l[1],d=Object(i.useState)(!1),b=Object(r.a)(d,2),h=b[0],O=b[1],x=Object(i.useState)(!1),u=Object(r.a)(x,2),p=u[0],m=u[1],w=Object(i.useState)(!1),g=Object(r.a)(w,2),y=g[0],v=g[1],S=Object(i.useState)(!1),C=Object(r.a)(S,2),N=C[0],T=C[1],W=Object(i.useState)("80vw"),I=Object(r.a)(W,2),A=I[0],B=I[1],R=Object(i.useState)("100px"),J=Object(r.a)(R,2),P=J[0],E=J[1],M=Object(i.useState)("73px"),L=Object(r.a)(M,2),F=L[0],G=L[1],q=Object(i.useState)(""),H=Object(r.a)(q,2),D=H[0],K=H[1],z=Object(i.useState)({position:"relative",top:"-1170px",left:"350px",width:"40vw"}),V=Object(r.a)(z,2),U=V[0],Q=V[1],X=Object(i.useState)({position:"relative",backgroundColor:"rgba(240, 242, 245,1)",padding:"30px",top:"-1150px",left:"350px",width:"30vw"}),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1];Object(i.useEffect)((function(){e.windowWidth<1090?B("100vw"):e.windowWidth>=1090&&B("80vw"),e.windowWidth<600?(E("30px"),G("5px"),K("none"),Q({position:"relative",top:"-1000px",left:"10px",width:"80vw"}),$({position:"relative",backgroundColor:"rgba(240, 242, 245,1)",padding:"30px",top:"-960px",left:"80px",width:"65vw"})):e.windowWidth>=600&&(E("100px"),G("73px"),K(""),Q({position:"relative",top:"-1170px",left:"350px",width:"40vw"}),$({position:"relative",backgroundColor:"rgba(240, 242, 245,1)",padding:"30px",top:"-1150px",left:"350px",width:"30vw"}))}),[e.windowWidth]);var ee={fontSize:62,color:"#1DA1F2"},te=function(){s(!0),j(!1),O(!1),m(!1),v(!1),T(!1)},ce=function(){s(!1),j(!0),O(!1),m(!1),v(!1),T(!1)},ie=function(){s(!1),j(!1),O(!0),m(!1),v(!1),T(!1)},ne=function(){s(!1),j(!1),O(!1),m(!0),v(!1),T(!1)},se=function(){s(!1),j(!1),O(!1),m(!1),v(!0),T(!1)},ae=function(){s(!1),j(!1),O(!1),m(!1),v(!1),T(!0)};return Object(f.jsxs)("div",{className:"timeline",id:"timeline",style:{width:A},children:[Object(f.jsx)("div",{className:"timeline__line",style:{left:P}}),Object(f.jsx)("div",{className:"timeline__circle one",onClick:te,style:{left:F},children:Object(f.jsx)(k.a,{style:ee})}),Object(f.jsx)("div",{className:"timeline__circle two",onClick:ce,style:{left:F},children:Object(f.jsx)(k.a,{style:ee})}),Object(f.jsx)("div",{className:"timeline__circle three",onClick:ie,style:{left:F},children:Object(f.jsx)(k.a,{style:ee})}),Object(f.jsx)("div",{className:"timeline__circle four",onClick:ne,style:{left:F},children:Object(f.jsx)(k.a,{style:ee})}),Object(f.jsx)("div",{className:"timeline__circle five",onClick:se,style:{left:F},children:Object(f.jsx)(k.a,{style:ee})}),Object(f.jsx)("div",{className:"timeline__circle six",onClick:ae,style:{left:F},children:Object(f.jsx)(k.a,{style:ee})}),Object(f.jsx)("div",{className:"timeline__dateOne",style:{display:D},children:!0===n?Object(f.jsx)("p",{onClick:te,children:Object(f.jsx)("strong",{children:"Nov 2020 - Jan 2021"})}):Object(f.jsx)("p",{onClick:te,children:"Nov 2020 - Jan 2021"})}),Object(f.jsx)("div",{className:"timeline__dateTwo",style:{display:D},children:!0===o?Object(f.jsx)("p",{onClick:ce,children:Object(f.jsx)("strong",{children:"Oct 2019 - Feb 2020"})}):Object(f.jsx)("p",{onClick:ce,children:"Oct 2019 - Feb 2020"})}),Object(f.jsx)("div",{className:"timeline__dateThree",style:{display:D},children:!0===h?Object(f.jsx)("p",{onClick:ie,children:Object(f.jsx)("strong",{children:"Jan 2019 - Feb 2020"})}):Object(f.jsx)("p",{onClick:ie,children:"Jan 2019 - Feb 2020"})}),Object(f.jsx)("div",{className:"timeline__dateFour",style:{display:D},children:!0===p?Object(f.jsx)("p",{onClick:ne,children:Object(f.jsx)("strong",{children:"Jan 2018 - Dec 2019"})}):Object(f.jsx)("p",{onClick:ne,children:"Jan 2018 - Dec 2019"})}),Object(f.jsx)("div",{className:"timeline__dateFive",style:{display:D},children:!0===y?Object(f.jsx)("p",{onClick:se,children:Object(f.jsx)("strong",{children:"Jul 2015 - Sep 2016"})}):Object(f.jsx)("p",{onClick:se,children:"Jul 2015 - Sep 2016"})}),Object(f.jsx)("div",{className:"timeline__dateSix",style:{display:D},children:!0===N?Object(f.jsx)("p",{onClick:ae,children:Object(f.jsx)("strong",{children:"Aug 2012 - Jun 2017"})}):Object(f.jsx)("p",{onClick:ae,children:"Aug 2012 - Jun 2017"})}),Object(f.jsx)("h1",{className:"timeline__heading",style:U,children:"My work history"}),Object(f.jsx)(_,{one:n,two:o,three:h,four:p,five:y,six:N,storyStyle:Z})]})}),C=c(112),N=c(113),T=c(114),W=c(117),I=c(116),A=c(62),B=(c(89),function(e){var t=Object(i.useState)({}),c=Object(r.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)({offset:4}),l=Object(r.a)(a,2),o=l[0],j=l[1],d=Object(i.useState)({offset:1}),b=Object(r.a)(d,2),h=b[0],O=b[1],x=Object(i.useState)(4),u=Object(r.a)(x,2),p=u[0],m=u[1];Object(i.useEffect)((function(){if(e.windowWidth<1195){s({display:"none"})}else if(e.windowWidth>1195){s({position:"relative",marginLeft:"20px",top:"-1480px",width:"200px"})}e.windowWidth<1075?(j({}),O({}),m(0)):e.windowWidth>1075&&(j({offset:4}),O({offset:1}),m(4))}),[e.windowWidth]);var w={width:"18rem",height:"48rem",backgroundColor:"rgba(240, 242, 245,1)",marginTop:"20px"},g={width:"18rem",backgroundColor:"rgba(240, 242, 245,1)",marginTop:"20px"},y=function(){window.open("https://swaff-y.github.io/tic-tac-toe/","_blank")},v=function(){window.open("https://swaff-y.github.io/burning-airlines-react/#/","_blank")},k=function(){window.open("https://rent-help.herokuapp.com/","_blank")},_=function(){window.open("https://stacey-lewis.github.io/react-air-cnb-app/#/","_blank")},S=function(){window.open("https://swaff-y.github.io/mapChat-react/#/","_blank")};return Object(f.jsxs)("div",{className:"projects",id:"projects",children:[Object(f.jsxs)(C.a,{children:[Object(f.jsxs)(N.a,{md:p,className:"projects__firstRow",children:[Object(f.jsx)(T.a,{md:o,children:Object(f.jsxs)(W.a,{style:w,children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785394/TicTac_haxsiw.jpg",onClick:y,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:y,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"Tic-Tac-Toe"})}),Object(f.jsx)(W.a.Text,{children:"Can you beat the computer? A simple Tic Tac Toe where you can test your skills against the computer."})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:y,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:y,children:[Object(f.jsx)(A.a,{children:"JavaScript"}),Object(f.jsx)(A.a,{children:"HTML"}),Object(f.jsx)(A.a,{children:"CSS"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/swaff-y/tic-tac-toe",target:"_blank",children:"GitHub Repo"})})]})}),Object(f.jsx)(T.a,{md:h,children:Object(f.jsxs)(W.a,{style:w,children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785417/burnAirlines_sees6p.jpg",onClick:v,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:v,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"Burning Airlines"})}),Object(f.jsx)(W.a.Text,{children:"A group pressure test to see how quickly we can deliver a working product. Burning Airlines is an airline ticket reservation app built in two and a half days."})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:v,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:v,children:[Object(f.jsx)(A.a,{children:"Ruby on Rails"}),Object(f.jsx)(A.a,{children:"ReactJS"}),Object(f.jsx)(A.a,{children:"Bootstrap"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/swaff-y/burning-airlines-react",target:"_blank",children:"GitHub Repo"})})]})})]}),Object(f.jsxs)(N.a,{className:"projects__secondRow",children:[Object(f.jsx)(T.a,{children:Object(f.jsxs)(W.a,{style:g,children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785397/rentHelp_pjflqj.jpg",onClick:k,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:k,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"Rent-Help"})}),Object(f.jsx)(W.a.Text,{children:"Are you a tenant? Are you a landlord? Rent Help connects you!"})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:k,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:k,children:[Object(f.jsx)(A.a,{children:"Ruby on Rails"}),Object(f.jsx)(A.a,{children:"JavaScript"}),Object(f.jsx)(A.a,{children:"HTML"}),Object(f.jsx)(A.a,{children:"CSS"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/swaff-y/rent-help",target:"_blank",children:"GitHub Repo"})})]})}),Object(f.jsx)(T.a,{children:Object(f.jsxs)(W.a,{style:g,children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785401/AirCnB_xidwfy.jpg",onClick:_,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:_,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"AirCnB"})}),Object(f.jsxs)(W.a.Text,{children:["An Air BnB clone website. Use the login details, kyle@ga.co Password: chicken, to have a wonder around the website. ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("strong",{children:"The Website Boasts:"}),Object(f.jsx)("br",{})," Online transactions, Dashboard, Booking emails, and so much more."]})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:_,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:_,children:[Object(f.jsx)(A.a,{children:"Ruby on Rails"}),Object(f.jsx)(A.a,{children:"ReactJS"}),Object(f.jsx)(A.a,{children:"Bootstrap"}),Object(f.jsx)(A.a,{children:"ChartsJS"}),Object(f.jsx)(A.a,{children:"BrainTree"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/stacey-lewis/react-air-cnb-app",target:"_blank",children:"GitHub Repo"})})]})}),Object(f.jsx)(T.a,{children:Object(f.jsxs)(W.a,{style:g,children:[Object(f.jsx)(W.a.Img,{variant:"top",src:"https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785788/Screen_Shot_2021-02-08_at_11.02.57_pm_chjazt.png",onClick:S,className:"projects__click"}),Object(f.jsxs)(W.a.Body,{onClick:S,className:"projects__click",children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsx)("strong",{children:"mapChat"})}),Object(f.jsx)(W.a.Text,{children:"An application that logs GPS co-ordinates with a simple whatsApp type chat application. Common use cases for the type of application include; companies with reps on the road, chatting about surf sites, notifying people of traffic congestions, etc. The uses for this type of application are only limited by the imagination."})]}),Object(f.jsx)(W.a.Title,{style:{marginLeft:"1rem"},onClick:S,className:"projects__click",children:Object(f.jsx)("strong",{children:"Tech Stack: "})}),Object(f.jsxs)(I.a,{className:"list-group-flush",onClick:S,children:[Object(f.jsx)(A.a,{children:"MongoDB"}),Object(f.jsx)(A.a,{children:"Mongoose"}),Object(f.jsx)(A.a,{children:"ExpressJS"}),Object(f.jsx)(A.a,{children:"NodeJS"}),Object(f.jsx)(A.a,{children:"ReactJS"}),Object(f.jsx)(A.a,{children:"Pusher"})]}),Object(f.jsx)(W.a.Body,{children:Object(f.jsx)(W.a.Link,{href:"https://github.com/swaff-y/mapChat-react",target:"_blank",children:"GitHub Repo"})})]})})]})]}),Object(f.jsx)("h1",{className:"projects__heading",style:n,children:"Some of My Projects"})]})}),R=(c(90),function(e){var t=Object(i.useState)({flex:.65}),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(i.useEffect)((function(){var t;""!==(t=e.location.pathname.substring(1))&&document.getElementById(t).scrollIntoView()}),[]),Object(i.useEffect)((function(){!0===e.sidebar?s({flex:.65}):!1===e.sidebar&&s({flex:1,width:"100vw"})}),[e.sidebar]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"main",style:n,children:[Object(f.jsx)(g,{windowWidth:e.windowWidth}),Object(f.jsx)(y,{windowWidth:e.windowWidth}),Object(f.jsx)(S,{windowWidth:e.windowWidth}),Object(f.jsx)(B,{windowWidth:e.windowWidth})]})})}),J=c(61),P=c(9);var E=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(!1),a=Object(r.a)(s,2),o=a[0],b=a[1],h=j(),x=(h.height,h.width);Object(i.useEffect)((function(){p(x)}),[x]);var u=function(){!0===c?n(!1):!1===c&&n(!0)},p=function(e){e<1090?n(!1):e>=1090&&n(!0),e<600?b(!0):e>=600&&b(!1)};return Object(f.jsxs)("div",{className:"app",children:[!0===c?Object(f.jsx)(m,{toggleSidebar:u,toggleMainOff:function(){!0===o?b(!1):!1===o&&b(!0)},windowWidth:x,sidebar:c,mainOff:o,turnMainOff:function(e){!0===e?b(!0):!1===o&&b(!1)}}):Object(f.jsx)(d.a,{onClick:u,className:"app__sidebarButton",children:Object(f.jsx)(O.a,{})}),!0===o&&!0===c?Object(f.jsx)("div",{className:"stub"}):Object(f.jsxs)(J.a,{children:[Object(f.jsx)(P.a,{exact:!0,path:"/",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}}),Object(f.jsx)(P.a,{exact:!0,path:"/introduction",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}}),Object(f.jsx)(P.a,{exact:!0,path:"/about",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}}),Object(f.jsx)(P.a,{exact:!0,path:"/projects",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}}),Object(f.jsx)(P.a,{exact:!0,path:"/timeline",render:function(e){return Object(f.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{sidebar:c,windowWidth:x}))}})]})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,118)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))};a.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root")),M()}},[[95,1,2]]]);
//# sourceMappingURL=main.b5a8d8e8.chunk.js.map