// * Declare an array using two syntaxes

// Array<T> === T[] 

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
// let array2: Array<number> = [1, 2, 3];
// let array3: Array<boolean> = [true, false, true];

// * Create Generic Function and Interface

function createString<T>(arg: T): T {
    return arg;
}

createString<string>('hello');
createString<boolean>(false);
createString<number>(587);

interface GenericInterface<T> {
    value: T;
    getValue: () => T;
}

const genericString: GenericInterface<string> = {
    value: 'Hello World',

    getValue() {
        return this.value;
    },
}

// console.log(genericString.getValue())

// ----------------------------------------------------------------------

async function someFunc(): Promise<string> {
    return 'Hello World'
}

const result = someFunc();

// ----------------------------------------------------------------------

function createArray<T>(length: number, value: T): Array<T> {

    let result: T[] = Array(length).fill(value);
    return result;
}

const stringArray = createArray<string>(3, 'hello');
const numberArray = createArray<number>(5, 100);

// -----------------------------------------------------------------------

function pair<T, U>(param1: T, param2: U): [T, U] {
    return [param1, param2]
}

let newPair = pair<string, number>('jane', 845279);
