#ECMAScript 2015 (6)
##let and const
```
const OFFSET = 12;

function letTest() {
  let x = 31;
  if (true) {
    let x = 71 + OFFSET;  // different variable
    console.log(x);  // 83
  }
  console.log(x);  // 31
}
```

Note:
+ _let_ is the new _var_
    + Allows for block/statement/expression scoping
    + _var_ is only global or function scoped
+ _const_ is a read-only reference to a value
    + Single assignment
    + Does not mean the value is immutable
        
