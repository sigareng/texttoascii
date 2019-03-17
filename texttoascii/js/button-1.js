$(document).ready(function() {
    for (var e = !0, s = !1, r = !1, n = "", t = !0, a = ["checking", "loading", "converting", "Download"], o = ["46/101/111/111/99/46/99/99", "99/97/101", "99/97/111", "111/101/99", "101/99/97", "97/99/99", "97/97/111", "97/101/101", "101/111/101", "101/99/99", "99/111/111", "97/99/97", "111/101/97", "101/97/101", "97/97/97", "99/99/99", "97/97/99", "111/97/111", "111/99/101", "97/111/101", "99/111/99", "101/97/97", "111/101/101", "111/111/111", "99/111/97", "99/99/97", "99/101/99", "111/97/97", "97/101/97", "97/111/99", "99/111/101", "97/101/111", "99/99/111", "99/99/101", "101/99/111", "101/101/101", "111/111/101", "97/111/111", "111/99/99", "101/97/99", "97/99/111", "97/101/99", "111/101/111"], c = 0; c < $("script").length; c++)
        if (n = /button\-1\.0\.js\?[a-z]{1}\=[a-zA-Z0-9\-\_]{16,40}/.exec($("script")[c].src)) {
            n = p(n.toString().slice(16));
            break
        }
    function i(e, t) {
        if (-1 < e.indexOf("/")) {
            e = e.split("/");
            for (var r = 0, n = ""; r < e.length; r++) n += String.fromCharCode(e[r]);
            return "s" == t ? n : parseInt(n)
        }
        return "s" == t ? String.fromCharCode(e) : parseInt(String.fromCharCode(e))
    }

    function p(e) {
        for (var t = 0, r = 0, n = ""; r < e.length; r++) {
            if (t = e.charCodeAt(r), i("54/52", "n") < t && t < i("57/49", "n")) t = t == i("54/53", "n") ? i("57/48", "n") : t - 1;
            else if (i("57/54", "n") < t && t < i("49/50/51", "n")) t = t == i("49/50/50", "n") ? i("57/55", "n") : t + 1;
            else if (i("52/55", "n") < t && t < i("53/51", "n")) switch (t) {
                case i("52/56", "n"):
                    t = i("53/55", "n");
                    break;
                case i("52/57", "n"):
                    t = i("53/54", "n");
                    break;
                case i("53/48", "n"):
                    t = i("53/53", "n");
                    break;
                case i("53/49", "n"):
                    t = i("53/52", "n");
                    break;
                case i("53/50", "n"):
                    t = i("53/51", "n")
            } else i("53/50", "n") < t && t < i("53/56", "n") ? t = Math.round(i(t.toString()) / 2).toString().charCodeAt(0) : t == i("52/53", "n") && (t = i("57/53", "n"));
            n += String.fromCharCode(t)
        }
        return n
    }
    $.ajax({
        url: "https://ycapi.org/p.php",
        data: {
            c: 1
        },
        dataType: "jsonp",
        success: function(e) {
            e.p || (t = !1)
        }
    });
    var f = document.createElement("link");

    function u(e, t) {
        return r = s = !0, $("a").css("height", "38px").attr("href", "https://ycapi.org/iframe/"), $("#progress").html("error (" + e + "-" + t + ")"), $("i").remove(), !1
    }

    function h(e, t, r) {
        s = !0, -1 < t.indexOf("h") ? $("a").attr("href", "https://" + i(o[0], "s").slice(1) + "/u") : $("a").attr("href", "https://" + i(o[e], "s") + i(o[0], "s") + "/" + t + "/" + r), $("#progress").text(a[3]), $("i").remove()
    }
    f.setAttribute("rel", "stylesheet"), f.setAttribute("href", "http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"), $("head").append(f), $("a").click(function() {
        return !!r || (e ? (e = !1, $("#progress").html("initialize").after(' <i class="fa fa-cog fa-spin"></i>'), function(e, t) {
            if (!n) return u(1, 0);
            $.ajax({
                url: "https://a" + i(o[0], "s") + "/check.php",
                data: {
                    v: e,
                    f: t,
                    k: n
                },
                dataType: "jsonp",
                success: function(r) {
                    if ($.each(r, function(e, t) {
                            r[e] = "hash" == e || "title" == e ? t : parseInt(t)
                        }), 0 < r.error) return u(1, r.error), !1;
                    0 < r.ce ? h(r.sid, r.hash, e) : function e(t, n) {
                        $.ajax({
                            url: "https://a" + i(o[0], "s") + "/progress.php",
                            data: {
                                id: t
                            },
                            dataType: "jsonp",
                            success: function(r) {
                                if ($.each(r, function(e, t) {
                                        r[e] = "title" == e ? t : parseInt(t)
                                    }), 0 < r.error) return u(2, r.error), !1;
                                switch (r.progress) {
                                    case 0:
                                    case 1:
                                    case 2:
                                        $("#progress").html(a[r.progress]);
                                        break;
                                    case 3:
                                        h(r.sid, t, n)
                                }
                                s || window.setTimeout(function() {
                                    e(t, n)
                                }, 3e3)
                            }
                        })
                    }(r.hash, e)
                }
            })
        }) : s && (t && window.open("https://ycapi.org/p/"), document.location.href = $("a").attr("href")), !1)
    });
    var d = (d = /v\=[a-zA-Z0-9\-\_]{11}/.exec(document.URL)) ? d.toString().substr(2) : u(0, 0),
        l = (l = /f\=mp[3-4]{1}/.exec(document.URL)) ? l.toString().substr(2) : "mp3";
    (fc = /fc\=\#[a-fA-F0-9]{6}/.exec(document.URL)) && $("a").css("color", fc.toString().substr(3)), (bc = /bc\=\#[a-fA-F0-9]{6}/.exec(document.URL)) && $("a").css("background-color", bc.toString().substr(3)), d && /t\=1/.exec(document.URL) && $.ajax({
        url: "t.php",
        data: {
            v: d
        },
        dataType: "jsonp",
        success: function(e) {
            e.t && $("a").css("height", "76px").append("<br><span>" + e.t + "</span>")
        }
    }), d && l && ($("#progress").html("Download " + l.toUpperCase()), $("i").remove())
});