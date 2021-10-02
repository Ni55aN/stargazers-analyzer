(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],p=0,f=[];p<o.length;p++)i=o[p],a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0040":function(e,t,r){"use strict";var n=r("df64"),a=r.n(n);a.a},"0cfb":function(e,t,r){},"1d65":function(e,t,r){},"45a8":function(e,t,r){"use strict";var n=r("dd24"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("e069"),s=r.n(a),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("div",{staticClass:"col sidebar"},[r("Steps",{attrs:{current:e.step,direction:"vertical"}},[r("Step",{staticClass:"step",attrs:{title:"Find"},nativeOn:{click:function(t){e.step=0}}}),r("Step",{staticClass:"step",attrs:{title:"View"},nativeOn:{click:function(t){e.step=1}}}),r("Step",{staticClass:"step",attrs:{title:"Analyze"},nativeOn:{click:function(t){e.step=2}}})],1),r("Card",{staticClass:"card"},[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("Access token")]),r("Input",{model:{value:e.accessToken,callback:function(t){e.accessToken=t},expression:"accessToken"}})],1)],1),r("div",{staticClass:"col content"},[0===e.step?r("Stargazers"):e._e(),1===e.step?r("List"):e._e(),2===e.step?r("Analyze"):e._e()],1)])},o=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"analyze"},[r("Card",{staticClass:"card",attrs:{title:"Analyze"}},[r("Button",{attrs:{type:"primary"},on:{click:e.analyze}},[e._v("Analyze")])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("Badge",{attrs:{count:e.users.length}},[e._v("Users")]),r("br"),r("Badge",{attrs:{count:e.companies.length}},[e._v("Users with company")]),r("Badge",{attrs:{count:e.filtered(e.companies,e.companyFilter).length}},[r("span",[e._v("Companies")]),r("Input",{staticClass:"input",attrs:{size:"small"},model:{value:e.companyFilter,callback:function(t){e.companyFilter=t},expression:"companyFilter"}})],1),r("br"),r("Badge",{attrs:{count:e.locations.length}},[e._v("Users with location")]),r("Badge",{attrs:{count:e.filtered(e.locations,e.locationFilter).length}},[r("span",[e._v("Locations")]),r("Input",{staticClass:"input",attrs:{size:"small"},model:{value:e.locationFilter,callback:function(t){e.locationFilter=t},expression:"locationFilter"}})],1),r("br"),r("Badge",{attrs:{count:e.totalFollowers,overflowCount:9999999}},[e._v("Total followers")]),r("Badge",{attrs:{count:e.totalFollowing,overflowCount:9999999}},[e._v("Total following")])],1),r("div",{staticClass:"col large"},[r("h3",[e._v("Created profiles ")]),r("TimeHistogram",{attrs:{list:e.users.map(function(e){return e.created_at})}}),r("h3",[e._v("Updated profiles ")]),r("TimeHistogram",{attrs:{list:e.users.map(function(e){return e.updated_at})}}),r("h3",[e._v("Heatmap")]),r("Heatmap",{attrs:{locations:e.users.map(function(e){return e.location}).filter(function(e){return e})}})],1)])],1)},u=[],l=(r("4917"),r("3b2b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Badge",{staticClass:"badge",attrs:{count:e.count,"overflow-count":e.overflowCount}},[e._t("default")],2)}),p=[],f=(r("c5f6"),{props:{count:Number,overflowCount:{type:Number,default:99999}}}),h=f,d=(r("bcf6"),r("2877")),m=Object(d["a"])(h,l,p,!1,null,"d7f80830",null),v=m.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("GChart",{attrs:{type:"ColumnChart",data:e.chartData,options:e.chartOptions}})},b=[],w=r("774e"),x=r.n(w),k=(r("55dd"),r("75fc")),y=(r("ac6a"),r("2d7d")),_=r.n(y),O=r("cb43"),C={props:["list"],components:{GChart:O["GChart"]},data:function(){return{chartOptions:{chart:{legend:{position:"none"}}}}},computed:{chartData:function(){var e=this.list.map(function(e){return new Date(e)}),t=e.map(function(e){return String(e.getFullYear())}),r=new _.a;return t.forEach(function(e){r.has(e)?r.set(e,r.get(e)+1):r.set(e,1)}),[["Year","Amount"]].concat(Object(k["a"])(x()(r.entries()).sort(function(e,t){return+e[0]-+t[0]})))}}},S=C,j=Object(d["a"])(S,g,b,!1,null,"c507d064",null),R=j.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"heatmap"},[r("div",{ref:"map",staticClass:"map"})])},T=[],B=r("5d73"),F=r.n(B),E=(r("96cf"),r("3b8d")),U=r("e11e"),A=(r("a662"),r("6cc5"),r("d225")),W=r("b0b4"),L=r("74ce"),P=new L["a"]("github-stars");P.version(2).stores({users:"&login,email",stargazers:"[login+repo],repo",locations:"name"}).upgrade(function(e){}),P.version(1).stores({users:"&login,email",stargazers:"[login+repo],repo"});var D=P,N=function(){function e(){Object(A["a"])(this,e)}return Object(W["a"])(e,[{key:"url",value:function(e){var t=encodeURIComponent(e);return"https://nominatim.openstreetmap.org/?format=json&addressdetails=0&q=".concat(t,"&format=json&limit=1")}},{key:"load",value:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return t=t.trim(),e.next=5,D.locations.where("name").equals(t).toArray();case 5:if(r=e.sent,!r[0]){e.next=8;break}return e.abrupt("return",r[0]);case 8:return e.next=10,fetch(this.url(t));case 10:return n=e.sent,e.next=13,n.json();case 13:if(a=e.sent[0],!a){e.next=17;break}return e.next=17,D.locations.add({name:t,lat:+a.lat,lon:+a.lon});case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),I=new N,$={props:["locations"],data:function(){return{heat:null}},watch:{locations:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,s,i,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=!0,n=!1,a=void 0,e.prev=3,s=F()(t);case 5:if(r=(i=s.next()).done){e.next=19;break}return o=i.value,e.prev=7,e.next=10,I.load(o);case 10:c=e.sent,c&&this.heat.addLatLng([+c.lat,+c.lon,1]),e.next=16;break;case 14:e.prev=14,e.t0=e["catch"](7);case 16:r=!0,e.next=5;break;case 19:e.next=25;break;case 21:e.prev=21,e.t1=e["catch"](3),n=!0,a=e.t1;case 25:e.prev=25,e.prev=26,r||null==s.return||s.return();case 28:if(e.prev=28,!n){e.next=31;break}throw a;case 31:return e.finish(28);case 32:return e.finish(25);case 33:case"end":return e.stop()}},e,this,[[3,21,25,33],[7,14],[26,,28,32]])}));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){var e=U["map"](this.$refs.map).setView([0,0],4);U["tileLayer"]("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),this.heat=U["heatLayer"]([],{radius:20,minOpacity:.4,blur:15}).addTo(e)}},M=$,H=(r("f2f3"),Object(d["a"])(M,z,T,!1,null,"0d7aa560",null)),q=H.exports,G={inject:["repoService","usersService"],components:{Badge:v,TimeHistogram:R,Heatmap:q},data:function(){return{users:[],companies:[],locations:[],totalFollowers:null,totalFollowing:null,columns:[{key:"name",title:"Company"}],companyFilter:"",locationFilter:""}},methods:{filtered:function(e,t){var r=new RegExp(t,"i");return e.filter(function(e){return e.match(r)})},analyze:function(){var e=this;this.users=this.repoService.users.map(function(t){return e.usersService.list[t.login]}).filter(function(e){return e}),this.companies=this.users.map(function(e){return e.company}).filter(function(e){return e}),this.locations=this.users.map(function(e){return e.location}).filter(function(e){return e}),this.totalFollowers=this.users.reduce(function(e,t){return e+t.followers},0),this.totalFollowing=this.users.reduce(function(e,t){return e+t.following},0)}}},J=G,V=(r("ceeb"),Object(d["a"])(J,c,u,!1,null,"4f4ceace",null)),Y=V.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list"},[r("Card",{staticClass:"card",attrs:{title:"Users"}},[r("Button",{attrs:{type:"primary",disabled:e.inprogress},on:{click:e.loadUsersDetail}},[e._v("Load details")]),e.inprogress?r("Spin",{staticClass:"spin",attrs:{size:"large"}}):e._e()],1),r("Progress",{attrs:{percent:e.detailUsers.length/e.users.length*100,"hide-info":"","stroke-width":5}}),r("div",{staticClass:"badges"},[r("Badge",{attrs:{count:e.users.length}},[e._v("Users")]),r("Badge",{attrs:{count:e.detailUsers.length}},[e._v("Stored users")])],1),r("i-switch",{staticClass:"switch",attrs:{size:"large"},model:{value:e.detailTable,callback:function(t){e.detailTable=t},expression:"detailTable"}},[r("span",{attrs:{slot:"open"},slot:"open"},[e._v("All")]),r("span",{attrs:{slot:"close"},slot:"close"},[e._v("Details")])]),r("Table",{staticClass:"table",attrs:{columns:e.detailTable?e.columns:[e.columns[0]],data:e.pageTableData,"no-data-text":"No stars"},on:{"on-sort-change":e.onSort}}),r("div",{staticClass:"pagination"},[r("Page",{attrs:{total:this.tableData.length,"page-size":e.amount,current:e.page},on:{"on-change":e.changePage}})],1)],1)},K=[],Q={data:function(){return{inprogress:!1}},methods:{inprogressWrapper:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.inprogress=!0,e.next=4,t();case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:return e.prev=9,this.inprogress=!1,e.finish(9);case 12:case"end":return e.stop()}},e,this,[[0,6,9,12]])}));function t(t){return e.apply(this,arguments)}return t}()}},X={methods:{catchError:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),this.$Message.error(e.t0.response&&e.t0.response.data.message||e.t0.message);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(t){return e.apply(this,arguments)}return t}()}},ee={inject:["repoService","usersService"],components:{Badge:v},mixins:[Q,X],data:function(){return{page:1,amount:10,max:1e4,sort:null,columns:[{title:"Login",key:"login",minWidth:120,sortable:!0},{title:"Name",key:"name",minWidth:80},{title:"Email",key:"email",minWidth:90},{title:"Location",key:"location",minWidth:100},{title:"Company",key:"company",minWidth:120},{title:"Bio",key:"bio",minWidth:180},{title:"Public repos",key:"public_repos",minWidth:120,sortable:!0},{title:"Followers",key:"followers",minWidth:100,sortable:!0},{title:"Following",key:"following",minWidth:100,sortable:!0}],detailTable:!1}},computed:{users:function(){return this.repoService.users},detailUsers:function(){var e=this;return this.repoService.users.map(function(t){return e.usersService.list[t.login]}).filter(function(e){return e})},incompleteUsers:function(){var e=this;return this.repoService.users.filter(function(t){return!e.usersService.list[t.login]})},tableData:function(){return this.detailTable?this.detailUsers:this.users},pageTableData:function(){var e=this.page,t=this.amount,r=this.sort,n=Object(k["a"])(this.tableData);return r&&"normal"!==r.order&&n.sort(function(e,t){return("asc"===r.order?1:-1)*(+e[r.key]-+t[r.key])}),n.slice((e-1)*t,e*t)}},methods:{onSort:function(e){var t=e.column,r=e.key,n=e.order;this.sort={column:t,key:r,order:n}},changePage:function(e){this.page=e},loadUsersDetail:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.catchError(function(){return t.inprogressWrapper(Object(E["a"])(regeneratorRuntime.mark(function e(){var r,n,a,s,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=!0,n=!1,a=void 0,e.prev=3,s=F()(t.incompleteUsers);case 5:if(r=(i=s.next()).done){e.next=12;break}return o=i.value,e.next=9,t.usersService.load(o.login);case 9:r=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](3),n=!0,a=e.t0;case 18:e.prev=18,e.prev=19,r||null==s.return||s.return();case 21:if(e.prev=21,!n){e.next=24;break}throw a;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}},e,null,[[3,14,18,26],[19,,21,25]])})))});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.repoService.users.map(function(e){return e.login}),e.next=3,this.inprogressWrapper(function(){return r.usersService.loadAll(t)});case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},te=ee,re=(r("45a8"),Object(d["a"])(te,Z,K,!1,null,"3ed66168",null)),ne=re.exports,ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"stargazers"},[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("Find stargazers")]),r("Input",{staticClass:"field",model:{value:e.repoName,callback:function(t){e.repoName=t},expression:"repoName"}}),r("Tooltip",{attrs:{content:"Continue loading stargazers (don't delete already loaded)","max-width":200,placement:"top"}},[r("Checkbox",{staticClass:"field",model:{value:e.resume,callback:function(t){e.resume=t},expression:"resume"}},[e._v("Resume")])],1),r("Button",{staticClass:"field",attrs:{type:"primary",disabled:e.inprogress},on:{click:e.loadStars}},[e._v("Load")]),e.inprogress?r("Spin",{staticClass:"spin"}):e._e()],1),r("Progress",{attrs:{percent:e.users.length/e.repo.stargazers_count*100,"hide-info":"","stroke-width":5}}),r("div",{staticClass:"badges"},[r("Badge",{attrs:{count:e.users.length}},[e._v("Loaded stargazers")]),r("Badge",{attrs:{count:e.repo.stargazers_count}},[e._v("Total stargazers")]),r("Badge",{attrs:{count:e.repo.open_issues_count}},[e._v("Open issues")]),r("Badge",{attrs:{count:e.repo.forks_count}},[e._v("Forks")]),r("Badge",{attrs:{count:e.repo.subscribers_count}},[e._v("Subscribers")])],1)],1)},se=[],ie=r("b012"),oe=r.n(ie),ce={inject:["repoService"],components:{Badge:v},mixins:[Q,X],data:function(){return{max:2e5,repoName:"",resume:!0}},computed:{repo:function(){return this.repoService.data},users:function(){return this.repoService.users}},watch:{repoName:oe()(function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.setItem("lastRepo",t),e.next=3,this.catchError(function(){return r.inprogressWrapper(function(){return r.repoService.setRepo(r.repoName)})});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),500)},methods:{loadStars:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.catchError(function(){return t.inprogressWrapper(function(){return t.repoService.loadStars(t.resume)})});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.repoName=localStorage.getItem("lastRepo")||"";case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},ue=ce,le=(r("0040"),Object(d["a"])(ue,ae,se,!1,null,"ad2f14be",null)),pe=le.exports,fe=(r("7f7f"),r("bc3a")),he=r.n(fe),de=function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r,n,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,n=localStorage.getItem("accessToken"),e.next=4,he.a.get("https://api.github.com/".concat(t,"?page=").concat(r),{headers:{Authorization:"token ".concat(n)}});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function me(e){return ve.apply(this,arguments)}function ve(){return ve=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,s,i,o,c,u,l,p=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=p.length>1&&void 0!==p[1]?p[1]:1,n=p.length>2?p[2]:void 0,console.log("loadStargazers from ".concat(r," page"));case 3:return e.next=5,de("repos/"+t+"/stargazers",r++);case 5:a=e.sent,s=!0,i=!1,o=void 0,e.prev=9,c=F()(a.data);case 11:if(s=(u=c.next()).done){e.next=18;break}return l=u.value,e.next=15,n(l);case 15:s=!0,e.next=11;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](9),i=!0,o=e.t0;case 24:e.prev=24,e.prev=25,s||null==c.return||c.return();case 27:if(e.prev=27,!i){e.next=30;break}throw o;case 30:return e.finish(27);case 31:return e.finish(24);case 32:if(a.data.length>0){e.next=3;break}case 33:case"end":return e.stop()}},e,null,[[9,20,24,32],[25,,27,31]])})),ve.apply(this,arguments)}function ge(e){return be.apply(this,arguments)}function be(){return be=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,de("users/"+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)})),be.apply(this,arguments)}function we(e){return xe.apply(this,arguments)}function xe(){return xe=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,de("repos/"+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)})),xe.apply(this,arguments)}var ke=function(){function e(){Object(A["a"])(this,e),this.name="",this.data={},this.users=[],n["default"].observable(this)}return Object(W["a"])(e,[{key:"setRepo",value:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.name=t,e.next=3,D.stargazers.where("repo").equals(this.name).toArray();case 3:return this.users=e.sent,e.next=6,we(t);case 6:this.data=e.sent;case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadStars",value:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r,n,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=1,!t){e.next=8;break}return e.next=4,D.stargazers.where("repo").equals(this.name).count();case 4:n=e.sent,r=Math.floor(n/30)+1,e.next=11;break;case 8:return e.next=10,D.stargazers.where("repo").equals(this.name).delete();case 10:this._e.users=[];case 11:return e.next=13,me(this.name,r,function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={repo:a.name,login:t.login},e.next=3,D.stargazers.get(r);case 3:if(e.sent){e.next=7;break}return e.next=6,D.stargazers.add(r);case 6:a.users.push(t);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 13:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),ye=function(){function e(){Object(A["a"])(this,e),this.list={},n["default"].observable(this)}return Object(W["a"])(e,[{key:"load",value:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r,a,s=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=3,D.users.get({login:t});case 3:if(a=e.sent,a||r){e.next=16;break}return e.prev=5,e.next=8,ge(t);case 8:a=e.sent,D.users.add(a),e.next=16;break;case 12:if(e.prev=12,e.t0=e["catch"](5),e.t0.response&&404===e.t0.response.status){e.next=16;break}throw e.t0;case 16:a&&n["default"].set(this.list,t,a);case 17:case"end":return e.stop()}},e,this,[[5,12]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadAll",value:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.users.where("login").anyOf(t).toArray();case 2:r=e.sent,r.forEach(function(e){n["default"].set(a.list,e.login,e)});case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),_e={name:"app",provide:{repoService:new ke,usersService:new ye},components:{Analyze:Y,Stargazers:pe,List:ne},data:function(){return{accessToken:localStorage.getItem("accessToken")||"",step:0}},watch:{accessToken:function(e){localStorage.setItem("accessToken",e)}}},Oe=_e,Ce=(r("cf25"),Object(d["a"])(Oe,i,o,!1,null,null,null)),Se=Ce.exports;r("dcad");n["default"].use(s.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(Se)}}).$mount("#app")},bcf6:function(e,t,r){"use strict";var n=r("d572"),a=r.n(n);a.a},ceeb:function(e,t,r){"use strict";var n=r("d6d2"),a=r.n(n);a.a},cf25:function(e,t,r){"use strict";var n=r("0cfb"),a=r.n(n);a.a},d572:function(e,t,r){},d6d2:function(e,t,r){},dd24:function(e,t,r){},df64:function(e,t,r){},f2f3:function(e,t,r){"use strict";var n=r("1d65"),a=r.n(n);a.a}});
//# sourceMappingURL=app.de15d798.js.map