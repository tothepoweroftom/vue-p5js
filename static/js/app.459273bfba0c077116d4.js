webpackJsonp([1],{DVm1:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(e){n("gsu9")},null,null).exports,a=n("/ocq"),o=function(e){var t=0,n=0;e.setup=function(){t=document.getElementById("sketch").clientWidth,n=document.getElementById("sketch").clientHeight,e.createCanvas(t,n)},e.draw=function(){e.fill(0),e.ellipse(e.random(0,t),e.random(0,n),10,10)},e.windowResized=function(){t=document.getElementById("sketch").clientWidth,n=document.getElementById("sketch").clientHeight,e.resizeCanvas(t,n)}},s=n("RBYm"),u=n.n(s),l={name:"HelloWorld",data:function(){return{myp5:null}},mounted:function(){this.myp5=new u.a(o,document.getElementById("sketch"))}},d={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"sketch",attrs:{id:"sketch"}})},staticRenderFns:[]};var m=n("VU/8")(l,d,!1,function(e){n("DVm1")},"data-v-b2d78850",null).exports;c.a.use(a.a);var p=new a.a({routes:[{path:"/",name:"HelloWorld",component:m}]});c.a.config.productionTip=!1,new c.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},gsu9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.459273bfba0c077116d4.js.map