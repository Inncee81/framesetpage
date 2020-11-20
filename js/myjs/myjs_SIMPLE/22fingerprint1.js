var _t0 = new Date().getTime();

window.fingerprint1 = new function () {
        var that = this,
            n = window,
            x = navigator,
            F = document,
            kx = F.body,
            Ox = Math,
            g, v4 = new Date().getTime(),
            px, Kx, lx = [],
            jx = "",
            fonts = "Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Arab;Arabic Typesetting;Arial Black;Batang;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Calibri;Californian FB;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Copperplate Gothic Light;DejaVu LGC Sans Mono;Desdemona;DFKai-SB;Dotum;Engravers MT;Eras Bold ITC;Eurostile;FangSong;Forte;Franklin Gothic Heavy;French Script MT;Gabriola;Gigi;Gisha;Goudy Old Style;Gulim;GungSeo;Haettenschweiler;Harrington;Hiragino Sans GB;Impact;Informal Roman;KacstOne;Kino MT;Kozuka Gothic Pr6N;Lohit Gujarati;Loma;Lucida Bright;Lucida Fax;Magneto;Malgun Gothic;Matura MT Script Capitals;Menlo;MingLiU-ExtB;MoolBoran;MS PMincho;MS Reference Sans Serif;News Gothic MT;Niagara Solid;Nyala;Palace Script MT;Papyrus;Perpetua;Playbill;PMingLiU;Rachana;Rockwell;Sawasdee;Script MT Bold;Segoe Print;Showcard Gothic;SimHei;Snap ITC;TlwgMono;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Vladimir Script;Wide Latin".split(";"),
            plugins = "4game;AdblockPlugin;AdobeExManCCDetect;AdobeExManDetect;Alawar NPAPI utils;Aliedit Plug-In;Alipay Security Control 3;AliSSOLogin plugin;AmazonMP3DownloaderPlugin;AOL Media Playback Plugin;AppUp;ArchiCAD;AVG SiteSafety plugin;Babylon ToolBar;Battlelog Game Launcher;BitCometAgent;Bitdefender QuickScan;BlueStacks Install Detector;CatalinaGroup Update;Citrix ICA Client;Citrix online plug-in;Citrix Receiver Plug-in;Coowon Update;DealPlyLive Update;Default Browser Helper;DivX Browser Plug-In;DivX Plus Web Player;DivX VOD Helper Plug-in;doubleTwist Web Plugin;Downloaders plugin;downloadUpdater;eMusicPlugin DLM6;ESN Launch Mozilla Plugin;ESN Sonar API;Exif Everywhere;Facebook Plugin;File Downloader Plug-in;FileLab plugin;FlyOrDie Games Plugin;Folx 3 Browser Plugin;FUZEShare;GDL Object Web Plug-in 16.00;GFACE Plugin;Ginger;Gnome Shell Integration;Google Earth Plugin;Google Earth Plug-in;Google Gears 0.5.33.0;Google Talk Effects Plugin;Google Update;Harmony Firefox Plugin;Harmony Plug-In;Heroes & Generals live;HPDetect;Html5 location provider;IE Tab plugin;iGetterScriptablePlugin;iMesh plugin;Kaspersky Password Manager;LastPass;LogMeIn Plugin 1.0.0.935;LogMeIn Plugin 1.0.0.961;Ma-Config.com plugin;Microsoft Office 2013;MinibarPlugin;Native Client;Nitro PDF Plug-In;Nokia Suite Enabler Plugin;Norton Identity Safe;npAPI Plugin;NPLastPass;NPPlayerShell;npTongbuAddin;NyxLauncher;Octoshape Streaming Services;Online Storage plug-in;Orbit Downloader;Pando Web Plugin;Parom.TV player plugin;PDF integrado do WebKit;PDF-XChange Viewer;PhotoCenterPlugin1.1.2.2;Picasa;PlayOn Plug-in;QQ2013 Firefox Plugin;QQDownload Plugin;QQMiniDL Plugin;QQMusic;RealDownloader Plugin;Roblox Launcher Plugin;RockMelt Update;Safer Update;SafeSearch;Scripting.Dictionary;SefClient Plugin;Shell.UIHelper;Silverlight Plug-In;Simple Pass;Skype Web Plugin;SumatraPDF Browser Plugin;Symantec PKI Client;Tencent FTN plug-in;Thunder DapCtrl NPAPI Plugin;TorchHelper;Unity Player;Uplay PC;VDownloader;Veetle TV Core;VLC Multimedia Plugin;Web Components;WebKit-integrierte PDF;WEBZEN Browser Extension;Wolfram Mathematica;WordCaptureX;WPI Detector 1.4;Yandex Media Plugin;Yandex PDF Viewer;YouTube Plug-in;zako".split(";");
        this.plugins = plugins;
        this.ss = {};
        this.js = {
            "ss": that.ss
        }
        this.ts = {}

        var f;
        var P = {};

        function TestFont() {
            function q(I) {
                var P = {};
                M.style.fontFamily = I;
                W.appendChild(M);
                P.height = M.offsetHeight;
                P.width = M.offsetWidth;
                W.removeChild(M);
                return P
            }
            var P = ["monospace", "sans-serif", "serif"],
                I = [],
                W = kx,
                M = F.createElement("span");
            M.style.fontSize = "72px";
            M.style.visibility = "hidden";
            M.innerHTML = "mmmmmmmmmmlli";
            for (var H = 0; H < P.length; H++)
                I[H] = q(P[H]);
            this.l = function (M) {
                for (var W = 0; W < I.length; W++) {
                    var N = q(M + "," + P[W]),
                        H = I[W];
                    if (N.height !== H.height || N.width !== H.width)
                        return true;
                }
                return false;
            }
        }

        this.get = function (w) {
            //        w["h"] = "${host}";
            w["ss"] = fingerprint1.cache.readCache();
            w["wm"] = px;
            w = stringify(w);
        }

        this.cal = function () {
            function getPluginInfo(w) {
                var P = {};
                P["name"] = w["name"];
                P["filename"] = w["filename"].toLowerCase();
                P["description"] = w["description"];
                void 0 !== w["version"] && (P["version"] = w["version"]);
                P["mimeTypes"] = [];
                for (var I = 0; w.length > I; I++) {
                    var W = w[I],
                        M = {};
                    M["description"] = W["description"];
                    M["suffixes"] = W["suffixes"];
                    M["type"] = W["type"];
                    P["mimeTypes"].push(M)
                }
                return P
            }
            var canvas, canvas_id, canvas_2d, ca = {};
            js = fingerprint1.js, ss = fingerprint1.ss, ts = fingerprint1.ts;
            js["m"] = {};

            var __tt0 = new Date().getTime();

            //theme
            try {
                var div = document.createElement("div"),
                    W = {},
                    M = "ActiveBorder,ActiveCaption,AppWorkspace,Background,ButtonFace,ButtonHighlight,ButtonShadow,ButtonText,CaptionText,GrayText,Highlight,HighlightText,InactiveBorder,InactiveCaption,InactiveCaptionText,InfoBackground,InfoText,Menu,MenuText,Scrollbar,ThreeDDarkShadow,ThreeDFace,ThreeDHighlight,ThreeDLightShadow,ThreeDShadow,Window,WindowFrame,WindowText".split(",");
                if (window.getComputedStyle)
                    for (var i = 0; M.length > i; i++)
                        document.body["appendChild"](div),
                        div.style.color = M[i],
                        W[M[i]] = window.getComputedStyle(div).getPropertyValue("color"),
                        document.body["removeChild"](div);
                P = W
            } catch (p) {}
            js["sc"] = P;
            console.log('fingerprint1 sc延时：' + (new Date().getTime() - __tt0));
            __tt0 = new Date().getTime();
            //canvas
            try {
                canvas = document.createElement('canvas');
                canvas_2d = canvas.getContext('2d');
            } catch (p) {}
            if (canvas_2d) {
                canvas_2d.fillStyle = 'red';
                canvas_2d.fillRect(30, 10, 200, 100);
                canvas_2d.strokeStyle = '#1a3bc1';
                canvas_2d.lineWidth = 6;
                canvas_2d.lineCap = 'round';
                canvas_2d.arc(50, 50, 20, 0, Ox.PI, !1);
                canvas_2d.stroke();
                canvas_2d.fillStyle = '#42e1a2';
                canvas_2d.cssText = 'font-size:15.4px;font-family: Arial;';
                canvas_2d.textBaseline = 'alphabetic';
                //canvas_2d.fillText('xd', 15, 60);
                canvas_2d.shadowOffsetX = 1;
                canvas_2d.shadowOffsetY = 2;
                canvas_2d.shadowColor = 'white';
                canvas_2d.fillStyle = 'rgba(0, 0, 200, 0.5)';
                canvas_2d.cssText = 'font-size:60px';
                canvas_2d.cssText = 'font-family: Arial;';
                //canvas_2d.fillText('xd', 40, 80);
                f = canvas.toDataURL();
                var N, K, e, A;
                A = f.length & 3;
                v = f.length - A;
                N = void 0;
                for (e = 0; e < v;)
                    K = f.charCodeAt(e) & 255 | (f.charCodeAt(++e) & 255) << 8 | (f.charCodeAt(++e) & 255) << 16 | (f.charCodeAt(++e) & 255) << 24,
                    ++e,
                    K = 3432918353 * (K & 65535) + ((3432918353 * (K >>> 16) & 65535) << 16) & 4294967295,
                    K = K << 15 | K >>> 17,
                    K = 461845907 * (K & 65535) + ((461845907 * (K >>> 16) & 65535) << 16) & 4294967295,
                    N ^= K,
                    N = N << 13 | N >>> 19,
                    N = 5 * (N & 65535) + ((5 * (N >>> 16) & 65535) << 16) & 4294967295,
                    N = (N & 65535) + 27492 + (((N >>> 16) + 58964 & 65535) << 16);
                K = 0;
                switch (A) {
                    case 3:
                        K ^= (f.charCodeAt(e + 2) & 255) << 16;
                    case 2:
                        K ^= (f.charCodeAt(e + 1) & 255) << 8;
                    case 1:
                        K ^= f.charCodeAt(e) & 255,
                            K = 3432918353 * (K & 65535) + ((3432918353 * (K >>> 16) & 65535) << 16) & 4294967295,
                            K = K << 15 | K >>> 17,
                            N ^= 461845907 * (K & 65535) + ((461845907 * (K >>> 16) & 65535) << 16) & 4294967295
                }
                N ^= f.length;
                N ^= N >>> 16;
                N = 2246822507 * (N & 65535) + ((2246822507 * (N >>> 16) & 65535) << 16) & 4294967295;
                N ^= N >>> 13;
                N = 3266489909 * (N & 65535) + ((3266489909 * (N >>> 16) & 65535) << 16) & 4294967295;
                canvas_id = (N ^ N >>> 16) >>> 0
            } else
                canvas_id = void 0;
            ca["2dHash"] = canvas_id;
            console.log('fingerprint1 2dHash time: ' + (new Date().getTime() - __tt0));
            f = {};
            //webgl
            if (window.WebGLRenderingContext) {
                var canvas = document.createElement("canvas");
                var strs = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'];
                v = [];
                e = !1;
                for (i = 0; 4 > i; i++) {
                    try {
                        var thisContext;
                        thisContext = canvas.getContext(strs[i], {
                            stencil: true
                        });
                        				console.log('strs[i]: ' + strs[i] + ', ' + thisContext);
                        //					thisContext = canvas.getContext(strs[i] /*, { stencil: true}*/);
                        if (thisContext) {
                            e || (e = thisContext),
                                v.push(strs[i])
                        }
                    } catch (p) {}
                }
                v = e ? {
                    name: v,
                    gl: e
                } : false
            } else
                v = !1;
            if (v) {
                A = v.gl;
                e = "";
                if (v.name)
                    for (len = v.name.length, N = 0; N < len; N++)
                        e = N == len - 1 ? e + v.name[N] : e + (v.name[N] + "|");
                f["contextName"] = e;
                f["version"] = A.getParameter(A.VERSION);
                f["shadingLV"] = A.getParameter(A.SHADING_LANGUAGE_VERSION);
                f["vendor"] = A.getParameter(A.VENDOR);
                f["renderer"] = A.getParameter(A.RENDERER);
                v = [];
                try {
                    v = A.getSupportedExtensions()
                } catch (p) {}
                v && (f["extensions"] = v)
            }
            ca["webgl"] = f;
            js["ca"] = ca;

            ts["dt"] = new Date().getTime();
            js["m"]["documentMode"] = document["documentMode"];
            js["m"]["compatMode"] = document["compatMode"];
            // font list //慢！！
            //        for (Fonts = [],f = new TestFont,N = 0; fonts.length > N; N++)
            //            v = fonts[N],
            //            f.l(v) && Fonts.push(v);
            //        js["fo"] = Fonts;
            console.log('fingerprint1 fo time: ' + (new Date().getTime() - ts["dt"]));
            //Navigator
            M = {};
            var f = [];
            for (var k in navigator)
                "object" != typeof navigator[k] && "function" != typeof navigator[k] && (M[k] = navigator[k],
                    f.push(k));
            M["enumerationOrder"] = f;
            M["javaEnabled"] = navigator["javaEnabled"]();
            try {
                M["taintEnabled"] = navigator["taintEnabled"]()
            } catch (p) {}
            js["n"] = M;
            //plugins
            __tt0 = new Date().getTime();
            var plugins = fingerprint1.plugins;
            var kernel, M = navigator["userAgent"]["toLowerCase"]();
            if (W = M.match(/rv:([\d.]+)\) like gecko/))
                kernel = W[1];
            if (W = M.match(/msie ([\d.]+)/))
                kernel = W[1];
            var G;
            if (kernel) {
                var b = [];
                var plugins = "AcroPDF.PDF,Adodb.Stream,AgControl.AgControl,DevalVRXCtrl.DevalVRXCtrl.1,MacromediaFlashPaper.MacromediaFlashPaper,Msxml2.DOMDocument,Msxml2.XMLHTTP,PDF.PdfCtrl,QuickTime.QuickTime,QuickTimeCheckObject.QuickTimeCheck.1,RealPlayer,RealPlayer.RealPlayer(tm) ActiveX Control (32-bit),RealVideo.RealVideo(tm) ActiveX Control (32-bit),rmocx.RealPlayer G2 Control,Scripting.Dictionary,Shell.UIHelper,ShockwaveFlash.ShockwaveFlash,SWCtl.SWCtl,TDCCtl.TDCCtl,WMPlayer.OCX".split(",");
                for (N = 0; plugins.length > N; N++) {
                    plugin_name = plugins[N];
                    try {
                        G = new ActiveXObject(plugin_name);
                        f = {};
                        f["name"] = plugin_name;
                        try {
                            f["version"] = G["GetVariable"]("$version")
                        } catch (p) {}
                        try {
                            f["version"] = G["GetVersions"]()
                        } catch (p) {}
                        f["version"] && 0 < f["version"].length || (f["version"] = "");
                        b.push(f)
                    } catch (p) {}
                }
                G = b
            } else {
                W = [];
                M = {};
                for (N = 0; navigator["plugins"].length > N; N++)
                    b = navigator["plugins"][N],
                    M[b.name] = 1,
                    W.push(getPluginInfo(b));
                for (N = 0; plugins.length > N; N++)
                    plugin_name = plugins[N],
                    M[plugin_name] || (b = navigator["plugins"][plugin_name],
                        b && W.push(getPluginInfo(b)));
                G = W
            }
            js["p"] = G;

            console.log('fingerprint1 p time: ' + (new Date().getTime() - __tt0));

            //屏幕信息
            var scr_p = "availHeight,availWidth,colorDepth,bufferDepth,deviceXDPI,deviceYDPI,height,width,logicalXDPI,logicalYDPI,pixelDepth,updateInterval".split(",");
            b = {};
            for (N = 0; scr_p.length > N; N++)
                p = scr_p[N],
                void 0 !== screen[p] && (b[p] = screen[p]);
            js["s"] = b;
            //document屏幕信息
            var scr_p2 = "devicePixelRatio,screenTop,screenLeft".split(",");
            b = {};
            for (N = 0; scr_p2.length > N; N++)
                p = scr_p2[N],
                void 0 !== window[p] && (b[p] = window[p]);
            js["w"] = b;
            js["tz"] = new Date().getTimezoneOffset();
            fingerprint1.get(js);
        }
        this.cache = new function () {
            var that = this,
                g = {};
            this.fun = {},
                "function" !== typeof stringify && (stringify = function (q) {
                    var P;
                    P = typeof q;
                    if ("undefined" === P || null === q)
                        return "null";
                    if ("number" === P || "boolean" === P)
                        return q + "";
                    if ("object" === P && q && q.constructor === Array) {
                        P = [];
                        for (var M = 0; q.length > M; M++)
                            P.push(stringify(q[M]));
                        return "[" + (P + "") + "]"
                    }
                    if ("object" === P) {
                        P = [];
                        for (M in q)
                            q.hasOwnProperty(M) && P.push('"' + M + '":' + stringify(q[M]));
                        return "{" + (P + "") + "}"
                    }
                    q = q + "";
                    return q = q.replace(/[\\"']/g, "\$&").replace(/\u0000/g, "\\0").replace(/\"/g, "\\\""),
                        '"' + q + '"'
                });
            // webdb
            try {
                if ("function" === typeof openDatabase) {
                    var w = openDatabase("trusfortDb", "1.0", "trusfortDb", 256, function () {});
                    w && (w.transaction(function (I) {
                            I["executeSql"]("CREATE TABLE IF NOT EXISTS randomId(id REAL UNIQUE, val TEXT)", [], function () {}, function () {})
                        }),
                        that.fun["webDb"] = w,
                        readWebDb(that.fun["webDb"])
                    )
                }
            } catch (I) {}
            // indexDb
            try {
                if (window["indexedDB"] = window["indexedDB"] ||
                    window["mozIndexedDB"] ||
                    window["webkitIndexedDB"] ||
                    window["msIndexedDB"],
                    window["indexedDB"]) {
                    if (!window["indexedDB"]) {
                            var P = window["indexedDB"]["open"]("trusfortDb", 1);
                            P.onsuccess = function (I) {
                                that.fun["db"] = I.target.result;
                                that.readIndexDB(that.fun["db"]);
                            };
                            P.onerror = function () {};
                            P.onupgradeneeded = function (I) {
                                that.fun["db"] = I.target.result;
                                that.fun["db"].createObjectStore("__trusfortid", {
                                    keyPath: "id"
                                });
                            }
                        }
                    }
                } catch (I) {}
                this.setDB = function (w) {
                    try {
                        var P = this.fun["db"];
                        P && P.transaction(["__trusfortid"], "readwrite").objectStore("__trusfortid").put({
                            id: 0,
                            value: w
                        })
                    } catch (W) {}
                    try {
                        var I = this.fun["webDb"];
                        I && I.transaction(function (I) {
                            I.executeSql("INSERT INTO randomId(id, val) VALUES(?, ?)", [0, w], function () {}, function () {});
                            I.executeSql("UPDATE randomId SET val = ? WHERE id = ?", [w, 0], function () {}, function () {})
                        })
                    } catch (W) {}
                }
                //to do
                this.readCache = function () {
                    var w = {},
                        P = document["getElementById"]("trusfort_user_data");
                    try {
                        var v = document["cookie"].replace(/(?:(?:^|.*;\s*)__trusfortid\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                        0 !== v.length && (w["cookie"] = v)
                    } catch (W) {}
                    try {
                        window["localStorage"] && null !== window["localStorage"] && 0 !== window["localStorage"].length && (w["localStorage"] = window["localStorage"]["getItem"]("__trusfortid"))
                    } catch (W) {}
                    //E["rand_id"] && (w["flash"] = E["rand_id"]);
                    try {
                        window["sessionStorage"] && null !== window["sessionStorage"] && (w["sessionStorage"] = window["sessionStorage"]["__trusfortid"])
                    } catch (W) {}
                    try {
                        window["globalStorage"] && (w["globalStorage"] = window["globalStorage"][".localdomain"]["__trusfortid"])
                    } catch (W) {}
                    try {
                        P && "function" == typeof P["load"] && "function" == typeof P["getAttribute"] && (P["load"]("payegis_user_data"),
                            w["userData"] = P["getAttribute"]("__trusfortid"))
                    } catch (W) {}
                    try {
                        fingerprint1.ss["indexedDbId"] && (w["indexedDb"] = fingerprint1.ss["indexedDbId"])
                    } catch (W) {}
                    try {
                        fingerprint1.ss["webDbId"] && (w["indexedDb"] = fingerprint1.ss["webDbId"])
                    } catch (W) {}
                    console.log('fingerprint1 readCache时间：' + (new Date().getTime() - _t0));
                    return w
                }
                this.readWebDb = function (w) {
                    try {
                        w.transaction(function (transaction) {
                            transaction.executeSql("SELECT * FROM randomId", [], function (I, P) {
                                if (0 < P.rows.length) {
                                    var M = P.rows.item(0).val;
                                    M && (fingerprint1.ss["webDbId"] = M) //"a6feae0d-17e9-42e5-b438-77906d512b6c81"
                                }
                            }, function () {})
                        })
                    } catch (P) {}
                }
                this.readIndexDB = function (w) {
                    try {
                        w.transaction(["__trusfortid"], "readonly").objectStore("__trusfortid").get(0).onsuccess = function (o) {
                            if (o = o.target.result)
                                fingerprint1.ss["indexedDbId"] = o.value
                        }
                    } catch (P) {}
                }
            }
        }

        function read() {
            fingerprint1.cal()
           console.log('fingerprint1计算时间：' + (new Date().getTime() - _t0));
        }

        function init() {
            _t0 = new Date().getTime();
            fingerprint1.cache.readCache();
            "undefined" != typeof document.body && document.body ? setTimeout(read, 10) : setTimeout(init, 50)
        }
        init();