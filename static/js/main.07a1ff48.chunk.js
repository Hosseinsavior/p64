(this["webpackJsonpb64-url-editor"]=this["webpackJsonpb64-url-editor"]||[]).push([[0],{132:function(e,t,a){e.exports=a(235)},137:function(e,t,a){},162:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),c=(a(137),a(13)),l=a(25),i=a(240),u=a(242),m=a(36),d=a(244),p=a(237),h=a(245),f=a(50),j=a(26),g=a(238),b=a(239),E=a(241),y=a(243),v=a(246),w=a(256),O=a(250),k=a(254),x=a(255),C=a(56),P=a.n(C),A=a(110),S=a.n(A),I=a(111),T=a.n(I),L=(a(162),"https://res.cloudinary.com/phlincloud/image/upload/v1583267224/b64-url-editor"),B={v2ray:L+"/v2ray_logo_ygiuj5.png",trojan:L+"/trojan-gfw_logo_z3oa6y.png",ss:L+"/ss_logo_nzt66p.png"},N=a(112),R=a.n(N);var U=function(){Object(n.useEffect)((function(){if(window.location.search){var e=R.a.parse(window.location.search);Se.subscribe({target:{value:e.sub}})}}));var e=i.a.TextArea,t=u.a.Option,a=h.a.Content,s=h.a.Footer,o=b.a.confirm,C=i.a.Group,A=Object(n.useState)(""),I=Object(l.a)(A,2),L=I[0],N=I[1],U=Object(n.useState)(""),z=Object(l.a)(U,2),_=z[0],J=z[1],W=Object(n.useState)(""),D=Object(l.a)(W,2),K=D[0],M=D[1],Z=Object(n.useState)([{}]),G=Object(l.a)(Z,2),X=G[0],$=G[1],F=Object(n.useState)(0),H=Object(l.a)(F,2),q=H[0],Q=H[1],V=S()(),Y=Object(l.a)(V,2),ee=Y[0],te=Y[1],ae=Object(n.useState)(!0),ne=Object(l.a)(ae,2),re=ne[0],se=ne[1],oe=Object(n.useState)(0),ce=Object(l.a)(oe,2),le=ce[0],ie=ce[1],ue=["ss","vmess","trojan"],me=/^(vmess|ss|trojan).*/,de=Object(n.useState)("API"),pe=Object(l.a)(de,2),he=pe[0],fe=pe[1],je=Object(n.useState)("fastEdit"),ge=Object(l.a)(je,2),be=ge[0],Ee=ge[1],ye=function(e){return btoa(unescape(encodeURIComponent(e)))},ve=function(e){return decodeURIComponent(escape(atob(e)))},we=function(e){return me.test(e)?e.slice(0,e.search("://")):"unsupported"},Oe={vmess:function(e){var t=JSON.parse(ve(e.replace("vmess://","")));return{type:we(e),json:t,raw:e,id:P.a.generate()}},ss:function(e){var t=e.search("#"),a=decodeURIComponent(e.slice(t+1)),n=ve(e.slice(5,t)).split(/[@:]+/),r={id:n[0],aid:n[1],add:n[2],port:n[3],ps:a};return{type:we(e),json:r,raw:e,id:P.a.generate()}},trojan:function(e){var t=e.search("#"),a=decodeURIComponent(e.slice(t+1)),n=e.slice(9,t-6).split(/[@:]+/),r={aid:n[0],add:n[1],port:n[2],ps:a};return{type:we(e),json:r,raw:e,id:P.a.generate()}},unsupported:function(e){return{type:we(e),json:{},raw:e,id:P.a.generate()}},isText:function(e){return e.split(/[;\n]+/).every((function(e){return me.test(e)}))}},ke={vmess:function(e){return"vmess://"+ye(JSON.stringify(e))},ss:function(e){var t=e.id+":"+e.aid+"@"+e.add+":"+e.port;return"ss://"+ye(t)+"#"+encodeURIComponent(e.ps)},trojan:function(e){return"trojan://"+e.aid+"@"+e.add+":"+e.port+"?peer=#"+encodeURIComponent(e.ps)},unsupported:function(e){return e.raw}},xe=function(e){return/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(e)},Ce=function(e){if(e.length&&xe(e)){var t=ve(e).split(/[;\n]+/).map((function(e){return Oe[we(e)](e)}));return console.log("decodeB64",t),t}return e},Pe=function(e){try{if(xe(e)){var t=Ce(e).filter((function(e){return""!==e.raw}));return t.length<Ce(e).length&&(N(Ae(t)),J(ve(Ae(t)))),t.filter((function(e){return ue.includes(e.type)})).length>0?($(t),se(!1),t):e}}catch(a){console.log(a)}},Ae=function(e){return ye(e.map((function(e){return ke[e.type](e.json)})).join("\n"))},Se={base64:function(e){if(N(e.target.value),xe(e.target.value))try{J(ve(e.target.value)),Pe(e.target.value)}catch(t){console.error(t)}},text:function(e){if(J(e.target.value),""!==e.target.value){var t=ye(e.target.value);N(t),console.log(t),Pe(t)!==t&&E.a.success("\u89e3\u6790\u6210\u529f")}},subscribe:function(e){var t=e.target.value;if(M(t),Oe.isText(t)){if(J(t),""===e.target.value)return;var a=ye(t);N(a),console.log(a),Pe(a)!==a&&E.a.success("\u89e3\u6790\u6210\u529f")}else if(/^(http|https).*/.test(t)){var n="fetching";E.a.loading({content:"\u5c0e\u5165\u8a02\u95b1\u93c8\u63a5\u4e2d",key:n}),T.a.get(e.target.value).then((function(e){return e.data})).then((function(e){return N(e),ve(e)})).then((function(e){return J(e),ye(e)})).then((function(e){return Pe(e)})).then((function(e){E.a.success({content:"\u5c0e\u5165 "+e.length+"\u500b\u7bc0\u9ede \u6210\u529f",key:n,duration:2})})).catch((function(e){console.error(e),E.a.warning({content:"\u5c0e\u5165\u5931\u6557",key:n,duration:2})}))}}},Ie={base64:function(){return Se.base64({target:{value:ee}})},text:function(){return Se.text({target:{value:ee}})},subscribe:function(){return Se.subscribe({target:{value:ee}})}},Te={item:function(e){Q(X.findIndex((function(t){return t.id===e[1]})))}},Le=function(e){X.filter((function(t){return t.id!==e.id})).length?Q((q+1)%X.length):Q(0),$(X.filter((function(t){return t.id!==e.id}))),E.a.success("\u522a\u9664 "+e.json.ps+" \u6210\u529f"),ie(1)},Be=function(e){var t={vmess:r.a.createElement("img",{src:B.v2ray,alt:"v2Ray",className:"logo-wrap"}),trojan:r.a.createElement("img",{src:B.trojan,alt:"trojan-gfw",className:"logo-wrap"}),ss:r.a.createElement("img",{src:B.ss,alt:"Shadowsocks",className:"logo-wrap"})};return t.hasOwnProperty(e)?t[e]:r.a.createElement(x.a,null)},Ne={ps:function(e){var t=X[q].id;$(X.map((function(a){return a.id===t?Object(c.a)({},a,{json:Object(c.a)({},a.json,{ps:e.target.value})}):a}))),ie(1)},net:function(e){var t=e.target.value;if(X[q].json){var a=X[q].id;"kcp"!==t?($(X.map((function(e){return e.id===a?Object(c.a)({},e,{json:Object(c.a)({},e.json,{net:t,type:"none"})}):e}))),ie(1)):"ws"!==t?($(X.map((function(e){return e.id===a?Object(c.a)({},e,{json:Object(c.a)({},e.json,{net:t,host:"",path:""})}):e}))),ie(1)):($(X.map((function(e){return e.id===a?Object(c.a)({},e,{json:Object(c.a)({},e.json,{net:t})}):e}))),ie(1))}},address:function(e){var t=X[q].id;$(X.map((function(a){return a.id===t?Object(c.a)({},a,{json:Object(c.a)({},a.json,{add:e.target.value})}):a}))),ie(1)},port:function(e){var t=X[q].id;$(X.map((function(a){return a.id===t?Object(c.a)({},a,{json:Object(c.a)({},a.json,{port:e.target.value})}):a}))),ie(1)},uuid:function(e){var t=X[q].id;$(X.map((function(a){return a.id===t?Object(c.a)({},a,{json:Object(c.a)({},a.json,{id:e.target.value})}):a}))),ie(1)},aid:function(e){var t=X[q].id;$(X.map((function(a){return a.id===t?Object(c.a)({},a,{json:Object(c.a)({},a.json,{aid:e.target.value})}):a}))),ie(1)},tls:function(e,t){var a=X[q].id;$(X.map((function(t){return t.id===a?Object(c.a)({},t,{json:Object(c.a)({},t.json,{tls:e?"tls":"none"})}):t}))),ie(1)},ws:{host:function(e){var t=X[q].id;"ws"===X[q].json.net&&($(X.map((function(a){return a.id===t?Object(c.a)({},a,{json:Object(c.a)({},a.json,{host:e.target.value})}):a}))),ie(1))},path:function(e){var t=X[q].id;"ws"===X[q].json.net&&($(X.map((function(a){return a.id===t?Object(c.a)({},a,{json:Object(c.a)({},a.json,{path:e.target.value})}):a}))),ie(1))}},type:function(e){var t=X[q].id;"kcp"===X[q].json.net&&($(X.map((function(a){return a.id===t?Object(c.a)({},a,{json:Object(c.a)({},a.json,{type:e})}):a}))),ie(1))},ssMethod:function(e){var t=X[q].id;"ss"===X[q].type&&($(X.map((function(a){return a.id===t?Object(c.a)({},a,{json:Object(c.a)({},a.json,{id:e})}):a}))),ie(1))}},Re={API:r.a.createElement(f.a,{gutter:[0,16]},r.a.createElement(j.a,{span:24},r.a.createElement(e,{rows:4,autosize:!1,placeholder:"\u8f38\u5165\u8a02\u95b1\u7db2\u5740\u6216\u670d\u52d9\u5668\u93c8\u63a5",onChange:Se.subscribe,value:K})),r.a.createElement(j.a,{span:24,style:{marginBottom:-21}},r.a.createElement(m.a,{type:"primary",block:!0,onClick:Ie.subscribe},"\u5f9e\u526a\u8cbc\u7248\u5c0e\u5165"))),TEXT:r.a.createElement(f.a,{gutter:[0,16]},r.a.createElement(j.a,{span:24},r.a.createElement(e,{rows:4,autosize:!1,onChange:Se.text,value:_})),r.a.createElement(j.a,{span:24,style:{marginBottom:-21}},r.a.createElement(m.a,{type:"primary",block:!0,onClick:Ie.text},"\u5f9e\u526a\u8cbc\u7248\u5c0e\u5165"))),BASE64:r.a.createElement(f.a,{gutter:[0,16]},r.a.createElement(j.a,{span:24},r.a.createElement(e,{rows:4,autosize:!1,onChange:Se.base64,value:L})),r.a.createElement(j.a,{span:24,style:{marginBottom:-21}},r.a.createElement(m.a,{type:"primary",block:!0,onClick:Ie.base64},"\u5f9e\u526a\u8cbc\u7248\u5c0e\u5165")))},Ue={select:r.a.createElement(u.a,{showSearch:!0,value:X[q]&&X[q].hasOwnProperty("json")?[X[q].json.ps,X[q].id]:"",disabled:re||!L.length,style:{width:"100%"},onChange:Te.item,filterOption:function(e,t){return t.children[2].toLowerCase().indexOf(e.toLowerCase())>=0}},X.filter((function(e){return ue.includes(e.type)})).map((function(e){return r.a.createElement(t,{key:e.id,value:[e.json.ps,e.id]},Be(e.type)," ",e.json.ps)}))),remark:r.a.createElement(i.a,{placeholder:"\u7bc0\u9ede\u540d\u7a31 (Remark)",addonAfter:X[q]&&X[q].hasOwnProperty("type")?Be(X[q].type):r.a.createElement(x.a,null),value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.ps:"",disabled:re||!L.length,onChange:Ne.ps,onPressEnter:Ne.ps}),deleteIcon:r.a.createElement(m.a,{type:"primary",disabled:re||!L.length,icon:r.a.createElement(w.a,null),onClick:function(){o({title:"\u78ba\u5b9a\u8981\u522a\u9664"+X[q].json.ps+"?",icon:r.a.createElement(k.a,null),content:"\u9019\u9805\u64cd\u4f5c\u7121\u6cd5\u5fa9\u539f",okText:"\u78ba\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){Le(X[q])},onCancel:function(){console.log(X)}})},danger:!0}),serverAddress:r.a.createElement(C,{compact:!0},r.a.createElement(i.a,{style:{width:"75%",textAlign:"left"},disabled:re||!L.length,placeholder:"\u670d\u52d9\u5668\u5730\u5740 (Address)",onChange:Ne.address,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.add:""}),r.a.createElement(i.a,{style:{width:"25%"},disabled:re||!L.length,placeholder:"port",onChange:Ne.port,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.port:""}))},ze={vmess:r.a.createElement(f.a,{gutter:[16,24]},r.a.createElement(j.a,{xs:24,sm:24,md:12}," ",Ue.select," "),r.a.createElement(j.a,{xs:20,sm:20,md:10}," ",Ue.remark," "),r.a.createElement(j.a,{xs:4,sm:4,md:2}," ",Ue.deleteIcon," "),r.a.createElement(j.a,{xs:24,sm:24,md:12}," ",Ue.serverAddress," "),r.a.createElement(j.a,{xs:24,sm:24,md:12},r.a.createElement(C,{compact:!0},r.a.createElement(i.a,{style:{width:"75%"},placeholder:"UUID",onChange:Ne.uuid,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.id:""}),r.a.createElement(i.a,{style:{width:"25%"},placeholder:"AID",onChange:Ne.aid,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.aid:""}))),r.a.createElement(j.a,{xs:20,sm:20,md:10},r.a.createElement(d.a.Group,{style:{marginLeft:-24},onChange:Ne.net,value:X[q]&&X[q].json?X[q].json.net:""},r.a.createElement(d.a,{key:"tcp",value:"tcp"},"TCP"),r.a.createElement(d.a,{key:"ws",value:"ws"},"WS"),r.a.createElement(d.a,{key:"kcp",value:"kcp"},"KCP"))),r.a.createElement(j.a,{xs:4,sm:4,md:2},r.a.createElement(p.a,{style:{marginLeft:-24},checkedChildren:"TLS",unCheckedChildren:"TLS",onChange:Ne.tls,checked:!(!X[q]||!X[q].hasOwnProperty("json"))&&"tls"===X[q].json.tls})),r.a.createElement(j.a,{xs:X[q]&&X[q].hasOwnProperty("json")&&"ws"===X[q].json.net?24:0,sm:X[q]&&X[q].hasOwnProperty("json")&&"ws"===X[q].json.net?24:0,md:X[q]&&X[q].hasOwnProperty("json")&&"ws"===X[q].json.net?12:0},r.a.createElement(C,{compact:!0},r.a.createElement(i.a,{style:{width:"75%"},placeholder:"\u57df\u540d (Host)",onChange:Ne.ws.host,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.host:""}),r.a.createElement(i.a,{style:{width:"25%"},placeholder:"path",onChange:Ne.ws.path,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.path:""}))),r.a.createElement(j.a,{xs:X[q]&&X[q].hasOwnProperty("json")&&"kcp"===X[q].json.net?24:0,sm:X[q]&&X[q].hasOwnProperty("json")&&"kcp"===X[q].json.net?24:0,md:X[q]&&X[q].hasOwnProperty("json")&&"kcp"===X[q].json.net?12:0},r.a.createElement(u.a,{style:{width:"100%"},onChange:Ne.type,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.type:""},r.a.createElement(t,{key:"none",value:"none"},"none (\u4e0d\u507d\u88dd)"),r.a.createElement(t,{key:"wechat-video",value:"wechat-video"}," \b\bwechat-video (\u507d\u88dd\u5fae\u4fe1\u8996\u983b) "),r.a.createElement(t,{key:"srtp",value:"srtp"},"srtp (\u507d\u88dd\u8996\u983b\u901a\u8a71)"),r.a.createElement(t,{key:"utp",value:"utp"},"utp (\u507d\u88ddBitTorrent\u4e0b\u8f09) "),r.a.createElement(t,{key:"dtls",value:"dtls"},"dlts (\u507d\u88ddDLTS 1.2\u5c01\u5305)"),r.a.createElement(t,{key:"wireguard",value:"wireguard"},"wireguard (\u507d\u88ddWireguard\u5c01\u5305)")))),ss:r.a.createElement(f.a,{gutter:[16,24]},r.a.createElement(j.a,{xs:24,sm:24,md:12}," ",Ue.select," "),r.a.createElement(j.a,{xs:20,sm:20,md:10}," ",Ue.remark," "),r.a.createElement(j.a,{xs:4,sm:4,md:2}," ",Ue.deleteIcon," "),r.a.createElement(j.a,{xs:24,sm:24,md:12}," ",Ue.serverAddress," "),r.a.createElement(j.a,{xs:24,sm:24,md:12}),r.a.createElement(j.a,{xs:24,sm:24,md:12},r.a.createElement(u.a,{showSearch:!0,style:{width:"100%"},placeholder:"\u52a0\u5bc6\u65b9\u5f0f (Method)",onChange:Ne.ssMethod,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.id:"",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},["none","table","rc4","rc4-md5","rc4-md5-6","salsa20","chacha20","chacha20-ietf","aes-256-cfb","aes-192-cfb","aes-128-cfb","aes-256-cfb1","aes-192-cfb1","aes-128-cfb1","aes-256-cfb8","aes-192-cfb8","aes-128-cfb8","aes-256-ctr","aes-192-ctr","aes-128-ctr","bf-cfb","camellia-256-cfb","camellia-192-cfb","camellia-128-cfb","cast5-cfb","des-cfb","idea-cfb","seed-cfb","aes-256-gcm","aes-192-gcm","aes-128-gcm","chacha20-ietf-poly1305","chacha20-poly1305","xchacha20-ietf-poly1305"].map((function(e){return r.a.createElement(t,{key:e},e)})))),r.a.createElement(j.a,{xs:24,sm:24,md:12},r.a.createElement(i.a.Password,{placeholder:"\u5bc6\u78bc (Password)",onChange:Ne.aid,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.aid:""}))),trojan:r.a.createElement(f.a,{gutter:[16,24]},r.a.createElement(j.a,{xs:24,sm:24,md:12}," ",Ue.select," "),r.a.createElement(j.a,{xs:20,sm:20,md:10}," ",Ue.remark," "),r.a.createElement(j.a,{xs:4,sm:4,md:2}," ",Ue.deleteIcon," "),r.a.createElement(j.a,{xs:24,sm:24,md:12}," ",Ue.serverAddress," "),r.a.createElement(j.a,{xs:24,sm:24,md:12},r.a.createElement(i.a.Password,{placeholder:"\u5bc6\u78bc (Password)",onChange:Ne.aid,value:X[q]&&X[q].hasOwnProperty("json")?X[q].json.aid:""})))},_e={fastEdit:r.a.createElement(f.a,{gutter:[16,24],justify:"center"},r.a.createElement(j.a,{xs:16,sm:16,md:14,style:{height:60}}," ",Ue.select," "),r.a.createElement(j.a,{xs:4,sm:4,md:2}," ",Ue.deleteIcon," "),r.a.createElement(j.a,{xs:24,sm:24,md:16}," ",Ue.remark," "),r.a.createElement(j.a,{xs:24,sm:24,md:16}," ",Ue.serverAddress," ")),detailedEdit:X[q]?ue.includes(X[q].type)?ze[X[q].type]:"no data":r.a.createElement(y.a,null),buttons:r.a.createElement("div",null,r.a.createElement(v.a,{count:le,dot:!0},r.a.createElement(m.a,{type:"primary",icon:r.a.createElement(O.a,null),disabled:re||!L.length,onClick:function(){var e=Ae(X);N(e),J(X.map((function(e){return ke[e.type](e.json)})).join("\n")),te(e),E.a.success("New BASE64 copied"),ie(0)}},"\u751f\u6210")))};return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(f.a,{justify:"start",align:"middle",style:{textAlign:"left"}},r.a.createElement("h2",null,"Shawdowrockets \u8a02\u95b1\u93c8\u63a5\u7de8\u8f2f\u5668"),r.a.createElement(j.a,{xs:0,sm:0,md:8,style:{marginLeft:8}},r.a.createElement("h3",null,"\u652f\u6301 ",ue.map((function(e,t){return t<ue.length-1?e+", ":e}))," \u93c8\u63a5\u7de8\u8f2f"))),r.a.createElement(a,null,r.a.createElement(f.a,{gutter:[16,16],justify:"space-between",type:"flex"},r.a.createElement(j.a,{xs:24,sm:24,md:12},r.a.createElement(g.a,{className:"card",tabList:[{key:"fastEdit",tab:"\u5feb\u901f\u64cd\u4f5c"},{key:"detailedEdit",tab:"\u8a73\u7d30\u7de8\u8f2f"}],tabBarExtraContent:_e.buttons,activeTabKey:be,onTabChange:function(e){return Ee(e)}},_e[be])),r.a.createElement(j.a,{xs:24,sm:24,md:12},r.a.createElement(g.a,{className:"card",tabList:[{key:"API",tab:"API"},{key:"TEXT",tab:"URL"},{key:"BASE64",tab:"BASE64"}],activeTabKey:he,onTabChange:function(e){return fe(e)}},Re[he])))),r.a.createElement(s,{style:{position:"sticky",bottom:0}},r.a.createElement(f.a,null,r.a.createElement(j.a,{span:24},"Created by ",r.a.createElement("a",{href:"https://www.phlinhng.com"},"phlinhng"),". All rights reserved.")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[132,1,2]]]);
//# sourceMappingURL=main.07a1ff48.chunk.js.map