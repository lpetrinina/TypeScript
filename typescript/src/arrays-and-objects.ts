// * Arrays

let prices: number[] = [100, 75, 42, 97];
// prices.push('11'); - is not allowed

let fruit: string[] = ['apple', 'orange'];

// let randomValues: [] = ['hello'] --> error, type is set to empty array

let names = ['Peter', 'Susan', 1];  // --> type inference does not stop adding different types in array;
let array: (string | boolean)[] = ['apple', true, 'orange', false];

let temperatures: number[] = [-1, -6, 1, 10, 18]; //--> can add only numbers to array
let colors: string[] = ['blue', 'black', 'green', 'yellow']; //--> can add only strings to array
let mixedArray: (number | string)[] = ['Sofia', 10, 'Burgas', 15]; //--> can add only numbers and strings to array

// * Objects

let car: { brand: string; year: number } = { brand: 'Reno', year: 2025 };
car.brand = 'BMW';


let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let nodebook = { title: 'book' };

// Optional property & readonly property
let items: { readonly title: string; cost?: number }[] = [book, pen, nodebook]
// ! items[0].title = 'new book'; --> cannot do this, because the title property is readonly

// ---------------------------------------------------------

let bike = { brand: 'Yamaha', year: 2019 };
let laptop = { brand: 'Asus', year: 2021, price: 2265 };

let products: { brand: string; year: number; price?: number }[] = [bike, laptop];