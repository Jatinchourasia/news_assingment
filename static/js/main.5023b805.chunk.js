(this.webpackJsonpnews_assingment=this.webpackJsonpnews_assingment||[]).push([[0],{32:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var r,c,a=t(0),i=t.n(a),s=t(22),o=t.n(s),d=(t(32),t(5)),u=t(11),l=t(6),p=t(1),b=function(n){var e=n.source,t=n.description,r=n.title,c=n.image;return Object(p.jsxs)(j.Card,{bgImg:c,children:[Object(p.jsx)("div",{className:"blogImageDiv"}),Object(p.jsxs)("div",{className:"cardWrap",children:[Object(p.jsx)("p",{className:"source",children:e&&e}),Object(p.jsxs)("h2",{className:"title",children:[r&&r.slice(0,80),"..."]}),Object(p.jsxs)("p",{className:"description",children:[t&&t.slice(0,100),"..."]})]})]})},j={Card:l.a.div(r||(r=Object(d.a)(["\n    box-shadow: 7px 7px 9px rgba(66, 65, 65, 0.12);\n    border-radius: 2px;\n    background: #ffffff;\n    min-width: 90%;\n    border-radius: 6px;\n    .source {\n      color: #a8a8a8;\n    }\n    .title {\n      font-size: 1.2rem;\n    }\n    .description {\n      font-size: 1rem;\n      overflow: hidden !important;\n      text-overflow: ellipsis;\n    }\n    .blogImageDiv {\n      height: 12rem;\n      background: ",";\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n    }\n    .cardWrap {\n      padding: 1rem;\n      min-height: 15rem;\n    }\n  "])),(function(n){return"url(".concat(n.bgImg,")")}))},m=t(10),h=t.n(m),f=t(26),g=t(27),x=t.n(g),O=function(){var n=Object(f.a)(h.a.mark((function n(e){var t,r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.a.get("".concat("https://newsapi.org/v2/top-headlines","?country=").concat(e,"&pageSize=12&apiKey=").concat("553dce808cbe4978ba0bbaf357d6951f"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=["ae","ar","at","au","be","bg","br","ca","ch","nz","ph","pl","pt"],w=t(53).v4,k=function(){var n=Object(a.useState)([]),e=Object(u.a)(n,2),t=e[0],r=e[1],c=Object(a.useState)("us"),i=Object(u.a)(c,2),s=i[0],o=i[1],d=function(n){O(n).then((function(n){r(n.articles)}))};return Object(a.useEffect)((function(){d(s)}),[]),Object(a.useEffect)((function(){d(s)}),[s]),Object(p.jsxs)(N.News,{children:[Object(p.jsx)("header",{children:Object(p.jsxs)("select",{placeholder:"country",children:[Object(p.jsx)("option",{children:s}),v&&v.map((function(n){return Object(p.jsx)("option",{onClick:function(){return o(n)},value:n,children:n},n)}))]})}),Object(p.jsx)("h1",{children:"Trending News"}),Object(p.jsx)("div",{className:"cardContainer",children:t&&t.map((function(n){return Object(p.jsx)("div",{className:"strcard",children:Object(p.jsx)(b,{source:n.source.name,description:n.description,title:n.title,image:n.urlToImage},w())},w())}))})]})},N={News:l.a.div(c||(c=Object(d.a)(["\n    width: 100%;\n    min-height: 80vh;\n\n    header {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      select {\n        width: 80vw;\n        font-size: 1.2rem;\n        padding: 0.5rem;\n      }\n    }\n\n    h1 {\n      margin-bottom: 2rem;\n    }\n    .cardContainer {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 30px;\n      margin-bottom: 2rem;\n    }\n\n    @media (max-width: 768px) {\n      background-position: top;\n      background-size: 110%;\n      .cardContainer {\n        grid-template-columns: repeat(1, 1fr);\n      }\n      .strcard {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    }\n  "])))};var y=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(k,{})})};o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.5023b805.chunk.js.map