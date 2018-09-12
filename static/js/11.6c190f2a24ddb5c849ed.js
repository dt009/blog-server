(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{D1zH:function(e,t,a){},tyXq:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"categories-manage-page"},[a("h2",[e._v("分类管理")]),e._v(" "),a("div",{staticClass:"tags-manage-page"},[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.handleAddNewCategories}},[e._v("新增一个分类")]),e._v(" "),a("el-dialog",{attrs:{visible:e.isDialogShow,title:"add"===e.dialogType?"新增分类":"修改分类"},on:{"update:visible":function(t){e.isDialogShow=t}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,"status-icon":"",rules:e.dialogFormRules}},[a("el-form-item",{attrs:{label:"分类的 Code","label-width":"120px",xsize:"small",prop:"code"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{"auto-complete":"off",placeholder:"分类的 Code eg: test || study"},model:{value:e.dialogForm.code,callback:function(t){e.$set(e.dialogForm,"code",t)},expression:"dialogForm.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分类的 Name","label-width":"120px",xsize:"small",prop:"name"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{"auto-complete":"off",placeholder:"分类名称 eg: 测试 || 数据库"},model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分类的描述","label-width":"120px",xsize:"small",prop:"description"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{"auto-complete":"off",placeholder:"分类描述 eg: 这是分类标示测试"},model:{value:e.dialogForm.description,callback:function(t){e.$set(e.dialogForm,"description",t)},expression:"dialogForm.description"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"120px"}},[a("el-button",{on:{click:function(t){e.handleHideDialog("dialogForm")}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.isDialogLoading},on:{click:function(t){e.handleAddAndUpdateCategories("dialogForm")}}},[e._v(e._s("add"===e.dialogType?"确认添加":"确认修改"))])],1)],1)],1),e._v(" "),a("el-table",{attrs:{data:e.showCategoriesList,stripe:"","header-cell-style":{background:"#f5f7fa"}}},[a("el-table-column",{attrs:{label:"",prop:"sign",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{label:"分类 Code",prop:"code",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"分类名称",prop:"name",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{label:"使用次数",prop:"used_count",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"分类描述",prop:"description","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"预览",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("el-tooltip",{attrs:{content:t.row.description,placement:"top",effect:"light"}},[a("el-tag",{attrs:{hit:!0,size:e.getTagProps(t.row.used_count).size,type:e.getTagProps(t.row.used_count).type}},[a("div",[e._v(e._s(t.row.name))])])],1)],1)}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleChangeTag(t.row)}}},[e._v("修改")]),e._v(" "),a("el-popover",{attrs:{placement:"top"},model:{value:t.row.popover,callback:function(a){e.$set(t.row,"popover",a)},expression:"scope.row.popover"}},[a("p",[a("i",{staticClass:"el-icon-warning",staticStyle:{color:"#0f0"}}),e._v(" 确定要删除这条信息吗?")]),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.row.popover=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.isDeleteLoading,size:"mini"},on:{click:function(a){e.handleDeleteTag(t.$index,t.row)}}},[e._v("确定")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",size:"small",type:"text"},on:{click:function(e){t.row.popover=!0}},slot:"reference"},[e._v("删除")])],1)],1)}}])})],1)],1)])};o._withStripped=!0;a("D7fx"),a("RQ3N");var i=a("9SnE"),l=a.n(i),s=(a("DGeY"),a("KZzr")),r=a.n(s),n=(a("EMu8"),a("8606")),d=a.n(n),c=(a("7Kd7"),a("N4fY")),u=a.n(c),g=(a("Ql/2"),a("QQVE")),p=a.n(g),m=(a("p8y5"),a("3zPb")),f=a.n(m),h=(a("BvH3"),a("asm4")),v=a.n(h),w=(a("GVEf"),a("7t/g")),b=a.n(w),_=(a("VGZy"),a("7N9w")),y=a.n(_),C=(a("OKBm"),a("rUEw")),D=a.n(C),F=(a("y7W8"),a("i7wE")),z=a.n(F),x=a("Kw5r"),k=a("h8tt"),L=a("tOnh");x.default.use(z.a),x.default.use(D.a),x.default.use(y.a),x.default.use(b.a),x.default.use(v.a),x.default.use(f.a),x.default.use(p.a),x.default.use(u.a),x.default.use(d.a),x.default.use(r.a);var S={name:"CategoriesManagePage",computed:{showCategoriesList:function(){return this.$store.getters.getShowCategoriesList},dialogForm:function(){return"add"===this.dialogType?this.dialogAddForm:this.dialogUpdateFrom}},data:function(){return{dialogType:"add",dialogAddForm:{code:"",name:"",used_count:0,description:""},dialogUpdateFrom:{},dialogFormRules:{code:[{validator:function(e,t,a){(t=t.trim())?/^[a-zA-Z]{2,10}$/.test(t)?a():a(new Error("code 只能2-10位, 以字母数字下划线组成")):a(new Error("分类的 code 不能为空"))},trigger:"blur"}],name:[{validator:function(e,t,a){(t=t.trim())?/[A-Za-z0-9_\-\u4e00-\u9fa5]{2,8}/.test(t)?a():a(new Error("code 只能2-8位, 以字母数字下划线和汉字组成")):a(new Error("分类的名称 不能为空"))},trigger:"blur"}],description:[{validator:function(e,t,a){(t=t.trim())&&!/[A-Za-z0-9_\-\u4e00-\u9fa5]{2,50}/.test(t)?a(new Error("分类的描述只能2-50位, 以字母数字下划线和汉字组成")):a()},trigger:"blur"}]},isDialogShow:!1,isDialogLoading:!1,isDeleteLoading:!1}},beforeCreate:function(){this.$store.dispatch("getAllCategoriesList")},methods:{handleAddNewCategories:function(){this.dialogType="add",this.isDialogShow=!0},handleHideDialog:function(e){this.$refs[e].resetFields(),this.isDialogShow=!1},getTagProps:function(e){return e>=0&&e<=5?{size:"small",type:"danger"}:e>5&&e<=20?{size:"medium",type:"info"}:szie>20&&e<=50?{size:"",type:"success"}:{size:"",type:""}},handleAddAndUpdateCategories:function(e){var t=this,a="add"===this.dialogType?k.a.addCategoriesUrl:k.a.updateCategoriesUrl;this.$refs[e].validate(function(o){if(!o)return!1;t.isDialogLoading=!0,L.a.post(a,t.dialogForm).then(function(a){var o=a.status,i=a.message;a.data;"ok"===o?(t.isDialogLoading=!1,l.a.success(i),t.handleHideDialog(e),t.$store.dispatch("getAllCategoriesList")):t.isDialogLoading=!1})})},handleChangeTag:function(e){this.dialogType="update",this.dialogUpdateFrom=e,this.isDialogShow=!0},handleDeleteTag:function(e,t){var a=this;this.isDeleteLoading=!0,L.a.post(k.a.deleteCategoriesUrl,t).then(function(e){var o=e.status,i=e.message;e.data;"ok"===o?(a.isDeleteLoading=!1,t.popover=!1,l.a.success(i),a.$store.dispatch("getAllCategoriesList")):a.isDeleteLoading=!1})}}},A=(a("yf4d"),a("KHd+")),T=Object(A.a)(S,o,[],!1,null,"cde19d58",null);T.options.__file="src/component/CategoriesManagePage/CategoriesManagePage.vue";t.default=T.exports},yf4d:function(e,t,a){"use strict";var o=a("D1zH");a.n(o).a}}]);