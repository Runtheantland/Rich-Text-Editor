//公共头部
;(function(){
	if(document.body.id=="nohead")return
	var oHead=document.createElement("div");
		oHead.innerHTML='<header class="top-wrap"><nav><a href="http://www.loveqiao.com/">首页</a><a href="http://www.loveqiao.com/dom/tool/json/">JSON</a><a href="http://www.loveqiao.com/dom/tool/keycode.html">获取键盘码</a><a href="http://www.loveqiao.com/dom/tool/cubic-bezier.html">三次贝塞尔曲线</a><a href="http://www.loveqiao.com/dom/tool/colortool/">CSS3渐变生成</a><a href="http://www.loveqiao.com/dom/tool/base64/">base64转换</a><a href="http://www.loveqiao.com/dom/tool/animatecss/">css3动画库</a><a href="http://www.loveqiao.com/dom/tool/min-device-pixel-ratio.html">设备像素密度测试</a></nav></header><header class="head"><h1>'+document.title+'</h1></header>';
	var child=document.getElementsByTagName('div')[0]
	document.body.insertBefore(oHead,child);
	document.title+=' | 前端老徐';
})();

//公共底部
;(function(){
var para=document.createElement("footer");
para.id='footer';
para.className='footer';
var element=document.body;
element.appendChild(para);
document.getElementById('footer').innerHTML='<p class="link"><a href="http://www.loveqiao.com" onClick="_hmt.push([\'_trackEvent\',\'脚注-返回首页\',\'click\'])">返回首页</a><a href="http://www.loveqiao.com/dom/oldpage/" target="_blank" onClick="_hmt.push([\'_trackEvent\',\'脚注-旧版首页\',\'click\'])">旧版首页</a><a href="http://www.loveqiao.com/about-2" target="_blank" onClick="_hmt.push([\'_trackEvent\',\'脚注-关于我\',\'click\'])">关于我</a></p><p>Copyright © 2013-2015 前端老徐 All rights reserved. </p><p><a href="http://www.miitbeian.gov.cn/" target="_blank">京ICP备15016412号</a></p><iframe style="vertical-align:middle;" width="117" height="24" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0" scrolling="no" border="0" src="http://widget.weibo.com/relationship/followbutton.php?language=zh_cn&width=136&height=24&uid=1929444627&style=2&btn=red&dpc=1"></iframe>';
})();

//统计代码
var _hmt = _hmt || [];
_hmt.push(['_setAccount', '211666eaf11ad7ba95c488afa692266a']);
(function() {
  var hm = document.createElement("script");
  hm.src = "js/hm.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

// 分享代码
window._bd_share_config={
	"common":{
		"bdSnsKey":{},
		"bdText":document.title+"@前端老徐",
		"bdDesc":"一个前端工作者的学习笔记",
		"bdMini":"1",
		"bdMiniList":["qzone","tsina","tqq","renren","weixin","sqq"],
		//"bdPic":"http://www.loveqiao.cn/images/qrcode.png?v1",
		"bdStyle":"0",
		"bdSize":"16"
	},
	"slide":{"type":"slide","bdImg":"1","bdPos":"right","bdTop":"250"},
};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
