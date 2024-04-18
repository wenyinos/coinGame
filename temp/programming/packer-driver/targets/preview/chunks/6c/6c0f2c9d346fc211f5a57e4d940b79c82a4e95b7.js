System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Sprite, Node, tween, Layers, Vec3, sys, UITransform, Widget, view, UIRenderer, DataType, CommonUtils, _crd, halfToRad, ONE, ZERO, COMMONUTILS;

  function quatFromAngleY(out, y) {
    y *= halfToRad;
    out.x = out.z = 0;
    out.y = Math.sin(y);
    out.w = Math.cos(y);
    return out;
  }

  function _reportPossibleCrUseOfDataType(extras) {
    _reporterNs.report("DataType", "./Enums", _context.meta, extras);
  }

  _export("quatFromAngleY", quatFromAngleY);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      tween = _cc.tween;
      Layers = _cc.Layers;
      Vec3 = _cc.Vec3;
      sys = _cc.sys;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      view = _cc.view;
      UIRenderer = _cc.UIRenderer;
    }, function (_unresolved_2) {
      DataType = _unresolved_2.DataType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55194GHJUNN+Ig1/aUmx7KT", "CommonUtils", undefined);

      __checkObsolete__(['_decorator', 'Sprite', 'SpriteFrame', 'Texture2D', 'ImageAsset', 'Node', 'screen', 'tween', 'Layers', 'Vec3', 'sys', 'UITransform', 'Widget', 'view', 'PolygonCollider2D', 'director', 'game', 'UIRenderer', 'IQuatLike']);

      halfToRad = 0.5 * Math.PI / 180.0;
      ONE = new Vec3(1, 1, 1);
      ZERO = new Vec3(0, 0, 0);
      CommonUtils = class CommonUtils {
        hideRender(node) {
          var render = node.getComponent(UIRenderer);
          if (!render) return; //@ts-ignore

          render._renderFlag = false; //@ts-ignore

          render._renderEntity.enabled = false;
        }

        showRender(node) {
          var render = node.getComponent(UIRenderer);
          if (!render) return; //@ts-ignore

          render._renderFlag = true; //@ts-ignore

          render._renderEntity.enabled = true;
        }

        hideRenders(node) {
          var renders = node.getComponentsInChildren(UIRenderer);
          renders.forEach(render => {
            //@ts-ignore
            render._renderFlag = false; //@ts-ignore

            render._renderEntity.enabled = false;
          });
        }

        showRenders(node) {
          var renders = node.getComponentsInChildren(UIRenderer);
          renders.forEach(render => {
            //@ts-ignore
            render._renderFlag = true; //@ts-ignore

            render._renderEntity.enabled = true;
          });
        }

        save(key, val) {
          if (typeof val === "number") {
            val = "" + val;
          }
          /* 这里可以存云端 */


          this.saveLocalStorage(key, val || '');
        }
        /**
         * @description: load localstorage data,
         * @return {*}
         */


        load(key, type) {
          if (type === void 0) {
            type = (_crd && DataType === void 0 ? (_reportPossibleCrUseOfDataType({
              error: Error()
            }), DataType) : DataType).NUMBER;
          }

          /* 这里可以从云端拿 */
          var res = this.loadLocalStorage(key);

          if (res) {
            switch (type) {
              case (_crd && DataType === void 0 ? (_reportPossibleCrUseOfDataType({
                error: Error()
              }), DataType) : DataType).STRING:
                break;

              case (_crd && DataType === void 0 ? (_reportPossibleCrUseOfDataType({
                error: Error()
              }), DataType) : DataType).NUMBER:
                res = Number(res);
                break;

              case (_crd && DataType === void 0 ? (_reportPossibleCrUseOfDataType({
                error: Error()
              }), DataType) : DataType).OBJECT:
                res = JSON.parse(res);
                break;
            }

            return res;
          } else {
            return null;
          }
        }
        /**
         * @description: save data into localstorage
         * @return {*}
         */


        saveLocalStorage(key, val) {
          sys.localStorage.setItem(key, val || '');
        }
        /**
         * @description: load localstorage data,
         * @return {*}
         */


        loadLocalStorage(key) {
          return sys.localStorage.getItem(key);
        }
        /**
         * @en : formate num to percentage
         * @cn : 数字转换成百分比
         * @param {number} num
         */


        formatPercentage(num) {
          if (num < 2) {
            return (num * 100).toFixed(1) + '%';
          } else {
            return num;
          }
        }

        traverseObject(obj, callback) {
          for (var _key in obj) {
            if (obj.hasOwnProperty(_key)) {
              var _value = obj[_key];
              callback(_key, _value);

              if (typeof _value === 'object') {
                this.traverseObject(_value, callback);
              }
            }
          }
        }

        getDay() {
          return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
        }

        createUI(name, layer) {
          if (name === void 0) {
            name = "uiNode";
          }

          if (layer === void 0) {
            layer = Layers.Enum.UI_2D;
          }

          var size = view.getVisibleSize();
          var node = new Node(name);
          var transfrom = node.addComponent(UITransform);
          transfrom.setContentSize(size);
          var widget = node.addComponent(Widget);
          widget.isAlignLeft = widget.isAlignTop = widget.isAlignTop = widget.isAlignBottom = true;
          widget.right = widget.left = widget.top = widget.bottom = 0;
          node.layer = layer;
          return node;
        }
        /**
         * @description: generate a random data;
         * @return {*}
         */


        getDateId() {
          var d = new Date();
          var dates = d.getDay().toString() + d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString();
          var result = Math.floor(Number(dates) + Math.floor(Math.random() * (500000 * Math.random() + 50000)) * 0.1);
          return result.toString();
        }
        /**
         * @description: get the sys language
         * @return {*}
         */


        isEn() {
          return navigator.language.indexOf("zh") != -1 ? false : true;
        }
        /**
         * @description: Clear UI node, and realse sprite's memory based on needs
         * @param {Node} node
         * @param {*} clear
         * @return {*}
         */


        clearUI(node, clear) {
          if (clear === void 0) {
            clear = true;
          }

          if (clear) {
            var sp = node.getComponent(Sprite);
            sp && this.clearSprite(sp);
            var sps = node.getComponentsInChildren(Sprite);

            if (sps.length > 0) {
              sps.forEach(v => {
                /* Release mem */
                this.clearSprite(v);
              });
            }
          }

          node.destroy();
        }
        /**
         * @Date: 2022-03-04 17:26:21
         * @LastEditors: iwae
         * @description: move towards
         * @param {Vec3} current current vec
         * @param {Vec3} target target
         * @param {number} maxDistanceDelta speed delta
         */


        MoveTowards(current, target, maxDistanceDelta) {
          // avoid vector ops because current scripting backends are terrible at inlining
          var toVector_x = target[0] - current.x;
          var toVector_y = target[1] - current.y;
          var sqdist = toVector_x * toVector_x + toVector_y * toVector_y;

          if (sqdist == 0 || maxDistanceDelta >= 0 && sqdist <= maxDistanceDelta * maxDistanceDelta) {
            current.set(target[0], target[1]);
            return true;
          }

          var dist = Math.sqrt(sqdist);
          current.x = +toVector_x / dist * maxDistanceDelta;
          current.y = +toVector_y / dist * maxDistanceDelta;
          return false;
        }
        /* node fade In */


        fadeIn(node, dura) {
          if (dura === void 0) {
            dura = 0.2;
          }

          tween(node).set({
            scale: Vec3.ZERO
          }).to(dura, {
            scale: ONE
          }).start();
        }

        fixedTo(num, precision) {
          if (precision === void 0) {
            precision = 2;
          }

          var perc = 10 ^ precision;
          num = Math.floor(num * perc) / perc;
          return num;
        }
        /**
         * @description: get a random target from targets
         * @return {*}
         */


        getRandomTarget(targets) {
          var target;
          var L = targets.length;

          if (L > 0) {
            target = targets[Math.floor(L * Math.random())];
          } else {
            target = null;
          }

          return target;
        }

        getQueryVariable(variable) {
          var url = decodeURIComponent(window.location.href);
          var str = url.split('?');
          var query = str[1];

          if (query) {
            var vars = query.split('&');

            for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split("=");

              if (pair[0] == variable) {
                return pair[1];
              }
            }
          }

          return null;
        }
        /**
         * @description: get the closet nodes
         * @return {*}
         */


        getCloestNode(self, targets) {
          var closestNode;
          var L = targets.length;

          if (L > 0) {
            var dis = 10000;

            for (var i = 0; i < L; i++) {
              var _node = targets[i];

              var _dis = this.getNodesDis(_node, self);

              if (_dis < dis) {
                dis = _dis;
                closestNode = _node;
              }
            }
          } else {
            closestNode = null;
          }

          return closestNode;
        }
        /**
         * @description: get node's mahatton dis to the target
         * @return {*}
         */


        getNodesDis(start, end) {
          return this.getMdis2D(start.position, end.position);
        }

        getOne() {
          return Math.random() > 0.5 ? 1 : -1;
        }

        getMdis2D(p1, p2) {
          /* we use Manhattan dis for better performance */
          var d = Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y);
          return d;
        }
        /**
         * @en : get Manhattan in XZ
         * @zh : XZ 曼哈顿距离
         * @param {Vec3} p1
         * @param {Vec3} p2
         */


        getMdisXZ(p1, p2) {
          /* we use Manhattan dis for better performance */
          var d = Math.abs(p2.x - p1.x) + Math.abs(p2.z - p1.z);
          return d;
        }
        /* node fade In */


        fadeOut(node, cb) {
          tween(node).to(0.2, {
            scale: ZERO
          }, {
            easing: 'elasticOut'
          }).call(() => {
            cb && cb();
          }).start();
        }
        /**
         * @description: Clear sprite and release memory
         * @param {Sprite} sp
         * @return {*}
         */


        clearSprite(sp) {
          var sf = sp.spriteFrame;

          if (sf) {
            sp.spriteFrame = null;

            if (sf && sf.refCount > 0) {
              sf.decRef();
              var tex = sf.texture;
              this.clearTex(tex);
            }
          }
        }
        /**
         * @description: Clear texture2D and release memory
         * @param {Texture2D} tex
         * @return {*}
         */


        clearTex(tex) {
          if (tex && tex.refCount > 0) {
            tex.decRef();
            var image = tex.image;

            if (image && image.refCount > 0) {
              image.decRef();
            }
          }
        }

      };
      COMMONUTILS = new CommonUtils();

      _export("default", COMMONUTILS);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c0f2c9d346fc211f5a57e4d940b79c82a4e95b7.js.map