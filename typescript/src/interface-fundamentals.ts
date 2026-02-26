// * allow to setup shape for objects (only objects)

interface Book {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;

    // method 
    printAuthor(): void;
    printTitle(message: string): string;

    // property of type function
    printSomething: (value: number) => number;
}

const deepWork: Book = {
    isbn: 9781455586691,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',

    printAuthor() {
        console.log(this.author)
    },
    printTitle(message) {
        return `${this.title} ${message}`;
    },

    //? first option
    // printSomething: function (value) {
    //     return value;
    // },

    //? second option
    // printSomething: (value) => {
    //! console.log(this); this --> undefined, because arrow functions point to global scope, not to the current instance
    //     return value;
    // }

    //? third option 
    printSomething(value) {
        return value;
    }
};

// deepWork.printAuthor();
// const result = deepWork.printTitle('is an awesome book!');
// const test = deepWork.printSomething(10)

// -----------------------------------------------------------------

interface Computer {
    readonly id: number; //cannot be change
    brand: string;
    RAM: number;
    storage?: number; //optional

    upgradeRam(increace: number): number;
}

const asus: Computer = {
    id: 1284,
    brand: 'Asus',
    RAM: 8, // in GB

    upgradeRam(amount: number) {
        this.RAM += amount;
        console.log(this.RAM)
        return this.RAM;
    },
}

asus.upgradeRam(2); // upgrade RAM by 2GB

