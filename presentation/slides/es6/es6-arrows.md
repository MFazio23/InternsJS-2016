#ECMAScript 2015 (6)
##Arrows
```
// ES5
var selected = allJobs.filter(function (job) {
  return job.isSelected();
});

// ES6
var selected = allJobs.filter(job => job.isSelected());
```

Note:
+ Shorthand function syntax
+ Similar to C# and Java 8
+ Always anonymous
+ _this_ refers to the enclosing context, not the function itself
+ _arguments_ does not contain the variables that are passed
    + Can use **rest parameters** instead
