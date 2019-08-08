(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1510:function(t,e,n){"use strict";var l=n(432);n.n(l).a},1511:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".universal_pay img{display:block;max-width:100%;margin:0 auto}.universal_pay .nya-input{margin-bottom:.9375rem}",""])},1584:function(t,e,n){"use strict";n.r(e);var l=n(431).a,r=(n(1510),n(2)),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"universal_pay"},[n("nya-container",{attrs:{title:"收款码合并"}},[n("nya-input",{staticClass:"upfile",attrs:{type:"file",name:"qrcode",accept:"image/*",label:"请上传QQ收款码",placeholder:"点击这里上传文件",fullwidth:""},on:{change:function(e){return t.readerQrcode("qq",e)}},model:{value:t.qqFile,callback:function(e){t.qqFile=e},expression:"qqFile"}}),t._v(" "),n("nya-input",{staticClass:"upfile",attrs:{type:"file",name:"qrcode",accept:"image/*",label:"请上传微信收款码",placeholder:"点击这里上传文件",fullwidth:""},on:{change:function(e){return t.readerQrcode("weixin",e)}},model:{value:t.weixinFile,callback:function(e){t.weixinFile=e},expression:"weixinFile"}}),t._v(" "),n("nya-input",{staticClass:"upfile",attrs:{type:"file",name:"qrcode",accept:"image/*",label:"请上传支付宝收款码",placeholder:"点击这里上传文件",fullwidth:""},on:{change:function(e){return t.readerQrcode("alipay",e)}},model:{value:t.alipayFile,callback:function(e){t.alipayFile=e},expression:"alipayFile"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.synthetic}},[t._v("\n            "+t._s(t.requestIn?"合成中":"开始合成")+"\n        ")])],1),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.short_url,expression:"short_url"}],attrs:{title:"合并成功"}},[n("img",{staticClass:"qrcode",attrs:{src:t.qrcodeUrl,alt:"QRCode"}}),t._v("\n        收款地址："),n("a",{attrs:{href:t.short_url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.short_url)+"\n        ")])]),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[n("b",[t._v("全部过程均在本地进行，不会在云端存储您的任何信息")])]),t._v(" "),n("li",[t._v("如果生成时间过长或生成失败，请使用其他浏览器，推荐使用 Chrome")]),t._v(" "),n("li",[t._v("请保存您的收款地址，可自行去转换为短链接")]),t._v(" "),n("li",[t._v("请使用新版 QQ/微信/支付宝 生成的收款码")])])])],1)},[],!1,null,null,null);e.default=component.exports},417:function(t,e,n){"use strict";n(18);var l=n(545),r=n.n(l);e.a=function(t){return new Promise(function(e,n){var image=new Image;image.onload=function(){var canvas=document.createElement("canvas"),t=canvas.getContext("2d");canvas.width=image.width,canvas.height=image.height,t.drawImage(image,0,0);try{var l=t.getImageData(0,0,image.width,image.height),o=r()(l.data,l.width,l.height);e(o)}catch(t){n(t)}},image.src=t})}},431:function(t,e,n){"use strict";(function(t){n(86),n(87),n(18);var l=n(417),r=n(109),o=n.n(r);e.a={name:"UniversalPay",head:function(){return this.$store.state.currentTool.head},data:function(){return{requestIn:!1,qqFile:"",weixinFile:"",alipayFile:"",data:{qq:{},weixin:"",alipay:""},url:"",short_url:"",qrcodeUrl:""}},methods:{synthetic:function(){var e=this;this.data.qq&&this.data.weixin&&this.data.alipay?(this.requestIn=!0,this.short_url="",this.qrcodeUrl="",this.url="".concat("https://miku.tools","/o/universal_pay_view?data=").concat(t.from(JSON.stringify(this.data)).toString("base64")),this.$axios.post("/short_link",{url:this.url,api:2}).then(function(t){e.requestIn=!1;var n=t.data.data,l=o.a.imageSync(n,{type:"png",size:10});e.short_url=n,e.qrcodeUrl="data:image/png;base64,"+l.toString("base64")}).catch(function(t){e.requestIn=!1,e.$modal.show("dialog",{title:"获取失败",text:"ERROR: ".concat(t)});var n=e.url,l=o.a.imageSync(n,{type:"png",size:5});e.short_url=n,e.qrcodeUrl="data:image/png;base64,"+l.toString("base64")})):this.$modal.show("dialog",{title:"合成失败",text:"ERROR: 请选择收款码"})},readerQrcode:function(t,e){var n=this,r=e.target.files;if(!r.length)return!1;var o=URL.createObjectURL(r[0]);Object(l.a)(o).then(function(e){var l=e.data;"qq"===t?(n.data.qq={},/qianbao/.test(l)?n.data.qq=l:(n.$modal.show("dialog",{title:"识别失败",text:"ERROR: 可能不是一个QQ收款码"}),n.qqFile="")):"weixin"===t?(n.data.weixin="",/wxp|tenpay/.test(l)?n.data.weixin=l:(n.$modal.show("dialog",{title:"识别失败",text:"ERROR: 可能不是一个微信收款码"}),n.weixinFile="")):"alipay"===t&&(n.data.alipay="",/alipay|ALIPAY/.test(l)?n.data.alipay=l:(n.$modal.show("dialog",{title:"识别失败",text:"ERROR: 可能不是一个支付宝收款码"}),n.alipayFile=""))}).catch(function(){n.$modal.show("dialog",{title:"识别失败",text:"ERROR: 可能不是一个二维码，或由于二维码内容过于复杂"})})}}}}).call(this,n(9).Buffer)},432:function(t,e,n){var content=n(1511);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("577d872d",content,!0,{sourceMap:!1})}}]);