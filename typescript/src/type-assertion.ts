// * Type assertion

let value: any = 'this is a string';

let strLenght: number = (value as string).length;

type Bird = {
    name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
// let dog = dogObject as Bird; //! Be careful with type assertion

// ------------------------------------------------------------------------

const Status = {
    Pending: 'pending',
    Decline: 'decline'
} as const;

type Status = typeof Status[keyof typeof Status];

type User = {
    name: string;
    status: Status;
}

// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = 'pending';

const user: User = { name: 'John', status: statusValue as Status };

// * Type unknown -  a variable could be anything, but we need to perform some type-checking before we can use it.
// A safe alternative of type any

let unknownValue: unknown;

unknownValue = 'hello world';
unknownValue = [1, 3, 7, 4];
unknownValue = 42.2874;

if (typeof unknownValue === 'number') {
    unknownValue.toFixed(2)
}

function runSomeCode() {
    const random = Math.random();

    if (random < 0.5) {
        throw new Error('Error')
    } else {
        throw 'some error'
    }
}

try {
    runSomeCode();
} catch (error) {
    // Check if error is instance of the Error class
    if (error instanceof Error) {
        // console.log(error.message)
    } else {
        // console.log(error)
    }
}


// * Type never - represents the type of values that never occur

// let someValue: never = 0 //! cannot assign any value to type never

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme): void {

    if (theme === 'light') {
        console.log('light theme');
        return;
    }

    if (theme === 'dark') {
        console.log('dark theme');
        return;
    }

    // console.log(theme) --> here theme is type never because we have handled all of possible cases
}

// --------------------------------------------------------------------------

const Color = {
    Red: 'Red',
    Blue: 'Blue',

} as const;

type Color = typeof Color[keyof typeof Color];

function getColorName(color: Color) {

    switch (color) {
        case Color.Red:
            return 'Red';
        case Color.Blue:
            return 'Blue';
        default:
            // at build time
            let unexpectedColor: never = color;
            // at runtime
            throw new Error(`Unexpected color value: ${color}`)
    }
}

// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Red));

