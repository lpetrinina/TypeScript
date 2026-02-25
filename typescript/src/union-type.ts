// * Union and Any Type

let tax: number | string = 10;
tax = 100;
tax = '$10';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = "success";
// requestStatus = 'random'; --> variable must be one of following types 'pending' | 'success' | 'error'

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

// ---------------------------------------------------------

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {

    if (book === 'Brave New World') {
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break;
    }
}

// ---------------------------------------------------------

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = "shipped";
orderStatus = "delivered";

let discount: number | string = 20;
discount = '20%';
