var ubercookies;

function getAudioFP(callback) {
	// Details: https://audiofingerprint.openwpm.com/
	var hybrid_output = [];
	//	console.log(window);
	var AudioContext;
	if(this.hasOwnProperty('AudioContext')) {
		var audioCtx = new(window.AudioContext || window.webkitAudioContext),
			oscillator = audioCtx.createOscillator(),
			analyser = audioCtx.createAnalyser(),
			gain = audioCtx.createGain(),
			scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1),
			compressor, bins;
		//console.log(scriptProcessor);
		//console.log(oscillator);
		// Create and configure compressor
		compressor = audioCtx.createDynamicsCompressor();
		compressor.threshold && (compressor.threshold.value = -50);
		compressor.knee && (compressor.knee.value = 40);
		compressor.ratio && (compressor.ratio.value = 12);
		compressor.reduction && (compressor.reduction.value = -20);
		compressor.attack && (compressor.attack.value = 0);
		compressor.release && (compressor.release.value = .25);
		gain.gain.value = 0; // Disable volume
		oscillator.type = 'triangle'; // Set oscillator to output triangle wave
		oscillator.connect(compressor); // Connect oscillator output to dynamic compressor
		compressor.connect(analyser); // Connect compressor to analyser
		analyser.connect(scriptProcessor); // Connect analyser output to scriptProcessor input
		scriptProcessor.connect(gain); // Connect scriptProcessor output to gain input
		gain.connect(audioCtx.destination); // Connect gain output to audiocontext destination
	} else {
		var scriptProcessor = {};
		var oscillator = {};
		//console.log(0000);
	}
	scriptProcessor.onaudioprocess = function(bins) {
		bins = new Float32Array(analyser.frequencyBinCount);
		analyser.getFloatFrequencyData(bins);
		for(var i = 0; i < bins.length; i = i + 1) {
			if(bins[i] != -Infinity)
				hybrid_output.push(bins[i]);
		}
		analyser.disconnect();
		scriptProcessor.disconnect();
		gain.disconnect();
		var audioFp = JSON.stringify(hybrid_output);
		//        console.log(audioFp);
		if(audioFp)
			callback(audioFp);
	};

//	if (oscillator)		oscillator.start(0);
}

var getClientRectsFP = function() {
	// Details: http://jcarlosnorte.com/security/2016/03/06/advanced-tor-browser-fingerprinting.html
	var elem = document.createElement('div');
	var s = elem.style;
	s.position = 'absolute';
	s.left = '3.1px';
	s.top = '2.1px';
	s.zIndex = '-100';
	s.visibility = 'hidden';
	s.fontSize = '19.123px';
	s.transformOrigin = '0.1px 0.2px 0.3px';
	s.webkitTransformOrigin = '0.1px 0.2px 0.3px';
	s.webkitTransform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
	s.transform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
	elem.innerHTML = '<h1>Sed ut perspiciatis unde</h1>pousdfnmv<b>asd<i id="target">asd</i></b>';
	document.body.appendChild(elem);
	var uuid = '';
	var rect = document.getElementById('target').getClientRects()[0];
	for(var key in rect) {
		uuid += rect[key] + ",";
	}
	if(elem.remove) elem.remove();
	return uuid;
};

///*
function computeUber() {
	audioFP = '';
	//console.log('AudioFP begin');
	getAudioFP(function(audioFP) {
//		console.log('AudioFP: ' + audioFP);
//		console.log('ClientRectsFP begin');
		var clientRectsFP = getClientRectsFP();
//		console.log('ClientRectsFP finish');
		var hash = CryptoJS.SHA1(clientRectsFP + audioFP).toString();
		ubercookies = {
			audioFP: audioFP,
			clientRectsFP: clientRectsFP,
			devid: hash
		};
		//document.getElementById('uuid').innerHTML = hash;
		//updateIdenticon(document.getElementById('identicon'), hash);
	});
}
//*/
///*
/*兼容ie只支持attachEvent,而FF和Chrome只支持addEventListener*/
if(document.attachEvent) {
	document.attachEvent("DOMContentLoaded", function(event) {
		computeUber();
	});
} else {
	document.addEventListener("DOMContentLoaded", function(event) {
		computeUber();
	});
}

//*/

//Fix iOS AudioContext on Safari https://gist.github.com/kus/3f01d60569eeadefe3a1
var fixAudioContext = function(e) {
	computeUber();
	// Remove events
	/*兼容ie只支持detachEvent，而FF和Chrome只支持removeEventListener*/
	if(document.removeEventListener) {
		document.removeEventListener('touchstart', fixAudioContext);
		document.removeEventListener('touchend', fixAudioContext);
	} else {
		document.detachEvent('touchstart', fixAudioContext);
		document.detachEvent('touchend', fixAudioContext);
	}
};
// iOS 6-8
/*兼容ie只支持attachEvent,而FF和Chrome只支持addEventListener*/
if(document.attachEvent) {
	document.attachEvent('touchstart', fixAudioContext);
} else {
	document.addEventListener('touchstart', fixAudioContext);
}
// iOS 9
/*兼容ie只支持attachEvent,而FF和Chrome只支持addEventListener*/
if(document.attachEvent) {
	document.attachEvent('touchend', fixAudioContext);
} else {
	document.addEventListener('touchend', fixAudioContext);
}

// Hack: prevent scrolling bc on iOS there are interferences with getClientRects
//*
/*兼容ie只支持attachEvent,而FF和Chrome只支持addEventListener*/
if(document.attachEvent) {
	document.attachEvent('touchmove', function(e) {
		e.preventDefault();
	});
} else {
	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	});
}
//*/