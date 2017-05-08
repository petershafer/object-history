'use strict';

function newHistoryObject(target) {
  target = target || {};
  var handler = {
    history: {
      'values': {},
      'lastModified': []
    },
    set: function set(receiver, name, value) {
      this.history.values[name] = this.history.values[name] || [];
      this.history.values[name].push(receiver[name]);
      this.history.lastModified.push(name);
      receiver[name] = value;
    },
    get: function get(receiver, name) {
      if (name == "history") {
        return this.history.values;
      }
      if (name == "undo") {
        var lastModification = this.history.lastModified.pop();
        receiver[lastModification] = this.history.values[lastModification].pop();
        return function () {};
      }
      return receiver[name];
    }
  };
  return new Proxy(target, handler);
}

module.exports = newHistoryObject;