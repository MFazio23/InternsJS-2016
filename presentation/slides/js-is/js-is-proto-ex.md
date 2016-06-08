#Javascript is...
##prototype-based

```
    function MyObj(input) {
        this.val = input;
    }
    
    var mine = new MyObj('example val');
    console.log(mine);  //Output: MyObj {val: "test val"}
    mine.checkIt();  //Uncaught TypeError: mine.checkIt is not a function
    
    MyObj.prototype.checkIt = function() {
        console.log("Checked! - " + this.val);
    }
    mine.checkIt(); //Output: Checked! - example val
```