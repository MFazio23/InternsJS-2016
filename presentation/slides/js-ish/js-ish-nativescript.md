#JavaScript-ish
##NativeScript

```
var observable = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }
    return HelloWorldModel;
})(observable.Observable);
```

Note:
+ Uses JS/CSS
+ Shared code between platforms
+ Another native JS library is React Native
    + from Facebook