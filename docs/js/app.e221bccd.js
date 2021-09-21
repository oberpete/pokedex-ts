(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],v=0,d=[];v<i.length;v++)s=i[v],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},n={app:0},r=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"3dfd":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-system-bar",{staticClass:"white--text",attrs:{app:"",color:"teal darken-3"}},[a("v-spacer"),a("span",{staticClass:"overline pr-1 font-weight-bold"},[t._v("POKEDEX")]),a("span",{staticClass:"caption"},[t._v(" by Peter Oberhauser ")])],1),a("PokemonDetailsDrawer"),a("v-main",[a("PokemonList")],1),a("v-footer",{attrs:{app:"",color:"transparent",height:"72",inset:""}})],1)},n=[],r=a("d4ec"),s=a("262e"),i=a("2caf"),c=a("9ab4"),l=a("1b40"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",t._l(t.pokemons,(function(t,e){return a("v-col",{key:e,attrs:{cols:"12",md:"4"}},[a("PokemonCard",{attrs:{name:t.name,url:t.url}})],1)})),1),a("v-row",{staticClass:"text-center"},[a("v-col",[a("v-btn",{attrs:{"x-large":"",color:t.loading?"grey lighten-2":"teal darken-3",dark:"",depressed:"",rounded:""},on:{click:function(e){return t.showMorePokemons()}}},[t.loading?a("v-progress-circular",{staticClass:"mr-2",attrs:{color:"white",indeterminate:""}}):t._e(),t.loading?t._e():a("v-icon",{staticClass:"mr-2"},[t._v("mdi-dots-horizontal")]),t._v(" show more pokemons ")],1)],1)],1)],1)},v=[],d=a("bee2"),p=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h4 font-weight-bold",attrs:{id:"name"}},[t._v(" "+t._s(t._f("capitalize")(t.name))+" ")])],1),a("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"white"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+t.pokeId+".svg"}})])],1),a("v-card-actions"),a("v-card-actions",{staticClass:"grey lighten-3"},[a("v-btn",{staticClass:"font-weight-bold",attrs:{color:"teal darken-4",text:"",block:"",dark:"",to:"/detail/"+t.pokeId}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("mdi-arrow-right")]),t._v(" VIEW DETAILS ")],1)],1)],1)}),h=[],m=(a("ac1f"),a("466d"),function(t){Object(s["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(d["a"])(a,[{key:"pokeId",get:function(){var t=/\/pokemon\/([\d]+)\/?/,e=this.url.match(t);return e&&e[1]?e[1]:"1"}}]),a}(l["c"]));Object(c["a"])([Object(l["b"])({default:"Pokemon"})],m.prototype,"name",void 0),Object(c["a"])([Object(l["b"])({default:"Pokemon"})],m.prototype,"url",void 0),m=Object(c["a"])([l["a"]],m);var f=m,b=f,g=a("2877"),k=a("6544"),_=a.n(k),C=a("8336"),y=a("b0af"),O=a("99d9"),w=a("132d"),j=a("da13"),x=a("8270"),V=a("5d23"),P=Object(g["a"])(b,p,h,!1,null,null,null),$=P.exports;_()(P,{VBtn:C["a"],VCard:y["a"],VCardActions:O["a"],VIcon:w["a"],VListItem:j["a"],VListItemAvatar:x["a"],VListItemContent:V["a"],VListItemTitle:V["b"]});var E=function(t){Object(s["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.loading=!0,t.limit=100,t.pokemons=[],t}return Object(d["a"])(a,[{key:"getPokemons",value:function(){var t=this;fetch("https://pokeapi.co/api/v2/pokemon/?limit=".concat(this.limit)).then((function(e){e.json().then((function(e){t.pokemons=[],t.pokemons=e.results,t.loading=!1}))})).catch((function(t){console.log(t)}))}},{key:"showMorePokemons",value:function(){this.loading=!0,this.limit=this.limit+100,this.getPokemons()}},{key:"created",value:function(){this.getPokemons()}}]),a}(l["c"]);E=Object(c["a"])([Object(l["a"])({components:{PokemonCard:$}})],E);var S=E,D=S,I=a("62ad"),T=a("a523"),M=a("490a"),L=a("0fd9"),z=Object(g["a"])(D,u,v,!1,null,null,null),A=z.exports;_()(z,{VBtn:C["a"],VCol:I["a"],VContainer:T["a"],VIcon:w["a"],VProgressCircular:M["a"],VRow:L["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{app:"",width:"500",right:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[!t.error&&t.loading?a("div",[a("v-btn",{staticClass:"ma-4",attrs:{rounded:"",text:"",icon:"",to:"/",id:"close"}},[a("v-icon",[t._v(" mdi-close ")])],1),a("v-skeleton-loader",{attrs:{type:"card"}})],1):t._e(),t.error?a("div",[a("v-sheet",{staticClass:"pa-4 text-center",attrs:{color:"red lighten-5"}},[a("v-icon",{attrs:{size:"100",color:"red"}},[t._v("mdi-alert-circle")]),a("div",{staticClass:"pt-4 text-h4",attrs:{id:"errorMsg"}},[t._v("Oops..")]),a("div",{staticClass:"text-body-1"},[t._v("it seems an error occured!")])],1),a("v-divider"),a("div",{staticClass:"text-center mt-5 caption font-italic"},[t._v(" Are you sure the ID you queried exists? ")])],1):t._e(),t.error||t.loading?t._e():a("div",[a("v-sheet",{staticClass:"pa-4",attrs:{color:"teal lighten-5"}},[a("v-btn",{attrs:{rounded:"",text:"",icon:"",to:"/",id:"close"}},[a("v-icon",[t._v(" mdi-close ")])],1),a("v-row",[a("img",{staticClass:"mx-auto",attrs:{height:"100",src:t.pokemon.sprites.other.dream_world.front_default}})]),a("v-row",{staticClass:"text-center align-center"},[a("v-spacer"),a("v-col",{attrs:{cols:"auto"}},[a("v-tooltip",{attrs:{left:"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[a("v-chip",t._g(t._b({attrs:{icon:"",outlined:""}},"v-chip",n,!1),o),[t._v(" "+t._s(t.pokemon.order)+" ")])]}}],null,!1,3991614512)},[a("span",[t._v("order number")])])],1),a("v-col",{staticClass:"text-h3",attrs:{cols:"auto"}},[t._v(" "+t._s(t._f("capitalize")(t.pokemon.name))+" ")]),a("v-spacer")],1),a("div")],1),a("v-divider",{staticClass:"mb-4"}),a("v-row",{staticClass:"no-gutters align-center"},[a("v-col",{staticClass:"overline text-right pr-2",attrs:{cols:"4"}},[t._v(" Species ")]),a("v-col",{attrs:{cols:"8"}},[a("span",{staticClass:"font-weight-bold text-left"},[t._v(t._s(t._f("capitalize")(t.pokemon.species.name)))])]),a("v-col",{staticClass:"overline text-right pr-2",attrs:{cols:"4"}},[t._v(" Type ")]),a("v-col",{staticClass:"text-left font-weight-bold",attrs:{cols:"8"}},[t._v(" "+t._s(t._f("capitalize")(t.pokemon.types[0].type.name))+" ")])],1),a("v-divider",{staticClass:"mt-4"}),a("v-row",{staticClass:"no-gutters text-center"},[a("v-col",{staticClass:"overline",attrs:{cols:"12"}},[t._v(" Abilities ")]),a("v-col",{staticClass:"caption"},t._l(t.pokemon.abilities,(function(e){return a("v-chip",{key:e.ability.url,staticClass:"mx-1"},[t._v(" "+t._s(e.ability.name)+" ")])})),1)],1),a("v-divider",{staticClass:"mt-4"}),a("v-row",{staticClass:"no-gutters text-center"},[a("v-col",{staticClass:"overline",attrs:{cols:"12"}},[t._v(" Stats ")]),a("v-col",{staticClass:"caption"},t._l(t.pokemon.stats,(function(e){return a("v-chip",{key:e.stat.name,staticClass:"ma-1"},[a("span",[t._v(t._s(e.stat.name)+":")]),a("span",{staticClass:"font-weight-bold ml-1"},[t._v(t._s(e.base_stat)+" ")])])})),1)],1),a("v-divider",{staticClass:"mt-4"}),a("v-row",{staticClass:"no-gutters text-center"},[a("v-col",{staticClass:"overline",attrs:{cols:"12"}},[t._v(" evolves to ")]),a("EvolutionChain")],1),a("v-divider",{staticClass:"mt-4"}),a("v-sheet",{attrs:{color:"teal lighten-5 pb-5"}},[a("v-row",{staticClass:"no-gutters text-center"},[a("v-col",{staticClass:"overline",attrs:{cols:"12"}},[t._v(" moves ")]),a("MovesList",{attrs:{moves:t.pokemon.moves},on:{"update:moves":function(e){return t.$set(t.pokemon,"moves",e)}}})],1)],1)],1)])},B=[],R=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"pa-0":""}},[t.loading?a("v-row",[a("v-col",{attrs:{cols:"12"}},[t.loading?a("v-progress-linear",{staticClass:"mx-2",attrs:{color:"teal darken-2",indeterminate:""}}):t._e()],1)],1):t._e(),t.loading?t._e():a("v-row",{staticClass:"no-gutters text-center"},[a("v-col",t._l(t.pokemonEvolutionChain.chain.evolves_to,(function(e){return a("v-chip",{key:e.species.url,staticClass:"ma-1"},[t._v(t._s(t._f("capitalize")(e.species.name)))])})),1)],1)],1)}),F=[],J=function(t){Object(s["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.loading=!0,t.pokemonEvolutionChain={},t}return Object(d["a"])(a,[{key:"onUrlChange",value:function(){this.$route.params.id&&this.getPokemonEvolutionChain(this.$route.params.id)}},{key:"getPokemonEvolutionChain",value:function(t){var e=this;this.loading=!0,fetch("https://pokeapi.co/api/v2/evolution-chain/".concat(t)).then((function(t){t.json().then((function(t){e.pokemonEvolutionChain=t,e.loading=!1}))})).catch((function(t){console.log(t)}))}},{key:"mounted",value:function(){this.getPokemonEvolutionChain(this.$route.params.id)}}]),a}(l["c"]);Object(c["a"])([Object(l["d"])("$route",{immediate:!0,deep:!0})],J.prototype,"onUrlChange",null),J=Object(c["a"])([l["a"]],J);var N=J,q=N,K=a("cc20"),W=a("8e36"),X=Object(g["a"])(q,R,F,!1,null,null,null),G=X.exports;_()(X,{VChip:K["a"],VCol:I["a"],VContainer:T["a"],VProgressLinear:W["a"],VRow:L["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"teal lighten-5",attrs:{"hide-default-header":"","hide-default-footer":"",headers:t.headers,items:t.movesTransformed},scopedSlots:t._u([{key:"top",fn:function(t){var e=t.pagination,o=t.options,n=t.updateOptions;return[a("v-data-footer",{attrs:{pagination:e,options:o,"items-per-page-text":"$vuetify.dataTable.itemsPerPageText"},on:{"update:options":n}})]}}])})},Q=[],Y=(a("d81d"),function(t){Object(s["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.loading=!0,t.headers=[{text:"Name",value:"name"}],t.moves=[],t}return Object(d["a"])(a,[{key:"movesTransformed",get:function(){return this.moves.map((function(t){return t.move}))}},{key:"getPokemonMoves",value:function(t){var e=this;this.loading=!0,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(t){t.json().then((function(t){e.moves=t.moves,e.loading=!1}))})).catch((function(t){console.log(t)}))}},{key:"mounted",value:function(){this.getPokemonMoves(this.$route.params.id)}}]),a}(l["c"]));Y=Object(c["a"])([l["a"]],Y);var Z=Y,tt=Z,et=a("f41f"),at=a("8fea"),ot=Object(g["a"])(tt,H,Q,!1,null,null,null),nt=ot.exports;_()(ot,{VDataFooter:et["a"],VDataTable:at["a"]});var rt=function(t){Object(s["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.loading=!0,t.drawer=!1,t.error=!1,t.pokemon={},t}return Object(d["a"])(a,[{key:"onUrlChange",value:function(){this.$route.params.id?(this.getPokemonDetails(this.$route.params.id),this.drawer=!0):this.drawer=!1}},{key:"drawerStateChanged",value:function(t){!1===t&&"DetailView"===this.$route.name&&this.$router.push("/")}},{key:"getPokemonDetails",value:function(t){var e=this;this.loading=!0,this.error=!1,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(t){if(t.status>=200&&t.status<=299)return t.json();throw Error(t.statusText)})).then((function(t){e.pokemon=t,e.loading=!1})).catch((function(t){console.log(t),e.error=!0}))}},{key:"mounted",value:function(){this.drawer&&this.getPokemonDetails(this.$route.params.id)}}]),a}(l["c"]);Object(c["a"])([Object(l["d"])("$route",{immediate:!0,deep:!0})],rt.prototype,"onUrlChange",null),Object(c["a"])([Object(l["d"])("drawer")],rt.prototype,"drawerStateChanged",null),rt=Object(c["a"])([Object(l["a"])({components:{EvolutionChain:G,MovesList:nt}})],rt);var st=rt,it=st,ct=a("ce7e"),lt=a("f774"),ut=a("8dd9"),vt=a("3129"),dt=a("2fa4"),pt=a("3a2f"),ht=Object(g["a"])(it,U,B,!1,null,null,null),mt=ht.exports;_()(ht,{VBtn:C["a"],VChip:K["a"],VCol:I["a"],VDivider:ct["a"],VIcon:w["a"],VNavigationDrawer:lt["a"],VRow:L["a"],VSheet:ut["a"],VSkeletonLoader:vt["a"],VSpacer:dt["a"],VTooltip:pt["a"]});var ft=function(t){Object(s["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(l["c"]);ft=Object(c["a"])([Object(l["a"])({components:{PokemonList:A,PokemonDetailsDrawer:mt}})],ft);var bt=ft,gt=bt,kt=a("7496"),_t=a("553a"),Ct=a("f6c4"),yt=a("afd9"),Ot=Object(g["a"])(gt,o,n,!1,null,null,null);e["default"]=Ot.exports;_()(Ot,{VApp:kt["a"],VFooter:_t["a"],VMain:Ct["a"],VSpacer:dt["a"],VSystemBar:yt["a"]})},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4"),a("d3b7"),a("25f0"),a("fb6a");var o=a("2b0e"),n=a("3dfd"),r=(a("3ca3"),a("ddb0"),a("8c4f"));o["a"].use(r["a"]);var s=[{path:"/detail/:id",name:"DetailView",component:function(){return Promise.resolve().then(a.bind(null,"3dfd"))}}],i=new r["a"]({mode:"history",base:"/",routes:s}),c=i,l=a("f309");o["a"].use(l["a"]);var u=new l["a"]({});o["a"].config.productionTip=!1,o["a"].filter("capitalize",(function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""})),new o["a"]({router:c,vuetify:u,render:function(t){return t(n["default"])}}).$mount("#app")}});
//# sourceMappingURL=app.e221bccd.js.map