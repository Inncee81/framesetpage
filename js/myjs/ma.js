window.behavior;
function getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
            return arr[1];
        }
    }
    return "";
}
(function() {
	var params = {};
	logs = "";
	click = false;
	var re = [];
	var _maq = _maq || [];
	var xdurl;
	//console.log(xdurl);
	if(document) {
		params.domain = document.domain || ''; //获取域名  
		if(params.referrer === "") {
			params.referrer = document.URL || '';
		}
		params.url = document.URL || ''; //当前Url地址  
		params.referrer = document.referrer || ''; //上一跳路径
		params.title = document.title || '';
	}
	//Window对象数据  
	if(window && window.screen) {
		params.sh = window.screen.height || 0; //获取显示屏信息  
		params.sw = window.screen.width || 0;
		params.cd = window.screen.colorDepth || 0;
	}
	//navigator对象数据  
	if(navigator) {
		params.lang = navigator.language || ''; //获取所用语言种类  
	}
	//解析_maq配置  
	if(_maq) {
		for(var i in _maq) { //获取埋点阶段，传递过来的用户行为  
			switch(_maq[i][0]) {
				case '_setAccount':
					params.account = _maq[i][1];
					break;
				default:
					break;
			}
		}
	}
	function getAllCookies() {
		var re = document.cookie;
		params.cookies = re;
	}
	getAllCookies();
	window.behavior = params;
	//获取点击页面中的位置,采集浏览器的点击位置的坐标点
	params.srnData = "";
	params.clnData = "";
    var user_id = getCookie("jwt-token");
    params.account = user_id;
	var srnData = [];
	var clnData = [];
	function currentClick(ev) {
		console.log(ev)
		var oEvent = ev || event;
		var srnX = oEvent.screenX, //鼠标在显示屏幕上的x坐标。
			srnY = oEvent.screenY; //鼠标在显示屏幕上的y坐标。
		//IE浏览器兼容
		var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		var clnX = ev.pageX || ev.clientX + scrollX; //相对可视区位置clientX
		var clnY = ev.pageY || ev.clientY + scrollY; //相对可视区位置clientY
		var timestamp = (new Date()).valueOf();
		/*logs += '{' + '"sx":' + '"' + sx + '"' + ',"sy":' + '"' + sy + '"' + ',"time":' + '"' + timestamp + '"' + '}';*/
		var sArray = new Object();
		sArray.srnX = "" + srnX + "";
		sArray.srnY = "" + srnY + "";
		sArray.stime = "" + timestamp + "";
		srnData.push(sArray);
		var cArray = new Object();
		cArray.clnX = "" + clnX + "";
		cArray.clnY = "" + clnY + "";
		cArray.ctime = "" + timestamp + "";
		clnData.push(cArray);
		/*console.log(clnData);*/
		if(srnData.length >= 1000) {
			sData.splice(0, 1);
		}
		if(clnData.length >= 1000) {
			clnData.splice(0, 1);
		}
		params.srnData = srnData;
		params.clnData = clnData;
	}
})();
