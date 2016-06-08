#ECMAScript 2015 (6)
##Classes
```
class Shape {
    constructor (x, y) {
        this.move(x, y);
    }
    move (x, y) {
        this.x = x;
        this.y = y;
    }
}
class Rectangle extends Shape {
    constructor (x, y, width, height) {
        super(x, y);
        this.width  = width;
        this.height = height;
    }
}
```

Note:
+ First major update since 2009
+ Purely cleaner syntax over existing prototype-based inheritance
+ Class syntax is **NOT** introducing a new O-O inheritance model to JS.
+ Includes static members
