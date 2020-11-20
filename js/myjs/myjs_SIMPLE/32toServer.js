//var context = window.location.href.substr(window.location.href.indexOf("/", "http://aa".length) + 1) + "/"
window.cartaFingerprint={};
var __t0 = new Date().getTime();
var _report_start_time = new Date().getTime();
var query_end_toServer_time;
// to iOS data
var appidToIOS;
var uuidToIOS;
var clientAddressToIOS;
var fpJsonToIOS;


function guid_16digit() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}


function getRequestSign(appid, uuid, fpJson) {
	return CryptoJS.SHA1(uuid + fpJson + appid + '1234').toString();
}


// var Sender = function () {
function Sender() {
	// this.finalized = false;
	this.postData = {
		// fontlist: "No Flash",
		// fonts: "",
		// WebGL: false,
		// inc: "Undefined",
		// gpu: "Undefined",
		// hash: "Undefined",
		// timezone: "Undefined",
		// resolution: "Undefined",
		// plugins: "Undefined",
		// cookie: "Undefined",
		// localstorage: "Undefined",
		// manufacturer: "Undefined",
		// gpuImgs: {},
		// adBlock: "Undefined",
		// cpu_cores: "Undefined",
		// canvas_test: "Undefined",
		// audio: "Undefined",
		// langsDetected: [],
		// video: [],
		// collectionTime: []
	};
	this.urls = [];

	// this.sendData = function () {
	function sendData() {
		//			$('#status').html("Getting Fonts (This may take a long time)");
		var t0 = new Date().getTime();

		this.postData['fingerprint1'] = window.fingerprint1.js;

		var that = this;

		//获取浏览器地址,例如http://i.cnblogs.com/EditPosts.aspx?1234444444555555&192.168.1.166

		// var browserlocation = window.location.href;
		var browserlocation = window.name;
		
		//console.log("sendData------browserlocation", browserlocation);
		var qflag = browserlocation.indexOf("?");
		var andflag = browserlocation.indexOf("&");

		//uuid
		//this.postData['reportid']='576053c7e5294f8eb476e1aff0e212f0';
		this.postData['reportid'] = browserlocation.substring(qflag + 1, andflag);
		//console.log("this.postData['reportid']", this.postData['reportid'])
		//请求的ip地址
		//this.postData['clientip']='192.168.1.166';
		this.postData['clientip'] = browserlocation.substring(andflag + 1);
		if(browserlocation==""){
			that.postData['clientip'] =document.URL || '';
		}
		//console.log("this.postData['clientip']", this.postData['clientip']);
		/**
		 * this part is used for dected the real resolution
		 */
		// this.postData['resolution'] = getResolution();

		// update：2018年5月10日，从iframe文件加载到ajax上报请求开始时间
		query_end_toServer_time = new Date().getTime();
		// 时间上报：
		// console.log("************************query_end_toServer_time", query_end_toServer_time);
		// console.log("########################query_times_start_time", query_times_start_time);
		this.postData['loadingCollectTime'] = query_end_toServer_time - query_times_start_time;
		//console.log("loadingCollectTime", this.postData['loadingCollectTime']);

		//  2018年6月1日,地理位置获取HTML5 Geolocation API 用于获得用户的地理位置this.postData['geolocation'] = '';
		// var geoPosition = {};
		// this.postData['geolocation'] = geoPosition;
		// if (navigator.geolocation) {
		// 	//获取地理位置需要等比较长的一段时间
		// 	try {
		// 		navigator.geolocation.getCurrentPosition(showPosition, showError, {
		// 			// 指示浏览器获取高精度的位置，默认为false
		// 			enableHighAccuracy: true,
		// 			// 指定获取地理位置的超时时间，默认不限时，单位为毫秒
		// 			timeout: 1000,
		// 			// 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
		// 			maximumAge: 20
		// 		});
		// 	} catch (e) {}
		// } else {
		// 	this.postData['geolocation'] = "你的浏览器不支持地理定位";
		// 	console.log('你的浏览器不支持地理定位');
		// }
		// //获取地理位置成功

		// function showPosition(position) {
		// 	console.log(position);
		// 	geoPosition.accuracy = position.coords.accuracy; // 位置精度
		// 	geoPosition.latitude = position.coords.latitude; // 维度
		// 	geoPosition.longitude = position.coords.longitude; // 精度
		// 	geoPosition.altitude = position.coords.altitude; // 海拔
		// 	geoPosition.altitudeAccuracy = position.coords.altitudeAccuracy; // 海拔精度
		// 	that.postData["geolocation"] = geoPosition;
		// 	console.log("this.postData['geolocation']", geoPosition);

		// }
		// //获取地理位置失败

		// function showError(error) {
		// 	var errorMsg = '';
		// 	switch (error.code) {
		// 		case error.PERMISSION_DENIED:
		// 			errorMsg = "用户拒绝对获取地理位置的请求"
		// 			break;
		// 		case error.POSITION_UNAVAILABLE:
		// 			errorMsg = "位置信息是不可用的"
		// 			break;
		// 		case error.TIMEOUT:
		// 			errorMsg = "请求用户地理位置超时"
		// 			break;
		// 		case error.UNKNOWN_ERROR:
		// 			errorMsg = "未知错误"
		// 			break;
		// 	}
		// 	geoPosition.errorMsg = errorMsg;
		// 	that.postData["geolocation"] = geoPosition;
		// 	console.log("this.postData['geolocation']", geoPosition);
		// }


		var __fp2_t0 = new Date().getTime();
		new Fingerprint2().get(function (result, components) {
			//					console.log(result); //a hash, representing your device fingerprint
			//					console.log(components); // an array of FP components
			that.postData["fingerprint2"] = components

			//console.log('fingerprint2获取时间：' + (new Date().getTime() - __fp2_t0));

			startSend(that.postData);

		});

		function startSend(postData) {

			// var browserlocation = window.location.href;
			var browserlocation = window.name;
			console.log('browserlocation', browserlocation)

			var qflag = browserlocation.indexOf("?");
			var uuid = guid_16digit();
			var appid = '';
			var client_location = browserlocation;
			console.log(browserlocation);
			// xdid_sdk.js传递过来的地址格式为：http://xxx/iframe.html?uuid&browser_loc&appid
			var arr = browserlocation.substring(qflag + 1).split('&');
			console.log("arr-----------------------------------------", arr);
			if (arr.length > 1) {
				uuid = arr[0];
				console.log(uuid);
				client_location = arr[1];
			}
			if (arr.length > 2) {
				appid = arr[2];
			}

			var __report_request_time = new Date().getTime();


			// var infoCollectionMsg = "采集信息耗时：" + infoCollectionEndTime + "毫秒 "

			try {
				if (parent.window.show_infoCollection)
					parent.window.show_infoCollection();
			} catch (e) {}

			console.log("===信息采集总时延：" + (new Date().getTime() - _report_start_time));
			console.log('location: ' + browserlocation + ", 数据上报长度：" + JSON.stringify(postData).length);
			console.log('其他参数：report_id=' + uuid + ", window_loc=" + client_location + ", appid=" + appid);
			console.log('gpuImg：' + JSON.stringify(postData['gpuImgs']));
			//				$('.J_misstion-uuid').val(browserlocation.substring(qflag + 1, andflag));
			//				$('.J_misstion-clientAddress').val(browserlocation.substring(andflag + 1));
			//				$('.J_misstion-fpJson').val(JSON.stringify(postData));
			//$('.J_button').click();//触发上报事件
			//                parent.window.frm_show.show_result(JSON.stringify(postData));
			//				return;
			if(client_location==""){
				client_location=document.referrer || '';
			}

			// ios中UIWebView与js交互的方法
			appidToIOS = appid;
			uuidToIOS = uuid;
			clientAddressToIOS = client_location;
			fpJsonToIOS = JSON.stringify(postData);
			var _hash = getRequestSign(appid, uuid, fpJsonToIOS);

			toSenderIOSData(appidToIOS, uuidToIOS, clientAddressToIOS, fpJsonToIOS);
			// 数据上报
			function getCookie(cookieName) {
				var strCookie = document.cookie;
				var arrCookie = strCookie.split("; ");
				for (var i = 0; i < arrCookie.length; i++) {
					var arr = arrCookie[i].split("=");
					if (cookieName == arr[0]) {
						return arr[1];
					}
				}
				return "";
			}
			var reportCode;
			var reportStatus = getCookie("serverStatus"); // 返回状态码
			console.log("服务器上报状态：" + reportStatus);



			if (reportStatus == uuid + '1000') {
				// "有缓存不上报：" + infoCollectionTime + "毫秒" 
				try {
					if (parent.window.show_infoCollection_has_cache)
						parent.window.show_infoCollection_has_cache();
				} catch (e) {}
				return;
			} else {
				// 将采集到的数据上报
				var _report_toServer_time = new Date().getTime();
				window.cartaFingerprint={};
				if(appid!=""){
					cartaFingerprint.appid=appid;
				}else{
					cartaFingerprint.appid="com.example.demo";
				}
					cartaFingerprint.uuid=uuid;
					cartaFingerprint.clientAddress=client_location;
					cartaFingerprint.fpJson=postData;
					cartaFingerprint.sign=_hash;
                	var uuid1=cartaFingerprint.fpJson.fingerprint2.webgl;
                	cartaFingerprint.devid=uuid1;
					console.log(cartaFingerprint);
				// $.ajax({
				/*ajax({
					url: "/xdid/bapi",
					//dataType : "json", // 不要设置成JSON!!!! 服务器接收的formdata
					type: 'POST', // 请求类型，是"POST"
					cache: false,
					data: {
						appid: appid,
						uuid: uuid,
						clientAddress: client_location,
						fpJson: fpJsonToIOS,
						sign: _hash
					},

					success: function (data) {
						console.log(data);

						var objData = JSON.parse(data);
						console.log(objData);
						reportCode = objData.status;
						console.log("上报reportid返回码", objData);

						document.cookie = "serverStatus=" + uuid + reportCode; //设置 cookie reportcode
						console.log('toServer.js查询设备指纹状态码：' + objData['status']);

						var msg = "服务器返回：" + data;
						var msgTime = new Date().getTime();

						console.log(data);
						console.log(msg);
						//  上报耗时
						try {
							// $("body").html("<p>" + data + "</p>")
							var tag1 = document.getElementsByTagName('body')[0];
							tag1.innerHTML = '<p>' + data + '</p>'
							if (parent.window.frm_show && parent.window.frm_show.show_result)
								parent.window.frm_show.show_result(msg);
						} catch (e) {}

						try {
							if (parent.window.show_result)
								parent.window.show_result(msg);

						} catch (e) {}
						// 上报采集总时间
						var totalTime = new Date().getTime() - __report_request_time;
						try {
							// $("body").html("<p>" + data + "</p>")
							var tag1 = document.getElementsByTagName('body')[0];
							tag1.innerHTML = '<p>' + data + '</p>'
							if (parent.window.frm_show && parent.window.frm_show.show_result_time)
								parent.window.frm_show.show_result_time();
						} catch (e) {}
						try {
							if (parent.window.show_result_time)
								parent.window.show_result_time();

						} catch (e) {}

					},
					error: function (xhr, ajaxOptions, thrownError) {
						// $("body").html("<p>" + thrownError + "</p>")
						var tag1 = document.getElementsByTagName('body')[0];
						tag1.innerHTML = '<p>' + thrownError + '</p>'
						console.log(thrownError);
					}
				});*/
			}


		}
	};
	sendData();
	/* Converts the charachters that aren't UrlSafe to ones that are and
	   removes the padding so the base64 string can be sent
	   */
	Base64EncodeUrlSafe = function (str) {
		return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
	};

	stringify = function (array) {
		var str = "";
		for (var i = 0, len = array.length; i < len; i += 4) {
			str += String.fromCharCode(array[i + 0]);
			str += String.fromCharCode(array[i + 1]);
			str += String.fromCharCode(array[i + 2]);
		}

		// NB: AJAX requires that base64 strings are in their URL safe
		// form and don't have any padding
		/*兼容btoa*/
		if (('btoa' in window)) {
			var b64 = window.btoa(str);
			return Base64EncodeUrlSafe(b64);
		} else {
			/*ie兼容*/
			var Base64 = window.Base64 || {
				/* private property*/
				_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				/* public method for encoding */
				encode: function (input) {
					var output = "";
					var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
					var i = 0;
					input = Base64._utf8_encode(input);
					while (i < input.length) {
						chr1 = input.charCodeAt(i++);
						chr2 = input.charCodeAt(i++);
						chr3 = input.charCodeAt(i++);
						enc1 = chr1 >> 2;
						enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
						enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
						enc4 = chr3 & 63;
						if (isNaN(chr2)) {
							enc3 = enc4 = 64;
						} else if (isNaN(chr3)) {
							enc4 = 64;
						}
						output = output +
							Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
							Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);

					}
					return output;
				},
				/* public method for decoding */
				decode: function (input) {
					var output = "";
					var chr1, chr2, chr3;
					var enc1, enc2, enc3, enc4;
					var i = 0;
					input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
					while (i < input.length) {
						enc1 = Base64._keyStr.indexOf(input.charAt(i++));
						enc2 = Base64._keyStr.indexOf(input.charAt(i++));
						enc3 = Base64._keyStr.indexOf(input.charAt(i++));
						enc4 = Base64._keyStr.indexOf(input.charAt(i++));
						chr1 = (enc1 << 2) | (enc2 >> 4);
						chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
						chr3 = ((enc3 & 3) << 6) | enc4;
						output = output + String.fromCharCode(chr1);
						if (enc3 != 64) {
							output = output + String.fromCharCode(chr2);
						}
						if (enc4 != 64) {
							output = output + String.fromCharCode(chr3);
						}
					}
					output = Base64._utf8_decode(output);
					return output;
				},
				/* private method for UTF-8 encoding */
				_utf8_encode: function (string) {
					string = string.replace(/\r\n/g, "\n");
					var utftext = "";
					for (var n = 0; n < string.length; n++) {
						var c = string.charCodeAt(n);
						if (c < 128) {
							utftext += String.fromCharCode(c);
						} else if ((c > 127) && (c < 2048)) {
							utftext += String.fromCharCode((c >> 6) | 192);
							utftext += String.fromCharCode((c & 63) | 128);
						} else {
							utftext += String.fromCharCode((c >> 12) | 224);
							utftext += String.fromCharCode(((c >> 6) & 63) | 128);
							utftext += String.fromCharCode((c & 63) | 128);
						}
					}
					return utftext;
				},
				/* private method for UTF-8 decoding */
				_utf8_decode: function (utftext) {
					var string = "";
					var i = 0;
					var c = c1 = c2 = 0;
					while (i < utftext.length) {
						c = utftext.charCodeAt(i);
						if (c < 128) {
							string += String.fromCharCode(c);
							i++;
						} else if ((c > 191) && (c < 224)) {
							c2 = utftext.charCodeAt(i + 1);
							string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
							i += 2;
						} else {
							c2 = utftext.charCodeAt(i + 1);
							c3 = utftext.charCodeAt(i + 2);
							string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
							i += 3;
						}
					}
					return string;
				}
			}
			window.Base64 = Base64;
			var b64 = Base64.encode(str);
			return Base64EncodeUrlSafe(b64);
		}
	};
	/*判断window对象中是否有Uint8Array这个对象*/
	if (!('Uint8Array' in window)) {
		obj = new Object();
		obj.name = 'Uint8Array';
	}
	/*判断window对象中是否有Uint8Array这个对象*/
	if ('Uint8Array' in window) {
		Uint8Array.prototype.hashCode = function () {
			var hash = 0,
				i, chr, len;
			var $this = this;
			//为了兼容IE6
			if (!('length' in $this)) {
				var $this = {
					length: 0
				};
			}
			if ($this.length === 0)
				return hash;
			for (i = 0, len = $this.length; i < len; i++) {
				chr = $this[i];
				hash = ((hash << 5) - hash) + chr;
				hash |= 0; // Convert to 32bit integer
			}
			return hash;
		}
	} else {
		Array.prototype.hashCode = function () {
			var hash = 0,
				i, chr, len;
			var $this = this;
			//为了兼容IE6
			if (!('length' in $this)) {
				var $this = {
					length: 0
				};
			}
			if ($this.length === 0)
				return hash;
			for (i = 0, len = $this.length; i < len; i++) {
				chr = $this[i];
				hash = ((hash << 5) - hash) + chr;
				hash |= 0; // Convert to 32bit integer
			}
			return hash;
		}
	}
};

Sender();


// to iOS-end share postData
function toSenderIOSData() {
	shareTest(appidToIOS, uuidToIOS, clientAddressToIOS, fpJsonToIOS);
}
// do nothing
function shareTest() {}