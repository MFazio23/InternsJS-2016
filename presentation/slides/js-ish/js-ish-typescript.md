#JavaScript-ish
##TypeScript

```
class Person {
    private name: string;
    private age: number;
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    
    toString(): string {
        return `${this.name} (${this.age}) (${this.salary})`;
    }
}
```

Note:
+ Created by Microsoft
    + Open Source
+ Superset of JS
    + Transcompiles into JS code
    + JavaScript programs are valid TypeScript as well
+ Adds static typing and class-based O-O
    + Interfaces    