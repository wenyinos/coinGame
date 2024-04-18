System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, instantiate, Node, Prefab, KeyBindingView, getComboName, aa, BaseView, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ctrl, KeyConfigView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfKeyBindingView(extras) {
    _reporterNs.report("KeyBindingView", "./KeyBindingView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetComboName(extras) {
    _reporterNs.report("getComboName", "../frame/input/InputCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaa(extras) {
    _reporterNs.report("aa", "../frame/FrameCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionConfig(extras) {
    _reporterNs.report("ActionConfig", "../combat/ctrl/ActionConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseView(extras) {
    _reporterNs.report("BaseView", "./BaseView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      KeyBindingView = _unresolved_2.KeyBindingView;
    }, function (_unresolved_3) {
      getComboName = _unresolved_3.getComboName;
    }, function (_unresolved_4) {
      aa = _unresolved_4.aa;
    }, function (_unresolved_5) {
      BaseView = _unresolved_5.BaseView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "200246kHsNM7bx45gYyFlVL", "KeyConfigView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      ctrl = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
        error: Error()
      }), aa) : aa).ctrl;

      _export("KeyConfigView", KeyConfigView = (_dec = ccclass('KeyConfigView'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = (_class2 = class KeyConfigView extends (_crd && BaseView === void 0 ? (_reportPossibleCrUseOfBaseView({
        error: Error()
      }), BaseView) : BaseView) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "bindingView", _descriptor2, this);

          _initializerDefineProperty(this, "layout", _descriptor3, this);

          this.currentBinding = null;
          this._bindingViews = [];
          this.actionConfig = null;
        }

        init(action) {
          this.actionConfig = action;
        }

        onEnable() {
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.isPause = true;
          director.on("KeyBindingSelect", this.onSelect, this);
          let actions = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.getKeys();
          const viewLenth = this._bindingViews.length;

          if (viewLenth < actions.length) {
            for (var i = viewLenth; i < actions.length; i++) {
              const newBindingView = instantiate(this.bindingView);
              newBindingView.parent = this.layout;
              const bindingView = newBindingView.getComponent(_crd && KeyBindingView === void 0 ? (_reportPossibleCrUseOfKeyBindingView({
                error: Error()
              }), KeyBindingView) : KeyBindingView);

              this._bindingViews.push(bindingView);
            }
          }

          this._bindingViews.forEach((view, i) => {
            const action = actions[i];
            view.bindingName = action;
            const config = ctrl.get(action);

            if (config) {
              const keyLabel = (_crd && getComboName === void 0 ? (_reportPossibleCrUseOfgetComboName({
                error: Error()
              }), getComboName) : getComboName)(config.combo);
              view.keyName = keyLabel;
            }
          });

          this.bg && this.bg.on(Node.EventType.TOUCH_END, this.clearSelect, this);
        }

        onDisable() {
          if (this.currentBinding) {
            this.currentBinding.color = false;
          }

          ctrl.clearBinding();
          this.bg && this.bg.off(Node.EventType.TOUCH_END, this.clearSelect, this);
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.isPause = false;
        }

        clearSelect() {
          if (this.currentBinding) {
            this.currentBinding.color = false;
            this.currentBinding = null;
          }

          ctrl.clearBinding();
        }

        onSelect(binding) {
          if (this.currentBinding) {
            this.currentBinding.color = false;
          }

          ctrl.updateBinding(binding.nameLabel.string, binding.keyLabel);
          this.currentBinding = binding;
          binding.color = true;
        }

        close() {
          super.close();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bindingView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec4], {
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
//# sourceMappingURL=e2c383d6702adbe1a4d068e3b0d9f281e0aa678b.js.map