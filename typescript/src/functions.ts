// * Function params

function sayHi(name: string) {
    // console.log(`Hello there ${name}`);
}

sayHi('Peter');

// * Function returns

function calculateDiscount(price: number): number {

    const hasDiscount = true;

    if (hasDiscount) {
        return price;
    }

    return price * 0.9;
}

const finalPrice = calculateDiscount(15);
// console.log(finalPrice);

// ---------------------------------------------------------

const names: string[] = ['Ivan', 'Susan', 'Jane', 'Peter'];

function isNameInList(name: string): boolean {
    return names.includes(name);
};

let nameToCheck = 'Jane';

if (isNameInList(nameToCheck)) {
    // console.log(`${nameToCheck} is in the list.`);
} else {
    // console.log(`${nameToCheck} is not in the list.`);
}