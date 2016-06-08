#JavaScript "Gotchas"
##undefined ≠ null

```
var a;
console.log(typeof a === 'undefined'); //true
console.log(a == null); //true
console.log(a === null); //false

```

Note:
+ For an object to be null, it must be defined.
+ null is no value, undefined is no value has yet been assigned
+ 