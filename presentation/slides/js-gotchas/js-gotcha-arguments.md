#JavaScript "Gotchas"
##_arguments_ variable

```
function oneParam(a) {
	console.log("a =", a);
    
    console.log(arguments[0]); //Output: 'main'
    console.log(arguments[1]); //Output: 'extra1'
    console.log(arguments[2]); //Output: 'extra2'
    console.log(arguments[3]); //Output: 'extra3'
}

oneParam('main', 'extra1', 'extra2', 'extra3');
console.log(oneParam.length); //Output: 1
```

Note:
+ Useful for functions with variable number of parameters
    + arguments.length tells you how many you have
    + function.length tells you how many parameters are defined