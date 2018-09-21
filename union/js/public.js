var header = '<div class="head">' +
    '<div class="operation"><a href="javascript:;"><img src="../images/public/menu.png"></a></div>' +
    '<div class="logo" v-cloak v-if="type==1"><img src="../images/public/logo.png"></div>' +
    '<p class="tit" v-cloak v-if="type!=1" v-text="value"></p>' +
    '</div>';
var head = Vue.component('my-head', {
    template: header,
    props: ['type', 'value'],
});

var footer = '<div class="foot">' +
    '<p>地址：中国·北京科技会展中心2号楼19层</p>' +
    '<p>© 2018 CEBVE</p>' +
    '<p><span>隐私与适用条款</span><span class="mar">版权所有</span><span>京ICP备15063355号</span></p>' +
    '</div>';
var foot = Vue.component('my-foot',{
	template:footer
});