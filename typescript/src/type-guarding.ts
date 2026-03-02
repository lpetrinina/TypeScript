//* Type guarding - ability to narrow down the type of an object within a certain scope.

//? 'typeof' guard

type ValueType = string | number | boolean;

let value: ValueType;

const random = Math.random();
value = random < 0.33
    ? "Hello"
    : random < 0.66
        ? 123.456
        : true;

function checkValue(value: ValueType): void {

    if (typeof value === "string") {
        console.log(value.toLowerCase());
        return;
    }

    if (typeof value === 'number') {
        console.log(value.toFixed(2));
        return;
    }

    console.log(`boolean: ${value}`)
}

// checkValue(value);

// ----------------------------------------------------------------------

type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };

type Animal = Dog | Cat;

//? Equality narrowing - using ===/ !== 

function makeSound1(animal: Animal) {

    if (animal.type === 'dog') {
        animal.bark()
    } else {
        animal.meow()
    }
}

//? Check for property - us ing 'in' operator --> checks if a property/method exists on an object

function makeSound2(animal: Animal) {

    if ('bark' in animal) {
        animal.bark()
    } else {
        animal.meow()
    }
}

//? 'Truthy'/ 'Falsy' guard 

function printLength(str: string | null | undefined) {

    if (str) {
        console.log(str.length)
    } else {
        console.log('No string provided')
    }

}

// printLength('test');
// printLength(null);
// printLength(undefined);

//? 'instanceof' guard - returns true if the object is an instance of the class or created by the constructor function, and false otherwise.

// try {
//     throw new Error('Error mesage')
// } catch (error) {
//     if (error instanceof Error) {
//         console.log(error.message)
//     } else {
//         console.log('unknown error...')
//     }
// }

function checkInput(input: Date | string): string {

    if (input instanceof Date) {
        return input.getFullYear().toString()
    }
    return input;
}

const year = checkInput(new Date());
const randomDate = checkInput('2021-07-12');



