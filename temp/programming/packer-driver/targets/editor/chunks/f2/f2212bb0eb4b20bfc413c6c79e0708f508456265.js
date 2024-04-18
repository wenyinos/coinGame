System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, KeyCode, Label, sys, aa, events, ui, KeyConfigView, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ctrl, ActionConfig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfaa(extras) {
    _reporterNs.report("aa", "../../frame/FrameCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyEvent(extras) {
    _reporterNs.report("KeyEvent", "../../frame/input/InputCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfevents(extras) {
    _reporterNs.report("events", "../../frame/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfui(extras) {
    _reporterNs.report("ui", "../../frame/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyConfigView(extras) {
    _reporterNs.report("KeyConfigView", "../../view/KeyConfigView", _context.meta, extras);
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
      KeyCode = _cc.KeyCode;
      Label = _cc.Label;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      aa = _unresolved_2.aa;
    }, function (_unresolved_3) {
      events = _unresolved_3.events;
      ui = _unresolved_3.ui;
    }, function (_unresolved_4) {
      KeyConfigView = _unresolved_4.KeyConfigView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84c95pUlIVN9qEiJq1/q9lF", "ActionConfig", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'KeyCode', 'Label', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      ctrl = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
        error: Error()
      }), aa) : aa).ctrl;

      _export("ActionConfig", ActionConfig = (_dec = ccclass('ActionConfig'), _dec2 = property(Label), _dec(_class = (_class2 = class ActionConfig extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labels", _descriptor, this);

          this.time = 0;
          this._moveForward = {
            down: () => {
              ctrl.h = 1;
            },
            up: () => {
              ctrl.h > 0 && (ctrl.h = 0);
            }
          };
          this._moveBackward = {
            down: () => {
              ctrl.h = -1;
            },
            up: () => {
              ctrl.h < 0 && (ctrl.h = 0);
            }
          };
          this._moveLeft = {
            down: () => {
              ctrl.v = -1;
            },
            up: () => {
              ctrl.v < 0 && (ctrl.v = 0);
            }
          };
          this._moveRight = {
            down: () => {
              ctrl.v = 1;
            },
            up: () => {
              ctrl.v > 0 && (ctrl.v = 0);
            }
          };
          this._danceAction = {
            down: () => {
              this.jump();
            }
          };
          this._rapAction = {
            down: () => {
              this.rap();
            }
          };
          this._basketballAction = {
            down: () => {
              this.ball();
            }
          };
          this._skillConfigs = {
            dance: {
              time: 0,
              cd: 5
            },
            rap: {
              time: 0,
              cd: 5
            },
            basketball: {
              time: 0,
              cd: 5
            }
          };
        }

        onEnable() {
          if (sys.isMobile) return;
          ctrl.add("forward", [KeyCode.KEY_W], this._moveForward, this.labels[0]).add("backward", [KeyCode.KEY_S], this._moveBackward, this.labels[1]).add("left", [KeyCode.KEY_A], this._moveLeft, this.labels[2]).add("right", [KeyCode.KEY_D], this._moveRight, this.labels[3]).add("dance", [KeyCode.KEY_X], this._danceAction, this.labels[4]).add("rap", [KeyCode.KEY_C], this._rapAction, this.labels[5]).add("basketball", [KeyCode.KEY_K], this._basketballAction, this.labels[6]);
        }

        onDisable() {
          if (sys.isMobile) return;
          ctrl.remove("forward").remove("backward").remove("left").remove("right").remove("dance").remove("rap").remove("ball");
        }

        async showConfig() {
          const configView = await (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).res.getUI((_crd && ui === void 0 ? (_reportPossibleCrUseOfui({
            error: Error()
          }), ui) : ui).ConfigView);
          configView.getComponent(_crd && KeyConfigView === void 0 ? (_reportPossibleCrUseOfKeyConfigView({
            error: Error()
          }), KeyConfigView) : KeyConfigView).init(this);
        }

        rap() {
          if ((_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.isPlaying) return;
          director.emit((_crd && events === void 0 ? (_reportPossibleCrUseOfevents({
            error: Error()
          }), events) : events).playerAnm, "rap");
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.isPlaying = true;
          this.time = 3.5;
        }

        jump() {
          if ((_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.isPlaying) return;
          director.emit((_crd && events === void 0 ? (_reportPossibleCrUseOfevents({
            error: Error()
          }), events) : events).playerAnm, "dance");
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.isPlaying = true;
          this.time = 4;
        }

        ball() {
          if ((_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.isPlaying) return;
          director.emit((_crd && events === void 0 ? (_reportPossibleCrUseOfevents({
            error: Error()
          }), events) : events).playerAnm, "basketball");
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).ctrl.isPlaying = true;
          this.time = 3.5;
        }

        update(dt) {
          if (this.time <= 0) {
            (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).ctrl.isPlaying = false;
          } else {
            this.time -= dt;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labels", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2212bb0eb4b20bfc413c6c79e0708f508456265.js.map