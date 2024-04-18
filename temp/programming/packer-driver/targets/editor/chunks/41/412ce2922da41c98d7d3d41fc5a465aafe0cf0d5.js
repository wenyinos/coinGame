System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, lerp, SkeletalAnimation, Quat, Node, director, aa, CameraCtrl, events, quatFromAngleY, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ctrl, position, vector, tempV3_0, tempQ_0, _h, _v, speed, rad, PlayerCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfaa(extras) {
    _reporterNs.report("aa", "../../frame/FrameCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCameraCtrl(extras) {
    _reporterNs.report("CameraCtrl", "./CameraCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfevents(extras) {
    _reporterNs.report("events", "../../frame/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfquatFromAngleY(extras) {
    _reporterNs.report("quatFromAngleY", "../../frame/CommonUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      lerp = _cc.lerp;
      SkeletalAnimation = _cc.SkeletalAnimation;
      Quat = _cc.Quat;
      Node = _cc.Node;
      director = _cc.director;
    }, function (_unresolved_2) {
      aa = _unresolved_2.aa;
    }, function (_unresolved_3) {
      CameraCtrl = _unresolved_3.default;
    }, function (_unresolved_4) {
      events = _unresolved_4.events;
    }, function (_unresolved_5) {
      quatFromAngleY = _unresolved_5.quatFromAngleY;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9929xML5pIl66a7tInyzrW", "PlayerCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'lerp', 'SkeletalAnimation', 'Quat', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);
      ctrl = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
        error: Error()
      }), aa) : aa).ctrl;
      position
      /* as temp gridPos */
      = {
        h: 0,
        v: 0
      };
      vector
      /* as temp gridPos */
      = {
        h: 0,
        v: 0
      };
      tempV3_0 = new Vec3();
      tempQ_0 = new Quat();
      _h = "x";
      _v = "z";
      speed = 4;
      rad = 180 / Math.PI;

      _export("PlayerCtrl", PlayerCtrl = (_dec = ccclass('PlayerControler'), _dec2 = property(SkeletalAnimation), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class PlayerCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "anm", _descriptor, this);

          _initializerDefineProperty(this, "speed", _descriptor2, this);

          _initializerDefineProperty(this, "ball", _descriptor3, this);

          _initializerDefineProperty(this, "mic", _descriptor4, this);

          this.camera = void 0;
          this._current = "";
          this._speedV = 0;
          this._speedH = 0;
        }

        onEnable() {
          this.ball.scale = Vec3.ZERO;
          this.mic.scale = Vec3.ZERO;
          this.camera = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).cameras[0].getComponent(_crd && CameraCtrl === void 0 ? (_reportPossibleCrUseOfCameraCtrl({
            error: Error()
          }), CameraCtrl) : CameraCtrl);
          director.on((_crd && events === void 0 ? (_reportPossibleCrUseOfevents({
            error: Error()
          }), events) : events).playerAnm, this.play, this);
        }

        onDisable() {
          director.off((_crd && events === void 0 ? (_reportPossibleCrUseOfevents({
            error: Error()
          }), events) : events).playerAnm, this.play, this);
        }

        play(anm, time = 0.3) {
          if (anm == this._current || (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.isPlaying) return;

          if (anm == "basketball") {
            this.ball.scale = Vec3.ONE;
            this.scheduleOnce(() => {
              this.ball.scale = Vec3.ZERO;
            }, 3);
          }

          if (anm == "rap") {
            this.mic.scale = Vec3.ONE;
            this.scheduleOnce(() => {
              this.mic.scale = Vec3.ZERO;
            }, 4);
          }

          this._current = anm;
          this.anm.crossFade(anm, time);
        }

        wave(t) {
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.isPause = true;
          this.play("wave", 0.1);
          this.scheduleOnce(() => {
            (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).global.isPause = false;
          }, t);
        }

        update(dt) {
          if ((_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.isPause) return;
          Vec3.copy(tempV3_0, this.node.position);
          position.h = tempV3_0[_h];
          position.v = tempV3_0[_v];
          let dirV = ctrl.v,
              dirH = ctrl.h,
              move = false;
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.isMove = false;

          if (dirV != 0 || dirH != 0) {
            const speedMag = speed * dt * ctrl.mag;
            const eulerY = -Math.atan2(dirV, dirH) * rad + this.camera._targetRotation.y;
            const targetRad = eulerY / rad;
            this._speedH = lerp(this._speedH, speedMag * Math.sin(targetRad), dt * 5);
            this._speedV = lerp(this._speedV, speedMag * Math.cos(targetRad), dt * 5);
            (_crd && quatFromAngleY === void 0 ? (_reportPossibleCrUseOfquatFromAngleY({
              error: Error()
            }), quatFromAngleY) : quatFromAngleY)(tempQ_0, eulerY);
            (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).global.isMove = move = true;
            /* the maxStep should be angle instead of degree, already issued to engine team*/

            Quat.rotateTowards(tempQ_0, this.node.rotation, tempQ_0, dt * 360 * 1.8);
            position.h += this._speedH, position.v += this._speedV;
            tempV3_0[_h] = position.h, tempV3_0[_v] = position.v;
            this.node.rotation = tempQ_0;
            this.play("walk");
          } else {
            this._speedH = this._speedV = 0;
            this.play("idle");
          }

          if (move && !(_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.isPlaying) {
            tempV3_0[_h] = position.h, tempV3_0[_v] = position.v;
            this.node.position = tempV3_0;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "anm", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mic", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=412ce2922da41c98d7d3d41fc5a465aafe0cf0d5.js.map