(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(18),r=n.n(i),o=(n(29),n(30),function(e){return e.children}),l=n(5),u=n(19),j=n(20),h=n(23),b=n(22),d=n(21),m=n.n(d),O=n(9),f=n(4),p=(n(49),function(e){return Object(c.jsxs)("aside",{className:"right",children:[Object(c.jsxs)("h1",{className:"ntext",children:["Number of Nominations: ",e.count]}),Object(c.jsxs)("h3",{className:"nList",children:["Nomination list: ",e.nominationList]})]})}),x=(n(50),function(e){var t=Object(a.useState)(0),n=Object(f.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)([]),o=Object(f.a)(r,2),l=o[0],u=o[1],j=Object(a.useState)([]),h=Object(f.a)(j,2),b=(h[0],h[1],Object(a.useState)([])),d=Object(f.a)(b,2),m=d[0],x=d[1],v=e.results.map((function(e,t){return Object(c.jsxs)("p",{className:"resultList",children:[Object(c.jsxs)("span",{className:"tspan",children:["Title : ",e.Title]}),Object(c.jsxs)("span",{children:["Year released : ",e.Year]}),Object(c.jsx)("button",{id:e.imdbID,className:"addButton",disabled:m.includes(e.imdbID),onClick:function(){return g(e.Title,e.Year,e.imdbID,t)},children:"Nominate"})]},t)})),g=function(e,t,n,c,a){5===s?alert("You have reached the limit of 5."):(i(s+1),u([].concat(Object(O.a)(l),[{Title:e,Year:t,Key:n}])),x([].concat(Object(O.a)(m),[n])))},N=l.map((function(e,t){return Object(c.jsxs)("p",{children:[Object(c.jsxs)("span",{className:"tspan",children:[" Title : ",e.Title]}),Object(c.jsxs)("span",{children:["Year released : ",e.Year]}),Object(c.jsx)("button",{className:"removeButton",onClick:function(n){return function(e,t){i(s-1),l.splice(e,1),document.getElementById(t);var n=m.indexOf(t);n>-1&&m.splice(n,1)}(t,e.Key)},children:"Remove"})]},t)}));return Object(c.jsxs)("div",{className:"DisplayPannel",children:[Object(c.jsx)("h1",{children:Object(c.jsxs)("section",{className:"sectionLeft",children:[Object(c.jsxs)("strong",{children:["Searched results for: ",e.typed]}),Object(c.jsx)("ul",{children:v})]})}),Object(c.jsx)(p,{count:s,nominationList:N})]})}),v=n(8),g=(n(51),function(e){return Object(c.jsx)("input",Object(v.a)(Object(v.a)({},e),{},{className:"SearchBar",type:"text",placeholder:"Enter movie here.."}))}),N=(n(52),function(e){return Object(c.jsx)("button",{className:"SearchButton",children:"Search"})}),S=(n(53),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log("here is the submit",c.state.movieName),c.state.movieName.length>1&&(c.getInfo(),c.setState({query:c.state.movieName})),console.log("here is th quer::",c.state.query)},c.handleInputChange=function(e){e.preventDefault(),console.log("Input change : ",e.target.name),c.setState(Object(l.a)({},e.target.name,e.target.value))},c.getInfo=function(){m.a.get("".concat("https://www.omdbapi.com/?i=tt3896198&apikey=cba1d777","&s=").concat(c.state.movieName)).then((function(e){var t=e.data;"True"===t.Response?c.setState({results:t.Search}):alert("Please enter the movie name again!")}))},c.state={movieName:"",query:"",results:[]},c}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.movieName;return Object(c.jsxs)("div",{className:"Search",children:[Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsx)(g,{name:"movieName",onChange:this.handleInputChange}),Object(c.jsx)(N,{})]}),Object(c.jsx)(x,{typed:e,results:this.state.results})]})}}]),n}(a.Component));var y=function(){return Object(c.jsx)(o,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Your movie nomination list!"})}),Object(c.jsx)("main",{style:{backgroundColor:"lightblue"},children:Object(c.jsx)(S,{})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),I()}},[[54,1,2]]]);
//# sourceMappingURL=main.2a1af71b.chunk.js.map