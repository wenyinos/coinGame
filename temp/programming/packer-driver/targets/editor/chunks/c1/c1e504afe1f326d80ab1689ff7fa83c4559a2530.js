System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, game, input, Input, KeyCode, sys, InputCtrl, _crd, responseTime, maxCombo, CTRL;

  /**
   * @en : return the concet names from key comb
   * @cn : 返回组合键的名字
   * @param {KeyCombo} keys
   */
  function getComboName(keys) {
    let label = "";
    keys.forEach(key => {
      if (label.length > 0) {
        label += "+";
      }

      let keyCode = KeyCode[key].replace("KEY_", "");
      keyCode = keyCode.replace("DIGIT_", "");
      label += keyCode;
    });
    return label;
  }
  /**
   * @en : to identify if 2 arrays' contents are equal
   * @cn : 判断2个数组内的内容是否一致
   * @param {any} a
   * @param {any} b
   */


  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  _export("getComboName", getComboName);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      game = _cc.game;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c6d04GKhtIhZfOxtrlpxQT", "InputCtrl", undefined);

      __checkObsolete__(['director', 'EventKeyboard', 'game', 'input', 'Input', 'KeyCode', 'Label', 'sys']);

      responseTime = 150;
      /* in unit of ms */

      maxCombo = 3;
      /* limit of combo length */

      InputCtrl = class InputCtrl {
        constructor() {
          this.h = 0;
          this.v = 0;
          this.mag = 1;
          this.jump = false;
          this.rad = 0;
          this.joystick = false;
          this.rap = false;
          this.isPlaying = false;
          this.keyEventMap = new Map();
          this.keyState = new Map();
          this.tempCombo = [];
          this.tempBinding = null;
          this.keyBindingMap = new Map();
          this.timer = null;
          this.lastKeyTime = 0;

          if (!sys.isMobile) {
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
            var self = this;
            document.addEventListener('visibilitychange', function () {
              var isHidden = document.hidden;

              if (isHidden) {
                if (self.timer) {
                  clearTimeout(self.timer);
                }

                self.h = self.v = 0;
                self.mag = 1;
              }
            });
          }
        }
        /**
         * @en : add new key binding 
         * @cn : 添加新的按键注册
         * @param {string} eventName  event Name
         * @param {KeyCombo} combo  keys, could be combos
         * @param {KeyEvents} keyEvent key events
         * @param {Label} label label
         */


        add(eventName, combo, keyEvent, label) {
          const config = this.keyBindingMap.get(eventName);

          if (config) {
            this.removeKey(config.combo);
          }

          const keyConfig = {
            combo: combo,
            event: keyEvent,
            label: label
          };
          this.keyBindingMap.set(eventName, keyConfig);
          this.addKey(combo, keyEvent);

          if (label) {
            label.string = getComboName(combo);
          }

          return this;
        }
        /**
         * @en : clear a binding event
         * @cn : 清除绑定的事件
         * @param {string} eventName
         */


        clear(eventName) {
          const config = this.keyBindingMap.get(eventName);

          if (config) {
            config.combo.length = 0;

            if (config.label) {
              config.label.string = "";
            }
          }

          return this;
        }
        /**
         * @en : remove key binding
         * @cn : 移除按键注册
         * @param {string} eventName
         */


        remove(eventName) {
          const config = this.keyBindingMap.get(eventName);

          if (config) {
            this.removeKey(config.combo);
            this.keyBindingMap.delete(eventName);

            if (config.label) {
              config.label.string = "";
            }
          }

          return this;
        }
        /**
         * @en : get config map
         * @cn : 获取按键事件
         * @param {string} eventName
         */


        get(eventName) {
          return this.keyBindingMap.get(eventName) || null;
        }
        /**
         * @en :update key binding
         * @cn :更改绑定按键
         * @param string eventName 
         * @param {KeyCombo} combo new key combo
         * @param {Label} altlabel 是否更新文本
         */


        updateConfig(eventName, combo, altlabel) {
          const config = this.keyBindingMap.get(eventName);

          if (!config) {
            console.log("no event founded==", eventName);
            return this;
          }

          combo.sort();

          for (let key of this.keyBindingMap.keys()) {
            const binding = this.keyBindingMap.get(key);
            const duplicate = arraysEqual(binding.combo, combo);

            if (duplicate) {
              director.emit("duplicateKey", key);
              this.clear(key);
              break;
            }
          }

          config.combo.length = 0;

          for (var i = 0; i < combo.length; i++) {
            config.combo[i] = combo[i];
          }

          const keyString = getComboName(combo);

          if (config.label) {
            config.label.string = keyString;
          }

          if (altlabel) {
            altlabel.string = keyString;
          }

          return this;
        }
        /**
         * @en : clear temp binding and binding state
         * @cn : 清楚绑定状态
         */


        clearBinding() {
          this.tempBinding = null;
        }
        /**
         * @en : updating new binding
         * @cn : 实时更新新的界面
         * @param {string} name binding name
         * @param {Label} label binding label if label, the label will be updated
         */


        updateBinding(name, label) {
          this.tempBinding = {
            name: name,
            label: label
          };
        }
        /**
         * @en : get all binding keys in array
         * @cn : 获取所有的绑定键数组
         */


        getKeys() {
          let actions = [];

          for (let key of this.keyBindingMap.keys()) {
            actions.push(key);
          }

          return actions;
        }
        /**
         * @Description: add new combo with event
         * @param {KeyCode} keys use array for combination keys use single Keycode for single Key
         * @param {KeyEvents} event
         * @return {*}
         */


        addKey(combo, event) {
          combo.sort();
          this.keyEventMap.set(combo, event);
          return this;
        }
        /**
         * @en : remove combo
         * @cn : 删除按键组合
         * @param {KeyCombo} combo
         */


        removeKey(combo) {
          this.keyEventMap.delete(combo);
          return this;
        }

        onKeyDown(event) {
          const keyCode = event.keyCode;

          if (this.tempBinding) {
            this.handleBindingConfig(keyCode);
            return;
          }

          this.keyState.set(keyCode, true);

          for (let keys of this.keyEventMap.keys()) {
            let keystate = false;
            let length = keys.length;

            for (var i = 0; i < length; i++) {
              const key = keys[i];
              keystate = this.keyState.get(key);

              if (!keystate) {
                break;
              }
            }

            if (keystate) {
              this.keyState.set(keyCode, false);
              const cb = this.keyEventMap.get(keys);
              if (cb.down) cb.down();
              break;
            }
          }
        }
        /**
         * @en : handle the keys combo that pressed within the responsetime
         * @cn : 处理相应时间内的的按键组合
         * @param {KeyCode} keyCode
         */


        handleBindingConfig(keyCode) {
          const bindingConfig = this.tempBinding;
          const time = game.totalTime;
          const deltaTime = time - this.lastKeyTime;
          /* clear tempCombo if delta time too long */

          if (deltaTime > responseTime) {
            this.tempCombo.length = 0;
          }

          if (this.tempCombo.length >= maxCombo) {
            this.tempCombo.shift();
          }

          this.tempCombo.push(keyCode);
          const name = bindingConfig.name;
          const label = bindingConfig.label;
          /* handle timeout*/

          if (this.timer) {
            clearTimeout(this.timer);
          }

          this.timer = setTimeout(() => {
            this.updateConfig(name, this.tempCombo, label);
            this.timer = null;
          }, responseTime);
          this.lastKeyTime = time;
        }

        onKeyPress(event) {
          const keyCode = event.keyCode;
        }

        onKeyUp(event) {
          const keyCode = event.keyCode;
          const bindingConfig = this.tempBinding;

          if (bindingConfig) {
            return;
          }

          this.keyState.set(keyCode, false);

          for (let keys of this.keyEventMap.keys()) {
            let keystate = false;
            let length = keys.length;

            for (var i = 0; i < length; i++) {
              const key = keys[i];

              if (keyCode == key) {
                keystate = true;
                break;
              }
            }

            if (keystate) {
              const cb = this.keyEventMap.get(keys);
              if (cb.up) cb.up();
              break;
            }
          }
        }

      };
      CTRL = new InputCtrl();

      _export("default", CTRL);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1e504afe1f326d80ab1689ff7fa83c4559a2530.js.map