(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Pm5z:function(t,e,n){},"hZ+x":function(t,e,n){"use strict";var a=n("Pm5z");n.n(a).a},miPG:function(t,e,n){"use strict";var a=n("vGmR");n.n(a).a},vGmR:function(t,e,n){},yx1O:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"website-base-info-manage"},[n("h2",[t._v("站点基本信息管理")]),t._v(" "),n("div",{staticClass:"website-base-info-main"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:t.handleEditInfo}},[t._v("编辑")]),t._v(" "),n("el-dialog",{attrs:{visible:t.isDialogShow,title:"编辑信息"},on:{"update:visible":function(e){t.isDialogShow=e}}},[n("el-form",{ref:"dialogForm",attrs:{model:t.baseInfo,"label-position":"right",size:"mini","status-icon":"","label-width":"100px"}},[n("el-form-item",{attrs:{label:"标题: ",prop:"title"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{"auto-complete":"off"},model:{value:t.baseInfo.title,callback:function(e){t.$set(t.baseInfo,"title",e)},expression:"baseInfo.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"姓名: ",prop:"name"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{"auto-complete":"off"},model:{value:t.baseInfo.name,callback:function(e){t.$set(t.baseInfo,"name",e)},expression:"baseInfo.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"关键字: ",prop:"keyword"}},[t._l(t.baseInfo.keyword,function(e,a){return n("el-input",{key:a,staticStyle:{width:"30%","margin-top":"10px","margin-right":"10px"},attrs:{"auto-complete":"off"},model:{value:t.baseInfo.keyword[a],callback:function(e){t.$set(t.baseInfo.keyword,a,e)},expression:"baseInfo.keyword[index]"}},[1!==t.baseInfo.keyword.length?n("i",{staticClass:"el-icon-delete",staticStyle:{color:"#409eff",cursor:"pointer"},attrs:{slot:"suffix"},on:{click:function(e){t.handleDeleteKeyword(a)}},slot:"suffix"}):t._e()])}),t._v(" "),n("el-button",{attrs:{type:"text",icon:"el-icon-plus",size:"small"},on:{click:function(e){t.handleAddKeyword()}}})],2),t._v(" "),t._l(t.baseInfo.contactList,function(e,a){return n("el-form-item",{key:a,attrs:{label:"联系方式"+(a+1)+": "}},[n("el-form",{ref:"contactForm",refInFor:!0,attrs:{model:t.baseInfo.contactList[a],"label-position":"right","label-width":"50px",size:"mini"}},[n("el-form-item",[1!==t.baseInfo.contactList.length?n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(e){t.handleDeleteContactList(a)}}},[t._v("删除")]):t._e()],1),t._v(" "),n("el-form-item",{attrs:{label:"icon: ",prop:"icon"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{"auto-complete":"off"},model:{value:t.baseInfo.contactList[a].icon,callback:function(e){t.$set(t.baseInfo.contactList[a],"icon",e)},expression:"baseInfo.contactList[index].icon"}}),t._v(" "),n("span",{staticStyle:{color:"#409eff"}},[t._v("预览: "),n("span",{staticClass:"font",staticStyle:{"font-size":"18px"},domProps:{innerHTML:t._s(t.baseInfo.contactList[a].icon)}})])],1),t._v(" "),n("el-form-item",{attrs:{label:"name: ",prop:"linkName"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{"auto-complete":"off"},model:{value:t.baseInfo.contactList[a].name,callback:function(e){t.$set(t.baseInfo.contactList[a],"name",e)},expression:"baseInfo.contactList[index].name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"link: "}},[n("el-input",{staticStyle:{width:"300px"},attrs:{"auto-complete":"off"},model:{value:t.baseInfo.contactList[a].link,callback:function(e){t.$set(t.baseInfo.contactList[a],"link",e)},expression:"baseInfo.contactList[index].link"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"img: "}},[n("el-input",{staticStyle:{width:"300px"},attrs:{"auto-complete":"off"},model:{value:t.baseInfo.contactList[a].img,callback:function(e){t.$set(t.baseInfo.contactList[a],"img",e)},expression:"baseInfo.contactList[index].img"}})],1)],1),t._v(" "),a===t.baseInfo.contactList.length-1?n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:t.handleAddContactList}},[t._v("新增联系方式")]):t._e()],1)}),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"info",size:"medium"},on:{click:t.handleCloseDialog}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{size:"medium",type:"primary",loading:t.isUpdateLoading},on:{click:t.handleUpdateInfo}},[t._v("确认")])],1)],2)],1),t._v(" "),n("div",{staticClass:"show-info"},[n("el-form",{attrs:{"label-position":"right",inline:"","label-width":"100px",model:t.baseInfo}},[n("el-form-item",{attrs:{label:"站点标题: "}},[n("span",[t._v(t._s(t.websiteInfo.title))])]),t._v(" "),n("el-form-item",{attrs:{label:"作者姓名: "}},[n("span",[t._v(t._s(t.websiteInfo.name))])]),t._v(" "),n("el-form-item",{attrs:{label:"关键字: "}},t._l(t.websiteInfo.keyword,function(e,a){return n("p",{key:a},[t._v(" "+t._s(e))])})),t._v(" "),n("el-form-item",{attrs:{label:"联系方式: "}},t._l(t.websiteInfo.contactList,function(e,a){return n("div",{key:a,staticClass:"link-us"},[e.img&&!e.link?n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:e.img,alt:"item.name"}}),t._v(" "),n("div",{attrs:{slot:"reference"},slot:"reference"},[n("span",{staticClass:"font",domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),n("span",[t._v(t._s(e.name))])])]):t._e(),t._v(" "),e.link?n("a",{attrs:{href:e.link}},[n("span",{staticClass:"font",domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),n("span",[t._v(t._s(e.name))])]):t._e(),t._v(" "),e.img||e.link?t._e():n("div",[n("span",{staticClass:"font",domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),n("span",[t._v(t._s(e.name))])])],1)}))],1)],1)],1)])};a._withStripped=!0;n("D7fx"),n("RQ3N");var i=n("9SnE"),o=n.n(i),s=n("gDS+"),l=n.n(s),c=(n("BvH3"),n("asm4")),r=n.n(c),f=(n("EMu8"),n("8606")),d=n.n(f),m=(n("7Kd7"),n("N4fY")),p=n.n(m),u=(n("Ql/2"),n("QQVE")),b=n.n(u),h=(n("p8y5"),n("3zPb")),v=n.n(h),_=(n("GVEf"),n("7t/g")),I=n.n(_),g=n("Kw5r"),w=n("h8tt"),k=n("tOnh");g.default.use(I.a),g.default.use(v.a),g.default.use(b.a),g.default.use(p.a),g.default.use(d.a),g.default.use(r.a);var y={name:"WebsiteBaseInfoManagePage",computed:{websiteInfo:function(){return this.$store.state.websiteInfo}},data:function(){return{baseInfo:{},isDialogShow:!1,isUpdateLoading:!1}},methods:{handleEditInfo:function(){this.baseInfo=JSON.parse(l()(this.websiteInfo)),this.isDialogShow=!0},handleDeleteKeyword:function(t){this.baseInfo.keyword.splice(t,1)},handleAddKeyword:function(){this.baseInfo.keyword.push("关键词"+(this.baseInfo.keyword.length+1))},handleDeleteContactList:function(t){this.baseInfo.contactList.splice(t,1)},handleAddContactList:function(){this.baseInfo.contactList.push({icon:"",name:"",link:"",img:""})},handleCloseDialog:function(){this.isDialogShow=!1},handleUpdateInfo:function(){var t=this;this.isUpdateLoading=!0,k.a.post(w.a.updateWebsiteInfoUrl,this.baseInfo).then(function(e){var n=e.status,a=e.message,i=e.data;"ok"===n?(o.a.success(a),t.$store.dispatch("getWebsiteInfo",i.userId),t.handleCloseDialog()):o.a.error(a),t.isUpdateLoading=!1}),console.log(this.baseInfo)}}},x=(n("miPG"),n("hZ+x"),n("KHd+")),L=Object(x.a)(y,a,[],!1,null,"f7c3031c",null);L.options.__file="src/component/WebsiteBaseInfoManagePage/WebsiteBaseInfoManagePage.vue";e.default=L.exports}}]);