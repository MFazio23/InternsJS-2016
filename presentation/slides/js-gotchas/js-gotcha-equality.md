#JavaScript "Gotchas"
##== (Equality) vs. === (Identity)
```
'' == '0'            // false                  '' === '0'             // false
 0 == ''             // true                    0 === ''              // false
 0 == '0'            // true                    0 === '0'             // false
 0 == 0              // true                    0 === 0               // true
                
false == 'false'     // false                   false === 'false'     // false
false == '0'         // true                    false === '0'         // false
false == false       // true                    false === false       // true
                
' \t\r\n ' == 0      // true                    ' \t\r\n ' === 0      // false
```

Note:
+ Equality operator will perform a type conversion
+ Identity operator will _not_ perform a type conversion
    + Compares types and values
+ https://dorey.github.io/JavaScript-Equality-Table/