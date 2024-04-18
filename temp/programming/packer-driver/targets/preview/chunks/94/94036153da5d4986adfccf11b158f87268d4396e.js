System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioSourceComponent, RES, SoundMgr, _crd, SOUND;

  function _reportPossibleCrUseOfRES(extras) {
    _reporterNs.report("RES", "./ResMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }, function (_unresolved_2) {
      RES = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf129C5rEdIyKQStT72J8k4", "SoundMgr", undefined);

      __checkObsolete__(['AudioSourceComponent', '_decorator']);

      SoundMgr = class SoundMgr {
        constructor() {
          /**
           * @en : for bgm
           * @cn : bgm
           */
          this._audioComp = new AudioSourceComponent();

          /**
           * @en : for loop audio effect
           * @cn : 循环音效
           */
          this._audioLoopComp = new AudioSourceComponent();

          /**
           * @en : for one-time audio effect
           * @cn : 单次音效
           */
          this._effectComp = new AudioSourceComponent();
          this._curLoopAudioName = "";
        }

        /**
         * @en : play bgm
         * @cn : 播放背景音乐
         * @param {string} audio
         * @param {boolean} isLoop
         */
        startBgm(audio, isLoop) {
          if (isLoop === void 0) {
            isLoop = true;
          }

          if (!audio && this._audioComp.clip) {
            this._audioComp.play();

            return;
          }

          if (!audio) return;
          var clip = (_crd && RES === void 0 ? (_reportPossibleCrUseOfRES({
            error: Error()
          }), RES) : RES).getClip(audio);
          this._audioComp.clip = clip;
          this._audioComp.loop = isLoop;
          this._audioComp.volume = 0.5;

          this._audioComp.play();
        }
        /**
         * @en : stop bgm
         * @cn : 停止背景音乐
         */


        stopBgm() {
          this._audioComp.stop();
        }
        /**
         * @en : play audio clip in one time, for effect usage
         * @cn : 播放一次音效
         * @param {string} clip
         * @param {*} scale
         */


        play(clip, scale) {
          if (scale === void 0) {
            scale = 0.6;
          }

          this._effectComp.playOneShot((_crd && RES === void 0 ? (_reportPossibleCrUseOfRES({
            error: Error()
          }), RES) : RES).getClip(clip), scale);
        }
        /**
         * @description: Play loop Audio
         * @param {string} audio
         * @return {*}
         */


        loop(audio) {
          var clip = (_crd && RES === void 0 ? (_reportPossibleCrUseOfRES({
            error: Error()
          }), RES) : RES).getClip(audio);

          this._audioLoopComp.stop();

          this._audioLoopComp.clip = clip;
          this._audioLoopComp.loop = true;

          this._audioLoopComp.play();

          this._curLoopAudioName = audio;
        }

        stoploop() {
          this._audioLoopComp.stop();
        }

      };
      SOUND = new SoundMgr();

      _export("default", SOUND);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=94036153da5d4986adfccf11b158f87268d4396e.js.map