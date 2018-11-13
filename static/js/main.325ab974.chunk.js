(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),c=(a(13),a(1)),l=a(2),o=a(4),p=a(3),m=a(5),u=(a(15),function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"#",id:"top",onClick:e.clickHandler},"HackerNews"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:e.clickHandler,id:"top"},"Top")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:e.clickHandler,id:"new"},"New")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:e.clickHandler,id:"best"},"Best")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:e.clickHandler,id:"show"},"Show")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:e.clickHandler,id:"ask"},"Ask")))))}),d=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("small",null,r.a.createElement("span",{className:"badge badge-primary"},this.props.story.score)," points ",r.a.createElement("span",{className:"badge badge-primary"},this.props.story.descendants)," ",r.a.createElement("a",{href:"https://news.ycombinator.com/item?id="+this.props.story.id,target:"_blank"},"comments")," ",this.props.story.url?r.a.createElement("span",{className:"badge badge-light"},this.props.story.url.split("//")[1].split("/")[0]):null))}}]),t}(n.Component),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={story:{id:0,title:"",url:"",score:0,descendants:0},loaded:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://hacker-news.firebaseio.com/v0/item/"+this.props.itemID+".json").then(function(e){return e.json()}).then(function(t){return e.setState({story:t,loaded:!0})})}},{key:"render",value:function(){return r.a.createElement("a",{className:"list-group-item list-group-item-action",href:this.state.story.url?this.state.story.url:null},r.a.createElement("div",null,this.props.index+this.props.page*this.props.storiesPerPage+1+". ",this.state.story.title),r.a.createElement(d,{story:this.state.story}))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],loaded:!1},a.i=0,a.componentDidMount=function(){a.loadStories()},a.componentDidUpdate=function(){a.loadStories()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"loadStories",value:function(){var e=this;fetch("https://hacker-news.firebaseio.com/v0/"+this.props.type+"stories.json").then(function(e){return e.json()}).then(function(t){return e.setState({loaded:!0,items:t.slice(e.props.page*e.props.storiesPerPage,(e.props.page+1)*e.props.storiesPerPage)})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"list-group"},this.state.items.map(function(t,a){return r.a.createElement(h,{itemID:t,index:a,key:t,page:e.props.page,storiesPerPage:e.props.storiesPerPage})}))}}]),t}(n.Component),v=(a(17),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination justify-content-center"},r.a.createElement("li",{className:"page-item",onClick:this.props.clickHandler},r.a.createElement("a",{className:"page-link",href:"#",id:"prev"},"Previous")),r.a.createElement("li",{className:"page-item-disabled",onClick:this.props.clickHandler},r.a.createElement("div",{className:"page-link"},this.props.page+1)),r.a.createElement("li",{className:"page-item",onClick:this.props.clickHandler},r.a.createElement("a",{className:"page-link",href:"#",id:"next"},"Next"))))}}]),t}(n.Component)),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={itemsPerPage:10,currentPage:0,storyType:"top"},a.storyTypeHandler=function(e){console.log(e.target.id),a.setState({currentPage:0,storyType:e.target.id})},a.pageChangeHandler=function(e){console.log(e.target.id),"next"==e.target.id&&a.state.currentPage<10?a.setState({currentPage:a.state.currentPage+1}):"prev"==e.target.id&&a.state.currentPage>0&&a.setState({currentPage:a.state.currentPage-1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container",style:{width:"50rem"}},r.a.createElement(u,{clickHandler:this.storyTypeHandler}),r.a.createElement(g,{page:this.state.currentPage,storiesPerPage:this.state.itemsPerPage,type:this.state.storyType}),r.a.createElement(v,{page:this.state.currentPage,clickHandler:this.pageChangeHandler}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.325ab974.chunk.js.map