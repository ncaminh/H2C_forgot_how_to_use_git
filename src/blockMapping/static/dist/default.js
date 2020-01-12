    !function e(t, i, o) {
        function r(a, l) {
            if(!i[a]) {
                if(!t[a]) {
                    var s="function"==typeof require&&require;
                    if(!l&&s)return s(a, !0);
                    if(n)return n(a, !0);
                    var u=new Error("Cannot find module '"+a+"'");
                    throw u.code="MODULE_NOT_FOUND",
                    u
                }
                var p=i[a]= {
                    exports: {}
                }
                ;
                t[a][0].call(p.exports, function(e) {
                    var i=t[a][1][e];
                    return r(i?i: e)
                }
                , p, p.exports, e, t, i, o)
            }
            return i[a].exports
        }
        for(var n="function"==typeof require&&require, a=0;
        a<o.length;
        a++)r(o[a]);
        return r
    }
    
    ( {
        1:[function(e, t, i) {
            !function(e, o) {
                "object"==typeof i&&"object"==typeof t?t.exports=o(): "function"==typeof define&&define.amd?define([], o): "object"==typeof i?i["angular-leaflet-light"]=o(): e["angular-leaflet-light"]=o()
            }
            (this, function() {
                return function(e) {
                    function t(o) {
                        if(i[o])return i[o].exports;
                        var r=i[o]= {
                            exports: {}
                            , id: o, loaded: !1
                        }
                        ;
                        return e[o].call(r.exports, r, r.exports, t), r.loaded=!0, r.exports
                    }
                    var i= {}
                    ;
                    return t.m=e, t.c=i, t.p="", t(0)
                }
                ([function(e, t, i) {
                    "use strict";
                    function o(e) {
                        return e&&e.__esModule?e: {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }
                    );
                    var r=i(1), n=o(r), a=i(3), l=o(a);
                    t.default=angular.module("angular-leaflet", []).component("leaflet", {
                        template:"<div></div>", controller:l.default, bindings: {
                            onMapInitialized: "&", leafletShow: "<"
                        }
                    }
                    ).provider("leafletService", n.default)
                }
                , function(e, t, i) {
                    "use strict";
                    function o(e) {
                        return e&&e.__esModule?e: {
                            default: e
                        }
                    }
                    function r() {
                        var e= {
                            tiles: {
                                url:"http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", options: {
                                    attribution: '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', maxZoom: 19
                                }
                            }
                            , center: {
                                lat: 47.21117290969667, lng: -1.5569686889648438, zoom: 12
                            }
                        }
                        ;
                        this.settings= {}
                        , this.$get=function(t) {
                            "ngInject";
                            var i=new a.default(t);
                            i.settings=e;
                            for(var o in this.settings)i.settings[o]=this.settings[o];
                            return i
                        }
                        , this.$get.$inject=["$compile"]
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }
                    );
                    var n=i(2), a=o(n);
                    t.default=r
                }
                , function(e, t) {
                    "use strict";
                    function i(e, t) {
                        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }
                    );
                    var o=function() {
                        function e(e, t) {
                            for(var i=0;
                            i<t.length;
                            i++) {
                                var o=t[i];
                                o.enumerable=o.enumerable||!1, o.configurable=!0, "value"in o&&(o.writable=!0), Object.defineProperty(e, o.key, o)
                            }
                        }
                        return function(t, i, o) {
                            return i&&e(t.prototype, i), o&&e(t, o), t
                        }
                    }
                    (), r=function() {
                        function e(t) {
                            i(this, e), this.settings= {}
                            , this.data= {}
                        }
                        return o(e, [ {
                            key:"on", value:function(e, t, i, o) {
                                i.on(e, function(e) {
                                    t(e), "$apply"!=o.$root.$$phase&&"$digest"!=o.$root.$$phase&&o.$apply()
                                }
                                ), o.$on("$destroy", function() {
                                    i.off(e, t)
                                }
                                )
                            }
                        }
                        , {
                            key:"updateMapFromSettings", value:function(e, t) {
                                var i=t||this.settings;
                                e.doubleClickZoom.disable(); 
                                e.dragging.disable();
                                if(i.center&&e.setView([i.center.lat, i.center.lng], i.center.zoom), i.minZoom&&(e.options.minZoom=i.minZoom), i.maxZoom&&(e.options.maxZoom=i.maxZoom), i.maxBounds&&e.setMaxBounds(i.maxBounds), i.tiles&&L.tileLayer(i.tiles.url, i.tiles.options).addTo(e), i.layers) {
                                    var o= {}
                                    , r= {}
                                    ;
                                    if(i.layers.baselayers)for(var n in i.layers.baselayers) {
                                        var a=i.layers.baselayers[n];
                                        o[a.name]=L.tileLayer(a.url, a.options)
                                    }
                                    if(i.layers.overlays)for(var l in i.layers.overlays) {
                                        var s=i.layers.overlays[l];
                                        r[s.name]=L.tileLayer(s.url, s.options)
                                    }
                                    L.control.layers(o, r).addTo(e)
                                }
                            }
                        }
                        , {
                            key:"fixHiddenLeaflet", value:function(e) {
                                L.Util.requestAnimFrame(e.invalidateSize, e, !1, e._container)
                            }
                        }
                        ]), e
                    }
                    ();
                    r.$inject=["$compile"], t.default=r
                }
                , function(e, t) {
                    "use strict";
                    function i(e, t) {
                        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }
                    );
                    var o=function() {
                        function e(e, t) {
                            for(var i=0;
                            i<t.length;
                            i++) {
                                var o=t[i];
                                o.enumerable=o.enumerable||!1, o.configurable=!0, "value"in o&&(o.writable=!0), Object.defineProperty(e, o.key, o)
                            }
                        }
                        return function(t, i, o) {
                            return i&&e(t.prototype, i), o&&e(t, o), t
                        }
                    }
                    (), r=function() {
                        function e(t, o) {
                            i(this, e), this.$element=t, this.leafletService=o
                        }
                        return o(e, [ {
                            key:"$onInit", value:function() {
                                this.mapid=this.$element.attr("id")||"map", this.$element.removeAttr("id");
                                var e=this.$element.find("div");
                                e.attr("id", this.mapid), e.attr("id", this.mapid), e.attr("style", this.$element.attr("style")), e.attr("class", this.$element.attr("class")), this.container=e[0]
                            }
                        }
                        , {
                            key:"$postLink", value:function() {
                                !L.Icon.Default.imagePath&&this.leafletService.settings.imagePath&&(L.Icon.Default.imagePath=this.leafletService.settings.imagePath);
                                var e=L.map(this.container);
                                this.leafletService.data[this.mapid]=e, this.leafletService.updateMapFromSettings(e), this.onMapInitialized( {
                                    map: e
                                }
                                ), this.map=e
                            }
                        }
                        , {
                            key:"$onChanges", value:function(e) {
                                e.leafletShow.currentValue&&this.map&&this.leafletService.fixHiddenLeaflet(this.map)
                            }
                        }
                        ]), e
                    }
                    ();
                    r.$inject=["$element", "leafletService"], t.default=r
                }
                ])
            }
            )
        }
        , {}
        ], 2:[function(e, t, i) {
            e("angular-leaflet-light");
            var temp;
            var o=function(e) {
                return {
                    restrict:"AE", replace:!0, scope: {
                        selectedDistricts: "=selected"
                    }
                    , template:'<div><leaflet id="district" style="height: 380px" on-map-initialized="initMap(map)"></leaflet></div>', controller:["$scope", "sgDistrictMapStyle", function(t, i) {
                        t.initMap=function(o) {
                            o.eachLayer(function(e) {
                                o.removeLayer(e)
                            }
                            ), o.zoomControl.remove(), o.scrollWheelZoom.disable();
                            var r= {
                                type:"FeatureCollection", features:[ {
                                    type:"Feature", geometry: {
                                        type: "MultiPolygon", coordinates: [[[[103.84173, 1.33933], [103.84283, 1.34029], [103.84357, 1.34152], [103.84535, 1.34358], [103.84719, 1.34355], [103.85132, 1.34337], [103.85174, 1.34325], [103.85174, 1.34244], [103.85329, 1.34256], [103.85424, 1.34304], [103.85706, 1.34313], [103.85774, 1.34178], [103.85831, 1.34107], [103.85889, 1.3407], [103.86235, 1.33851], [103.86244, 1.33801], [103.86253, 1.33391], [103.86294, 1.33131], [103.86377, 1.33038], [103.86868, 1.32832], [103.87135, 1.32602], [103.87435, 1.32234], [103.87506, 1.32135], [103.87612, 1.3203], [103.87517, 1.31941], [103.87354, 1.31911], [103.87274, 1.31881], [103.87232, 1.31708], [103.86985, 1.31546], [103.86938, 1.31376], [103.86938, 1.3128], [103.86962, 1.31223], [103.87063, 1.31109], [103.87051, 1.3099], [103.8706, 1.30885], [103.87063, 1.30843], [103.8703, 1.30769], [103.86932, 1.30694], [103.86881, 1.30658], [103.86825, 1.3054], [103.86608, 1.30507], [103.86567, 1.30558], [103.86465, 1.30711], [103.86416, 1.30856], [103.86372, 1.30898], [103.86202, 1.31122], [103.86081, 1.31307], [103.8584, 1.31588], [103.8568, 1.31693], [103.85445, 1.31774], [103.85335, 1.31837], [103.85326, 1.31944], [103.85222, 1.31965], [103.85183, 1.32174], [103.85118, 1.32264], [103.8505, 1.32309], [103.85074, 1.32354], [103.85023, 1.3242], [103.85062, 1.32479], [103.85005, 1.32521], [103.84928, 1.32423], [103.84871, 1.32485], [103.84913, 1.32545], [103.84773, 1.32614], [103.84735, 1.32608], [103.84655, 1.32414], [103.84625, 1.32411], [103.84491, 1.32204], [103.84375, 1.32151], [103.84375, 1.32357], [103.8436, 1.32435], [103.84568, 1.32485], [103.84518, 1.32545], [103.84378, 1.32551], [103.84328, 1.32587], [103.84221, 1.32578], [103.84224, 1.32659], [103.84221, 1.3274], [103.84191, 1.32811], [103.84179, 1.32934], [103.8417, 1.33116], [103.84212, 1.33155], [103.84179, 1.33212], [103.84147, 1.33302], [103.84191, 1.33379], [103.8412, 1.33436], [103.84001, 1.33403], [103.83921, 1.33421], [103.83924, 1.33529], [103.84049, 1.33634], [103.8409, 1.33768], [103.84173, 1.33882], [103.84173, 1.33933]]]]
                                    }
                                    , properties: {
                                        id: "1", name: "Toa Payoh", code: "TPayoh", latitude: 1.327012794, longitude: 103.857366723
                                    }
                                }
                                , {
                                type:"Feature", geometry: {
                                    type: "MultiPolygon", coordinates: [[[[103.93014, 1.3997], [103.92586, 1.39799], [103.92645, 1.39718], [103.92835, 1.39503], [103.92856, 1.39425], [103.92619, 1.3915], [103.92607, 1.39123], [103.92957, 1.38851], [103.92833, 1.38714], [103.92895, 1.38651], [103.92363, 1.38035], [103.92099, 1.38229], [103.9195, 1.38137], [103.91799, 1.38286], [103.91682, 1.38129], [103.91822, 1.37963], [103.91842, 1.37754], [103.92207, 1.36721], [103.91773, 1.35119], [103.91598, 1.35043], [103.91188, 1.34928], [103.9068, 1.34646], [103.90555, 1.34325], [103.90389, 1.34233], [103.90081, 1.34141], [103.90033, 1.34018], [103.89815, 1.3407], [103.89684, 1.33866], [103.89609, 1.33779], [103.89631, 1.33757], [103.89538, 1.33652], [103.89324, 1.3349], [103.89193, 1.33421], [103.89015, 1.33353], [103.88887, 1.33318], [103.88837, 1.33476], [103.88748, 1.33688], [103.88708, 1.33759], [103.88672, 1.33827], [103.88643, 1.33879], [103.88506, 1.34048], [103.88321, 1.34085], [103.88215, 1.34133], [103.88155, 1.3416], [103.88021, 1.3406], [103.87944, 1.34027], [103.87807, 1.34], [103.87677, 1.34167], [103.87424, 1.34152], [103.87186, 1.34149], [103.8703, 1.34293], [103.87038, 1.34427], [103.87136, 1.34697], [103.87118, 1.34804], [103.87032, 1.34783], [103.87011, 1.34891], [103.87076, 1.34921], [103.86928, 1.3499], [103.86955, 1.34825], [103.8699, 1.34759], [103.86934, 1.3473], [103.86791, 1.34834], [103.86589, 1.34912], [103.86322, 1.34945], [103.86319, 1.34891], [103.86221, 1.34849], [103.86042, 1.34867], [103.86022, 1.3478], [103.86075, 1.34433], [103.86057, 1.3441], [103.85924, 1.34747], [103.85772, 1.35202], [103.85852, 1.35214], [103.85947, 1.35262], [103.86167, 1.351], [103.86354, 1.3531], [103.86417, 1.35423], [103.86351, 1.35411], [103.85837, 1.35537], [103.85891, 1.35767], [103.85936, 1.35788], [103.85939, 1.35872], [103.86034, 1.35917], [103.86031, 1.36018], [103.85891, 1.36168], [103.86167, 1.36939], [103.86503, 1.37056], [103.86678, 1.37155], [103.86693, 1.37205], [103.86711, 1.37474], [103.86776, 1.37579], [103.86987, 1.37651], [103.87344, 1.37642], [103.87454, 1.37747], [103.87659, 1.37732], [103.87697, 1.37833], [103.87688, 1.37938], [103.87697, 1.38034], [103.87736, 1.38093], [103.8776, 1.3833], [103.87879, 1.38497], [103.88051, 1.38596], [103.88104, 1.38802], [103.88191, 1.38937], [103.88226, 1.39047], [103.88217, 1.39281], [103.8828, 1.3934], [103.8822, 1.39511], [103.88223, 1.39603], [103.88262, 1.39911], [103.88268, 1.40022], [103.87947, 1.40408], [103.87905, 1.40596], [103.88024, 1.40731], [103.88092, 1.40868], [103.88532, 1.41245], [103.88657, 1.41143], [103.89397, 1.41039], [103.89275, 1.40889], [103.89391, 1.40807], [103.89613, 1.41048], [103.89809, 1.41424], [103.89926, 1.41653], [103.90011, 1.4174], [103.90179, 1.41865], [103.90376, 1.41973], [103.90521, 1.41999], [103.90696, 1.41964], [103.90803, 1.42067], [103.91089, 1.42109], [103.91254, 1.42074], [103.91305, 1.41954], [103.91392, 1.41813], [103.91411, 1.41587], [103.91503, 1.416], [103.91518, 1.41656], [103.91571, 1.41696], [103.91663, 1.41656], [103.9173, 1.41572], [103.91836, 1.41497], [103.91878, 1.41443], [103.91861, 1.41376], [103.91928, 1.4131], [103.92134, 1.41233], [103.9235, 1.41082], [103.92492, 1.40935], [103.92557, 1.40845], [103.92686, 1.40726], [103.92775, 1.40627], [103.92895, 1.4054], [103.93087, 1.40349], [103.93116, 1.40284], [103.93101, 1.40198], [103.93006, 1.4009], [103.93014, 1.3997]]]]
                                    }
                                    , properties: {
                                        id: "2", name: "Hougang", code: "Hougang", latitude: 1.3765674734, longitude: 103.896745272
                                    }
                                }
                                , {
                                type:"Feature", geometry: {
                                    type: "MultiPolygon", coordinates: [[[[103.85213, 1.38728], [103.854, 1.38737], [103.85477, 1.38713], [103.85569, 1.38585], [103.85611, 1.38343], [103.85611, 1.38026], [103.85694, 1.37957], [103.85863, 1.37966], [103.85857, 1.3784], [103.85893, 1.37736], [103.85946, 1.37716], [103.86492, 1.37877], [103.86736, 1.37895], [103.87235, 1.37919], [103.87574, 1.37925], [103.8769, 1.37959], [103.87688, 1.37938], [103.87697, 1.37833], [103.87659, 1.37732], [103.87454, 1.37747], [103.87344, 1.37642], [103.86987, 1.37651], [103.86776, 1.37579], [103.86711, 1.37474], [103.86693, 1.37205], [103.86678, 1.37155], [103.86503, 1.37056], [103.86167, 1.36939], [103.85891, 1.36168], [103.86031, 1.36018], [103.86034, 1.35917], [103.85939, 1.35872], [103.85936, 1.35788], [103.85891, 1.35767], [103.85837, 1.35537], [103.86351, 1.35411], [103.86417, 1.35423], [103.86354, 1.3531], [103.86167, 1.351], [103.85947, 1.35262], [103.85852, 1.35214], [103.85772, 1.35202], [103.85924, 1.34747], [103.86057, 1.3441], [103.86128, 1.34243], [103.86208, 1.34004], [103.86235, 1.33851], [103.85831, 1.34107], [103.85774, 1.34178], [103.85706, 1.34313], [103.85424, 1.34304], [103.85329, 1.34256], [103.85174, 1.34244], [103.85174, 1.34325], [103.85132, 1.34337], [103.84719, 1.34355], [103.84535, 1.34358], [103.84357, 1.34152], [103.84283, 1.34029], [103.84173, 1.33933], [103.84069, 1.33927], [103.8403, 1.33993], [103.84048, 1.3411], [103.83995, 1.34149], [103.8392, 1.3414], [103.83733, 1.34053], [103.83638, 1.34038], [103.83573, 1.34116], [103.83423, 1.34242], [103.83123, 1.34672], [103.82532, 1.34773], [103.81854, 1.34665], [103.81462, 1.34895], [103.80514, 1.34543], [103.80236, 1.35175], [103.8082, 1.36079], [103.80885, 1.36273], [103.80963, 1.36438], [103.79808, 1.37895], [103.79921, 1.38312], [103.80088, 1.38384], [103.80854, 1.38387], [103.81208, 1.3828], [103.81288, 1.38175], [103.81627, 1.37876], [103.82093, 1.37927], [103.82334, 1.37924], [103.82533, 1.379], [103.82803, 1.37804], [103.83032, 1.37804], [103.83089, 1.37831], [103.83071, 1.37927], [103.83225, 1.3802], [103.83466, 1.38082], [103.83588, 1.38187], [103.83635, 1.38115], [103.83852, 1.38274], [103.83754, 1.38396], [103.83882, 1.38531], [103.83938, 1.38423], [103.84277, 1.38606], [103.84191, 1.38875], [103.84217, 1.39003], [103.84204, 1.39174], [103.84247, 1.39354], [103.84197, 1.39799], [103.84423, 1.4009], [103.84505, 1.40086], [103.84746, 1.40029], [103.85028, 1.39948], [103.85097, 1.39871], [103.85016, 1.39222], [103.84981, 1.38716], [103.85213, 1.38728]]]]
                                    }
                                    , properties: {
                                        id: "3", name: "Ang Mo Kio", code: "AMK", latitude: 1.3640148075, longitude: 103.835022474
                                    }
                                }
                                ,   
                                ]
                            }
                            , n= {
                                1: ["01", "02", "03", "04", "05", "06"], 2: ["07", "08"], 3: ["14", "15", "16"]
                            }
                            ;
                            L.geoJson(r, {
                                style:function(e) {
                                    return e.properties.selected?i.highlightStyle: i.defaultStyle
                                }
                                , onEachFeature:function(o, r) {
                                    r.bindPopup(o.properties.name, {
                                        className: "sg-district-map-popup"
                                    }
                                    ), r.on("mouseover", function(e) {
                                        i.showPopup&&this.openPopup(), r.setStyle(i.hoverStyle)
                                    }
                                    ), r.on("mouseout", function(e) {
                                        this.closePopup(), r.setStyle(i.defaultStyle)
                                    }
                                    ), r.on("click", function(a) {
                                        this.closePopup(), o.properties.selected=!o.properties.selected, r.setStyle(i.highlightStyle), e(function() {
                                            if (t.selectedDistricts[name] != o.properties.name) {
                                                t.selectedDistricts= {
                                                    name: o.properties.name
                                                };
                                                create_table(o.properties.code, o.properties.name);
                                            } 
                                        },
                                        0)
                                    }
                                    )
                                }
                            }
                            ).addTo(o), o.setView([1.34, 103.8198], 11)
                        }
                    }
                    ], link:function(e) {}
                }
            }
            , r=function() {
                var e=function(e) {
                    return JSON.parse(JSON.stringify(e))
                }
                ;
                this.defaultStyle= {
                    color: "#FFF", fillColor: "#CCC", fillOpacity: 1, weight: 3
                }
                , this.highlightStyle=e(this.defaultStyle), this.highlightStyle.fillColor="#FFF", this.hoverStyle=e(this.highlightStyle), this.showPopup=!1, this.setDefaultStyle=function(e) {
                    this.defaultStyle=Object.assign(this.defaultStyle, e)
                }
                , this.setHighlightStyle=function(e) {
                    this.highlightStyle=Object.assign(this.highlightStyle, e)
                }
                , this.setHoverStyle=function(e) {
                    this.hoverStyle=Object.assign(this.hoverStyle, e)
                }
                , this.setShowPopup=function(e) {
                    this.showPopup=e
                }
                , this.$get=function() {
                    return this
                }
            }
            ;
            angular.module("sgDistrictMap", ["angular-leaflet"]).provider("sgDistrictMapStyle", r).directive("sgDistrictMap", o), o.$inject=["$timeout"]
        }
        , {
            "angular-leaflet-light": 1
        }
        ]
    }
    
    , {}
    
    , [2]);