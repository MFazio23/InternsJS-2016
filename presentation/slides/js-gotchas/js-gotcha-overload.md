#JavaScript "Gotchas"
##Overloading

```
function getTitle(prefix, name, gender) {
    
    return prefix + ' ' + name;
}

function getTitle(name, gender) {
    var prefix = gender === 'M' ? 'Mr.' : 'Mrs.';
    
    return prefix + ' ' + name
}

var title = getTitle('Dr.','John Ptacek', 'M');
console.log(title);
```

Note:
+ Output is "Mrs. Dr."
+ Able to overwrite core JS function (isNaN(...), for example)
+ Functions from one JS script can overwrite functions in another
    + Use anonymous functions
    + Namespace functions