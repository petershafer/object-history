var newHistoryObject = require('../build');

var p = newHistoryObject();

console.log("Setting value of p.hello to world-1.");
p.hello = "world-1";
console.log("Now, sett the value of p.hello to world-2.");
p.hello = "world-2";
console.log("The current calue of p.hello is: " + p.hello);
console.log("Let's undo the last change");
p.undo();
console.log("Now the current value of hello is: " + p.hello);

