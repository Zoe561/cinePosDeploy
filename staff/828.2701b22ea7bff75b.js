"use strict";(self.webpackChunkstaff=self.webpackChunkstaff||[]).push([[828],{6828:(w,g,c)=>{c.r(g),c.d(g,{PaymentPageModule:()=>A});var u=c(6895),s=c(8630),t=c(4650);function h(a,i){if(1&a&&(t.TgZ(0,"div",14)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"div"),t._uU(6),t.qZA()()),2&a){const e=i.$implicit;t.xp6(2),t.Oqu(e.type),t.xp6(2),t.Oqu(e.seatName),t.xp6(2),t.Oqu(e.ticketId)}}let P=(()=>{class a{constructor(e,n){this.data=e,this.dialogRef=n,console.log("data",e)}ngOnInit(){this.ticketList=this.data.data.ticketList,this.order=this.data,console.log("ticketList",this.ticketList)}onClose(){this.dialogRef.close()}onPrint(){}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(s.WI),t.Y36(s.so))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dialog-order-detail"]],decls:36,vars:3,consts:[[1,"dialog-order"],[1,"title","border-b-white"],[1,"order-title","font-14","text-center"],[1,"color-white-1"],[1,"color-white"],[1,"order-detail","bg-dark-1","text-center","font-13"],[1,"color-white","font-15"],[1,"row","text-center","color-white-2"],[1,"row-title"],["class","row",4,"ngFor","ngForOf"],[1,"box-pay","font-13","color-white"],[1,"btn-box"],["mat-button","",1,"border-15","w-240","mat-focus-indicator","mat-raised-button","mat-button-base",3,"click"],["mat-button","",1,"w-240","mat-focus-indicator","mat-raised-button","mat-button-base","mat-primary",3,"click"],[1,"row"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"\u7d50\u5e33\u6210\u529f"),t.qZA(),t.TgZ(3,"div",2)(4,"p",3),t._uU(5,"\u8a02\u55ae\u7de8\u865f: "),t.qZA(),t.TgZ(6,"p",4),t._uU(7),t.qZA()(),t.TgZ(8,"div",5)(9,"p",6),t._uU(10,"\u8a02\u55ae\u660e\u7d30"),t.qZA(),t.TgZ(11,"div",4)(12,"div",7)(13,"div",8),t._uU(14,"\u7968\u7a2e"),t.qZA(),t.TgZ(15,"div",8),t._uU(16,"\u5ea7\u4f4d"),t.qZA(),t.TgZ(17,"div",8),t._uU(18,"\u7968\u865f"),t.qZA()(),t.YNc(19,h,7,3,"div",9),t.qZA()(),t.TgZ(20,"div",10)(21,"div")(22,"p",4),t._uU(23,"\u652f\u4ed8\u65b9\u5f0f : "),t.TgZ(24,"span",3),t._uU(25,"\u73fe\u91d1"),t.qZA()()(),t.TgZ(26,"div")(27,"p",4),t._uU(28,"\u8a02\u55ae\u91d1\u984d : "),t.TgZ(29,"span",3),t._uU(30),t.qZA()()()(),t.TgZ(31,"div",11)(32,"button",12),t.NdJ("click",function(){return n.onClose()}),t._uU(33,"\u95dc\u9589"),t.qZA(),t.TgZ(34,"button",13),t.NdJ("click",function(){return n.onPrint()}),t._uU(35,"\u5217\u5370"),t.qZA()()()),2&e&&(t.xp6(7),t.Oqu(n.order.data.orderId),t.xp6(12),t.Q6J("ngForOf",n.ticketList),t.xp6(11),t.hij("NTP ",n.order.data.amount,""))},dependencies:[u.sg],styles:[".dialog-order[_ngcontent-%COMP%]{width:90%;margin:10px auto}.border-15[_ngcontent-%COMP%]{border-radius:.75rem}.text-center[_ngcontent-%COMP%]{text-align:center}.font-14[_ngcontent-%COMP%]{font-size:14px;line-height:21px;font-weight:400}.font-15[_ngcontent-%COMP%]{font-size:15px;line-height:18px;font-weight:500}.font-13[_ngcontent-%COMP%]{font-size:12px;line-height:18px}.w-240[_ngcontent-%COMP%]{width:240px}.bg-dark[_ngcontent-%COMP%]{background-color:#222}.bg-dark-1[_ngcontent-%COMP%]{background-color:#313131}.color-dark[_ngcontent-%COMP%]{color:#eaeaea4d}.color-white[_ngcontent-%COMP%]{color:#ddd}.color-white-1[_ngcontent-%COMP%]{color:#ffffff80}.color-white-2[_ngcontent-%COMP%]{color:#eaeaea4d}.border-b-white[_ngcontent-%COMP%]{border-bottom:solid .75px #DDDDDD}.title[_ngcontent-%COMP%]{font-size:30px;line-height:36px;color:#fff;text-align:center;font-weight:500;padding-top:40px;padding-bottom:24px}.order-title[_ngcontent-%COMP%]{margin:16px auto;text-align:center}.order-detail[_ngcontent-%COMP%]{padding:16px 24px;border-radius:15px}.btn-box[_ngcontent-%COMP%]{width:90%;margin:15px;display:flex;justify-content:space-between}.box-pay[_ngcontent-%COMP%]{width:100%;margin:48px auto;padding:32px 16px;display:flex;justify-content:space-between;border-bottom:solid 1px #DDDDDD;border-top:solid 1px #DDDDDD}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),a})();var p=c(2366),C=c(7579),y=c(2722),m=c(9030),k=c(529),Z=c(1189),b=c(2149);let T=(()=>{class a{constructor(e,n,o){this.http=e,this.staffService=n,this.storageService=o,this.apiUrl="https://4200/api/orders"}v1StaffSeatCheckLockPost$(){return this.staffService.v1StaffOrderPost({ticketList:[{ticketId:"6471e9fcbe714b8e2a3dd231",price:280,ticketTypeId:"6460a7626b1ed843a113b9b6",movieId:"6458680f68d71390eb9fe56b",scheduleId:"645cf11f2e05063973b5f9ed",seatName:"F12"}],paymentMethod:1,amount:280})}generateOrder(e){return console.log(e),this.staffService.v1StaffOrderPost(e)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(k.eN),t.LFG(Z.x5),t.LFG(b.V))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();function O(a,i){1&a&&(t.TgZ(0,"button",21),t._uU(1,"LINE Pay \u4ed8\u6b3e"),t.qZA())}function v(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.openDialog())}),t._uU(1,"\u73fe\u91d1\u4ed8\u6b3e"),t.qZA()}}let x=(()=>{class a{transform(e){return Math.floor(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275pipe=t.Yjl({name:"customCurrency",type:a,pure:!0}),a})(),M=(()=>{class a{constructor(e,n,o,r){this.route=e,this.dialog=n,this.orderService=o,this.storageService=r,this.payMethod=0,this.payTotal=0,this.payString="",this.staffOrderCreateReq={paymentMethod:1,amount:0,ticketList:[]},this.destroy$=new C.x}ngOnInit(){this.route.queryParams.subscribe(e=>{this.payMethod=e.id,console.log(this.payMethod)}),this.shopCar=this.storageService.getLocalStorage(p.d.shopCartData),this.getOrder()}getSubtotal(){let e=0;return this.shopCar?.forEach(n=>{n.ticket.forEach(o=>{e+=o.price})}),e}getPayBack(){return 0!=this.payTotal?this.payTotal-this.getSubtotal():0}getOrder(){this.staffOrderCreateReq={paymentMethod:1,amount:0,ticketList:[]},this.staffOrderCreateReq.amount=this.getSubtotal(),this.shopCar?.forEach(e=>{const n=e.ticket,o=e.seat;for(let r=0;r<Math.min(n.length,o.length);r++){const l=n[r],d=o[r],_={ticketId:l.ticketId,price:l.price,ticketTypeId:l.ticketTypeId,movieId:e.movieId,scheduleId:e.scheduleId,seatId:d.seatId,seatName:d.seatName};this.staffOrderCreateReq.ticketList.push(_),console.log("\u8ff4\u5708\u7b46\u6578",r),console.log("\u8ff4\u5708\u8332\u88e1",_)}}),console.log("ticketList",this.staffOrderCreateReq)}openDialog(){this.getOrder(),this.staffOrderCreateReq?this.payTotal>=this.getSubtotal()?this.orderService.generateOrder(this.staffOrderCreateReq).pipe((0,y.R)(this.destroy$)).subscribe(n=>{if(console.log("order",n),1===n.code){const o=this.dialog.open(P,{width:"800px",data:n});this.storageService.removeLocalStorage(p.d.shopCartData),o.afterClosed().subscribe(r=>{console.log("Dialog result:",r),this.reloadPage()})}else alert(n.message)}):(alert("\u4ed8\u6b3e\u91d1\u984d\u4e0d\u8db3, \u8acb\u8f38\u5165\u4ed8\u6b3e\u91d1\u984d"),console.log("shopCartData \u4e0d\u5b58\u5728\u65bc Local Storage \u4e2d")):(alert("\u8cfc\u7269\u8eca\u70ba\u7a7a, \u8acb\u91cd\u65b0\u9078\u64c7\u5546\u54c1"),console.log("shopCartData \u4e0d\u5b58\u5728\u65bc Local Storage \u4e2d"))}reloadPage(){location.reload()}convertToNumber(e){return parseInt(e,10)}convertToString(e){return e.toString()}calculate(e,n){if(!e)return;let o=this.payTotal,r=this.payString;"str"===n?(r+=e,o=this.convertToNumber(r)):"method"===n?"remove"===e?(r=r.substring(0,r.length-1),o=parseInt(r)):(o=0,r=this.convertToString(o)):"number"===n&&(o+=this.convertToNumber(e),r=o.toString()),o>1e5?alert("\u4ed8\u6b3e\u91d1\u984d\u4e0d\u5f97\u5927\u65bc100,000\u5143"):(this.payTotal=o,this.payString=r)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(m.gz),t.Y36(s.uw),t.Y36(T),t.Y36(b.V))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-payment-page"]],decls:78,vars:10,consts:[[1,"main"],["id","calulate",1,"box","computer-calculate","bg-dark-parmary",2,"maring-bottom","15px"],[1,"computer-calculate-contain","box-dark"],[1,"small-title"],[1,"cont"],[1,"cont-symbol"],[1,"computer-calculate-symbol"],[1,"computer-calculate-contain"],[1,"box-contain",2,"margin-top","15px"],["id","payment",1,"box","payment","bg-dark"],[3,"ngSwitch"],["class","btn btn-dark",4,"ngSwitchCase"],["class","btn btn-dark",3,"click",4,"ngSwitchCase"],["id","keyboard",1,"box","computer-keyboard","bg-dark"],[1,"keyboard-1"],[1,"btn","btn-1","btn-dark",3,"click"],[1,"btn","btn-1","btn-remove","btn-gray",3,"click"],[1,"flex","just-cont-between"],[1,"btn-circle","btn-dark",3,"click"],[1,"btn-circle-1","btn-dark",3,"click"],[1,"btn-circle-2","btn-dark",3,"click"],[1,"btn","btn-dark"],[1,"btn","btn-dark",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),t._uU(4,"\u5be6\u4ed8\u91d1\u984d"),t.qZA(),t.TgZ(5,"div",4)(6,"div",5),t._uU(7,"NTD"),t.qZA(),t.TgZ(8,"div"),t._uU(9),t.ALo(10,"customCurrency"),t.qZA()()(),t.TgZ(11,"div",6),t._uU(12,"-"),t.qZA(),t.TgZ(13,"div",7)(14,"p",3),t._uU(15,"\u61c9\u4ed8\u91d1\u984d"),t.qZA(),t.TgZ(16,"div",4)(17,"div",5),t._uU(18,"NTD"),t.qZA(),t.TgZ(19,"div"),t._uU(20),t.qZA()()(),t.TgZ(21,"div",6),t._uU(22,"="),t.qZA(),t.TgZ(23,"div",7)(24,"p",3),t._uU(25,"\u627e\u96f6"),t.qZA(),t.TgZ(26,"div",4)(27,"div",5),t._uU(28,"NTD"),t.qZA(),t.TgZ(29,"div"),t._uU(30),t.ALo(31,"customCurrency"),t.qZA()()()(),t.TgZ(32,"div",8)(33,"div",9)(34,"label",3),t._uU(35,"\u652f\u4ed8\u65b9\u5f0f"),t.qZA(),t.ynx(36,10),t.YNc(37,O,2,0,"button",11),t.YNc(38,v,2,0,"button",12),t.BQk(),t.qZA(),t.TgZ(39,"div",13)(40,"div",14)(41,"button",15),t.NdJ("click",function(){return n.calculate("zero","method")}),t._uU(42,"c"),t.qZA(),t.TgZ(43,"button",16),t.NdJ("click",function(){return n.calculate("remove","method")}),t.qZA()(),t.TgZ(44,"div",17)(45,"button",18),t.NdJ("click",function(){return n.calculate("4","str")}),t._uU(46,"4"),t.qZA(),t.TgZ(47,"button",18),t.NdJ("click",function(){return n.calculate("5","str")}),t._uU(48,"5"),t.qZA(),t.TgZ(49,"button",18),t.NdJ("click",function(){return n.calculate("6","str")}),t._uU(50,"6"),t.qZA(),t.TgZ(51,"button",19),t.NdJ("click",function(){return n.calculate("100","number")}),t._uU(52,"+100"),t.qZA()(),t.TgZ(53,"div",17)(54,"button",18),t.NdJ("click",function(){return n.calculate("7","str")}),t._uU(55,"7"),t.qZA(),t.TgZ(56,"button",18),t.NdJ("click",function(){return n.calculate("8","str")}),t._uU(57,"8"),t.qZA(),t.TgZ(58,"button",18),t.NdJ("click",function(){return n.calculate("9","str")}),t._uU(59,"9"),t.qZA(),t.TgZ(60,"button",19),t.NdJ("click",function(){return n.calculate("300","number")}),t._uU(61,"+300"),t.qZA()(),t.TgZ(62,"div",17)(63,"button",18),t.NdJ("click",function(){return n.calculate("1","str")}),t._uU(64,"1"),t.qZA(),t.TgZ(65,"button",18),t.NdJ("click",function(){return n.calculate("2","str")}),t._uU(66,"2"),t.qZA(),t.TgZ(67,"button",18),t.NdJ("click",function(){return n.calculate("3","str")}),t._uU(68,"3"),t.qZA(),t.TgZ(69,"button",19),t.NdJ("click",function(){return n.calculate("500","number")}),t._uU(70,"+500"),t.qZA()(),t.TgZ(71,"div",17)(72,"button",20),t.NdJ("click",function(){return n.calculate("00","str")}),t._uU(73,"00"),t.qZA(),t.TgZ(74,"button",18),t.NdJ("click",function(){return n.calculate("0","str")}),t._uU(75,"0"),t.qZA(),t.TgZ(76,"button",19),t.NdJ("click",function(){return n.calculate("1000","number")}),t._uU(77,"+1000"),t.qZA()()()()()),2&e&&(t.xp6(9),t.Oqu(t.lcZ(10,6,n.payTotal)),t.xp6(11),t.Oqu(n.getSubtotal()),t.xp6(10),t.Oqu(t.lcZ(31,8,n.getPayBack())),t.xp6(6),t.Q6J("ngSwitch",n.payMethod),t.xp6(1),t.Q6J("ngSwitchCase",2),t.xp6(1),t.Q6J("ngSwitchCase",1))},dependencies:[u.RF,u.n9,x],styles:[".bg-dark[_ngcontent-%COMP%]{background-color:#1a1a1a}.bg-dark-parmary[_ngcontent-%COMP%]{background-color:#222}.small-title[_ngcontent-%COMP%]{font-size:.875rem;color:#ffffff80}.flex[_ngcontent-%COMP%]{display:flex}.just-cont-between[_ngcontent-%COMP%]{justify-content:space-between}.main[_ngcontent-%COMP%]{width:740px;margin:1rem auto}.box[_ngcontent-%COMP%]{padding:1.5rem;display:flex;justify-content:space-between;border-radius:10px}.computer-calculate-contain[_ngcontent-%COMP%]{display:block}.box-dark[_ngcontent-%COMP%]{background-color:#1a1a1a;border-radius:10px}.computer-calculate[_ngcontent-%COMP%]{display:flex;align-items:center}.computer-calculate-contain[_ngcontent-%COMP%]{min-width:201px;padding:20px 10px}.computer-calculate-contain[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]{font-size:1.875rem;display:flex;justify-content:space-between;align-items:center;font-weight:500;margin-top:10px}.computer-calculate-contain[_ngcontent-%COMP%]   .cont-symbol[_ngcontent-%COMP%]{color:#ffffff80;font-size:1rem}.computer-calculate-symbol[_ngcontent-%COMP%]{width:1.5rem;font-size:2rem;text-align:center}.box-contain[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.box-contain[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]{width:230px;display:block}.box-contain[_ngcontent-%COMP%]   .computer-keyboard[_ngcontent-%COMP%]{width:494px;display:block;padding:.875rem}.box-contain[_ngcontent-%COMP%]   .computer-keyboard[_ngcontent-%COMP%]   .keyboard-1[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:15px}.btn[_ngcontent-%COMP%]{width:100%;padding:1rem;font-size:1rem;text-align:center;border-radius:25px;margin-top:1rem}.btn-1[_ngcontent-%COMP%]{width:213px}.btn-dark[_ngcontent-%COMP%]{background-color:#222;color:#ddd}.btn-gray[_ngcontent-%COMP%]{background:rgba(255,255,255,.5019607843)}.btn-circle[_ngcontent-%COMP%]{margin-top:.875rem;border-radius:40px;padding:1rem 1.5rem;font-size:1rem;text-align:center;width:84px;height:86px}.btn-circle-1[_ngcontent-%COMP%]{margin-top:.875rem;border-radius:40px;padding:1rem 1.5rem;font-size:1rem;text-align:center;width:144px;height:86px}.btn-circle-2[_ngcontent-%COMP%]{margin-top:.875rem;border-radius:40px;font-size:1rem;text-align:center;width:188px;height:86px}.btn-remove[_ngcontent-%COMP%]{background-image:url(icon-remove.5656b2da332ecce5.png);background-position:center;background-repeat:no-repeat;background-size:12%}"]}),a})();var f=c(4006);const D=[{path:"",component:M}];let A=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.ez,f.u5,f.UX,m.Bz.forChild(D)]}),a})()}}]);