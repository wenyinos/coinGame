System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Vec3, Quat, Vec2, Node, lerp, macro, input, Input, sys, EDITOR, aa, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, type, executeInEditMode, tempVec3, tempVec3_2, tempQuat, tempVec2, tempVec2_2, DeltaFactor, CameraCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfaa(extras) {
    _reporterNs.report("aa", "../../frame/FrameCore", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
      Node = _cc.Node;
      lerp = _cc.lerp;
      macro = _cc.macro;
      input = _cc.input;
      Input = _cc.Input;
      sys = _cc.sys;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      aa = _unresolved_2.aa;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6be7d8BhlpJFobtMkxMXvVa", "CameraCtrl", undefined);

      __checkObsolete__(['Component', '_decorator', 'Vec3', 'EventTouch', 'Touch', 'Quat', 'Vec2', 'Node', 'EventMouse', 'lerp', 'macro', 'input', 'Input', 'sys']);

      ({
        ccclass,
        property,
        type,
        executeInEditMode
      } = _decorator);
      tempVec3 = new Vec3();
      tempVec3_2 = new Vec3();
      tempQuat = new Quat();
      tempVec2 = new Vec2();
      tempVec2_2 = new Vec2();
      DeltaFactor = 1 / 200;

      _export("default", CameraCtrl = (_dec = ccclass('CameraCtrl'), _dec2 = executeInEditMode(true), _dec3 = type(Node), _dec4 = type(Node), _dec5 = property({
        visible: false
      }), _dec6 = property({
        visible: false
      }), _dec(_class = _dec2(_class = (_class2 = class CameraCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enableTouch", _descriptor, this);

          _initializerDefineProperty(this, "enableScaleRadius", _descriptor2, this);

          _initializerDefineProperty(this, "rotateSpeed", _descriptor3, this);

          _initializerDefineProperty(this, "followSpeed", _descriptor4, this);

          _initializerDefineProperty(this, "xRotationRange", _descriptor5, this);

          _initializerDefineProperty(this, "_target", _descriptor6, this);

          _initializerDefineProperty(this, "targetHeight", _descriptor7, this);

          _initializerDefineProperty(this, "radiusScaleSpeed", _descriptor8, this);

          _initializerDefineProperty(this, "minRadius", _descriptor9, this);

          _initializerDefineProperty(this, "maxRadius", _descriptor10, this);

          _initializerDefineProperty(this, "followTargetRotationY", _descriptor11, this);

          _initializerDefineProperty(this, "_startRotation", _descriptor12, this);

          _initializerDefineProperty(this, "_targetRadius", _descriptor13, this);

          this._center = new Vec3();
          this._targetCenter = new Vec3();
          this._touched = false;
          this._targetRotation = new Vec3();
          this._rotation = new Quat();
          this._radius = 10;
          this.dis = 0;
        }

        get radius() {
          return this._targetRadius;
        }

        set radius(v) {
          this._targetRadius = v;
        }

        get target() {
          return this._target;
        }

        set target(v) {
          this._target = v;

          this._targetRotation.set(this._startRotation);

          this._targetCenter.set(v.worldPosition);
        }

        get preview() {
          return false;
        }

        set preview(v) {
          this.resetCam(0.1);
        }

        get targetRotation() {
          return this._startRotation;
        }

        set targetRotation(v) {
          this._targetRotation.set(v);

          this._startRotation.set(v);
        }

        start() {
          if (EDITOR) {
            this.resetCam(1);
            return;
          }
        }

        init() {
          macro.ENABLE_MULTI_TOUCH = true;

          if (this.enableTouch) {
            input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
            input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
            input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
            input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          }

          this.resetTargetRotation();
          Quat.fromEuler(this._rotation, this._targetRotation.x, this._targetRotation.y, this._targetRotation.z);

          if (this.target) {
            this._targetCenter.set(this.target.worldPosition);

            this._center.set(this._targetCenter);
          }

          this._radius = this.radius;
          this.limitRotation();

          if (this.enableScaleRadius && sys.platform == sys.Platform.DESKTOP_BROWSER) {
            input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          }
        }

        resetTargetRotation() {
          var targetRotation = this._targetRotation.set(this._startRotation);

          if (this.followTargetRotationY) {
            targetRotation = tempVec3_2.set(targetRotation);
            Quat.toEuler(tempVec3, this.target.worldRotation);
            targetRotation.y += tempVec3.y;
          }
        }

        onTouchStart(event) {
          this._touched = true;
        }

        onTouchMove(event) {
          if (!this._touched) return;
          var touch = event.touch;
          var touches = event.getAllTouches();
          /* scale radius for mobile multi touch */

          if (touches.length > 1 && !(_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.joystick) {
            var changedTouches = event.getTouches();
            var touch1 = null;
            var touch2 = null;

            if (changedTouches.length > 1) {
              touch1 = touches[0];
              touch2 = touches[1];
            } else {
              touch1 = touch;
              var diffID = touch1.getID();

              for (var i = 0; i < touches.length; i++) {
                var element = touches[i];

                if (element.getID() !== diffID) {
                  touch2 = element;
                  break;
                }
              }
            }

            touch1.getLocation(tempVec2);
            touch2.getLocation(tempVec2_2);
            var dis = Vec2.distance(tempVec2, tempVec2_2);
            var delta = dis - this.dis;
            this._targetRadius += this.radiusScaleSpeed * -Math.sign(delta) * 0.3;
            this._targetRadius = Math.min(this.maxRadius, Math.max(this.minRadius, this._targetRadius));
            this.dis = dis;
          }

          tempVec2 = touch.getDelta();
          this.setRotate(tempVec2);
        }

        onTouchEnd() {
          this._touched = false;
        }

        setRotate(v2) {
          Quat.fromEuler(tempQuat, this._targetRotation.x, this._targetRotation.y, this._targetRotation.z);
          Quat.rotateX(tempQuat, tempQuat, -v2.y * DeltaFactor);
          Quat.rotateAround(tempQuat, tempQuat, Vec3.UP, -v2.x * DeltaFactor);
          Quat.toEuler(this._targetRotation, tempQuat);
          this.limitRotation();
        }

        onMouseWheel(event) {
          var scrollY = event.getScrollY();
          this._targetRadius += this.radiusScaleSpeed * -Math.sign(scrollY);
          this._targetRadius = Math.min(this.maxRadius, Math.max(this.minRadius, this._targetRadius));
        }

        limitRotation() {
          var rotation = this._targetRotation;

          if (rotation.x < this.xRotationRange.x) {
            rotation.x = this.xRotationRange.x;
          } else if (rotation.x > this.xRotationRange.y) {
            rotation.x = this.xRotationRange.y;
          }

          rotation.z = 0;
        }

        lateUpdate(dt) {
          this.resetCam(dt);
        }

        resetCam(dt) {
          if (!this.target) return;
          var targetRotation = this._targetRotation;

          this._targetCenter.set(this.target.worldPosition);

          this._targetCenter.y += this.targetHeight;
          Quat.fromEuler(tempQuat, targetRotation.x, targetRotation.y, targetRotation.z);
          Quat.slerp(this._rotation, this._rotation, tempQuat, dt * 7 * this.rotateSpeed);
          Vec3.lerp(this._center, this._center, this._targetCenter, dt * 5 * this.followSpeed);
          this._radius = lerp(this._radius, this._targetRadius, dt * 10);
          Vec3.transformQuat(tempVec3, Vec3.FORWARD, this._rotation);
          Vec3.multiplyScalar(tempVec3, tempVec3, this._radius);
          tempVec3.add(this._center);
          this.node.position = tempVec3;
          this.node.lookAt(this._center);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enableTouch", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enableScaleRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "followSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "xRotationRange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(5, 70);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_target", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "targetHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "radiusScaleSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "minRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "maxRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "followTargetRotationY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "target", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "target"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "preview", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "preview"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "targetRotation", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "targetRotation"), _class2.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_startRotation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_targetRadius", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=da35a003e836e2400a193e0770037afda6474e43.js.map