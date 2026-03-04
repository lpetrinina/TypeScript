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

// * Generics - Type Constraints

//generic type can be either a number or a string
function processValue<T extends string | number>(value: T): T {
    console.log(value);
    return value;
}

// processValue('hello');
// processValue(874);

// -----------------------------------------------------------------------

type Car = {
    brand: string;
    model: string;
};

type Product = {
    name: string;
    price: number;
};

type Student = {
    name: string;
    age: number;
};

const car: Car = {
    brand: 'ford',
    model: 'mustang',
};

const product: Product = {
    name: 'shoes',
    price: 1.99,
};

const student: Student = {
    name: 'peter',
    age: 20,
};

// T must have at least the same properties and methods that Student has.
function printStudentName<T extends Student>(input: T): void {
    console.log(input.name)
}

// printStudentName(student);


// The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
function printName<T extends { name: string }>(input: T): void {
    console.log(input.name)
}

// printName2(product);
// printName2(student);

// * Generics - Default Value

interface StoreData<T = any> {
    data: T[];
}

const storeNumbers: StoreData<number> = {
    data: [41, 87],
};

const randomStuff: StoreData = {
    data: ['random', 1]
}