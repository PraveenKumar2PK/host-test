(this["webpackJsonpngo-front"]=this["webpackJsonpngo-front"]||[]).push([[0],{1:function(e,t,n){e.exports={header:"Header_header__21Md3",headerDescription:"Header_headerDescription__3xiNb",headerTitle:"Header_headerTitle__2zwmz",navbarCollapse:"Header_navbarCollapse__CPN9u",navbarHide:"Header_navbarHide__1-VGo",navButtonTab:"Header_navButtonTab__QL14m",collapse:"Header_collapse__14s8e",navbarToggler:"Header_navbarToggler__1y3Uz",mainNavUl:"Header_mainNavUl__6UzsP",navItem:"Header_navItem__BzXkm",navLink:"Header_navLink__2Bf4a",activeTab:"Header_activeTab__2mZMi"}},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(80),i=n.n(o),l=(n(96),n(97),n(3)),c=n(4),s=n(6),u=n(5),m=n(7),p=n(87),b=n(19),O=n(12),h=n(32),f=n(1),v=function(e){return e.join(" ")};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={buttonMenuOpen:!1},n.onClickTabHandler=function(e){var t=parseInt(e.target.getAttribute("value"));-1!==[1,2,3,4].indexOf(t)&&n.props.onClickTab(t)},n.onClickMenuButtonHandler=function(e){n.setState((function(e){return{buttonMenuOpen:!e.buttonMenuOpen}}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.currentTab;return r.a.createElement("div",{style:this.props.style?d({},this.props.style):null,className:f.header},r.a.createElement("h1",{className:f.headerTitle},this.props.title),r.a.createElement("p",{className:f.headerDescription},this.props.description),r.a.createElement("div",{className:f.navButtonTab},r.a.createElement("button",{className:f.navbarToggler,onClick:this.onClickMenuButtonHandler},r.a.createElement(h.a,{type:"menu"})),r.a.createElement("div",{className:this.state.buttonMenuOpen?f.navbarCollapse:f.navbarHide},r.a.createElement("ul",{className:f.mainNavUl},r.a.createElement("li",{className:f.navItem},r.a.createElement("div",{className:v([f.navLink,1===e?f.activeTab:""]),value:1,onClick:this.onClickTabHandler,href:"/home"},"Home")),r.a.createElement("li",{className:f.navItem},r.a.createElement("div",{className:v([f.navLink,2===e?f.activeTab:""]),value:2,onClick:this.onClickTabHandler,href:"/home"},"About")),r.a.createElement("li",{className:f.navItem},r.a.createElement("div",{className:v([f.navLink,3===e?f.activeTab:""]),value:3,onClick:this.onClickTabHandler,href:"/home"},"Our Team")),r.a.createElement("li",{className:f.navItem},r.a.createElement("div",{className:v([f.navLink,4===e?f.activeTab:""]),value:4,onClick:this.onClickTabHandler,href:"/home"},"Contact Us"))))))}}]),t}(r.a.Component),j=n(35);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.style),r.a.createElement("div",{style:this.props.style?E({},this.props.style):null,className:j.mainContent},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h2",{className:j.mainTitle},"Welcome to NGO Home")),r.a.createElement("p",{className:j.mainPara},"DEFINITION OF NGOs. A non-governmental organization (NGO) is any non-profit, voluntary citizens' group which is organized on a local, national or international level. Some are organized around specific issues, such as human rights, environment or health.")),r.a.createElement("div",null))}}]),t}(r.a.Component),N=n(36);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.style),r.a.createElement("div",{style:this.props.style?T({},this.props.style):null,className:N.mainContent},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h2",{className:N.mainTitle},"Welcome to NGO Team")),r.a.createElement("p",{className:N.mainPara},"DEFINITION OF NGOs. A non-governmental organization (NGO) is any non-profit, voluntary citizens' group which is organized on a local, national or international level. Some are organized around specific issues, such as human rights, environment or health.")),r.a.createElement("div",null))}}]),t}(r.a.Component),k=n(37);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.style),r.a.createElement("div",{style:this.props.style?D({},this.props.style):null,className:k.mainContent},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h2",{className:k.mainTitle},"Welcome to NGO About")),r.a.createElement("p",{className:k.mainPara},"DEFINITION OF NGOs. A non-governmental organization (NGO) is any non-profit, voluntary citizens' group which is organized on a local, national or international level. Some are organized around specific issues, such as human rights, environment or health.")),r.a.createElement("div",null))}}]),t}(r.a.Component),I=n(38);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.style),r.a.createElement("div",{style:this.props.style?S({},this.props.style):null,className:I.mainContent},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h2",{className:I.mainTitle},"Welcome to NGO Contact")),r.a.createElement("p",{className:I.mainPara},"DEFINITION OF NGOs. A non-governmental organization (NGO) is any non-profit, voluntary citizens' group which is organized on a local, national or international level. Some are organized around specific issues, such as human rights, environment or health.")),r.a.createElement("div",null))}}]),t}(r.a.Component),M=n(150),B=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={currentTab:1},n.content=function(){switch(n.state.currentTab){case 1:return r.a.createElement(C,null);case 2:return r.a.createElement(z,null);case 3:return r.a.createElement(w,null);case 4:return r.a.createElement(A,null);default:return r.a.createElement(C,null)}},n.onClickTabHandler=function(e){n.setState({currentTab:e})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(M.a,{className:"layout"},r.a.createElement(g,{title:"Vallinam Foundation",description:"NGO Organisation",onClickTab:this.onClickTabHandler,currentTab:this.state.currentTab}),this.content())}}]),t}(r.a.Component);function F(){return r.a.createElement("div",null)}var x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/home"},r.a.createElement(B,null)),r.a.createElement(b.b,{path:"/admin"},r.a.createElement(F,null)),r.a.createElement(b.b,{path:"/"},r.a.createElement(b.a,{to:{pathname:"/home"}}))))}}]),t}(r.a.Component);var L=function(){return r.a.createElement(x,null)};n(148),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e,t,n){e.exports={mainContent:"HomeContent_mainContent__3Ga0P",mainTitle:"HomeContent_mainTitle__1QnDX",mainPara:"HomeContent_mainPara__l3_eZ",gallery:"HomeContent_gallery__1uGEy"}},36:function(e,t,n){e.exports={mainContent:"TeamContent_mainContent__3NfIe",mainTitle:"TeamContent_mainTitle__uRbMZ",mainPara:"TeamContent_mainPara__2-ecd",gallery:"TeamContent_gallery__BB5Rw"}},37:function(e,t,n){e.exports={mainContent:"AboutContent_mainContent__38UrX",mainTitle:"AboutContent_mainTitle__zWwMn",mainPara:"AboutContent_mainPara__A_lHM",gallery:"AboutContent_gallery__2G8VX"}},38:function(e,t,n){e.exports={mainContent:"ContactContent_mainContent__3Ar4o",mainTitle:"ContactContent_mainTitle__qbHOE",mainPara:"ContactContent_mainPara__3M63C",gallery:"ContactContent_gallery__jL5aV"}},91:function(e,t,n){e.exports=n(149)},96:function(e,t,n){},97:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.886456db.chunk.js.map