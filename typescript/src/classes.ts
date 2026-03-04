// * Modifiers - readonly, private, public

// class Book {
//     readonly title: string;
//     public author: string;
//     private checkedOut = false; // set a default prop

//     constructor(title: string, author: string) {
//         this.title = title;
//         this.author = author;
//     }

//     checkOut() {
//         this.checkedOut = this.toggleCheckedOut();
//     }

//     isCheckedOut() {
//         return this.checkedOut
//     }

//     private toggleCheckedOut() {
//         return !this.checkedOut;
//     }
// }



// * Getters and Setters - special methods in a class that allow you to control how a property is accessed and modified.They are used like properties, not methods, so you don't use parentheses to call them.

class Book {
    readonly title: string;
    public author: string;
    private checkedOut = false;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    get info() {
        return `${this.title} by ${this.author}`
    }

    set checkOut(checkedOut: boolean) {
        this.checkedOut = checkedOut;
    }
}


const deepWork = new Book('Deep Work', 'Cal Newport');
console.log(deepWork.info)
deepWork.checkOut = true;


// * Implement Interface - When a class implements an interface, it is essentially promising that it will provide all the properties and methods defined in the interface.

interface IPerson {
    name: string;
    age: number;
    greet(): void;
}

class Person implements IPerson {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age}`)
    }
}

const ivan = new Person('Ivan', 25);
ivan.greet()