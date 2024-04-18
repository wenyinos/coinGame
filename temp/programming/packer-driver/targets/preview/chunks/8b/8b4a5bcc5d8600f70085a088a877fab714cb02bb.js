System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, Vec2, UIOpacity, tween, Quat, ctrl, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, _tempVec3, _tempVec2, _tempQuat, rad, JoystickCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfctrl(extras) {
    _reporterNs.report("ctrl", "./InputCtrl", _context.meta, extras);
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
      UIOpacity = _cc.UIOpacity;
      tween = _cc.tween;
      Quat = _cc.Quat;
    }, function (_unresolved_2) {
      ctrl = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0df005HeCFHbLgcmwtx6QL2", "JoystickCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Vec2', 'UIOpacity', 'tween', 'Touch', 'Quat']);

      ({
        ccclass,
        property
      } = _decorator);
      _tempVec3 = new Vec3();
      _tempVec2 = new Vec2();
      _tempQuat = new Quat();
      rad = Math.PI / 180;

      _export("JoystickCtrl", JoystickCtrl = (_dec = ccclass('JoystickCtrl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = class JoystickCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "maxRadius", _descriptor, this);

          _initializerDefineProperty(this, "touchArea", _descriptor2, this);

          _initializerDefineProperty(this, "control", _descriptor3, this);

          _initializerDefineProperty(this, "indexArrow", _descriptor4, this);

          _initializerDefineProperty(this, "joyStick", _descriptor5, this);

          this.distance = 0;
          this.startPos = new Vec3();
          this.jumpBtn = null;
          this.arrowOp = null;
        }

        start() {
          this.init();
        }

        init() {
          this.joyStick.getPosition(this.startPos);
        }

        onEnable() {
          this.touchArea.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.touchArea.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.touchArea.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.touchArea.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
          this.arrowOp = this.indexArrow.getComponent(UIOpacity);

          if (!this.arrowOp) {
            this.arrowOp = this.indexArrow.addComponent(UIOpacity);
          }

          this.jumpBtn && this.jumpBtn.on(Node.EventType.TOUCH_END, this.jump, this);
          this.arrowOp.opacity = 0;
        }

        onDisable() {
          this.touchArea.off(Node.EventType.TOUCH_START, this.touchStart, this);
          this.touchArea.off(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.touchArea.off(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.touchArea.off(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
          this.jumpBtn && this.jumpBtn.off(Node.EventType.TOUCH_END, this.jump, this);
        }

        touchStart(touch) {
          if (!this.joyStick.active) return;
          (_crd && ctrl === void 0 ? (_reportPossibleCrUseOfctrl({
            error: Error()
          }), ctrl) : ctrl).joystick = true;
          tween(this.arrowOp).to(0.5, {
            opacity: 255
          }).start();
          this.joyStick.setWorldPosition(touch.getUILocation().x, touch.getUILocation().y, 0);
        }

        touchMove(touch) {
          if (!this.joyStick.active) return;
          touch.getUILocation(_tempVec2);
          this.joyStick.getWorldPosition(_tempVec3);
          _tempVec2.x -= _tempVec3.x, _tempVec2.y -= _tempVec3.y;
          this.distance = _tempVec2.lengthSqr();
          this.distance = Math.min(this.distance, this.maxRadius);

          _tempVec2.normalize();

          (_crd && ctrl === void 0 ? (_reportPossibleCrUseOfctrl({
            error: Error()
          }), ctrl) : ctrl).mag = this.distance / this.maxRadius * 1.2;
          (_crd && ctrl === void 0 ? (_reportPossibleCrUseOfctrl({
            error: Error()
          }), ctrl) : ctrl).h = _tempVec2.y, (_crd && ctrl === void 0 ? (_reportPossibleCrUseOfctrl({
            error: Error()
          }), ctrl) : ctrl).v = _tempVec2.x;

          _tempVec2.multiplyScalar(this.distance);

          var euler = -Math.atan2(_tempVec2.x, _tempVec2.y) / rad;
          this.indexArrow.rotation = Quat.fromAngleZ(_tempQuat, euler);
          this.control.setPosition(_tempVec2.x, _tempVec2.y);
        }

        jump() {
          (_crd && ctrl === void 0 ? (_reportPossibleCrUseOfctrl({
            error: Error()
          }), ctrl) : ctrl).jump = true;
        }

        touchEnd() {
          if (!this.joyStick.active) return;
          (_crd && ctrl === void 0 ? (_reportPossibleCrUseOfctrl({
            error: Error()
          }), ctrl) : ctrl).joystick = false;
          tween(this.arrowOp).to(0.6, {
            opacity: 0
          }).start();
          (_crd && ctrl === void 0 ? (_reportPossibleCrUseOfctrl({
            error: Error()
          }), ctrl) : ctrl).mag = 1;
          (_crd && ctrl === void 0 ? (_reportPossibleCrUseOfctrl({
            error: Error()
          }), ctrl) : ctrl).h = 0;
          (_crd && ctrl === void 0 ? (_reportPossibleCrUseOfctrl({
            error: Error()
          }), ctrl) : ctrl).v = 0;
          this.control.setPosition(Vec3.ZERO);
          this.joyStick.setPosition(this.startPos);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "touchArea", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "control", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "indexArrow", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "joyStick", [_dec5], {
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
//# sourceMappingURL=8b4a5bcc5d8600f70085a088a877fab714cb02bb.js.map