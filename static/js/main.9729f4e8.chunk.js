(this["webpackJsonpb64-url-editor"]=this["webpackJsonpb64-url-editor"]||[]).push([[0],{222:function(e,t,a){e.exports=a(405)},227:function(e,t,a){},255:function(e,t){},257:function(e,t){},290:function(e,t){},291:function(e,t){},340:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),s=(a(227),a(219)),l=a(16),i=a(19),u=a(58),d=a.n(u),m=a(99),p=a(411),h=a(414),f=a(33),b=a(415),j=a(413),y=a(417),g=a(408),w=a(407),E=a(71),v=a(36),O=a(409),k=a(410),x=a(412),C=a(418),S=a(416),P=a(428),T=a(430),A=a(431),L=a(432),R=a(422),I=a(427),U=a(426),B=a(429),_=a(70),N=a.n(_),z=a(203),q=a.n(z),G=a(82),H=a.n(G),J=a(134),F=a.n(J),K=a(204),M=a.n(K),W=(a(340),"https://res.cloudinary.com/phlincloud/image/upload/v1583267224/b64-url-editor"),D={v2ray:W+"/v2ray_logo_ygiuj5.png",trojan:W+"/trojan-gfw_logo_z3oa6y.png",ss:W+"/ss_logo_nzt66p.png"},X="https://api.phlin.cc/b64",Z=(a(341),p.a.TextArea),$=h.a.Option,Q=w.a.Content,Y=w.a.Footer,V=k.a.confirm,ee=p.a.Group,te=["ss","vmess","trojan"],ae=/^(vmess|ss|trojan).*/,ne=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,re=[{key:"API",tab:"API"},{key:"TEXT",tab:"URL"},{key:"BASE64",tab:"BASE64"}],oe=[{key:"fastEdit",tab:"\u5feb\u901f\u64cd\u4f5c"},{key:"detailedEdit",tab:"\u8a73\u7d30\u7de8\u8f2f"}],ce=["none","table","rc4","rc4-md5","rc4-md5-6","salsa20","chacha20","chacha20-ietf","aes-256-cfb","aes-192-cfb","aes-128-cfb","aes-256-cfb1","aes-192-cfb1","aes-128-cfb1","aes-256-cfb8","aes-192-cfb8","aes-128-cfb8","aes-256-ctr","aes-192-ctr","aes-128-ctr","bf-cfb","camellia-256-cfb","camellia-192-cfb","camellia-128-cfb","cast5-cfb","des-cfb","idea-cfb","seed-cfb","aes-256-gcm","aes-192-gcm","aes-128-gcm","chacha20-ietf-poly1305","chacha20-poly1305","xchacha20-ietf-poly1305"],se={ss:function(e){return{id:"\u52a0\u5bc6\u65b9\u5f0f (Method)",aid:"",add:"",port:"",ps:"new shadowsocks [%]".replace("%",e)}},vmess:function(e){return{add:"",port:"",id:"",aid:1,net:"tcp",host:"",path:"/",tls:"none",type:"none",ps:"new v2ray [%]".replace("%",e),v:2}},trojan:function(e){return{aid:"",add:"",port:"",ps:"new trojan [%]".replace("%",e)}}},le=function(e){return btoa(unescape(encodeURIComponent(e)))},ie=function(e){return decodeURIComponent(escape(atob(e)))},ue=function(e){return ae.test(e)?e.slice(0,e.search("://")):"unsupported"},de={text2json:{vmess:function(e){var t=JSON.parse(ie(e.replace("vmess://","")));return{type:ue(e),json:t,raw:e,id:N.a.generate()}},ss:function(e){var t=e.search("#"),a=decodeURIComponent(e.slice(t+1)),n=ie(e.slice(5,t)).split(/[@:]+/),r={id:n[0],aid:n[1],add:n[2],port:n[3],ps:a};return{type:ue(e),json:r,raw:e,id:N.a.generate()}},trojan:function(e){var t=e.search("#"),a=decodeURIComponent(e.slice(t+1)),n=e.slice(9,t-6).split(/[@:]+/),r={aid:n[0],add:n[1],port:n[2],ps:a};return{type:ue(e),json:r,raw:e,id:N.a.generate()}},unsupported:function(e){return{type:ue(e),json:{},raw:e,id:N.a.generate()}},isText:function(e){return e.split(/[,;\n]+/).every((function(e){return ae.test(e)}))}},json2text:{vmess:function(e){return"vmess://"+le(JSON.stringify(e))},ss:function(e){var t=e.id+":"+e.aid+"@"+e.add+":"+e.port;return"ss://"+le(t)+"#"+encodeURIComponent(e.ps)},trojan:function(e){return"trojan://"+e.aid+"@"+e.add+":"+e.port+"?peer=#"+encodeURIComponent(e.ps)},unsupported:function(e){return e.raw}},text2qrcode:function(e){return r.a.createElement(M.a,{size:"96",value:e})}},me=function(e){if(e.length&&ne.test(e)){var t=ie(e).split(/[,;\n]+/).map((function(e){return de.text2json[ue(e)](e)}));return console.log("urlArray.b64ToArr",t),t}return e},pe=function(e){return le(e.map((function(e){return de.json2text[e.type](e.json)})).join("\n"))},he=function(){var e=Object(m.a)(d.a.mark((function e(t,a,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H()({method:"post",baseURL:X,url:"/check","Content-Type":"application/json",data:{user:t,pwd:F.a.createHash("sha256").update(a).digest("base64")}}).then((function(e){return e.data}));case 3:if(!(r=e.sent).length){e.next=8;break}return e.abrupt("return",H()({method:"put",baseURL:X,url:r[0]._id,data:{encrypted:n}}));case 8:return e.abrupt("return",H()({method:"post",baseURL:X,"Content-Type":"application/json",data:{user:t,pwd:F.a.createHash("sha256").update(a).digest("base64"),encrypted:n}}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a,n){return e.apply(this,arguments)}}();var fe=function(){var e=Object(n.useState)("API"),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("fastEdit"),u=Object(i.a)(c,2),_=u[0],z=u[1],G=Object(n.useState)(""),J=Object(i.a)(G,2),F=J[0],K=J[1],M=Object(n.useState)(""),W=Object(i.a)(M,2),ae=W[0],ue=W[1],fe=Object(n.useState)(""),be=Object(i.a)(fe,2),je=be[0],ye=be[1],ge=Object(n.useState)([]),we=Object(i.a)(ge,2),Ee=we[0],ve=we[1],Oe=Object(n.useState)(0),ke=Object(i.a)(Oe,2),xe=ke[0],Ce=ke[1],Se=q()(),Pe=Object(i.a)(Se,2),Te=Pe[0],Ae=(Pe[1],Object(n.useState)(!0)),Le=Object(i.a)(Ae,2),Re=Le[0],Ie=Le[1],Ue=Object(n.useState)(0),Be=Object(i.a)(Ue,2),_e=Be[0],Ne=Be[1],ze=Object(n.useState)({ss:0,vmess:0,trojan:0}),qe=Object(i.a)(ze,2),Ge=qe[0],He=qe[1],Je=Object(n.useState)(!1),Fe=Object(i.a)(Je,2),Ke=Fe[0],Me=Fe[1],We=Object(n.useState)(!1),De=Object(i.a)(We,2),Xe=De[0],Ze=De[1],$e=Object(n.useState)(""),Qe=Object(i.a)($e,2),Ye=Qe[0],Ve=Qe[1],et=Object(n.useState)(!1),tt=Object(i.a)(et,2),at=tt[0],nt=tt[1],rt=Object(n.useState)(!1),ot=Object(i.a)(rt,2),ct=ot[0],st=ot[1],lt=Object(n.useState)(""),it=Object(i.a)(lt,2),ut=it[0],dt=it[1],mt=Object(n.useState)(""),pt=Object(i.a)(mt,2),ht=pt[0],ft=pt[1];Object(n.useEffect)((function(){if(window.location.search){var e=new URLSearchParams(window.location.search);null!==e.get("sub")&&jt.subscribe({target:{value:e.get("sub")}}).then((function(t){t&&"yes"===e.get("qrcode")&&Me(!0)})).catch((function(e){return console.error(e)}))}}),[]);var bt=function(e){try{if(ne.test(e)){var t=me(e).filter((function(e){return""!==e.raw}));return t.length<me(e).length&&(K(pe(t)),ue(ie(pe(t)))),t.filter((function(e){return te.includes(e.type)})).length>0?(ve(t),Ie(!1),t):e}}catch(a){console.log(a)}},jt={base64:function(e){if(K(e.target.value),ne.test(e.target.value))try{ue(ie(e.target.value)),bt(e.target.value)}catch(t){console.error(t)}},text:function(e){if(ue(e.target.value),""!==e.target.value){var t=le(e.target.value);if(K(t),ne.test(t))try{bt(t);var a=new URLSearchParams(window.location.search);a.set("sub",ie(t)),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(a))}catch(n){console.error(n)}}},subscribe:function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(a=t.target.value)){e.next=3;break}return e.abrupt("return");case 3:if((n=new URLSearchParams(window.location.search)).set("sub",a),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(n)),ye(a),!de.text2json.isText(a)){e.next=17;break}if(ue(a),""!==t.target.value){e.next=11;break}return e.abrupt("return");case 11:if(r=le(a),K(r),ne.test(r))try{ue(ie(r)),bt(r),o("TEXT")}catch(s){console.error(s)}console.log(r),e.next=23;break;case 17:if(!/^(http|https).*/.test(a)){e.next=23;break}return c="fetching",x.a.loading({content:"\u5c0e\u5165\u8a02\u95b1\u93c8\u63a5\u4e2d",key:c}),e.next=22,H.a.get(a).then((function(e){return e.data})).then((function(e){return K(e),ie(e)})).then((function(e){return ue(e),le(e)})).then((function(e){return bt(e)})).then((function(e){return x.a.success({content:"\u5c0e\u5165 "+e.length+"\u500b\u7bc0\u9ede \u6210\u529f",key:c,duration:2}),e.length})).catch((function(e){console.error(e),x.a.warning({content:"\u5c0e\u5165\u5931\u6557",key:c,duration:2})}));case 22:return e.abrupt("return",e.sent);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},yt={base64:function(){return jt.base64({target:{value:Te}})},text:function(){return jt.text({target:{value:Te}})},subscribe:function(){return jt.subscribe({target:{value:Te}})}},gt={item:function(e){Ce(Ee.findIndex((function(t){return t.id===e[1]})))}},wt={userOnChange:function(e){return dt(e.target.value.trim())},pwdOnChange:function(e){return ft(e.target.value)},submit:function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=new URLSearchParams(window.location.search),st(!0),he(ut,ht,F).then((function(e){return e.data._id})).then((function(e){return X+"/"+e})).then((function(e){Ve(e),t.set("sub",e),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(t))})).then((function(){x.a.success("\u8a02\u95b1\u93c8\u63a5\u5df1\u751f\u6210"),st(!1),Ze(!0),nt(!1)})).catch((function(e){console.error(e),st(!1)}))}catch(a){console.error(a),st(!1),x.a.error("Internal Error")}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Et=function(){V({title:"\u78ba\u5b9a\u751f\u6210\u8a02\u95b1\u93c8\u7d50\uff1f",icon:r.a.createElement(I.a,null),content:"This operation will use an API provided by the author, and your data will be confidential. Your links will not be sent by API before confirming . If you have security concern please make your own decision before clicking OK.",onOk:function(){nt(!0)},onCancel:function(){}})},vt={btnOnClick:function(){_e?V({title:"\u6709\u672a\u4fdd\u5b58\u7684\u4fee\u6539",icon:r.a.createElement(P.a,null),content:"\u6309\u4fdd\u5b58\u751f\u6210\u8a02\u95b1\u93c8\u63a5",okText:"\u4fdd\u5b58",cancelText:"\u53d6\u6d88",okType:"danger",onOk:function(){K(pe(Ee)),ue(Ee.map((function(e){return de.json2text[e.type](e.json)})).join("\n")),Ne(0),Et()},onCancel:function(){}}):Et()}},Ot={btnOnClick:function(){var e=new URLSearchParams(window.location.search);_e?V({title:"\u6709\u672a\u4fdd\u5b58\u7684\u4fee\u6539",icon:r.a.createElement(P.a,null),content:"\u6309\u4fdd\u5b58\u751f\u6210\u4e8c\u7dad\u78bc",okText:"\u4fdd\u5b58",cancelText:"\u53d6\u6d88",okType:"danger",onOk:function(){K(pe(Ee)),ue(Ee.map((function(e){return de.json2text[e.type](e.json)})).join("\n")),x.a.success("\u4e8c\u7dad\u78bc\u5df1\u751f\u6210"),Ne(0),Me(!0),e.set("qrcode","yes"),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(e))},onCancel:function(){Me(!1),e.delete("qrcode"),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(e))}}):(Me(!0),e.set("qrcode","yes"),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(e)))},close:function(){Me(!1);var e=new URLSearchParams(window.location.search);e.delete("qrcode"),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(e))}},kt=function(e){var t=0;Ee.filter((function(t){return t.id!==e.id})).length&&(t=(xe+1)%Ee.length),Ce(t);try{var a=pe(Ee.filter((function(t){return t.id!==e.id}))),n=me(a);K(a),ue(ie(a)),ve(n),x.a.success("\u522a\u9664 "+e.json.ps+" \u6210\u529f")}catch(r){console.error(r)}},xt=function(e){var t={vmess:r.a.createElement("img",{src:D.v2ray,alt:"v2Ray",className:"logo-wrap"}),trojan:r.a.createElement("img",{src:D.trojan,alt:"trojan-gfw",className:"logo-wrap"}),ss:r.a.createElement("img",{src:D.ss,alt:"Shadowsocks",className:"logo-wrap"})};return t.hasOwnProperty(e)?t[e]:r.a.createElement(B.a,null)},Ct={ps:function(e){var t=Ee[xe].id;ve(Ee.map((function(a){return a.id===t?Object(l.a)({},a,{json:Object(l.a)({},a.json,{ps:e.target.value})}):a}))),Ne(1)},net:function(e){var t=e.target.value;if(Ee[xe].json){var a=Ee[xe].id;"kcp"!==t?(ve(Ee.map((function(e){return e.id===a?Object(l.a)({},e,{json:Object(l.a)({},e.json,{net:t,type:"none"})}):e}))),Ne(1)):"ws"!==t?(ve(Ee.map((function(e){return e.id===a?Object(l.a)({},e,{json:Object(l.a)({},e.json,{net:t,host:"",path:""})}):e}))),Ne(1)):(ve(Ee.map((function(e){return e.id===a?Object(l.a)({},e,{json:Object(l.a)({},e.json,{net:t})}):e}))),Ne(1))}},address:function(e){var t=Ee[xe].id;ve(Ee.map((function(a){return a.id===t?Object(l.a)({},a,{json:Object(l.a)({},a.json,{add:e.target.value})}):a}))),Ne(1)},port:function(e){var t=Ee[xe].id;ve(Ee.map((function(a){return a.id===t?Object(l.a)({},a,{json:Object(l.a)({},a.json,{port:e.target.value})}):a}))),Ne(1)},uuid:function(e){var t=Ee[xe].id;ve(Ee.map((function(a){return a.id===t?Object(l.a)({},a,{json:Object(l.a)({},a.json,{id:e.target.value})}):a}))),Ne(1)},aid:function(e){var t=Ee[xe].id;ve(Ee.map((function(a){return a.id===t?Object(l.a)({},a,{json:Object(l.a)({},a.json,{aid:e.target.value})}):a}))),Ne(1)},tls:function(e,t){var a=Ee[xe].id;ve(Ee.map((function(t){return t.id===a?Object(l.a)({},t,{json:Object(l.a)({},t.json,{tls:e?"tls":"none"})}):t}))),Ne(1)},ws:{host:function(e){var t=Ee[xe].id;"ws"===Ee[xe].json.net&&(ve(Ee.map((function(a){return a.id===t?Object(l.a)({},a,{json:Object(l.a)({},a.json,{host:e.target.value})}):a}))),Ne(1))},path:function(e){var t=Ee[xe].id;"ws"===Ee[xe].json.net&&(ve(Ee.map((function(a){return a.id===t?Object(l.a)({},a,{json:Object(l.a)({},a.json,{path:e.target.value})}):a}))),Ne(1))}},type:function(e){var t=Ee[xe].id;"kcp"===Ee[xe].json.net&&(ve(Ee.map((function(a){return a.id===t?Object(l.a)({},a,{json:Object(l.a)({},a.json,{type:e})}):a}))),Ne(1))},ssMethod:function(e){var t=Ee[xe].id;"ss"===Ee[xe].type&&(ve(Ee.map((function(a){return a.id===t?Object(l.a)({},a,{json:Object(l.a)({},a.json,{id:e})}):a}))),Ne(1))},create:function(e){var t=e.key,a=Ge[t]+1,n=JSON.parse(JSON.stringify(Ge));n[t]=a,He(n);var r=se[t](a),o=de.json2text[t](r),c={type:t,json:r,raw:o,id:N.a.generate()};ve([].concat(Object(s.a)(Ee),[c])),Ce(Ee.length?Ee.length:0),Ie(!1);var l=(ae.length?ae+";":"")+o;jt.base64({target:{value:le(l)}}),z("detailedEdit"),Ne(1)}},St={API:r.a.createElement(E.a,{gutter:[0,16],style:{marginBottom:-20}},r.a.createElement(v.a,{span:24},r.a.createElement(Z,{rows:4,autosize:!1,placeholder:"\u8f38\u5165\u8a02\u95b1\u7db2\u5740\u6216\u670d\u52d9\u5668\u93c8\u63a5",onChange:jt.subscribe,value:je})),r.a.createElement(v.a,{span:24},r.a.createElement(f.a,{type:"primary",block:!0,onClick:yt.subscribe},"\u5f9e\u526a\u8cbc\u7248\u5c0e\u5165"))),TEXT:r.a.createElement(E.a,{gutter:[0,16],style:{marginBottom:-20}},r.a.createElement(v.a,{span:24},r.a.createElement(Z,{rows:4,autosize:!1,onChange:jt.text,value:ae})),r.a.createElement(v.a,{span:24},r.a.createElement(f.a,{type:"primary",block:!0,onClick:yt.text},"\u5f9e\u526a\u8cbc\u7248\u5c0e\u5165"))),BASE64:r.a.createElement(E.a,{gutter:[0,16],style:{marginBottom:-20}},r.a.createElement(v.a,{span:24},r.a.createElement(Z,{rows:4,autosize:!1,onChange:jt.base64,value:F})),r.a.createElement(v.a,{span:24},r.a.createElement(f.a,{type:"primary",block:!0,onClick:yt.base64},"\u5f9e\u526a\u8cbc\u7248\u5c0e\u5165"))),_buttons:r.a.createElement(C.a,{count:_e,offset:[-3,0],dot:!0},r.a.createElement(f.a,{type:"primary",disabled:!Ee.length||!F.length,onClick:vt.btnOnClick},"\u8a02\u95b1\u93c8\u63a5"))},Pt={select:r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(h.a,{showSearch:!0,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?[Ee[xe].json.ps,Ee[xe].id]:"",disabled:Re||!F.length,style:{width:"76%"},onChange:gt.item,filterOption:function(e,t){return t.children[2].toLowerCase().indexOf(e.toLowerCase())>=0}},Ee.filter((function(e){return te.includes(e.type)})).map((function(e){return r.a.createElement($,{key:e.id,value:[e.json.ps,e.id]},xt(e.type)," ",e.json.ps)}))),r.a.createElement(b.a,{overlay:r.a.createElement(j.a,{onClick:Ct.create},te.map((function(e){return r.a.createElement(j.a.Item,{key:e},xt(e),"\xa0\xa0",e.toUpperCase())})))},r.a.createElement(f.a,{type:"primary",icon:r.a.createElement(T.a,null)})),r.a.createElement(f.a,{type:"primary",disabled:Re||!F.length,icon:r.a.createElement(A.a,null),onClick:function(){V({title:"\u78ba\u5b9a\u8981\u522a\u9664"+Ee[xe].json.ps+"?",icon:r.a.createElement(U.a,null),content:"\u9019\u9805\u64cd\u4f5c\u7121\u6cd5\u5fa9\u539f",okText:"\u78ba\u5b9a",cancelText:"\u53d6\u6d88",okType:"danger",onOk:function(){kt(Ee[xe])},onCancel:function(){console.log(Ee)}})},danger:!0})),remark:r.a.createElement(p.a,{placeholder:"\u7bc0\u9ede\u540d\u7a31 (Remark)",addonAfter:Ee[xe]&&Ee[xe].hasOwnProperty("type")?xt(Ee[xe].type):r.a.createElement(B.a,null),value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.ps:"",disabled:Re||!F.length,onChange:Ct.ps,onPressEnter:Ct.ps}),serverAddress:r.a.createElement(ee,{compact:!0},r.a.createElement(p.a,{style:{width:"75%",textAlign:"left"},disabled:Re||!F.length,placeholder:"\u670d\u52d9\u5668\u5730\u5740 (Address)",onChange:Ct.address,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.add:""}),r.a.createElement(p.a,{style:{width:"25%"},disabled:Re||!F.length,placeholder:"port",onChange:Ct.port,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.port:""})),skeleton:r.a.createElement(E.a,{type:"flex",style:{marginBottom:-12}},r.a.createElement(S.a,null))},Tt={vmess:r.a.createElement(E.a,{gutter:[16,24],type:"flex",style:{marginBottom:-18}},r.a.createElement(v.a,{xs:24,sm:12,md:12}," ",Pt.select," "),r.a.createElement(v.a,{xs:24,sm:12,md:12}," ",Pt.remark," "),r.a.createElement(v.a,{xs:24,sm:24,md:12}," ",Pt.serverAddress," "),r.a.createElement(v.a,{xs:24,sm:24,md:12},r.a.createElement(ee,{compact:!0},r.a.createElement(p.a,{style:{width:"75%",textAlign:"left"},placeholder:"UUID",onChange:Ct.uuid,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.id:""}),r.a.createElement(p.a,{style:{width:"25%"},placeholder:"AID",onChange:Ct.aid,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.aid:""}))),r.a.createElement(v.a,{xs:24,sm:24,md:12},r.a.createElement(y.a.Group,{style:{marginLeft:-24},onChange:Ct.net,disabled:Re||!F.length,value:Ee[xe]&&Ee[xe].json?Ee[xe].json.net:""},r.a.createElement(y.a,{key:"tcp",value:"tcp"},"TCP"),r.a.createElement(y.a,{key:"ws",value:"ws"},"WS"),r.a.createElement(y.a,{key:"kcp",value:"kcp"},"KCP")),r.a.createElement(g.a,{checkedChildren:"TLS",unCheckedChildren:"TLS",disabled:Re||!F.length,onChange:Ct.tls,checked:!(!Ee[xe]||!Ee[xe].hasOwnProperty("json"))&&"tls"===Ee[xe].json.tls})),r.a.createElement(v.a,{xs:Ee[xe]&&Ee[xe].hasOwnProperty("json")&&"ws"===Ee[xe].json.net?24:0,sm:Ee[xe]&&Ee[xe].hasOwnProperty("json")&&"ws"===Ee[xe].json.net?24:0,md:Ee[xe]&&Ee[xe].hasOwnProperty("json")&&"ws"===Ee[xe].json.net?12:0},r.a.createElement(ee,{compact:!0},r.a.createElement(p.a,{style:{width:"75%",textAlign:"left"},placeholder:"\u57df\u540d (Host)",onChange:Ct.ws.host,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.host:""}),r.a.createElement(p.a,{style:{width:"25%",textAlign:"left"},placeholder:"path",onChange:Ct.ws.path,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.path:""}))),r.a.createElement(v.a,{xs:Ee[xe]&&Ee[xe].hasOwnProperty("json")&&"kcp"===Ee[xe].json.net?24:0,sm:Ee[xe]&&Ee[xe].hasOwnProperty("json")&&"kcp"===Ee[xe].json.net?24:0,md:Ee[xe]&&Ee[xe].hasOwnProperty("json")&&"kcp"===Ee[xe].json.net?12:0},r.a.createElement(h.a,{style:{width:"100%"},onChange:Ct.type,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.type:""},r.a.createElement($,{key:"none",value:"none"},"none (\u4e0d\u507d\u88dd)"),r.a.createElement($,{key:"wechat-video",value:"wechat-video"}," \b\bwechat-video (\u507d\u88dd\u5fae\u4fe1\u8996\u983b) "),r.a.createElement($,{key:"srtp",value:"srtp"},"srtp (\u507d\u88dd\u8996\u983b\u901a\u8a71)"),r.a.createElement($,{key:"utp",value:"utp"},"utp (\u507d\u88ddBitTorrent\u4e0b\u8f09) "),r.a.createElement($,{key:"dtls",value:"dtls"},"dlts (\u507d\u88ddDLTS 1.2\u5c01\u5305)"),r.a.createElement($,{key:"wireguard",value:"wireguard"},"wireguard (\u507d\u88ddWireguard\u5c01\u5305)")))),ss:r.a.createElement(E.a,{gutter:[16,24],type:"flex",style:{marginBottom:-18}},r.a.createElement(v.a,{xs:24,sm:12,md:12}," ",Pt.select," "),r.a.createElement(v.a,{xs:24,sm:12,md:12}," ",Pt.remark," "),r.a.createElement(v.a,{xs:24,sm:24,md:12}," ",Pt.serverAddress," "),r.a.createElement(v.a,{xs:24,sm:24,md:12}),r.a.createElement(v.a,{xs:24,sm:24,md:12},r.a.createElement(h.a,{showSearch:!0,style:{width:"100%"},placeholder:"\u52a0\u5bc6\u65b9\u5f0f (Method)",onChange:Ct.ssMethod,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.id:"",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},ce.map((function(e){return r.a.createElement($,{key:e},e)})))),r.a.createElement(v.a,{xs:24,sm:24,md:12},r.a.createElement(p.a.Password,{placeholder:"\u5bc6\u78bc (Password)",onChange:Ct.aid,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.aid:""}))),trojan:r.a.createElement(E.a,{gutter:[16,24],type:"flex",style:{marginBottom:-18}},r.a.createElement(v.a,{xs:24,sm:12,md:12}," ",Pt.select," "),r.a.createElement(v.a,{xs:24,sm:12,md:12}," ",Pt.remark," "),r.a.createElement(v.a,{xs:24,sm:24,md:12}," ",Pt.serverAddress," "),r.a.createElement(v.a,{xs:24,sm:24,md:12},r.a.createElement(p.a.Password,{placeholder:"\u5bc6\u78bc (Password)",onChange:Ct.aid,value:Ee[xe]&&Ee[xe].hasOwnProperty("json")?Ee[xe].json.aid:""})))},At={fastEdit:r.a.createElement(E.a,{gutter:[16,24],justify:"space-around",type:"flex",style:{marginBottom:-18}},r.a.createElement(v.a,{xs:24,sm:12,md:16}," ",Pt.select," "),r.a.createElement(v.a,{xs:24,sm:12,md:16}," ",Pt.remark," "),r.a.createElement(v.a,{xs:24,sm:24,md:16}," ",Pt.serverAddress," ")),detailedEdit:Ee[xe]&&te.includes(Ee[xe].type)?Tt[Ee[xe].type]:Pt.skeleton,_buttons:r.a.createElement("span",null,r.a.createElement(C.a,{count:_e,offset:[-7,0],dot:!0},r.a.createElement(f.a,{style:{marginRight:8},type:"primary",icon:r.a.createElement(L.a,null),disabled:Re||!F.length,onClick:Ot.btnOnClick})),r.a.createElement(C.a,{count:_e,offset:[-3,0],dot:!0},r.a.createElement(f.a,{type:"primary",icon:r.a.createElement(R.a,null),disabled:Re||!F.length,onClick:function(){var e=pe(Ee),t=Ee.map((function(e){return de.json2text[e.type](e.json)})).join("\n");K(e),ue(t),Ne(0)}},"\u4fdd\u5b58")))};return r.a.createElement("div",{className:"App"},r.a.createElement(w.a,null,r.a.createElement(E.a,{justify:"start",align:"middle",style:{textAlign:"left"}},r.a.createElement("h2",null,"Shawdowrockets \u8a02\u95b1\u93c8\u63a5\u7de8\u8f2f\u5668"),r.a.createElement(v.a,{xs:0,sm:0,md:8,style:{marginLeft:8}},r.a.createElement("h3",null,"\u652f\u6301 ",te.map((function(e,t){return t<te.length-1?e+", ":e}))," \u93c8\u63a5\u7de8\u8f2f"))),r.a.createElement(Q,null,r.a.createElement(E.a,{gutter:[16,16],justify:"space-between",type:"flex"},r.a.createElement(v.a,{xs:24,sm:24,md:12},r.a.createElement(O.a,{className:"card",tabList:oe,tabBarExtraContent:At._buttons,activeTabKey:_,onTabChange:function(e){return z(e)}},At[_])),r.a.createElement(v.a,{xs:24,sm:24,md:12},r.a.createElement(O.a,{className:"card",tabList:re,tabBarExtraContent:St._buttons,activeTabKey:a,onTabChange:function(e){return o(e)}},St[a])))),r.a.createElement(k.a,{title:"\u751f\u6210\u4e8c\u7dad\u78bc (Generate QRCode)",visible:Ke,onOk:Ot.close,onCancel:Ot.close},r.a.createElement(E.a,{justify:"center"},de.text2qrcode(ae))),r.a.createElement(k.a,{title:"\u8a02\u95b1\u93c8\u63a5 (Generate Subscription link)",visible:Xe,onOk:function(){return Ze(!1)},onCancel:function(){return Ze(!1)}},r.a.createElement(E.a,{gutter:[16,16],justify:"center"},r.a.createElement(v.a,{span:20},r.a.createElement(p.a,{value:Ye}))),r.a.createElement(E.a,{justify:"center"},de.text2qrcode(Ye))),r.a.createElement(k.a,{title:"\u8acb\u8f38\u5165\u8cc7\u6599 (\u7528\u65bc\u66f4\u65b0\u8a02\u95b1\u93c8\u63a5)",visible:at,onOk:wt.submit,onCancel:function(){return nt(!1)},confirmLoading:ct},r.a.createElement(E.a,{gutter:[16,16],justify:"center"},r.a.createElement(v.a,{xs:20,sm:20,md:12},r.a.createElement(p.a,{placeholder:"\u4f7f\u7528\u8005\u540d\u7a31 (\u552f\u4e00\u8b58\u5225\u7b26)",value:ut,onChange:wt.userOnChange})),r.a.createElement(v.a,{xs:20,sm:20,md:12},r.a.createElement(p.a.Password,{placeholder:"\u5bc6\u78bc (Password)",value:ht,onChange:wt.pwdOnChange})))),r.a.createElement(Y,null,r.a.createElement(E.a,{justify:"center"},r.a.createElement(v.a,{span:24},"Created by ",r.a.createElement("a",{href:"https://www.phlinhng.com"},"phlinhng"),". All rights reserved."),r.a.createElement(v.a,{xs:0,sm:0,md:Ke||Xe||at?0:24},r.a.createElement("a",{className:"github-fork-ribbon right-bottom fixed",href:"https://github.com/phlinhng/b64-url-editor","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"},"Fork me on GitHub"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[222,1,2]]]);
//# sourceMappingURL=main.9729f4e8.chunk.js.map