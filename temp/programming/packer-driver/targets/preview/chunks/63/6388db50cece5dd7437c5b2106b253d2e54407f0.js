System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Sprite, Main, aa, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, startColor, colorRatio, color, LoadCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMain(extras) {
    _reporterNs.report("Main", "./Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaa(extras) {
    _reporterNs.report("aa", "./frame/FrameCore", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Main = _unresolved_2.Main;
    }, function (_unresolved_3) {
      aa = _unresolved_3.aa;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91714+LEbNFq5BWdU9PslLO", "LoadCtrl", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node', 'Sprite', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      startColor = 150;
      colorRatio = 255 - startColor;
      color = new Color(startColor, startColor, startColor);

      _export("LoadCtrl", LoadCtrl = (_dec = ccclass('LoadCtrl'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec(_class = (_class2 = class LoadCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "load", _descriptor, this);

          _initializerDefineProperty(this, "bg", _descriptor2, this);

          this.isload = true;
          this.fill = 0;
        }

        start() {
          this.bg.color = color;
        }

        closeLoad() {
          this.isload = false;
          (_crd && Main === void 0 ? (_reportPossibleCrUseOfMain({
            error: Error()
          }), Main) : Main).ins.initGame();
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).utils.clearUI(this.node);
        }

        update(deltaTime) {
          if (!this.isload) return;
          var rate = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).res.loadingRate;
          this.fill += 0.01;
          if (this.fill > rate) this.fill = rate;
          color.r = color.g = color.b = startColor + colorRatio * this.fill;
          this.bg.color = color;
          this.load.fillRange = this.fill;

          if (this.fill >= 0.99) {
            this.closeLoad();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "load", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
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
//# sourceMappingURL=6388db50cece5dd7437c5b2106b253d2e54407f0.js.map