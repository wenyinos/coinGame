System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, ImageAsset, instantiate, NodePool, Texture2D, AssetType, GLOBALS, ResMgr, _crd, bundle, RES;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          var tempPre;
          var name;

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

          var node = null;

          if (this._dictPool.hasOwnProperty(name)) {
            //own this pool
            var pool = this._dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(tempPre);
            }
          } else {
            //create new pool
            var _pool = new NodePool();

            this._dictPool[name] = _pool;
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


        putNode(node, isActive) {
          if (isActive === void 0) {
            isActive = false;
          }

          if (!node) {
            return;
          }

          var name = node.name;
          var pool = null; // node.active = isActive

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
            var pool = this._dictPool[name];
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

        printTimer(name, end) {
          if (name === void 0) {
            name = "";
          }

          if (end === void 0) {
            end = false;
          }

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


        loadBundle(index, ratio) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this._loadStemp) _this._loadStemp = Date.now();
            var name = bundle + index;
            return new Promise((resolve, reject) => {
              if (_this._abBundleMap[index]) {
                resolve && resolve();
              }

              assetManager.loadBundle(name, (err, bundle) => {
                if (err) {
                  var str = "bundle" + index + " load error, error==" + err;
                  console.log(str);
                } else {
                  _this._abBundleMap[index] = bundle;

                  _this.printTimer("bundle" + index + "__" + "load success");

                  _this.loadingRate += ratio;
                  resolve && resolve();
                }
              });
            });
          })();
        }
        /**
         * @name: Load any res
         * @param {index} bunlde index
         * @param {type} res type from AssetType
         * @param {ratio} Res Loading ratiro, make sure the amount of all ratios is less than 1.0
         */


        loadRes(index, type, ratio) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (ratio === void 0) {
              ratio = 0;
            }

            var rate = _this2.loadingRate;
            var self = _this2;
            return new Promise((resolve, reject) => {
              _this2._abBundleMap[index].loadDir(type.path, type.type, (finished, total) => {
                // this._loadUtils.setValue(idx, finished / total); 
                if (ratio > 0) _this2.loadingRate = rate + ratio * finished / total;
              }, (err, assets) => {
                if (err) {
                  var str = "Res Error ===" + err;
                  console.log(str);
                  resolve && resolve();
                }

                var asset;

                switch (type) {
                  case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                    error: Error()
                  }), AssetType) : AssetType).UiPrefab:
                    for (var i = 0; i < assets.length; i++) {
                      asset = assets[i];
                      var name = asset.data.name;

                      _this2.setPrefab(name, asset);

                      console.log("ui prefab name==", name);
                    }

                    break;

                  case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                    error: Error()
                  }), AssetType) : AssetType).Prefab:
                    for (var _i = 0; _i < assets.length; _i++) {
                      asset = assets[_i];

                      _this2.setPrefab(asset.data.name, asset);

                      _this2._debug && console.log("prefab name==", asset.data.name);
                    }

                    break;

                  case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                    error: Error()
                  }), AssetType) : AssetType).Sound:
                    for (var _i2 = 0; _i2 < assets.length; _i2++) {
                      asset = assets[_i2];
                      _this2._debug && console.log("clip name==", asset.name);
                      if (!self._clipMap[asset.name]) self._clipMap[asset.name] = asset;
                    }

                    break;

                  case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                    error: Error()
                  }), AssetType) : AssetType).Sprite:
                    for (var _i3 = 0; _i3 < assets.length; _i3++) {
                      asset = assets[_i3];
                      console.log("sprite name==", asset.name);
                      if (!_this2._spriteMap[asset.name]) _this2._spriteMap[asset.name] = asset;
                    }

                    break;

                  case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                    error: Error()
                  }), AssetType) : AssetType).Json:
                    for (var _i4 = 0; _i4 < assets.length; _i4++) {
                      asset = assets[_i4];
                      _this2._debug && console.log("json name==", asset.name);
                      if (!self._jsonAssetMap[asset.name]) self._jsonAssetMap[asset.name] = asset.json;
                    }

                    break;

                  case (_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
                    error: Error()
                  }), AssetType) : AssetType).Atlas:
                    for (var _i5 = 0; _i5 < assets.length; _i5++) {
                      asset = assets[_i5];
                      _this2._debug && console.log("atlas name==", asset.name);
                      if (!self._atlasMap[asset.name]) self._atlasMap[asset.name] = asset;
                    }

                    break;
                }

                self.printTimer("Bundle" + index + "__" + type.path + "loaded success");
                resolve && resolve();
              });
            });
          })();
        }

        loadBgm() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var self = _this3;
            return new Promise((resolve, reject) => {
              _this3._abBundleMap[5].load("bgm", function (err, bgm) {
                if (err) {
                  console.log("Error info===", err);
                  resolve && resolve();
                }

                if (!self._clipMap[bgm.name]) self._clipMap[bgm.name] = bgm;
                resolve && resolve();
              });
            });
          })();
        }
        /**
        * @name: load any prefab
        * @param {index} bunlde index
        * @param {type} res type
        * @param {ratio} Res Loading ratiro, make sure the amount of all ratios is less than 1.0
        */


        loadPrefab(info) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var rate = _this4.loadingRate;
            return new Promise((resolve, reject) => {
              _this4._abBundleMap[info.bundle].load(info.path + info.name, function (err, Prefab) {
                if (err) {
                  console.log("wrong prefab info ===", err);
                  resolve && resolve();
                }

                this.setPrefab(info.name, Prefab);
                resolve && resolve();
              });
            });
          })();
        }
        /** 
         * pre load&&make prefabs
        */


        preloadRes(name, count, ratio) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (ratio === void 0) {
              ratio = 0;
            }

            var rate = _this5.loadingRate;
            return new Promise((resolve, reject) => {
              var pre = _this5._dictPrefab[name];

              for (var i = 0; i < count; i++) {
                _this5.putNode(instantiate(pre));
              }

              if (ratio > 0) _this5.loadingRate = rate + ratio;

              _this5.printTimer("preload_" + name);

              resolve && resolve();
            });
          })();
        }

        getSprites(name) {
          return this._spriteMap[name] || null;
        }

        getAtlas(name) {
          return this._atlasMap[name];
        }

        getUI(Path, Parent) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            if (Path.clear) {
              if (!Parent && (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
                error: Error()
              }), GLOBALS) : GLOBALS).layer2D[Path.layer].children[0]) {
                if ((_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
                  error: Error()
                }), GLOBALS) : GLOBALS).layer2D[Path.layer].children[0].name == Path.name) return;

                _this6.putNode((_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
                  error: Error()
                }), GLOBALS) : GLOBALS).layer2D[Path.layer].children[0]);
              }
            }

            var ParentNode = Parent ? Parent : (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
              error: Error()
            }), GLOBALS) : GLOBALS).layer2D[Path.layer];
            return yield _this6.getPrefab(Path, ParentNode);
          })();
        }

        putUI(Path) {
          var node = (_crd && GLOBALS === void 0 ? (_reportPossibleCrUseOfGLOBALS({
            error: Error()
          }), GLOBALS) : GLOBALS).layer2D[Path.layer].getChildByName(Path.name);

          if (node) {
            this.putNode(node);
          }
        }

        getPrefab(prefabPath, parent) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (_this7._dictPrefab[prefabPath.name]) {
              return _this7.getNode(prefabPath.name, parent);
            }

            yield _this7.loadPrefab(prefabPath);
            return _this7.getNode(prefabPath.name, parent);
          })();
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


        createTexture2DWtihImageAsset(imgAsset, addRef) {
          if (addRef === void 0) {
            addRef = true;
          }

          var texture = null;
          var id;

          if (imgAsset._uuid != "''" && imgAsset._uuid != null && imgAsset._uuid.length > 0) {
            id = imgAsset._uuid;
          } else {
            id = imgAsset.name;
          }

          var uuid = this.getTexture2DUUID(id);

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
          var uuid = url;
          var imgAsset;

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
          return key + "@f9941";
        }

        getTexture2DUUID(key) {
          return key + "@6c48a";
        }

        getImageUUID(key) {
          return key + "@76234";
        }

      };
      RES = new ResMgr();

      _export("default", RES);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7e96d0ac052da270bd0279d41428c7a284bf6e89.js.map