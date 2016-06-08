#Javascript is...
##untyped/dynamically typed

```
var dynamicVar = 'my value';
console.log(
    dynamicVar,
    typeof dynamicVar); //Output: my value string

dynamicVar = 23;
console.log(
    dynamicVar,
    typeof dynamicVar); //Output: 23 "number"

dynamicVar = { "location":"WI" };
console.log(
    dynamicVar,
    typeof dynamicVar); //Output: Object {location: "WI"} "object"
```

Note:
+ Untyped: Really means "dynamically typed", which means variable type is only checked at runtime.
    + Everything is declared as _var_.
    + One variable can have multiple types assigned to it in one lifetime.
+ Could also be considered weakly typed
+ Is not strongly nor statically typed
+ Not the same at all as C#'s _var_
    + C#'s _var_ is for simplicity (not having to list the type) or when it's an anonymous type
    + Closer to C#'s _dynamic_ property