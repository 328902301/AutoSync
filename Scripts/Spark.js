/******************************

脚本功能：Spark Mail-智能邮箱+解锁订阅
下载地址：https://is.gd/pInkcM
软件版本：3.0
脚本作者：彭于晏💞
更新时间：2022-10-13
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(\w)*$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/SparkMail.js

[mitm]

hostname=api.revenuecat.com

*******************************/

var _0x3bec = [
  "\x77\x70\x64\x4e\x5a\x6c\x4c\x43\x75\x4d\x4f\x4c\x77\x6f\x76\x44\x6f\x6c\x55\x3d",
  "\x59\x45\x39\x4e\x77\x35\x30\x3d",
  "\x52\x38\x4b\x74\x77\x35\x78\x44\x55\x53\x64\x6b\x77\x37\x5a\x65\x54\x6e\x74\x72\x4e\x73\x4f\x55\x77\x70\x50\x44\x71\x38\x4f\x35\x61\x63\x4f\x73\x77\x34\x6f\x3d",
  "\x59\x4d\x4f\x61\x4f\x4d\x4f\x59\x42\x63\x4f\x34\x77\x70\x73\x6f\x59\x30\x41\x68\x77\x6f\x44\x43\x6d\x46\x73\x39\x77\x34\x4d\x57\x77\x37\x6a\x44\x70\x73\x4b\x77",
  "\x77\x71\x37\x44\x69\x4d\x4b\x38\x77\x6f\x56\x32\x77\x37\x5a\x58",
  "\x77\x70\x52\x59\x5a\x6b\x6a\x43\x73\x77\x3d\x3d",
  "\x77\x72\x70\x4f\x77\x36\x68\x38\x57\x58\x2f\x44\x6c\x4d\x4f\x2f\x65\x63\x4b\x75\x77\x36\x77\x43\x56\x73\x4b\x49\x46\x6e\x51\x66\x77\x71\x4a\x67\x45\x67\x3d\x3d",
  "\x61\x6c\x52\x64\x77\x35\x54\x44\x75\x73\x4f\x44\x4e\x33\x2f\x43\x6f\x38\x4f\x4d\x59\x45\x41\x52\x53\x4d\x4b\x36\x77\x36\x4e\x59\x77\x6f\x49\x64\x77\x34\x66\x43\x70\x32\x59\x57\x63\x63\x4b\x79\x44\x79\x63\x65\x47\x73\x4f\x77\x77\x71\x31\x53\x47\x38\x4f\x6f\x77\x35\x48\x43\x75\x38\x4f\x72\x63\x43\x72\x43\x75\x38\x4b\x6e\x77\x35\x54\x44\x70\x4d\x4b\x66",
  "\x65\x6c\x62\x43\x6a\x73\x4f\x7a\x77\x6f\x4c\x43\x6f\x6a\x77\x43\x5a\x41\x38\x69\x4a\x7a\x72\x44\x6b\x63\x4f\x49\x77\x34\x62\x44\x72\x30\x52\x4e\x77\x70\x4d\x3d",
  "\x49\x73\x4b\x76\x77\x6f\x4a\x4c\x77\x72\x50\x44\x76\x32\x68\x4f\x77\x70\x73\x3d",
  "\x63\x73\x4f\x75\x77\x72\x72\x43\x6d\x63\x4f\x39\x49\x73\x4f\x4b\x77\x36\x66\x43\x75\x63\x4b\x34\x43\x4d\x4f\x6f\x53\x4d\x4b\x69\x77\x72\x6e\x43\x73\x48\x2f\x43\x70\x38\x4f\x48\x77\x37\x72\x43\x6e\x44\x77\x6a\x77\x34\x59\x3d",
  "\x64\x63\x4b\x4e\x42\x4d\x4b\x75\x77\x37\x74\x72\x77\x72\x76\x43\x72\x42\x64\x37\x77\x72\x4c\x43\x67\x6b\x6e\x43\x67\x67\x44\x44\x72\x63\x4b\x68\x50\x38\x4f\x63\x77\x6f\x38\x3d",
  "\x4d\x63\x4b\x36\x77\x6f\x5a\x68\x77\x72\x4c\x44\x70\x53\x63\x54\x77\x35\x7a\x44\x74\x57\x6c\x6f\x52\x63\x4b\x62\x56\x73\x4f\x46\x54\x69\x55\x6d\x77\x37\x4a\x67",
  "\x77\x72\x59\x35\x77\x71\x6b\x6e\x77\x70\x30\x58\x41\x43\x45\x4f\x44\x4d\x4b\x33\x77\x34\x6f\x74\x44\x48\x4d\x37\x77\x37\x59\x59\x66\x38\x4b\x78",
  "\x77\x72\x59\x35\x77\x71\x6b\x6e\x77\x70\x30\x58\x41\x43\x45\x4f\x44\x4d\x4b\x33\x77\x34\x6f\x74\x44\x48\x4d\x36\x77\x37\x59\x62\x64\x38\x4b\x78",
  "\x45\x4d\x4f\x58\x77\x72\x7a\x43\x6c\x44\x30\x43\x4f\x38\x4b\x41\x77\x35\x67\x69\x58\x38\x4b\x32\x63\x68\x2f\x44\x72\x38\x4b\x59\x5a\x63\x4b\x67\x4b\x54\x6b\x3d",
  "\x52\x78\x42\x51\x47\x38\x4b\x66\x48\x77\x3d\x3d",
  "\x4a\x73\x4f\x4e\x52\x73\x4f\x77\x77\x71\x38\x3d",
  "\x4e\x42\x7a\x43\x67\x77\x49\x39\x77\x72\x6e\x44\x70\x38\x4f\x61\x77\x6f\x51\x4d\x77\x36\x59\x3d",
];
(function (_0x587b40, _0x3bec21) {
  var _0x19e860 = function (_0x559b71) {
    while (--_0x559b71) {
      _0x587b40["push"](_0x587b40["shift"]());
    }
  };
  var _0x5d15a0 = function () {
    var _0x59a802 = {
      data: { key: "cookie", value: "timeout" },
      setCookie: function (_0x415fdd, _0x4bfb5b, _0xb22d04, _0x3c8b68) {
        _0x3c8b68 = _0x3c8b68 || {};
        var _0x2a3744 = _0x4bfb5b + "=" + _0xb22d04;
        var _0x1e11d9 = 0x0;
        for (
          var _0xce647c = 0x0, _0x569321 = _0x415fdd["length"];
          _0xce647c < _0x569321;
          _0xce647c++
        ) {
          var _0x39bf4a = _0x415fdd[_0xce647c];
          _0x2a3744 += ";\x20" + _0x39bf4a;
          var _0x369e71 = _0x415fdd[_0x39bf4a];
          _0x415fdd["push"](_0x369e71);
          _0x569321 = _0x415fdd["length"];
          if (_0x369e71 !== !![]) {
            _0x2a3744 += "=" + _0x369e71;
          }
        }
        _0x3c8b68["cookie"] = _0x2a3744;
      },
      removeCookie: function () {
        return "dev";
      },
      getCookie: function (_0x1727ed, _0x5cdd92) {
        _0x1727ed =
          _0x1727ed ||
          function (_0x59ea77) {
            return _0x59ea77;
          };
        var _0x13291a = _0x1727ed(
          new RegExp(
            "(?:^|;\x20)" +
              _0x5cdd92["replace"](/([.$?*|{}()[]\/+^])/g, "$1") +
              "=([^;]*)"
          )
        );
        var _0x323aac = function (_0x4f73ea, _0x8c506f) {
          _0x4f73ea(++_0x8c506f);
        };
        _0x323aac(_0x19e860, _0x3bec21);
        return _0x13291a ? decodeURIComponent(_0x13291a[0x1]) : undefined;
      },
    };
    var _0x2475c0 = function () {
      var _0x5cd29d = new RegExp(
        "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}"
      );
      return _0x5cd29d["test"](_0x59a802["removeCookie"]["toString"]());
    };
    _0x59a802["updateCookie"] = _0x2475c0;
    var _0x4b4c1b = "";
    var _0x48b2de = _0x59a802["updateCookie"]();
    if (!_0x48b2de) {
      _0x59a802["setCookie"](["*"], "counter", 0x1);
    } else if (_0x48b2de) {
      _0x4b4c1b = _0x59a802["getCookie"](null, "counter");
    } else {
      _0x59a802["removeCookie"]();
    }
  };
  _0x5d15a0();
})(_0x3bec, 0x7b);
var _0x19e8 = function (_0x587b40, _0x3bec21) {
  _0x587b40 = _0x587b40 - 0x0;
  var _0x19e860 = _0x3bec[_0x587b40];
  if (_0x19e8["ouWyWj"] === undefined) {
    (function () {
      var _0x59a802 = function () {
        var _0x48b2de;
        try {
          _0x48b2de = Function(
            "return\x20(function()\x20" +
              "{}.constructor(\x22return\x20this\x22)(\x20)" +
              ");"
          )();
        } catch (_0x415fdd) {
          _0x48b2de = window;
        }
        return _0x48b2de;
      };
      var _0x2475c0 = _0x59a802();
      var _0x4b4c1b =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x2475c0["atob"] ||
        (_0x2475c0["atob"] = function (_0x4bfb5b) {
          var _0xb22d04 = String(_0x4bfb5b)["replace"](/=+$/, "");
          var _0x3c8b68 = "";
          for (
            var _0x2a3744 = 0x0, _0x1e11d9, _0xce647c, _0x569321 = 0x0;
            (_0xce647c = _0xb22d04["charAt"](_0x569321++));
            ~_0xce647c &&
            ((_0x1e11d9 =
              _0x2a3744 % 0x4 ? _0x1e11d9 * 0x40 + _0xce647c : _0xce647c),
            _0x2a3744++ % 0x4)
              ? (_0x3c8b68 += String["fromCharCode"](
                  0xff & (_0x1e11d9 >> ((-0x2 * _0x2a3744) & 0x6))
                ))
              : 0x0
          ) {
            _0xce647c = _0x4b4c1b["indexOf"](_0xce647c);
          }
          return _0x3c8b68;
        });
    })();
    var _0x559b71 = function (_0x39bf4a, _0x369e71) {
      var _0x1727ed = [],
        _0x5cdd92 = 0x0,
        _0x13291a,
        _0x323aac = "",
        _0x59ea77 = "";
      _0x39bf4a = atob(_0x39bf4a);
      for (
        var _0x8c506f = 0x0, _0x5cd29d = _0x39bf4a["length"];
        _0x8c506f < _0x5cd29d;
        _0x8c506f++
      ) {
        _0x59ea77 +=
          "%" +
          ("00" + _0x39bf4a["charCodeAt"](_0x8c506f)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      _0x39bf4a = decodeURIComponent(_0x59ea77);
      var _0x4f73ea;
      for (_0x4f73ea = 0x0; _0x4f73ea < 0x100; _0x4f73ea++) {
        _0x1727ed[_0x4f73ea] = _0x4f73ea;
      }
      for (_0x4f73ea = 0x0; _0x4f73ea < 0x100; _0x4f73ea++) {
        _0x5cdd92 =
          (_0x5cdd92 +
            _0x1727ed[_0x4f73ea] +
            _0x369e71["charCodeAt"](_0x4f73ea % _0x369e71["length"])) %
          0x100;
        _0x13291a = _0x1727ed[_0x4f73ea];
        _0x1727ed[_0x4f73ea] = _0x1727ed[_0x5cdd92];
        _0x1727ed[_0x5cdd92] = _0x13291a;
      }
      _0x4f73ea = 0x0;
      _0x5cdd92 = 0x0;
      for (var _0x58e507 = 0x0; _0x58e507 < _0x39bf4a["length"]; _0x58e507++) {
        _0x4f73ea = (_0x4f73ea + 0x1) % 0x100;
        _0x5cdd92 = (_0x5cdd92 + _0x1727ed[_0x4f73ea]) % 0x100;
        _0x13291a = _0x1727ed[_0x4f73ea];
        _0x1727ed[_0x4f73ea] = _0x1727ed[_0x5cdd92];
        _0x1727ed[_0x5cdd92] = _0x13291a;
        _0x323aac += String["fromCharCode"](
          _0x39bf4a["charCodeAt"](_0x58e507) ^
            _0x1727ed[(_0x1727ed[_0x4f73ea] + _0x1727ed[_0x5cdd92]) % 0x100]
        );
      }
      return _0x323aac;
    };
    _0x19e8["NDZoWE"] = _0x559b71;
    _0x19e8["TQHmMb"] = {};
    _0x19e8["ouWyWj"] = !![];
  }
  var _0x5d15a0 = _0x19e8["TQHmMb"][_0x587b40];
  if (_0x5d15a0 === undefined) {
    if (_0x19e8["FaBCZH"] === undefined) {
      var _0x487f94 = function (_0x2e92ef) {
        this["PnMmxq"] = _0x2e92ef;
        this["vhMKGI"] = [0x1, 0x0, 0x0];
        this["YnUeIv"] = function () {
          return "newState";
        };
        this["JYtlfA"] = "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*";
        this["knbWcl"] = "[\x27|\x22].+[\x27|\x22];?\x20*}";
      };
      _0x487f94["prototype"]["sgwWdq"] = function () {
        var _0x40268c = new RegExp(this["JYtlfA"] + this["knbWcl"]);
        var _0x71a6d9 = _0x40268c["test"](this["YnUeIv"]["toString"]())
          ? --this["vhMKGI"][0x1]
          : --this["vhMKGI"][0x0];
        return this["BjwGZG"](_0x71a6d9);
      };
      _0x487f94["prototype"]["BjwGZG"] = function (_0x2d678b) {
        if (!Boolean(~_0x2d678b)) {
          return _0x2d678b;
        }
        return this["igXQMH"](this["PnMmxq"]);
      };
      _0x487f94["prototype"]["igXQMH"] = function (_0x322070) {
        for (
          var _0x4bbf70 = 0x0, _0x39be2c = this["vhMKGI"]["length"];
          _0x4bbf70 < _0x39be2c;
          _0x4bbf70++
        ) {
          this["vhMKGI"]["push"](Math["round"](Math["random"]()));
          _0x39be2c = this["vhMKGI"]["length"];
        }
        return _0x322070(this["vhMKGI"][0x0]);
      };
      new _0x487f94(_0x19e8)["sgwWdq"]();
      _0x19e8["FaBCZH"] = !![];
    }
    _0x19e860 = _0x19e8["NDZoWE"](_0x19e860, _0x3bec21);
    _0x19e8["TQHmMb"][_0x587b40] = _0x19e860;
  } else {
    _0x19e860 = _0x5d15a0;
  }
  return _0x19e860;
};
var _0x333fcf = (function () {
  var _0x1b3434 = !![];
  return function (_0x349431, _0x2c0668) {
    var _0x520e66 = _0x1b3434
      ? function () {
          if (_0x2c0668) {
            var _0x6a282d = _0x2c0668[
              _0x19e8("\x30\x78\x38", "\x35\x6b\x6e\x5a")
            ](_0x349431, arguments);
            _0x2c0668 = null;
            return _0x6a282d;
          }
        }
      : function () {};
    _0x1b3434 = ![];
    return _0x520e66;
  };
})();
var _0x2c8b1f = _0x333fcf(this, function () {
  var _0x117bc4 = function () {
    var _0x325c11 = _0x117bc4[_0x19e8("\x30\x78\x39", "\x50\x74\x25\x65")](
      _0x19e8("\x30\x78\x33", "\x4d\x5b\x77\x68")
    )()[_0x19e8("\x30\x78\x65", "\x79\x46\x24\x6c")](
      _0x19e8("\x30\x78\x31", "\x4d\x25\x75\x29")
    );
    return !_0x325c11["\x74\x65\x73\x74"](_0x2c8b1f);
  };
  return _0x117bc4();
});
_0x2c8b1f();
var _0x46adf3 = JSON[_0x19e8("\x30\x78\x66", "\x39\x70\x68\x70")](
  $response[_0x19e8("\x30\x78\x62", "\x4f\x48\x44\x5d")]
);
_0x46adf3 = {
  "\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65\x5f\x6d\x73": 0x1831aa14578,
  "\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65": _0x19e8(
    "\x30\x78\x34",
    "\x4f\x7a\x40\x74"
  ),
  "\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72": {
    "\x6c\x61\x73\x74\x5f\x73\x65\x65\x6e":
      "\x32\x30\x32\x32\x2d\x30\x39\x2d\x30\x38\x54\x30\x31\x3a\x30\x34\x3a\x30\x33\x5a",
    "\x66\x69\x72\x73\x74\x5f\x73\x65\x65\x6e":
      "\x32\x30\x32\x32\x2d\x30\x39\x2d\x30\x38\x54\x30\x31\x3a\x30\x34\x3a\x30\x33\x5a",
    "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x5f\x76\x65\x72\x73\x69\x6f\x6e":
      "\x38",
    "\x6f\x74\x68\x65\x72\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x73": {},
    "\x6d\x61\x6e\x61\x67\x65\x6d\x65\x6e\x74\x5f\x75\x72\x6c": _0x19e8(
      "\x30\x78\x31\x31",
      "\x4f\x48\x44\x5d"
    ),
    "\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73": {
      "\x63\x6f\x6d\x2e\x70\x79\x39\x39\x36\x2e\x70\x72\x65\x6d\x69\x75\x6d\x2e\x79\x65\x61\x72\x6c\x79":
        {
          "\x69\x73\x5f\x73\x61\x6e\x64\x62\x6f\x78": ![],
          "\x6f\x77\x6e\x65\x72\x73\x68\x69\x70\x5f\x74\x79\x70\x65":
            "\x50\x55\x52\x43\x48\x41\x53\x45\x44",
          "\x62\x69\x6c\x6c\x69\x6e\x67\x5f\x69\x73\x73\x75\x65\x73\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74":
            null,
          "\x70\x65\x72\x69\x6f\x64\x5f\x74\x79\x70\x65": _0x19e8(
            "\x30\x78\x37",
            "\x36\x36\x48\x6d"
          ),
          "\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65": _0x19e8(
            "\x30\x78\x63",
            "\x79\x36\x23\x4a"
          ),
          "\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65":
            null,
          "\x75\x6e\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74":
            null,
          "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65":
            _0x19e8("\x30\x78\x35", "\x4f\x7a\x40\x74"),
          "\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65": _0x19e8(
            "\x30\x78\x64",
            "\x53\x64\x74\x25"
          ),
          "\x73\x74\x6f\x72\x65": _0x19e8("\x30\x78\x30", "\x4d\x5b\x77\x68"),
        },
    },
    "\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73": {
      "\x70\x72\x65\x6d\x69\x75\x6d": {
        "\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65": _0x19e8(
          "\x30\x78\x36",
          "\x4b\x54\x63\x5e"
        ),
        "\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65": _0x19e8(
          "\x30\x78\x32",
          "\x35\x6b\x6e\x5a"
        ),
        "\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72":
          "\x63\x6f\x6d\x2e\x70\x79\x39\x39\x36\x2e\x70\x72\x65\x6d\x69\x75\x6d\x2e\x79\x65\x61\x72\x6c\x79",
        "\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65":
          null,
      },
    },
    "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65":
      _0x19e8("\x30\x78\x31\x32", "\x6c\x74\x76\x37"),
    "\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x5f\x75\x73\x65\x72\x5f\x69\x64":
      _0x19e8("\x30\x78\x31\x30", "\x71\x5b\x4b\x65"),
    "\x6e\x6f\x6e\x5f\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73": {},
  },
};
$done({
  "\x62\x6f\x64\x79":
    JSON[_0x19e8("\x30\x78\x61", "\x39\x70\x68\x70")](_0x46adf3),
});
