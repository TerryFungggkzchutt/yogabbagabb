"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[917],{7982:(N,m,r)=>{r.d(m,{V:()=>f});var g=r(1841),S=r(5894),l=r(476),_=r(4889);let f=(()=>{class p{constructor(o,E){this.http=o,this.errorSvc=E,this.endpoint="/core-command",this.version="/api/v2",this.urlPrefix=`${this.endpoint}${this.version}`,this.endpointHealthUrl="/ping",this.versionUrl="/version",this.configUrl="/config",this.deviceCoreCommandListUrl=`${this.urlPrefix}/device/all`,this.commandsByDeviceIdUrl=`${this.urlPrefix}/device/`,this.commandsByDeviceNameUrl=`${this.urlPrefix}/device/name/`,this.issueCmdByDeviceNameAndCmdNameUrl=`${this.urlPrefix}/device/name/`,this.httpPostOrPutJSONOptions={headers:new g.WM({"Content-type":"application/json"})}}getConfig(){return this.http.get(`${this.urlPrefix}${this.configUrl}`).pipe((0,S.K)(E=>this.errorSvc.handleError(E)))}findCommnadsByDeviceId(o){return this.http.get(`${this.commandsByDeviceIdUrl}${o}`).pipe((0,S.K)(c=>this.errorSvc.handleError(c)))}allDeviceCoreCommandsPagination(o,E){return this.http.get(`${this.deviceCoreCommandListUrl}?offset=${o}&limit=${E}`).pipe((0,S.K)(C=>this.errorSvc.handleError(C)))}findDeviceAssociatedCommnadsByDeviceName(o){return this.http.get(`${this.commandsByDeviceNameUrl}${o}`).pipe((0,S.K)(c=>this.errorSvc.handleError(c)))}findAllDeviceCommnads(){return this.http.get(`${this.urlPrefix}/device`).pipe((0,S.K)(E=>this.errorSvc.handleError(E)))}issueGetBinaryCmd(o,E){return this.http.request("GET",`${this.commandsByDeviceIdUrl}${o}/command/${E}`,{responseType:"arraybuffer"}).pipe((0,S.K)(C=>this.errorSvc.handleError(C)))}issueGetCmd(o,E){return this.http.get(`${this.issueCmdByDeviceNameAndCmdNameUrl}${o}/${E}?ds-pushevent=yes&ds-returnevent=yes`).pipe((0,S.K)(C=>this.errorSvc.handleError(C)))}issueSetCmd(o,E,c){return this.http.put(`${this.issueCmdByDeviceNameAndCmdNameUrl}${o}/${E}`,JSON.stringify(c),this.httpPostOrPutJSONOptions).pipe((0,S.K)(M=>this.errorSvc.handleError(M)))}}return p.\u0275fac=function(o){return new(o||p)(l.LFG(g.eN),l.LFG(_.T))},p.\u0275prov=l.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},5917:(N,m,r)=>{r.r(m),r.d(m,{SystemAgentModule:()=>n_});var g=r(8583),S=r(3092),l=r(9502),_=r(476),f=r(9386),p=r(7982),h=r(2468),o=r(2437),E=r(8391),c=r(9744);function C(s,i){if(1&s&&(_.TgZ(0,"pre"),_._uU(1),_.qZA()),2&s){const e=_.oxw();_.xp6(1),_.Oqu(e.config)}}let M=(()=>{class s{constructor(e,t,n,a,u,O,A){this.sysService=e,this.route=t,this.cmdSvc=n,this.dataService=a,this.metadataSvc=u,this.schedulerSvc=O,this.notiSvc=A,this.service=""}ngOnInit(){this.route.queryParams.subscribe(e=>{e.svcName&&(this.service=e.svcName,this.getConfigs())})}getConfigV2(e){switch(e){case"edgex-core-data":return this.dataService.getConfig().subscribe(t=>{this.config=JSON.stringify(t,null,3)});case"edgex-core-metadata":return this.metadataSvc.getConfig().subscribe(t=>{this.config=JSON.stringify(t,null,3)});case"edgex-core-command":return this.cmdSvc.getConfig().subscribe(t=>{this.config=JSON.stringify(t,null,3)});case"edgex-support-notifications":return this.schedulerSvc.getConfig().subscribe(t=>{this.config=JSON.stringify(t,null,3)});case"edgex-support-scheduler":return this.notiSvc.getConfig().subscribe(t=>{this.config=JSON.stringify(t,null,3)})}}getConfigs(){this.sysService.getConfigBySvcName(this.service).subscribe(e=>{this.config=JSON.stringify(e[0].config,null,3)})}edit(){}}return s.\u0275fac=function(e){return new(e||s)(_.Y36(f.J),_.Y36(l.gz),_.Y36(p.V),_.Y36(h.D),_.Y36(o.D),_.Y36(E.G),_.Y36(c.T))},s.\u0275cmp=_.Xpm({type:s,selectors:[["app-config"]],decls:9,vars:2,consts:function(){let i;return i="Config Inspect",[[1,"card"],[1,"card-header"],[1,"fa","fa-file-text","text-danger","mr-2"],i,[1,"card-body"],[4,"ngIf"]]},template:function(e,t){1&e&&(_.TgZ(0,"div",0),_.TgZ(1,"div",1),_.TgZ(2,"span"),_._UZ(3,"i",2),_._uU(4),_.TgZ(5,"span"),_.SDv(6,3),_.qZA(),_.qZA(),_.qZA(),_.TgZ(7,"div",4),_.YNc(8,C,2,1,"pre",5),_.qZA(),_.qZA()),2&e&&(_.xp6(4),_.hij(" ",t.service," "),_.xp6(4),_.Q6J("ngIf",t.config))},directives:[g.O5],styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),s})();function D(s,i){if(1&s&&(_.TgZ(0,"span",42),_._uU(1),_.qZA()),2&s){const e=_.oxw();_.xp6(1),_.hij("",e.metrics.raw.mem_usage," ")}}function Z(s,i){if(1&s&&(_.TgZ(0,"span",42),_._uU(1),_.qZA()),2&s){const e=_.oxw();_.xp6(1),_.hij("",e.metrics.cpuUsedPercent,"%")}}function P(s,i){if(1&s&&(_.TgZ(0,"span",42),_._uU(1),_.qZA()),2&s){const e=_.oxw();_.xp6(1),_.Oqu(e.metrics.raw.net_io)}}let b=(()=>{class s{constructor(e,t,n){this.route=e,this.router=t,this.sysService=n,this.refreshRate=3,this.option={tooltip:{show:!0,trigger:"axis",formatter:"{c0}%"},legend:{data:[""]},dateZoom:{show:!1,start:0,end:100},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:[0,0,0,0,0,0,0,0,0,0]}],yAxis:[{type:"value",axisLabel:{formatter:"{value}%"}}],series:[{name:"",type:"line",smooth:!0,itemStyle:{normal:{color:"#425CC7",areaStyle:{type:"default"}}},data:[0,0,0,0,0,0,0,0,0,0]}]},this.netChartOption={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#922C48"}}},legend:{data:["RX","TX"]},xAxis:[{type:"category",boundaryGap:!1,data:[0,0,0,0,0,0,0,0,0,0]}],yAxis:[{type:"value"}],series:[{name:"RX",type:"line",smooth:!0,stack:"\u603b\u91cf",itemStyle:{normal:{color:"#922C48",areaStyle:{type:"default"}}},data:[0,0,0,0,0,0,0,0,0,0]},{name:"TX",type:"line",smooth:!0,stack:"\u603b\u91cf",itemStyle:{normal:{color:"#425CC7",areaStyle:{type:"default"}}},data:[0,0,0,0,0,0,0,0,0,0]}]}}ngOnInit(){this.route.queryParams.subscribe(e=>{e.svcName&&(this.service=e.svcName,this.memoryUsageChart=echarts.init(document.getElementById("memory-usage")),this.cpuUsageChart=echarts.init(document.getElementById("cpu-usage")),this.networkUsageChart=echarts.init(document.getElementById("network-usage")),this.option.legend.data.shift(),this.option.legend.data.push("Memory"),this.memoryUsageChart.setOption(this.option),this.option.legend.data.shift(),this.option.legend.data.push("CPU"),this.cpuUsageChart.setOption(this.option),this.networkUsageChart.setOption(this.netChartOption),this.sysService.getMetricsBySvcName(e.svcName).subscribe(t=>{this.metrics=t[0].metrics,this.feedAllCharts()}),this.timer=window.setInterval(this.metricsTimer,1e3*this.refreshRate,this))})}metricsTimer(e){e.sysService.getMetricsBySvcName(e.service).subscribe(t=>{this.metrics=t[0].metrics,e.feedAllCharts()})}feedAllCharts(){let e=this.cpuUsageChart.getOption();e.series[0].data.shift(),e.series[0].data.push(this.metrics.cpuUsedPercent),e.xAxis[0].data.shift(),e.xAxis[0].data.push(this.timestamp()),this.cpuUsageChart.setOption(e);let t=this.memoryUsageChart.getOption();t.series[0].data.shift(),t.series[0].data.push(this.metrics.raw.mem_perc.substring(0,this.metrics.raw.mem_perc.length-1)),t.xAxis[0].data.shift(),t.xAxis[0].data.push(this.timestamp()),this.memoryUsageChart.setOption(t);let n=this.networkUsageChart.getOption(),a=this.metrics.raw.net_io.split("/"),u=a[0].trim().replace("kB","").replace("MB",""),O=a[1].trim().replace("kB","").replace("MB","");n.series[0].data.shift(),n.series[0].data.push(u),n.series[1].data.shift(),n.series[1].data.push(O),n.xAxis[0].data.shift(),n.xAxis[0].data.push(this.timestamp()),this.networkUsageChart.setOption(n)}onRateSelect(){console.log(this.refreshRate),clearInterval(this.timer),this.timer=window.setInterval(this.metricsTimer,1e3*this.refreshRate,this)}timestamp(){let e=new Date;return`${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`}ngOnDestroy(){clearInterval(this.timer)}}return s.\u0275fac=function(e){return new(e||s)(_.Y36(l.gz),_.Y36(l.F0),_.Y36(f.J))},s.\u0275cmp=_.Xpm({type:s,selectors:[["app-metrics"]],decls:64,vars:5,consts:function(){let i,e,t,n,a,u,O,A,I;return i="Setting",e="up",t="mem_usage",n="cpu_usage",a="net_io",u="Refresh Rate",O="Memory usage",A="CPU usage",I="Network traffic",[[1,"card","mb-3"],[1,"card-header","font-weight-bold"],[1,"fa","fa-wrench","mr-1"],i,[1,"card-body"],[1,"media"],[1,"align-self-center","mr-3"],[1,"fa","fa-server","fa-3x","color-edgex-red"],[1,"media-body"],[1,"mt-0","font-weight-bold"],[1,"badge","badge-success"],e,[1,"font-weight-bold","d-inline"],[1,"badge","badge-info","mr-2"],t,["class","text-weight",4,"ngIf"],[1,"font-weight-bold","ml-2","d-inline"],[1,"badge","badge-warning","mr-1"],n,[1,"badge","badge-primary","mr-1"],a,[1,"input-group","mb-3","mt-3",2,"width","200px"],[1,"input-group-prepend"],[1,"input-group-text"],u,[1,"form-control",3,"ngModel","ngModelChange"],["selected","","value","3"],["value","5"],["value","10"],["value","15"],[1,"row"],[1,"col-lg-4"],[1,"card-header"],[1,"fa","fa-area-chart","mr-1"],O,[1,"card-body","overflow-auto"],["id","memory-usage",1,"vw-auto",2,"height","300px"],A,["id","cpu-usage",1,"vw-auto",2,"height","300px"],[1,"card"],I,["id","network-usage",1,"vw-auto",2,"height","300px"],[1,"text-weight"]]},template:function(e,t){1&e&&(_.TgZ(0,"div",0),_.TgZ(1,"div",1),_._UZ(2,"i",2),_.TgZ(3,"span"),_.SDv(4,3),_.qZA(),_.qZA(),_.TgZ(5,"div",4),_.TgZ(6,"div",5),_.TgZ(7,"div",6),_._UZ(8,"i",7),_.qZA(),_.TgZ(9,"div",8),_.TgZ(10,"h5",9),_._uU(11),_.TgZ(12,"span",10),_.SDv(13,11),_.qZA(),_.qZA(),_.TgZ(14,"div",12),_.TgZ(15,"span",13),_.SDv(16,14),_.qZA(),_.YNc(17,D,2,1,"span",15),_.qZA(),_.TgZ(18,"div",16),_.TgZ(19,"span",17),_.SDv(20,18),_.qZA(),_.YNc(21,Z,2,1,"span",15),_.qZA(),_.TgZ(22,"div",16),_.TgZ(23,"span",19),_.SDv(24,20),_.qZA(),_.YNc(25,P,2,1,"span",15),_.qZA(),_.qZA(),_.qZA(),_.TgZ(26,"div",21),_.TgZ(27,"div",22),_.TgZ(28,"span",23),_.SDv(29,24),_.qZA(),_.qZA(),_.TgZ(30,"select",25),_.NdJ("ngModelChange",function(a){return t.refreshRate=a})("ngModelChange",function(){return t.onRateSelect()}),_.TgZ(31,"option",26),_._uU(32,"3s"),_.qZA(),_.TgZ(33,"option",27),_._uU(34,"5s"),_.qZA(),_.TgZ(35,"option",28),_._uU(36,"10s"),_.qZA(),_.TgZ(37,"option",29),_._uU(38,"15s"),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.TgZ(39,"div",30),_.TgZ(40,"div",31),_.TgZ(41,"div",0),_.TgZ(42,"div",32),_._UZ(43,"i",33),_.TgZ(44,"span"),_.SDv(45,34),_.qZA(),_.qZA(),_.TgZ(46,"div",35),_._UZ(47,"div",36),_.qZA(),_.qZA(),_.qZA(),_.TgZ(48,"div",31),_.TgZ(49,"div",0),_.TgZ(50,"div",32),_._UZ(51,"i",33),_.TgZ(52,"span"),_.SDv(53,37),_.qZA(),_.qZA(),_.TgZ(54,"div",35),_._UZ(55,"div",38),_.qZA(),_.qZA(),_.qZA(),_.TgZ(56,"div",31),_.TgZ(57,"div",39),_.TgZ(58,"div",32),_._UZ(59,"i",33),_.TgZ(60,"span"),_.SDv(61,40),_.qZA(),_.qZA(),_.TgZ(62,"div",35),_._UZ(63,"div",41),_.qZA(),_.qZA(),_.qZA(),_.qZA()),2&e&&(_.xp6(11),_.hij("",t.service," "),_.xp6(6),_.Q6J("ngIf",t.metrics),_.xp6(4),_.Q6J("ngIf",t.metrics),_.xp6(4),_.Q6J("ngIf",t.metrics),_.xp6(5),_.Q6J("ngModel",t.refreshRate))},directives:[g.O5,S.EJ,S.JJ,S.On,S.YN,S.Kr],styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),s})(),y=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=_.Xpm({type:s,selectors:[["app-system-agent"]],decls:1,vars:0,template:function(e,t){1&e&&_._UZ(0,"router-outlet")},directives:[l.lC],styles:[""]}),s})();var $=r(7822),X=r(4889);function L(s,i){1&s&&(_.TgZ(0,"button",18),_._UZ(1,"span",19),_._uU(2," Loading... "),_.qZA())}function B(s,i){if(1&s){const e=_.EpF();_.TgZ(0,"button",20),_.NdJ("click",function(){return _.CHM(e),_.oxw().refresh()}),_.TgZ(1,"span"),_._UZ(2,"i",21),_.TgZ(3,"span"),_.SDv(4,22),_.qZA(),_.qZA(),_.qZA()}if(2&s){const e=_.oxw();_.Q6J("disabled",e.operationBtnDisabled)}}function Y(s,i){1&s&&(_.TgZ(0,"span",30),_.SDv(1,31),_.qZA())}function x(s,i){1&s&&(_.TgZ(0,"span",32),_.SDv(1,33),_.qZA())}const H=function(){return["../metric"]},R=function(s){return{svcName:s}};function q(s,i){if(1&s&&(_.TgZ(0,"a",34),_._UZ(1,"i",35),_.qZA()),2&s){const e=_.oxw().$implicit;_.Q6J("routerLink",_.DdM(2,H))("queryParams",_.VKq(3,R,e.name))}}function F(s,i){1&s&&(_.TgZ(0,"a"),_._UZ(1,"i",36),_.qZA())}const w=function(){return["../config"]};function Q(s,i){if(1&s&&(_.TgZ(0,"a",34),_._UZ(1,"i",37),_.qZA()),2&s){const e=_.oxw().$implicit;_.Q6J("routerLink",_.DdM(2,w))("queryParams",_.VKq(3,R,e.name))}}function V(s,i){1&s&&(_.TgZ(0,"a"),_._UZ(1,"i",36),_.qZA())}function W(s,i){if(1&s){const e=_.EpF();_.TgZ(0,"span"),_.TgZ(1,"span",38),_.NdJ("click",function(){_.CHM(e);const n=_.oxw().$implicit;return _.oxw().start(n.name)}),_.SDv(2,39),_.qZA(),_.TgZ(3,"span",40),_.NdJ("click",function(){_.CHM(e);const n=_.oxw().$implicit;return _.oxw().restart(n.name)}),_.SDv(4,41),_.qZA(),_.TgZ(5,"span",42),_.NdJ("click",function(){_.CHM(e);const n=_.oxw().$implicit;return _.oxw().stop(n.name)}),_.SDv(6,43),_.qZA(),_.qZA()}}function J(s,i){1&s&&(_.TgZ(0,"div",44),_.TgZ(1,"span",45),_._uU(2,"Loading..."),_.qZA(),_.qZA(),_.TgZ(3,"div",46),_.TgZ(4,"span",45),_._uU(5,"Loading..."),_.qZA(),_.qZA(),_.TgZ(6,"div",47),_.TgZ(7,"span",45),_._uU(8,"Loading..."),_.qZA(),_.qZA())}function z(s,i){if(1&s&&(_.TgZ(0,"tr"),_.TgZ(1,"td"),_._uU(2),_.qZA(),_.TgZ(3,"td",23),_.YNc(4,Y,2,0,"span",24),_.YNc(5,x,2,0,"span",25),_.qZA(),_.TgZ(6,"td",23),_.YNc(7,q,2,5,"a",26),_.YNc(8,F,2,0,"a",27),_.qZA(),_.TgZ(9,"td",23),_.YNc(10,Q,2,5,"a",26),_.YNc(11,V,2,0,"a",27),_.qZA(),_.TgZ(12,"td"),_.YNc(13,W,7,0,"span",28),_.YNc(14,J,9,0,"ng-template",null,29,_.W1O),_.qZA(),_.qZA()),2&s){const e=i.$implicit,t=_.MAs(15),n=_.oxw();_.xp6(2),_.Oqu(e.name),_.xp6(1),_.Q6J("ngSwitch",e.alive),_.xp6(1),_.Q6J("ngSwitchCase",!0),_.xp6(2),_.Q6J("ngSwitch",e.alive),_.xp6(1),_.Q6J("ngSwitchCase",!0),_.xp6(2),_.Q6J("ngSwitch",e.alive),_.xp6(1),_.Q6J("ngSwitchCase",!0),_.xp6(3),_.Q6J("ngIf",!n.operationBtnDisabled)("ngIfElse",t)}}let k=(()=>{class s{constructor(e,t,n){this.sysService=e,this.msgSvc=t,this.errorSvc=n,this.defaultServcies=[],this.operationBtnDisabled=!1,this.toggleClass="",this.availServices=[]}ngOnInit(){this.GetAllSvc()}GetAllSvc(){this.sysService.getRegisteredServiceAll().subscribe(e=>{e.forEach(t=>{this.defaultServcies.push(t.ServiceId)}),this.allSvcHealthCheck()})}allSvcHealthCheck(){this.sysService.getAllSvcHealth(this.defaultServcies.join(",")).subscribe(e=>{this.availServices=[],e.forEach((t,n)=>{let a={name:`${t.serviceName}`,statusCode:`${t.statusCode}`};a.alive=200===t.statusCode,this.availServices.push(a)}),this.availServices.sort((t,n)=>t.name>n.name?1:-1)})}refresh(){this.operationBtnDisabled=!0,this.sysService.getAllSvcHealth(this.defaultServcies.join(",")).subscribe(e=>{this.availServices=[],e.forEach((t,n)=>{let a={name:`${t.serviceName}`,statusCode:`${t.statusCode}`};a.alive=200===t.statusCode,this.availServices.push(a)}),this.operationBtnDisabled=!1,this.availServices.sort((t,n)=>t.name>n.name?1:-1),this.msgSvc.success("refresh")})}start(e){this.operationBtnDisabled=!0,this.sysService.startV2(e).subscribe(t=>{200===t[0].statusCode?(this.availServices.forEach(n=>{if(`${n.name}`===t[0].serviceName)return n.statusCode=String(t[0].statusCode),void(n.alive=!0)}),setTimeout(()=>{this.operationBtnDisabled=!1},2e3)):this.msgSvc.errors(t[0].message)})}restart(e){this.operationBtnDisabled=!0,this.sysService.restartV2(e).subscribe(t=>{200===t[0].statusCode?setTimeout(()=>{this.allSvcHealthCheck(),this.operationBtnDisabled=!1},2e3):this.msgSvc.errors(t[0].message)})}stop(e){this.operationBtnDisabled=!0,this.sysService.stopV2(e).subscribe(t=>{200===t[0].statusCode?setTimeout(()=>{this.allSvcHealthCheck(),this.operationBtnDisabled=!1},2e3):this.msgSvc.errors(t[0].message)})}}return s.\u0275fac=function(e){return new(e||s)(_.Y36(f.J),_.Y36($.e),_.Y36(X.T))},s.\u0275cmp=_.Xpm({type:s,selectors:[["app-service-list"]],decls:25,vars:3,consts:function(){let i,e,t,n,a,u,O,A,I,d,U,v;return i="System Services List",e="Name",t="State",n="Metric",a="Config",u="Operation",O="Refresh",A="running",I="stopped",d="start",U="restart",v="stop",[[1,"card"],[1,"card-header"],[1,"fa","fa-list","text-danger","mr-2"],i,[1,"card-body","p-0"],[1,"bg-light","px-3","py-2"],["class","btn btn-primary","type","button","disabled","",4,"ngIf"],["class","btn btn-primary btn-sm ",3,"disabled","click",4,"ngIf"],[1,"table-responsive"],[1,"table","table-hover","text-truncate"],[1,"thead-light"],["scope","col"],e,t,n,a,u,[4,"ngFor","ngForOf"],["type","button","disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"btn","btn-primary","btn-sm",3,"disabled","click"],[1,"fa","fa-refresh","mr-1"],O,[3,"ngSwitch"],["class","badge badge-success",4,"ngSwitchCase"],["class","badge badge-danger",4,"ngSwitchDefault"],[3,"routerLink","queryParams",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngIf","ngIfElse"],["LoadingTemplate",""],[1,"badge","badge-success"],A,[1,"badge","badge-danger"],I,[3,"routerLink","queryParams"],[1,"fa","fa-area-chart"],[1,"fa","fa-ban","fa-stack-lg","text-danger"],[1,"fa","fa-file-text"],["role","button",1,"badge","badge-info","mr-1",3,"click"],d,["role","button",1,"badge","badge-warning","mr-1",3,"click"],U,["role","button",1,"badge","badge-danger",3,"click"],v,["role","status",1,"spinner-grow","spinner-grow-sm","text-info","mr-1"],[1,"sr-only"],["role","status",1,"spinner-grow","spinner-grow-sm","text-warning","mr-1"],["role","status",1,"spinner-grow","spinner-grow-sm","text-danger"]]},template:function(e,t){1&e&&(_.TgZ(0,"div",0),_.TgZ(1,"div",1),_._UZ(2,"i",2),_.TgZ(3,"span"),_.SDv(4,3),_.qZA(),_.qZA(),_.TgZ(5,"div",4),_.TgZ(6,"div",5),_.YNc(7,L,3,0,"button",6),_.YNc(8,B,5,1,"button",7),_.qZA(),_.TgZ(9,"div",8),_.TgZ(10,"table",9),_.TgZ(11,"thead",10),_.TgZ(12,"tr"),_.TgZ(13,"th",11),_.SDv(14,12),_.qZA(),_.TgZ(15,"th",11),_.SDv(16,13),_.qZA(),_.TgZ(17,"th",11),_.SDv(18,14),_.qZA(),_.TgZ(19,"th",11),_.SDv(20,15),_.qZA(),_.TgZ(21,"th",11),_.SDv(22,16),_.qZA(),_.qZA(),_.qZA(),_.TgZ(23,"tbody"),_.YNc(24,z,16,9,"tr",17),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.qZA()),2&e&&(_.xp6(7),_.Q6J("ngIf",t.operationBtnDisabled),_.xp6(1),_.Q6J("ngIf",!t.operationBtnDisabled),_.xp6(16),_.Q6J("ngForOf",t.availServices))},directives:[g.O5,g.sg,g.RF,g.n9,g.ED,l.yS],styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),s})();var K=r(8253),j=r(1964),__=r(4294),e_=r(5894),t_=r(7216);let G=(()=>{class s{constructor(e,t){this.router=e,this.systemSvc=t}canActivate(e,t){return this.checkAvailable(e,t)}canActivateChild(e,t){return this.canActivate(e,t)}checkAvailable(e,t){return this.systemSvc.ping().pipe((0,__.q)(1),(0,e_.K)(n=>this.router.navigate(["/svc-unavailable"],{queryParams:{svcName:"system agent",routerPath:`/${t.url.split("/")[1]}`}})),(0,t_.z)(()=>(0,j.of)(!0)))}}return s.\u0275fac=function(e){return new(e||s)(_.LFG(l.F0),_.LFG(f.J))},s.\u0275prov=_.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const s_=[{path:"",component:y,canActivate:[K.a,G],canActivateChild:[G],children:[{path:"",redirectTo:"service-list",pathMatch:"full"},{path:"service-list",component:k},{path:"metric",component:b},{path:"config",component:M}]}];let i_=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=_.oAB({type:s}),s.\u0275inj=_.cJS({imports:[[l.Bz.forChild(s_)],l.Bz]}),s})(),n_=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=_.oAB({type:s}),s.\u0275inj=_.cJS({imports:[[g.ez,S.u5,i_]]}),s})()}}]);