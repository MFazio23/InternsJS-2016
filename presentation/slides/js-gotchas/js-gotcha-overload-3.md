#JavaScript "Gotchas"
##Overloading

```
console.log(4 + 5);             //9
console.log('4' + 5);           //'45'

console.log(false + false);     //0
console.log("false" + false);   //'falsefalse'
console.log(0 + '0');           //'00'
console.log(0 + '');            //'0'
```

Note:
+ The plus sign is overloaded in JS for strings vs. numerics