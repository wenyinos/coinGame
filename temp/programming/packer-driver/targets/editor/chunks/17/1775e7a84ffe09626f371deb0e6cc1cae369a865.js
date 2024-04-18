System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, ImageAsset, instantiate, NodePool, Texture2D, AssetType, GLOBALS, ResMgr, _crd, bundle, RES;

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiInterface(extras) {
    _reporterNs.report("uiInterface", "../Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLOBALS(extras) {
    _reporterNs.report("GLOBALS", "../Globals", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      ImageAsset = _cc.ImageAsset;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
      Texture2D = _cc.Texture2D;
    }, function (_unresolved_2) {
      AssetType = _unresolved_2.AssetType;
    }, function (_unresolved_3) {
      GLOBALS = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d193Ozp4FDF4owOBNeNc72", "ResMgr", undefined);

      __checkObsolete__(['AssetManager', 'assetManager', 'AudioClip', 'ImageAsset', 'instantiate', 'Node', 'NodePool', 'Prefab', 'SpriteAtlas', 'SpriteFrame', 'Texture2D', 'TextureCube', 'Vec3']);

      bundle = "Bundle";
      /**
       * @Description: resources manager and pool manager
       * @return {*}
       */

      ResMgr = class ResMgr {
        constructor() {
          this._jsonAssetMap = {};
          this._clipMap = {};
          this._uiMap = {};
          this._abBundleMap = {};
          this._atlasMap = {};
          this._textureCubeMap = {};
          this._spriteMap = {};
          this._textureMap = {};
          this._loadStemp = null;
          this.loadTime = 0;
          this._totalTime = 0;
          this._dictPool = {};
          this._dictPrefab = {};
          this.loadingRate = 0;
          this._debug = false;
        }

        /**
         * @description: get the node from the pool
         * @param {Prefab} prefab
         * @param {Node} parent
         * @param {Vec3} pos
         * @return {*}
         */
        getNode(prefab, parent, pos) {
          let tempPre;
          let name;

          if (typeof prefab === 'string') {
            tempPre = this._dictPrefab[prefab];
            name = prefab;

            if (!tempPre) {
              console.log("Pool invalid prefab name = ", name);
              return null;
            }
          } else {
            tempPre = prefab;
            name = prefab.data.name;
          }

          let node = null;

          if (this._dictPool.hasOwnProperty(name)) {
            //own this pool
            let pool = this._dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(tempPre);
            }
          } else {
            //create new pool
            let pool = new NodePool();
            this._dictPool[name] = pool;
            node = instantiate(tempPre);
          }

          if (parent) {
            node.parent = parent;
            node.active = true;
            if (pos) node.position = pos;
          }

          return node;
        }
        /**
         * @description: put the node into the pool
         * @param {Node} node
         * @param {*} isActive
         * @return {*}
         */


        putNode(node, isActive = false) {
          if (!node) {
            return;
          }

          let name = node.name;
          let pool = null; // node.active = isActive

          if (this._dictPool.hasOwnProperty(name)) {
            pool = this._dictPool[name];
          } else {
            pool = new NodePool();
            this._dictPool[name] = pool;
          }

          pool.put(node);
        }
        /**
         * @description: clear the pool based on name
         * @param {string} name
         * @return {*}
         */


        clearPool(name) {
          if (this._dictPool.hasOwnProperty(name)) {
            let pool = this._dictPool[name];
            pool.clear();
          }
        }
        /**
         * @en : set prefab to dictionary
         * @cn : 目录中存储预支体信息
         * @param {string} name
         * @param {Prefab} prefab
         */


        setPrefab(name, prefab) {
          if (!this._dictPrefab[name]) {
            this._dictPrefab[name] = prefab;
          }
        }

        clearDict() {
          this._dictPrefab = {};
        }

        printTimer(name = "", end = false) {
          this.loadTime = Date.now() - this._loadStemp;
          this._loadStemp = Date.now();
          this._totalTime += this.loadTime;
          console.log(name + "，load time===", this.loadTime, "ms");

          if (end) {
            console.log("Load finish, total time===", this._totalTime, "ms");
          }
        }
        /**
         * @description: Load assetbundle based on index
         * @param {number} index
         * @param {number} ratio
         * @return {*}
         */


        async loadBundle(index, ratio) {
          if (!this._loadStemp) this._loadStemp = Date.now();
          const name = bundle + index;
          return new Promise((resolve, reject) => {
            if (this._abBundleMap[index]) {
              resolve && resolve();
            }

            assetManager.loadBundle(name, (err, bundle) => {
              if (err) {
                const str = "bundle" + index + " load error, error==" + err;
                console.log(str);
              } else {
                this._abBundleMap[index] = bundle;
                this.printTimer("bundle" + index + "__" + "load success");
                this.loadingRate += ratio;
                resolve && resolve();
              }
            });
          });
        }
        /**
         * @name: Load any res
         * @param {index} bunlde index
         * @param {type} res type from AssetType
         * @param {ratio} Res Loading ratiro, make sure the amount of all ratios is less than 1.0
         */


        async loadRes(index, type, ratio = 0) {
          const rate = this.loadingRate;
          const self = this;
          return new Promise((resolve, reject) => {
            this._abBundleMap[index].loadDir(type.path, type.type, (finished, total) => {
              // this._loadUtils.setValue(idx, finished / total); 
              if (ratio > 0) this.loadingRate = rate + ratio * finished / total;
            }, (err, assets) => {
              if (err) {
                const str = "Res Error ===" + err;
                console.log(str);
                resolve && resolve();
              }

              let asset;

              switch (type) {
                case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                  error: Error()
                }), AssetType) : AssetType).UiPrefab:
                  for (let i = 0; i < assets.length; i++) {
                    asset = assets[i];
                    const name = asset.data.name;
                    this.setPrefab(name, asset);
                    console.log("ui prefab name==", name);
                  }

                  break;

                case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                  error: Error()
                }), AssetType) : AssetType).Prefab:
                  for (let i = 0; i < assets.length; i++) {
                    asset = assets[i];
                    this.setPrefab(asset.data.name, asset);
                    this._debug && console.log("prefab name==", asset.data.name);
                  }

                  break;

                case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                  error: Error()
                }), AssetType) : AssetType).Sound:
                  for (let i = 0; i < assets.length; i++) {
                    asset = assets[i];
                    this._debug && console.log("clip name==", asset.name);
                    if (!self._clipMap[asset.name]) self._clipMap[asset.name] = asset;
                  }

                  break;

                case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                  error: Error()
                }), AssetType) : AssetType).Sprite:
                  for (let i = 0; i < assets.length; i++) {
                    asset = assets[i];
                    console.log("sprite name==", asset.name);
                    if (!this._spriteMap[asset.name]) this._spriteMap[asset.name] = asset;
                  }

                  break;

                case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                  error: Error()
                }), AssetType) : AssetType).Json:
                  for (let i = 0; i < assets.length; i++) {
                    asset = assets[i];
                    this._debug && console.log("json name==", asset.name);
                    if (!self._jsonAssetMap[asset.name]) self._jsonAssetMap[asset.name] = asset.json;
                  }

                  break;

                case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                  error: Error()
                }), AssetType) : AssetType).Atlas:
                  for (let i = 0; i < assets.length; i++) {
                    asset = assets[i];
                    this._debug && console.log("atlas name==", asset.name);
                    if (!self._atlasMap[asset.name]) self._atlasMap[asset.name] = asset;
                  }

                  break;
              }

              self.printTimer("Bundle" + index + "__" + type.path + "loaded success");
              resolve && resolve();
            });
          });
        }

        async loadBgm() {
          let self = this;
          return new Promise((resolve, reject) => {
            this._abBundleMap[5].load("bgm", function (err, bgm) {
              if (err) {
                console.log("Error info===", err);
                resolve && resolve();
              }

              if (!self._clipMap[bgm.name]) self._clipMap[bgm.name] = bgm;
              resolve && resolve();
            });
          });
        }
        /**
        * @name: load any prefab
        * @param {index} bunlde index
        * @param {type} res type
        * @param {ratio} Res Loading ratiro, make sure the amount of all ratios is less than 1.0
        */


        async loadPrefab(info) {
          const rate = this.loadingRate;
          return new Promise((resolve, reject) => {
            this._abBundleMap[info.bundle].load(info.path + info.name, function (err, Prefab) {
              if (err) {
                console.log("wrong prefab info ===", err);
                resolve && resolve();
              }

              this.setPrefab(info.name, Prefab);
              resolve && resolve();
            });
          });
        }
        /** 
         * pre load&&make prefabs
        */


        async preloadRes(name, count, ratio = 0) {
          const rate = this.loadingRate;
          return new Promise((resolve, reject) => {
            let pre = this._dictPrefab[name];

            for (let i = 0; i < count; i++) {
              this.putNode(instantiate(pre));
            }

            if (ratio > 0) this.loadingRate = rate + ratio;
            this.printTimer("preload_" + name);
            resolve && resolve();
          });
        }

        getSprites(name) {
          return this._spriteMap[name] || null;
        }

        getAtlas(name) {
          return this._atlasMap[name];
        }

        async getUI(Path, Parent) {
          if (Path.clear) {
            if (!Parent && (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
              error: Error()
            }), GLOBALS) : GLOBALS).layer2D[Path.layer].children[0]) {
              if ((_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
                error: Error()
              }), GLOBALS) : GLOBALS).layer2D[Path.layer].children[0].name == Path.name) return;
              this.putNode((_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
                error: Error()
              }), GLOBALS) : GLOBALS).layer2D[Path.layer].children[0]);
            }
          }

          let ParentNode = Parent ? Parent : (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
            error: Error()
          }), GLOBALS) : GLOBALS).layer2D[Path.layer];
          return await this.getPrefab(Path, ParentNode);
        }

        putUI(Path) {
          const node = (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
            error: Error()
          }), GLOBALS) : GLOBALS).layer2D[Path.layer].getChildByName(Path.name);

          if (node) {
            this.putNode(node);
          }
        }

        async getPrefab(prefabPath, parent) {
          if (this._dictPrefab[prefabPath.name]) {
            return this.getNode(prefabPath.name, parent);
          }

          await this.loadPrefab(prefabPath);
          return this.getNode(prefabPath.name, parent);
        }
        /**
         * @en : get json asset that loaded
         * @cn : 获取加载过的json
         * @param {string} name
         */


        getJson(name) {
          return this._jsonAssetMap[name];
        }
        /**
         * @en : get clip that loaded
         * @cn : 获取加载过的clip
         * @param {string} name
         */


        getClip(name) {
          return this._clipMap[name];
        }
        /**
         * @en : get texture that loaded
         * @cn : 获取加载过的texture
         * @param {string} name
         */


        getTexture(name) {
          return this._textureMap[name];
        }
        /**
         * @en : get texturecube that loaded
         * @cn : 获取加载过的texturecube
         * @param {string} name
         */


        getTextureCube(name) {
          return this._textureCubeMap[name];
        }
        /**
         * @Date: 2022-08-03 12:25:53
         * @LastEditors: iwae
         * @description: 通过ImageAsset 创建一个Texture2D
         * @param {ImageAsset} imgAsset
         */


        createTexture2DWtihImageAsset(imgAsset, addRef = true) {
          let texture = null;
          let id;

          if (imgAsset._uuid != "''" && imgAsset._uuid != null && imgAsset._uuid.length > 0) {
            id = imgAsset._uuid;
          } else {
            id = imgAsset.name;
          }

          const uuid = this.getTexture2DUUID(id);

          if (assetManager.assets.has(uuid)) {
            texture = assetManager.assets.get(uuid); // let image = texture.image;
            // image.addRef();
          } else {
            console.log("not exist", uuid);
            texture = new Texture2D();
            texture.image = imgAsset; // imgAsset.addRef();

            texture._uuid = uuid;
            texture._nativeUrl = '';
            assetManager.assets.add(texture._uuid, texture);

            assetManager.dependUtil._depends.add(texture._uuid, {
              deps: [imgAsset._uuid],
              nativeDep: []
            });

            texture.setMipFilter(Texture2D.Filter.NONE);
            texture.setFilters(Texture2D.Filter.LINEAR, Texture2D.Filter.LINEAR);
            texture.setWrapMode(Texture2D.WrapMode.CLAMP_TO_EDGE, Texture2D.WrapMode.CLAMP_TO_EDGE);
          }

          if (addRef) {
            texture.addRef();
          }

          return texture;
        }

        getNewImageAsset(url, nativeAsset) {
          let uuid = url;
          let imgAsset;

          if (assetManager.assets.has(uuid)) {
            console.log("exist imgae", uuid);
            imgAsset = assetManager.assets.get(uuid);
          } else {
            console.log("new imgae", uuid);
            imgAsset = nativeAsset ? new ImageAsset(nativeAsset) : new ImageAsset();
            imgAsset._uuid = uuid;
            assetManager.assets.add(imgAsset._uuid, imgAsset);
            imgAsset._nativeUrl = imgAsset._uuid;

            assetManager.dependUtil._depends.add(imgAsset._uuid, {
              deps: [],
              nativeDep: []
            });
          }

          imgAsset.addRef();
          return imgAsset;
        }

        getSpriteFrameUUID(key) {
          return `${key}@f9941`;
        }

        getTexture2DUUID(key) {
          return `${key}@6c48a`;
        }

        getImageUUID(key) {
          return `${key}@76234`;
        }

      };
      RES = new ResMgr();

      _export("default", RES);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1775e7a84ffe09626f371deb0e6cc1cae369a865.js.map