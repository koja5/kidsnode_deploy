(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{FSpY:function(e,t,n){"use strict";n.r(t),n.d(t,"ChildrenModule",function(){return k});var c=n("tyNb"),i=n("fXoL"),r=n("uQe+");let o=(()=>{class e{constructor(){this.path="/grids/children",this.file="all-children.json"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["app-all-children"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(e,t){1&e&&i.Qb(0,"app-dynamic-grid",0),2&e&&i.pc("path",t.path)("file",t.file)},directives:[r.a],styles:[""]}),e})();var a=n("6FaO");let s=(()=>{class e{constructor(){this.path="/tabs/children",this.file="profile-children.json"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["app-profile-children"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(e,t){1&e&&i.Qb(0,"app-dynamic-tabs",0),2&e&&i.pc("path",t.path)("file",t.file)},directives:[a.a],styles:[""]}),e})();var l=n("G0DZ");let d=(()=>{class e{constructor(){this.path="scheduler",this.file="calendar-of-activity-children.json"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["app-calendar-of-activity"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(e,t){1&e&&i.Qb(0,"app-dynamic-scheduler",0),2&e&&i.pc("path",t.path)("file",t.file)},directives:[l.a],styles:[""]}),e})(),p=(()=>{class e{constructor(){this.path="/grids/children",this.file="kindergarden-group.json"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["app-kindergarden-group"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(e,t){1&e&&i.Qb(0,"app-dynamic-grid",0),2&e&&i.pc("path",t.path)("file",t.file)},directives:[r.a],styles:[""]}),e})(),h=(()=>{class e{constructor(){this.path="/grids/children",this.file="kindergarden-subgroup.json"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["app-kindergarden-subgroup"]],decls:1,vars:2,consts:[[3,"path","file"]],template:function(e,t){1&e&&i.Qb(0,"app-dynamic-grid",0),2&e&&i.pc("path",t.path)("file",t.file)},directives:[r.a],styles:[""]}),e})();var b=n("yx6F"),g=n("U0ZT"),u=n("IKtL"),f=n("ofXK"),v=n("QLw0");function m(e,t){if(1&e&&(i.Vb(0,"p",4),i.Hc(1),i.Ub()),2&e){const e=i.jc();i.Bb(1),i.Jc(" ",e.initialeName," ")}}const _=function(e){return{background:e}};let C=(()=>{class e{constructor(){}ngOnInit(){this.onInitialize()}onInitialize(){this.initialeColor=this.getInitialeColor(),this.name&&(this.initialeName=this.getInitialeFromName())}getInitialeFromName(){var e=this.name.split(" ");return e.length>1?e[0].charAt(0)+e[1].charAt(0):1==e.length&&e[0].length>1?e[0].charAt(0)+e[0].charAt(1):""}getInitialeColor(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["app-avatar"]],inputs:{img:"img",name:"name"},decls:4,vars:4,consts:[[1,"outer"],[1,"middle",3,"ngStyle"],[1,"inner"],["class","initiale-name m-0",4,"ngIf"],[1,"initiale-name","m-0"]],template:function(e,t){1&e&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"div",2),i.Fc(3,m,2,1,"p",3),i.Ub(),i.Ub(),i.Ub()),2&e&&(i.Bb(1),i.pc("ngStyle",i.sc(2,_,t.initialeColor)),i.Bb(2),i.pc("ngIf",t.name))},directives:[f.m,f.l],styles:[".initiale-name[_ngcontent-%COMP%]{width:93.2px;font-size:52px;color:#fff}.middle[_ngcontent-%COMP%]{border-radius:100%;opacity:.3}.middle[_ngcontent-%COMP%]:hover{opacity:.5}"]}),e})();var M=n("3Pt+"),O=n("NFeN");let y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["app-dynamic-icon"]],inputs:{icon:"icon"},decls:2,vars:1,consts:[[1,"mat-icon","material-icons","mat-icon-no-color","mr-1"]],template:function(e,t){1&e&&(i.Vb(0,"mat-icon",0),i.Hc(1),i.Ub()),2&e&&(i.Bb(1),i.Jc(" ",t.icon,"\n"))},directives:[O.a],styles:[""]}),e})();function P(e,t){1&e&&(i.Vb(0,"div",2),i.Qb(1,"app-loader"),i.Ub())}function w(e,t){if(1&e){const e=i.Wb();i.Vb(0,"button",22),i.fc("click",function(){i.yc(e);const t=i.jc(2).$implicit;return i.jc(2).recordAbsenseSingle(t.id)}),i.Qb(1,"app-dynamic-icon",23),i.Hc(2),i.Ub()}if(2&e){const e=i.jc(4);i.Bb(1),i.pc("icon","edit_note"),i.Bb(1),i.Jc(" ",e.language.recordAbsense," ")}}function x(e,t){if(1&e){const e=i.Wb();i.Vb(0,"button",24),i.fc("click",function(){i.yc(e);const t=i.jc(2).$implicit;return i.jc(2).deleteRecordAbsenseSingle(t.id)}),i.Qb(1,"app-dynamic-icon",23),i.Hc(2),i.Ub()}if(2&e){const e=i.jc(4);i.Bb(1),i.pc("icon","beenhere"),i.Bb(1),i.Jc(" ",e.language.evidentedAbsense," ")}}function A(e,t){if(1&e){const e=i.Wb();i.Vb(0,"div",17),i.Vb(1,"div",18),i.Vb(2,"input",19),i.fc("ngModelChange",function(t){i.yc(e);const n=i.jc().$implicit;return i.jc(2).reason[n.id]=t}),i.Ub(),i.Ub(),i.Fc(3,w,3,2,"button",20),i.Fc(4,x,3,2,"button",21),i.Ub()}if(2&e){const e=i.jc().$implicit,t=i.jc(2);i.Bb(2),i.qc("value",t.reason[e.id]),i.qc("placeholder",t.absenseEvidented[e.id]?t.reason[e.id]?"":t.language.noEnteredReasonOfAbsense:t.language.enterReasonOfAbsense),i.pc("ngModel",t.reason[e.id]),i.Bb(1),i.pc("ngIf",!t.absenseEvidented[e.id]),i.Bb(1),i.pc("ngIf",t.absenseEvidented[e.id])}}function I(e,t){if(1&e){const e=i.Wb();i.Vb(0,"div",8),i.Vb(1,"div",9),i.fc("click",function(){i.yc(e);const n=t.$implicit,c=t.index;return i.jc(2).selectChildren(n.id,c)}),i.Vb(2,"div",10),i.Vb(3,"div",11),i.Qb(4,"app-avatar",12),i.Ub(),i.Ub(),i.Vb(5,"div",10),i.Vb(6,"div",13),i.Vb(7,"div",14),i.Hc(8),i.Ub(),i.Ub(),i.Ub(),i.Qb(9,"div",15),i.Fc(10,A,5,5,"div",16),i.Ub(),i.Ub()}if(2&e){const e=t.$implicit,n=t.index,c=i.jc(2);i.Bb(1),i.Eb("e-card profile ",c.selectedChildren[n],""),i.Bb(3),i.pc("name",e.firstname+" "+e.lastname),i.Bb(4),i.Kc(" ",e.firstname," ",e.lastname," "),i.Bb(2),i.pc("ngIf",!c.loaderEvidence)}}function U(e,t){if(1&e&&(i.Vb(0,"div",3),i.Vb(1,"div",4),i.Vb(2,"div",5),i.Vb(3,"h5"),i.Hc(4),i.Ub(),i.Ub(),i.Ub(),i.Vb(5,"div",6),i.Fc(6,I,11,7,"div",7),i.Ub(),i.Ub()),2&e){const e=i.jc();i.Bb(4),i.Kc("",e.language.recordsOfArrivalFor," ",e.getTodayDate(),""),i.Bb(2),i.pc("ngForOf",e.data)}}const j=[{path:"",redirectTo:"group",pathMatch:"full"},{path:"group",component:p},{path:"subgroup",component:h},{path:"all-childrens",component:o},{path:"profile-children/:id",component:s},{path:"records-of-arrivals",component:(()=>{class e{constructor(e,t,n,c){this.helpService=e,this.apiService=t,this.router=n,this.toastr=c,this.selectedChildren={},this.selectedChildrenData=[],this.reason={},this.absenseEvidented=[],this.loaderEvidence=!0}ngOnInit(){this.language=this.helpService.getLanguage(),this.initializeData()}initializeData(){this.apiService.callGetMethod("/api/getChildrensAndAbsense","").subscribe(e=>{this.data=e,this.getEvidentedAbsense()})}getEvidentedAbsense(){this.apiService.callGetMethod("/api/getChildrenEvidentedAbsense","").subscribe(e=>{this.setEvidentedAbsense(e)})}setEvidentedAbsense(e){if(e)for(let t=0;t<e.length;t++)this.absenseEvidented[e[t].children_id]="evidented",e[t].reason&&(this.reason[e[t].children_id]=e[t].reason);this.loaderEvidence=!1}showProfile(e){this.router.navigate(["/dashboard/children/profile-children/"+e])}selectChildren(e,t){}removeFromArray(e){const t=this.selectedChildrenData.indexOf(e);-1!==t&&this.selectedChildrenData.splice(t,1)}getTodayDate(){const e=new Date;return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()+"."}recordAbsense(){this.apiService.callPostMethod("/api/recordAbsense",this.selectedChildrenData).subscribe(e=>{e?(this.toastr.showSuccess(),this.selectedChildrenData=[],this.selectedChildren={}):this.toastr.showError()})}recordAbsenseSingle(e){this.apiService.callPostMethod("/api/recordAbsenseSingle",{children_id:e,reason:this.reason[e]}).subscribe(t=>{t?(this.absenseEvidented[e]="evidented",this.toastr.showSuccess()):this.toastr.showError()})}deleteRecordAbsenseSingle(e){this.apiService.callPostMethod("/api/deleteRecordAbsenseSingle",{children_id:e}).subscribe(t=>{t?(this.absenseEvidented[e]="",this.reason[e]="",this.toastr.showSuccess()):this.toastr.showError()})}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(b.a),i.Pb(g.a),i.Pb(c.b),i.Pb(u.a))},e.\u0275cmp=i.Jb({type:e,selectors:[["app-records-of-arrivals"]],decls:2,vars:2,consts:[["style","height: 70vh",4,"ngIf"],["class","col-lg-12 control-section card-control-section vertical_card_layout mt-3",4,"ngIf"],[2,"height","70vh"],[1,"col-lg-12","control-section","card-control-section","vertical_card_layout","mt-3"],[1,"options","row","mb-3"],[1,"col-xs-12","col-sm-12","col-md-12","text-center"],[1,"row","e-sample-resize-container","e-card-resize-container"],["class","col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3",4,"ngFor","ngForOf"],[1,"col-xs-12","col-sm-6","col-md-6","col-lg-3","mb-3"],["tabindex","0",2,"justify-content","flex-start",3,"click"],[1,"e-card-header"],[1,"e-card-header-image","e-card-corner"],[3,"name"],[1,"e-card-header-caption","center"],[1,"e-card-header-title"],[1,"e-card-separator"],["class","e-card-actions center row m-0",4,"ngIf"],[1,"e-card-actions","center","row","m-0"],[1,"e-input-group","e-control-wrapper","e-outline","mb-2"],["name","title_of_activity","type","textbox",1,"e-control","e-field","e-input","e-lib","e-outline","e-textbox",3,"value","ngModel","placeholder","ngModelChange"],["class","e-btn e-danger mb-2","title","recordAbsense",3,"click",4,"ngIf"],["class","e-btn e-success mb-2","title","evidentedAbsense",3,"click",4,"ngIf"],["title","recordAbsense",1,"e-btn","e-danger","mb-2",3,"click"],[3,"icon"],["title","evidentedAbsense",1,"e-btn","e-success","mb-2",3,"click"]],template:function(e,t){1&e&&(i.Fc(0,P,2,0,"div",0),i.Fc(1,U,7,3,"div",1)),2&e&&(i.pc("ngIf",!t.data),i.Bb(1),i.pc("ngIf",t.data))},directives:[f.l,v.a,f.k,C,M.a,M.i,M.l,y],styles:[".highcontrast[_ngcontent-%COMP%]   .card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-header-image[_ngcontent-%COMP%]{border-color:#fff}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-header-image[_ngcontent-%COMP%]{width:98px;height:93px;background-size:cover;border-style:solid;border-color:#1c2260}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-content[_ngcontent-%COMP%], .card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-header-caption.center[_ngcontent-%COMP%]{text-align:center}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-btn[_ngcontent-%COMP%]{height:45px;width:50px;background-color:initial;border:none}.e-card.selected[_ngcontent-%COMP%]{border:1px solid #c7c7c7;box-shadow:0 0 2px 2px #1c2260}.e-card.profile[_ngcontent-%COMP%]{cursor:pointer}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child, .card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:hover, .card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-actions[_ngcontent-%COMP%]   button.e-card-btn[_ngcontent-%COMP%], .card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-actions[_ngcontent-%COMP%]   button.e-card-btn[_ngcontent-%COMP%]:hover{background:#fff}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card[_ngcontent-%COMP%]   .e-card-actions.center[_ngcontent-%COMP%]{justify-content:center;display:flex}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-actions.center[_ngcontent-%COMP%]{background-color:initial;border:none}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-header[_ngcontent-%COMP%]   .e-card-header-caption[_ngcontent-%COMP%]   .e-card-sub-title[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:rgba(0,0,0,.8)}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .e-card.profile[_ngcontent-%COMP%]   .e-card-header[_ngcontent-%COMP%]   .e-card-header-caption[_ngcontent-%COMP%]   .e-card-header-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .col-xs-6.col-sm-6.col-lg-6.col-md-6[_ngcontent-%COMP%]{width:100%;padding:10px}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .card-layout[_ngcontent-%COMP%]{margin:auto;max-width:400px}@media (min-width:870px){.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .col-xs-6.col-sm-6.col-lg-6.col-md-6[_ngcontent-%COMP%]{width:50%}.card-control-section.vertical_card_layout[_ngcontent-%COMP%]   .card-layout[_ngcontent-%COMP%]{max-width:870px}}.e-card[_ngcontent-%COMP%]{box-shadow:0 1px 7px 0 rgba(0,0,0,.16)!important}"]}),e})()},{path:"calendar-of-children-activity",component:d}];let V=(()=>{class e{}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},imports:[[c.e.forChild(j)],c.e]}),e})();var E=n("1vKH");let k=(()=>{class e{}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},providers:[],imports:[[M.f,f.b,V,E.a]]}),e})()}}]);