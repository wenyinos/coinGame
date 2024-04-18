System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, UIOpacity, Tween, Label, events, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ToastCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfevents(extras) {
    _reporterNs.report("events", "../frame/Enums", _context.meta, extras);
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
      director = _cc.director;
      UIOpacity = _cc.UIOpacity;
      Tween = _cc.Tween;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      events = _unresolved_2.events;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bff51GGa4lI24yTmwB2+eLC", "ToastView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'UIOpacity', 'Tween', 'view', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToastCtrl", ToastCtrl = (_dec = ccclass('ToastCtrl'), _dec2 = property(Label), _dec3 = property(UIOpacity), _dec(_class = (_class2 = class ToastCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "text", _descriptor, this);

          _initializerDefineProperty(this, "toast", _descriptor2, this);

          this._tw = new Tween();
          this.time = 1;
        }

        onEnable() {
          director.on((_crd && events === void 0 ? (_reportPossibleCrUseOfevents({
            error: Error()
          }), events) : events).Toast, this.showToast, this);
          this.toast.opacity = 0;

          this._tw.target(this.toast);

          this._tw.set({
            opacity: 0
          }).to(0.6, {
            opacity: 255
          }).delay(this.time).to(0.25, {
            opacity: 0
          });
        }

        onDisable() {
          director.off((_crd && events === void 0 ? (_reportPossibleCrUseOfevents({
            error: Error()
          }), events) : events).Toast, this.showToast, this);
        }
        /* show toast */


        showToast(text, time) {
          if (time === void 0) {
            time = 2;
          }

          this.time = time;
          this.text.string = text;

          this._tw.start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toast", [_dec3], {
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
//# sourceMappingURL=3e1da7ed00fa204d3cf2fe914cd6ef9a2c32c638.js.map