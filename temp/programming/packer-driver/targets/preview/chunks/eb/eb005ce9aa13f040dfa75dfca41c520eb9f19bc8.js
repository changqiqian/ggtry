System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DataNotify, _crd;

  _export("DataNotify", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c781e6gPpFIqatahGPgKhnx", "DataNotify", undefined);

      _export("DataNotify", DataNotify = class DataNotify {
        static GetInstance() {
          if (DataNotify.__ins == null) {
            DataNotify.__ins = new DataNotify();
          }

          return DataNotify.__ins;
        }

        constructor() {
          this.__listeners = {};
          this.__properties = {};
          this.__defaultValues = {};
          this.__created = false;

          this.RemoveListenerByProp = function (_prop, _target) {
            if (!_target || !_prop) {
              console.log("缺少必要参数");
              return;
            }

            for (var i = 0; i < this.__listeners[_prop].configs.length; i++) {
              if (this.__listeners[_prop].configs[i].target == _target) {
                this.__listeners[_prop].configs.splice(i, 1);
              }
            }
          };

          this.CreateNotify();
        }

        _getValue(_propName) {
          if (this.__listeners.hasOwnProperty(_propName)) {
            return this.__listeners[_propName].after;
          }

          return this.__properties[_propName];
        }

        _update(_propName, _val) {
          this.__properties[_propName] = _val;
          if (!this.__listeners.hasOwnProperty(_propName)) return;
          var listener = this.__listeners[_propName];
          var before = listener.before;
          listener.after = listener.before = _val;
          listener.configs.forEach(lis => {
            if (_val !== null && _val !== undefined) {
              lis.callback.call(lis.target, _val, before);
            }
          });
        }

        AddListener(propertyName, callback, target) {
          if (this.__listeners.hasOwnProperty(propertyName)) {
            this.__listeners[propertyName].configs.push({
              callback: callback,
              target: target
            });
          } else {
            this.__listeners[propertyName] = {
              configs: [{
                callback: callback,
                target: target
              }],
              before: this[propertyName],
              after: this[propertyName]
            };
          }

          if (this[propertyName] != null && this[propertyName] != undefined && callback && target) {
            callback.call(target, this[propertyName], null);
          }
        }

        RemoveListenerByTarget(target) {
          if (!target) {
            console.log("缺少必要参数target");
            return;
          }

          for (var key in this.__listeners) {
            var Step = 0;

            while (this.__listeners[key].configs.length > 0 && Step < this.__listeners[key].configs.length) {
              if (this.__listeners[key].configs[Step].target == target) {
                this.__listeners[key].configs.splice(Step, 1);

                Step = 0;
              } else {
                Step++;
              }
            }
          }
        }

        ClearListeners() {
          this.__listeners = null;
          this.__listeners = {};
        }

        CreateNotify() {
          if (this.__created) return;
          var props = Object.keys(this);
          console.log("props=====" + props);
          var propertyDefine = {};
          props.forEach(prop => {
            console.log("prop=====" + prop);
            var str = prop.toString();

            if (str.includes("Data_")) {
              console.log("str=====" + str);
              this.__properties[prop] = this[prop];
              this.__defaultValues[prop] = this[prop];
              propertyDefine[prop] = {
                get() {
                  return this._getValue(prop);
                },

                set(val) {
                  this._update(prop, val);
                }

              };
            }
          });
          Object.defineProperties(this, propertyDefine);
          this.__created = true;
        }

        toJSONObject() {
          var props = Object.keys(this);
          var result = {};
          props.forEach(prop => {
            result[prop] = this[prop];
          });
          return result;
        }

        reset() {
          this.resetDataToDefault();
          this.ClearListeners();
        }

        resetDataToDefault() {
          var props = Object.keys(this);
          props.forEach(prop => {
            var DefaultValue = this.__defaultValues[prop];

            if (typeof DefaultValue == "function") {} else {
              if ("__listeners" == prop) {} else {
                this[prop] = DefaultValue;
              }
            }
          });
        }

      });

      DataNotify.__ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb005ce9aa13f040dfa75dfca41c520eb9f19bc8.js.map