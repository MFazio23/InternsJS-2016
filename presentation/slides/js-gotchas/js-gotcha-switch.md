#JavaScript "Gotchas"
##_switch_  statements
```
var switchTest = '23';

switch (switchTest) {
    case 23:
        console.log("It's the number 23");
        break;
    //Other cases could go here
    default:
        console.log("Didn't find anything.");
        break;
}
```

Note:
+ _switch_ statement cases are type-dependent
    + Effectively using === instead of ==

