System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layers, tween, Vec3, aa, ui, CoinBarView, PlayerCtrl, CoinView, _dec, _class, _crd, ccclass, property, temp_V3_1, temp_V3_2, temp_V3_3, coinScaled, CoinMgr;

  function _reportPossibleCrUseOfaa(extras) {
    _reporterNs.report("aa", "../frame/FrameCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfui(extras) {
    _reporterNs.report("ui", "../frame/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinBarView(extras) {
    _reporterNs.report("CoinBarView", "../view/CoinBarView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerCtrl(extras) {
    _reporterNs.report("PlayerCtrl", "../combat/ctrl/PlayerCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinView(extras) {
    _reporterNs.report("CoinView", "../view/CoinView", _context.meta, extras);
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
      Layers = _cc.Layers;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      aa = _unresolved_2.aa;
    }, function (_unresolved_3) {
      ui = _unresolved_3.ui;
    }, function (_unresolved_4) {
      CoinBarView = _unresolved_4.CoinBarView;
    }, function (_unresolved_5) {
      PlayerCtrl = _unresolved_5.PlayerCtrl;
    }, function (_unresolved_6) {
      CoinView = _unresolved_6.CoinView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6768eoy0odLAJdLgnRSqgBt", "CoinMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'easing', 'Layers', 'Node', 'tween', 'UI', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      temp_V3_1 = new Vec3();
      temp_V3_2 = new Vec3();
      temp_V3_3 = new Vec3();
      coinScaled = new Vec3(4.8, 4.8, 4.8);

      _export("CoinMgr", CoinMgr = (_dec = ccclass('CoinMgr'), _dec(_class = class CoinMgr extends Component {
        constructor(...args) {
          super(...args);
          this._time = 0;
          this._interval = 3;

          /* start coins */
          this._coins = 50;
          this._coinView = void 0;
          this._coinViewComp = void 0;
          this._coinBarView = void 0;
          this._coinBarViewComp = void 0;
          this._currentCoins = 0;
          this._playerPos = new Vec3();
        }

        async start() {
          this._coinView = await (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).res.getUI((_crd && ui === void 0 ? (_reportPossibleCrUseOfui({
            error: Error()
          }), ui) : ui).CoinView);
          this._coinViewComp = this._coinView.getComponent(_crd && CoinView === void 0 ? (_reportPossibleCrUseOfCoinView({
            error: Error()
          }), CoinView) : CoinView);
          this._coinBarView = await (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).res.getUI((_crd && ui === void 0 ? (_reportPossibleCrUseOfui({
            error: Error()
          }), ui) : ui).CoinBarView);
          this._coinBarViewComp = this._coinBarView.getComponent(_crd && CoinBarView === void 0 ? (_reportPossibleCrUseOfCoinBarView({
            error: Error()
          }), CoinBarView) : CoinBarView);
        }

        spawnCoins(dt) {
          if (this._coins > 0) {
            this._coins--;
            this.createCoin();
          }

          this._time += dt;

          if (this._time > this._interval) {
            this._time = 0;
            /* random coins */

            this._interval = 3 + 2 * Math.random();

            if ((_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).layer3D[2].children.length < 75) {
              this._coins += Math.floor(6 + 6 * Math.random());
            }
          }
        }

        createCoin() {
          const x = -20 + Math.random() * 40;
          const z = -20 + Math.random() * 40;
          const coin = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).res.getNode("Coin", (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).layer3D[2], Vec3.set(temp_V3_2, x, 0.5, z));
          coin.setScale(0.5, 0.5, 0.5);
          coin.setRotationFromEuler(90, 0, 0);
          coin.layer = Layers.Enum.DEFAULT;
        }

        collectCoins(dt, backCoins) {
          const bl = backCoins.length;
          const t = Math.min(1, 0.2 + bl * 0.02);
          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.player.getComponent(_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
            error: Error()
          }), PlayerCtrl) : PlayerCtrl).wave(t);
          /* 2D UI Node's wordposition to screen space pos*/

          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).cameras[1].worldToScreen(this._coinView.worldPosition, temp_V3_3);
          const flyingPos = new Vec3();
          /* screen space pos to  3d world position under this camera*/

          (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).cameras[0].screenToWorld(temp_V3_3, flyingPos);

          this._coinViewComp.addCoin(bl);

          for (var i = bl - 1; i >= 0; i--) {
            const coin = backCoins[i];
            /* change layer */

            coin.parent = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).layer3D[4];
            coin.layer = Layers.Enum.UI_3D;
            coin.setRotationFromEuler(90, 0, 0);
            const delay = i * dt;
            /* move and scale the coin */

            tween(coin).delay(delay).to(0.5 + delay, {
              position: flyingPos,
              scale: coinScaled
            }, {
              easing: 'fade'
            }).call(() => {
              (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
                error: Error()
              }), aa) : aa).res.putNode(coin);
            }).start();
          }
        }

        updateCoinBar(backCoins) {
          if (this._coinBarViewComp) {
            /* backcoins length */
            const bl = backCoins.length;
            Vec3.copy(temp_V3_1, this._playerPos);
            temp_V3_1.y += 1.5 + (bl + 1) * 0.075;
            (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).cameras[0].convertToUINode(temp_V3_1, (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).layer2D[4], temp_V3_1);
            this._coinBarView.position = temp_V3_1;

            if (this._currentCoins != bl) {
              this._currentCoins = bl;
              this._coinBarViewComp.coin = "Coins " + bl;
            }
          }
        }

        checkCoins() {
          const coins = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).layer3D[2].children;
          const parent = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).layer3D[3];
          const length = coins.length;

          for (var i = length - 1; i >= 0; i--) {
            const coin = coins[i];
            /* we use manhattanDis for better perf */

            const dis = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
              error: Error()
            }), aa) : aa).utils.getMdisXZ(coin.position, this._playerPos);

            if (dis < 0.5) {
              coin.parent = parent;
              coin.setRotationFromEuler(0, 0, 0);
            }
          }
        }

        moveCoins(dt, backCoins) {
          let bl = backCoins.length;
          /* coin move logic */

          if (!(_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.isMove && bl > 0) {
            this.collectCoins(dt, backCoins);
          } else {
            if (bl >= 50) {
              this.collectCoins(dt, backCoins);
            } else {
              for (var i = bl - 1; i >= 0; i--) {
                const coin = backCoins[i];
                Vec3.copy(temp_V3_1, this._playerPos);
                temp_V3_1.y += 1.4 + (bl - i) * 0.075;
                const t = dt * Math.max(1, 19 - (bl - i) * 0.35);
                coin.position = Vec3.lerp(temp_V3_2, coin.position, temp_V3_1, t);
              }
            }
          }
        }

        update(dt) {
          /* store player's pos */
          Vec3.copy(this._playerPos, (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).global.player.position);
          /* coin spawn logic */

          this.spawnCoins(dt);
          const backCoins = (_crd && aa === void 0 ? (_reportPossibleCrUseOfaa({
            error: Error()
          }), aa) : aa).layer3D[3].children;
          this.moveCoins(dt, backCoins);
          /* coins check logic */

          this.checkCoins();
          /* coin bar logic */

          this.updateCoinBar(backCoins);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33699fcedf5fef4242043e3d0bf66fd486d90f17.js.map