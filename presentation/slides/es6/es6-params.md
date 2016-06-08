#ECMAScript 2015 (6)
##Default/Rest/Spread Parameters
```
//Default parameters
function f (x, y = 7, z = 42) {
    return x + y + z;
}

//Rest Parameters
function f (x, y, ...a) {
    return (x + y) * a.length;
}

//Spread Operator
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
f(1, 2, ...params) === 9

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
```

Note:
+ Default
+ Rest parameters eliminate the need for _arguments_ variable
+ Spread operator spreads out elements of an iterable collection into both literal elements and individual function params.
