"use strict";(self.webpackChunkmanager=self.webpackChunkmanager||[]).push([[592],{3227:(g,_,t)=>{t.d(_,{a:()=>s});var r=t(8505),i=t(9300),c=t(4650),M=t(9233);let s=(()=>{class o{constructor(a){this._CommonService=a}upload(a,e){return this._CommonService.v1CommonUploadPostForm(a,e).pipe((0,r.b)(n=>1!==n.code&&alert(n.message)),(0,i.h)(n=>1===n.code))}getOption(a){return this._CommonService.v1CommonOptionTypeIdGet(a).pipe((0,r.b)(e=>1!==e.code&&alert(e.message)),(0,i.h)(e=>1===e.code))}}return o.\u0275fac=function(a){return new(a||o)(c.LFG(M.v_))},o.\u0275prov=c.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},6541:(g,_,t)=>{t.d(_,{D:()=>s});var r=t(8505),i=t(9300),c=t(4650),M=t(9233);let s=(()=>{class o{constructor(a){this._ManagerService=a}getMovieList(a,e,n,m){return this._ManagerService.v1ManagerMovieListGet(a,e,n,m).pipe((0,r.b)(v=>1!==v.code&&alert(v.message)),(0,i.h)(v=>1===v.code))}getMovieDetail(a){return this._ManagerService.v1ManagerMovieIdGet(a).pipe((0,r.b)(e=>1!==e.code&&alert(e.message)),(0,i.h)(e=>1===e.code))}createMovieDetail(a){return this._ManagerService.v1ManagerMoviePost(a).pipe((0,r.b)(e=>1!==e.code&&alert(e.message)),(0,i.h)(e=>1===e.code))}updateMovieDetail(a){return this._ManagerService.v1ManagerMoviePatch(a).pipe((0,r.b)(e=>1!==e.code&&alert(e.message)),(0,i.h)(e=>1===e.code))}updateReleaseStatus(a){return this._ManagerService.v1ManagerMovieStatusPut(a).pipe((0,r.b)(e=>1!==e.code&&alert(e.message)),(0,i.h)(e=>1===e.code))}deleteMovie(a){return this._ManagerService.v1ManagerMovieIdDelete(a).pipe((0,r.b)(e=>1!==e.code&&alert(e.message)),(0,i.h)(e=>1===e.code))}}return o.\u0275fac=function(a){return new(a||o)(c.LFG(M.bo))},o.\u0275prov=c.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);