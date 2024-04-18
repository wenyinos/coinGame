System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Globals, _crd, GLOBALS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9449f1p6JZKw6/Ff9myo8uZ", "Globals", undefined);

      __checkObsolete__(['Camera', 'Canvas', 'Node']);

      Globals = class Globals {
        constructor() {
          this.canvas = [];
          this.cameras = [];
          this.layer2D = [];
          this.layer3D = [];
          this.player = void 0;
          this.isPause = false;
          this.isMove = false;
        }

      };
      GLOBALS = new Globals();

      _export("default", GLOBALS);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1eb89ba0bc44b374dea62254436c1c819ab80ba8.js.map