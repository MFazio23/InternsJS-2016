#JavaScript "Gotchas"
##Scoping
```
var a = 23;

function f() {
    b = 10;
    var c = 4;

	console.log("Inside =", a, b, c); //Inside = 23 10 4
}
f();

console.log("Outside =", a, b); //Outside = 23 10
// c throws a ReferenceError: c is not defined
```

Note:
+ JavaScript has function-level scope
    + Blocks, such as _if_ statements, do not create a new scope.
+ Leaving out _var_ adds a variable to the global scope
    + Same as _window.<variable name>_
