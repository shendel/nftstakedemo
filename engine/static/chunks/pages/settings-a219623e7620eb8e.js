(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{52837:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return t(55956)}])},15200:function(n,e,t){"use strict";var a=t(10797),i=t(85893),o=t(44423),r=t(214),s=t.n(r),c=t(11163),l=t(31259),u=[{id:"index",title:"Home",link:"index"}].concat((0,a.Z)((0,l.S)("EnabledDemoMind",!0)?[{id:"mint",title:"Mint NFT",link:"mint"}]:[]),[{id:"stake",title:"Stake",link:"stake"},{id:"settings",title:"Settings",link:"settings",adminOnly:!0}]);e.Z=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,c.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("nav",{className:"".concat(s().mainNav),children:u.map((function(t){return t.adminOnly&&!e?null:(0,i.jsx)("a",{className:n===t.id?s().active:"",href:(0,o.R)(t.link),children:t.title},t.id)}))}),(0,i.jsx)("hr",{className:"".concat(s().divider," ").concat(s().spacerTop)})]})}},53419:function(n,e,t){"use strict";t.d(e,{A:function(){return c}});var a=t(47568),i=t(10797),o=t(34051),r=t.n(o),s=t(44431),c=function(){var n=(0,a.Z)(r().mark((function n(e,t,a,o){var c,l,u,d;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={from:e,gas:"0"},n.next=4,(c=t.methods)[a].apply(c,(0,i.Z)(o)).estimateGas(l);case 4:return u=n.sent,d=new s.BigNumber(new s.BigNumber(u).multipliedBy(1.05).toFixed(0)).toString(16),l.gas="0x"+d,n.abrupt("return",l);case 8:case"end":return n.stop()}}),n)})));return function(e,t,a,i){return n.apply(this,arguments)}}()},31259:function(n,e,t){"use strict";t.d(e,{S:function(){return a}});var a=function(n,e){return e}},55956:function(n,e,t){"use strict";t.r(e);var a=t(47568),i=t(26042),o=t(10797),r=t(34051),s=t.n(r),c=t(85893),l=t(214),u=t.n(l),d=t(15200),f=t(50070),h=t(67294),v=t(78967),m=t(53419),x=t(94360),g=t(84575),p={main:"Main settings",texts:"Edit texts",social:"Social links"};e.default=function(){var n=(0,f.Z)(),e=n.storageData,t=(n.storageIsLoading,(0,h.useState)([])),r=t[0],l=t[1],k=(0,h.useState)(!1);k[0],k[1];(0,h.useEffect)((function(){var n=setTimeout((function(){var n=(0,o.Z)(r);n.shift(),l(n)}),5e3);return function(){return clearTimeout(n)}}),[r]);var j=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",t=(0,o.Z)(r);t.push({msg:n,style:e}),l((0,o.Z)(t))},N=(0,h.useState)(!1),b=N[0],C=N[1],S=(0,h.useState)(!1),w=S[0],y=S[1],T=(0,h.useState)(!1),F=T[0],E=T[1],Z=(0,h.useState)(!1),B=Z[0],I=Z[1],D=function(n,e){var t=!1;try{t=n.message.replace("Internal JSON-RPC error.",""),t=JSON.parse(t)}catch(a){}switch(t&&t.message?t.message:n.message){case"execution reverted: You don't own this token!":console.log("You dont own this token");break;case"MetaMask Tx Signature: User denied transaction signature.":console.log("Transaction denied");break;case"execution reverted: ERC721: invalid token ID":console.log("Invalid token ID");break;default:console.log("Unkrnown error",n.message)}},_=function(){var n=(0,a.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!w||"".concat(b)!="".concat(5)){n.next=4;break}w.eth.getAccounts().then((function(n){E(n[0]);var e=new w.eth.Contract(x.Mt,"0xafb8f27df1f629432a47214b4e1674cbcbdb02df");console.log(">>> storageContract",e),M(e)})).catch((function(n){console.log(">>> initOnWeb3Ready",n),D(n)})),n.next=8;break;case 4:return n.next=6,(0,v.IC)();case 6:n.sent&&O();case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,h.useEffect)((function(){var n;n="on useEffect activeWeb3 initOnWeb3Ready",console.log(n),_()}),[w]);var O=function(){var n=(0,a.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,v.pE)({onBeforeConnect:function(){I(!0)},onSetActiveChain:C,onConnected:function(n,e){y(e),I(!1)},onError:function(n){console.log(">>>> connectWithMetamask",n),D(n),I(!1)},needChainId:5});case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),R=(0,h.useState)(!1),W=R[0],M=R[1],A=function(){var n=(0,a.Z)(s().mark((function n(t){var a,o,r,c,l,u;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=t.onBegin,o=t.onReady,r=t.onError,c=t.newData,!F||!W){n.next=15;break}return a&&a(),l=(0,i.Z)({},e,c),n.prev=4,n.next=7,(0,m.A)(F,W,"setKeyData",[(0,g.Z)(),{owner:F,info:JSON.stringify(l)}]);case 7:u=n.sent,W.methods.setKeyData((0,g.Z)(),{owner:F,info:JSON.stringify(l)}).send(u).then((function(){o&&o()})).catch((function(n){console.log(">>> error",n),r&&r(n)})),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(4),console.log(">>> error",n.t0),r&&r(n.t0);case 15:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e){return n.apply(this,arguments)}}(),J=e&&!e.isInstalled,P=(0,h.useState)(J),H=P[0],K=P[1],U=(0,h.useState)(!1),X=U[0],Y=U[1],G=(0,h.useState)("main"),L=G[0],q=G[1],z=(0,h.useState)((null===e||void 0===e?void 0:e.chainId)||0),Q=z[0],V=z[1],$=(0,h.useState)((null===e||void 0===e?void 0:e.nftCollection)||""),nn=$[0],en=$[1],tn=(0,h.useState)((null===e||void 0===e?void 0:e.rewardToken)||""),an=tn[0],on=tn[1],rn=(0,h.useState)((null===e||void 0===e?void 0:e.farmContract)||""),sn=rn[0],cn=rn[1];(0,h.useEffect)((function(){e&&(V(e.chainId),en(e.nftCollection),on(e.rewardToken),cn(e.farmContract))}),[e]);var ln=function(){var n={chainId:Q,nftCollection:nn,rewardToken:an,farmContract:sn};console.log(">>> new config",n),A({onBegin:function(){Y(!0),j("Confirm transaction for save main config")},onReady:function(){Y(!1),K(!0),j("NFTStake main config successfull saved","success")},onError:function(n){Y(!1),j("Fail save main config","error")},newData:n})};return console.log(">>> storageData",e,J,e&&!e.isInstalled,!H),(0,c.jsxs)("div",{className:u().container,children:[(0,d.Z)("settings",!0),(0,c.jsx)("h1",{className:u().h1,children:"Settings"}),J&&!H?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"NFTStake need setup on this domain"}),F?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{disabled:X,className:"".concat(u().mainButton," ").concat(u().autoWidth),onClick:function(){A({onBegin:function(){Y(!0),j("Confirm transaction for setup NFTStake on this domain")},onReady:function(){Y(!1),K(!0),j("NFTStake successfull installed on this domain. Now you can configure farm","success")},onError:function(n){Y(!1),j("Fail setup NFTStake on domain","error")},newData:{isInstalled:!0}})},children:X?"Setup on domain...":"Setup NFTStake on this domain"})}):(0,c.jsx)("button",{disabled:B,className:u().mainButton,onClick:O,children:B?"Connecting":"Connect Wallet"})]}):(0,c.jsx)(c.Fragment,{children:F?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("ul",{className:u().settingsTabsNav,children:Object.keys(p).map((function(n){return(0,c.jsx)("li",{onClick:function(){q(n)},className:n===L?u().activeTab:"",children:p[n]},n)}))}),(0,c.jsx)("hr",{className:"".concat(u().divider," ").concat(u().spacerTop)}),"main"===L&&(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:u().form,children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{children:"Work ChainId:"}),(0,c.jsx)("div",{children:(0,c.jsx)("input",{type:"number",value:Q,onChange:function(n){return e=n.target.value,void V(e);var e}})})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{children:"NFT Collection address"}),(0,c.jsx)("div",{children:(0,c.jsx)("input",{type:"text",value:nn,onChange:function(n){return e=n.target.value,void en(e);var e}})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:u().secondaryButton,onClick:function(){},children:"Deploy Demo NFT collection"})})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{children:"Reward Token address"}),(0,c.jsx)("div",{children:(0,c.jsx)("input",{type:"text",value:an,onChange:function(n){return e=n.target.value,void on(e);var e}})})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{children:"Farm contract address"}),(0,c.jsx)("div",{children:(0,c.jsx)("input",{type:"text",value:sn,onChange:function(n){return e=n.target.value,void cn(e);var e}})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{className:u().secondaryButton,onClick:function(){},children:"Fetch contract"}),(0,c.jsx)("button",{className:u().secondaryButton,onClick:function(){},children:"Deploy new farm contract"})]})]}),(0,c.jsx)("div",{className:u().subForm,children:(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{children:"Reward per hour:"}),(0,c.jsx)("input",{type:"text"})]})}),(0,c.jsx)("button",{className:u().mainButton,onClick:ln,children:"Save changes"})]})})]}):(0,c.jsx)("button",{disabled:B,className:u().mainButton,onClick:O,children:B?"Connecting":"Connect Wallet"})}),r.length>0&&(0,c.jsx)("div",{className:u().notifyHolder,children:r.map((function(n,e){return(0,c.jsx)("div",{className:"".concat(n.style?u()[n.style]:u().info),children:n.msg},e)}))})]})}}},function(n){n.O(0,[885,774,888,179],(function(){return e=52837,n(n.s=e);var e}));var e=n.O();_N_E=e}]);