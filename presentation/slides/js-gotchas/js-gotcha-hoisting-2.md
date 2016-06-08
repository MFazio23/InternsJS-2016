#JavaScript "Gotchas"
##Hoisting
```
var a = 23;
console.log("Start 'a' =", a); //Start 'a' = 23

function f() {
    console.log("Inside 'f' =", a); // Inside 'f' = undefined
    if (!a) {
        console.log("Before =", a); // Before = undefined
        var a = 10;
        console.log("After =", a); // After = 10
    }
    console.log("End of 'f' =", a); //End of 'f' = 10
}

f();
console.log("End 'a' =", a); //End 'a' = 23
```

Note:
+ JavaScript has function-level scope
    + Blocks, such as _if_ statements, do not create a new scope.
