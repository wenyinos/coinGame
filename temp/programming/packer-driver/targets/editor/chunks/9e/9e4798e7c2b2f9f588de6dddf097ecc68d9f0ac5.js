System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, CCString, JsonAsset, Material, Prefab, SpriteAtlas, SpriteFrame, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _dec6, _class4, _class5, _descriptor7, _descriptor8, _descriptor9, _dec7, _dec8, _class7, _class8, _descriptor10, _descriptor11, _crd, ccclass, property, adConfig, shareContent, shareConfig, collisions, ui, itemState, DataType, events, anms, StorageKeys, Key, Props, Clips, AssetType;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      CCString = _cc.CCString;
      JsonAsset = _cc.JsonAsset;
      Material = _cc.Material;
      Prefab = _cc.Prefab;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39f4cB5mBBD+L0+wGMDYvJe", "Enums", undefined);

      __checkObsolete__(['AudioClip', 'CCString', 'JsonAsset', 'Material', 'Prefab', 'SpriteAtlas', 'SpriteFrame', '_decorator', '__private']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("adConfig", adConfig = (_dec = ccclass('adConfig'), _dec2 = property({
        type: CCString
      }), _dec3 = property({
        type: CCString
      }), _dec4 = property({
        type: CCString
      }), _dec5 = property({
        type: CCString
      }), _dec(_class = (_class2 = class adConfig {
        constructor() {
          _initializerDefineProperty(this, "platform", _descriptor, this);

          _initializerDefineProperty(this, "id", _descriptor2, this);

          _initializerDefineProperty(this, "bannerId", _descriptor3, this);

          _initializerDefineProperty(this, "intersitialId", _descriptor4, this);

          _initializerDefineProperty(this, "videoId", _descriptor5, this);

          _initializerDefineProperty(this, "customId", _descriptor6, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "platform", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "platform";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "id", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bannerId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "intersitialId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "videoId", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "customId", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _export("shareContent", shareContent = (_dec6 = ccclass('shareContent'), _dec6(_class4 = (_class5 = class shareContent {
        constructor() {
          _initializerDefineProperty(this, "shareId", _descriptor7, this);

          _initializerDefineProperty(this, "shareLink", _descriptor8, this);

          _initializerDefineProperty(this, "shareText", _descriptor9, this);
        }

      }, (_descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "shareId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "shareLink", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "shareText", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "share tittle";
        }
      })), _class5)) || _class4));

      _export("shareConfig", shareConfig = (_dec7 = ccclass('shareConfig'), _dec8 = property({
        type: shareContent
      }), _dec7(_class7 = (_class8 = class shareConfig {
        constructor() {
          _initializerDefineProperty(this, "platform", _descriptor10, this);

          _initializerDefineProperty(this, "sharePics", _descriptor11, this);
        }

      }, (_descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "platform", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "platform";
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class8.prototype, "sharePics", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class8)) || _class7));

      _export("collisions", collisions = {
        DEFAULT: 1,
        player: 2,
        trap: 4,
        water: 8,
        brick: 16,
        enemy: 32
      });

      /* for ui prefabs config */
      _export("ui", ui = {
        JoystickView: {
          name: 'JoystickView',
          layer: 1,
          clear: false
        },
        ActionView: {
          name: 'ActionView',
          layer: 2,
          clear: false
        },
        ConfigView: {
          name: 'ConfigView',
          layer: 3,
          clear: false
        },
        CoinView: {
          name: 'CoinView',
          layer: 4,
          clear: false
        },
        CoinBarView: {
          name: 'CoinBarView',
          layer: 5,
          clear: false
        },
        ToastView: {
          name: 'ToastView',
          layer: 6,
          clear: false
        }
      });

      _export("itemState", itemState = /*#__PURE__*/function (itemState) {
        itemState[itemState["OWNEQUIPED"] = 0] = "OWNEQUIPED";
        itemState[itemState["EQUIPED"] = 1] = "EQUIPED";
        itemState[itemState["NEWEQUIP"] = 2] = "NEWEQUIP";
        itemState[itemState["UNEQUIPED"] = 3] = "UNEQUIPED";
        return itemState;
      }({}));

      _export("DataType", DataType = /*#__PURE__*/function (DataType) {
        DataType[DataType["STRING"] = 0] = "STRING";
        DataType[DataType["NUMBER"] = 1] = "NUMBER";
        DataType[DataType["OBJECT"] = 2] = "OBJECT";
        return DataType;
      }({}));

      _export("events", events = {
        changeCharacter: "changeCharacter",
        shakeCam: "shakeCam",
        playerAnm: "playerAnm",
        initLevel: "initLevel",
        gameWin: "gameWin",
        startDraw: "startDraw",
        finishDraw: "finishDraw",
        showResult: "showResult",
        buildMap: "buildMap",
        paperOcacity: "paperOcacity",
        editMap: "editMap",
        playMap: "playMap",
        rollBg: "rollBg",
        changeTop: "changeTop",
        catWatch: "catWatch",
        Toast: "toast",
        Anm: "anm"
      });

      _export("anms", anms = {
        cry: "cry",
        idle: "idle",
        hurt: "hurt",
        happy: "happy"
      });

      _export("StorageKeys", StorageKeys = {
        CharacterData: "CharacterData"
      });
      /* keys for storage */


      _export("Key", Key = {
        MapData: "MapData",
        CurrentPen: "CurrentPen",
        Sound: "Sound",
        Bgm: "Bgm",
        Pens: "Pens",
        Pause: "Pause",
        Timer: "Timer",
        Level: "Level",
        Frost: "Frost",
        Undo: "Undo",
        Energy: "Energy",
        Star: "Star"
      });

      _export("Props", Props = {
        Scenes: "Scenes",
        Layers: "Layers",
        Comps: "Components",
        ShareConfig: "ShareConfig",
        Setting: "Setting",
        View: "View",
        AdConfig: "AdConfig",
        Ad: "Advertisement"
      });

      _export("Clips", Clips = {
        hurt: "hurt",
        happy: "happy",
        bgm: "bgm",
        photo: "photo",
        counter: "counter",
        btn: "btn",
        touch: "touch",
        gold: "gold",
        reward: "reward",
        merge: "merge",
        win: "win",
        lose: "lose"
      });

      /**
       * assettypes and paths
       */
      _export("AssetType", AssetType = {
        Prefab: {
          type: Prefab,
          path: "Preload/Prefabs"
        },
        Sprite: {
          type: SpriteFrame,
          path: "Preload/Sprite"
        },
        UiPrefab: {
          type: Prefab,
          path: "Preload/UI"
        },
        Json: {
          type: JsonAsset,
          path: "Preload/Jsons/"
        },
        Sound: {
          type: AudioClip,
          path: "Preload/Clips/"
        },
        Atlas: {
          type: SpriteAtlas,
          path: "Preload/Atlas/"
        },
        Material: {
          type: Material,
          path: "Preload/Materials/"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e4798e7c2b2f9f588de6dddf097ecc68d9f0ac5.js.map