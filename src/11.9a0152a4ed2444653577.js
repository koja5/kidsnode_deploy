(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{bGi8:function(t,e,n){"use strict";n.r(e),n.d(e,"ParametersModule",function(){return N});var i=n("ofXK"),c=n("3Pt+"),o=n("ed8r"),s=n("jcQU"),a=n("QYJQ"),r=n("1vKH"),d=n("tyNb"),l=n("fXoL"),p=n("yx6F"),f=n("U0ZT"),b=n("JPLv"),u=n("IKtL"),g=n("QLw0"),h=n("fl0U");function m(t,e){1&t&&(l.Vb(0,"div",8),l.Qb(1,"app-loader"),l.Ub())}function v(t,e){if(1&t&&(l.Vb(0,"div",12),l.Hc(1),l.Ub()),2&t){const t=l.jc().$implicit,e=l.jc(3);l.Bb(1),l.Jc(" ",e.data[t.id]," ")}}function y(t,e){if(1&t&&(l.Vb(0,"div"),l.Hc(1),l.Fc(2,v,2,1,"div",10),l.Ub()),2&t){const t=e.$implicit;l.Eb("",t.class," border-none"),l.Bb(1),l.Jc(" ",t.label," "),l.Bb(1),l.pc("ngIf",t.id)}}function M(t,e){if(1&t&&(l.Vb(0,"div",11),l.Fc(1,y,3,5,"div",5),l.Ub()),2&t){const t=l.jc().$implicit;l.Bb(1),l.pc("ngForOf",t.group)}}function j(t,e){if(1&t&&(l.Vb(0,"div",12),l.Hc(1),l.Ub()),2&t){const t=e.$implicit;l.Bb(1),l.Jc(" ",t," ")}}function w(t,e){if(1&t&&(l.Vb(0,"div",12),l.Fc(1,j,2,1,"div",13),l.Ub()),2&t){const t=l.jc().$implicit,e=l.jc();l.Bb(1),l.pc("ngForOf",e.data[t.id])}}function F(t,e){if(1&t&&(l.Vb(0,"div"),l.Fc(1,M,2,1,"div",9),l.Hc(2),l.Fc(3,w,2,1,"div",10),l.Ub()),2&t){const t=e.$implicit,n=l.jc();l.Db(t.class),l.Bb(1),l.pc("ngIf",t.group),l.Bb(1),l.Jc(" ",t.label," "),l.Bb(1),l.pc("ngIf",t.id&&n.data[t.id])}}function U(t,e){if(1&t&&(l.Vb(0,"div",14),l.Hc(1),l.Ub()),2&t){const t=l.jc();l.Bb(1),l.Jc(" ",t.note," ")}}function V(t,e){if(1&t){const t=l.Wb();l.Vb(0,"ejs-textbox",27),l.fc("ngModelChange",function(e){l.yc(t);const n=l.jc().$implicit;return l.jc(5).data[n.id]=e}),l.Ub()}if(2&t){const t=l.jc().$implicit,e=l.jc(5);l.pc("id",t.id)("ngModel",e.data[t.id])}}function B(t,e){if(1&t&&(l.Vb(0,"div"),l.Hc(1),l.Fc(2,V,1,2,"ejs-textbox",26),l.Ub()),2&t){const t=e.$implicit;l.Eb("",t.class," p-1 pt-2 border-none"),l.Bb(1),l.Jc(" ",t.label," "),l.Bb(1),l.pc("ngIf",t.id&&"numeric"===t.type)}}function C(t,e){if(1&t&&(l.Vb(0,"div",11),l.Fc(1,B,3,5,"div",5),l.Ub()),2&t){const t=l.jc().$implicit;l.Bb(1),l.pc("ngForOf",t.group)}}function I(t,e){if(1&t){const t=l.Wb();l.Vb(0,"ejs-multiselect",28),l.fc("ngModelChange",function(e){l.yc(t);const n=l.jc().$implicit;return l.jc(3).data[n.id]=e}),l.Ub()}if(2&t){const t=l.jc().$implicit,e=l.jc(3);l.pc("id",t.id)("dataSource",e.menu)("fields",e.field)("ngModel",e.data[t.id])}}function J(t,e){if(1&t){const t=l.Wb();l.Vb(0,"ejs-textbox",27),l.fc("ngModelChange",function(e){l.yc(t);const n=l.jc().$implicit;return l.jc(3).data[n.id]=e}),l.Ub()}if(2&t){const t=l.jc().$implicit,e=l.jc(3);l.pc("id",t.id)("ngModel",e.data[t.id])}}function O(t,e){if(1&t&&(l.Vb(0,"div"),l.Hc(1),l.Fc(2,C,2,1,"div",9),l.Fc(3,I,1,4,"ejs-multiselect",25),l.Fc(4,J,1,2,"ejs-textbox",26),l.Ub()),2&t){const t=e.$implicit;l.Db(t.class),l.Bb(1),l.Jc(" ",t.label," "),l.Bb(1),l.pc("ngIf",t.group),l.Bb(1),l.pc("ngIf",t.id&&"multiselect"===t.type),l.Bb(1),l.pc("ngIf",t.id&&"numeric"===t.type)}}function k(t,e){if(1&t&&(l.Vb(0,"div",4),l.Fc(1,O,5,7,"div",5),l.Ub()),2&t){const t=l.jc(2);l.Bb(1),l.pc("ngForOf",t.config)}}function x(t,e){if(1&t){const t=l.Wb();l.Vb(0,"app-dialog-modal",15),l.fc("closeEventEmitter",function(){return l.yc(t),l.jc().closeModal()}),l.Vb(1,"div",16),l.Vb(2,"div",17),l.Vb(3,"label",18),l.Hc(4,"Datum od"),l.Ub(),l.Vb(5,"ejs-datepicker",19),l.fc("ngModelChange",function(e){return l.yc(t),l.jc().dateFrom=e}),l.Ub(),l.Ub(),l.Vb(6,"div",17),l.Vb(7,"label",18),l.Hc(8,"Datum od"),l.Ub(),l.Vb(9,"ejs-datepicker",20),l.fc("ngModelChange",function(e){return l.yc(t),l.jc().dateTo=e}),l.Ub(),l.Ub(),l.Ub(),l.Fc(10,k,2,1,"div",21),l.Vb(11,"div",22),l.Vb(12,"label",18),l.Hc(13,"Napomena(opciono)"),l.Ub(),l.Vb(14,"ejs-textbox",23),l.fc("ngModelChange",function(e){return l.yc(t),l.jc().note=e}),l.Ub(),l.Ub(),l.Vb(15,"div",24),l.Vb(16,"button",1),l.fc("click",function(){return l.yc(t),l.jc().saveFoodMenu()}),l.Hc(17),l.Ub(),l.Ub(),l.Ub()}if(2&t){const t=l.jc();l.pc("show",t.modal)("width","90%"),l.Bb(5),l.pc("ngModel",t.dateFrom),l.Bb(4),l.pc("ngModel",t.dateTo),l.Bb(1),l.pc("ngIf",t.menu&&t.data),l.Bb(4),l.pc("id","note")("multiline",!0)("ngModel",t.note),l.Bb(3),l.Jc(" ",t.language.editButton," ")}}let P=(()=>{class t{constructor(t,e,n,i,c){this.helpService=t,this.apiService=e,this.configurationService=n,this.toastr=i,this.router=c,this.path="/scheduler/parameter",this.file="food-menu.json",this.modal=!1,this.data={},this.field={text:"name",value:"name"}}ngOnInit(){this.language=this.helpService.getLanguage(),this.initializeConfig(),this.initializeData()}initializeConfig(){this.configurationService.getConfiguration("other","food-menu.json").subscribe(t=>{this.config=t})}initializeData(){this.apiService.callApi({request:{type:"GET",api:"/api/getFoodsMenu",fields:"",root:""}},this.router).subscribe(t=>{if(t)for(let e=0;e<t.length;e++)this.dateFrom=new Date(t[e].from_date),this.dateTo=new Date(t[e].to_date),this.data=JSON.parse(t[e].content),this.note=t[e].note})}openModal(){this.apiService.callApi({request:{type:"GET",api:"/api/getFoods",fields:"",root:""}},this.router).subscribe(t=>{t&&(this.menu=t)}),this.modal=!0}closeModal(){this.modal=!1}saveFoodMenu(){let t;t=this.dateFrom&&this.dateTo?"/api/createFoodsMenu":"/api/updateFoodsMenu";const e={request:{type:"POST",api:t,parameters:[],fields:"",root:""},body:{from_date:this.dateFrom,to_date:this.dateTo,content:JSON.stringify(this.data),note:this.note}};this.apiService.callApi(e,this.router).subscribe(t=>{t?(this.toastr.showSuccess(),this.modal=!1):this.toastr.showError()})}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(p.a),l.Pb(f.a),l.Pb(b.a),l.Pb(u.a),l.Pb(d.b))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-food-menu"]],decls:13,vars:13,consts:[[1,"p-2"],["type","button",1,"button-action","e-info","e-control","e-btn","e-lib","mr-2",3,"click"],["style","height: 70vh",4,"ngIf"],[1,"food-menu-title","pb-2","text-center"],[1,"row","food-menu-container"],[3,"class",4,"ngFor","ngForOf"],["class","col-sm-12 header text-left pl-4",4,"ngIf"],[3,"show","width","closeEventEmitter",4,"ngIf"],[2,"height","70vh"],["class","row border-none",4,"ngIf"],["class","border-none",4,"ngIf"],[1,"row","border-none"],[1,"border-none"],["class","border-none",4,"ngFor","ngForOf"],[1,"col-sm-12","header","text-left","pl-4"],[3,"show","width","closeEventEmitter"],[1,"row","width-50","pb-2"],[1,"form-group","col-sm-6"],[1,"custom-label"],["cssClass","e-outline","id","dateFrom",3,"ngModel","ngModelChange"],["cssClass","e-outline","id","dateTo",3,"ngModel","ngModelChange"],["class","row food-menu-container",4,"ngIf"],[1,"form-group","col-sm-12","pt-4"],["cssClass","e-outline",3,"id","multiline","ngModel","ngModelChange"],[1,"pt-2","text-right"],["cssClass","e-outline","class","e-field e-input",3,"id","dataSource","fields","ngModel","ngModelChange",4,"ngIf"],["cssClass","e-outline",3,"id","ngModel","ngModelChange",4,"ngIf"],["cssClass","e-outline",3,"id","ngModel","ngModelChange"],["cssClass","e-outline",1,"e-field","e-input",3,"id","dataSource","fields","ngModel","ngModelChange"]],template:function(t,e){1&t&&(l.Vb(0,"div",0),l.Vb(1,"button",1),l.fc("click",function(){return e.openModal()}),l.Hc(2),l.Ub(),l.Ub(),l.Fc(3,m,2,0,"div",2),l.Vb(4,"div"),l.Vb(5,"h4",3),l.Hc(6),l.kc(7,"date"),l.kc(8,"date"),l.Ub(),l.Vb(9,"div",4),l.Fc(10,F,4,6,"div",5),l.Fc(11,U,2,1,"div",6),l.Ub(),l.Fc(12,x,18,9,"app-dialog-modal",7),l.Ub()),2&t&&(l.Bb(2),l.Jc(" ",e.language.editButton," "),l.Bb(1),l.pc("ngIf",!e.data),l.Bb(3),l.Kc(" Jelovnik za period od ",l.mc(7,7,e.dateFrom,"dd.MM.yyyy")," do ",l.mc(8,10,e.dateTo,"dd.MM.yyyy")," "),l.Bb(4),l.pc("ngForOf",e.config),l.Bb(1),l.pc("ngIf",e.note),l.Bb(1),l.pc("ngIf",e.modal))},directives:[i.l,i.k,g.a,h.a,o.a,c.i,c.l,a.d,s.c],pipes:[i.d],styles:[".food-menu-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;border:.5px solid #d7d7d7}.header[_ngcontent-%COMP%]{background:#1c2260;color:#fff;font-weight:700;padding:10px}.header-dark[_ngcontent-%COMP%]{background:#c4c5ce}.cell[_ngcontent-%COMP%]{font-weight:700}.food-menu-title[_ngcontent-%COMP%]{color:#1c2260}"]}),t})();var S=n("uQe+");let $=(()=>{class t{constructor(){this.path="/grids/parameters",this.file="food.json"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Jb({type:t,selectors:[["app-food"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(t,e){1&t&&l.Qb(0,"app-dynamic-grid",0),2&t&&l.pc("path",e.path)("file",e.file)},directives:[S.a],styles:[""]}),t})(),H=(()=>{class t{constructor(){this.path="/grids/parameters",this.file="general-contracts.json"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Jb({type:t,selectors:[["app-general-contracts"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(t,e){1&t&&l.Qb(0,"app-dynamic-grid",0),2&t&&l.pc("path",e.path)("file",e.file)},directives:[S.a],styles:[""]}),t})(),Q=(()=>{class t{constructor(){this.path="/grids/parameters",this.file="invoice-suppliers.json"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Jb({type:t,selectors:[["app-invoice-suppliers"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(t,e){1&t&&l.Qb(0,"app-dynamic-grid",0),2&t&&l.pc("path",e.path)("file",e.file)},directives:[S.a],styles:[""]}),t})(),T=(()=>{class t{constructor(){this.path="/grids/parameters",this.file="suppliers-company.json"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Jb({type:t,selectors:[["app-suppliers-company"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(t,e){1&t&&l.Qb(0,"app-dynamic-grid",0),2&t&&l.pc("path",e.path)("file",e.file)},directives:[S.a],styles:[""]}),t})(),E=(()=>{class t{constructor(){this.path="/grids/parameters",this.file="type-of-work.json"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Jb({type:t,selectors:[["app-type-of-work"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(t,e){1&t&&l.Qb(0,"app-dynamic-grid",0),2&t&&l.pc("path",e.path)("file",e.file)},directives:[S.a],styles:[""]}),t})();const _=[{path:"",redirectTo:"work-places",pathMatch:"full"},{path:"work-places",component:(()=>{class t{constructor(){this.path="/grids/parameters",this.file="work-places.json"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Jb({type:t,selectors:[["app-work-places"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(t,e){1&t&&l.Qb(0,"app-dynamic-grid",0),2&t&&l.pc("path",e.path)("file",e.file)},directives:[S.a],styles:[""]}),t})()},{path:"type-of-work",component:E},{path:"food",component:$},{path:"food-menu",component:P},{path:"general-contracts",component:H},{path:"suppliers-company",component:T},{path:"invoice-suppliers",component:Q}];let D=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[d.e.forChild(_)],d.e]}),t})(),N=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},providers:[],imports:[[i.b,c.f,D,r.a,s.d,o.b,a.c]]}),t})()}}]);