# Object History
Object History is a package to allow for the creation of javascript objects that track the history of its properties and allows for changes to be undone.

```
let obj = newHistoryObject();
obj.hello = "world";
obj.hello = "my new value";
obj.undo();
console.log(obj.hello); // world
```

Review and run the demo to see how it works.

`node ./demo`
