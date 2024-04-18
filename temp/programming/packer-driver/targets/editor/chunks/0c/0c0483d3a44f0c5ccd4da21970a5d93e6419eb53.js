System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, director, Label, Node, Sprite, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, selected, unSelected, KeyBindingView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77181mmK35CCIwYssk05KpT", "KeyBindingView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'director', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      selected = new Color(100, 100, 100, 200);
      unSelected = new Color(100, 100, 100, 100);

      _export("KeyBindingView", KeyBindingView = (_dec = ccclass('KeyBindingView'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class KeyBindingView extends Component {
        constructor(...args) {
          super(...args);
          this.key = "";

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor2, this);

          _initializerDefineProperty(this, "keyLabel", _descriptor3, this);
        }

        onEnable() {
          this.bg.node.on(Node.EventType.TOUCH_END, this.onSelect, this);
          director.on("duplicateKey", this.clearKeyName, this);
        }

        onDisable() {
          this.bg.node.off(Node.EventType.TOUCH_END, this.onSelect, this);
          director.off("duplicateKey", this.clearKeyName, this);
        }
        /**
         * @en : clear key if values are the same
         * @cn : 清楚相同的按键信息
         * @param {string} v
         */


        clearKeyName(v) {
          if (this.key == v) {
            this.keyName = "";
          }
        }

        set bindingName(v) {
          if (this.nameLabel) {
            this.nameLabel.string = v;
            this.key = v;
          }
        }

        set keyName(v) {
          if (this.keyLabel) {
            this.keyLabel.string = v;
          }
        }

        onSelect() {
          this.color = true;
          director.emit("KeyBindingSelect", this);
        }

        set color(select) {
          this.bg.color = select ? selected : unSelected;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "keyLabel", [_dec4], {
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
//# sourceMappingURL=0c0483d3a44f0c5ccd4da21970a5d93e6419eb53.js.map