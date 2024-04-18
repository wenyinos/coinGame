System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, Clips, Props, aa, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, BaseView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfClips(extras) {
    _reporterNs.report("Clips", "../frame/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProps(extras) {
    _reporterNs.report("Props", "../frame/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaa(extras) {
    _reporterNs.report("aa", "../frame/FrameCore", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Clips = _unresolved_2.Clips;
      Props = _unresolved_2.Props;
    }, function (_unresolved_3) {
      aa = _unresolved_3.aa;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29938V4SlNABr3n+tOEsozR", "BaseView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BaseView", BaseView = (_dec = ccclass('BaseView'), _dec2 = property({
        displayOrder: 0,
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).View
      }), _dec3 = property({
        type: Node,

        visible() {
          return this.tweenView;
        },

        displayOrder: 0,
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).View
      }), _dec4 = property({
        visible() {
          return this.tweenView;
        },

        displayOrder: 0,
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).View
      }), _dec5 = property({
        displayOrder: 0,
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).View
      }), _dec6 = property({
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).Ad,
        tooltip: "show Banner on Start"
      }), _dec7 = property({
        visible() {
          return this.showBannerAd;
        },

        range: [0, 5],
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).Ad
      }), _dec8 = property({
        visible() {
          return this.showBannerAd;
        },

        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).Ad,
        tooltip: "hide Banner on Start"
      }), _dec9 = property({
        visible() {
          return this.showBannerAd;
        },

        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).Ad
      }), _dec10 = property({
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).Ad,
        tooltip: "show Intersitial Ad on Start"
      }), _dec11 = property({
        visible() {
          return this.showIntersitialAd;
        },

        range: [0, 5],
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).Ad
      }), _dec12 = property({
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).Ad,
        tooltip: "show video Ad on Start"
      }), _dec13 = property({
        visible() {
          return this.showVideoAd;
        },

        range: [0, 5],
        group: (_crd && Props === void 0 ? (_reportPossibleCrUseOfProps({
          error: Error()
        }), Props) : Props).Ad
      }), _dec(_class = (_class2 = class BaseView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tweenView", _descriptor, this);

          _initializerDefineProperty(this, "root", _descriptor2, this);

          _initializerDefineProperty(this, "tweenTime", _descriptor3, this);

          _initializerDefineProperty(this, "playBtnClip", _descriptor4, this);

          _initializerDefineProperty(this, "showBannerAd", _descriptor5, this);

          _initializerDefineProperty(this, "bannerDelay", _descriptor6, this);

          _initializerDefineProperty(this, "hideBannerOnClose", _descriptor7, this);

          _initializerDefineProperty(this, "displayinSmallscreen", _descriptor8, this);

          _initializerDefineProperty(this, "showIntersitialAd", _descriptor9, this);

          _initializerDefineProperty(this, "intersitialDelay", _descriptor10, this);

          _initializerDefineProperty(this, "showVideoAd", _descriptor11, this);

          _initializerDefineProperty(this, "videoDelay", _descriptor12, this);
        }

        onEnable() {
          this.playBtnClip && (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).sound.play((_crd && Clips === void 0 ? (_reportPossibleCrUseOfClips({
            error: Error()
          }), Clips) : Clips).btn);

          if (this.tweenView) {
            if (!this.root) {
              this.root = this.node;
              this.root.setScale(Vec3.ZERO);
              this.scheduleOnce(() => {
                (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
                  error: Error()
                }), aa) : aa).utils.fadeIn(this.root);
              });
            } else {
              this.root.setScale(Vec3.ZERO);
              (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
                error: Error()
              }), aa) : aa).utils.fadeIn(this.root);
            }
          }

          this.showAds();
        }

        onDisable() {
          if (this.hideBannerOnClose) {
            this.closeAd();
          }
        }

        close() {
          this.playBtnClip && (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).sound.play((_crd && Clips === void 0 ? (_reportPossibleCrUseOfClips({
            error: Error()
          }), Clips) : Clips).btn, 0.5);
          if (this.showBannerAd) this.closeAd();

          if (this.tweenView) {
            if (!this.root) this.root = this.node;
            (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).utils.fadeOut(this.root, () => {
              (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
                error: Error()
              }), aa) : aa).res.putNode(this.node);
            });
          } else {
            (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).res.putNode(this.node);
          }
        }

        showAds() {
          if (this.showBannerAd) {
            this.scheduleOnce(() => {
              this.showBanner();
            }, this.bannerDelay);
          }

          if (this.showIntersitialAd) {
            this.scheduleOnce(() => {
              this.showIntersitial();
            }, this.intersitialDelay);
          }

          if (this.showVideoAd) {
            this.scheduleOnce(() => {
              this.showVideo();
            }, this.bannerDelay);
          }
        }

        closeAd() {}

        showBanner() {}

        showVideo(CB) {
          if (CB === void 0) {
            CB = null;
          }
        }

        showIntersitial() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tweenView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "root", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tweenTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playBtnClip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "showBannerAd", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bannerDelay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "hideBannerOnClose", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "displayinSmallscreen", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "showIntersitialAd", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "intersitialDelay", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "showVideoAd", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "videoDelay", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=66f0a2e0fc9d96294a17020a873176dd6e26d609.js.map