System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _class2, _crd, ccclass, TimeScale;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cad5S7g31GLZJ6V5nmVIVQ", "TimeScale", undefined);
      /*
       * @Author: your name
       * @Date: 2022-01-20 11:26:15
       * @LastEditTime: 2023-08-30 10:25:04
       * @LastEditors: chenyang.sun chenyang.sun@cocos.com
       * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
       * @FilePath: \AssaHunterMaster\assets\Scripts\DirectorOverwrite.ts
       */


      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass
      } = _decorator);

      _export("TimeScale", TimeScale = (_dec = ccclass('TimeScale'), _dec(_class = (_class2 = class TimeScale extends Component {
        start() {
          const originalTick = director.tick;

          director.tick = dt => {
            dt *= TimeScale.scale;
            originalTick.call(director, dt);
          };
        }

      }, _class2.scale = 1, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be91296bf07b461458382ebd9f2fe68fce06aae2.js.map