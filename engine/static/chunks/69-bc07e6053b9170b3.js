(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{55460:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),a=t(11163),i=t(214),c=t.n(i),s=t(44423),o=t(10783),u=function(){var e;(0,a.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:c().mainLogo,children:(0,r.jsx)("a",{href:(0,s.R)("index"),children:(0,r.jsx)("img",{src:(e="images/logo.png","./assets/".concat(e)),alt:(0,o.Q)("Stake NFT - earn ERC20","MainPage_Header")})})})})}},15200:function(e,n,t){"use strict";var r=t(10797),a=t(85893),i=t(44423),c=t(214),s=t.n(c),o=t(11163),u=t(31259),l=[{id:"index",title:"Home",link:"index"}].concat((0,r.Z)((0,u.S)("EnabledDemoMind",!0)?[{id:"mint",title:"Mint NFT",link:"mint"}]:[]),[{id:"stake",title:"Stake",link:"stake"},{id:"settings",title:"Settings",link:"settings",adminOnly:!0}]);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,o.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("nav",{className:"".concat(s().mainNav),children:l.map((function(t){return t.adminOnly&&!n?null:(0,a.jsx)("a",{className:e===t.id?s().active:"",href:(0,i.R)(t.link),children:t.title},t.id)}))}),(0,a.jsx)("hr",{className:"".concat(s().divider," ").concat(s().spacerTop)})]})}},53419:function(e,n,t){"use strict";t.d(n,{A:function(){return o}});var r=t(47568),a=t(10797),i=t(34051),c=t.n(i),s=t(44431),o=function(){var e=(0,r.Z)(c().mark((function e(n,t,r,i){var o,u,l,m;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={from:n,gas:"0"},e.next=4,(o=t.methods)[r].apply(o,(0,a.Z)(i)).estimateGas(u);case 4:return l=e.sent,m=new s.BigNumber(new s.BigNumber(l).multipliedBy(1.05).toFixed(0)).toString(16),u.gas="0x"+m,e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}()},64262:function(e,n,t){"use strict";t.d(n,{Ce:function(){return a},w5:function(){return i}});var r={BNB:{name:"Binance Coin",symbol:"BNB",decimals:18},ETH:{name:"Ether",symbol:"ETH",decimals:18},MATIC:{name:"Polygon",symbol:"MATIC",decimals:18},ARBETH:{name:"Ether (Arbitrum One)",symbol:"ETH",decimals:18},XDAI:{name:"xDai",symbol:"xDAI",decimals:18},FTM:{name:"FTM",symbol:"FTM",decimals:18}},a={1:"0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",4:"0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821",5:"0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",100:"0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287",77:"0x2D0Cf59485baa2A105541b9bf850E06C071AFab8",137:"0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD",80001:"0x6aa1bdc159e28beca44cc7f1a260a25e7b63f53d",56:"0xa9193376D09C7f31283C54e56D013fCF370Cd9D9",97:"0xe348b292e8eA5FAB54340656f3D374b259D658b8",42161:"0x80C7DD17B01855a6D2347444a0FCC36136a314de",421611:"0xf27ee99622c3c9b264583dacb2cce056e194494f",250:"0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5"},i=[{slug:"bsc_testnet",chainName:"Binance Smart Chain - Testnet",chainId:"0x61",networkVersion:97,rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545/"],blockExplorerUrls:["https://testnet.bscscan.com"],isTestnet:!0,nativeCurrency:r.BNB},{slug:"bsc_mainnet",chainName:"Binance Smart Chain",chainId:"0x38",networkVersion:56,rpcUrls:["https://bsc-dataseed.binance.org/"],blockExplorerUrls:["https://bscscan.com"],isTestnet:!1,nativeCurrency:r.BNB},{slug:"matic_testnet",chainName:"Polygon - Testnet (mumbai)",chainId:"0x13881",networkVersion:80001,rpcUrls:["https://rpc-mumbai.maticvigil.com"],blockExplorerUrls:["https://mumbai.polygonscan.com/"],isTestnet:!0,nativeCurrency:r.MATIC},{slug:"matic_mainnet",chainName:"Polygon",chainId:"0x89",networkVersion:137,rpcUrls:["https://rpc-mainnet.maticvigil.com"],blockExplorerUrls:["https://polygonscan.com"],isTestnet:!1,nativeCurrency:r.MATIC},{slug:"eth_rinkeby",chainName:"Ethereum - Testnet (Rinkeby)",chainId:"0x4",networkVersion:4,rpcUrls:["https://rinkeby.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c"],blockExplorerUrls:["https://rinkeby.etherscan.io"],isTestnet:!0,nativeCurrency:r.ETH},{slug:"eth_goerli",chainName:"Ethereum - Testnet (Goerli)",chainId:"0x5",networkVersion:5,rpcUrls:["https://goerli.infura.io/v3/"],blockExplorerUrls:["https://goerli.etherscan.io"],isTestnet:!0,nativeCurrency:r.ETH},{slug:"eth_mainnet",chainName:"Ethereum",chainId:"0x1",networkVersion:1,rpcUrls:["https://mainnet.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c"],blockExplorerUrls:["https://etherscan.io"],isTestnet:!1,nativeCurrency:r.ETH},{slug:"arbeth_testnet",chainName:"Arbitrum - Testnet (Rinkeby)",chainId:"0x66EEB",networkVersion:421611,rpcUrls:["https://rinkeby.arbitrum.io/rpc"],blockExplorerUrls:["https://rinkeby-explorer.arbitrum.io"],isTestnet:!0,nativeCurrency:r.ARBETH},{slug:"arbeth_mainnet",chainName:"Arbitrum",chainId:"0xA4B1",networkVersion:42161,rpcUrls:["https://arb1.arbitrum.io/rpc"],blockExplorerUrls:["https://explorer.arbitrum.io"],isTestnet:!1,nativeCurrency:r.ARBETH},{slug:"xdai_testnet",chainName:"xDai - Testnet (Sokol)",chainId:"0x4d",networkVersion:77,rpcUrls:["https://sokol.poa.network"],blockExplorerUrls:["https://blockscout.com/poa/sokol"],isTestnet:!0,nativeCurrency:r.XDAI},{slug:"xdai_mainnet",chainName:"Gnosis (xDai)",chainId:"0x64",networkVersion:100,rpcUrls:["https://rpc.gnosischain.com"],blockExplorerUrls:["https://blockscout.com/xdai/mainnet"],isTestnet:!1,nativeCurrency:r.XDAI},{slug:"fantom_testnet",chainName:"Fantom testnet",chainId:"0xfa2",networkVersion:4002,rpcUrls:["https://rpc.testnet.fantom.network/"],blockExplorerUrls:["https://testnet.ftmscan.com"],isTestnet:!0,nativeCurrency:r.FTM},{slug:"fantom_mainnet",chainName:"Fantom",chainId:"0xfa",networkVersion:250,rpcUrls:["https://rpc.ftm.tools/"],blockExplorerUrls:["https://ftmscan.com"],isTestnet:!1,nativeCurrency:r.FTM}]},31259:function(e,n,t){"use strict";t.d(n,{S:function(){return r}});var r=function(e,n){return n}},44423:function(e,n,t){"use strict";t.d(n,{R:function(){return r}});var r=function(e){return"index"==e?"./index.html":"./".concat(e,".html")}},78967:function(e,n,t){"use strict";t.d(n,{pE:function(){return h}});var r=t(47568),a=t(34051),i=t.n(a),c=t(3283),s=t.n(c),o=t(64262),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,c,s,o,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l(n),r=t.chainId,a=t.chainName,c=t.rpcUrls,s=t.blockExplorerUrls,o=t.nativeCurrency,u=[{chainId:r,chainName:a,rpcUrls:c,blockExplorerUrls:s,nativeCurrency:o}],e.prev=2,e.next=5,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x".concat(Number(r).toString(16))}]});case 5:e.sent,e.next=23;break;case 8:if(e.prev=8,e.t0=e.catch(2),4902!==e.t0.code){e.next=21;break}return e.prev=11,e.next=14,window.ethereum.request({method:"wallet_addEthereumChain",params:u});case 14:e.sent,e.next=19;break;case 17:e.prev=17,e.t1=e.catch(11);case 19:e.next=23;break;case 21:return console.error("Switch chain error: ",e.t0.message),e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e,null,[[2,8],[11,17]])})));return function(n){return e.apply(this,arguments)}}(),l=function(e){return o.w5.find((function(n){return n.networkVersion===e}))},m=function(){return new Promise((function(e,n){if(window.ethereum){var t=window.ethereum&&window.ethereum.networkVersion,r=o.w5.filter((function(e){return e.networkVersion==t}));if(r.length){var a=r[0],i=new(s())(window.ethereum||s().givenProvider||new(s().providers.HttpProvider)(a.rpcUrls));i?e({activeChainId:t,web3:i}):n("FAIL_SETUP_WEB3")}}else n("NOT_INSTALLED")}))},h=function(){var e=(0,r.Z)(i().mark((function e(n){var t,a,c,s,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.onBeforeConnect,a=n.onConnected,c=n.onError,s=n.onSetActiveChain,o=n.onSetActiveWeb3,l=n.needChainId,t&&t(),e.prev=2,e.next=5,window.ethereum.enable();case 5:m().then(function(){var e=(0,r.Z)(i().mark((function e(t){var p,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=t.activeChainId,f=t.web3,s&&s(p),"".concat(p)!=="".concat(l)){e.next=6;break}o&&o(f),a&&a(p,f),e.next=19;break;case 6:return e.prev=6,e.next=9,u(l);case 9:if(!1!==e.sent){e.next=13;break}return c&&c({message:"REJECT_SWITCH_NETWORK"}),e.abrupt("return");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),c&&c(e.t0);case 18:setTimeout((function(){m().then(function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("".concat(t.activeChainId)!=="".concat(l)){e.next=3;break}return e.next=3,h(n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),1e3);case 19:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){c&&c(e)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c&&c(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}()},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){},43503:function(){}}]);