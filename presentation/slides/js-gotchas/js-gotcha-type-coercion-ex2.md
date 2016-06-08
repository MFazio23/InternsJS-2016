#JavaScript "Gotchas"
##Type Coercion

```
function getDisplayName(fName, uName, email) {
    
    if (fName) {
        return fName;
    } else if (uName) {
        return uName;
    } else if (email) {
        return email;
    }

    return "Anonymous";
}
```

Note:
+ _"if it can be converted to false"_ means any type can be sent into an expression
    + JS will attempt to convert the item to a Boolean
+ _"Everything without a 'real' is considered false"_
+ All considered false: 0, -0, "", _undefined_, _null_, NaN, false