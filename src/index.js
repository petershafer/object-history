'use strict';

function newHistoryObject(target){
  target = target || {};
  let handler = {
    history: {
      'values': {},
      'lastModified': []
    },
    set: function (receiver, name, value) {
      this.history.values[name] = this.history.values[name] || [];
      this.history.values[name].push(receiver[name]);
      this.history.lastModified.push(name);
      receiver[name] = value;
    },
    get: function (receiver, name) {
      if(name == "history"){
        return this.history.values;
      }
      if(name == "undo"){
        let lastModification = this.history.lastModified.pop();
        receiver[lastModification] = this.history.values[lastModification].pop();
        return () => {};
      }
      return receiver[name];
    }
  }
  return new Proxy(target, handler);
}

module.exports = newHistoryObject
