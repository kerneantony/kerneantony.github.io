"use strict";(self["webpackChunkcryptea"]=self["webpackChunkcryptea"]||[]).push([[762],{8762:function(t,a,e){e.r(a),e.d(a,{default:function(){return y}});var s=e(6768),r=e(4232);const i={class:"container-fluid p-3"},c={class:"row"},n={class:"card border-primary m-3",style:{"min-width":"20rem"}},l={class:"card-body"},d=["src","alt"],o={class:"card-header lead mt-3"},u={class:"card-body"},p={class:"d-flex justify-content-between align-items-center"},k={class:"lead"};function m(t,a,e,m,f,v){return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("div",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(f.cards,(t=>((0,s.uX)(),(0,s.CE)("div",{class:"col",key:t.id},[(0,s.Lk)("div",n,[(0,s.Lk)("div",l,[(0,s.Lk)("img",{src:t.image,class:"card-img-top",alt:"Picture of "+t.title},null,8,d),(0,s.Lk)("div",o,(0,r.v_)(t.title),1),(0,s.Lk)("div",u,[(0,s.Lk)("p",null,(0,r.v_)(t.description),1),(0,s.Lk)("div",p,[(0,s.Lk)("button",{class:"btn btn-primary",onClick:a[0]||(a[0]=(...t)=>v.showAlert&&v.showAlert(...t))},"Buy"),(0,s.Lk)("p",k,(0,r.v_)(t.price)+" $ ",1)])])])])])))),128))])])}var f={data(){return{cards:[]}},mounted(){this.loadJsonData()},methods:{async loadJsonData(){try{const t=await fetch("fakeapi/nft/nfts.json"),a=await t.json();this.cards=a.map((t=>({id:t.id,title:t.title,description:t.description,image:t.image,price:t.price})))}catch(t){console.error("Error loading JSON data:",t)}},showAlert(){alert("Buying is not implemented :)")}}},v=e(1241);const h=(0,v.A)(f,[["render",m]]);var y=h}}]);
//# sourceMappingURL=762.0f714502.js.map