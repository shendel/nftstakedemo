(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{54997:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return n(77479)}])},55460:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(85893),r=n(11163),s=n(214),i=n.n(s),o=n(10783),c=function(){var e;(0,r.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:i().mainLogo,children:(0,a.jsx)("img",{src:(e="images/logo.png","./assets/".concat(e)),alt:(0,o.Q)("Stake NFT - earn ERC20","MainPage_Header")})})})}},15200:function(e,t,n){"use strict";var a=n(85893),r=n(44423),s=n(214),i=n.n(s),o=n(11163),c=[{id:"index",title:"Home",link:"index"},{id:"stake",title:"Stake",link:"stake"},{id:"settings",title:"Settings",link:"settings",adminOnly:!0}];t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,o.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("nav",{className:"".concat(i().mainNav),children:c.map((function(n){return n.adminOnly&&!t?null:(0,a.jsx)("a",{className:e===n.id?i().active:"",href:(0,r.R)(n.link),children:n.title},n.id)}))}),(0,a.jsx)("hr",{className:"".concat(i().divider," ").concat(i().spacerTop)})]})}},44423:function(e,t,n){"use strict";n.d(t,{R:function(){return a}});var a=function(e){return"index"==e?"./index.html":"./".concat(e,".html")}},10783:function(e,t,n){"use strict";n.d(t,{Q:function(){return a}});var a=function(e,t){return e}},77479:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(47568),r=n(34051),s=n.n(r),i=n(85893),o=n(35553),c=n(67294),u=n(214),p=n.n(u),l=n(3283),d=n.n(l),m={BNB:{name:"Binance Coin",symbol:"BNB",decimals:18},ETH:{name:"Ether",symbol:"ETH",decimals:18},MATIC:{name:"Polygon",symbol:"MATIC",decimals:18},ARBETH:{name:"Ether (Arbitrum One)",symbol:"ETH",decimals:18},XDAI:{name:"xDai",symbol:"xDAI",decimals:18},FTM:{name:"FTM",symbol:"FTM",decimals:18}},y={1:"0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",4:"0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821",5:"0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",100:"0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287",77:"0x2D0Cf59485baa2A105541b9bf850E06C071AFab8",137:"0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD",80001:"0x6aa1bdc159e28beca44cc7f1a260a25e7b63f53d",56:"0xa9193376D09C7f31283C54e56D013fCF370Cd9D9",97:"0xe348b292e8eA5FAB54340656f3D374b259D658b8",42161:"0x80C7DD17B01855a6D2347444a0FCC36136a314de",421611:"0xf27ee99622c3c9b264583dacb2cce056e194494f",250:"0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5"},f=[{slug:"bsc_testnet",chainName:"Binance Smart Chain - Testnet",chainId:"0x61",networkVersion:97,rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545/"],blockExplorerUrls:["https://testnet.bscscan.com"],isTestnet:!0,nativeCurrency:m.BNB},{slug:"bsc_mainnet",chainName:"Binance Smart Chain",chainId:"0x38",networkVersion:56,rpcUrls:["https://bsc-dataseed.binance.org/"],blockExplorerUrls:["https://bscscan.com"],isTestnet:!1,nativeCurrency:m.BNB},{slug:"matic_testnet",chainName:"Polygon - Testnet (mumbai)",chainId:"0x13881",networkVersion:80001,rpcUrls:["https://rpc-mumbai.maticvigil.com"],blockExplorerUrls:["https://mumbai.polygonscan.com/"],isTestnet:!0,nativeCurrency:m.MATIC},{slug:"matic_mainnet",chainName:"Polygon",chainId:"0x89",networkVersion:137,rpcUrls:["https://rpc-mainnet.maticvigil.com"],blockExplorerUrls:["https://polygonscan.com"],isTestnet:!1,nativeCurrency:m.MATIC},{slug:"eth_rinkeby",chainName:"Ethereum - Testnet (Rinkeby)",chainId:"0x4",networkVersion:4,rpcUrls:["https://rinkeby.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c"],blockExplorerUrls:["https://rinkeby.etherscan.io"],isTestnet:!0,nativeCurrency:m.ETH},{slug:"eth_mainnet",chainName:"Ethereum",chainId:"0x1",networkVersion:1,rpcUrls:["https://mainnet.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c"],blockExplorerUrls:["https://etherscan.io"],isTestnet:!1,nativeCurrency:m.ETH},{slug:"arbeth_testnet",chainName:"Arbitrum - Testnet (Rinkeby)",chainId:"0x66EEB",networkVersion:421611,rpcUrls:["https://rinkeby.arbitrum.io/rpc"],blockExplorerUrls:["https://rinkeby-explorer.arbitrum.io"],isTestnet:!0,nativeCurrency:m.ARBETH},{slug:"arbeth_mainnet",chainName:"Arbitrum",chainId:"0xA4B1",networkVersion:42161,rpcUrls:["https://arb1.arbitrum.io/rpc"],blockExplorerUrls:["https://explorer.arbitrum.io"],isTestnet:!1,nativeCurrency:m.ARBETH},{slug:"xdai_testnet",chainName:"xDai - Testnet (Sokol)",chainId:"0x4d",networkVersion:77,rpcUrls:["https://sokol.poa.network"],blockExplorerUrls:["https://blockscout.com/poa/sokol"],isTestnet:!0,nativeCurrency:m.XDAI},{slug:"xdai_mainnet",chainName:"Gnosis (xDai)",chainId:"0x64",networkVersion:100,rpcUrls:["https://rpc.gnosischain.com"],blockExplorerUrls:["https://blockscout.com/xdai/mainnet"],isTestnet:!1,nativeCurrency:m.XDAI},{slug:"fantom_testnet",chainName:"Fantom testnet",chainId:"0xfa2",networkVersion:4002,rpcUrls:["https://rpc.testnet.fantom.network/"],blockExplorerUrls:["https://testnet.ftmscan.com"],isTestnet:!0,nativeCurrency:m.FTM},{slug:"fantom_mainnet",chainName:"Fantom",chainId:"0xfa",networkVersion:250,rpcUrls:["https://rpc.ftm.tools/"],blockExplorerUrls:["https://ftmscan.com"],isTestnet:!1,nativeCurrency:m.FTM}],h=function(){var e=(0,a.Z)(s().mark((function e(t){var n,a,r,i,o,c,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b(t),a=n.chainId,r=n.chainName,i=n.rpcUrls,o=n.blockExplorerUrls,c=n.nativeCurrency,u=[{chainId:a,chainName:r,rpcUrls:i,blockExplorerUrls:o,nativeCurrency:c}],e.prev=2,e.next=5,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x".concat(Number(a).toString(16))}]});case 5:e.next=20;break;case 7:if(e.prev=7,e.t0=e.catch(2),4902!==e.t0.code){e.next=19;break}return e.prev=10,e.next=13,window.ethereum.request({method:"wallet_addEthereumChain",params:u});case 13:e.next=17;break;case 15:e.prev=15,e.t1=e.catch(10);case 17:e.next=20;break;case 19:console.error("Switch chain error: ",e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[2,7],[10,15]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){return f.find((function(t){return t.networkVersion===e}))},_=function(){return new Promise((function(e,t){if(window.ethereum){var n=window.ethereum&&window.ethereum.networkVersion,a=f.filter((function(e){return e.networkVersion==n}));if(a.length){var r=a[0],s=new(d())(window.ethereum||d().givenProvider||new(d().providers.HttpProvider)(r.rpcUrls));s?e({activeChainId:n,web3:s}):t("FAIL_SETUP_WEB3")}}else t("NOT_INSTALLED")}))},x=n(10797),v=n(44431),k=function(){var e=(0,a.Z)(s().mark((function e(t,n,a,r){var i,o,c,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={from:t,gas:"0"},e.next=4,(i=n.methods)[a].apply(i,(0,x.Z)(r)).estimateGas(o);case 4:return c=e.sent,u=new v.BigNumber(new v.BigNumber(c).multipliedBy(1.05).toFixed(0)).toString(16),o.gas="0x"+u,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),w=n(15200),T=n(55460),g=n(10783),C=n(64914),N=n.n(C),B=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'),H=JSON.parse('[{"inputs":[{"internalType":"address","name":"_nftCollection","type":"address"},{"internalType":"contract IERC20","name":"_rewardsToken","type":"address"},{"internalType":"uint256","name":"_rewardsPerHour","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"adminWithdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"availableRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getStakedTokens","outputs":[{"components":[{"internalType":"address","name":"staker","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"internalType":"struct Farm.StakedToken[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftCollection","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakers","outputs":[{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"uint256","name":"timeOfLastUpdate","type":"uint256"},{"internalType":"uint256","name":"unclaimedRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),S=JSON.parse('[{"constant":false,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'),M=n(81586),F="0x7682598A861336359740C08b3D1C5981F9473979",I="0xAcf15259F8B99094b7051679a9e60B2F270558ce",E=new M.vU(B),j=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1],r=(0,c.useState)(!1),u=r[0],l=r[1],d=(0,c.useState)(!1),m=d[0],f=d[1],b=(0,c.useState)(!1),x=b[0],v=b[1],C=(0,c.useState)(!1),M=C[0],j=C[1],A=(0,c.useState)(!1),U=A[0],D=A[1],O=(0,c.useState)(!1),R=O[0],L=O[1],P=(0,c.useState)(!1),V=P[0],Z=P[1],G=(0,c.useState)(!1),Y=G[0],X=G[1],W=(0,c.useState)(!1),q=W[0],J=W[1],Q=(0,c.useState)(!1),z=Q[0],K=Q[1],$=(0,c.useState)(!0),ee=$[0],te=$[1],ne=(0,c.useState)(!1),ae=ne[0],re=ne[1],se=(0,c.useState)(!0),ie=(se[0],se[1]),oe=(0,c.useState)(!0),ce=oe[0],ue=oe[1],pe=(0,c.useState)([]),le=pe[0],de=pe[1],me=(0,c.useState)([]),ye=me[0],fe=me[1],he=(0,c.useState)(!0),be=he[0],_e=he[1],xe=(0,c.useState)(!1),ve=(xe[0],xe[1]),ke=(0,c.useState)(!1),we=ke[0],Te=ke[1],ge=function(e){var t=!1;try{t=e.message.replace("Internal JSON-RPC error.",""),t=JSON.parse(t)}catch(n){}switch(t&&t.message?t.message:e.message){case"execution reverted: You don't own this token!":console.log("You dont own this token");break;case"MetaMask Tx Signature: User denied transaction signature.":console.log("Transaction denied");break;case"execution reverted: ERC721: invalid token ID":console.log("Invalid token ID");break;default:console.log("Unkrnown error",e.message)}},Ce=function(){x.methods.availableRewards(m).call().then((function(e){L(e)}))},Ne=function(){te(!0),V&&V.methods.balanceOf(I).call().then((function(e){K(e),te(!1)})).catch((function(e){console.log(">>> fetchTotalRewardBalance",e),ge(e)}))},Be=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie(!0),M.methods.isApprovedForAll(m,I).call().then((function(e){re(e),ie(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He=function(){var e=(0,a.Z)(s().mark((function e(){var t,n,a,r,i,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m&&M&&U)||ce){e.next=31;break}return _e(!0),t=!1,n=!1,a=0,r=0,e.prev=6,e.next=9,M.methods.totalSupply().call();case 9:a=e.sent,t=!0,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.log("Fail fetch total supply");case 16:return e.prev=16,e.next=19,M.methods.MAX_SUPPLY().call();case 19:r=e.sent,n=!0,e.next=26;break;case 23:e.prev=23,e.t1=e.catch(16),console.log("Fail fetch max supply");case 26:if(console.log("hasMaxSupply",n),console.log("hasTotalSupply",t),console.log("maxSupply",r),console.log("totalSupply",a),n||t){for(ve(!0),i=[],o=1;o<=(t?a:r);o++)i.push({target:F,callData:E.encodeFunctionData("ownerOf",[o])});U.methods.aggregate(i).call().then((function(e){var t=[];e.returnData.forEach((function(e,n){E.decodeFunctionResult("ownerOf",e)[0]===m&&t.push(n+1)})),fe(t),_e(!1)})).catch((function(e){console.log(">>> fetchUserNfts",e),ge(e)}))}case 31:case"end":return e.stop()}}),e,null,[[6,13],[16,23]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){He()}),[m,M,U,x,ce]),(0,c.useEffect)((function(){V&&V.methods.decimals().call().then((function(e){V.methods.symbol().call().then((function(t){J(e),X(t),Ne()}))}))}),[V]),(0,c.useEffect)((function(){x&&m&&(Ce(),m&&x&&(ue(!0),x.methods.getStakedTokens(m).call().then((function(e){e=e.map((function(e){return e.tokenId})),de(e),ue(!1)}))))}),[m,x]),(0,c.useEffect)((function(){m&&M&&Be()}),[m,M]);var Se=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u&&"".concat(t)=="".concat(97)&&u.eth.getAccounts().then((function(e){f(e[0]);var n=new u.eth.Contract(S,y[t]);console.log(n),D(n);var a=new u.eth.Contract(B,F);j(a);var r=new u.eth.Contract(N(),"0x703f112bda4cc6cb9c5fb4b2e6140f6d8374f10b");Z(r);var s=new u.eth.Contract(H,I);v(s)})).catch((function(e){console.log(">>> initOnWeb3Ready",e),ge(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Me(){return(Me=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m||!x){e.next=5;break}return e.next=3,k(m,x,"claimRewards",[]);case 3:t=e.sent,x.methods.claimRewards().send(t).then((function(e){Ce(),Ne()})).catch((function(e){console.log(">>> claimRewards",e),ge(e)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(e){return Ie.apply(this,arguments)}function Ie(){return Ie=(0,a.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m&&x&&M)){e.next=17;break}if(n=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(m,x,"stake",[t]);case 3:n=e.sent,x.methods.stake(t).send(n).then((function(){var e=le;e.push(t),de(e),fe(ye.filter((function(e){return e!==t})))})).catch((function(e){console.log(">> stakeNft",e),ge(e)})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(">> stakeNft calc gas",e.t0),ge(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ae){e.next=16;break}return e.prev=3,e.next=6,k(m,M,"setApprovalForAll",[I,!0]);case 6:r=e.sent,M.methods.setApprovalForAll(I,!0).send(r).then(function(){var e=(0,a.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:re(!0),n();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(">> stakeNft do approve",e),ge(e)})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(">>> stakeNft do approve calc gas",e.t0),ge(e.t0);case 14:e.next=17;break;case 16:n();case 17:case"end":return e.stop()}}),e,null,[[3,10]])}))),Ie.apply(this,arguments)}function Ee(){return(Ee=(0,a.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m||!x){e.next=12;break}return e.prev=1,e.next=4,k(m,x,"withdraw",[t]);case 4:n=e.sent,x.methods.withdraw(t).send(n).then((function(e){var n=ye;n.push(t),fe(n),de(le.filter((function(e){return e!==t})))})).catch((function(e){console.log(">>> withdraw",e),ge(e)})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(">>> withdraw calc gas",e.t0),ge(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}(0,c.useEffect)((function(){Se()}),[u]);var je=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.enable();case 2:_().then((function(e){console.log(e);var t=e.activeChainId,a=e.web3;n(t),"".concat(t)==="".concat(97)?l(a):(console.log(">>> need change chain"),h(97))})).catch((function(e){console.log(">>>> connectWithMetamask",e),ge(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"TokenId"}),(0,i.jsx)("input",{type:"number",onChange:function(e){return Te(e.target.value)}}),(0,i.jsx)("button",{className:"".concat(p().mainButton," ").concat(p().spacerBottom),onClick:function(){console.log(we),we&&Fe(we)},children:ae?"Stake":"Approve & Stake"})]});return(0,i.jsxs)("div",{className:p().container,children:[(0,w.Z)("stake",!0),(0,T.Z)(),(0,i.jsx)("h1",{className:p().h1,children:(0,g.Q)("Stake Your NFTs","StakePage_Title")}),(0,i.jsx)("hr",{className:"".concat(p().divider," ").concat(p().spacerTop)}),m?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Your Tokens"}),(0,i.jsxs)("div",{className:p().tokenGrid,children:[(0,i.jsxs)("div",{className:p().tokenItem,children:[(0,i.jsx)("h3",{className:p().tokenLabel,children:"Claimable Rewards"}),(0,i.jsx)("p",{className:p().tokenValue,children:(0,i.jsx)("b",{children:R&&!1!==q&&!1!==Y?"".concat(o.bM(R,q)," ").concat(Y):"Loading..."})})]}),(0,i.jsxs)("div",{className:p().tokenItem,children:[(0,i.jsx)("h3",{className:p().tokenLabel,children:"Stake Farm balance"}),(0,i.jsx)("p",{className:p().tokenValue,children:(0,i.jsx)("b",{children:ee||!z||!1===q||!1===Y?"Loading...":"".concat(o.bM(z,q)," ").concat(Y)})})]})]}),(0,i.jsx)("hr",{className:"".concat(p().divider," ").concat(p().spacerTop)}),(0,i.jsxs)("b",{children:["Connected wallet ",m]}),(0,i.jsx)("button",{className:"".concat(p().mainButton," ").concat(p().spacerTop),onClick:function(){return function(){return Me.apply(this,arguments)}()},children:"Claim Rewards"}),(0,i.jsx)("hr",{className:"".concat(p().divider," ").concat(p().spacerTop)}),(0,i.jsx)("h2",{children:"Your Staked NFTs"}),(0,i.jsx)("div",{className:p().nftBoxGrid,children:ce?(0,i.jsx)("p",{className:p().tokenValue,children:(0,i.jsx)("b",{children:"Loading..."})}):(0,i.jsx)(i.Fragment,{children:le.length>0?(0,i.jsx)(i.Fragment,{children:null===le||void 0===le?void 0:le.map((function(e){return(0,i.jsxs)("div",{className:p().nftBox,children:[(0,i.jsxs)("h3",{children:["#",e]}),(0,i.jsx)("button",{className:"".concat(p().mainButton," ").concat(p().spacerBottom),onClick:function(){return function(e){return Ee.apply(this,arguments)}(e)},children:"Withdraw"})]},e.toString())}))}):(0,i.jsx)("p",{className:p().tokenValue,children:(0,i.jsx)("b",{children:"You dont have staked NFTs."})})})}),(0,i.jsx)("hr",{className:"".concat(p().divider," ").concat(p().spacerTop)}),(0,i.jsx)("h2",{children:"Your Unstaked NFTs"}),Ae,(0,i.jsx)("div",{className:p().nftBoxGrid,children:be?(0,i.jsx)("p",{className:p().tokenValue,children:(0,i.jsx)("b",{children:"Loading..."})}):(0,i.jsx)(i.Fragment,{children:ye.length>0?(0,i.jsx)(i.Fragment,{children:null===ye||void 0===ye?void 0:ye.map((function(e){return(0,i.jsxs)("div",{className:p().nftBox,children:[(0,i.jsxs)("h3",{children:["#",e]}),(0,i.jsx)("button",{className:"".concat(p().mainButton," ").concat(p().spacerBottom),onClick:function(){return Fe(e)},children:ae?"Stake":"Approve & Stake"})]},e.toString())}))}):(0,i.jsx)("p",{className:p().tokenValue,children:(0,i.jsx)("b",{children:"You dont have Unstaked NFTs."})})})})]}):(0,i.jsx)("button",{className:p().mainButton,onClick:je,children:"Connect Wallet"})]})}},214:function(e){e.exports={connect:"Home_connect__lnU7w",btn:"Home_btn__UGRT9",address:"Home_address__UT_ly",container:"Home_container__bCOhY",page:"Home_page__0ydta",pageContainer:"Home_pageContainer__wDxoE",arrowButton:"Home_arrowButton__1aqew",owner:"Home_owner__58_U6",btnContainer:"Home_btnContainer__TOUPE",header:"Home_header__GCVRv",left:"Home_left__T7LhQ",right:"Home_right__TcB_0",secondaryButton:"Home_secondaryButton__QO332",mainButton:"Home_mainButton__dUc5h",ourCollection:"Home_ourCollection__OxOvN",collectionContainer:"Home_collectionContainer__pwAKU",h1:"Home_h1__7tdRW",explain:"Home_explain__KljHm",purple:"Home_purple__zOX0E",divider:"Home_divider__c4Nl_",smallDivider:"Home_smallDivider__wG_2a",textInput:"Home_textInput__cA71M",imageInput:"Home_imageInput__SjLEG",contractBoxGrid:"Home_contractBoxGrid__epSaY",contractBox:"Home_contractBox__bxUXm",mainLogo:"Home_mainLogo__6nS3s",nftBoxGrid:"Home_nftBoxGrid__qFzCk",nftBox:"Home_nftBox__woiq_",optionSelectBox:"Home_optionSelectBox__2Ehnv",selectBoxTitle:"Home_selectBoxTitle__rVZ7Z",selectBoxDescription:"Home_selectBoxDescription__QANhO",tokenGrid:"Home_tokenGrid__vsv91",tokenItem:"Home_tokenItem__HsZqC",tokenLabel:"Home_tokenLabel__X56dZ",tokenValue:"Home_tokenValue__PYZU2",center:"Home_center__4BFgC",spacerTop:"Home_spacerTop__RGZTg",bigSpacerTop:"Home_bigSpacerTop__YrAdY",spacerBottom:"Home_spacerBottom__JmsFH",cardName:"Home_cardName__wxcZw",cardDescription:"Home_cardDescription__iWMlk",headerLogo:"Home_headerLogo__qHj_d",verticalSpacer:"Home_verticalSpacer__W1YaR",codeSnippet:"Home_codeSnippet__gwZEn",noUnderline:"Home_noUnderline__SEtQc",detailPageContainer:"Home_detailPageContainer__7zwXF",detailPageHr:"Home_detailPageHr__JnD4B",lightPurple:"Home_lightPurple__8ghLL",nftMedia:"Home_nftMedia__0EkUL",amountToClaim:"Home_amountToClaim__p1NtW",noGapBottom:"Home_noGapBottom__KnGYx",mainNav:"Home_mainNav__XpD7s",active:"Home_active__YzwIj"}},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){},43503:function(){}},function(e){e.O(0,[482,714,930,774,888,179],(function(){return t=54997,e(e.s=t);var t}));var t=e.O();_N_E=t}]);