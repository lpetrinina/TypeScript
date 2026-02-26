// * Type Alias

type StringOrNumber = string | number; // --> type alias can be union
type Theme = 'light' | 'dark';

let theme: Theme;

function setTheme(newTheme: Theme) {
    theme = newTheme;
}
setTheme('dark');


type User = {
    id: number;
    name: string;
    isActive: boolean
}

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
};
const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);

    return user;
}

// ---------------------------------------------------------------

type Employee = {
    id: number;
    name: string;
    department: string;
}

type Manager = {
    id: number,
    name: string,
    employees: Employee[];
}

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {

    if ('employees' in staff) {
        console.log(`${staff.name} is a manager of ${staff.employees.length} employees.`)
    } else {
        console.log(`${staff.name} is an employee in the ${staff.department}.`)
    }

}

const alice: Employee = { id: 841, name: 'Alice', department: 'Sales' };
const martin: Employee = { id: 867, name: 'Martin', department: 'HR' };

const jane: Manager = { id: 145, name: 'Jane', employees: [alice, martin] };

// printStaffDetails(jane);
// printStaffDetails(martin);

// * Intersection type

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number }; // --> includes all props of Book type alias plus the discount prop

const book1: Book = {
    id: 1,
    name: 'Cook with me, part 1',
    price: 25
};

const book2: Book = {
    id: 2,
    name: 'Cook with me, part 2',
    price: 30
};

const discountedBook: DiscountedBook = {
    id: 3,
    name: 'Gnomes vs. Goblins: The Ultimate Guide',
    price: 37,
    discount: 12,
};