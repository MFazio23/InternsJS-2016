#JavaScript "Gotchas"
##Overloading

```
function myFunction() {
    return 'A';
}

var skyline = {
    myFunction: function() {
        return 'B';
    }
};

console.log(myFunction()); //Output: A
console.log(skyline.myFunction()); //Output: B
```

Note:
+ Output is "Mrs. Dr."
+ Able to overwrite core JS function (isNaN(...), for example)
+ Functions from one JS script can overwrite functions in another
    + Use anonymous functions
    + Namespace functions