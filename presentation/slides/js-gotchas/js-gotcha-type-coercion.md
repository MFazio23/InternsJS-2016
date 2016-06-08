#JavaScript "Gotchas"
##Type Coercion

Logical AND (&&) - _expr1_ && _expr2_
> Returns expr1 **if it can be converted to false**; otherwise, returns expr2.

Note:
+ _"if it can be converted to false"_ means any type can be sent into an expression
    + JS will attempt to convert the item to a Boolean
+ _"Everything without a 'real' is considered false"_
+ All considered false: 0, -0, "", _undefined_, _null_, NaN, false