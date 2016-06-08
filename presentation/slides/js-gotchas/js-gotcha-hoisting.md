#JavaScript "Gotchas"
##Hoisting
```
a = 3;

console.log(a, b, c); //3 undefined undefined

var a, b = 5, c;
```
```
var a, b, c;
a = 3;

console.log(a, b, c); //3 undefined undefined

b = 5;
```

Note:
+ JavaScript automatically moves declarations to the top of their containing scope
     + Only really includes _function_ and _variable_ declarations.
         + _formal parameters_ and _language-defined variables_ are already there.
     + Only includes the declaration, not the assignment
