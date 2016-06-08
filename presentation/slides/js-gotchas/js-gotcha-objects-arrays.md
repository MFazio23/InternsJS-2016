#JavaScript "Gotchas"
##Objects vs. Arrays
```
var myArray  = [ "a", "b", "c" ];
var myObject = { 0: "a", 1: "b", 2: "c" };
console.log( myArray[0] +  myArray[1] +  myArray[2]);  // Result: "abc"
console.log(myObject[0] + myObject[1] + myObject[2]);  // Result: "abc"

var myOtherObject = { 'zero': "a", 'one': "b", 'two': "c" };
console.log(myOtherObject.zero)    // Returns: "a"
```

Note:
+ Array values are accessed via numeric index
+ Object values are accessed via string key name
+ Dot notation and bracket notation are basically the same
    + Dot notation only available for objects
    + Dot notation must use valid variable name
        + No non-numeric characters
    + Bracket notation can use any string
+ Deleting a value from an array leaves an _undefined_ hole
    + _delete a[1];_