webpackJsonp([15],{205:function(e,n,s){var a=s(1)(s(255),s(350),null,null,null);e.exports=a.exports},255:function(e,n,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var t=s(133),r=a(t),o=s(135),i=a(o),l=s(134),c=a(l);s(315),n.default={components:{Container:r.default,PageHeader:i.default,PageFooter:c.default},data:function(){return{visible:!0}},methods:{handleClick:function(e){console.log(e),alert("click this message!")}}}},301:function(e,n,s){n=e.exports=s(196)(!0),n.push([e.i,".message-page .za-panel-body{padding:15px}.message-page .za-message{margin-bottom:15px}.message-page .za-message:last-of-type{margin-bottom:0}","",{version:3,sources:["/Users/chrisHchen/git-project/zarm-vue/example/styles/pages/MessagePage.scss","/Users/chrisHchen/git-project/zarm-vue/example/styles/core/func.scss"],names:[],mappings:"AAEA,6BAEI,YCHe,CDIhB,AAHH,0BAMI,kBCPe,CDYhB,AAXH,uCASM,eAAgB,CACjB",file:"MessagePage.scss",sourcesContent:['@import "../core/func";\n\n.message-page {\n  .za-panel-body {\n    padding: r(15);\n  }\n\n  .za-message {\n    margin-bottom: r(15);\n\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},315:function(e,n,s){var a=s(301);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(197)("4c7ac14a",a,!0)},350:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("Container",{staticClass:"message-page"},[s("PageHeader",{attrs:{title:"消息 Message"}}),e._v(" "),s("main",[s("div",[s("za-panel",[s("za-panel-header",{attrs:{title:"基本"}}),e._v(" "),s("za-panel-body",[s("za-message",[e._v("primary")]),e._v(" "),s("za-message",{attrs:{theme:"info"}},[s("za-icon",{staticClass:"icon",attrs:{slot:"icon",type:"info-round"},slot:"icon"}),e._v(" "),s("span",[e._v("info")])],1),e._v(" "),s("za-message",{attrs:{theme:"success",icon:"right-round"}},[s("span",[e._v("success")])]),e._v(" "),s("za-message",{attrs:{theme:"warning"}},[s("za-icon",{staticClass:"icon",attrs:{slot:"icon",type:"info-round"},slot:"icon"}),e._v(" "),s("span",[e._v("warning")])],1),e._v(" "),s("za-message",{attrs:{theme:"error"}},[s("za-icon",{staticClass:"icon",attrs:{slot:"icon",type:"wrong-round"},slot:"icon"}),e._v(" "),s("span",[e._v("error")])],1)],1)],1),e._v(" "),s("za-panel",[s("za-panel-header",{attrs:{title:"可操作"}}),e._v(" "),s("za-panel-body",[s("za-message",{attrs:{theme:"warning",hasArrow:""},on:{click:e.handleClick}},[e._v("链接样式的")]),e._v(" "),s("za-message",{attrs:{theme:"error",closable:"",visible:e.visible},on:{"update:visible":function(n){e.visible=n}}},[e._v("链接样式的")])],1)],1)],1)]),e._v(" "),s("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=15.33961b113a4207e85deb.js.map