// *Optional params

function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(1280, 25);


// * Default params

function calculateScore(initialScore: number, penaltyScore: number = 0): number {
    return initialScore - penaltyScore;
}

const scoreAfterPenalty = calculateScore(100, 8);
const scoreWithoutPenalty = calculateScore(210);

// * Rest params

function sum(message: string, ...nums: number[]): string {

    const doubled = nums.map((num) => num * 2);

    let total = doubled.reduce((acc, cur) => {
        return acc + cur;
    }, 0)

    return `${message} ${total}`
}
let result = sum('The total is:', 1, 2, 3, 4, 5);


// * Void function --> does not return a value

function logMessage(message: string): void {
    console.log(message);
}

// logMessage('Hello, TypeSctipt');

// --------------------------------------------------

function processInput(input: string | number) {

    // * Type guard - check the parameters at the runtime

    if (typeof input === 'number') {
        console.log(input * 2);
    } else {
        console.log(input.toUpperCase())
    }
}

// processInput(3);
// processInput('Peter');