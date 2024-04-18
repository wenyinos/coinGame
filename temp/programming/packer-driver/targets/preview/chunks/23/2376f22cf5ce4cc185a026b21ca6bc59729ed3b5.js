System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CTRL, RES, SOUND, GLOBALS, COMMONUTILS, _crd, FSM, aa;

  function _reportPossibleCrUseOfCTRL(extras) {
    _reporterNs.report("CTRL", "./input/InputCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRES(extras) {
    _reporterNs.report("RES", "./managers/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND(extras) {
    _reporterNs.report("SOUND", "./managers/SoundMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLOBALS(extras) {
    _reporterNs.report("GLOBALS", "./Globals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCOMMONUTILS(extras) {
    _reporterNs.report("COMMONUTILS", "./CommonUtils", _context.meta, extras);
  }

  _export("aa", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      CTRL = _unresolved_2.default;
    }, function (_unresolved_3) {
      RES = _unresolved_3.default;
    }, function (_unresolved_4) {
      SOUND = _unresolved_4.default;
    }, function (_unresolved_5) {
      GLOBALS = _unresolved_5.default;
    }, function (_unresolved_6) {
      COMMONUTILS = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6de7cULQvZAIZrlgTbrswg4", "FrameCore", undefined);

      __checkObsolete__(['Camera', 'Canvas', 'Node']);

      FSM = "";
      /**
       * @en : Awesome Agent is a frame work for Cocos Creator, aa is easy to type
       * @cn : aa 框架是Cocos Creator 的游戏框架, aa 是输入最快的
       */

      (function (_aa) {
        var res = _aa.res = _crd && RES === void 0 ? (_reportPossibleCrUseOfRES({
          error: Error()
        }), RES) : RES;
        var sound = _aa.sound = _crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
          error: Error()
        }), SOUND) : SOUND;
        var ctrl = _aa.ctrl = _crd && CTRL === void 0 ? (_reportPossibleCrUseOfCTRL({
          error: Error()
        }), CTRL) : CTRL;
        var utils = _aa.utils = _crd && COMMONUTILS === void 0 ? (_reportPossibleCrUseOfCOMMONUTILS({
          error: Error()
        }), COMMONUTILS) : COMMONUTILS;
        var fsm = _aa.fsm = FSM;
        var global = _aa.global = _crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
          error: Error()
        }), GLOBALS) : GLOBALS;
        var canvas = _aa.canvas = (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
          error: Error()
        }), GLOBALS) : GLOBALS).canvas;
        var cameras = _aa.cameras = (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
          error: Error()
        }), GLOBALS) : GLOBALS).cameras;
        var layer2D = _aa.layer2D = (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
          error: Error()
        }), GLOBALS) : GLOBALS).layer2D;
        var layer3D = _aa.layer3D = (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
          error: Error()
        }), GLOBALS) : GLOBALS).layer3D;
        var states = _aa.states = {
          /**
           * @en : if game is paused
           * @cn : 游戏是否暂停
           */
          isPause: true
        };
      })(aa || _export("aa", aa = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2376f22cf5ce4cc185a026b21ca6bc59729ed3b5.js.map