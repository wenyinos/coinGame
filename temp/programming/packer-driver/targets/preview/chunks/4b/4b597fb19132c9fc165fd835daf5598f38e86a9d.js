System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "cc/env", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Canvas, Component, director, instantiate, Node, sys, aa, AssetType, events, ui, DEBUG, CameraCtrl, CoinMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, Main;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfaa(extras) {
    _reporterNs.report("aa", "./frame/FrameCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "./frame/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfevents(extras) {
    _reporterNs.report("events", "./frame/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfui(extras) {
    _reporterNs.report("ui", "./frame/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCameraCtrl(extras) {
    _reporterNs.report("CameraCtrl", "./combat/ctrl/CameraCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinMgr(extras) {
    _reporterNs.report("CoinMgr", "./coin/CoinMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Canvas = _cc.Canvas;
      Component = _cc.Component;
      director = _cc.director;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      aa = _unresolved_2.aa;
    }, function (_unresolved_3) {
      AssetType = _unresolved_3.AssetType;
      events = _unresolved_3.events;
      ui = _unresolved_3.ui;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_4) {
      CameraCtrl = _unresolved_4.default;
    }, function (_unresolved_5) {
      CoinMgr = _unresolved_5.CoinMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d79d4hW4D5Ot4Q6EMeg3RVw", "Main", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Canvas', 'Component', 'director', 'instantiate', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Main", Main = (_dec = ccclass('Main'), _dec2 = property(Camera), _dec3 = property(Camera), _dec(_class = (_class2 = (_class3 = class Main extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "camera3D", _descriptor, this);

          _initializerDefineProperty(this, "camera2D", _descriptor2, this);

          this._game = null;
        }

        onLoad() {
          Main.ins = this;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.loadRes();
          })();
        }
        /**
         * @description: init game
         * @return {*}
         */


        initGame() {
          this.createLayers();
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).res.getUI((_crd && ui === void 0 ? (_reportPossibleCrUseOfui({
            error: Error()
          }), ui) : ui).ToastView);
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).res.getUI((_crd && ui === void 0 ? (_reportPossibleCrUseOfui({
            error: Error()
          }), ui) : ui).ActionView);
          this.startGame();
        }
        /**
         * @en : create 2D/3D root layers
         * @cn : 创建2d和3d根节点
         */


        createLayers() {
          var scene = director.getScene();
          var canvas = scene.getComponentInChildren(Canvas).node;
          var layer2D = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.layer2D;

          for (var i = 0; i <= 7; i++) {
            /* if layer0 exist, we clone it, otherwise create a new one */
            var node = layer2D[0] ? instantiate(layer2D[0]) : (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).utils.createUI();
            node.name = "layer2D" + i;
            node.parent = canvas;
            layer2D[i] = node;
          }

          var layer3D = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.layer3D;

          for (var i = 0; i <= 4; i++) {
            /* if layer0 exist, we clone it, otherwise create a new one */
            var _node = new Node();

            _node.name = "layer3D" + i;
            _node.parent = this.node.parent;
            layer3D[i] = _node;
          }

          var cameras = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.cameras;
          cameras[0] = this.camera3D;
          cameras[1] = this.camera2D;
        }

        startGame() {
          if (sys.isMobile || DEBUG) {
            (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).res.getUI((_crd && ui === void 0 ? (_reportPossibleCrUseOfui({
              error: Error()
            }), ui) : ui).JoystickView);
          }

          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).res.getNode("Land", (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).layer3D[0]);
          /* init player */

          var cam = this.camera3D.getComponent(_crd && CameraCtrl === void 0 ? (_reportPossibleCrUseOfCameraCtrl({
            error: Error()
          }), CameraCtrl) : CameraCtrl);
          cam.target = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.player = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).res.getNode("Player", (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).layer3D[1]);
          cam.init();
          director.emit((_crd && events === void 0 ? (_reportPossibleCrUseOfevents({
            error: Error()
          }), events) : events).Toast, "UI and Logic by iwae, a lovely chick, with a lot love ^ ^", 5);
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).sound.startBgm("bgm");
          this._game = this.node.addComponent(_crd && CoinMgr === void 0 ? (_reportPossibleCrUseOfCoinMgr({
            error: Error()
          }), CoinMgr) : CoinMgr);
        }
        /* load game res */


        loadRes() {
          return _asyncToGenerator(function* () {
            yield (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).res.loadBundle(1, 0.1);
            yield (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).res.loadRes(1, (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
              error: Error()
            }), AssetType) : AssetType).Prefab, 0.8);
            yield (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).res.loadRes(1, (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
              error: Error()
            }), AssetType) : AssetType).Sound, 0.1);
          })();
        }

      }, _class3.ins = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera3D", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera2D", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4b597fb19132c9fc165fd835daf5598f38e86a9d.js.map