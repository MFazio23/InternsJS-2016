#JavaScript-ish
##JScript

```
/*@cc_on
  @if (@_jscript_version == 11)
    document.write("You are using IE11 with an older document mode");
  @elif (@_jscript_version == 10)
    document.write("You are using IE10");
  @elif (@_jscript_version == 9)
    document.write("You are using IE9");
  @elif (@_jscript_version == 5.8)
    document.write("You are using IE8");
  @elif (@_jscript_version < 5.5)
    document.write("You are using a version older than IE5.5");
  @else
    document.write("You are using an unknown version of IE");
  @end
@*/
```

Note:
+ Reverse-engineered version of JavaScript
    + Now based on ECMAScript standard
+ Name changed to JScript to avoid trademark issues
+ Does allow conditional compilation
    + Selectively execute code within block comments