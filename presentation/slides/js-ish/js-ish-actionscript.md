#JavaScript-ish
##ActionScript

```
package com.example
{
    import flash.text.TextField;
    import flash.display.Sprite;

    public class Greeter extends Sprite
    {
        public function Greeter()
        {
            var txtHello:TextField = new TextField();
            txtHello.text = "Hello World";
            addChild(txtHello);
        }
    }
}
```
Note:
+ Implentation of the ECMAScript standard
+ Used primarily for Adobe Flash Player development
    + Embedded SWF files
+ ActionScript 3.0 is also used with Adobe AIR
    + Desktop and mobile apps
+ Strongly typed + classes since ActionScript 2.0